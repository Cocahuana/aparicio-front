function ServiciosCards({content}) {
	// Content must be an array of objects. Each object is a card.
	// Content It should accepts only img, alt, title and description

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignContent: "center",
				margin: "3.25rem",
			}}>
			<div className='card-group w-75'>
				{content.map((item) => (
					<div className='card border-primary'>
						<img
							className='card-img-top h-50 p-5'
							src={item.img}
							alt={item.alt}
						/>
						<div className='card-body'>
							<h5 className='card-title'>
								<strong>{item.title}</strong>
							</h5>
							<p className='card-text'>{item.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default ServiciosCards;
