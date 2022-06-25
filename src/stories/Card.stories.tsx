import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from "../Card/Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardDefault = Template.bind({});
CardDefault.args = {
  title:'ЗОЛОТО Wowcircle 3.3.5a x5',
  subtitle:'цена за 1000 золотых',
  price:'5,90',
};


