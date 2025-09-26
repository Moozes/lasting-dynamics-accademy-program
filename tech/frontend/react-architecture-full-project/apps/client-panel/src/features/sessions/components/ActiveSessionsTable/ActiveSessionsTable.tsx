import { useAtom } from "jotai";

import Box from "@mui/material/Box";

import { Btn, HTMLDivProps, RealTimeTable, useTranslationV2 } from "ui";

import { authAtom } from "@atoms/index";

import {
    useActiveSessionsQuery,
    useColumns,
    useInterruptedSessionsCount,
    useNonInterruptedSessionsCount,
} from "./ActiveSessionsTable.hooks";

type Props = HTMLDivProps;

export const ActiveSessionsTable = ({ ...props }: Props) => {
    const t = useTranslationV2();
    const columns = useColumns();
    const [auth] = useAtom(authAtom);
    const { data, loading, noMoreData, error, setQueryLimit, showInterrupted, setShowInterrupted } =
        useActiveSessionsQuery();

    const displayMessage = data.length === 0 ? t("no_records_to_display") : undefined;

    if (error) throw new Error("Error thrown manually from ActiveSessionsTable", { cause: error });

    const { interruptedCount, isInterruptedCountError, isInterruptedCountLoading } = useInterruptedSessionsCount();
    const { nonInterruptedCount, isNonInterruptedCountError } = useNonInterruptedSessionsCount();

    return (
        <div {...props}>
            {showInterrupted && !isInterruptedCountError && (
                <Box mb="20px" className="total-count">
                    {t("total")}: {interruptedCount}
                </Box>
            )}
            {!showInterrupted && !isNonInterruptedCountError && (
                <Box mb="20px" className="total-count">
                    {t("total")}: {nonInterruptedCount}
                </Box>
            )}
            <Box mb="20px" className="interrupted-button-container">
                <Btn
                    variant="primary-outlined"
                    onClick={() => setShowInterrupted((prev) => !prev)}
                    className={`interrupted-button ${showInterrupted ? "selected" : ""}`}
                >
                    <div className="interrupted-button-content">
                        {!isInterruptedCountError && !isInterruptedCountLoading && (
                            <div className="interrupted-count">{interruptedCount}</div>
                        )}
                        {t("interrupted")}
                    </div>
                </Btn>
            </Box>
            <RealTimeTable
                authenticatedUser={auth.wergonicUser}
                columns={columns}
                data={data}
                isTableLoadingData={loading}
                hideColumns={[]}
                getMoreData={() => setQueryLimit((prev) => prev + 10)}
                displayMessage={displayMessage}
                noMoreData={noMoreData}
            />
        </div>
    );
};
