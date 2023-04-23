import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import "./listitem.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../../api";
import { Link } from "react-router-dom";

const ListItem = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(`${api}/movies/find/${item}`, {
          headers: {
            token:
            `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
          },
        });
        setMovie(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
    // console.log(movie);
  }, []);

  return (
    <Link to="/watch" state={{ movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.img} alt="slider-poster" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownAltOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>1 hour 15mins</span>
                <span className="limit">{movie.limit}+</span>
                <span>{movie.year}</span>
              </div>
              <div className="list-desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItem;
