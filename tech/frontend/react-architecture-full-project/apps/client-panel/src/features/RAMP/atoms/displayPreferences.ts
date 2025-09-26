import { atom } from "jotai";

import { RAMPAssessmentLimitsEnum } from "@app-types/index";

export const rampLimitDisplayAtom = atom<string>(RAMPAssessmentLimitsEnum.TIME);
