import "../components/css/Main.css";
import Divider from './Divider';
import Carousel from './Carousel';
import bruno from "../assets/foto-bruno.jpg";
import mapa from "../assets/mapa.png";
import { FaMapMarker } from 'react-icons/fa';


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
      <br />
      <Divider />

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

      <Divider />

      <div id="horarios">
        <h3 id="titulo">ATENDIMENTO POR ORDEM DE CHEGADA</h3>
        <p className="dias">TERÇA á SEXTA</p><p className="horas">10:00 ás 19:00</p>
        <h3 id="titulo">ATENDIMENTO AGENDADO</h3>
        <p className="dias">SÁBADO</p>
        <button className="btn"><a href="https://api.whatsapp.com/send?phone=5511948105703" target="_blank" rel="noreferrer">Agende com Bruno</a>
        </button>
        <button className="btn"><a href="https://api.whatsapp.com/send?phone=5511979604631" target="_blank" rel="noreferrer">Agende com Willian</a>
        </button>
      </div>

      <Divider />

      <table id="tab-valores">
        <tr>
          <th colspan="2"><h3 id="titulo-tab">TABELA DE VALORES</h3></th>
        </tr>
        <tr>
          <td className="item-tab">CORTES</td>
          <td className="item-tab">R$ 30,00</td>
        </tr>
        <tr>
          <td className="item-tab">DEGRADÊ NAVALHADO</td>
          <td className="item-tab">R$ 33,00</td>
        </tr>
      </table>

      <nav id="mapa">
        <h3><FaMapMarker size={30} color="#D6B206" /> ONDE ESTAMOS</h3>
        <p>Rua Saparás, 107 - São João Clímaco</p>
        <p>São Paulo/SP - CEP: 04255-110</p>
        <br />
        <a href="https://www.google.com/maps/@-23.6218449,-46.593941,3a,75y,157.03h,79.8t/data=!3m6!1e1!3m4!1s6MtDOf7T68aQKWwKA2u5_g!2e0!7i16384!8i8192?entry=ttu"><img src={mapa} alt="fachada-barber" target="_blank" rel="noreferrer" /></a>
      </nav>
      <Divider isLastSection />
    </div>
  )
}

export default Main;

