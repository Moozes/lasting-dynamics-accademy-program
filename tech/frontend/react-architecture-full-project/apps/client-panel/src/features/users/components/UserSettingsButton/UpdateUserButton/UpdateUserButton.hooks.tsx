import { UserRoleEnum, useTranslationV2 } from "ui";

import { WergonicUser } from "@app-types/index";
import { useAddNewUserSchema } from "@features/users/schemas";

export const useUpdateUserForm = (selectedUser: WergonicUser) => {
    let consultant_id = 0;
    if (selectedUser.profile) {
        if (selectedUser.profile[0]) {
            if (selectedUser.profile[0].consultant) consultant_id = parseInt(selectedUser.profile[0].consultant.id, 10);
        }
    }
    const updateUserInitialValues = {
        email: selectedUser.email,
        first_name: selectedUser.first_name,
        last_name: selectedUser.last_name,
        role: selectedUser.role,
        personal_number: selectedUser.personal_number,
        unit: selectedUser.unit,
        weight: selectedUser.profile && selectedUser.profile[0] ? selectedUser.profile[0].weight : "",
        resting_heart_rate:
            selectedUser.profile && selectedUser.profile[0] ? selectedUser.profile[0].resting_heart_rate : "",
        dominant_arm: selectedUser.profile && selectedUser.profile[0] ? selectedUser.profile[0].dominant_arm : "",
        date_of_birth: selectedUser.profile && selectedUser.profile[0] ? selectedUser.profile[0].date_of_birth : "",
        gender: selectedUser.profile && selectedUser.profile[0] ? selectedUser.profile[0].gender : "",
        consultant_id,
    };
    const { AddNewUserSchema: updateUserValidationSchema } = useAddNewUserSchema();
    return { updateUserInitialValues, updateUserValidationSchema };
};

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
