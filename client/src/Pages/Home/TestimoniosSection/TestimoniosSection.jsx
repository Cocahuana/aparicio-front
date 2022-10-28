import CenteredSectionTitle from "../../../components/CenteredSectionTitle/CenteredSectionTitle";
import FeatureDivider from "../../../components/FeatureDivider/FeatureDivider";
function TestimoniosSection() {
	return (
		<>
			<CenteredSectionTitle title='TESTIMONIOS DE NUESTROS ALUMNOS' />

			<FeatureDivider />

			<div className='row row-cols-1 row-cols-md-2 g-4'>
				<div className='col'>
					<div className='card'>
						<video controls>
							<source
								src='/Videos/video_01.mp4'
								type='video/mp4'
							/>
						</video>
					</div>
				</div>
				<div className='col'>
					<div className='card'>
						<video controls>
							<source
								src='/Videos/video_02.mp4'
								type='video/mp4'
							/>
						</video>
					</div>
				</div>
				<div className='col'>
					<div className='card'>
						<video controls>
							<source
								src='/Videos/video_03.mp4'
								type='video/mp4'
							/>
						</video>
					</div>
				</div>
				<div className='col'>
					<div className='card'>
						<video controls>
							<source
								src='/Videos/video_04.mp4'
								type='video/mp4'
							/>
						</video>
					</div>
				</div>
			</div>

			<FeatureDivider />
		</>
	);
}

export default TestimoniosSection;
