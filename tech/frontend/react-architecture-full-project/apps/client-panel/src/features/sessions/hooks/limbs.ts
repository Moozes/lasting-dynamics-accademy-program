import { useTranslationV2 } from "ui";

import { LimbsCamelCaseEnum } from "../types";

export const useLimbsArray = () => {
    const t = useTranslationV2();
    return {
        limbsArray: [
            {
                limbName: t("left_arm"),
                limbObjectKeyName: LimbsCamelCaseEnum.leftArm,
            },
            {
                limbName: t("right_arm"),
                limbObjectKeyName: LimbsCamelCaseEnum.rightArm,
            },
            {
                limbName: t("chest_strap"),
                limbObjectKeyName: LimbsCamelCaseEnum.chestStrap,
            },
            {
                limbName: t("trunk"),
                limbObjectKeyName: LimbsCamelCaseEnum.trunk,
            },
        ],
    };
};
