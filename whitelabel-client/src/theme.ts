import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const typography = {
	fontFamily: 'Adamina, "Helvetica", "Arial", "sans-serif"',
	fontSize: 16,
	fontWeightRegular: 400,
	body1: {
		color: 'white'
	}
};

// Create a theme instance.
const theme = {
	typography,
	components: {
		MuiInputBase: {
			styleOverrides: {
				//removes default arrows to increase and decrease number on input type="number"
				root: {
					'& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
						display: 'none'
					},
					'& input[type=number]': {
						MozAppearance: 'textfield'
					}
				},
				//removes background changes on autofill
				input: {
					'&:-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus, :-webkit-autofill:active':
						{
							transitionDelay: '500000s',
							transitionDuration: '500000s',
							transitionProperty: 'background-color, color'
						}
				}
			}
		}
	},
	palette: {
		primary: {
			main: '#FFC244'
		},
		secondary: {
			main: '#19857b'
		},
		error: {
			main: red.A400
		},
		background: {
			default: '#2D2D2C'
		}
	}
};

export default createTheme(theme);
