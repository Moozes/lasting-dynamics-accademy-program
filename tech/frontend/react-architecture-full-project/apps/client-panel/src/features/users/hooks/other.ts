import { useSearchParams } from "react-router-dom";
import { add } from "date-fns";
import { useAtom } from "jotai";
import * as yup from "yup";

import { UserRoleEnum, useTranslationV2 } from "ui";

import { WergonicUser } from "@app-types/index";
import { authAtom } from "@atoms/index";
import { useGetAdminsAndErgonomists, useGetUsersByRoleQuery } from "@features/users/queries";

// useGetUsersByRoleQuery failure is not handled
export const UseGetUsersByRole = (URLPageNumber: string, URLPageSize: string, URLRole: string) => {
    const { data } = useGetUsersByRoleQuery(URLPageNumber, URLPageSize, URLRole);
    const response = data?.data.results ?? [];
    const SelectUsers = [];
    for (let index = 0; index < response?.length; index++) {
        const label = `${response[index].first_name ?? ""} ${response[index].last_name ?? ""}`;
        const element = {
            /* eslint-disable radix */
            value: response[index].id ?? "0",
            label,
        };
        SelectUsers.push(element);
    }
    return SelectUsers;
};

export const useManagedByOptions = () => {
    const t = useTranslationV2();
    const [auth] = useAtom(authAtom);
    const currentWergonicUserId = auth.wergonicUser?.id;
    let ergonomists = UseGetUsersByRole("1", "20", UserRoleEnum.ERGONOMIST);
    let admins = UseGetUsersByRole("1", "20", UserRoleEnum.ORG_ADMIN);
    // filter out current wergonic user from list of ergonomists and admins
    ergonomists = ergonomists.filter((user) => {
        return `${user.value}` !== `${currentWergonicUserId}`;
    });
    admins = admins.filter((user) => {
        return `${user.value}` !== `${currentWergonicUserId}`;
    });
    const mySelfSelectInputOption = {
        value: currentWergonicUserId!,
        label: t("myself"),
    };

    return {
        options: [mySelfSelectInputOption, ...ergonomists, ...admins],
    };
};

export const useManagedByOptions2 = () => {
    const t = useTranslationV2();
    const [auth] = useAtom(authAtom);
    const currentWergonicUserId = auth.wergonicUser?.id;
    const mySelfOption = {
        value: currentWergonicUserId!,
        label: t("myself"),
    };

    const options = [mySelfOption];

    const { data, isLoading, isError } = useGetAdminsAndErgonomists();

    if (isLoading) {
        const loadingOption = {
            value: "",
            label: t("loading"),
        };
        options.push(loadingOption);
    } else if (isError) {
        const errorOption = {
            value: "",
            label: t("users_management.error_fetching_admins_and_ergonomists"),
        };
        options.push(errorOption);
    } else {
        const adminsAndErgonomists = data.data
            .filter((elm) => elm.id !== currentWergonicUserId)
            .map((elm) => ({
                label: `${elm.first_name} ${elm.last_name}`,
                value: elm.id,
            }));
        options.push(...adminsAndErgonomists);
    }

    return {
        options,
    };
};

export const useUsersQueryKey = () => {
    const [searchParams] = useSearchParams();
    return ["users", searchParams.get("page"), searchParams.get("page_size")];
};

export const useVerifyDeactivatePermission = (selectedUser: WergonicUser) => {
    const [auth] = useAtom(authAtom);
    const hasChangePermissionRoles = [UserRoleEnum.ORG_ADMIN, UserRoleEnum.WERGONIC_ADMIN];
    const role = auth.wergonicUser?.role || "worker";
    const hasChangePermission = hasChangePermissionRoles.includes(role as any);
    const ergonomistPermission = role === UserRoleEnum.ERGONOMIST && selectedUser.role === UserRoleEnum.WORKER;
    return hasChangePermission || ergonomistPermission;
};

export const useUserForm1Schema = () => {
    const t = useTranslationV2();
    return {
        form1Schema: yup.object({
            send_email_to_creator: yup.boolean(),
            email: yup.string().email(t("formik.email_format_error")).required(t("formik.email_required_error")),
            first_name: yup
                .string()
                .max(150, `${t("First Name")} ${t("is_too_long")}`)
                .required(`${t("First Name")} ${t("is_required")}`),
            last_name: yup
                .string()
                .max(150, `${t("Last Name")} ${t("is_too_long")}`)
                .required(`${t("Last Name")} ${t("is_required")}`),
            personal_number: yup
                .string()
                .max(150, `${t("Phone")} ${t("is_too_long")}`)
                .matches(
                    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
                    t("formik.Phone_number_format_error") as string
                ),
            unit: yup.string().max(150, `${t("Unit")} ${t("is_too_long")}`),
            role: yup
                .string()
                .oneOf([UserRoleEnum.ORG_ADMIN, UserRoleEnum.ERGONOMIST, UserRoleEnum.WORKER])
                .required(`${t("Role")} ${t("is_required")}`),
        }),
    };
};

export const useUserForm2Schema = () => {
    const t = useTranslationV2();
    return {
        form2Schema: yup.object({
            send_email_to_creator: yup.boolean(),
            weight: yup
                .string()
                .max(150, `${t("weight")} ${t("is_too_long")}`)
                .matches(/^(\d+(?:\.\d+)?)$/, t("formik.weight_format_error") as string),
            resting_heart_rate: yup
                .string()
                .max(150, `${t("resting heart rate")} ${t("is_too_long")}`)
                .matches(/^(\d+(?:\.\d+)?)$/, t("formik.heart_rate_format_error") as string),
            dominant_arm: yup.string().max(150, `${t("dominant arm")} ${t("is_too_long")}`),
            date_of_birth: yup.date().max(add(new Date(), { years: 10 }), `${t("formik.max_date_exceeded")}`),
            gender: yup.string().oneOf(["MALE", "FEMALE", "OTHER"]),
            consultant_id: yup.number().min(0),
        }),
    };
};
