export type ICategoryAndLabels = {
    id: number;
    category_name: string;
    used: number;
    labels: {
        id: number;
        label_name: string;
        is_private: boolean;
    }[];
};

export type IEditCategoryAndLabels = {
    id: string;
    category_name: string;
    labels: { id?: number; label_name?: string; is_private?: boolean; delete?: boolean }[];
};

export type IAddCategoryAndLabels = {
    category_name: string;
    category_type: string;
    labels: {
        label_name: string;
        is_private: boolean;
    }[];
};
