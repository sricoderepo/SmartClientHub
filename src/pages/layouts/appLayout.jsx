
import SidePanel from "./sidePanel";
import HeaderLayout from '../../header/headerLayout';
import Dashboard from "../../dashboard/dashboard";


export default function AppLayout() {
	return (
		<>
			<div className="container-fluid appLayout-container">
				<div className="row">
					<div className="col-md-12">
						<HeaderLayout />
					</div>
				</div>

				<div className="row">
					<div className="col-md-3 col-lg-2 px-3 leftPanelBorder">
						<SidePanel />
					</div>
					<div className="col-md-9 col-lg-10 px-3">
						<Dashboard />
					</div>
				</div>
			</div>
		</>
	)
}