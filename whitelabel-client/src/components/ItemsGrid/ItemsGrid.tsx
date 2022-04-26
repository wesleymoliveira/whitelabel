import { AuctionItems } from '@/typings/shared';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { Link } from '@/components/Link';
import * as S from './ItemsGrid.styled';
import { formatMoney } from '@/utils/price';

export function ItemsGrid({ auction_items }: AuctionItems) {
	return (
		<S.Wrapper data-testid='items-grid'>
			{auction_items?.map(({ id, image, name, slug, highest_bid, price }) => (
				<Box key={id}>
					<Box
						sx={{
							position: 'relative',
							width: 350,
							height: 350,
							cursor: 'pointer',
							'& img': {
								border: '1px solid #000000',
								borderRadius: '30px'
							},
							pt: '10px'
						}}
					>
						<Link href={`/item/${slug}`}>
							<Image src={image} width='350' height='350' layout='fixed' alt={name} />
						</Link>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							my: 3
						}}
					>
						<Typography
							fontSize='14px'
							fontWeight={500}
							fontFamily='Outfit'
							lineHeight='18px'
							letterSpacing='0.38px'
						>
							{highest_bid ? 'Current Top bid' : 'Starting Price'}
						</Typography>
						<Typography
							fontSize='30px'
							fontWeight={400}
							fontFamily='Outfit'
							lineHeight='41px'
							letterSpacing='0.38px'
							pb='4px'
						>
							{formatMoney(highest_bid ? highest_bid : price)}
						</Typography>
						<Image
							src='https://res.cloudinary.com/dgop0ic8b/image/upload/v1650298104/icons/geo_rounded_voaq5i.svg'
							width='103'
							height='23'
							alt='Art'
						/>
					</Box>
				</Box>
			))}
		</S.Wrapper>
	);
}
