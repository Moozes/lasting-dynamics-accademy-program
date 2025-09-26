import { FormikOutlinedSelect, FormikOutlinedTextField, type HTMLDivProps, useTranslationV2 } from "ui";

type Props = {
    factoryOptions: { value: string; label: string }[];
    lineOptions: { value: string; label: string }[];
    workstationsOptions: { value: string; label: string }[];
} & HTMLDivProps;

export const AddModelForm = ({ factoryOptions, lineOptions, workstationsOptions, ...props }: Props) => {
    const t = useTranslationV2();

    return (
        <div {...props}>
            <div className="form-header">
                <div className="text">
                    <div className="title">{t("workcycles.add_model")}</div>
                </div>
            </div>
            <FormikOutlinedSelect
                required
                className="input"
                id="factory"
                name="factory"
                label={t("factory")}
                options={factoryOptions}
                placeholder={t("workcycles.select_factory")}
            />
            <FormikOutlinedSelect
                required
                className="input"
                id="line"
                name="line"
                label={t("line")}
                options={lineOptions}
                placeholder={t("workcycles.select_line")}
            />
            <FormikOutlinedSelect
                required
                className="input"
                id="workstation"
                name="workstation"
                label={t("workstation")}
                options={workstationsOptions}
                placeholder={t("workcycles.select_workstation")}
            />
            <FormikOutlinedTextField
                required
                className="input"
                id="name"
                name="name"
                label={t("task_model")}
                placeholder={t("workcycles.enter_model")}
            />
        </div>
    );
};
