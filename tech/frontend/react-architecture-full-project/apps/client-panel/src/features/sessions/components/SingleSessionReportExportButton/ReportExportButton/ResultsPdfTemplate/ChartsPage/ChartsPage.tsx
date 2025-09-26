import { Image, Text, View } from "@react-pdf/renderer";

import { useTranslationV2 } from "ui";

import { styles } from "../styles";

interface ChartsPageProps {
    postureChartImage?: string | null;
    speedOfMovementChartImage?: string | null;
}

export const ChartsPage: React.FC<ChartsPageProps> = ({ postureChartImage, speedOfMovementChartImage }) => {
    const t = useTranslationV2();

    return (
        <View style={styles.pagePadding}>
            {postureChartImage && (
                <>
                    <Text style={styles.title}>{t("Posture Chart")}</Text>
                    <Image src={postureChartImage} style={styles.chartImage} />
                </>
            )}
            {speedOfMovementChartImage && (
                <>
                    <Text style={styles.title}>{t("Speed of Movement Chart")}</Text>
                    <Image src={speedOfMovementChartImage} style={styles.chartImage} />
                </>
            )}
        </View>
    );
};
