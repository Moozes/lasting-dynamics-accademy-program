import { FormikOutlinedSelect, FormikOutlinedTextField, type HTMLDivProps, useTranslationV2 } from "ui";

type Props = {
    factoryOptions: { value: string; label: string }[];
    lineOptions: { value: string; label: string }[];
    workstationsOptions: { value: string; label: string }[];
    taskModelsOptions: { value: string; label: string }[];
} & HTMLDivProps;

export const AddTaskForm = ({
    factoryOptions,
    lineOptions,
    workstationsOptions,
    taskModelsOptions,
    ...props
}: Props) => {
    const t = useTranslationV2();

    return (
        <div {...props}>
            <div className="form-header">
                <div className="text">
                    <div className="title">{t("workcycles.add_task")}</div>
                </div>
            </div>
            <FormikOutlinedSelect
                required
                className="input"
                id="factory"
                name="factory"
                label={t("factory")}
                options={factoryOptions}
            />
            <FormikOutlinedSelect
                required
                className="input"
                id="line"
                name="line"
                label={t("line")}
                options={lineOptions}
            />
            <FormikOutlinedSelect
                required
                className="input"
                id="workstation"
                name="workstation"
                label={t("workstation")}
                options={workstationsOptions}
            />
            <FormikOutlinedSelect
                required
                className="input"
                id="task_model"
                name="task_model"
                label={t("task_model")}
                options={taskModelsOptions}
            />
            <FormikOutlinedTextField
                required
                className="input"
                id="duration"
                name="duration"
                label={t("Duration")}
                placeholder={t("workcycles.enter_duration")}
            />
            <FormikOutlinedTextField
                required
                className="input"
                id="name"
                name="name"
                label={t("task")}
                placeholder={t("workcycles.enter_task")}
            />
        </div>
    );
};
