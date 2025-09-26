import { useReducer } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

import { Avatar, Box, useTheme } from "@mui/material";

import { AlertOctagon, Btn, DeleteTrashIcon, Typography, useTranslationV2 } from "ui";

import { AlertDialog } from "@components/index";
import { ICategoryAndLabels } from "@features/CategoriesAndLabels/types";
import { useDeleteCategoryMutation } from "@queries/index";
import { TABLE_SETTINGS_MENU_ITEM_TEXT_ML } from "@utils/index";

import { AlertAvatarStyle2, boxStyles } from "./inlineStyles";

type Props = {
    selectedRow: ICategoryAndLabels;
    handleMenuClose: () => void;
};

export const RemoveCategoryButton = ({ selectedRow, handleMenuClose }: Props) => {
    const t = useTranslationV2();
    const theme = useTheme();
    const queryClient = useQueryClient();
    const { enqueueSnackbar } = useSnackbar();
    const [isAlertOpen, setIsAlertOpen] = useReducer((state) => {
        return !state;
    }, false);

    const onDialogClose = () => {
        setIsAlertOpen();
        handleMenuClose();
    };

    const {
        mutate: deleteCategory,
        isLoading,
        reset,
    } = useDeleteCategoryMutation({
        onSuccess: () => {
            enqueueSnackbar(t("category_and_labels_management.category_deleted_successfully"));
            queryClient.invalidateQueries({
                queryKey: ["categoriesAndLabels"],
            });
            if (isAlertOpen) {
                onDialogClose();
            }
            reset();
        },
        onError: (err) => {
            let message;
            const serverErrorMessage = err.response?.data.detail || "";
            if (serverErrorMessage) {
                message = `${t("Something_went_Wrong")}: ${serverErrorMessage}`;
            } else {
                message = t("Something_went_Wrong");
            }
            enqueueSnackbar(message, { severity: "error" });
            if (isAlertOpen) {
                onDialogClose();
            }
        },
    });

    return (
        <>
            <Box display="flex" alignItems="center" sx={boxStyles} onClick={setIsAlertOpen}>
                <DeleteTrashIcon />

                <Typography
                    ml={TABLE_SETTINGS_MENU_ITEM_TEXT_ML}
                    variant="body1"
                    color={theme.color_system.text.primary}
                >
                    {t("remove")}
                </Typography>
            </Box>
            <AlertDialog
                dialogOpen={isAlertOpen}
                toggleDialog={onDialogClose}
                dialogIcon={
                    <Avatar sx={AlertAvatarStyle2}>
                        <AlertOctagon />
                    </Avatar>
                }
                rightSideAction={
                    <Btn
                        onClick={() => {
                            deleteCategory(selectedRow.id);
                        }}
                        loading={isLoading}
                        variant="primary-contained"
                    >
                        {t("Delete")}
                    </Btn>
                }
                primaryText={t("delete_category")}
                secondaryText={t("category_and_labels_management.delete_category_alert")}
            />
        </>
    );
};
