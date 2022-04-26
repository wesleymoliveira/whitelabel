import { Input, styled } from '@mui/material';
import { css } from '@emotion/react';
import { IStyledInput } from './StyledInput.types';

export const inputModifiers = {
	extended: () => css`
		border-radius: 30px;
		height: 80px;
		font-size: 50px;
		text-align: 'center';
		line-height: 63px;
	`
};

export const StyledInput = styled(Input, {
	shouldForwardProp: prop => prop !== 'extended'
})<IStyledInput>`
	${({ theme, extended }) => css`
		background: ${theme.palette.grey[900]};
		border: 1px solid ${theme.palette.common.black};
		color: ${theme.palette.common.white};
		height: 50px;
		border-radius: 100px;
		text-transform: initial;
		padding: 10px 20px;
		caret-color: #007aff;
		font-family: Outfit;
		${extended && inputModifiers.extended()};
	`}
`;
