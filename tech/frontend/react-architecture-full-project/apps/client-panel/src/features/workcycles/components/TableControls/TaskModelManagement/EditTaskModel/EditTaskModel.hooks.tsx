import { TTaskModel } from "@app-types/index";
import { useGetAllTaskModelsQuery } from "@queries/index";

export const useEditTaskModel = (setSelectedTaskModel: (taskModel: TTaskModel) => void) => {
    const { data: taskModelsData } = useGetAllTaskModelsQuery({});
    const taskModels: TTaskModel[] = taskModelsData?.data || [];

    const handleSelectTaskModel = (selectedTaskModelId: string) => {
        const selectedTaskModel = taskModels.find((taskModel: TTaskModel) => taskModel.id === selectedTaskModelId);
        if (selectedTaskModel) {
            setSelectedTaskModel(selectedTaskModel);
        }
    };

    return {
        taskModels,
        handleSelectTaskModel,
    };
};
