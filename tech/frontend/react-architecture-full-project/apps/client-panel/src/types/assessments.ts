export enum AssessmentsEnum {
    RAMP = "RAMP",
    RULA = "RULA",
    REBA = "REBA",
    MEC = "MEC",
}

export enum AssessmentStatusEnum {
    COMPLETED = "COMPLETED",
    IN_PROGRESS = "IN_PROGRESS",
    PROCESSING = "PROCESSING",
    FAILED = "FAILED",
}

export enum AssessmentSourceEnum {
    MANUAL = "manual",
    GENERATED = "generated",
}

export type Assessment = {
    id?: string;
    assessment_name: string;
    worker: string;
    date: string;
    assessment_type: string;
    work_task: string;
    site: string;
    country: string;
    unit: string;
    company_representative: string;
    assessment_completed_by: string;
    comment: string;
    assesment_category: string;
    results_comment: string;
    status: string;
    start_time?: string;
    end_time?: string;
    source: string;
};

export type IServerResponseAssessment = Assessment & {
    start_time: string | null;
    end_time: string | null;
    session: string | null;
};

type YesNoOrEmptyString = "yes" | "no" | "";

export type RAMPAssessmentDetail = {
    postures_1: string;
    postures_1_comment: string;
    postures_2: string;
    postures_2_comment: string;
    postures_3: string;
    postures_3_comment: string;
    postures_4: string;
    postures_4_comment: string;
    postures_5_right: string;
    postures_5_left: string;
    postures_5_comment: string;
    postures_6_right: string;
    postures_6_left: string;
    postures_6_comment: string;
    postures_7_right: string;
    postures_7_left: string;
    postures_7_comment: string;
    postures_8: string;
    postures_8_comment: string;

    movements_repetition_1_right: string;
    movements_repetition_1_left: string;
    movements_repetition_1_comment: string;
    movements_repetition_2_right: string;
    movements_repetition_2_left: string;
    movements_repetition_2_comment: string;
    movements_repetition_3_right: string;
    movements_repetition_3_left: string;
    movements_repetition_3_comment: string;
    movements_repetition_4: string;
    movements_repetition_4_comment: string;
    movements_repetition_5: string;
    movements_repetition_5_comment: string;

    lifting_work_comment_1: string;
    lifting_work_non_existent: boolean;
    lifting_work_table_1_factor_x: string;
    lifting_work_table_1_factor_y: string;
    lifting_work_table_1_worst_factor_x: string;
    lifting_work_table_1_worst_factor_y: string;
    lifting_work_table_2_factor_x: string;
    lifting_work_table_2_factor_y: string;
    lifting_work_table_2_worst_factor_x: string;
    lifting_work_table_2_worst_factor_y: string;

    lifting_work_factors_non_existent: boolean;
    lifting_work_1_factor: string;
    lifting_work_1_worst_factor: string;
    lifting_work_2_factor: string;
    lifting_work_2_worst_factor: string;
    lifting_work_3_factor: string;
    lifting_work_3_worst_factor: string;
    lifting_work_4_factor: string;
    lifting_work_4_worst_factor: string;
    lifting_work_5_factor: string;
    lifting_work_5_worst_factor: string;
    lifting_work_comment_2: string;

    pushing_and_pulling_comment_1: string;
    pushing_and_pulling_non_existent: boolean;
    pushing_and_pulling_table_1_initial_force_factor_x: string;
    pushing_and_pulling_table_1_initial_force_factor_y: string;
    pushing_and_pulling_table_1_initial_force_worst_factor_x: string;
    pushing_and_pulling_table_1_initial_force_worst_factor_y: string;
    pushing_and_pulling_table_2_continuous_force_factor_x: string;
    pushing_and_pulling_table_2_continuous_force_factor_y: string;
    pushing_and_pulling_table_2_continuous_force_worst_factor_x: string;
    pushing_and_pulling_table_2_continuous_force_worst_factor_y: string;

    pushing_and_pulling_factors_non_existent: boolean;
    pushing_and_pulling_1_initial_force_factor: string;
    pushing_and_pulling_1_continuous_force_factor: string;
    pushing_and_pulling_1_initial_force_worst_factor: string;
    pushing_and_pulling_1_continuous_force_worst_factor: string;

    pushing_and_pulling_2_initial_force_factor: string;
    pushing_and_pulling_2_continuous_force_factor: string;
    pushing_and_pulling_2_initial_force_worst_factor: string;
    pushing_and_pulling_2_continuous_force_worst_factor: string;

    pushing_and_pulling_3_initial_force_factor: string;
    pushing_and_pulling_3_continuous_force_factor: string;
    pushing_and_pulling_3_initial_force_worst_factor: string;
    pushing_and_pulling_3_continuous_force_worst_factor: string;

    pushing_and_pulling_4_initial_force_factor: string;
    pushing_and_pulling_4_continuous_force_factor: string;
    pushing_and_pulling_4_initial_force_worst_factor: string;
    pushing_and_pulling_4_continuous_force_worst_factor: string;

    pushing_and_pulling_5_initial_force_factor: string;
    pushing_and_pulling_5_continuous_force_factor: string;
    pushing_and_pulling_5_initial_force_worst_factor: string;
    pushing_and_pulling_5_continuous_force_worst_factor: string;

    pushing_and_pulling_6_initial_force_factor: string;
    pushing_and_pulling_6_continuous_force_factor: string;
    pushing_and_pulling_6_initial_force_worst_factor: string;
    pushing_and_pulling_6_continuous_force_worst_factor: string;

    pushing_and_pulling_7_initial_force_factor: string;
    pushing_and_pulling_7_continuous_force_factor: string;
    pushing_and_pulling_7_initial_force_worst_factor: string;
    pushing_and_pulling_7_continuous_force_worst_factor: string;

    pushing_and_pulling_8_initial_force_factor: string;
    pushing_and_pulling_8_continuous_force_factor: string;
    pushing_and_pulling_8_initial_force_worst_factor: string;
    pushing_and_pulling_8_continuous_force_worst_factor: string;

    pushing_and_pulling_comment_2: string;

    influencing_factors_1_a: YesNoOrEmptyString;
    influencing_factors_1_a_comment: string;
    influencing_factors_1_b: YesNoOrEmptyString;
    influencing_factors_1_b_comment: string;
    influencing_factors_1_c: YesNoOrEmptyString;
    influencing_factors_1_c_comment: string;
    influencing_factors_1_d: YesNoOrEmptyString;
    influencing_factors_1_d_comment: string;
    influencing_factors_1_e: YesNoOrEmptyString;
    influencing_factors_1_e_comment: string;
    influencing_factors_1_f: YesNoOrEmptyString;
    influencing_factors_1_f_comment: string;
    influencing_factors_2_a: YesNoOrEmptyString;
    influencing_factors_2_a_comment: string;
    influencing_factors_2_b: YesNoOrEmptyString;
    influencing_factors_2_b_comment: string;
    influencing_factors_2_c: YesNoOrEmptyString;
    influencing_factors_2_c_comment: string;
    influencing_factors_2_d: YesNoOrEmptyString;
    influencing_factors_2_d_comment: string;
    influencing_factors_2_e: YesNoOrEmptyString;
    influencing_factors_2_e_comment: string;
    influencing_factors_2_f: YesNoOrEmptyString;
    influencing_factors_2_f_comment: string;
    influencing_factors_2_g: YesNoOrEmptyString;
    influencing_factors_2_g_comment: string;
    influencing_factors_2_h: YesNoOrEmptyString;
    influencing_factors_2_h_comment: string;
    influencing_factors_3_a: YesNoOrEmptyString;
    influencing_factors_3_a_comment: string;
    influencing_factors_3_b: YesNoOrEmptyString;
    influencing_factors_3_b_comment: string;
    influencing_factors_3_c: YesNoOrEmptyString;
    influencing_factors_3_c_comment: string;
    influencing_factors_3_d: YesNoOrEmptyString;
    influencing_factors_3_d_comment: string;

    strenuous_work: YesNoOrEmptyString;
    strenuous_work_comment: string;
    strenuous_work_type_1: YesNoOrEmptyString;
    strenuous_work_type_1_comment: string;
    strenuous_work_type_2: YesNoOrEmptyString;
    strenuous_work_type_2_comment: string;
    strenuous_work_type_3: YesNoOrEmptyString;
    strenuous_work_type_3_comment: string;
    strenuous_work_type_4: YesNoOrEmptyString;
    strenuous_work_type_4_comment: string;
    strenuous_work_type_other_comment: string;

    perceived_physical_discomfort: YesNoOrEmptyString;
    perceived_physical_discomfort_comment: string;
    perceived_physical_discomfort_person_1_comment: string;
    perceived_physical_discomfort_person_2_comment: string;
    perceived_physical_discomfort_person_3_comment: string;
    perceived_physical_discomfort_person_4_comment: string;
    perceived_physical_discomfort_person_5_comment: string;
};

export type RAMPAssessment = Assessment & {
    assessment: RAMPAssessmentDetail;
};

export type RULAAssessmentDetail = {
    noRightSide: boolean;
    rightUpperArmPosition: string;
    rightUpperArmPositionCheckbox1: boolean;
    rightUpperArmPositionCheckbox2: boolean;
    rightUpperArmPositionCheckbox3: boolean;
    rightLowerArmPosition: string;
    rightLowerArmPositionCheckbox1: boolean;
    rightWristPosition: string;
    rightWristPositionCheckbox1: boolean;
    rightWristTwist: string;
    rightMuscleUseScore: boolean;
    rightForceLoadScore: string;

    noLeftSide: boolean;
    leftUpperArmPosition: string;
    leftUpperArmPositionCheckbox1: boolean;
    leftUpperArmPositionCheckbox2: boolean;
    leftUpperArmPositionCheckbox3: boolean;
    leftLowerArmPosition: string;
    leftLowerArmPositionCheckbox1: boolean;
    leftWristPosition: string;
    leftWristPositionCheckbox1: boolean;
    leftWristTwist: string;
    leftMuscleUseScore: boolean;
    leftForceLoadScore: string;

    headAndNeck: string;
    headAndNeckCheckbox1: boolean;
    headAndNeckCheckbox2: boolean;
    trunk: string;
    trunkCheckbox1: boolean;
    trunkCheckbox2: boolean;
    legs: string;
    headTrunkAndLegsMuscleUseScore: boolean;
    headTrunkAndLegsForceLoadScore: string;
};

export type RULAAssessment = Assessment & {
    assessment: RULAAssessmentDetail;
};

export type REBAAssessmentDetail = {
    neckPosition: string;
    neckIsTwistedOrSideBending: string;

    trunkPosition: string;
    trunkIsTwistedOrSideBending: string;

    legsDownOrRaised: string;
    legsAngle: string;

    forceLoadScore: string;
    forceLoadScoreCheckbox: boolean;

    upperArmPosition: string;
    upperArmPositionCheckbox1: boolean;
    upperArmPositionCheckbox2: boolean;
    upperArmPositionCheckbox3: boolean;

    lowerArmPosition: string;

    wristPosition: string;
    wristPositionCheckbox: boolean;

    couplingScore: string;

    activityScoreCheckbox1: boolean;
    activityScoreCheckbox2: boolean;
    activityScoreCheckbox3: boolean;
};

export type AssessmentDetailUnion = RAMPAssessmentDetail | RULAAssessmentDetail;

export type FormikAssessment = (RAMPAssessment | RULAAssessment) & {
    assessment_completed_by_select: string;
};

export type IFormControlsProps = {
    assessmentFormSubRoutes: string[];
    canSubmit: boolean;
    setAllTabsAsVisited: () => void;
};

export type IMultiAssessmentsInfoFormatedData = {
    property: string;
    values: string[];
}[];

export type IMultiAssessmentDetailedSummaryFormatedData = {
    text: string;
    colSpan?: number;
    values?: {
        score?: string;
        className?: string;
    }[];
}[];

export type ImageRadioButtonProps = {
    label: string;
    name: string;
    value: string;
    score: string;
    image: string;
};

export type AssessmentDetailedSummaryFormatedData = {
    text: string;
    colSpan?: number;
    score?: string;
    className?: string;
}[];

export type TextCheckboxProps = {
    label: string;
    name: string;
    score: string;
    withBorder?: boolean;
    disabled?: boolean;
};

export type TextRadioButtonProps = {
    label: string;
    name: string;
    value: string;
    score: string;
    noBorder?: boolean;
};

export type ImagesFormCardProps = {
    title: string;
    radioItems: ImageRadioButtonProps[];
    checkboxItems?: TextCheckboxProps[];
    radioButtonItems?: TextRadioButtonProps[];
    checkboxImage?: string;
};

export type TextOnlyFormCardProps = {
    title: string;
    items: { label: string; value: string; score: string; name: string }[];
    adjustCheckboxItems?: TextCheckboxProps[];
    itemsType: FormControlTypeEnum;
};

export enum FormControlTypeEnum {
    checkbox = "checkbox",
    radio = "radio",
}

export type IMECAssessmentStats = {
    static_minutes_per_hour: number | null;
    dynamic_movements_per_hour: number | null;
    missing_limb: string | null;
};

export type IGeneratedMECAssessmentDetail = {
    "1.1 Working Yellow Zone": IMECAssessmentStats;
    "1.2 Working in RED Zone": IMECAssessmentStats;
    "9.1 Position of Right ARM in Redzone": IMECAssessmentStats;
    "9.2 Position of Left ARM in Redzone": IMECAssessmentStats;
    "10.1 Position of Trunk in Redzone (forward bending)": IMECAssessmentStats;
    "10.2 Position of Trunk in Redzone (side bending)": IMECAssessmentStats;
    "11.1 Positon of Head in Redzone (forward bending)": IMECAssessmentStats;
    "11.2 Positon of Head in Redzone (side bending)": IMECAssessmentStats;
};

export type IGeneratedMECAssessment = IServerResponseAssessment & {
    assessment: IGeneratedMECAssessmentDetail;
};

export enum RAMPAssessmentLimitsEnum {
    TIME = "TIME",
    PERCENTAGE = "PERCENTAGE",
}
