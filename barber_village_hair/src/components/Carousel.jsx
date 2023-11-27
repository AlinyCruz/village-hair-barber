import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import image from '../assets/logo_site.png';
import '../components/css/Carousel.css';

function CarouselComp() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img className="carousel-img" src="https://classic.exame.com/wp-content/uploads/2020/05/whatsapp-image-2020-05-12-at-10.47.30.jpg?quality=70&strip=info&w=1024" alt="Imagem 1" />
        </div>
        <div>
          <img className="carousel-img" src="https://img.freepik.com/fotos-premium/espaco-masculino-interior-de-barbearia-moderna-gerado-por-ia_866663-5580.jpg" alt="Imagem 2" />
        </div>
        <div>
          <img className="carousel-img" src="https://graces.com.br/wp-content/uploads/2019/02/o-que-nao-pode-faltar-na-sua-barbearia-equipamentos.jpg" alt="Imagem 3" />
        </div>
      </Slider>
    </div>
  );
}

export default CarouselComp;