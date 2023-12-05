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
        <>Fundada em 2017 por Bruno Cruz, a barbearia Village Hair não é apenas um negócio, é um projeto que nasceu do coração e da fé. Desde a adolescência, Bruno Cruz cultivou sua paixão por cortes de cabelo, e com a orientação divina, transformou esse sonho em realidade. <br /><br />

        Começando modestamente com apenas uma cadeira e um espelho simples, a barbearia cresceu e prosperou, tornando-se uma parte valiosa da comunidade. Este projeto não foi apenas uma ideia, mas sim algo plantado por Deus, que guiou, capacitou e proporcionou experiências e cursos profissionalizantes.<br /><br />
        
        Com muito esforço e dedicação, a barbearia expandiu sua equipe para incluir não apenas Bruno Cruz, mas também Willian Dias. Atualmente, a equipe conta com dois talentosos barbeiros que continuam a aprimorar suas habilidades para atender à crescente demanda de clientes.<br /><br />
        
        &ldquo;Até aqui nos ajudou o Senhor&ldquo; é mais do que um lema, é um testemunho do apoio divino ao longo da jornada. Na Barbearia Village Hair, atendemos clientes de todas as idades, desde crianças até senhores, e estamos comprometidos em oferecer um serviço personalizado para satisfazer as necessidades de cada cliente.<br /><br />
        
        Convidamos você a conhecer nosso trabalho e a experiência única que oferecemos.<br /><br />
        Seja bem-vindo à Barbearia Village Hair, onde a paixão pela arte de cortar cabelo se encontra com a excelência no atendimento.<br /><br />
             
        B. Cruz e Equipe Barbearia Village Hair.
        </>
      ),
    },
  ];

  const valores = [
    { servico: 'CORTE', preco: 'R$ 30,00' },
    { servico: 'DEGRADÊ NAVALHADO', preco: 'R$ 33,00' },
    { servico: 'BARBA', preco: 'R$ 25,00' },
    { servico: 'SOBRANCELHA', preco: 'R$ 10,00' },
    { servico: 'PLATINADO', preco: 'R$ 100,00' },
    { servico: 'LUZES', preco: 'R$ 50,00' },
    { servico: 'PROGRESSIVA', preco: 'R$ 50,00' },
    { servico: 'ALISAMENTO', preco: 'R$ 25,00' },
    { servico: 'ACABAMENTO (PERFIL)', preco: 'R$ 10,00' },
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
              <img id="destaques-img" data-aos="fade-right" src={image.src} alt={image.alt}/>
              <p id="destaques-text" data-aos="fade-right">{image.text}</p>
              <p id="destaques-desc" data-aos="fade-right">{image.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      <div id="horarios" data-aos="zoom-in">
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

      <table id="tab-valores" data-aos="zoom-in">
        <thead>
          <tr>
            <th colSpan="2">
              <h3 id="titulo-tab">TABELA DE VALORES</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {valores.map((valor, index) => (
            <tr key={index}>
              <td className="item-tab">{valor.servico}</td>
              <td className="item-tab">{valor.preco}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="2"></th>
          </tr>
        </tfoot>
      </table>

      <nav id="mapa">
        <h3 data-aos="zoom-in"><FaMapMarker size={30} color="#D6B206" /> ONDE ESTAMOS</h3>
        <p data-aos="zoom-in">Rua Saparás, 107 - São João Clímaco</p>
        <p data-aos="zoom-in">São Paulo/SP - CEP: 04255-110</p>
        <br />
        <a data-aos="zoom-in" href="https://www.google.com/maps/place/BARBEARIA+VILLAGE+HAIR/@-23.6218232,-46.5964199,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5b628e60d0c9:0x2efa7633ee1f8c47!8m2!3d-23.6218281!4d-46.593845!16s%2Fg%2F11f1wjg5y6?entry=ttu"><img src={mapa} alt="fachada-barber" target="_blank" rel="noreferrer" /></a>
        <br />
        < BotaoRota />
      </nav>
      <Divider isLastSection />
    </div>
  )
}

export default Main;

