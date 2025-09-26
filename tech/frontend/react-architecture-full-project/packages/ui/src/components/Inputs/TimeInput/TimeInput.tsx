import { ITimeInputProps } from "./TimeInput.types";

type Props = ITimeInputProps;

export const TimeInput = ({ label, className, style, error, ...props }: Props) => {
    return (
        <div className={className} style={style}>
            <div className="label">
                {label} {props.required && <span className="star">*</span>}
            </div>
            <input {...props} type="time" />
            <div className="error">{error || ""}</div>
        </div>
    );
};
