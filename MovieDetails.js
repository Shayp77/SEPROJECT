import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MovieDetails.css'

function MovieDetails() {
    const [movies, setMovies] = useState([]);
    const data = "tt0816692";

    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?i=${data}&apikey=e9565e7a`)
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => {
                console.error('error');
            });
    }, []);

    const renderCrewMembers = () => {
        const crewMembers = [];
        if (movies.Actors) {
            const actors = movies.Actors.split(', ');
            actors.forEach(actor => {
                crewMembers.push(
                    <div key={actor}><strong style={{ fontSize: '25px' }}>{actor}</strong><span style={{ fontSize: '17px', fontWeight: 'bold' }}> / Actor</span></div>
                );
            });
        }
        if (movies.Director) {
            const directors = movies.Director.split(', ');
            directors.forEach(director => {
                crewMembers.push(
                    <div key={director}><strong style={{ fontSize: '25px' }}>{director}</strong><span style={{ fontSize: '17px' , fontWeight: 'bold' }}> / Director</span></div>
                );
            })
        }
        if (movies.Writer) {
            const writers = movies.Writer.split(', ');
            writers.forEach(writer => {
                crewMembers.push(
                    <div key={writer}><strong style={{ fontSize: '25px' }}>{writer}</strong><span style={{ fontSize: '17px', fontWeight: 'bold' }}> / Writer</span></div>
                );
            });
        }

        return crewMembers;
    };

    return (
        <div className="container-fluid bg-dark text-light">
            <div className="container p-3">
                <div className="row mb-5">
                    <div className="col-md-4 d-flex align-items-center">
                        <img
                            className="img-fluid rounded movie-poster"
                            src={movies.Poster}
                            alt={movies.Title}
                        />
                    </div>
                    <div className="col-md-8">
                        <h2 className="text-white">{movies.Title}</h2>
                        <h6 className="text-white">{movies.Genre}</h6>
                        <h6 className="text-white">{movies.Rated}</h6>
                        <hr />
                        <div className="col-md-15">
                            <div className="row">
                                <div className="col-md-20">
                                    <p>{movies.Plot}</p>
                                    <h5>Duration</h5>
                                    <p>{movies.Runtime}</p>
                                    <h5>Releate Date</h5>
                                    <p>{movies.Released}</p>
                                    <button className="btn btn-primary btn-md">Get Ticket</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <h2>Cast and Crews</h2>
                    </div>
                    <div className="col-md-4">
                        <div className="movie-details">
                            {renderCrewMembers()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
