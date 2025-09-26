import { Text, View } from "@react-pdf/renderer";

const generateHash = (str: string) => {
    return btoa(encodeURIComponent(str)).substring(0, 12);
};

export const formatAiReportForPdf = (response: string): JSX.Element[] => {
    const boldRegex = /\*\*(.*?)\*\*/g;
    const lines = response.split("\n");

    const elements: JSX.Element[] = [];
    let currentList: "none" | "ol" | "ul" = "none";

    lines.forEach((line) => {
        const lineHash = generateHash(line.trim());

        // Split the line by bold markers and format each part
        const formattedLine = line.split(boldRegex).map((part, i) =>
            i % 2 === 0 ? (
                <Text key={`${lineHash}-${generateHash(part)}`}>{part}</Text>
            ) : (
                <Text key={`${lineHash}-${generateHash(part)}`} style={{ fontWeight: "bold" }}>
                    {part}
                </Text>
            )
        );

        // Handle numbered lists
        if (/^\d+\.\s/.test(line)) {
            if (currentList !== "ol") {
                elements.push(<View key={`start-ol-${lineHash}`} style={{ marginVertical: 4 }} />);
                currentList = "ol";
            }
            elements.push(
                <Text key={`ol-item-${lineHash}`} style={{ marginLeft: 20 }}>
                    {formattedLine}
                </Text>
            );
        }
        // Handle bullet lists
        else if (/^\*\s/.test(line)) {
            const cleanedLine = line.replace(/^\*\s/, "");
            if (currentList !== "ul") {
                elements.push(<View key={`start-ul-${lineHash}`} style={{ marginVertical: 4 }} />);
                currentList = "ul";
            }
            elements.push(
                <Text key={`ul-item-${lineHash}`} style={{ marginLeft: 20 }}>
                    •{" "}
                    {cleanedLine.split(boldRegex).map((part, i) =>
                        i % 2 === 0 ? (
                            <Text key={`${lineHash}-${generateHash(part)}`}>{part}</Text>
                        ) : (
                            <Text key={`${lineHash}-${generateHash(part)}`} style={{ fontWeight: "bold" }}>
                                {part}
                            </Text>
                        )
                    )}
                </Text>
            );
        }
        // Handle sub-bullet lists (indented bullets)
        else if (/^\s*\*\s/.test(line)) {
            const cleanedLine = line.replace(/^\s*\*\s/, "");
            if (currentList !== "ul") {
                elements.push(<View key={`start-sub-ul-${lineHash}`} style={{ marginVertical: 4 }} />);
                currentList = "ul";
            }
            elements.push(
                <Text key={`subul-item-${lineHash}`} style={{ marginLeft: 40 }}>
                    •{" "}
                    {cleanedLine.split(boldRegex).map((part, i) =>
                        i % 2 === 0 ? (
                            <Text key={`${lineHash}-${generateHash(part)}`}>{part}</Text>
                        ) : (
                            <Text key={`${lineHash}-${generateHash(part)}`} style={{ fontWeight: "bold" }}>
                                {part}
                            </Text>
                        )
                    )}
                </Text>
            );
        }
        // Handle plain text
        else {
            if (currentList !== "none") {
                elements.push(<View key={`end-list-${lineHash}`} />);
                currentList = "none";
            }
            elements.push(
                <Text key={`line-div-${lineHash}`} style={{ marginVertical: 2 }}>
                    {formattedLine}
                </Text>
            );
        }
    });

    // Ensure all lists are closed properly
    if (currentList !== "none") {
        elements.push(<View key="end-list-final" />);
    }

    return elements;
};
