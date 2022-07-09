import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from "../Card/Card";
import CardInfo from "../CardInfo/CardInfo";

console.log('here');
console.log('here');
console.log('here');
export default {
  title: 'Example/CardInfo',
  component: CardInfo,
} as ComponentMeta<typeof CardInfo>;

const Template: ComponentStory<typeof CardInfo> = (args) => <CardInfo {...args} />;

export const CardInfoDefault = Template.bind({});
CardInfoDefault.args = {
  title:'ГАРАНТИЯ ВОЗВРАТА',
  text:'В случае задержки доставки товара, мы вернем средства по первой вашей просьбе. Доверие клиентов прежде всего!',
  icon:'Present'
};


