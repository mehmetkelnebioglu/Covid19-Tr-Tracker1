import React,{useState,useEffect} from 'react';
import axios from 'axios';
function App() {

  const[data,setData]=useState("");
  const[date,setDate]=useState("");


  useEffect(() => {
    
    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
    .then(res=>setData(res.data[date]))
    .catch(err=>console.log(err))
  
    return () => {
      
    }
  }, [data,date])
  

  return (
    <div className="App">
      <div className="container">
        <div className="row">
            <div className="col-md-8 mx-auto mt-4 " >
              <h2 className="text-center text-white display-3">TURKIYE COVID-19 SEACRH ENGINE</h2>
              <input type="text" placeholder="dd/mm/yy" className="form-control"
              onChange={(e)=>setDate(e.target.value)}
              />
              <table class="table text-white table-striped table-hover table-borderless ">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">totalTests</th>
                        <th scope="col">totalPatients</th>
                        <th scope="col">totalDeaths</th>
                        <th scope="col">tests</th>
                        <th scope="col">cases</th>
                        <th scope="col">patients</th>
                        <th scope="col">deaths</th>


                      </tr>
                    </thead>
                    <tbody>
                      <tr className="" className={data===undefined ? "bg-danger": "bg-success"}>
                        <th scope="row">1</th>
                        <td style={{color:'white'}}>{data===undefined ? 'waiting for data' : data.totalTests}</td>
                        <td style={{color:'white'}}>{data===undefined ? 'waiting for data' : data.totalPatients}</td>
                        <td style={{color:'white'}}>{data===undefined ? 'waiting for data' : data.totalDeaths}</td>
                        <td style={{color:'white'}}>{data===undefined ? 'waiting for data' : data.tests}</td>
                        <td style={{color:'white'}}>{data===undefined ? 'waiting for data' : data.cases}</td>
                        <td style={{color:'white'}}>{data===undefined ? 'waiting for data' : data.patients}</td>
                        <td style={{color:'white'}}>{data===undefined ? 'waiting for data' : data.deaths}</td>

                      </tr>

                    
                    </tbody>
                  </table>


            </div>
        </div>
      </div>
    </div>
  );
}

export default App;

