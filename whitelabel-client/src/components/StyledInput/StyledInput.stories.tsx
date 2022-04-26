import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box } from '@mui/system';
import { StyledInput } from './StyledInput';
import { IStyledInput } from './StyledInput.types';

export default {
	title: 'components/StyledInput',
	component: StyledInput
} as Meta;

export const Default: Story<IStyledInput> = () => (
	<Box
		sx={{
			mb: 2
		}}
	>
		<StyledInput name='default' />
	</Box>
);

export const Extended: Story<IStyledInput> = () => (
	<Box
		sx={{
			mb: 2
		}}
	>
		<StyledInput name='extended' extended />
	</Box>
);

export const NoClearButton: Story<IStyledInput> = () => (
	<Box
		sx={{
			mb: 2
		}}
	>
		<StyledInput name='extended' noClearButton />
	</Box>
);
