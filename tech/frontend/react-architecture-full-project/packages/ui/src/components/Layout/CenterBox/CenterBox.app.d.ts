declare type Boxprops = import("@mui/material/Box").BoxProps;
export interface IBoxProps extends Boxprops {
    children?: React.ReactNode;
}
