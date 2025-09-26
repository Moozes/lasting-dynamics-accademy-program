import { atom } from "jotai";

import type { LiftingWorkTabs, PushingAndPullingTabs } from "@features/RAMP/types";

export const liftingWorkSelectedTabAtom = atom<LiftingWorkTabs>("average");

export const PushingAndPullingSelectedTabAtom = atom<PushingAndPullingTabs>("average");
