import { TFactory } from "@app-types/index";
import { useGetAllFactoriesQuery } from "@queries/index";

export const useEditFactory = (setSelectedFactory: (factory: TFactory) => void) => {
    const { data: factoriesData } = useGetAllFactoriesQuery({});
    const factories: TFactory[] = factoriesData?.data || [];

    const handleSelectFactory = (selectedFactoryId: string) => {
        const selectedFactory = factories.find((factory: TFactory) => factory.id === selectedFactoryId);
        if (selectedFactory) {
            setSelectedFactory(selectedFactory);
        }
    };

    return {
        factories,
        handleSelectFactory,
    };
};
