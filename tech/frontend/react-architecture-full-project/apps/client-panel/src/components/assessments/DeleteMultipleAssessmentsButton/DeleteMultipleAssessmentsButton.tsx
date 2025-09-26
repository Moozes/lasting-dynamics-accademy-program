import { FC, useMemo, useReducer } from "react";
import { useSearchParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import randomWords from "random-words";

import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import {
    Btn,
    DataTable,
    DeleteTrashIcon,
    FilledTextField,
    FormikOutlinedTextField,
    type HTMLDivProps,
    Typography,
    useTranslationV2,
} from "ui";

import { ISelectedRowsProp } from "@app-types/index";
import FormDialog from "@components/Dialogs/FormDialog";
import { useDeleteMultipleAssessmentsMutation } from "@queries/index";

import { useColumns, useDeleteMultipleAssessmentsForm } from "./DeleteMultipleAssessmentsButton.hooks";
import {
    ContentCopyOutlinedIconStyles,
    IntroTextStyles,
    TooltipPopperStyles,
    WarningContainerStyles,
    WarningTextStyles,
} from "./inlineStyles";

type Props = HTMLDivProps & ISelectedRowsProp;

export const DeleteMultipleAssessmentsButton: FC<Props> = ({ selectedRows, setSelectedRows, ...props }) => {
    const t = useTranslationV2();
    const queryClient = useQueryClient();
    const { enqueueSnackbar } = useSnackbar();

    const columns = useColumns();
    const selectedRowsValues = useMemo(() => {
        return selectedRows.map((row) => row.values);
    }, [selectedRows]);

    const [searchParams] = useSearchParams();

    const [isDeleteMultiUsersActionOpen, setIsDeleteMultiUsersActionOpen] = useReducer((state) => !state, false);
    const [randomWord, generateRandomWord] = useReducer(() => randomWords(1)[0], randomWords(1)[0]);
    const { deleteMultipleAssessmentsInitialValues, deleteMultipleAssessmentsValidationSchema } =
        useDeleteMultipleAssessmentsForm();

    const {
        mutate: deleteMultipleAssessments,
        isLoading: multipleAssessmentDeletionIsLoading,
        reset: multipleAssessmentDeletionReset,
    } = useDeleteMultipleAssessmentsMutation({
        onSuccess: () => {
            setIsDeleteMultiUsersActionOpen();
            queryClient.invalidateQueries({
                queryKey: ["Assessments", searchParams.get("page"), searchParams.get("page_size")],
            });
            enqueueSnackbar(t("ramp_assessments.assessments_deletion_multiple_success"));
            multipleAssessmentDeletionReset();
            setSelectedRows([]); // Clear selected rows after successful deletion
        },
    });

    function onClickShowDeleteDialog() {
        generateRandomWord();
        setIsDeleteMultiUsersActionOpen();
    }
    return (
        <div {...props}>
            <Tooltip
                title={
                    selectedRows.length === 0 ? t("ramp_assessments.you_have_to_select_at_least_one_assessment") : ""
                }
                PopperProps={{
                    sx: TooltipPopperStyles,
                }}
            >
                <span>
                    <Btn
                        onClick={() => onClickShowDeleteDialog()}
                        variant="danger-outlined"
                        disabled={selectedRows.length === 0}
                        startIcon={<DeleteTrashIcon />}
                    >
                        {t("Delete")}
                    </Btn>
                </span>
            </Tooltip>
            <FormDialog
                header={t("Delete")}
                dialogOpen={isDeleteMultiUsersActionOpen}
                toggleDialog={setIsDeleteMultiUsersActionOpen}
                initialValues={deleteMultipleAssessmentsInitialValues(randomWord)}
                validationSchema={deleteMultipleAssessmentsValidationSchema}
                onSubmit={() => {
                    const usersIDS = selectedRows.map((user) => parseInt(user.values.id, 10));
                    deleteMultipleAssessments(usersIDS);
                }}
                rightSideAction={
                    <Btn
                        type="submit"
                        variant="danger-contained"
                        loading={multipleAssessmentDeletionIsLoading}
                        startIcon={<DeleteTrashIcon />}
                    >
                        {t("Delete")}
                    </Btn>
                }
            >
                <Box marginX={2}>
                    <Typography weight="meduim" variant="h6" sx={IntroTextStyles}>
                        {t("ramp_assessments.you_are_about_to_delete_the_following_assessments")}
                    </Typography>

                    <DataTable
                        data={selectedRowsValues}
                        columns={columns}
                        hideColumns={[
                            "id",
                            "worker",
                            "work_task",
                            "unit",
                            "company_representative",
                            "assessment_completed_by",
                            "comment",
                            "date",
                            "site",
                        ]}
                    />
                    <Box sx={WarningContainerStyles}>
                        <Typography variant="body2" sx={WarningTextStyles}>
                            {t("ramp_assessments.delete_multiple_assessments_warning")}
                        </Typography>
                        <Box
                            display="flex"
                            flexWrap="wrap"
                            alignItems="center"
                            justifyContent="space-between"
                            flexDirection="row"
                            mt={2}
                        >
                            <Box flexBasis="49%">
                                <FilledTextField
                                    id="word"
                                    value={randomWord}
                                    endAdornment={
                                        <Tooltip title={t("Copy The Word")}>
                                            <IconButton
                                                onClick={() => {
                                                    navigator.clipboard.writeText(randomWord);
                                                }}
                                                edge="end"
                                            >
                                                <ContentCopyOutlinedIcon sx={ContentCopyOutlinedIconStyles} />
                                            </IconButton>
                                        </Tooltip>
                                    }
                                />
                            </Box>
                            <Box flexBasis="49%">
                                <FormikOutlinedTextField
                                    type="text"
                                    id="word_confirmation"
                                    name="word_confirmation"
                                    placeholder={t("Confirm Word")}
                                    autoComplete="off"
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </FormDialog>
        </div>
    );
};
