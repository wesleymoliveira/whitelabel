import { Box, styled } from '@mui/material';
import { css } from '@emotion/react';

export const StyledBox = styled(Box)`
	${({ theme }) => css`
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid ${theme.palette.common.black};
		position: relative;
		min-height: 60px;
	`}
`;
