import { render, screen } from '@testing-library/react';

import { ItemsGrid } from './ItemsGrid';
import { auctionItems } from './mock/auctionItems';

describe('<ItemsGrid />', () => {
	it('should render the component', () => {
		const { container } = render(<ItemsGrid {...auctionItems} />);

		expect(screen.getByTestId(/items-grid/i)).toBeInTheDocument();

		expect(container.firstChild).toMatchSnapshot();
	});
});
