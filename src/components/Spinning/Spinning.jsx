import "./Spinning.css"
export function Spinning({ text, children }) {
    const lenghtSpinning = text.length;//length
    const deg = 360 / lenghtSpinning;
  console.log(lenghtSpinning)
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