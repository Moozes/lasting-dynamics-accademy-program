import { ChangeEvent } from "react";

import { Avatar } from "@mui/material";

import {
    FormikOutlinedSelect,
    FormikOutlinedTextField,
    GalleryIcon,
    type HTMLDivProps,
    PencilIcon,
    useTranslationV2,
} from "ui";

import { COUNTRIES_SELECT_OPTIONS } from "@utils/index";

import { useIndustryOptions } from "./AddOrganizationForm.hooks";

type Props = HTMLDivProps & {
    avatarPreview: string;
    fileInputChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const AddOrganizationForm = ({ avatarPreview, fileInputChangeHandler, ...props }: Props) => {
    const t = useTranslationV2();
    const { industryOptions } = useIndustryOptions();
    return (
        <div {...props}>
            <div className="form-header">
                <div className="avatar-container">
                    <Avatar alt="organization logo" src={avatarPreview} className="avatar">
                        <GalleryIcon />
                    </Avatar>
                    <div className="file-input-container">
                        <PencilIcon className="icon" />
                        <input type="file" accept="image/*" onChange={fileInputChangeHandler} />
                    </div>
                </div>
                <div className="text">
                    <div className="title">{t("organization_management.create_a_new_organization")}</div>
                    <div className="description">
                        {t("organization_management.create_a_new_organization_description")}
                    </div>
                </div>
            </div>
            <FormikOutlinedTextField required className="input" id="name" name="name" label={t("formik.fields.name")} />
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
                options={industryOptions}
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
    );
};
