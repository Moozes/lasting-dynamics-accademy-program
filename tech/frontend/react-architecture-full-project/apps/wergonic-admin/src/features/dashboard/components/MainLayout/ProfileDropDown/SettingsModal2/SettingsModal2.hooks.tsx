import { useMutation } from "@tanstack/react-query";
import { FormikValues } from "formik";
import { useAtom } from "jotai";
import { useSnackbar } from "notistack";
import * as Yup from "yup";

import { useTranslationV2 } from "ui";

import { TOrganization } from "@app-types/index";
import { authAtom } from "@atoms/index";
import { updateOrganization } from "@queries/index";

export const useGetAiEngineSettingsForm = (organization?: { ai_engine: string }) => {
    const t = useTranslationV2();

    const initialValues = {
        aiEngine: organization?.ai_engine || "",
    };

    const validationSchema = Yup.object().shape({
        aiEngine: Yup.string().required(t<string>("formik.field_is_required", { field: t("formik.fields.ai_engine") })),
    });

    return { initialValues, validationSchema };
};

export const useUpdateOrganizationMutation = (onSuccessCallback: (data: TOrganization) => void) => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();

    return useMutation({
        mutationFn: (data: { id: string; formData: FormData }) => updateOrganization(data),
        onSuccess: (response: { data: TOrganization }) => {
            enqueueSnackbar(t("queries.entity_created_successfully", { entity: t("queries.entities.organization") }));
            onSuccessCallback(response.data);
        },
        onError: (error: any) => {
            const message = error.response?.data?.detail || t("queries.something_went_wrong");
            enqueueSnackbar(message, { severity: "error" });
        },
    });
};

export const useForm = (toggleDialog: () => void, setTab: (tab: number) => void) => {
    const [authState, setAuthState] = useAtom(authAtom);
    const organizationId = authState.wergonicUser?.organization.id || "";
    const organizationDetails = authState.wergonicUser?.organization;
    const { initialValues, validationSchema } = useGetAiEngineSettingsForm(organizationDetails);

    const onSuccessCallback = (data: TOrganization) => {
        if (setAuthState && setTab && toggleDialog) {
            setAuthState((auth: any) => ({
                ...auth,
                wergonicUser: {
                    ...auth.wergonicUser,
                    organization: {
                        ...auth.wergonicUser.organization,
                        ...data,
                    },
                },
            }));
            setTab(0);
            toggleDialog();
        }
    };

    const { mutate, isLoading: isUpdating } = useUpdateOrganizationMutation(onSuccessCallback);

    const handleSubmit = (values: FormikValues) => {
        const formData = new FormData();
        formData.append("ai_engine", values.aiEngine);

        mutate({ id: organizationId, formData });
    };

    return {
        initialValues,
        validationSchema,
        handleSubmit,
        isUpdating,
    };
};
