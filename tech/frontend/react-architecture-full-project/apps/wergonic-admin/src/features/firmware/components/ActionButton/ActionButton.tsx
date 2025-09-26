import { Btn, type HTMLDivProps, useTranslationV2 } from "ui";

import { useRevertFirmwareMutation } from "./ActionButton.hooks";

type Props = HTMLDivProps & {
    id: string;
};

export const ActionButton = ({ id, ...props }: Props) => {
    const t = useTranslationV2();
    const { mutate: revertFirmware, isLoading } = useRevertFirmwareMutation();

    const handleClick = () => {
        revertFirmware(id);
    };

    return (
        <div {...props}>
            <Btn onClick={handleClick} disabled={isLoading} variant="text">
                {t("firmware_management.revert_to_version")}
            </Btn>
        </div>
    );
};
