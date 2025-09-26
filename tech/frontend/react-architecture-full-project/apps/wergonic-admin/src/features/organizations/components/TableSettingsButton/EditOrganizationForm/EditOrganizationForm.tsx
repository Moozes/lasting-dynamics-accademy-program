import { Dispatch, SetStateAction } from "react";
import { Row } from "react-table";
import { Form, Formik } from "formik";

import Avatar from "@mui/material/Avatar";

import {
    Btn,
    FormikOutlinedSelect,
    FormikOutlinedTextField,
    GalleryIcon,
    type HTMLDivProps,
    PencilIcon,
    useTranslationV2,
} from "ui";

import { TOrganization } from "@app-types/index";
import { COUNTRIES_SELECT_OPTIONS } from "@utils/index";

import { useEditOrganizationForm } from "./EditOrganizationForm.hooks";

type Props = HTMLDivProps & {
    setModalOpen: Dispatch<SetStateAction<boolean>>;
    row: Row<TOrganization>;
};

export const EditOrganizationForm = ({ setModalOpen, row, ...props }: Props) => {
    const t = useTranslationV2();
    const { initialValues, validationSchema, avatarPreview, fileInputChangeHandler, onSubmit, isLoading } =
        useEditOrganizationForm(row, setModalOpen);
    const organizationAvatarURL = row.original.logo;
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form>
                <div {...props}>
                    <div className="form-content">
                        <div className="form-header">
                            <div className="avatar-container">
                                <Avatar
                                    alt="organization logo"
                                    src={avatarPreview || organizationAvatarURL || ""}
                                    className="avatar"
                                >
                                    <GalleryIcon />
                                </Avatar>
                                <div className="file-input-container">
                                    <PencilIcon className="icon" />
                                    <input type="file" accept="image/*" onChange={fileInputChangeHandler} />
                                </div>
                            </div>
                            <div className="text">
                                <div className="title">{t("organization_management.edit_organization_details")}</div>
                                <div className="description">
                                    {t("organization_management.edit_organization_details_description")}
                                </div>
                            </div>
                        </div>
                        <FormikOutlinedTextField
                            required
                            className="input"
                            id="name"
                            name="name"
                            label={t("formik.fields.name")}
                        />
                        <FormikOutlinedSelect
                            required
                            className="input"
                            id="country"
                            name="country"
                            label={t("formik.fields.country")}
                            options={COUNTRIES_SELECT_OPTIONS}
                        />
                        <FormikOutlinedSelect
                            required
                            className="input"
                            id="type"
                            name="type"
                            label={t("formik.fields.type")}
                            options={[
                                { value: "", label: "None" },
                                { value: "dummy values", label: "Dummy values" },
                            ]}
                        />
                        <FormikOutlinedSelect
                            required
                            className="input"
                            id="industry"
                            name="industry"
                            label={t("formik.fields.industry")}
                            options={[
                                { value: "", label: "None" },
                                { value: "dummy values", label: "Dummy values" },
                            ]}
                        />
                        <FormikOutlinedTextField required className="input" id="cnr" name="cnr" label="CNR" />

                        <FormikOutlinedTextField
                            required
                            type="number"
                            className="input"
                            id="max_number_workers"
                            name="max_number_workers"
                            label={t("formik.fields.max_number_workers")}
                        />
                        <FormikOutlinedTextField
                            required
                            type="number"
                            className="input"
                            id="max_number_admins"
                            name="max_number_admins"
                            label={t("formik.fields.max_number_admins")}
                        />
                        <FormikOutlinedTextField
                            required
                            type="number"
                            className="input"
                            id="max_number_sessions_month"
                            name="max_number_sessions_month"
                            label={t("formik.fields.max_number_sessions_month")}
                        />
                        <FormikOutlinedTextField
                            required
                            type="number"
                            className="input"
                            id="max_number_assessments_month"
                            name="max_number_assessments_month"
                            label={t("formik.fields.max_number_assessments_month")}
                        />
                    </div>
                    <div className="form-actions">
                        <Btn
                            className="btn"
                            variant="secondary-contained"
                            onClick={() => setModalOpen(false)}
                            type="button"
                        >
                            {t("Cancel")}
                        </Btn>
                        <Btn
                            className="btn"
                            variant="primary-contained"
                            type="submit"
                            disabled={isLoading}
                            loading={isLoading}
                        >
                            {t("Edit")}
                        </Btn>
                    </div>
                </div>
            </Form>
        </Formik>
    );
};
