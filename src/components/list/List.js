import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import "./list.css";
import ListItem from "../listItem/ListItem";
import { useRef, useState } from "react";

const List = ({list}) => {
  const [sliderNumber, setSliderNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && sliderNumber > 0) {
      setSliderNumber(sliderNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && sliderNumber < 5) {
      setSliderNumber(sliderNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="list-wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left-slider"
          onClick={() => handleClick("left")}
          style={{display : !isMoved && "none"}}
        />
        <div className="list-container" ref={listRef}>
          {
            list.content.map((item,i) => {
              return <ListItem index={i} item={item} />
            })
          }
          
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right-slider"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
