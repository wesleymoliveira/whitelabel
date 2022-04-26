export interface ExclamationIconProps {
	size?: 'small' | 'inherit' | 'medium' | 'large';
	color?: string;
	style?: any;
}
export interface CloseIconProps {
	onClick?: () => void;
}

export interface ICustomIcon {
	sx?: SxProps;
	onClick?: (e: MouseEventHandler<HTMLDivElement>) => void;
	iconSrc: string;
	alt: string;
}
