import { atom } from "jotai";

type IFeatureFlags = {
    enable_TestingNewComponentsPage: boolean;
    enable_IconsPage: boolean;
};

const initialState: IFeatureFlags = {
    enable_TestingNewComponentsPage: import.meta.env.DEV, // Enable only in development server
    enable_IconsPage: import.meta.env.DEV, // Enable only in development server
    // Add more feature flags here as needed
};
export const featureFlagsAtom = atom<IFeatureFlags>(initialState);
