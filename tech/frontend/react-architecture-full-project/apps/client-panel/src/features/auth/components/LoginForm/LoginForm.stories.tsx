/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { LoginForm } from "./LoginForm";

export default {
    title: "Features/Auth/Login Form",
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => {
    return <LoginForm />;
};

export const Login_Form = Template.bind({});
