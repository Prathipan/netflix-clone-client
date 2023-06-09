import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./featured.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../../api";

const Featured = ({ type,setGenre }) => {
  const [content, setContent] = useState({});

  useEffect(() => {
    getRandomContent();
  }, [type]);

  const getRandomContent = async () => {
    try {
      const res = await axios.get(`${api}/movies/random?type=${type}`, {
        headers: {
          token:
            `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
        },
      });
      setContent(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre" onChange={(e) => setGenre(e.target.value)}>
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img className="poster-img" src={content.img} alt="movie poster" />
      <div className="info">
        <img className="info-img" src={content.imgTitle} alt="" />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          adipisci repellendus eum quasi illo, velit numquam, maxime tempora
          sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
          temporibus eum earum?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
