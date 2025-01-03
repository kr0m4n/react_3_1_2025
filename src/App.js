import RandomUser from './components/randomuser/RandomUser';

import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
    <header>
      <div id="header_obal">
        <div className="kontajner">
          <h1><a href="index.html"> Random user</a></h1>
        </div>
      </div>
      <div className="kontajner" id="pasik"></div>
    </header>

    <main>
    <Routes> 
        <Route path="/" element={ <RandomUser /> }/>
      </Routes>
    </main>
    </>
  );
}

export default App;
