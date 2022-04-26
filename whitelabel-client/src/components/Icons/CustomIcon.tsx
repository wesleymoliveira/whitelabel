import Box from '@mui/material/Box';
import { ICustomIcon } from '@/typings/icons';
import Image from 'next/image';

export function CustomIcon({ sx = {}, onClick = undefined, iconSrc = '', alt = '' }: ICustomIcon) {
	return (
		<>
			<Box
				sx={{
					cursor: 'pointer',
					...sx
				}}
				onClick={onClick}
			>
				<Image src={iconSrc} alt={alt} />
			</Box>
		</>
	);
}
