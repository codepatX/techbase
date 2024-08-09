import './homepage.css'


function Homepage(){
  return(
    <>
      {/* Slider Section */}
      <div className="slider">
        <div className="slide">
          <img src="src/assets/images/3d-rendering-hexagonal-texture-background_23-2150796440.jpg" alt="Slide 1" />
          <div className="slide-text">Special Text 1</div>
        </div>
        <div className="slide">
          <img src="src/assets/images/3d-rendering-hexagonal-texture-background_23-2150796440.jpg" alt="Slide 2" />
          <div className="slide-text">Special Text 2</div>
        </div>
        <div className="slide">
          <img src="src/assets/images/3d-rendering-hexagonal-texture-background_23-2150796440.jpg" alt="Slide 3" />
          <div className="slide-text">Special Text 3</div>
        </div>
        <div className="slide">
          <img src="src/assets/images/3d-rendering-hexagonal-texture-background_23-2150796440.jpg" alt="Slide 4" />
          <div className="slide-text">Special Text 4</div>
        </div>
        <div className="slide">
          <img src="src/assets/images/3d-rendering-hexagonal-texture-background_23-2150796440.jpg" alt="Slide 5" />
          <div className="slide-text">Special Text 5</div>
        </div>
      </div>
    
    </>
  )
}


export default Homepage;