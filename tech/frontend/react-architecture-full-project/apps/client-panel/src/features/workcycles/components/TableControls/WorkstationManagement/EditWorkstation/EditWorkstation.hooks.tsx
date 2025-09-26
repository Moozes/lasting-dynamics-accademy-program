import { TWorkstation } from "@app-types/index";
import { useGetAllWorkstationsQuery } from "@queries/index";

export const useEditWorkstation = (setSelectedWorkstation: (workstation: TWorkstation) => void) => {
    const { data: workstationsData } = useGetAllWorkstationsQuery({});
    const workstations: TWorkstation[] = workstationsData?.data || [];

    const handleSelectWorkstation = (selectedWorkstationId: string) => {
        const selectedWorkstation = workstations.find(
            (workstation: TWorkstation) => workstation.id === selectedWorkstationId
        );
        if (selectedWorkstation) {
            setSelectedWorkstation(selectedWorkstation);
        }
    };

    return {
        workstations,
        handleSelectWorkstation,
    };
};
