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

  const res = await axios.get("https://localhost:7161/api/Movies")
  console.log(res.data);
  return res;
  
}

getData();
export const limit = 3;
export const ThemesContext = createContext();


function SeatPage() {
  let [data, setData] = useState([]);
  let dataset = datase; 
  const fetchApi = async ()=>{
    // const res = await axios.get("https://localhost:7161/api/Movies")
    // console.log(res.data);
    // return res.data;
    
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
  let [selectedSeat, setSelectedSeat] = useState([0]);
  let [temp, setTemp] = useState([]);
  let [display, setDisplay] = useState("nodisplay");
  let arr= [];
  
  
  // let data = fetchApi()
  useEffect(()=>{
    fetch(`https://localhost:7161/api/Movies/${room_id}`).then(res=>res.json())
    .then(data=>{
      setData(data)
    })
  })
  // const data = [
  //   {Seats_ID : 1, Ticket_ID : 2, Room_ID : 1, Seat_Number : 1, Seat_isAvailable : true , },
  //   {Seats_ID : 2, Ticket_ID : 2, Room_ID : 1, Seat_Number : 2, Seat_isAvailable : true , },
  //   {Seats_ID : 3, Ticket_ID : 2, Room_ID : 1, Seat_Number : 3, Seat_isAvailable : false , },
  //   {Seats_ID : 4, Ticket_ID : 2, Room_ID : 1, Seat_Number : 4, Seat_isAvailable : false , },
  //   {Seats_ID : 5, Ticket_ID : 2, Room_ID : 1, Seat_Number : 5, Seat_isAvailable : false , },
  //   {Seats_ID : 6, Ticket_ID : 2, Room_ID : 1, Seat_Number : 6, Seat_isAvailable : true , },
  //   {Seats_ID : 7, Ticket_ID : 2, Room_ID : 1, Seat_Number : 7, Seat_isAvailable : true , },
  //   {Seats_ID : 8, Ticket_ID : 2, Room_ID : 1, Seat_Number : 8, Seat_isAvailable : false , },
  //   {Seats_ID : 9, Ticket_ID : 2, Room_ID : 1, Seat_Number : 9, Seat_isAvailable : true , },
  //   {Seats_ID : 10, Ticket_ID : 2, Room_ID : 1, Seat_Number : 10, Seat_isAvailable : false , },
  //   {Seats_ID : 11, Ticket_ID : 2, Room_ID : 1, Seat_Number : 11, Seat_isAvailable : true , },
  //   {Seats_ID : 12, Ticket_ID : 2, Room_ID : 1, Seat_Number : 12, Seat_isAvailable : true , },
  //   {Seats_ID : 13, Ticket_ID : 2, Room_ID : 1, Seat_Number : 13, Seat_isAvailable : false , },
  //   {Seats_ID : 14, Ticket_ID : 2, Room_ID : 1, Seat_Number : 14, Seat_isAvailable : false , },
  //   {Seats_ID : 15, Ticket_ID : 2, Room_ID : 1, Seat_Number : 15, Seat_isAvailable : false , },
  //   {Seats_ID : 16, Ticket_ID : 2, Room_ID : 1, Seat_Number : 16, Seat_isAvailable : true , },
  //   {Seats_ID : 17, Ticket_ID : 2, Room_ID : 1, Seat_Number : 17, Seat_isAvailable : true , },
  //   {Seats_ID : 18, Ticket_ID : 2, Room_ID : 1, Seat_Number : 18, Seat_isAvailable : false , },
  //   {Seats_ID : 19, Ticket_ID : 2, Room_ID : 1, Seat_Number : 19, Seat_isAvailable : true , },
  //   {Seats_ID : 20, Ticket_ID : 2, Room_ID : 1, Seat_Number : 20, Seat_isAvailable : true , },
  //   {Seats_ID : 21, Ticket_ID : 2, Room_ID : 1, Seat_Number : 21, Seat_isAvailable : true , },
  //   {Seats_ID : 22, Ticket_ID : 2, Room_ID : 1, Seat_Number : 22, Seat_isAvailable : true , },
  //   {Seats_ID : 23, Ticket_ID : 2, Room_ID : 1, Seat_Number : 23, Seat_isAvailable : false , },
  //   {Seats_ID : 24, Ticket_ID : 2, Room_ID : 1, Seat_Number : 24, Seat_isAvailable : false , },
  //   {Seats_ID : 25, Ticket_ID : 2, Room_ID : 1, Seat_Number : 25, Seat_isAvailable : false , },
  //   {Seats_ID : 26, Ticket_ID : 2, Room_ID : 1, Seat_Number : 26, Seat_isAvailable : true , },
  //   {Seats_ID : 27, Ticket_ID : 2, Room_ID : 1, Seat_Number : 27, Seat_isAvailable : true , },
  //   {Seats_ID : 28, Ticket_ID : 2, Room_ID : 1, Seat_Number : 28, Seat_isAvailable : false , },
  //   {Seats_ID : 29, Ticket_ID : 2, Room_ID : 1, Seat_Number : 29, Seat_isAvailable : true , },
  //   {Seats_ID : 30, Ticket_ID : 2, Room_ID : 1, Seat_Number : 30, Seat_isAvailable : true , },
  //   {Seats_ID : 31, Ticket_ID : 2, Room_ID : 1, Seat_Number : 31, Seat_isAvailable : true , },
  //   {Seats_ID : 32, Ticket_ID : 2, Room_ID : 1, Seat_Number : 32, Seat_isAvailable : true , },
  //   {Seats_ID : 33, Ticket_ID : 2, Room_ID : 1, Seat_Number : 33, Seat_isAvailable : false , },
  //   {Seats_ID : 34, Ticket_ID : 2, Room_ID : 1, Seat_Number : 34, Seat_isAvailable : false , },
  //   {Seats_ID : 35, Ticket_ID : 2, Room_ID : 1, Seat_Number : 35, Seat_isAvailable : false , },
  //   {Seats_ID : 36, Ticket_ID : 2, Room_ID : 1, Seat_Number : 36, Seat_isAvailable : true , },
  //   {Seats_ID : 37, Ticket_ID : 2, Room_ID : 1, Seat_Number : 37, Seat_isAvailable : true , },
  //   {Seats_ID : 38, Ticket_ID : 2, Room_ID : 1, Seat_Number : 38, Seat_isAvailable : false , },
  //   {Seats_ID : 39, Ticket_ID : 2, Room_ID : 1, Seat_Number : 39, Seat_isAvailable : true , },
  //   {Seats_ID : 40, Ticket_ID : 2, Room_ID : 1, Seat_Number : 40, Seat_isAvailable : true , },
  //   {Seats_ID : 41, Ticket_ID : 2, Room_ID : 1, Seat_Number : 41, Seat_isAvailable : true , },
  //   {Seats_ID : 42, Ticket_ID : 2, Room_ID : 1, Seat_Number : 42, Seat_isAvailable : true , },
  //   {Seats_ID : 43, Ticket_ID : 2, Room_ID : 1, Seat_Number : 43, Seat_isAvailable : true , },
  //   {Seats_ID : 44, Ticket_ID : 2, Room_ID : 1, Seat_Number : 44, Seat_isAvailable : false , },
  //   {Seats_ID : 45, Ticket_ID : 2, Room_ID : 1, Seat_Number : 45, Seat_isAvailable : false , },
  //   {Seats_ID : 46, Ticket_ID : 2, Room_ID : 1, Seat_Number : 46, Seat_isAvailable : true , },
  //   {Seats_ID : 47, Ticket_ID : 2, Room_ID : 1, Seat_Number : 47, Seat_isAvailable : true , },
  //   {Seats_ID : 48, Ticket_ID : 2, Room_ID : 1, Seat_Number : 48, Seat_isAvailable : false , },
  //   {Seats_ID : 49, Ticket_ID : 2, Room_ID : 1, Seat_Number : 49, Seat_isAvailable : true , },
  //   {Seats_ID : 50, Ticket_ID : 2, Room_ID : 1, Seat_Number : 50, Seat_isAvailable : true , },
  //   {Seats_ID : 51, Ticket_ID : 2, Room_ID : 1, Seat_Number : 51, Seat_isAvailable : true , },
  //   {Seats_ID : 52, Ticket_ID : 2, Room_ID : 1, Seat_Number : 52, Seat_isAvailable : true , },
  //   {Seats_ID : 53, Ticket_ID : 2, Room_ID : 1, Seat_Number : 53, Seat_isAvailable : false , },
  //   {Seats_ID : 54, Ticket_ID : 2, Room_ID : 1, Seat_Number : 54, Seat_isAvailable : false , },
  //   {Seats_ID : 55, Ticket_ID : 2, Room_ID : 1, Seat_Number : 55, Seat_isAvailable : false , },
  //   {Seats_ID : 56, Ticket_ID : 2, Room_ID : 1, Seat_Number : 56, Seat_isAvailable : true , },
  //   {Seats_ID : 57, Ticket_ID : 2, Room_ID : 1, Seat_Number : 57, Seat_isAvailable : true , },
  //   {Seats_ID : 58, Ticket_ID : 2, Room_ID : 1, Seat_Number : 58, Seat_isAvailable : false , },
  //   {Seats_ID : 59, Ticket_ID : 2, Room_ID : 1, Seat_Number : 59, Seat_isAvailable : true , },
  //   {Seats_ID : 60, Ticket_ID : 2, Room_ID : 1, Seat_Number : 60, Seat_isAvailable : true , },
  // ];

 
  
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
          }
         
        }}>Done</button></div>
      {/* <div className="seat-display-image-container-row">
        <KursiAvailable chairNumber="1"></KursiAvailable>
        <KursiAvailable chairNumber="2"></KursiAvailable>
        <KursiAvailable chairNumber="3"></KursiAvailable>
        <KursiAvailable chairNumber="4"></KursiAvailable>
        <KursiAvailable chairNumber="5"></KursiAvailable>
        <KursiAvailable chairNumber="6"></KursiAvailable>
        <KursiAvailable chairNumber="7"></KursiAvailable>
        <KursiAvailable chairNumber="8"></KursiAvailable>
        <KursiAvailable chairNumber="9"></KursiAvailable>
        <KursiAvailable chairNumber="10"></KursiAvailable>
      </div> */}
      {/* <div className="seat-display-image-container-row">
        <KursiAvailable chairNumber="G1"></KursiAvailable>
        <KursiAvailable chairNumber="G2"></KursiAvailable>
        <KursiAvailable chairNumber="G3"></KursiAvailable>
        <KursiAvailable chairNumber="G4"></KursiAvailable>
        <KursiAvailable chairNumber="G5"></KursiAvailable>
        <KursiAvailable chairNumber="G6"></KursiAvailable>
        <KursiAvailable chairNumber="G7"></KursiAvailable>
        <KursiAvailable chairNumber="G8"></KursiAvailable>
        <KursiAvailable chairNumber="G9"></KursiAvailable>
        <KursiAvailable chairNumber="G10"></KursiAvailable>
      </div>
      <div className="seat-display-image-container-row">
        <KursiAvailable chairNumber="F1"></KursiAvailable>
        <KursiAvailable chairNumber="F2"></KursiAvailable>
        <KursiAvailable chairNumber="F3"></KursiAvailable>
        <KursiAvailable chairNumber="F4"></KursiAvailable>
        <KursiAvailable chairNumber="F5"></KursiAvailable>
        <KursiAvailable chairNumber="F6"></KursiAvailable>
        <KursiAvailable chairNumber="F7"></KursiAvailable>
        <KursiAvailable chairNumber="F8"></KursiAvailable>
        <KursiAvailable chairNumber="F9"></KursiAvailable>
        <KursiAvailable chairNumber="F10"></KursiAvailable>
      </div>
      <div className="seat-display-image-container-row">
        <KursiAvailable chairNumber="E1"></KursiAvailable>
        <KursiAvailable chairNumber="E2"></KursiAvailable>
        <KursiAvailable chairNumber="E3"></KursiAvailable>
        <KursiAvailable chairNumber="E4"></KursiAvailable>
        <KursiAvailable chairNumber="E5"></KursiAvailable>
        <KursiAvailable chairNumber="E6"></KursiAvailable>
        <KursiAvailable chairNumber="E7"></KursiAvailable>
        <KursiAvailable chairNumber="E8"></KursiAvailable>
        <KursiAvailable chairNumber="E9"></KursiAvailable>
        <KursiAvailable chairNumber="E10"></KursiAvailable>
      </div>
      <div className="seat-display-image-container-row">
        <KursiAvailable chairNumber="D1"></KursiAvailable>
        <KursiAvailable chairNumber="D2"></KursiAvailable>
        <KursiAvailable chairNumber="D3"></KursiAvailable>
        <KursiAvailable chairNumber="D4"></KursiAvailable>
        <KursiAvailable chairNumber="D5"></KursiAvailable>
        <KursiAvailable chairNumber="D6"></KursiAvailable>
        <KursiAvailable chairNumber="D7"></KursiAvailable>
        <KursiAvailable chairNumber="D8"></KursiAvailable>
        <KursiAvailable chairNumber="D9"></KursiAvailable>
        <KursiAvailable chairNumber="D10"></KursiAvailable>
      </div>
      <div className="seat-display-image-container-row">
        <KursiAvailable chairNumber="C1"></KursiAvailable>
        <KursiAvailable chairNumber="C2"></KursiAvailable>
        <KursiAvailable chairNumber="C3"></KursiAvailable>
        <KursiAvailable chairNumber="C4"></KursiAvailable>
        <KursiAvailable chairNumber="C5"></KursiAvailable>
        <KursiAvailable chairNumber="C6"></KursiAvailable>
        <KursiAvailable chairNumber="C7"></KursiAvailable>
        <KursiAvailable chairNumber="C8"></KursiAvailable>
        <KursiAvailable chairNumber="C9"></KursiAvailable>
        <KursiAvailable chairNumber="C10"></KursiAvailable>
      </div>
      <div className="seat-display-image-container-row">
        <KursiAvailable chairNumber="B1"></KursiAvailable>
        <KursiAvailable chairNumber="B2"></KursiAvailable>
        <KursiAvailable chairNumber="B3"></KursiAvailable>
        <KursiAvailable chairNumber="B4"></KursiAvailable>
        <KursiAvailable chairNumber="B5"></KursiAvailable>
        <KursiAvailable chairNumber="B6"></KursiAvailable>
        <KursiAvailable chairNumber="B7"></KursiAvailable>
        <KursiAvailable chairNumber="B8"></KursiAvailable>
        <KursiAvailable chairNumber="B9"></KursiAvailable>
        <KursiAvailable chairNumber="B10"></KursiAvailable>
      </div>
      <div className="seat-display-image-container-row">
        <KursiAvailable chairNumber="A1"></KursiAvailable>
        <KursiAvailable chairNumber="A2"></KursiAvailable>
        <KursiAvailable chairNumber="A3"></KursiAvailable>
        <KursiAvailable chairNumber="A4"></KursiAvailable>
        <KursiAvailable chairNumber="A5"></KursiAvailable>
        <KursiAvailable chairNumber="A6"></KursiAvailable>
        <KursiAvailable chairNumber="A7"></KursiAvailable>
        <KursiAvailable chairNumber="A8"></KursiAvailable>
        <KursiAvailable chairNumber="A9"></KursiAvailable>
        <KursiAvailable chairNumber="A10"></KursiAvailable>
      </div> */}
      </div>
      
      
      {/* <div className='info-container'>
        <div className='info-header-container'>
            <h1>Receipt</h1>
        </div>

        <div className='info-text-container'>
          <h1>Movie title</h1>
          <p>Avengers</p>
        </div>

        <div className='info-text-container'>
          <h1>Movie duration</h1>
          <p>100 minutes</p>
        </div>

        <div className='info-text-container'>
          <h1>Seats</h1>
          <p>{limit}</p>
        </div>
        
        <div className='info-text-container'>
          <h1>Price</h1>
          <p>75.000</p>
        </div> */}

        



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
