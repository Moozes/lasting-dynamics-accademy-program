/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { CreateNewPasswordForm } from "./CreateNewPasswordForm";

export default {
    title: "Features/Auth/Create New Password Form",
    component: CreateNewPasswordForm,
} as ComponentMeta<typeof CreateNewPasswordForm>;

const Template: ComponentStory<typeof CreateNewPasswordForm> = () => {
    return <CreateNewPasswordForm />;
};

export const Create_New_Password_Form = Template.bind({});
