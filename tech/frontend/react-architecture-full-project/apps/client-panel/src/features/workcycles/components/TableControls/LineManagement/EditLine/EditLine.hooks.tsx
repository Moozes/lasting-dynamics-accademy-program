import { TLine } from "@app-types/index";
import { useGetAllLinesQuery } from "@queries/index";

export const useEditLine = (setSelectedLine: (line: TLine) => void) => {
    const { data: linesData } = useGetAllLinesQuery({});
    const lines: TLine[] = linesData?.data || [];

    const handleSelectLine = (selectedLineId: string) => {
        const selectedLine = lines.find((line: TLine) => line.id === selectedLineId);
        if (selectedLine) {
            setSelectedLine(selectedLine);
        }
    };

    return {
        lines,
        handleSelectLine,
    };
};
