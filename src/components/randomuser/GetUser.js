import {useRef, useEffect} from "react"  //možno nebudem potrebovať, súvisí s úlohou na webináre
import axios from "axios"

function GetUser(props) {

	const {onGenerateData} = props

	function getData() {

		const url = "https://randomuser.me/api/"

		axios.get(url).then(response => {
			const user = response.data.results[0]
			let data = []

			data.push({
				name: user.name.first,
				surname: user.name.last,
				mail: user.email,
				tel: user.phone,
				picture: user.picture.large
			})
		onGenerateData(data)
		})
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div className="kontajner">
			<button id="novyPouzoivatel" onClick={getData}>Nový Používateľ</button>
		</div>
	);
}

export default GetUser;