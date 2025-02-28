import React from "react";
import { directors } from "../data";

function Directors() {

  const directorArray = directors.map((director) => {
    return <div key={director.name}>
            <h3>{director.name}</h3>
            <ul>
              {director.movies.map((movie) => {
                return <li key={movie}>{movie}</li>
              })}
            </ul>
          </div>
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorArray}
    </div>
  ) 
}

export default Directors;
