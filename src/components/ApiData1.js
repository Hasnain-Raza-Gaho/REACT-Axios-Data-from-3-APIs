import axios from 'axios'
import {useEffect,useState} from 'react'

function App(){

  const [getdata1, setdata1] = useState([])
  const url = "https://newsapi.org/v2/everything?q=tesla&from=$now.year-$now.month-$now.day&sortBy=publishedAt&apiKey=1866ed19591c4d99880992a3ca614497"
  
  
  
  useEffect(()=>{
    axios.get(url)
    .then((snap)=>{
      const data1 = snap.data['articles']
      console.log(data1)
      setdata1(data1)
     
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
  <img src={v.urlToImage} className="card-img-top" alt="apidataimage" />
  <div className="card-body">
    <p className="card-text">{v.description}</p>
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