/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { StyledNotFound } from "./NotFound.styles";

export default {
    title: "Pages/Not Found",
    component: StyledNotFound,
} as ComponentMeta<typeof StyledNotFound>;

const Template: ComponentStory<typeof StyledNotFound> = () => <StyledNotFound />;
export const Not_Found = Template.bind({});
