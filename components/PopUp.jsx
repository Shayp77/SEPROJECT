import React, { useEffect, useState } from "react";

const PopUp = ({ roomNumber, movieData, params }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [counter, setCounter] = useState(0);
  const [availableSeats, setAvailableSeats] = useState(0);
  const [seatCapacity, setSeatCapacity] = useState(0);
  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  //   const fetchData = async () => {
  //     const response = await fetch(
  //       `https://localhost:44497/api/info/${roomNumber}`
  //     );
  //     const data = await response.json();
  //     setSeatCapacity(data);
  //   };

  //   useEffect(() => {
  //     if (seatCapacity.length > 0) {
  //       setAvailableSeats(seatCapacity[0].room_SeatCapacity);
  //     }
  //   }, [seatCapacity]);

  const handleButtonClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <button
        className="tw-bg-gold tw-text-white tw-p-2 rounded-2"
        onClick={handleButtonClick}
      >
        Room {roomNumber}
      </button>

      {isModalVisible && (
        <div
          className="tw-fixed tw-inset-0 tw-bg-black tw-flex tw-items-center
         tw-justify-center"
        >
          <div
            className=" tw-bg-slate-700 tw-flex-col tw-items-center tw-justify-center
          tw-p-12 tw-m-3 tw-rounded-md"
          >
            <div>
              <img
                className="tw-mb-2"
                src={movieData.Poster}
                alt="Movie Poster"
              />
            </div>

            <div className=" tw-rounded">
              <div className="tw-flex ">
                <br></br>
                <h3 className="tw-flex-grow">Select Tickets</h3>
                <button className="tw-mr-1" onClick={handleCloseModal}>
                  Cancel
                </button>
              </div>
              <p>Studio: {roomNumber}</p>
              <p>Available Seats: {params}</p>

              <div className="tw-flex tw-items-center tw-flex-grow">
                <div className="flex">
                  <p className="tw-flex-grow">Number of Tickets: </p>
                </div>
                <div className="tw-flex">
                  <button
                    className="btn btn-primary tw-m-3"
                    onClick={() => {
                      if (counter > 0) {
                        setCounter(counter - 1);
                      }
                    }}
                  >
                    -
                  </button>
                  <p className="tw-mt-5"> {counter}</p>
                  <button
                    className="btn btn-primary tw-m-3"
                    onClick={() => setCounter(counter + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className={`tw-p-3
            border tw-bg-gold tw-text-white
            tw-rounded-full tw-m-3
            ${counter > 0 ? "tw-bg-gold" : "tw-bg-gray-300"}`}
              >
                Select seats
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
