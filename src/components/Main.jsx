import "../components/css/Main.css";
import Divider from './Divider';
// import Carousel from './Carousel';
import bruno from "../assets/foto-bruno.jpg";
import mapa from "../assets/mapa.png";
import { FaMapMarker } from 'react-icons/fa';
import BotaoRota from "./BotaoRota";
import MainPage from "./MainPage";

function Main() {

  const images = [
    {
      id: 1,
      src: bruno,
      alt: "img-bruno",
      text: "Nossa História",
      desc: (
        <>
          Fundada em 2017 pelo Barbeiro Bruno Cruz que atua com cortes desde a adolescência, a barbearia Village Hair vem crescendo a cada dia, tudo começou com apenas uma cadeira, um espelho e um sonho. Conforme o tempo foi passando a demanda de clientes aumentou e então a equipe cresceu ficando dois barbeiros, atualmente Bruno e Willian. &ldquo;Atendemos todos os tipos de clientes, entre crianças, adultos e senhores. Estamos dispostos a deixá-los satisfeitos realizando um trabalho de acordo com cada perfil.&rdquo; <br /><br />
          Venha conhecer nosso trabalho! <br /><br />
        </>
      ),
    },
  ];

  return (
    <div>
      {/* <Carousel /> */}
      <MainPage />
      <br />
      <Divider />

      <div id="destaques">
        <div id="div-img">
          {images.map((image) => (
            <div className="img-text" key={image.id}>
              <img id="destaques-img" src={image.src} alt={image.alt} />
              <p id="destaques-text">{image.text}</p>
              <p id="destaques-desc">{image.desc}</p>
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
          <th colSpan="2"><h3 id="titulo-tab">TABELA DE VALORES</h3></th>
        </tr>
        <tr>
          <td className="item-tab">CORTE</td>
          <td className="item-tab">R$ 30,00</td>
        </tr>
        <tr>
          <td className="item-tab">DEGRADÊ NAVALHADO</td>
          <td className="item-tab">R$ 33,00</td>
        </tr>
        <tr>
          <td className="item-tab">BARBA</td>
          <td className="item-tab">R$ 25,00</td>
        </tr>
        <tr>
          <td className="item-tab">SOBRANCELHA</td>
          <td className="item-tab">R$ 10,00</td>
        </tr>
        <tr>
          <td className="item-tab">PROGRESSIVA</td>
          <td className="item-tab">R$ 50,00</td>
        </tr>
        <tr>
          <td className="item-tab">ALISAMENTO</td>
          <td className="item-tab">R$ 25,00</td>
        </tr>
        <tr>
          <td className="item-tab">ACABAMENTO (PERFIL)</td>
          <td className="item-tab">R$ 10,00</td>
        </tr>
        <tr>
          <th colSpan="2"></th>
        </tr>
      </table>

      <nav id="mapa">
        <h3><FaMapMarker size={30} color="#D6B206" /> ONDE ESTAMOS</h3>
        <p>Rua Saparás, 107 - São João Clímaco</p>
        <p>São Paulo/SP - CEP: 04255-110</p>
        <br />
        <a href="https://www.google.com/maps/@-23.6218449,-46.593941,3a,75y,157.03h,79.8t/data=!3m6!1e1!3m4!1s6MtDOf7T68aQKWwKA2u5_g!2e0!7i16384!8i8192?entry=ttu"><img src={mapa} alt="fachada-barber" target="_blank" rel="noreferrer" /></a>
        < BotaoRota />
      </nav>
      <Divider isLastSection />
    </div>
  )
}

export default Main;

