import { render, screen } from '@testing-library/react';

import { Header } from './Header';

describe('<Header />', () => {
	it('should render the component', () => {
		const { container } = render(<Header />);

		expect(screen.getByTestId(/header/i)).toBeInTheDocument();

		expect(container.firstChild).toMatchSnapshot();
	});
});
