import ListUser from './ListUser'
import GetUser from './GetUser'

import {useState} from "react"

function RandomUser() {
 
  const [userData, setUserData] = useState()

  function handleUserData(data) {
    setUserData(data)
  }

  return ( 
    <div className="kontajner" id="zoznam_uloh">

    <GetUser onGenerateData={handleUserData} />
    <ListUser userData={userData} />

    </div>
  );
}

export default RandomUser;
