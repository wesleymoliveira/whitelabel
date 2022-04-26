import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Image from 'next/image';
import { Box } from '@mui/material';

export const Copyright = () => {
	return (
		<Box
			data-testid='copyright'
			sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
		>
			<Typography fontFamily='Roboto, sans-serif' fontWeight={400} fontSize={14}>
				Powered by
			</Typography>
			<MuiLink color='inherit' href='/'>
				<Image
					src='https://res.cloudinary.com/dgop0ic8b/image/upload/v1650298129/icons/logo_vjopfc.svg'
					alt='sortium logo'
					height={35}
					width={150}
				/>
			</MuiLink>
		</Box>
	);
};
