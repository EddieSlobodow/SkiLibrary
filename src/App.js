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
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/gJ21zmTRX-k?si=aVhtJ-5p3m3A4AO1&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=Ugkx_Oy_V87OtpkgUPTRAkfx2xYE5z_LQTDH&amp;clipt=EMz5BRjUoAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Frontside Switch Up</p>);
        break;
      case 8:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/lY472lcmByQ?si=kZNgHNkxHA6cc_K3&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=Ugkxf9DphBXJZVYswDakmhxpeCBklf36nhDh&amp;clipt=ENDcEBjYgxE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Backside Swith Up</p>);
        break;
      case 9:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/AvDXXH9w0fk?si=_oqpRhHTodkAlPdP&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=Ugkx8-gCMKohNiydHo4ZUdDu8JiSHDublpcC&amp;clipt=EOWyJBjt2SQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<p>K-Fed</p>);
        break;
      case 10:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/AvDXXH9w0fk?si=TkkPD3Lode3WMkJG&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxBzmFygw3YdeluGi7zjD1_t_1D9W3_kUQ&amp;clipt=EIbWBxiO_Qc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Britney</p>);
        break;
      case 11:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/oLuLDfcTwT0?si=7krbuMh2IO_0B7WB&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxV2SG-6wmZjUsQgTWaDwy7litV69pLsWS&amp;clipt=EL_2CRjHnQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
      case 14:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/gJ21zmTRX-k?si=V_C65NaYrHXNIK2o&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxnaKyKHJNmRU5Ekdgn47Y6XY5Yfq0OTWh&amp;clipt=ELuNBBjDtAQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<p>270 On</p>);
        break;
      case 15:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/QIaeu0Zsx-A?si=DiQKhgIwXp8yTSCe&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxLveHS3CAbY3xWMQafK3zvcNIxw0Pocbt&amp;clipt=EJn4BRihnwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Frontside 450 Out</p>);
        break;
      case 16:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/zLFGulQ5TpY?si=il2SAmLK0Cwf1R5d&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=Ugkx4i44hDGi6tEohAJql35bBtPX-XxS9qwo&amp;clipt=ELiOAxjAtQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Backside 450 Out</p>);
        break;
      case 17:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/gJ21zmTRX-k?si=es3LRhvw0tml7hAn&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxVTFBNCTq45wYS6TfOWgmS8KZVGtmadPW&amp;clipt=EIyxGBiU2Bg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Lazy Boy 360</p>);
        break;
      case 18:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/1hcxwDotQw4?si=C52pnjC0MpfSRwZT&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=Ugkx-JKwl-AtCnM8RdaQ3uwRpTPRk03oAXJX&amp;clipt=EPCoAhj4zwI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Double Nose Grab</p>);
        break;
      case 19:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/wWgCIEpE0Ug?si=nlpb8t3LRXlIgbOw&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxvzJ-F5K_c__W_pJ9jWAY70Cbb1w08HPr&amp;clipt=EMOxDRjL2A0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Mute Grab</p>);
        break;
      case 20:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/GzNy3igWPAo?si=AKq1p-gW68oNbSGP&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxFFh604TH1WZ7wNEbaDs6fNcG0HEkg3xB&amp;clipt=EIvVRBiT_EQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Rodeo 540</p>);
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

  const buttonData = ["50-50", "Shifty", "180", "Box Slide", "360", "Frontside 270 Out", "Backside 270 Out", "Frontside Switch Up", "Backside Switch Up", "K-Fed", "Britney",  "540", "720", "Backflip", "270 On", "Frontside 450 Out", "Backside 450 Out", "Lazy Boy 360", "Double Nose Grab", "Mute Grab", "Rodeo 540", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder", "Placeholder"];
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
