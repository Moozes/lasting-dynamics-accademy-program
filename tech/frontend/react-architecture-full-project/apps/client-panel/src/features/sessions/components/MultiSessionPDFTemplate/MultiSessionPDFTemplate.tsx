import { Document, Page, Text, View } from "@react-pdf/renderer";
import { AxiosResponse } from "axios";

import { useTranslationV2 } from "ui";

import { FooterTemplate } from "@components/index";

import {
    useCompareMultiSessionHeartRateStats,
    useCompareMultiSessionPostureStats,
    useCompareMultiSessionTemperatureStats,
    useCompareMultiSessionTNOStats,
    useLimbsArray,
} from "../../hooks";
import { IGetSelectedSessionsStatsQueryResponse } from "../../types";
import { freqeuncyDomainVariableUnitArray, timeDomainVariableUnitArray } from "../../utils";

import { HorizontalVariableUnitTableTemplate } from "./HorizontalVariableUnitTableTemplate";
import { MultiSessionAnglesTableTemplate } from "./MultiSessionAnglesTableTemplate";
import { MultiSessionNonlinearTableTemplate } from "./MultiSessionNonlinearTableTemplate";
import { getStyles } from "./MultiSessionPDFTemplate.styles";
import { MultiSessionTemperatureTableTemplate } from "./MultiSessionTemperatureTableTemplate";
import { MultiSessionWorkersTableTemplate } from "./MultiSessionWorkersTableTemplate";

type Props = {
    data: AxiosResponse<IGetSelectedSessionsStatsQueryResponse, any>;
};

export const MultiSessionPDFTemplate = ({ data }: Props) => {
    const t = useTranslationV2();
    const { formatedData: tableOfResultsFormatedData } = useCompareMultiSessionPostureStats(data.data);
    const { formatedData: TNOFormatedData, noTNOCalculationsForAllSession } = useCompareMultiSessionTNOStats(data.data);
    const { timeDomainSessionArray, frequencyDomainSessionArray, nonLinearSessionArray } =
        useCompareMultiSessionHeartRateStats(data.data);
    const compareMultiSessionTemperatureStats = useCompareMultiSessionTemperatureStats(data.data);
    const { limbsArray } = useLimbsArray();
    const styles = getStyles();
    return (
        <Document>
            {/* table of results page */}
            <Page style={[styles.page]}>
                <View>
                    <Text style={[styles.title]}>{t("worker_other")}</Text>
                </View>
                <MultiSessionWorkersTableTemplate style={[styles.table]} sessions={data.data} />
                <View>
                    <Text style={[styles.title]}>{t("sessions_management.table_of_results")}</Text>
                </View>
                {limbsArray.map((obj) => (
                    <MultiSessionAnglesTableTemplate
                        style={[styles.table]}
                        key={obj.limbName}
                        tableTitle={obj.limbName}
                        scale={t("Angle")}
                        measurement1={t("time_duration")}
                        measurement2={t("Percentage")}
                        sessionCount={data.data.length}
                        hasStatusCircles={false}
                        rowsArray={tableOfResultsFormatedData[obj.limbObjectKeyName]}
                    />
                ))}
                <FooterTemplate />
            </Page>

            {!noTNOCalculationsForAllSession && ( // hide TNO page if there is no data
                /* TNO of results page */
                <Page style={[styles.page]}>
                    <View>
                        <Text style={[styles.title]}>{t("sessions_management.TNO_results")}</Text>
                    </View>
                    {limbsArray.map((obj) => (
                        <MultiSessionAnglesTableTemplate
                            style={[styles.table]}
                            key={obj.limbName}
                            tableTitle={obj.limbName}
                            scale={t("Range")}
                            measurement1={t("Static")}
                            measurement2={t("Dynamic")}
                            sessionCount={data!.data.length}
                            hasStatusCircles
                            rowsArray={TNOFormatedData[obj.limbObjectKeyName]}
                        />
                    ))}
                    <FooterTemplate />
                </Page>
            )}

            {/* Heart Rate Data page */}
            <Page style={[styles.page]}>
                <View>
                    <Text style={[styles.title]}>{t("heart_rate_data")}</Text>
                </View>
                <View>
                    <Text style={[styles.subTitle]}>{t("sessions_management.session_stats.time_domain_results")}</Text>
                </View>
                <HorizontalVariableUnitTableTemplate
                    style={[styles.table]}
                    sessionArray={timeDomainSessionArray}
                    variableUnitArray={timeDomainVariableUnitArray}
                />
                <View>
                    <Text style={[styles.subTitle]}>
                        {t("sessions_management.session_stats.frequency_domain_results")}
                    </Text>
                </View>
                <HorizontalVariableUnitTableTemplate
                    style={[styles.table]}
                    sessionArray={frequencyDomainSessionArray}
                    variableUnitArray={freqeuncyDomainVariableUnitArray}
                />
                <View>
                    <Text style={[styles.subTitle]}>{t("sessions_management.session_stats.nonlinear_results")}</Text>
                </View>
                <MultiSessionNonlinearTableTemplate sessionArray={nonLinearSessionArray} />
                <FooterTemplate />
            </Page>

            {/* Temperature page */}
            <Page style={[styles.page]}>
                <View>
                    <Text style={[styles.title]}>{t("Temperature")}</Text>
                </View>
                <MultiSessionTemperatureTableTemplate {...compareMultiSessionTemperatureStats} />
                <FooterTemplate />
            </Page>
        </Document>
    );
};
