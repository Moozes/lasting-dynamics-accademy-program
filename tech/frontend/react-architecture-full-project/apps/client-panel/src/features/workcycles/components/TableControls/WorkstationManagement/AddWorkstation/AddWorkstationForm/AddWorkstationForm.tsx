import { FormikOutlinedSelect, FormikOutlinedTextField, type HTMLDivProps, useTranslationV2 } from "ui";

type Props = {
    factoryOptions: { value: string; label: string }[];
    lineOptions: { value: string; label: string }[];
} & HTMLDivProps;

export const AddWorkstationForm = ({ factoryOptions, lineOptions, ...props }: Props) => {
    const t = useTranslationV2();

    return (
        <div {...props}>
            <div className="form-header">
                <div className="text">
                    <div className="title">{t("workcycles.add_workstation")}</div>
                </div>
            </div>
            <FormikOutlinedSelect
                required
                className="input"
                id="factory"
                name="factory"
                label={t("factory")}
                options={factoryOptions}
            />
            <FormikOutlinedSelect
                required
                className="input"
                id="line"
                name="line"
                label={t("line")}
                options={lineOptions}
            />
            <FormikOutlinedTextField
                required
                className="input"
                id="name"
                name="name"
                label={t("workstation")}
                placeholder={t("workcycles.enter_workstation")}
            />
        </div>
    );
};
