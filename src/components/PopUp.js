function PopUp({detail, setTogglePopup, togglePopup}) {
    console.log(detail.img);
    return ( 
        <div className="overlay" onClick={() => {setTogglePopup(!togglePopup)}}>
                <div className="popup">
                <img src={detail.img} alt="video"/>
                <span onClick={() => {setTogglePopup(!togglePopup)}}>X</span>
                <iframe width="70%" height="450px" src={detail.videoID} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>     
                </div>
           </div>
     );
}

export default PopUp;