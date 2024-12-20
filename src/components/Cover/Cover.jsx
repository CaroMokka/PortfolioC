import coverVideo from"../../assets/cover-02.mov"
import nameTitle from "../../assets/name.png"
import arterisco from"../../assets/arterisco.webp"
import "./Cover.css"
import { Spinning } from "../../components/Spinning/Spinning"

export const Cover = () => {
    return (
      <div className="cover-container">
        <video className="video" preload="none" src={coverVideo} autoPlay loop muted />
        <div className='container-title'>
          <img src={nameTitle} />
        </div>
        <p className="cover-p">FRONTEND DEVELOPER</p>
      <div className='container-spinning'>
      <Spinning  text='FRONTEND DEVELOPER * CARO ARAYA * '><div className='container-arterisco'><img src={arterisco}/></div></Spinning>
      </div>
      </div>
    );
  };

