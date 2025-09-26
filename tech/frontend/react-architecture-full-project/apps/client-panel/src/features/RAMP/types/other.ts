import {
    IServerResponseAssessment,
    RAMPAssessmentDetail as AssessmentDetail,
    RAMPAssessmentDetail,
} from "@app-types/index";

export type AssessmentDetailRequiredForSubmittion = Omit<
    AssessmentDetail,
    | "postures_1_comment"
    | "postures_2_comment"
    | "postures_3_comment"
    | "postures_4_comment"
    | "postures_5_comment"
    | "postures_6_comment"
    | "postures_7_comment"
    | "postures_8_comment"
    | "movements_repetition_1_comment"
    | "movements_repetition_2_comment"
    | "movements_repetition_3_comment"
    | "movements_repetition_4_comment"
    | "movements_repetition_5_comment"
    | "lifting_work_comment_1"
    | "lifting_work_comment_2"
    | "pushing_and_pulling_comment_1"
    | "pushing_and_pulling_comment_2"
    | "influencing_factors_1_a_comment"
    | "influencing_factors_1_b_comment"
    | "influencing_factors_1_c_comment"
    | "influencing_factors_1_d_comment"
    | "influencing_factors_1_e_comment"
    | "influencing_factors_1_f_comment"
    | "influencing_factors_2_a_comment"
    | "influencing_factors_2_b_comment"
    | "influencing_factors_2_c_comment"
    | "influencing_factors_2_d_comment"
    | "influencing_factors_2_e_comment"
    | "influencing_factors_2_f_comment"
    | "influencing_factors_2_g_comment"
    | "influencing_factors_2_h_comment"
    | "influencing_factors_3_a_comment"
    | "influencing_factors_3_b_comment"
    | "influencing_factors_3_c_comment"
    | "influencing_factors_3_d_comment"
    | "strenuous_work_comment"
    | "perceived_physical_discomfort_comment"
    | "strenuous_work_type_1_comment"
    | "strenuous_work_type_2_comment"
    | "strenuous_work_type_3_comment"
    | "strenuous_work_type_4_comment"
    | "strenuous_work_type_other_comment"
    | "perceived_physical_discomfort_person_1_comment"
    | "perceived_physical_discomfort_person_2_comment"
    | "perceived_physical_discomfort_person_3_comment"
    | "perceived_physical_discomfort_person_4_comment"
    | "perceived_physical_discomfort_person_5_comment"
>;

export type FormSubmittionRequiredFieldsUnion = keyof AssessmentDetailRequiredForSubmittion;

export type Status = "danger" | "medium" | "normal";

export type ScoreStatus = "red" | "yellow" | "green";

export type RadioGroupChoice = {
    label: string;
    displayValue: string;
    actualValue: string;
    status: Status;
    firstStatus: boolean;
};

export type FormCardProps = {
    title: string;
    description: string;
    images: string[];
    commentInputName: string;
    dialogText: string;
    forms: {
        form1Title?: string;
        form2Title?: string;
        form1Name?: string;
        form2Name: string;
        form1Choices?: RadioGroupChoice[];
        form2Choices: RadioGroupChoice[];
    };
};

export type YesNoRadioGroupStatus = "danger" | "medium" | "normal" | "disabled";

export type YesNoRadioGroupProps = {
    name: string;
    commentInputName: string;
    yesValue: string;
    noValue: string;
    yesStatus: Status;
    noStatus: YesNoRadioGroupStatus;
    hideStatuses?: boolean;
    hasCommentOnly?: boolean;
};

export type YesNoFormCardChoiceProps = { text: string; info?: string } & YesNoRadioGroupProps;

export type YesNoFormCardProps = {
    title: string;
    hideResultSquare?: boolean;
    showDividers?: boolean;
    choices: YesNoFormCardChoiceProps[];
};

export type LiftingWorkTabs = "average" | "worst_case";
export type PushingAndPullingTabs = "average" | "worst_case";

export type getScoreStatusReturn = ScoreStatus | "";

export type DetailedSummaryDataRow = {
    text: string;
    staus: getScoreStatusReturn;
    score: string;
    userComment: string;
};

export type DetailedSummaryAccordionProps = {
    title: string;
    nbRed: string;
    nbYellow: string;
    nbGreen: string;
    tables: {
        title?: string;
        dataRows: DetailedSummaryDataRow[];
    }[];
};

export type ResultSummaryFormatedData = {
    formatedData: { text: string; riskScore: string; ovalClassName: Status; containerClassName: string }[];
};

export type DetailedSummaryFormatedData = {
    formatedData: DetailedSummaryAccordionProps[];
};

export type ResultsPdfTemplateProps = {
    resultSummaryFormatedData: ResultSummaryFormatedData;
    detailedSummaryFormatedData: DetailedSummaryFormatedData;
    cache: { data: IServerResponseAssessment };
    resultSummaryTitle: string;
};

export type TRAMPAccordionProps = {
    title: string;
    status: RAMPStatusEnum | null;
};

interface IRAMPSubQuestion {
    question: string;
    illustration: string;
    illustrationPDF?: string;
    time: string | number | null;
    frequency?: number | null;
    percentage: string | number | null;
    missing_limb: string | null;
}

export interface IGeneratedRAMPResultsFormatedData {
    question: string;
    status: RAMPStatusEnum | null;
    variables: string;
    calculations: string[];
    sensor?: string | null;
    subQuestion: IRAMPSubQuestion[];
}

export type TGeneratedRAMPResultsPdfTemplateProps = {
    assessment: IServerResponseAssessment;
    generatedRAMPFormatedDataFirstPage: IGeneratedRAMPResultsFormatedData[];
    generatedRAMPFormatedDataSecondPage: IGeneratedRAMPResultsFormatedData[];
};

export type TGeneratedResultStats = {
    status: RAMPStatusEnum | null;
};

export type TGeneratedCalculations = {
    1: TGeneratedResultStats;
    2: TGeneratedResultStats;
    3: TGeneratedResultStats;
    4: TGeneratedResultStats;
    5: TGeneratedResultStats;
    6: TGeneratedResultStats;
};

export enum RAMPStatusEnum {
    GREEN = "green",
    YELLOW = "yellow",
    RED = "red",
}

export type TGeneratedRAMPAssessmentDetail = RAMPAssessmentDetail & {
    postures_1_generated_forward_bending_gt_30_degrees_time: number | null;
    postures_1_generated_forward_bending_gt_30_degrees_percentage: number | null;
    postures_1_generated_side_bending_gt_10_degrees_time: number | null;
    postures_1_generated_side_bending_gt_10_degrees_percentage: number | null;
    postures_2_generated_backward_bending_gt_10_degrees_time: number | null;
    postures_2_generated_backward_bending_gt_10_degrees_percentage: number | null;
    postures_3_generated_forward_bending_20_44_degrees_time: number | null;
    postures_3_generated_forward_bending_20_44_degrees_percentage: number | null;
    postures_3_generated_side_bending_10_29_degrees_time: number | null;
    postures_3_generated_side_bending_10_29_degrees_percentage: number | null;
    postures_4_generated_forward_bending_gt_45_degrees_time: number | null;
    postures_4_generated_forward_bending_gt_45_degrees_percentage: number | null;
    postures_4_generated_side_bending_gt_30_degrees_time: number | null;
    postures_4_generated_side_bending_gt_30_degrees_percentage: number | null;
    postures_4_generated_backward_bending_gt_5_degrees_time: number | null;
    postures_4_generated_backward_bending_gt_5_degrees_percentage: number | null;
    postures_5_generated_elevation_angle_gt_90_degrees_time: number | null;
    postures_5_generated_elevation_angle_gt_90_degrees_percentage: number | null;
    postures_6_generated_hand_distance_gt_30cm_from_body_time: number | null;
    postures_6_generated_hand_distance_gt_30cm_from_body_percentage: number | null;
    postures_1_missing_limb: string | null;
    postures_2_missing_limb: string | null;
    postures_3_missing_limb: string | null;
    postures_4_missing_limb: string | null;
    postures_5_missing_limb: string | null;
    postures_6_missing_limb: string | null;
};

export type TGeneratedRAMPAssessment = IServerResponseAssessment & {
    assessment: TGeneratedRAMPAssessmentDetail;
};
