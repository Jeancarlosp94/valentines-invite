import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/styles.css";
import heartBackground from "../assets/img/heart.png";

const ButtonGame = () => {
  const navigate = useNavigate();
  const [position, setPosition] = useState({ top: "50%", left: "50%" });

  const moveButton = () => {
    const randomTop = Math.floor(Math.random() * 80) + 10;
    const randomLeft = Math.floor(Math.random() * 80) + 10;
    setPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  return (
    <div 
  className="heart-background" 
  style={{ backgroundImage: `url(${heartBackground})`, backgroundSize: "small", backgroundPosition: "center" }}
>
  <div className="container">
    <h1 className="title">¿Quieres ser mi San Valentín? 💖</h1>
    <div className="button-container">
      <button className="yes-btn" onClick={() => navigate("/invitation")}>Sí 💘</button>
      <button className="no-btn" onMouseEnter={moveButton} style={position}>No 💔</button>
    </div>
  </div>
</div>

  );
};

export default ButtonGame;