import { Btn, HTMLDivProps } from "ui";

type Props = HTMLDivProps;

export const TestingNewComponentsPage = (props: Props) => {
    return (
        <div {...props}>
            <p>Testing a multi step form</p>
            <Btn variant="danger-contained">hello</Btn>
            <Btn variant="danger-outlined">hello</Btn>
            <Btn variant="primary-contained">hello</Btn>
            <Btn variant="primary-outlined">hello</Btn>
            <Btn variant="secondary-contained">hello</Btn>
            <Btn variant="text">hello</Btn>
        </div>
    );
};
