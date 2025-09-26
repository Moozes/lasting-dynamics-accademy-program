// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from "@storybook/react";

import CenterBox from "./index";

export default {
    title: "Center Box",
    component: CenterBox,
    args: {
        variant: "contained",
    },
} as ComponentMeta<typeof CenterBox>;

const Template: ComponentStory<typeof CenterBox> = (args) => <CenterBox {...args}>Some Component</CenterBox>;

export const Basic = Template.bind({});
