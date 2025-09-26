import { useFormikContext } from "formik";

import { LiftingWorkTabs, PushingAndPullingTabs } from "../types";
import {
    calculateLiftingWorkRiskScores,
    calculateLiftingWorkTable1Result,
    calculateLiftingWorkTable2Result,
    calculatePushingAndPullingRiskScores,
    calculatePushingAndPullingTable1Result,
    calculatePushingAndPullingTable2Result,
} from "../utils";

export const useLiftingWorkTable1Result = (selectedTab: LiftingWorkTabs) => {
    const formikContext = useFormikContext();
    return {
        liftingWorkTable1Result: calculateLiftingWorkTable1Result(selectedTab, formikContext.values),
    };
};

export const useLiftingWorkTable2Result = (selectedTab: LiftingWorkTabs) => {
    const formikContext = useFormikContext();
    return {
        liftingWorkTable2Result: calculateLiftingWorkTable2Result(selectedTab, formikContext.values),
    };
};

export const useLiftingWorkRiskScores = () => {
    const { values } = useFormikContext();
    const riskScores = calculateLiftingWorkRiskScores(values);
    return {
        riskScore1: riskScores.riskScore1,
        riskScore2: riskScores.riskScore2,
    };
};

export const usePushingAndPullingTable2Result = (selectedTab: PushingAndPullingTabs) => {
    const formikContext = useFormikContext();
    return {
        pushingAndPullingTable2Result: calculatePushingAndPullingTable2Result(selectedTab, formikContext.values),
    };
};

export const usePushingAndPullingTable1Result = (selectedTab: PushingAndPullingTabs) => {
    const formikContext = useFormikContext();
    return {
        pushingAndPullingTable1Result: calculatePushingAndPullingTable1Result(selectedTab, formikContext.values),
    };
};

export const usePushingAndPullingRiskScores = () => {
    const { values } = useFormikContext();
    const riskScores = calculatePushingAndPullingRiskScores(values);
    return {
        initialForceRiskScore1: riskScores.initialForceRiskScore1,
        initialForceRiskScore2: riskScores.initialForceRiskScore2,
        continuousForceRiskScore1: riskScores.continuousForceRiskScore1,
        continuousForceRiskScore2: riskScores.continuousForceRiskScore2,
    };
};
