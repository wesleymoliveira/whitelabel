import Image from 'next/image';
import { Typography, Box } from '@mui/material';
import { HeaderProps } from '@/typings/shared';
import * as S from './Header.styled';
import { useRouter } from 'next/router';

export function Header({
	leftAction = () => undefined,
	rightAction = () => undefined,
	noCenterContent = false,
	noLeftContent = false,
	noRightContent = false,
	homeOnLeft = false
}: HeaderProps) {
	const { push } = useRouter();

	const handlePush = () => push('/home');

	return (
		<S.StyledBox p={homeOnLeft ? 2.5 : 1} data-testid='header' component='header'>
			{noLeftContent ? (
				<Box />
			) : homeOnLeft ? (
				<Image
					src='https://res.cloudinary.com/dgop0ic8b/image/upload/v1650298104/icons/home_asj9qz.svg'
					alt='Arrow Back'
					width='25'
					height='25'
					onClick={leftAction}
				/>
			) : (
				<Box pl={2} py={1} onClick={leftAction}>
					<Image
						src='https://res.cloudinary.com/dgop0ic8b/image/upload/v1650298097/icons/arrow-back_yz4824.svg'
						alt='Arrow Back'
						width='18'
						height='13'
						style={{ cursor: 'pointer' }}
					/>
				</Box>
			)}
			{!noCenterContent ? (
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						position: 'absolute',
						cursor: 'pointer',
						left: '50%',
						top: '50%',
						transform: 'translate(-50%, -50%)'
					}}
					onClick={handlePush}
				>
					<Typography lineHeight={1.1} fontSize={7} fontWeight={400} textTransform='uppercase'>
						A Charity Gala & Dinner for
					</Typography>
					<Typography lineHeight={1.1} fontSize={30} fontWeight={400} textTransform='uppercase'>
						UKRAINE
					</Typography>
					<Typography lineHeight={1.1} fontSize={8} fontWeight={400} textTransform='uppercase'>
						Benefitting the Red Cross
					</Typography>
				</Box>
			) : (
				<Box />
			)}
			{noRightContent ? (
				<Box />
			) : (
				<Box pr={2} py={1} onClick={rightAction}>
					<Image
						src='https://res.cloudinary.com/dgop0ic8b/image/upload/v1650298104/icons/heart1_spo1vl.svg'
						alt='Heart Menu'
						width='25'
						height='25'
						style={{ cursor: 'pointer' }}
					/>
				</Box>
			)}
		</S.StyledBox>
	);
}
