import { HTMLProps } from "react";

import SearchIcon from "../../assets/icons/SearchIcon";

type Props = HTMLProps<HTMLInputElement>;

export const SearchInput = ({ className, ...props }: Props) => {
    return (
        <div className={className}>
            <input type="text" className="search-input" {...props} />
            <SearchIcon className="search-icon" />
        </div>
    );
};
