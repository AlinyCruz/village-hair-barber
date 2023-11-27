import "../components/css/Main.css";
import Carousel from './Carousel';
import bruno from "../assets/foto-bruno.jpg";
// import willian from "../assets/foto-willian.jpg";


function Main() {

  const images = [
    {
      id: 1,
      src: bruno,
      alt: "img-bruno",
      text: "Bruno Cruz",
      desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    },
    {
      id: 2,
      src: bruno,
      alt: "img-willian",
      text: "Willian Dias",
      desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    },
  ];

  return (
    <div>
      <Carousel />
      <div id="destaques">
        <div id="div-img">
          {images.map((image) => (
            <div className="img-text" key={image.id}>
              <img id="destaques-img" src={image.src} alt={image.alt} />
              <p id="destaques-p">{image.text}</p>
              <p id="destaques-p">{image.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Main;

