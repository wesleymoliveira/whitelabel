import { InputProps } from '@mui/material';
export interface IStyledInput extends InputProps {
	onInputChange?: (value: string | number) => void;
	initialValue?: string;
	disabled?: boolean;
	extended?: boolean;
	noClearButton?: boolean;
}
