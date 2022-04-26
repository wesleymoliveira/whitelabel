import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ItemsGrid } from './ItemsGrid';
import { auctionItems } from './mock/auctionItems';

export default {
	title: 'components/ItemsGrid',
	component: ItemsGrid
} as Meta;

export const Default: Story = () => <ItemsGrid {...auctionItems} />;
