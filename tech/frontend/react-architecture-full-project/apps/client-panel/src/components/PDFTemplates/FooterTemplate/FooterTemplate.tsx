import { Text, View } from "@react-pdf/renderer";

import { useTranslationV2 } from "ui";

import { styles } from "./FooterTemplate.styles";

export const FooterTemplate = () => {
    const t = useTranslationV2();
    return (
        <View style={[styles.footer]}>
            <Text>{t("generated_by")} Wergonic SmartWorkwear/ http://wergonic.com</Text>
        </View>
    );
};
