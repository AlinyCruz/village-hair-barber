import "../components/css/MainPage.css";
import video from '../assets/videosite.mp4';

const MainPage = () => {
  return (
      <div id="video-container" >
        <h2 id="saudacao">Sejam bem vindos ao Village Hair!!!</h2>
        <video id="video-background" autoPlay muted loop>
          <source src={video} type="video/webm" />
        </video>
      </div>
  );
};

export default MainPage;
