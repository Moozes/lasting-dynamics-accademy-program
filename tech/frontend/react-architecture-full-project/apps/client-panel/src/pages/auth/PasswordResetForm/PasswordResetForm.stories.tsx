/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { PasswordResetPage } from "./PasswordResetForm";

export default {
    title: "Pages/Auth/Password Reset Page",
    component: PasswordResetPage,
} as ComponentMeta<typeof PasswordResetPage>;

const Template: ComponentStory<typeof PasswordResetPage> = () => <PasswordResetPage />;
export const Password_Reset_Page = Template.bind({});
