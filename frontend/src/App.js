import React from 'react'

import Navbar from './components/Navbar/Navbar'
import Budget from './components/Budget'
//import './app.css'
import './index.css'

function App(){
    return(
      <div >
      <Navbar brand='Budget' />
      <Budget/>
    </div>
    )
  
}

export default App;
