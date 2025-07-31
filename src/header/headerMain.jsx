function HeaderBlock() {
	return (
		<div className="headerBlock">
			<div className="container-fluid">
				<div className="row">
					<div className="logo">
						<img src="src/assets/logo.png" alt="logo" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default function HeaderMain() {
	return (
		<HeaderBlock />
	)
}