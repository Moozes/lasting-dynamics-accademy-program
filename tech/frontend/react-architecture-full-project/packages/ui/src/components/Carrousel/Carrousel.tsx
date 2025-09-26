import { FC, useState } from "react";

import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import ClearIcon from "@mui/icons-material/Clear";
import { Box, Typography, useTheme } from "@mui/material";

import { ICarrousel } from "./Carrousel.types";
import * as styles from "./inlineStyles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carrousel: FC<ICarrousel> = ({ images, leftInput, secondLeftInput, HandleDeleteFile }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const theme = useTheme();

    const settings = {
        infinite: false,
        slidesToShow: 5,
        swipeToSlide: true,
        prevArrow: (
            <styles.BeforeArrowContainer2 currentSlide={currentSlide}>
                <ChevronLeft fontSize="medium" />
            </styles.BeforeArrowContainer2>
        ),
        nextArrow: (
            <styles.NextArrowContainer2>
                <ChevronRight fontSize="medium" />
            </styles.NextArrowContainer2>
        ),
        afterChange: (current: number) => setCurrentSlide(current),
    };
    return (
        <styles.StyledSlider {...settings}>
            {leftInput}
            {secondLeftInput}
            {images.map((file) => (
                <Box key={file.name} sx={styles.ImageContainerStyle}>
                    <Box
                        sx={styles.ClearContainerStyle2}
                        onClick={() => {
                            HandleDeleteFile(file);
                        }}
                    >
                        <ClearIcon sx={styles.ClearIconStyle2} />
                    </Box>
                    <Typography
                        sx={styles.FileNameTextStyle}
                        variant="overline"
                        color={theme.color_system.divider.white}
                        noWrap
                    >
                        {file.name}
                    </Typography>
                    <img width="100%" height="100%" src={URL.createObjectURL(file)} alt={file.name} />
                </Box>
            ))}
        </styles.StyledSlider>
    );
};
