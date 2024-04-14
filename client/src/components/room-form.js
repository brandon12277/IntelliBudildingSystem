
import { react,useState,useEffect } from "react"
import "../css/admin.css"




const RoomForm = ({ show,setShow }) =>{

    const handleRoomForm = () =>{
        if(show)setShow(null)
        else
        setShow(1)
    }
    return(
        <>

                <div className="overlay" id="room-div">
              
                <div class="room-form">
                <button onClick={handleRoomForm}>Close</button>
                <h3>Room Details</h3>
                <form action="/submit" method="POST">
                <div class="input-container">
                <label for="roomNumber">Room Number</label>
                <input type="text" id="roomNumber" name="roomNumber" required></input>
                </div>
                <div class="input-container">
                <label for="roomNumber">Sq Feet</label>
                <input type="text" id="roomNumber" name="sqfeet" required></input>
                </div>
                <div class="input-container">
                <label for="roomNumber">Price</label>
                <input type="text" id="roomNumber" name="price" required></input>
                </div>
                <div class="input-container">
                <label for="roomType">BHK</label>
                <select id="roomType" name="roomType" required>
                    <option value="">Select BHK</option>
                    <option value="standard">1</option>
                    <option value="deluxe">2</option>
                    <option value="suite">3</option>
                </select>
                </div>
                <button type="submit">Submit</button>
                </form>
                </div>

</div>
         
        </>
    )
}

export default RoomForm