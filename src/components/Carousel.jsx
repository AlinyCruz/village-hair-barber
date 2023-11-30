import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/css/Carousel.css';
import modelo01 from '../assets/modelo01.png';
import modelo02 from '../assets/modelo02.png';
import modelo03 from '../assets/modelo03.png';
import modelo04 from '../assets/modelo04.png';

function CarouselComp() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    customPaging: function () {
      return <div style={customDotStyles}></div>;
    },
  };

  const customDotStyles = {
    backgroundColor: '#D9D9D9',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    margin: '0 5px',
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img className="carousel-img" src={modelo01} alt="Imagem 1" />
        </div>
        <div>
          <img className="carousel-img" src={modelo02} alt="Imagem 2" />
        </div>
        <div>
          <img className="carousel-img" src={modelo03} alt="Imagem 3" />
        </div>
        <div>
          <img className="carousel-img" src={modelo04} alt="Imagem 3" />
        </div>
      </Slider>
    </div>
  );
}

export default CarouselComp;