import { capitalize } from "lodash";

import { IconButton, IconButtonProps } from "@mui/material";

import {
    GlobIcon,
    Popover,
    PopoverItem,
    setDateFnsDefaultLocale,
    setReactDatepickerDefaultLocale,
    SUPPORTED_LANGUAGES,
    usei18nInstance,
    usePopover,
} from "ui";

import { popoverItemStyles } from "./inlineStyles";

type Props = IconButtonProps;

export const ChangeLanguage = (props: Props) => {
    const i18n = usei18nInstance();
    const currentLanguageCode = capitalize(i18n.language);
    const { onOpen, ...rest } = usePopover();
    const handleChangeLanguage = (languageCode: string) => {
        i18n.changeLanguage(languageCode);
        setReactDatepickerDefaultLocale(languageCode);
        setDateFnsDefaultLocale(languageCode);
        rest.onClose();
    };
    return (
        <>
            <IconButton {...props} onClick={onOpen}>
                <GlobIcon className="icon" />
                <div className="language">{currentLanguageCode}</div>
            </IconButton>
            <Popover {...rest}>
                {SUPPORTED_LANGUAGES.map((language) => (
                    <PopoverItem
                        key={language.code}
                        disabled={currentLanguageCode === capitalize(language.code)}
                        selected={currentLanguageCode === capitalize(language.code)}
                        onClick={() => handleChangeLanguage(language.code)}
                        sx={popoverItemStyles}
                    >
                        {language.flag}
                        <div className="text">{language.name}</div>
                    </PopoverItem>
                ))}
            </Popover>
        </>
    );
};
