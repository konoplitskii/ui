import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../Button/Button';
import Paragraph from "../Paragraph/Paragraph";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Paragraph',
  component: Paragraph,

} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />;

export const ParagraphText = Template.bind({});
ParagraphText.args = {
  text:'Вы можете убедиться в качестве  услуг, почитав отзывы наших клиентов. Будем рады если вы так же оставите свой комментарий.',
  customMarginTop:'0px',
  customMarginBottom:'0px'
};

