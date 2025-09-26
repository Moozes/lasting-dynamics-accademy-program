/* eslint-disable react/button-has-type */
import { forwardRef, HTMLProps } from "react";

import CircularProgress from "@mui/material/CircularProgress";

type Props = HTMLProps<HTMLButtonElement> & {
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
    loading?: boolean;
    type?: "button" | "submit" | "reset" | undefined;
    circularProgressSize?: number;
    variant?:
        | "primary-contained"
        | "primary-outlined"
        | "secondary-contained"
        | "danger-contained"
        | "danger-outlined"
        | "text";
};

// Some use cases require a ref
export const Btn = forwardRef<HTMLButtonElement | null, Props>(function Btn(
    {
        endIcon,
        startIcon,
        children,
        loading,
        disabled,
        className,
        circularProgressSize = 24,
        variant = "primary-contained",
        ...props
    },
    ref
) {
    const formatedClassName = `${className} ${loading ? "loading" : ""} ${variant}`;
    return (
        <button disabled={disabled || loading} className={formatedClassName} ref={ref} {...props}>
            {startIcon && <div className="start-icon">{startIcon}</div>}
            <div className="text">{children}</div>
            {endIcon && <div className="end-icon">{endIcon}</div>}
            {loading && <CircularProgress size={circularProgressSize} className="circular-progress" />}
        </button>
    );
});
