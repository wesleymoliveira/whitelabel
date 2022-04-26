import { render, screen } from '@testing-library/react';

import { HookedInput } from './HookedInput';

describe('<HookedInput />', () => {
	it('should render the component', () => {
		const { container } = render(<HookedInput />);

		expect(screen.getByTestId(/hooked-input/i)).toBeInTheDocument();

		expect(container.firstChild).toMatchSnapshot();
	});
});
