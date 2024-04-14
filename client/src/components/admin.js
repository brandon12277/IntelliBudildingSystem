import { react,useState,useEffect } from "react"
import "../css/admin.css"

import { Pie } from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto"
import RoomForm from "./room-form";

import RoomTable from "./roomCard";

 const Admin = () =>{

    const [show,setShow] = useState(null)

    const handleRoomForm = () =>{
        if(show)setShow(null)
        else
        setShow(1)
    }
    
    const[data,setData] = useState({
        labels: ['Owners', 'Tenants', 'Employees'],
        datasets: [
          {
            backgroundColor: ['red', ' blue','green'], 
            data: [15,20,5], 
          },
        ],
      })
    
    return (
        <>


            <div className="cont">

                 <div className="nav">
                    <h3 className="text-head">DashBoard</h3>
                    <div className="ad-name">
                        Welcome, Brandon

                    </div>

                 </div>
                 <div className="chart-analysis">
                    <div className="pie">
                       <Pie data={data} />

                    </div>

                 </div>
               
                 <div className="room-data">
                   
                    <div className="admin-butts">

                    <button onClick={handleRoomForm} className="add-room-btn">+ Add Room</button>
                    <button onClick={handleRoomForm} className="add-room-btn">+ Add Owner </button>

                    </div>
                    {
                        show?
                        <RoomForm
                        
                        show={show}
                        setShow ={setShow}
                        
                        />
                        :
                        <div></div>
                    }
                    <br></br>
                    <div className="room-elems">
                      <RoomTable/>

                    </div>
                       


                 </div>
       
            </div>

         
        </>
    )


}

export default Admin;