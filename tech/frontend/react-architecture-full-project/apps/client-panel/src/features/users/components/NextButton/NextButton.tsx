import { DispatchWithoutAction, MouseEvent } from "react";
import { useFormikContext } from "formik";

import { SxProps, Theme } from "@mui/material";

import { Btn, useTranslationV2 } from "ui";

interface NextButtonProps {
    hasCreatePermission: boolean;
    setShowProfileModel: DispatchWithoutAction;
    sx?: SxProps<Theme>;
}

export const NextButton: React.FC<NextButtonProps> = ({ hasCreatePermission, setShowProfileModel }) => {
    const t = useTranslationV2();
    const formik = useFormikContext();

    const navigateNext = async (event: MouseEvent<HTMLButtonElement>) => {
        const errors = await formik.validateForm();
        const allFieldsValid = Object.keys(errors).length === 0;
        if (allFieldsValid && formik.isValid) {
            event.preventDefault();
            setShowProfileModel();
        }
    };

    return (
        <Btn disabled={!hasCreatePermission} variant="primary-contained" onClick={navigateNext} type="button">
            {t("Next")}
        </Btn>
    );
};
