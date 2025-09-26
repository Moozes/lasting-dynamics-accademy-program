import { useTranslationV2 } from "ui";

type FormatedData = {
    text: string;
    commentInputName: string;
}[];

export const useFormatedData = (): FormatedData => {
    const t = useTranslationV2();
    return [
        {
            text: `${t("person")} 1`,
            commentInputName: "perceived_physical_discomfort_person_1_comment",
        },
        {
            text: `${t("person")} 2`,
            commentInputName: "perceived_physical_discomfort_person_2_comment",
        },
        {
            text: `${t("person")} 3`,
            commentInputName: "perceived_physical_discomfort_person_3_comment",
        },
        {
            text: `${t("person")} 4`,
            commentInputName: "perceived_physical_discomfort_person_4_comment",
        },
        {
            text: `${t("person")} 5`,
            commentInputName: "perceived_physical_discomfort_person_5_comment",
        },
    ];
};
