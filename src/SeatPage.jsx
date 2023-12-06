import './SeatPage.css';
import KursiAvailable, { datase } from './Component/kursiAvailable';
import KursiNotAvailable from './Component/kursiNotAvailable';
import { useContext, useState, createContext, useEffect } from 'react';
import { count } from './Component/kursiAvailable';
import axios from 'axios';


const room_id = 1;
function removeDuplicates(arr) {
  return arr.filter((item,
      index) => arr.indexOf(item) === index);
}
const getData = async ()=>{

  const res = await axios.get("https://localhost:7161/api/Movies").then(response=>console.log(response)).catch(error => {console.log(error)})
  return res;
  
}

getData();
export const limit = 3;
export const ThemesContext = createContext();


function SeatPage() {
  let [data, setData] = useState([]);
  let dataset = datase; 
  const fetchApi = async ()=>{
   
    
  }

  const updateAPI = async (data)=>{
    const datas = await  axios.put( `https://localhost:7161/api/Movies/${data.number}?seatNumber=${data.number}`, {
       seats_ID : data.id,
       ticket_ID : data.ticket,
       room_ID : data.room,
       seat_Number : data.number,
       seat_IsAvailable : data.IsAvailable
    }).then(response=>console.log(response.data));
  }
  const setBooking = async(data)=>{
    const datas = await axios.post(`https://localhost:7161/api/Movies/Booking`, {
      Movie_ID : "Wowowowow",
      Customer_ID : 1
    })
  }
  let [selectedSeat, setSelectedSeat] = useState([0]);
  let [temp, setTemp] = useState([]);
  let [display, setDisplay] = useState("nodisplay");
  let arr= [];
  
  
 
  useEffect(()=>{
    fetch(`https://localhost:7161/api/Movies/${room_id}`).then(res=>res.json())
    .then(data=>{
      setData(data)
    })
  })
  
 
  
  return (
    <ThemesContext.Provider value = {selectedSeat}>

    <div className="small-info-container-container">
    
    <p className="studio">Studio 2</p>
    <div className="small-info-container">
        <p className="title">Avengers Endgame</p>
    </div>
    
    
    </div>
    <div className="container">
      <div className = "seat-container">
      <div className="screen-display-container">
        <div className="yellow-line one"></div>
        <div className="yellow-line two"></div>
        <div className="yellow-line three"></div>
        <div className="yellow-line seven"></div>
        Screen
        <div className="yellow-line eight"></div>
        <div className="yellow-line four"></div>
        <div className="yellow-line five"></div>
        <div className="yellow-line six"></div>
      </div>

      <div className="seat-display-image-container-row">
        {
          data.map((val, index)=>{
            if(val.seat_IsAvailable == true){
              return <KursiAvailable chairNumber= {val.seat_Number}></KursiAvailable>
              
            }else if(val.seat_IsAvailable==false){
              return <KursiNotAvailable chairNumber= "X"></KursiNotAvailable>
            }
            }
          )
        }
      </div>

      <div className="submit-container"><button onClick={()=>{
          if(count<limit){
            alert("Please pick the correct amount of chair!")
          }else{
            setDisplay("display")
            dataset = removeDuplicates(dataset)
            dataset.forEach(val=>{
              updateAPI({id:val, ticket:2, room:1, number:val, IsAvailable:false})
            })
            setBooking();
          }
         
        }}>Done</button></div>
      
      </div>
      
      
      

        



  <div id="myModal" className={`modal ${display}`}>

  <div className="modal-content">
    <div className="modal-body">
      <p>Successful</p>
      <a>Go back to home page</a>
    </div>
  </div>

</div>
    </div>
    </ThemesContext.Provider>
  );
}

export default SeatPage;
