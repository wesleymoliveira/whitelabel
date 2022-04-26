import { render, screen } from '@testing-library/react';

import { Copyright } from './Copyright';

describe('<Copyright />', () => {
	it('should render the component', () => {
		const { container } = render(<Copyright />);

		expect(screen.getByTestId(/copyright/i)).toBeInTheDocument();

		expect(container.firstChild).toMatchSnapshot();
	});
});
