import { UserRoleEnum, useTranslationV2 } from "ui";

export const useRoleOptions = () => {
    const t = useTranslationV2();
    return {
        options: [
            { value: "", label: t("none") },
            { value: `${UserRoleEnum.WERGONIC_ADMIN},${UserRoleEnum.ORG_ADMIN}`, label: t("Admin") },
            { value: UserRoleEnum.ERGONOMIST, label: t("Ergonomist") },
            { value: UserRoleEnum.WORKER, label: t("Worker") },
        ],
    };
};
