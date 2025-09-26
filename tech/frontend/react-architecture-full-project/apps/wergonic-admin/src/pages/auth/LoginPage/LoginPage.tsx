import type { HTMLDivProps } from "ui";

import { LoginForm } from "@features/auth";

type Props = HTMLDivProps;

export const LoginPage = (props: Props) => {
    return (
        <div {...props}>
            <div className="backgound-circle" />
            <LoginForm className="login-form" />
        </div>
    );
};
