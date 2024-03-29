import './App.css';
import React, { useState } from 'react';


function App() {

  const [videoContent, setVideoContent] = useState(null);
  const [isSideWindowOpen, setSideWindowOpen] = useState(false);
  const [videoDesc, setVideoDesc] = useState(null);

  const openSideWindow = () => {
    setSideWindowOpen(true);
  };

  const closeSideWindow = () => {
    setSideWindowOpen(false);
  };

  const onButtonClick = (index) => {
    switch (index) {
      case 0:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/QbGdXn-Hg3s?si=tBFycexbCEW3siG_&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxcxffvXY7EHdMD3B5O7KXdHgHZ0SXASI4&amp;clipt=EPCoAhj4zwI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        );
        setVideoDesc(<p>50-50</p>);
        break;
      case 1:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/-VtqTcFjBfY?si=KsZ3elN3dGoWP7mT&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxK9SJiWfHDtAxHwEIGljFymn8j_eyPoQ5&amp;clipt=EID0AxiImwQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        );
        setVideoDesc(<p>Shifty</p>);
        break;
      case 2:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/3f6l9z8kYrQ?si=H4O4jUJFD0Cz6maK&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=Ugkx5igeQeHT7h4c6wzVX7uUcv6pj_60gKiS&amp;clipt=ELiHFhjArhY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        );
        setVideoDesc(<p>180</p>);
        break;
      case 3:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/GNHUImbT3lM?si=_AW8DxFHYS9YYxOR&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxexgFpu5dKrFl33Sit7GtD55X8klMyOne&amp;clipt=ELC9EBig7BA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Box Slide<br></br>Recommended prerequisites: <button onClick={() => onButtonClick(0)}>50-50</button><button onClick={() => onButtonClick(1)}>Shifty</button></p>);
        break;
      case 4:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/xAWIsZKHQEs?si=3sqvxZG7ZwHBdHRc&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxC-g-DSuhjFWAkjxBwkgVQdHdkrTVpj95&amp;clipt=EJThFRiciBY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        );
        setVideoDesc(<p>360</p>);
        break;
      case 5:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/1AA9oE_rGdk?si=e_GWuwWrOGpDa7Y2&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxJWX3bS78VV4kJvOFAJapWhcllBCG_RST&amp;clipt=ELuBCBjDqAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Frontside 270 Out</p>);
        break;
      case 6:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/1AA9oE_rGdk?si=WC71X5-BbNFgYI39&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=Ugkxa8FnLrthRF3C4_kMDMqsFN6_JsmE8-64&amp;clipt=EPm4CBiB4Ag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Backside 270 Out</p>);
        break;
      case 7:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/bTKyc9XzspI?si=1n-VAasZrLHWFBMP&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxkDoVL2HPybpg51TqyfJilrLg3CmBJ2f7&amp;clipt=ENTjERjcihI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Frontside Switch Up</p>);
        break;
      case 8:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/bTKyc9XzspI?si=7z7rF3wal76sQQjY&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=Ugkxa45PRBbOZUaxEiLag59XvyTNzXR8vjL4&amp;clipt=ELn7ExjBohQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Backside Swith Up</p>);
        break;
      case 9:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/bTKyc9XzspI?si=GzvwQLjOMmmVGW9c&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxU4_be6ENtdskpqabA4okmXsGBWdd7bsC&amp;clipt=EJDtFxiYlBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        );
        setVideoDesc(<p>K-Fed</p>);
        break;
      case 10:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/bTKyc9XzspI?si=559j_NNFwCztKu16&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxJKtCyPnd_pYPF7H164J7s_pERJj3P9wl&amp;clipt=EJXuGhidlRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Britney</p>);
        break;
      case 11:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/CDG8dLySACw?si=m6dSX3m2mNdpZZE8&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxaAeOIUPR6-CqM_cYwYKfNk-fw2lgtYK7&amp;clipt=EJaBChieqAo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        );
        setVideoDesc(<p>540</p>);
        break;
      case 12:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/hQdXUw0_hkM?si=I4F6D_eeCKdP6QnN&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=Ugkxj9kFG9pohA8SqOhy9P2Waf2W3AWuOPtj&amp;clipt=EKTZCBisgAk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        );
        setVideoDesc(<p>720</p>);
        break;
      case 13:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/iJA06Yan_OQ?si=9zUExW3wl-04rNLw&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxlB5mZTchDIRvfdEmbRQb-ZWv5AKMjv1L&amp;clipt=ENyuBRjk1QU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Backflip</p>);
        break;
      default:
        setVideoContent(<p>Error</p>);
        setVideoDesc(<p></p>);
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

  const buttonData = ["50-50", "Shifty", "180", "Box Slide", "360", "Frontside 270 Out", "Backside 270 Out", "Frontside Switch Up", "Backside Switch Up", "K-Fed", "Britney",  "540", "720", "Backflip", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder"];
  return (
    <div className="App">
      <div className="background"></div>
      <div>
      {/* Render the side window conditionally based on state */}
      {isSideWindowOpen && (
        <div className="side-window">
          {/* Content of your side window */}
          <div id="video">
          {videoContent}
          </div>
          <div>
          {videoDesc}
          </div>
          <button onClick={closeSideWindow}>Close</button>
        </div>
      )}
    </div>
      <header className="App-header">
      <h1>Ski Tricktionary</h1>
      <p><a href="https://github.com/EddieSlobodow/SkiLibrary">Github</a></p>
      <ButtonGrid buttonData={buttonData} />
        
      </header>
    </div>
  );
}

export default App;
