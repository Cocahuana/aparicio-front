import {Col, Card} from "react-bootstrap";

function VideoItem({video}) {
	return (
		<Col>
			<Card>
				<video controls>
					<source src={video} type='video/mp4' />
				</video>
			</Card>
		</Col>
	);
}

export default VideoItem;
