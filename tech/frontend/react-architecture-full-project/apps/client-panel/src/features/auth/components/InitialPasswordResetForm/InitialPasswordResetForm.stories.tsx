/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { InitialPasswordResetForm } from "./InitialPasswordResetForm";

export default {
    title: "Features/Auth/Init Password Reset Form",
    component: InitialPasswordResetForm,
} as ComponentMeta<typeof InitialPasswordResetForm>;

const Template: ComponentStory<typeof InitialPasswordResetForm> = () => {
    return <InitialPasswordResetForm />;
};

export const Init_Password_Reset_Form = Template.bind({});
