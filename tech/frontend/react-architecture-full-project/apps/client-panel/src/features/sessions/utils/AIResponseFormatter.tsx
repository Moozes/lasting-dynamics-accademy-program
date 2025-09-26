import React, { ReactNode } from "react";

const generateHash = (str: string) => {
    return btoa(encodeURIComponent(str)).substring(0, 12);
};

const formatText = (text: string): ReactNode[] => {
    const boldRegex = /\*\*(.*?)\*\*/g;
    return text
        .split(boldRegex)
        .map((part, i) => (i % 2 === 0 ? part : <strong key={`bold-${generateHash(part)}`}>{part}</strong>));
};

export const formatAiResponse = (response: string): ReactNode[] => {
    if (!response) {
        return [];
    }

    // Remove the initial '##' if they exist at the beginning of the response
    let formattedResponse = response;
    if (formattedResponse.startsWith("## ")) {
        formattedResponse = formattedResponse.slice(3);
    }

    const normalizedResponse = formattedResponse.replace(/\r\n?/g, "\n").replace(/[^\x20-\x7E\n]+/g, "");

    const lines = normalizedResponse.split("\n");

    let inNumberedList = false;
    let inBulletList = false;
    let inSubBulletList = false;
    const elements: ReactNode[] = [];

    lines.forEach((line) => {
        const lineHash = generateHash(line);

        if (line.trim() === "") {
            elements.push(<div key={`break-${lineHash}`} style={{ marginBottom: "1em" }} />);
            return;
        }

        const formattedLine = <React.Fragment key={`line-${lineHash}`}>{formatText(line)}</React.Fragment>;

        if (/^\d+\.\s/.test(line)) {
            if (!inNumberedList) {
                if (inBulletList) {
                    elements.push(<ul key={`end-ul-${lineHash}`} />);
                    inBulletList = false;
                }
                if (inSubBulletList) {
                    elements.push(<ul key={`end-subul-${lineHash}`} />);
                    inSubBulletList = false;
                }
                elements.push(
                    <ol key={`start-ol-${lineHash}`}>
                        <li key={`ol-item-${lineHash}`}>{formattedLine}</li>
                    </ol>
                );
                inNumberedList = true;
            } else {
                elements.push(<li key={`ol-item-${lineHash}`}>{formattedLine}</li>);
            }
        } else if (/^\*\s/.test(line)) {
            const listItemContent = formatText(line.replace(/^\*\s/, ""));
            if (!inBulletList) {
                if (inNumberedList) {
                    elements.push(<ol key={`end-ol-${lineHash}`} />);
                    inNumberedList = false;
                }
                if (inSubBulletList) {
                    elements.push(<ul key={`end-subul-${lineHash}`} />);
                    inSubBulletList = false;
                }
                elements.push(<ul key={`start-ul-${lineHash}`} />);
                inBulletList = true;
            }
            elements.push(
                <li key={`ul-item-${lineHash}`} style={{ marginLeft: "20px" }}>
                    {listItemContent}
                </li>
            );
        } else if (/^\s*\*\s/.test(line)) {
            const listItemContent = formatText(line.replace(/^\s*\*\s/, ""));
            if (!inSubBulletList) {
                if (inNumberedList) {
                    elements.push(<ol key={`end-ol-${lineHash}`} />);
                    inNumberedList = false;
                }
                if (inBulletList) {
                    elements.push(<ul key={`end-ul-${lineHash}`} />);
                    inBulletList = false;
                }
                elements.push(<ul key={`start-subul-${lineHash}`} />);
                inSubBulletList = true;
            }
            elements.push(
                <li key={`subul-item-${lineHash}`} style={{ marginLeft: "40px" }}>
                    {listItemContent}
                </li>
            );
        } else {
            if (inNumberedList) {
                elements.push(<ol key={`end-ol-${lineHash}`} />);
                inNumberedList = false;
            }
            if (inBulletList) {
                elements.push(<ul key={`end-ul-${lineHash}`} />);
                inBulletList = false;
            }
            if (inSubBulletList) {
                elements.push(<ul key={`end-subul-${lineHash}`} />);
                inSubBulletList = false;
            }
            elements.push(<div key={`line-div-${lineHash}`}>{formattedLine}</div>);
        }
    });

    // Ensure all lists are properly closed
    if (inNumberedList) {
        elements.push(<ol key="end-ol" />);
    }
    if (inBulletList) {
        elements.push(<ul key="end-ul" />);
    }
    if (inSubBulletList) {
        elements.push(<ul key="end-subul" />);
    }

    return elements;
};
