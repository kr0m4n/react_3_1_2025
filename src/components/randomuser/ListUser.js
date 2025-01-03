
function ListUser(props) {

	const {userData} = props

	return (
		<div className="kontajner">
		{userData != undefined && userData.map((item, index) => (
			<div>
				<img alt="user" src={item.picture} />
				<h2>{item.name} {item.surname}</h2>
				<a id="userEmail" href="mailto:{item.mail}">{item.mail}</a><br/>
				<a id="userTel" href="tel:{item.tel}">{item.tel}</a>
			</div>
		))}
		</div>
	);
}

export default ListUser;