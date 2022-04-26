import { styled } from '@mui/material';
import { css } from '@emotion/react';
import LoadingButton from '@mui/lab/LoadingButton';
import { StyledButtonProps } from '@/typings/shared';

export const buttonModifiers = {
	secondary: theme => css`
		background: ${theme.palette.grey[900]};
		border: 1px solid ${theme.palette.common.black};
		color: ${theme.palette.common.white};

		&:hover {
			background: ${theme.palette.common.black};
		}
	`
};

export const ButtonStyled = styled(LoadingButton, {
	shouldForwardProp: prop => prop !== 'secondary'
})<StyledButtonProps>`
	${({ theme, secondary }) => css`
		height: 50px;
		border-radius: 100px;
		text-transform: initial;
		padding: 10px 20px;
		color: ${theme.palette.background.paper};
		background: linear-gradient(0deg, #cf903d 0%, #ffae44 50.52%, #ffcb44 100%);
		border: 1px solid ${theme.palette.common.black};
		font-family: Outfit;
		${secondary && buttonModifiers.secondary(theme)};
	`}
`;
