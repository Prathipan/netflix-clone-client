import { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import { api } from "../../api";
import axios from "axios";
const Home = ({ type }) => {
  const [lists, setList] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    getRandomList();
  }, [type, genre]);

  const getRandomList = async () => {
    try {
      const res = await axios.get(
        `${api}/lists${type ? "?type=" + type : ""}${
          genre ? "&genre=" + genre : ""
        }`,
        {
          headers: {
            token:
            `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`,
          },
        }
      );
      setList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => {
        return <List list={list} />;
      })}
    </div>
  );
};

export default Home;
