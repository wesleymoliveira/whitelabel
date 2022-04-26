import { StyledButtonProps } from '@/typings/shared';
import { ButtonStyled } from './StyledButton.styled';

export const StyledButton = ({ secondary = false, children, ...props }: StyledButtonProps) => {
	return (
		<ButtonStyled
			variant='contained'
			fullWidth
			disableElevation
			secondary={secondary}
			loadingPosition='start'
			startIcon={<div></div>}
			{...props}
		>
			{children}
		</ButtonStyled>
	);
};
