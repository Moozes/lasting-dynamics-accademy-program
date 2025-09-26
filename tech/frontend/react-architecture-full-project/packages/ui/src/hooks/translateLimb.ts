import { useTranslationV2 } from "../i18n/hooks/useTranslation";
import { LimbsEnum } from "../types";

export const useTranslateLimb = () => {
    const t = useTranslationV2();
    const formatStr = (v: string) => v.toLowerCase().replace(/\s+/g, "").replace(/[()/]/g, "");
    return {
        translateLimb: (title: string) => {
            switch (formatStr(title)) {
                case formatStr(LimbsEnum.trunk):
                    return t("trunk");
                    break;
                case formatStr(LimbsEnum.leftArm):
                    return t("left_arm");
                    break;
                case formatStr(LimbsEnum.rightArm):
                    return t("right_arm");
                    break;
                case formatStr(LimbsEnum.chestStrap):
                    return t("chest_strap");
                    break;
                case formatStr(LimbsEnum.forearm):
                    return t("forearm");
                    break;
                case formatStr(LimbsEnum.hand):
                    return t("hand");
                    break;
                case formatStr(LimbsEnum.head):
                    return t("head");
                    break;
                case formatStr(LimbsEnum.wrist):
                    return t("wrist");
                    break;
                case formatStr(LimbsEnum.headForwardBackwardBending):
                    return t("head_forward_backward_bending");
                case formatStr(LimbsEnum.trunkForwardBackwardBending):
                    return t("trunk_forward_backward_bending");
                case formatStr(LimbsEnum.rightArmElevationAngle):
                    return t("right_arm_elevation_angle");
                case formatStr(LimbsEnum.leftArmElevationAngle):
                    return t("left_arm_elevation_angle");
                default:
                    return "translation error";
            }
        },
    };
};
