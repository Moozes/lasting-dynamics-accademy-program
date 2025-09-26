import { FormikOutlinedTextField, type HTMLDivProps, useTranslationV2 } from "ui";

type Props = HTMLDivProps;

export const AddFactoryForm = ({ ...props }: Props) => {
    const t = useTranslationV2();

    return (
        <div {...props}>
            <div className="form-header">
                <div className="text">
                    <div className="title">{t("workcycles.add_factory")}</div>
                </div>
            </div>
            <FormikOutlinedTextField
                required
                className="input"
                id="name"
                name="name"
                label={t("factory")}
                placeholder={t("workcycles.enter_factory")}
            />
        </div>
    );
};
