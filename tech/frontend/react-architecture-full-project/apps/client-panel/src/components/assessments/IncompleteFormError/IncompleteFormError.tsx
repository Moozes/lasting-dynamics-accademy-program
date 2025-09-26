import { type HTMLDivProps, useTranslationV2 } from "ui";

type Props = HTMLDivProps & { errorsList: string[] };

export const IncompleteFormError = ({ errorsList, ...props }: Props) => {
    const t = useTranslationV2();
    return (
        <div {...props}>
            <div className="text">{t("formik.missing_required_fileds")}</div>
            <ul>
                {errorsList.map((elm) => (
                    <li key={elm}>{elm}</li>
                ))}
            </ul>
        </div>
    );
};
