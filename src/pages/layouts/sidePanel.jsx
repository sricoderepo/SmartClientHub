
export default function SidePanel() {
	let menuList = [
		{iconClass: 'dashboardIcon', listName: 'Dashboard'},
		{iconClass: 'profileIcon', listName: 'Customers'},
		{iconClass: 'orderIcon', listName: 'Orders'}
	];
	return (
		<>
			<nav>
				<ul>
					{
						menuList.map((item, index) => (
							<li className={index===1 ? 'mt-2 px-2 active' : 'mt-2 px-2'} key={index}>
								<span className={"me-1 listIcon " + item.iconClass}></span>
								<span>
									{item.listName}
								</span>
							</li>
						))
					}
				</ul>
			</nav>
		</>
	)
}