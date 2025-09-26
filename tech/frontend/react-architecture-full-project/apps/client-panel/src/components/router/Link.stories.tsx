/* eslint-disable import/no-extraneous-dependencies */
import { BrowserRouter } from "react-router-dom";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Link from "./Link";

export default {
    title: "Global/Link",
    component: Link,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args}>Link</Link>;
export const Basic = Template.bind({});
