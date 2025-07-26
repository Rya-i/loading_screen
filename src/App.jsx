import './App.css';

function App() {
  return (
    <>
    <div className="loading-container">
      <div className="swirl-container">
        <div className="swirl"></div>
        <div className="swirl"></div>
        <div className="swirl"></div>
      </div>

      <div className="bot-container">
        <div className="bot">
          <div className="bot-head">
            <div className="bot-eyes">
              <div className="eye"></div>
              <div className="eye"></div>
            </div>
          </div>

          <div className="bot-body">
            <div className="medical-cross"></div>
            <div className="heart-monitor">
              <div className="heartbeat-line"></div>
            </div>
            <div className="stethoscope"></div>
            <div className="bot-arms">
              <div className="arm left"></div>
              <div className="arm right"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="loading-text">
        Loading<span className="loading-dots"></span>
      </div>

      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>
    </div>
    </>
  );
}

export default App;
