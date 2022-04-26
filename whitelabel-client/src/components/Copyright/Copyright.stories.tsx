import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Copyright } from './Copyright';

export default {
	title: 'Copyright',
	component: Copyright
} as Meta;

export const Default: Story = () => <Copyright />;
