import { useState } from 'react';
import { InputAdornment } from '@mui/material';
import { CustomIcon } from '@/components/Icons/CustomIcon';

import * as S from './StyledInput.styled';

import { IStyledInput } from './StyledInput.types';
import { usDollarMask } from '@/utils/price';

const CloseAdorment = ({ handler }) => (
	<InputAdornment position='end'>
		<CustomIcon
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}
			iconSrc={'/icons/CloseIcon.svg'}
			alt='Input Icon'
			onClick={handler}
		/>
	</InputAdornment>
);

export function StyledInput({
	initialValue = '',
	name,
	disabled = false,
	onInputChange,
	extended = false,
	noClearButton,
	...props
}: IStyledInput) {
	const [value, setValue] = useState<string | number>(initialValue || '');
	const clearInput = () => setValue('');

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.currentTarget.value;
		setValue(usDollarMask(newValue));
		!!onInputChange && onInputChange(usDollarMask(newValue));
	};

	return (
		<>
			<S.StyledInput
				onChange={onChange}
				endAdornment={noClearButton ? undefined : <CloseAdorment handler={clearInput} />}
				fullWidth
				value={value}
				disabled={disabled}
				data-testid='StyledInput'
				disableUnderline
				name={name}
				extended={extended}
				inputProps={extended ? { style: { textAlign: 'center' } } : undefined}
				{...props}
			/>
		</>
	);
}
