import { styled, TextField } from '@mui/material';

export const StyledTextField = styled(TextField)({
	'& .MuiOutlinedInput-notchedOutline': {
		borderColor: '#79747E'
	},
	'& .MuiOutlinedInput-input': {
		color: '#FFFFFF',
		fontFamily: 'Roboto, sans-serif',
		fontWeight: 400,
		fontSize: '16px',
		lineHeight: '24px'
	},
	'& label.Mui-focused': {
		color: '#79747E',
		fontFamily: 'Roboto, sans-serif',
		fontWeight: 400
	},
	'& label': {
		color: '#79747E',
		fontFamily: 'Roboto, sans-serif',
		fontWeight: 400
	}
});
