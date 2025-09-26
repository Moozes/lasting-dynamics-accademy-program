import { useMemo, useReducer, useState } from "react";
import { Column } from "react-table";

import { ChevronLeft, ChevronRight, Clear } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";

import { Typography, useTranslationV2 } from "ui";
import { BeforeArrowContainer2, NextArrowContainer2 } from "ui/src/components/Carrousel/inlineStyles";

import { BasicDialog } from "@components/index";
import {
    StyledSlider,
    ViewLogImageContainerStyleStyles,
    ViewLogImageStyleStyles,
    ViewLogTextStyleStyles,
} from "@features/sessions/components/styles";

export const useColumns = () => {
    const t = useTranslationV2();
    const columns: Column[] = useMemo(
        () => [
            {
                Header: () => <span />,
                accessor: "media_urls",
                Cell: ({ value }) => {
                    const [currentSlide, setCurrentSlide] = useState(0);
                    const [isViewCarrouselOpen, setIsViewCarrouselOpen] = useReducer((state) => {
                        return !state;
                    }, false);

                    const settings = {
                        dots: false,
                        infinite: true,
                        speed: 500,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        prevArrow: (
                            <BeforeArrowContainer2 currentSlide={currentSlide}>
                                <ChevronLeft fontSize="medium" />
                            </BeforeArrowContainer2>
                        ),
                        nextArrow: (
                            <NextArrowContainer2>
                                <ChevronRight fontSize="medium" />
                            </NextArrowContainer2>
                        ),
                        afterChange: (current: number) => setCurrentSlide(current),
                    };

                    return (
                        <>
                            {value.length !== 0 && (
                                <Box sx={ViewLogImageContainerStyleStyles} onClick={setIsViewCarrouselOpen}>
                                    <Box sx={ViewLogImageStyleStyles}>
                                        <img src={value[0]} alt="log preview" width="40px" height="40px" />
                                    </Box>
                                    <Box sx={ViewLogTextStyleStyles}>
                                        <Typography variant="body1">+ {value.length}</Typography>
                                    </Box>
                                </Box>
                            )}

                            <BasicDialog
                                dialogOpen={isViewCarrouselOpen}
                                toggleDialog={setIsViewCarrouselOpen}
                                showActions={false}
                            >
                                <Box display="flex" flexDirection="column" width="100%">
                                    <Box alignSelf="end">
                                        <IconButton size="small" onClick={setIsViewCarrouselOpen} sx={{ mr: 0.7 }}>
                                            <Clear />
                                        </IconButton>
                                    </Box>
                                    <Box maxWidth="500px" maxHeight="500px" alignSelf="center" justifySelf="center">
                                        <StyledSlider {...settings}>
                                            {value.map((image: string) => (
                                                <img key={image} src={image} alt="log" />
                                            ))}
                                        </StyledSlider>
                                    </Box>
                                </Box>
                            </BasicDialog>
                        </>
                    );
                },
            },
            {
                Header: () => <span style={{ paddingLeft: "10px" }}>{t("Created_at")}</span>,
                accessor: "created_at",
                Cell: ({ value }) => <Typography variant="body1">{new Date(value).toUTCString()}</Typography>,
            },
            {
                Header: () => <span>{t("comment")}</span>,
                accessor: "description",
                Cell: ({ value }) => {
                    return (
                        <Tooltip title={value}>
                            <Box>
                                <Typography variant="h6">
                                    {value.length > 10 ? `${value.substring(0, 10)}...` : value}
                                </Typography>
                            </Box>
                        </Tooltip>
                    );
                },
            },
        ],
        [t]
    );
    return columns;
};
