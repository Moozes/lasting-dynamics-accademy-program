import { FormikOutlinedSelect, FormikOutlinedTextField, type HTMLDivProps, useTranslationV2 } from "ui";

import { useManagedByOptions2 } from "@features/users/hooks";
import { useArmSelectRoles, useSexSelectRoles } from "@hooks/index";

type Props = HTMLDivProps;

export const Form2 = (props: Props) => {
    const t = useTranslationV2();
    const { ARMSELECTROLES } = useArmSelectRoles();
    const { SEXSELECTROLES } = useSexSelectRoles();
    const { options } = useManagedByOptions2();
    return (
        <div {...props}>
            <div className="flex-container">
                <FormikOutlinedTextField
                    className="input"
                    id="date_of_birth"
                    name="date_of_birth"
                    type="date"
                    label={t("Date_of_birth")}
                />
                <FormikOutlinedSelect
                    className="input"
                    id="gender"
                    name="gender"
                    label={t("Sex")}
                    options={SEXSELECTROLES}
                />
            </div>
            <div className="flex-container">
                <FormikOutlinedSelect
                    className="input"
                    id="dominant_arm"
                    name="dominant_arm"
                    label={t("Dominant_arm")}
                    options={ARMSELECTROLES}
                />
                <FormikOutlinedTextField className="input" id="weight" name="weight" type="text" label={t("Weight")} />
            </div>

            <div className="flex-container">
                <FormikOutlinedTextField
                    className="input"
                    id="resting_heart_rate"
                    name="resting_heart_rate"
                    type="text"
                    label={t("Resting_heart_rate")}
                />
                <FormikOutlinedSelect
                    className="input"
                    id="consultant_id"
                    name="consultant_id"
                    label={t("Managed_by")}
                    options={options}
                />
            </div>
        </div>
    );
};
