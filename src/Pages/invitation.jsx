import { Link } from "react-router-dom";
import "../assets/css/styles.css";

const Invitation = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <h1 className="title">¡Felicidades! 🌹</h1>
          </div>
          <div className="card-back">
            <p className="message">Sabía que aceptarías! Nos vemos el 14 de febrero a las 7PM. Ponte algo bonito ❤️</p>
            <img src="/src/assets/img/nico.png" alt="Rosa" className="rose" />
            <Link to="/" className="back-btn">Volver al inicio</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invitation;