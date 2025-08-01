import Images from "../assets/assests"

function HeaderBlock() {
	return (
		<header className="headerBlock">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-2">
						<div className="logo">
							<img src={Images.logo} alt="logo" />
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default function HeaderMain() {
	return (
		<HeaderBlock />
	)
}