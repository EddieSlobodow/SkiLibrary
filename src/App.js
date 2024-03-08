import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {

  const [videoContent, setVideoContent] = useState(null);
  const [isSideWindowOpen, setSideWindowOpen] = useState(false);

  const openSideWindow = () => {
    setSideWindowOpen(true);
  };

  const closeSideWindow = () => {
    setSideWindowOpen(false);
  };

  const onButtonClick = (index) => {
    switch (index) {
      case 0:
        setVideoContent(
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/GNHUImbT3lM?si=Qo4G9e_b2HIph1L9&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxexgFpu5dKrFl33Sit7GtD55X8klMyOne&amp;clipt=ELC9EBig7BA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        );
        break;
      case 1:
        setVideoContent(
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-VtqTcFjBfY?si=KsZ3elN3dGoWP7mT&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxK9SJiWfHDtAxHwEIGljFymn8j_eyPoQ5&amp;clipt=EID0AxiImwQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        );
        break;
      default:
        setVideoContent(<p>Error</p>);
    }

    openSideWindow();
  };

  const ButtonGrid = ({ buttonData }) => {
    return (
      <div className="button-grid">
        {buttonData.map((buttonText, index) => (
          <button class="grid-buttons" key={index} onClick={() => onButtonClick(index)} >{buttonText}</button>
        ))}
      </div>
    );
  };

  const buttonData = ["Box Slide", "Shifty", "360", "540", "Backflip", "Rodeo", "Misty", "Double Backflip"];
  return (
    <div className="App">
      <div>
      {/* Render the side window conditionally based on state */}
      {isSideWindowOpen && (
        <div className="side-window">
          {/* Content of your side window */}
          <div id="video">
          {videoContent}
          </div>
          <p>This is the side window content.</p>
          <button onClick={closeSideWindow}>Close</button>
        </div>
      )}
    </div>
      <header className="App-header">
      <ButtonGrid buttonData={buttonData} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
