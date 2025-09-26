import Slider from "react-slick";

import { Box, styled, SxProps, Theme } from "@mui/material";

import { ArrowButtonProps } from "./Carrousel.types";

export const ImageContainerStyle: SxProps = {
    height: "133px",
    maxWidth: "112px",
    borderRadius: "5px",
    overflow: "hidden",
    position: "relative",
};

export const ClearContainerStyle: SxProps = {
    width: "17px",
    height: "17px",
    borderRadius: "50%",
    position: "absolute",
    top: 5,
    right: 5,
    bgcolor: "common.white",
    color: "error.main",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
};
export const ClearContainerStyle2: SxProps<Theme> = (theme) => ({
    width: "17px",
    height: "17px",
    borderRadius: "50%",
    position: "absolute",
    top: 5,
    right: 5,
    bgcolor: theme.color_system.divider.white,
    color: "error.main",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
});
export const FileNameTextStyle: SxProps = {
    position: "absolute",
    width: "100%",
    bottom: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textOverflow: "ellipsis",
};

export const ClearIconStyle: SxProps = { width: "12px", height: "12px" };
export const ClearIconStyle2: SxProps<Theme> = (theme) => ({
    width: "12px",
    height: "12px",
    color: theme.color_system.status.error.dark,
});
export const StyledSlider = styled(Slider)`
    .slick-prev:before,
    .slick-next:before {
        display: none;
    }
    padding-left: 7px;
`;

export const NextArrowContainer = styled(Box)`
    color: ${(props) => props.theme.palette.primary.main};
    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.palette.primary.main};
        opacity: 0.7;
    }
`;
export const NextArrowContainer2 = styled(Box)`
    color: ${(props) => props.theme.color_system.primary.dark};
    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.color_system.primary.dark};
        opacity: 0.7;
    }
`;

export const BeforeArrowContainer = styled(Box)<ArrowButtonProps>(({ currentSlide, theme }) => ({
    color: currentSlide > 0 ? theme.palette.primary.main : theme.palette.common.white,
    "&:hover": {
        cursor: currentSlide > 0 ? "pointer" : "default",
        color: currentSlide > 0 ? theme.palette.primary.main : theme.palette.common.white,
        opacity: 0.7,
    },
}));
export const BeforeArrowContainer2 = styled(Box)<ArrowButtonProps>(({ currentSlide, theme }) => ({
    color: currentSlide > 0 ? theme.color_system.primary.dark : theme.color_system.primary.light_light,
    "&:hover": {
        cursor: currentSlide > 0 ? "pointer" : "default",
        color: currentSlide > 0 ? theme.color_system.primary.dark : theme.color_system.primary.light_light,
        opacity: 0.7,
    },
}));
