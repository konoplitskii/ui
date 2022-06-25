import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SmallHeading from "../SmallHeading/SmallHeading";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/SmallHeading',
  component: SmallHeading,

} as ComponentMeta<typeof SmallHeading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SmallHeading> = (args) => <SmallHeading {...args} />;

export const SmallTitle = Template.bind({});
SmallTitle.args = {
  text:'СКИДКИ И БОНУСЫ',
  customMarginTop:'10px',
  customMarginBottom:'20px'
};

