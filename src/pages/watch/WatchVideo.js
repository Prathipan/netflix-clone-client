import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.css";
import { useLocation, useNavigate } from "react-router-dom";

const WatchVideo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const movie = location.state.movie;
  return (
    <div className="watch">
      <div className="back" onClick={()=> navigate(-1)}>
        <ArrowBackOutlined />
        Home
      </div>
      <iframe
        className="video"
        src={movie.trailer}
        title={movie.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchVideo;
