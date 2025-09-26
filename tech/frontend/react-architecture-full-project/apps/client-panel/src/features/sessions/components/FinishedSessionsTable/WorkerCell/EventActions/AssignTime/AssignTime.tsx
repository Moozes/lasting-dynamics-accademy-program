import { Dispatch, SetStateAction } from "react";

import { type HTMLDivProps, Radio, TimeInput, useTranslationV2 } from "ui";

import { IntervalTypeEnum } from "../EventActions.type";

type Props = HTMLDivProps & {
    timeFrame: string;
    setTimeFrame: Dispatch<SetStateAction<"" | IntervalTypeEnum>>;
    startTime: string;
    setStartTime: Dispatch<SetStateAction<string>>;
    endTime: string;
    setEndTime: Dispatch<SetStateAction<string>>;
};

export const AssignTime = ({
    timeFrame,
    setTimeFrame,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    ...props
}: Props) => {
    const t = useTranslationV2();
    return (
        <div {...props}>
            <div className="text">{t("assign_a_time")}</div>
            <div className="radio-group">
                <label>
                    <Radio
                        size="small"
                        checked={timeFrame === IntervalTypeEnum.specific}
                        onChange={() => setTimeFrame(IntervalTypeEnum.specific)}
                    />
                    <div className="text">{t("specific_timeframe")}</div>
                </label>
                <label>
                    <Radio
                        size="small"
                        checked={timeFrame === IntervalTypeEnum.whole}
                        onChange={() => setTimeFrame(IntervalTypeEnum.whole)}
                    />
                    <div className="text">{t("whole_measurement")}</div>
                </label>
            </div>
            {timeFrame === IntervalTypeEnum.specific && (
                <>
                    <hr />
                    <div className="time-frame">
                        <TimeInput
                            value={startTime}
                            onChange={(e) => setStartTime(e.currentTarget.value)}
                            label={t("start_time")}
                            className="time-input"
                            required
                        />
                        <TimeInput
                            value={endTime}
                            onChange={(e) => setEndTime(e.currentTarget.value)}
                            label={t("end_time")}
                            className="time-input"
                            required
                        />
                    </div>
                </>
            )}
        </div>
    );
};
