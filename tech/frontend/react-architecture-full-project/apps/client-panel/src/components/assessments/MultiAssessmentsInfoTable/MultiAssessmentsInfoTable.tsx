/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-array-index-key */
import { type HTMLDivProps, useTranslationV2 } from "ui";

import { Assessment } from "@app-types/index";
import { useMultiAssessmentsInfoTableFormatedData } from "@hooks/index";

type Props = HTMLDivProps & {
    assessmentsArray: Assessment[];
};

export const MultiAssessmentsInfoTable = ({ assessmentsArray, ...props }: Props) => {
    const t = useTranslationV2();
    const { formatedData } = useMultiAssessmentsInfoTableFormatedData(assessmentsArray);
    return (
        <div {...props}>
            <table>
                <thead>
                    <tr>
                        <th />
                        {assessmentsArray.map((elm, idx) => (
                            <th key={idx}>
                                {t("assessment")} {idx + 1}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {formatedData.map((elm, idx) => (
                        <tr key={idx}>
                            <td>{elm.property}</td>
                            {elm.values.map((value, valIdx) => (
                                <td key={valIdx}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
