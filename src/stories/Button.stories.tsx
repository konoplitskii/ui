import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../Button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      options: ['large', 'normal'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 'large',
  label: 'Button',
  primary:true,
  children: 'Текст кнопки'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
  children: 'Текст кнопки'
};

export const Normal = Template.bind({});
Normal.args = {
  size: 'normal',
  label: 'Button',
  children: '+'
};
