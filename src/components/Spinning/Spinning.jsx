import PropTypes from "prop-types"
import "./Spinning.css"


export function Spinning({ text, children }) {
    const lengthSpinning = text.length;//length
    const deg = 360 / lengthSpinning;
    return (
      <div className="spinningtext-wrapper">
        <div className="spinningtext">
          <p>{text.split("").map((word, i) =>
              (
                  <span key={i} style={{
                      transform: `rotate(${ deg * i }deg)`,
                  }}
                  >{word}</span>
              )
          )}</p>
        </div>
        {children}
      </div>
    );
  }

  //Definición de PropTypes
  Spinning.propTypes = {
    text: PropTypes.string.isRequired,
    children: PropTypes.node
  }