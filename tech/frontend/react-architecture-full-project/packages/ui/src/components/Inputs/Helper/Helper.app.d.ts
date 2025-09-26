type THelperVariant = "info" | "error" | "warning" | "success";

export interface IHelperProps {
    children: string;
    variant: THelperVariant;
    classNames?: AnyObject;
}
