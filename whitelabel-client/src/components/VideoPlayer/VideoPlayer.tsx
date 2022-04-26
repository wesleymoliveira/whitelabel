/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useState } from 'react';
import * as S from './VideoPlayer.styled';
import { browserName } from 'react-device-detect';

export function VideoPlayer({ src }) {
	const [safariMobile, setSafariMobile] = useState(false);

	useEffect(() => {
		if (browserName.includes('Safari')) {
			setSafariMobile(true);
		}
	}, []);

	return (
		<S.Wrapper data-testid='video-player'>
			<S.Video
				src={src}
				playsInline={safariMobile}
				controls
				width='350px'
				height='350px'
				autoPlay
			/>
		</S.Wrapper>
	);
}
