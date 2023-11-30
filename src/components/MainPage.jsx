import "../components/css/MainPage.css";
import video from '../assets/video3.webm';

const MainPage = () => {
  return (
      <div id="video-container" >
        <video id="video-background" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
  );
};

export default MainPage;
