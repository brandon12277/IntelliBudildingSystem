
import React from 'react';
import "../css/room-card.css"


class RoomTable extends React.Component {
  render() {

    
    const rooms = [
      { roomNo: '101',owner:"brandon", price: '$1000', bhk: '2', sqFeet: '1000' },
      { roomNo: '102',owner:"mani", price: '$1200', bhk: '3', sqFeet: '1200' },
      { roomNo: '103',owner:"Not registered", price: '$1500', bhk: '2', sqFeet: '1100' },
      
    ];

    return (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Room No</th>
              <th>Owner</th>
              <th>Price</th>
              <th>BHK</th>
              <th>Sq Feet</th>
              <th className='rm-bd'></th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room, index) => {

              const col = { backgroundColor: room.owner  !== 'Not registered' ? 'lightgreen' : 'white' } 
              return(
              <tr key={index}>
                <td style={col}>{room.roomNo}</td>
                <td style={col}>{room.owner}</td>
                <td style={col}>{room.price}</td>
                <td style={col}>{room.bhk}</td>
                <td style={col}>{room.sqFeet}</td>
                <td className='rm-bd' ><button className="add-room-btn">Register</button></td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default RoomTable;