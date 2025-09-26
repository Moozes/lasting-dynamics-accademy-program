/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { GlobalLoader } from "./GlobalLoader";

export default {
    title: "Global/Global Loader",
    component: GlobalLoader,
} as ComponentMeta<typeof GlobalLoader>;

const Template: ComponentStory<typeof GlobalLoader> = () => <GlobalLoader />;
export const PageLoader = Template.bind({});
