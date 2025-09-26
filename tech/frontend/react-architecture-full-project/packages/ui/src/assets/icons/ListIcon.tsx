import { SVGProps } from "react";

import { useTheme } from "@mui/material";

const ListIcon = (props: SVGProps<SVGSVGElement>) => {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="13" viewBox="0 0 19 13" fill="none" {...props}>
            <path d="M0 0H2V3H0V0Z" fill={theme.color_system.primary.dark} />
            <path
                d="M18.4231 0H4.57692C4.42391 0 4.27717 0.158036 4.16898 0.43934C4.06078 0.720645 4 1.10218 4 1.5C4 1.89782 4.06078 2.27936 4.16898 2.56066C4.27717 2.84196 4.42391 3 4.57692 3H18.4231C18.5761 3 18.7228 2.84196 18.831 2.56066C18.9392 2.27936 19 1.89782 19 1.5C19 1.10218 18.9392 0.720645 18.831 0.43934C18.7228 0.158036 18.5761 0 18.4231 0Z"
                fill={theme.color_system.primary.dark}
            />
            <path d="M0 5H2V8H0V5Z" fill={theme.color_system.primary.dark} />
            <path
                d="M18.4231 5H4.57692C4.42391 5 4.27717 5.15803 4.16898 5.43934C4.06078 5.72064 4 6.10218 4 6.5C4 6.89782 4.06078 7.27936 4.16898 7.56066C4.27717 7.84197 4.42391 8 4.57692 8H18.4231C18.5761 8 18.7228 7.84197 18.831 7.56066C18.9392 7.27936 19 6.89782 19 6.5C19 6.10218 18.9392 5.72064 18.831 5.43934C18.7228 5.15803 18.5761 5 18.4231 5Z"
                fill={theme.color_system.primary.dark}
            />
            <path d="M0 10H2V13H0V10Z" fill={theme.color_system.primary.dark} />
            <path
                d="M18.4231 10H4.57692C4.42391 10 4.27717 10.158 4.16898 10.4393C4.06078 10.7206 4 11.1022 4 11.5C4 11.8978 4.06078 12.2794 4.16898 12.5607C4.27717 12.842 4.42391 13 4.57692 13H18.4231C18.5761 13 18.7228 12.842 18.831 12.5607C18.9392 12.2794 19 11.8978 19 11.5C19 11.1022 18.9392 10.7206 18.831 10.4393C18.7228 10.158 18.5761 10 18.4231 10Z"
                fill={theme.color_system.primary.dark}
            />
        </svg>
    );
};

export default ListIcon;
