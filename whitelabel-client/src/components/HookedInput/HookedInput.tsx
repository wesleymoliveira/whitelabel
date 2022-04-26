import { useController } from 'react-hook-form';
import { IHookedInput } from '@/typings/shared';
import { StyledTextField } from './HookedInput.styled';
import { Typography } from '@mui/material';

const ErrorText = ({ children }) => (
	<Typography fontFamily='Roboto, sans-serif' fontSize='14px' fontWeight={500} color='#E11900'>
		{children}
	</Typography>
);

export function HookedInput({ helperText, ...props }: IHookedInput) {
	const { field, fieldState } = useController({
		name: props.name,
		control: props.control,
		defaultValue: props.defaultValue,
		rules: props.rules || {}
	});
	return (
		<StyledTextField
			{...props}
			{...field}
			error={!!fieldState.error}
			helperText={fieldState.error ? <ErrorText>{helperText}</ErrorText> : undefined}
		/>
	);
}
