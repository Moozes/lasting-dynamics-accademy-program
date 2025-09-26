// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Typography from "./index";

export default {
    title: "Typography",
    component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args}>lorem ipsum</Typography>;

export const h1 = Template.bind({});
h1.args = {
    variant: "h1",
};

export const h2 = Template.bind({});
h2.args = {
    variant: "h2",
};

export const h3 = Template.bind({});
h3.args = {
    variant: "h3",
};

export const h4 = Template.bind({});
h4.args = {
    variant: "h4",
};

export const h5 = Template.bind({});
h5.args = {
    variant: "h5",
};

export const body1 = Template.bind({});
body1.args = {
    variant: "body1",
};

export const body2 = Template.bind({});
body2.args = {
    variant: "body2",
};

export const button = Template.bind({});
button.args = {
    variant: "button",
};

export const caption = Template.bind({});
caption.args = {
    variant: "caption",
};

export const overline = Template.bind({});
overline.args = {
    variant: "overline",
};

export const subtitle1 = Template.bind({});
subtitle1.args = {
    variant: "subtitle1",
};

export const subtitle2 = Template.bind({});
subtitle2.args = {
    variant: "subtitle2",
};
