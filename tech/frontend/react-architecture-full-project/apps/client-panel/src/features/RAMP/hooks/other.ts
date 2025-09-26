import { useSetAtom } from "jotai";

import { informationDialogOpenAtom, informationDialogTextAtom } from "../atoms";

export const useInformationDialog = () => {
    const setInformationDialogOpen = useSetAtom(informationDialogOpenAtom);
    const setInformationDialogText = useSetAtom(informationDialogTextAtom);

    const iconClickHandler = (text: string | undefined) => {
        setInformationDialogOpen(true);
        setInformationDialogText(text || "");
    };

    return {
        openInformationDialog: iconClickHandler,
    };
};
