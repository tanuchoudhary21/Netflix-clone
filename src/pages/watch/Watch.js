import { ArrowBackOutlined } from "@material-ui/icons";
import vedioSrc from "../../Fireworks - 555.mp4";
import "./watch.scss";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video className="video" autoPlay progress controls src={vedioSrc} />
    </div>
  );
};

export default Watch;
