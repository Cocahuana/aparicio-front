import React from "react";

function ServiciosHeader({title, text}) {
	return (
		<div className='container marketing mt-3 w-75'>
			<div className='card border-primary'>
				<div className='card-header border-primary bg-primary'>
					<strong className='text-bg-primary'>
						
						{title}
					</strong>
				</div>
				<div className='card-body'>
					<p className='card-text'>
						
						{text}
					</p>
				</div>
			</div>
		</div>
	);
}

export default ServiciosHeader;
