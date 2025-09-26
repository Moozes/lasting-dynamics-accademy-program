/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { LinkExpiredForm } from "./LinkExpiredForm";

export default {
    title: "Features/Auth/Link Expired Form",
    component: LinkExpiredForm,
} as ComponentMeta<typeof LinkExpiredForm>;

const Template: ComponentStory<typeof LinkExpiredForm> = () => {
    return <LinkExpiredForm />;
};

export const Link_Expired_Form = Template.bind({});
