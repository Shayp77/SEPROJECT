import React, { useEffect, useState } from "react";
import PopUp from "./PopUp";
import axios from "axios";

const TabsMovie = ({ movieData }) => {
  const [activeTab, setActiveTab] = useState("Normal");
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await axios.get(
          `https://localhost:44497/api/info/rooms/${movieData.imdbID}/${activeTab}`
        );
        console.log("Room Response: ", response);
        const data = response.data;
        console.log("Room tes: ", data);
        console.log("Room Data: ", data[0].room_ID);
        setRooms(data);
        console.log("Room: ", rooms[0].room_ID);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchRoom();
  }, [movieData.imdbID, activeTab]);
  console.log("Rooms: ", rooms);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tw-p-10">
      <div className="tw-flex tw-items-center tw-justify-center">
        <div
          className={`tw-flex tw-items-center
          tw-rounded-full tw-justify-center text tw-text-white tabs-1 tw-flex-grow tw-w-1/2 ${
            activeTab === "Normal" ? "tw-bg-gold " : ""
          }`}
          onClick={() => handleTabClick("Normal")}
        >
          BIASA
        </div>
        <div
          className={`tw-flex 
          tw-rounded-full tw-items-center tw-justify-center text tw-text-white tabs-1 tw-flex-grow tw-w-1/2 ${
            activeTab === "Premium" ? "tw-bg-gold " : ""
          }`}
          onClick={() => handleTabClick("Premium")}
        >
          PREMIERE
        </div>
      </div>

      <div className="tw-mt-5">
        <div
          className={`text ${
            activeTab === "Normal" ? "tw-block" : "tw-hidden"
          }`}
        >
          <h2>BIASA</h2>
          <hr className="tw-p-3" />
          {loading ? (
            <p>Loading...</p>
          ) : rooms.length > 0 ? (
            <div className="tw-flex tw-flex-wrap tw-gap-5">
              {rooms.map((room) => (
                <PopUp
                  
                  roomNumber={rooms[0].room_ID}
                  movieData={movieData}
                  params = {rooms[0].room_SeatCapacity}
                />
              ))}
            </div>
          ) : (
            <p>No rooms available.</p>
          )}
        </div>

        <div
          className={`text ${
            activeTab === "Premium" ? "tw-block" : "tw-hidden"
          }`}
        >
          <h2>PREMIERE</h2>
          <hr className="tw-p-3" />
          {loading ? (
            <p>Loading...</p>
          ) : rooms.length > 0 ? (
            <div className="tw-flex tw-flex-wrap tw-gap-5">
              {rooms.map((room) => (
                <PopUp
        
                  roomNumber={rooms[0].room_ID}
                  movieData={movieData}
                  params = {rooms[0].room_SeatCapacity}
                />
              ))}
            </div>
          ) : (
            <p>No rooms available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabsMovie;
