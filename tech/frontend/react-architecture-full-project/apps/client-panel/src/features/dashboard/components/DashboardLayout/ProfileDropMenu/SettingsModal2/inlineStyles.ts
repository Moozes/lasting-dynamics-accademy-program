import { SxProps, Theme } from "@mui/material";

export const SettingsSideBareIconContainerStyle: SxProps<Theme> = (theme) => ({
    minWidth: "35px",
    "svg path": { stroke: theme.color_system.text.primary },
});

export const HelpContainerStyle: SxProps<Theme> = (theme) => ({
    bgcolor: theme.color_system.divider.light_grey_20,
    pointerEvents: "none",
    borderRadius: "5px",

    width: { sm: "197px", lg: "266px" },
});

export const HelpTextStyle: SxProps<Theme> = (theme) => ({
    "& .MuiTypography-body1": {
        fontSize: { sm: "12px", lg: "14px" },
        fontWeight: 700,
        lineHeight: "19px",
        color: theme.color_system.text.primary,
    },
    "& .MuiTypography-body2": {
        fontSize: { sm: "10px", lg: "12px" },
        fontWeight: 400,
        lineHeight: "16px",
        color: theme.color_system.text.light,
    },
});

export const ProfilePictureStyle2: SxProps<Theme> = (theme) => ({
    width: "62px",
    height: "62px",
    mr: 2,
    bgcolor: theme.color_system.primary.dark,
    color: theme.color_system.divider.white,
    textTransform: "uppercase",
    fontSize: 25,
    fontWeight: 800,
});
export const ProfilePictureContainerStyle: SxProps<Theme> = {
    position: "relative",
};
export const EditIconContainerStyle: SxProps<Theme> = {
    position: "absolute",
    bottom: "-5px",
    right: "15px",
    cursor: "pointer",
    "&:hover": {
        opacity: 0.7,
    },
    input: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0,
    },
};

export const ProfileHeaderTextStyle: SxProps<Theme> = {
    fontSize: { sm: "19px", lg: "24px" },
};
export const ProfileHeaderSecondaryTextStyle: SxProps<Theme> = {
    fontSize: { sm: "12px", lg: "16px" },
};
export const UploadButtonContainerStyle: SxProps<Theme> = {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",
};

export const OrganizationInfoPrimaryTextStyle: SxProps = { fontSize: { sm: "14px", lg: "16px" } };

export const OrganizationInfoSecondaryTextStyle: SxProps = {
    fontSize: { sm: "12px", lg: "18px" },
    fontWeight: { sm: 400, lg: 500 },
};
