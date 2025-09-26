import { FormikOutlinedSelect, FormikOutlinedTextField, type HTMLDivProps, useTranslationV2 } from "ui";

type Props = HTMLDivProps & {
    factoryOptions: Array<{ value: number; label: string }>;
};

export const AddLineForm = ({ factoryOptions, ...props }: Props) => {
    const t = useTranslationV2();

    const selectOptions = factoryOptions.map((option) => ({
        value: option.value.toString(),
        label: option.label,
    }));

    return (
        <div {...props}>
            <div className="form-header">
                <div className="text">
                    <div className="title">{t("workcycles.add_line")}</div>
                </div>
            </div>
            <FormikOutlinedSelect
                required
                className="input"
                id="factory"
                name="factory"
                label={t("factory")}
                options={selectOptions}
            />
            <FormikOutlinedTextField
                required
                className="input"
                id="name"
                name="name"
                label={t("line")}
                placeholder={t("workcycles.enter_line")}
            />
        </div>
    );
};
