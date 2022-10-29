import youtubeLogo from "./youtube.png";

function YoutubeIcon({children}) {
	const youtubeLink =
		"https://www.youtube.com/channel/UCgVouvJdixPYTfl8mLPbGbw";
	return (
		<a href={youtubeLink}>
			<img src={youtubeLogo} style={{width: "30px", height: "30px"}} />
			{children}
		</a>
	);
}

export default YoutubeIcon;
