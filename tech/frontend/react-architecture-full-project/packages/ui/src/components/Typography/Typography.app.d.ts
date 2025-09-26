declare type TypographyProps = import("@mui/material/Typography").TypographyProps;
declare type Variant = import("@mui/material/styles/createTypography").Variant;

export interface ITypographyProps extends Omit<TypographyProps<"p", { component?: React.ElementType }>, "color"> {
    weight?: "regular" | "bold" | "meduim";
    variant?: Variant;
    color?: TypographyProps["color"];
}
