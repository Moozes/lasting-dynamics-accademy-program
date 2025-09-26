import { type HTMLDivProps, useTranslationV2 } from "ui";

import { IWristDistanceItem } from "@features/sessions/types";
import { formatTime } from "@features/sessions/utils";

type Props = HTMLDivProps & {
    zoneData: IWristDistanceItem;
};

export const DistanceOfHandFromBodyTable = ({ zoneData, ...props }: Props) => {
    const t = useTranslationV2();

    return (
        <div {...props}>
            <table>
                <thead>
                    <tr>
                        <td className="bt bl brtl brtr" colSpan={2}>
                            {t("sessions_management.spent_time_in_different_zones")}
                        </td>
                    </tr>
                    <tr>
                        <td className="bl">{t("zones")}</td>
                        <td>{t("time_spent")}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="bl">{t("sessions_management.distance_of_hand_from_body_up_to_30cm")}</td>
                        <td>{formatTime(zoneData.zone_under_30cm)}</td>
                    </tr>
                    <tr>
                        <td className="bl">{t("sessions_management.distance_of_hand_from_body_between_30_50cm")}</td>
                        <td>{formatTime(zoneData.zone_30_to_50cm)}</td>
                    </tr>
                    <tr>
                        <td className="bl brbl">
                            {t("sessions_management.distance_of_hand_from_body_more_than_50cm")}
                        </td>
                        <td className="brbr">{formatTime(zoneData.zone_above_50cm)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
