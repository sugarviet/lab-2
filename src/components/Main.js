import { useState } from "react";
import FilmsPresentation from "./FilmsPresentation";
import { Films } from "../share/ListOfFilms";

function Main() {
  const [film, setFilm] = useState(Films);
  return (
  <FilmsPresentation films={film}/>
  )
}

export default Main;
