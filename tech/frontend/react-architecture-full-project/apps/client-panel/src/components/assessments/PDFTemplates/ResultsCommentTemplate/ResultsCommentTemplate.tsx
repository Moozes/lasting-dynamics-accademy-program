import { Text, View } from "@react-pdf/renderer";

import { useTranslationV2 } from "ui";

import { Assessment } from "@app-types/index";

import { styles } from "./ResultsCommentTemplate.styles";

type Props = {
    assessment: Assessment;
};

export const ResultsCommentTemplate = ({ assessment }: Props) => {
    const t = useTranslationV2();
    return (
        <View>
            {assessment.results_comment ? (
                <>
                    <Text style={[styles.title]}>{t("results_comment")}</Text>
                    <Text style={[styles.text]}>{assessment.results_comment}</Text>
                </>
            ) : null}
        </View>
    );
};
