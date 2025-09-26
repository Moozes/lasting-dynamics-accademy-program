import { UserRoleEnum, useTranslationV2 } from "ui";

export const useSelectRoles = () => {
    const t = useTranslationV2();
    return {
        SELECTROLES: [
            { value: UserRoleEnum.ERGONOMIST, label: t("Ergonomist") },
            { value: UserRoleEnum.ORG_ADMIN, label: t("Admin") },
        ],
        SELECTROLESWORKER: [{ value: UserRoleEnum.WORKER, label: t("Worker") }],
    };
};
