import { useAtom } from "jotai";

import { UserRoleEnum } from "ui";

import { authAtom } from "@atoms/index";

export const useVerifyWritePermission = () => {
    const [auth] = useAtom(authAtom);
    const hasChangePermissionRoles = [UserRoleEnum.ORG_ADMIN, UserRoleEnum.WERGONIC_ADMIN];
    const role = auth.wergonicUser?.role || "worker";
    const hasChangePermission = hasChangePermissionRoles.includes(role as any);
    return hasChangePermission;
};
