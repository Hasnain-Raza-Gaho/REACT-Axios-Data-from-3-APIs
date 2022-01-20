import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import React from 'react'
import ApiData1 from './components/ApiData1'
import ApiData2 from './components/ApiData2'
import ApiData3 from './components/ApiData3'


function App(){


  return(
 <div>
 <h1 className='bg-warning p-3 text-white text-center mb-5'>API Data: 1</h1>
  <ApiData1/>

 <h1 className='bg-warning p-3 text-white text-center mb-5'>API Data: 2</h1>
  <ApiData2/>


 <h1 className='bg-warning p-3 text-white text-center mb-5'>API Data: 3</h1>
  <ApiData3/>

 </div>
  
  )
}

export default App;