
import SidePanel from "./sidePanel";
import Dashboard from "../../dashboard/dashboard";


export default function AppLayout() {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-3">
						<SidePanel />
					</div>
					<div className="col-md-9">
						<Dashboard />
					</div>
				</div>
			</div>
		</>
	)
}