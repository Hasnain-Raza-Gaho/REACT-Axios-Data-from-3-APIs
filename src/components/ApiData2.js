import axios from 'axios'
import {useEffect,useState} from 'react'

function App(){

  const [getdata1, setdata1] = useState([])
  const url = "https://jsonplaceholder.typicode.com/photos"
  
  
  
  useEffect(()=>{
    axios.get(url)
    .then((snap)=>{
      const data1 = snap.data;
      console.log(data1)
      setdata1(data1.slice(0,20))
     
  })
  console.log('1')
},[]) 

  return(
    
    <div className='container'>

        <div className="row">
  {getdata1.map((v,i)=>{
      return (
        <div  key={i} className="col-sm-6 col-md-4 col-xl-3 ">
        
<div className="card mb-3" style={{width: '200px'}}>
  <img src={v.url} className="card-img-top" alt="apidataimage" />
  <div className="card-body">
    <p className="card-text">{v.title}</p>
  </div>
 
</div>

</div>
)
})}
</div>
    </div>
  )
}

export default App;