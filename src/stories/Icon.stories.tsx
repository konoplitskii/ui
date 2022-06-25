import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from "../Icon/Icon";

export default {
    title: 'Example/Icon',
    component: Icon,

} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Error = Template.bind({});
Error.args = {
    icon: 'Error',
    width: '16',
    height: '16',
}

export const Success = Template.bind({});
Success.args = {
    icon: 'Success',
    width: '14',
    height: '14',
}

export const EyeOpen = Template.bind({});
EyeOpen.args = {
    icon: 'EyeOpen',
    width: '16',
    height: '12',
}

export const EyeClose = Template.bind({});
EyeClose.args = {
    icon: 'EyeClose',
    width: '16',
    height: '16',
}

export const Present = Template.bind({});
Present.args = {
    icon: 'Present',
    width: '77',
    height: '62',
}