/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { InitialPasswordResetPage } from "./InitialPasswordResetPage";

export default {
    title: "Pages/Auth/Password Reset Form",
    component: InitialPasswordResetPage,
} as ComponentMeta<typeof InitialPasswordResetPage>;

const Template: ComponentStory<typeof InitialPasswordResetPage> = () => <InitialPasswordResetPage />;
export const Password_Reset_Form = Template.bind({});
