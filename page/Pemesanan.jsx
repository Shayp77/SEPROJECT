import React, { useState, useEffect } from "react";
import { getMovie } from "../api";
import MovieDetail from "../components/MovieDetail";
import TabsMovie from "../components/TabsMovie";

const Pemesanan = () => {
  const [movieData, setMovieData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovie("tt15398776");
        console.log("API res:", response);
        setMovieData(response);
        setMovieData2(response);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="tw-bg-black tw-min-h-screen">
      {movieData ? (
        <div className="tw-flex-col">
          <div>
            <MovieDetail movieData={movieData} />
          </div>
          <div>
            <TabsMovie movieData={movieData} />
          </div>
        </div>
      ) : (
        <p className="text-gold">Loading...</p>
      )}
    </div>
  );
};

export default Pemesanan;
