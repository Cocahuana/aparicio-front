import {Col, Card} from "react-bootstrap";
import CenteredSectionTitle from "../../components/CenteredSectionTitle/CenteredSectionTitle";
import FeatureDivider from "../../components/FeatureDivider/FeatureDivider";
import video_05 from "./assets/video_05.mp4";
import video_06 from "./assets/video_06.mp4";
import video_07 from "./assets/video_07.mp4";
import video_08 from "./assets/video_08.mp4";
import VideoList from "../../components/VideoList/VideoList";
function Testimonios() {
	const videos = [video_05, video_06, video_07, video_08];
	return (
		<>
			<div className='container marketing'>
				<CenteredSectionTitle title='TESTIMONIOS DE NUESTROS ALUMNOS' />

				<FeatureDivider />

				<div className='row row-cols-1 row-cols-md-2 g-4'>
					<VideoList videos={videos} />
				</div>
			</div>
		</>
	);
}

export default Testimonios;
