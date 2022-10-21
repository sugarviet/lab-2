import { useState } from "react";
import FilmsPresentation from "./FilmsPresentation";
import FilmsPresentation2 from "./FilmsPresentation2";

import { Films } from "../share/ListOfFilms";

function Main() {
  const [film, setFilm] = useState(Films);
  return (
  <FilmsPresentation2 films={film}/>
  )
}

export default Main;
