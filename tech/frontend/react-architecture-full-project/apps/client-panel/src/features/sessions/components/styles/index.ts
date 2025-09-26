import { CSSProperties } from "react";
import Slider from "react-slick";

import { styled, SxProps, Theme } from "@mui/material";

export const DisabledInputStyle: SxProps = {
    bgcolor: "divider",
    "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
    },
    borderRadius: 1,
};

export const AddNewuserAlertStyle: SxProps = {
    color: "grey.500",
    bgcolor: "grey.200",
    border: "1px solid",
    borderColor: "divider",
    fontSize: "14px",
    alignItems: "center",
};

export const DeleteMultipleSessionsAlertStyle: SxProps<Theme> = (theme) => ({
    bgcolor: `${theme.color_system.divider.light_grey}33`,
    border: 0,
    fontSize: "14px",
    alignItems: "center",
});

export const ContentCopyOutlinedIconStyles: SxProps<Theme> = (theme) => ({
    color: theme.color_system.text.secondary,
});

// Add log styles

export const CursorPointerStyle: SxProps = {
    cursor: "pointer",
};

export const UploadButtonStyles: SxProps<Theme> = (theme) => ({
    cursor: "pointer",
    "svg path": {
        stroke: theme.color_system.primary.dark,
    },
});

export const AddLogButtonStyles: SxProps<Theme> = (theme) => ({
    "svg path": {
        stroke: theme.color_system.primary.dark,
    },
});

export const ViewLogImageContainerStyleStyles: SxProps = {
    position: "relative",
    cursor: "pointer",
};

export const ViewLogImageStyleStyles: SxProps = {
    opacity: 0.5,
};
export const ViewLogTextStyleStyles: SxProps<Theme> = (theme) => ({
    position: "absolute",
    top: "50%",
    left: "40%",
    transform: "translate(-70%, -70%)",
    color: theme.palette.common.white,
    textAlign: "center",
    background: "transparent",
});

export const StyledSlider = styled(Slider)`
    .slick-prev:before,
    .slick-next:before {
        display: none;
    }
    padding-left: 7px;
`;

export const CarrouselInputStyle: SxProps = {
    cursor: "pointer",
    height: "133px",
    width: "112px",
    borderRadius: "5px",
    border: "1px dashed",
    borderColor: "divider",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
};
export const CarrouselInputStyle2: SxProps<Theme> = (theme) => ({
    cursor: "pointer",
    height: "133px",
    width: "112px",
    borderRadius: "5px",
    border: "1px dashed",
    borderColor: theme.color_system.divider.light_grey,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
});
export const CarrouselInputIconStyle: SxProps = {
    bgcolor: "primary.blueFade",
    width: "50px",
    height: "50px",
    zIndex: -1,
};
export const CarrouselInputIconStyle2: SxProps<Theme> = (theme) => ({
    bgcolor: theme.color_system.accent.purple,
    width: "50px",
    height: "50px",
    zIndex: -1,
    "svg path": {
        stroke: theme.color_system.primary.dark,
    },
});

export const ContainerStyles: SxProps = {
    backgroundColor: "rgba(179, 134, 235, .05)",
    overflowX: "scroll",
    "&::-webkit-scrollbar": {
        display: "none",
    },
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    overflowY: "hidden",
};

export const ContainerStyles2: SxProps<Theme> = {
    backgroundColor: "transparent",
    overflowX: "auto",
    // "&::-webkit-scrollbar": {
    //     display: "none",
    // },
    // scrollbarWidth: "none",
    // msOverflowStyle: "none",
    overflowY: "hidden",
};

export const ChartCardStyle: SxProps<Theme> = (theme) => ({
    backgroundColor: theme.color_system.divider.white,
    borderRadius: "10px",
});

export const AddLogWebcamStyle: CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100%",
    zIndex: 10,
};
export const AddLogButtonsContanerStyle: SxProps = {
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 11,
    gap: 2,
    display: "flex",
};

export const donutsMargin = { top: 50, right: 50, bottom: 100, left: 0 };
export const chartContainerHieght = 592;
export const CommonWidth = 700;

export const TableContainerStyle: SxProps = {
    width: "100%",
    overflowX: "auto",
    mb: 2,
};

export const TableStyle: SxProps = {
    borderRadius: "10px",
    overflow: "auto",
};

export const TableHeadRowStyle: SxProps<Theme> = {
    height: "76px",
    border: "1px solid",
    borderColor: (theme) => theme.color_system.divider.light_grey,
    borderRadius: "10px",
};

export const TableHeadBoxStyle: SxProps<Theme> = {
    height: "76px",
    width: "100%",
    border: "1px solid",
    borderColor: (theme) => theme.color_system.divider.light_grey,
    bgcolor: (theme) => theme.color_system.primary.light_20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

export const TnoTableHeadCellStyle: SxProps<Theme> = {
    p: 1,
    fontWeight: 700,
    minWidth: "128px",
    height: "58px",
    color: (theme) => theme.color_system.text.secondary,
    bgcolor: (theme) => theme.color_system.divider.light_purple,
    border: "1px solid",
    borderColor: (theme) => theme.color_system.divider.light_grey,
};
export const DataTableBodyStyle: SxProps<Theme> = {
    borderWidth: "0",
};

export const TnoTableBodyCellStyle: SxProps<Theme> = (theme) => ({
    borderBottom: `1px solid ${theme.color_system.divider.light_grey}`,
    fontWeight: 600,
    whiteSpace: "nowrap",
    px: 1,
    height: "45px",
    minWidth: "128px",
    border: "1px solid",
    borderColor: theme.color_system.divider.light_grey,
    color: theme.color_system.text.secondary,
    ...theme.typography.h6,
});

export const TableBodyemptyCellStyle: SxProps = {
    border: "none",
};

export const PercentileTableBodyCellStyle = (index: number, theme: Theme): SxProps => ({
    fontWeight: 600,
    whiteSpace: "nowrap",
    px: 1,
    height: "45px",
    minWidth: "100px",
    border: "1px solid",
    borderColor: theme.color_system.divider.light_grey,
    color: theme.color_system.text.secondary,
    bgcolor: index === 0 ? theme.color_system.divider.light_purple : "transparent",
    ...theme.typography.h6,
});
export const PercentileTableHeadCellStyle: SxProps<Theme> = {
    p: 1,
    fontWeight: 700,
    minWidth: "100px",
    height: "45px",
    color: (theme) => theme.color_system.text.secondary,
    bgcolor: (theme) => theme.color_system.divider.light_purple,
    border: "1px solid",
    borderColor: (theme) => theme.color_system.divider.light_grey,
};

export const TNOresultStyle: SxProps<Theme> = {
    border: "1px solid",
    borderColor: (theme) => theme.color_system.divider.light_grey,
    bgcolor: (theme) => theme.color_system.divider.white,
    borderRadius: "10px",
    width: "100%",
    mb: 4,
    py: 1,
    px: 2,
};

export const ExportButtonStyle: SxProps<Theme> = {
    ml: 1.5,
    p: 0,
    height: "50px",
    width: "200px",
    ":hover": { bgcolor: "transparent" },
};

export const ExportButtonMenuStyle: SxProps<Theme> = {
    "&:hover": { background: (theme) => theme.color_system.divider.light_grey },
    width: "200px",
};

export const ExportButtonSecondMenuStyle: SxProps<Theme> = {
    "&:hover": { background: (theme) => theme.color_system.divider.light_grey },
};

export const ExportDropMenuStyle: { elevation: number; sx: SxProps<Theme> } = {
    elevation: 0,
    sx: (theme) => ({
        borderRadius: 2,
        minWidth: "200px",
        overflow: "visible",
        filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.32))",
        background: theme.color_system.background.paper,
        "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
        },
    }),
};

export const ExportTextStyle: SxProps<Theme> = {
    color: (theme) => theme.color_system.text.primary,
};
