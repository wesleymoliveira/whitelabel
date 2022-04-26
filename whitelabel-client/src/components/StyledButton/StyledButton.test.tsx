import { render, screen } from '@testing-library/react';

import { StyledButton } from './StyledButton';

describe('<StyledButton />', () => {
	it('should render the default button', () => {
		const { container } = render(<StyledButton text='DefaultButton' />);

		expect(screen.getByRole('button', { name: /DefaultButton/i })).toBeInTheDocument();

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should render the secondary button', () => {
		render(<StyledButton secondary text='SecondaryButton' />);

		expect(screen.getByRole('button', { name: /SecondaryButton/i })).toBeInTheDocument();
	});
});
