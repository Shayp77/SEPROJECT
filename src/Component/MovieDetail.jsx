import React from "react";
import ClockIcon from "../assets/Clock.svg";
import TagIcon from "../assets/Tag.svg";

const movieDetail = ({ movieData }) => {
  return (
    <div className="tw-flex tw-pt-10 tw-flex-col md:tw-flex-row">
      <div className="tw-flex tw-justify-center">
        <img
          className="p-2 tw-pl-6 tw-justify-center"
          src={movieData.Poster}
          alt="Movie Poster"
        />
      </div>


      <div className="">
        <h1 className="tw-mt-5 p-1 tw-text-xs md:tw-text-3xl tw-text-gold">
          {movieData.Title}
        </h1>

        <p className="tw-text-white tw-text-xs md:tw-text-xl tw-p-3">
          {movieData.Plot}
        </p>
  
        <div className="tw-flex tw-items-center">
          <img
            className="tw-w-6 tw-h-6 tw-ml-2 tw-text-white"
            src={ClockIcon}
            alt="Clock Icon"
          />
          <p className="tw-text-white tw-text-xs md:tw-text-xl tw-pt-3 tw-pl-2">
            {movieData.Runtime}
          </p>
        </div>
      
        <div className="tw-p-2 tw-flex tw-flex-wrap">
          {movieData.Genre.split(",").map((genre) => (
            <div className="tw-flex tw-flex-row tw-items-center tw-gap-1 tw-m-1">
              <img src={TagIcon} className="tw-w-6 tw-h-6"></img>
              <span
                className="tw-text-white tw-text-xs md:tw-text-xl tw-m-1"
                key={genre}
              >
                {genre}
              </span>
            </div>
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default movieDetail;
