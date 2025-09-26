import { useTranslationV2 } from "ui";

export const useIndustryOptions = () => {
    const t = useTranslationV2();
    return {
        industryOptions: [
            { value: "A", label: t("organization_management.isic_industries.A") },
            { value: "B", label: t("organization_management.isic_industries.B") },
            { value: "C", label: t("organization_management.isic_industries.C") },
            { value: "D", label: t("organization_management.isic_industries.D") },
            { value: "E", label: t("organization_management.isic_industries.E") },
            { value: "F", label: t("organization_management.isic_industries.F") },
            { value: "G", label: t("organization_management.isic_industries.G") },
            { value: "H", label: t("organization_management.isic_industries.H") },
            { value: "I", label: t("organization_management.isic_industries.I") },
            { value: "J", label: t("organization_management.isic_industries.J") },
            { value: "K", label: t("organization_management.isic_industries.K") },
            { value: "L", label: t("organization_management.isic_industries.L") },
            { value: "M", label: t("organization_management.isic_industries.M") },
            { value: "N", label: t("organization_management.isic_industries.N") },
            { value: "O", label: t("organization_management.isic_industries.O") },
            { value: "P", label: t("organization_management.isic_industries.P") },
            { value: "Q", label: t("organization_management.isic_industries.Q") },
            { value: "R", label: t("organization_management.isic_industries.R") },
            { value: "S", label: t("organization_management.isic_industries.S") },
            { value: "T", label: t("organization_management.isic_industries.T") },
            { value: "U", label: t("organization_management.isic_industries.U") },
        ],
    };
};
