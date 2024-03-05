import logo from './logo.svg';
import './App.css';

function onButtonClick(index){
  alert(index);
}

const ButtonGrid = ({ buttonData }) => {
  return (
    <div className="button-grid">
      {buttonData.map((buttonText, index) => (
        <button key={index} onClick={() => onButtonClick(index)} >{buttonText}</button>
      ))}
    </div>
  );
};


function App() {
  const buttonData = ["Box Slide", "Shifty", "360", "540", "Backflip", "Rodeo", "Misty", "Double Backflip"];
  return (
    <div className="App">
      <header className="App-header">
      <ButtonGrid buttonData={buttonData} />
      <iframe width="560" height="315" src="https://www.youtube.com/embed/GNHUImbT3lM?si=Qo4G9e_b2HIph1L9&amp;controls=0&amp;mute=1&amp;autoplay=0&amp;clip=UgkxexgFpu5dKrFl33Sit7GtD55X8klMyOne&amp;clipt=ELC9EBig7BA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/-VtqTcFjBfY?si=KsZ3elN3dGoWP7mT&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxK9SJiWfHDtAxHwEIGljFymn8j_eyPoQ5&amp;clipt=EID0AxiImwQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
