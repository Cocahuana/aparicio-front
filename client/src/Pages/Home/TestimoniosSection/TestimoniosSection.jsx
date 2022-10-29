import CenteredSectionTitle from "../../../components/CenteredSectionTitle/CenteredSectionTitle";
import FeatureDivider from "../../../components/FeatureDivider/FeatureDivider";
import video_01 from "./assets/video_01.mp4";
import video_02 from "./assets/video_02.mp4";
import video_03 from "./assets/video_03.mp4";
import video_04 from "./assets/video_04.mp4";
import VideoList from "../../../components/VideoList/VideoList";
function TestimoniosSection() {
	const videos = [video_01, video_02, video_03, video_04];
	return (
		<>
			<CenteredSectionTitle title='TESTIMONIOS DE NUESTROS ALUMNOS' />

			<FeatureDivider />

			<div className='row row-cols-1 row-cols-md-2 g-4'>
				<VideoList videos={videos} />
			</div>

			<FeatureDivider />
		</>
	);
}

export default TestimoniosSection;
