import { ReactNode } from 'react';
import { Box } from '@mui/material';
import { isMobile, browserName } from 'react-device-detect';
import { useEffect, useState } from 'react';

interface ILayout {
	header: ReactNode;
	children: ReactNode;
	footer?: ReactNode;
}

export const Layout = ({ header, children, footer }: ILayout) => {
	const [safariMobile, setSafariMobile] = useState(false);

	useEffect(() => {
		if (isMobile && browserName.includes('Safari')) {
			setSafariMobile(true);
		}
	}, []);
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				overflowY: 'auto',
				overflowX: 'hidden',
				minHeight: '-webkit-fill-available',
				height: safariMobile ? '0' : '90vh'
			}}
		>
			{header}
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					flexGrow: 1,
					py: '12px',
					px: '20px'
				}}
				component='main'
			>
				{children}
			</Box>
			{footer ? (
				<Box
					component='footer'
					sx={{
						background:
							'radial-gradient(102.86% 102.86% at 47.95% 160.94%, #FFC244 0%, rgba(255, 194, 68, 0) 100%)',
						width: '100%'
					}}
				>
					{footer}
				</Box>
			) : undefined}
		</Box>
	);
};
