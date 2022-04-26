import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { StyledButton } from './StyledButton';
import { StyledButtonProps } from '@/typings/shared';
import { ButtonProps } from '@mui/material';

export default {
	title: 'components/StyledButton',
	component: StyledButton
} as Meta;

export const Default: Story<StyledButtonProps & ButtonProps> = () => (
	<StyledButton>test default button</StyledButton>
);

export const Secondary: Story<StyledButtonProps & ButtonProps> = () => (
	<StyledButton secondary>test secondary butto</StyledButton>
);

export const Loading: Story<StyledButtonProps & ButtonProps> = () => (
	<StyledButton loading>Loading Button</StyledButton>
);
