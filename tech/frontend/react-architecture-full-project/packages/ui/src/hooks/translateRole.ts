import { useTranslationV2 } from "../i18n/hooks/useTranslation";
import { UserRoleEnum } from "../types";

export const useTrasnlateUserRole = () => {
    const t = useTranslationV2();
    return {
        trasnlateUserRole: (role: string | undefined) => {
            switch (role) {
                case UserRoleEnum.WERGONIC_ADMIN:
                    return t("Admin");
                    break;
                case UserRoleEnum.ORG_ADMIN:
                    return t("Admin");
                    break;
                case UserRoleEnum.ERGONOMIST:
                    return t("Ergonomist");
                    break;
                case UserRoleEnum.WORKER:
                    return t("Worker");
                    break;
                default:
                    return "Translation error";
            }
        },
    };
};
