import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/GNHUImbT3lM?si=TMIx4oaAIb94on5F&amp;clip=UgkxexgFpu5dKrFl33Sit7GtD55X8klMyOne&amp;clipt=ELC9EBig7BA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/-VtqTcFjBfY?si=KsZ3elN3dGoWP7mT&amp;clip=UgkxK9SJiWfHDtAxHwEIGljFymn8j_eyPoQ5&amp;clipt=EID0AxiImwQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
