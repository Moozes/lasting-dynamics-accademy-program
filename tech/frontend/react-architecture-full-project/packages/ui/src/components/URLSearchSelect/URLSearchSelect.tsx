import { useSearchParams } from "react-router-dom";

import { SelectChangeEvent } from "@mui/material/Select";

import { HTMLDivProps } from "../../types/global";
import { resetURLPageParam } from "../../utils/functions";
import { SelectField } from "../Inputs/Select";

import { SelectStyles } from "./inlineStyles";

type Props = HTMLDivProps & {
    options: { value: string; label: string }[];
    URLSearchParamName: string;
    label: string;
};

// todo dont use the old SelectField, implement a new one and delete SelectField
export const URLSearchSelect = ({ options, URLSearchParamName, label, ...props }: Props) => {
    const STATUS = URLSearchParamName;
    const [searchParams, setSearchParams] = useSearchParams();
    const handleChange = (event: SelectChangeEvent<unknown>) => {
        if (event.target.value) {
            searchParams.set(STATUS, event.target.value as string);
        } else {
            searchParams.delete(STATUS);
        }
        resetURLPageParam(searchParams);
        setSearchParams(searchParams);
    };
    return (
        <div {...props}>
            <SelectField
                value={searchParams.get(STATUS) || ""}
                variant="outlined"
                name=""
                label={label}
                options={options}
                sx={SelectStyles}
                onChange={handleChange}
            />
        </div>
    );
};
