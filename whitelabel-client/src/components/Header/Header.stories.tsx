import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HeaderProps } from '@/typings/shared';
import { Header } from './Header';

export default {
	title: 'components/Header',
	component: Header
} as Meta;

export const Default: Story<HeaderProps> = () => <Header />;

export const NoLeft: Story<HeaderProps> = () => <Header noLeftContent />;

export const NoRight: Story<HeaderProps> = () => <Header noRightContent />;

export const NoCenter: Story<HeaderProps> = () => <Header noCenterContent />;

export const HomeOnLeft: Story<HeaderProps> = () => <Header homeOnLeft />;

export const WithActions: Story<HeaderProps> = () => (
	<Header leftAction={() => alert('Left Action')} rightAction={() => alert('Left Action')} />
);
