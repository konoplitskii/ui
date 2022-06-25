import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from "../Card/Card";
import CardInfo from "../CardInfo/CardInfo";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/CardInfo',
  component: CardInfo,
} as ComponentMeta<typeof CardInfo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardInfo> = (args) => <CardInfo {...args} />;

export const CardInfoDefault = Template.bind({});
CardInfoDefault.args = {
  title:'ГАРАНТИЯ ВОЗВРАТА',
  text:'В случае задержки доставки товара, мы вернем средства по первой вашей просьбе. Доверие клиентов прежде всего!',
  icon:'Present'
};


