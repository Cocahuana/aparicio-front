import React from "react";

function ServiciosHeader({title, content}) {
	return (
		<div className='container marketing mt-3 w-75'>
			<div className='card border-primary'>
				<div className='card-header border-primary bg-primary'>
					<strong className='text-bg-primary'>{title}</strong>
				</div>
				<div className='card-body'>
					{content.map((item) => (
						<p className='card-text'>{item.text}</p>
					))}
				</div>
			</div>
		</div>
	);
}

export default ServiciosHeader;
