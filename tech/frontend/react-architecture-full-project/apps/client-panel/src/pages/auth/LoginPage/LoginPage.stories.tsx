/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { LoginPage } from "./LoginPage";

export default {
    title: "Pages/Auth/Login Page",
    component: LoginPage,
} as ComponentMeta<typeof LoginPage>;

const Template: ComponentStory<typeof LoginPage> = () => <LoginPage />;
export const Login_Page = Template.bind({});
