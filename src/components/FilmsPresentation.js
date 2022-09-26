import {useState} from "react";
import PopUp from "./PopUp";

function FilmsPresentation({films}) {
    const [detail, setDetail] = useState({});
    const [togglePopup, setTogglePopup] = useState(false);

    return ( 
        <>
        <div className="title">
            <h1>Movies</h1>
            </div>
        <div className="container">
           {films.map((film, index) => (
             <div key={index} className="column">
             <div className="card">
                 <div className="image-holder">
                 <img src={film.img} alt='film'/>
                 </div>
                 <h3>{film.title}</h3>
                 <p>{film.year}</p>
                 <p>{film.nation}</p>
                 <p className="p"><button onClick={() => {
                    setDetail(film);
                    setTogglePopup(!togglePopup);
                }}>Watch trailer</button></p>
             </div>
         </div> 
           ))}
           
           {togglePopup && <PopUp detail={detail} togglePopup={togglePopup} setTogglePopup={setTogglePopup}/>}
           
        </div>
        </>
     );
}

export default FilmsPresentation;