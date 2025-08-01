import Images from "../assets/assests";

function HeaderMain() {
	return (
		<header className="headerBlock">
			<div className="row">
				<div className="col-md-3 col-lg-2 p-3 leftPanelBorder">
					<img src={Images.logo} alt="Logo" title="Logo" />
				</div>
				<div className="col-md-9 col-lg-10 p-3">
					search and profile icon Content goes here
				</div>
			</div>
		</header>
	)
}

export default function HeaderLayout() {
	return (
		<HeaderMain />
	)
}