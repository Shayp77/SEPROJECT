import React, { useState } from "react";
import PopUp from "./PopUp";

const TabsMovie = ({ movieData }) => {
  const [activeTab, setActiveTab] = useState("Biasa");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tw-p-10">
      <div className="tw-flex tw-items-center tw-justify-center">
        <div
          className={`tw-flex tw-items-center
          tw-rounded-full tw-justify-center text tw-text-white tabs-1 tw-flex-grow tw-w-1/2 ${
            activeTab === "Biasa" ? "tw-bg-gold " : ""
          }`}
          onClick={() => handleTabClick("Biasa")}
        >
          Biasa
        </div>
        <div
          className={`tw-flex 
          tw-rounded-full tw-items-center tw-justify-center text tw-text-white tabs-1 tw-flex-grow tw-w-1/2 ${
            activeTab === "Premiere" ? "tw-bg-gold " : ""
          }`}
          onClick={() => handleTabClick("Premiere")}
        >
          Premiere
        </div>
      </div>

      <div className="tw-mt-5">
        <div
          className={`text ${activeTab === "Biasa" ? "tw-block" : "tw-hidden"}`}
        >
          <h2>Classic</h2>
          <hr />
          <div className="tw-flex tw-flex-wrap tw-justify-between tw-gap-1">
            <PopUp roomNumber={1} movieData={movieData} />
            <PopUp roomNumber={2} movieData={movieData} />
            <PopUp roomNumber={3} movieData={movieData} />
            <PopUp roomNumber={4} movieData={movieData} />
            <PopUp roomNumber={5} movieData={movieData} />
          </div>
        </div>

        <div
          className={`text ${
            activeTab === "Premiere" ? "tw-block" : "tw-hidden"
          }`}
        >
          <h2>Premiere</h2>
          <hr />
          <div className="tw-flex tw-flex-wrap tw-gap-2">
            <PopUp roomNumber={1} movieData={movieData} />
            <PopUp roomNumber={2} movieData={movieData} />
            <PopUp roomNumber={3} movieData={movieData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsMovie;
