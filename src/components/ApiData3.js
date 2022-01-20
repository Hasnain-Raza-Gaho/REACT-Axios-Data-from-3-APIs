import axios from 'axios'
import {useEffect,useState} from 'react'

function App(){

  const [getdata1, setdata1] = useState([])
  const url = "https://jsonplaceholder.typicode.com/users"
  
  
  
  useEffect(()=>{
    axios.get(url)
    .then((snap)=>{
      const data1 = snap.data;
      console.log(data1)
      setdata1(data1)
     
  })
  console.log('1')
},[]) 

  return(
    
    <div className="accordion" id="accordionExample">

     
  {getdata1.map((v,i)=>{
      return (
        <div className="accordion-item" key={i}>
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            User {v.id}
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p><strong>Name: </strong> {v.name}</p>
            <p><strong>Email: </strong> {v.email}</p>
            <p><strong>Address: </strong> {v.address.street} {v.address.suite}  {v.address.city} - {v.address.zipcode} </p>
            <p><strong>Phone: </strong> {v.phone.slice(0,13)}</p>
            <p><strong>Company: </strong><span className=' bg-warning p-2 rounded '>{v.company.name}</span> &nbsp;<span className=' bg-light my-5 p-2 rounded '>{v.company.catchPhrase}</span></p>


          </div>
        </div>
      </div>
)
})}
</div>



  )
}

export default App;
