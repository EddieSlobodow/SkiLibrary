import './App.css';
import React, { useState } from 'react';
import Difficulty from './Difficulty.js';


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
    console.log(index);
    switch (index) {
      case 10:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/QbGdXn-Hg3s?si=tBFycexbCEW3siG_&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxcxffvXY7EHdMD3B5O7KXdHgHZ0SXASI4&amp;clipt=EPCoAhj4zwI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        );
        setVideoDesc(<><p className="trickName">50-50</p><p className="description">Performing a 50-50 in skiing involves sliding straight down a rail or box feature with both skis parallel to the rail.</p></>);
        break;
      case 19:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/-VtqTcFjBfY?si=KsZ3elN3dGoWP7mT&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxK9SJiWfHDtAxHwEIGljFymn8j_eyPoQ5&amp;clipt=EID0AxiImwQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        );
        setVideoDesc(<><p className="trickName">Shifty</p><p className="description">Performing a shifty in skiing involves twisting your skis in the air while keeping your body relatively stable, creating a stylish and controlled maneuver.</p></>);
        break;
      case 8:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/3f6l9z8kYrQ?si=H4O4jUJFD0Cz6maK&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=Ugkx5igeQeHT7h4c6wzVX7uUcv6pj_60gKiS&amp;clipt=ELiHFhjArhY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        );
        setVideoDesc(<><p className="trickName">180</p><p>Recommended prerequisites: <button className="redirect" onClick={() => onButtonClick(19)}>Shifty</button></p><p className="description">Performing a 180 in skiing involves rotating your body and skis halfway around in the air or on the snow, completing a half-turn maneuver.</p></>);
        break;
      case 15:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/GNHUImbT3lM?si=_AW8DxFHYS9YYxOR&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxexgFpu5dKrFl33Sit7GtD55X8klMyOne&amp;clipt=ELC9EBig7BA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        );
        setVideoDesc(<><p className="trickName">Box Slide</p><p>Recommended prerequisites: <button className="redirect" onClick={() => onButtonClick(0)}>50-50</button><button className="redirect" onClick={() => onButtonClick(1)}>Shifty</button></p><p className="description">Performing a box slide in skiing involves smoothly gliding sideways along a rail or box feature with your skis perpendicular to the direction of movement.</p></>);
        break;
      case 9:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/xAWIsZKHQEs?si=3sqvxZG7ZwHBdHRc&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxC-g-DSuhjFWAkjxBwkgVQdHdkrTVpj95&amp;clipt=EJThFRiciBY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        );
        setVideoDesc(<><p className="trickName">360</p><p>Recommended prerequisites: <button className="redirect" onClick={() => onButtonClick(8)}>180</button></p><p className="description"></p>Performing a 360 in skiing involves rotating your body and skis a full circle horizontally while in the air or on the snow, executing a complete spinning maneuver.</>);
        break;
      case 16:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/1AA9oE_rGdk?si=e_GWuwWrOGpDa7Y2&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxJWX3bS78VV4kJvOFAJapWhcllBCG_RST&amp;clipt=ELuBCBjDqAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        );
        setVideoDesc(<><p className="trickName">Frontside 270 Out</p><p>Recommended prerequisites: <button className="redirect" onClick={() => onButtonClick(18)}>Rail Grind</button><button className="redirect" onClick={() => onButtonClick(8)}>180</button></p><p className="description">Performing a frontside 270 Out in skiing involves spinning 270 degrees in the air while facing downhill and landing with your back downhill, exiting the feature with style and control.</p></>);        
        break;
      case 13:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/1AA9oE_rGdk?si=WC71X5-BbNFgYI39&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=Ugkxa8FnLrthRF3C4_kMDMqsFN6_JsmE8-64&amp;clipt=EPm4CBiB4Ag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        );
        setVideoDesc(<><p className="trickName">Backside 270 Out</p><p>Recommended prerequisites: <button className="redirect" onClick={() => onButtonClick(18)}>Rail Grind</button><button className="redirect" onClick={() => onButtonClick(8)}>180</button></p><p className="description"></p>Performing a backside 270 Out in skiing involves rotating 270 degrees in the air while facing uphill and landing with your back uphill, completing the maneuver with control and precision.</>);        
        break;
      case 17:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/gJ21zmTRX-k?si=aVhtJ-5p3m3A4AO1&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=Ugkx_Oy_V87OtpkgUPTRAkfx2xYE5z_LQTDH&amp;clipt=EMz5BRjUoAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<><p className="trickName">Frontside Switch Up</p><p>Recommended prerequisites: <button className="redirect" onClick={() => onButtonClick(18)}>Rail Grind</button><button className="redirect" onClick={() => onButtonClick(8)}>180</button></p><p className="description">Performing a frontside switch up in skiing involves rotating 180 degrees while skiing backwards and landing in the opposite direction, typically executed on a rail or box feature.</p></>);
        break;
      case 14:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/lY472lcmByQ?si=kZNgHNkxHA6cc_K3&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=Ugkxf9DphBXJZVYswDakmhxpeCBklf36nhDh&amp;clipt=ENDcEBjYgxE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<><p className="trickName">Backside Switch Up</p><p>Recommended prerequisites: <button className="redirect" onClick={() => onButtonClick(18)}>Rail Grind</button><button className="redirect" onClick={() => onButtonClick(8)}>180</button></p><p className="description">Performing a backside switch up in skiing involves rotating 180 degrees while skiing backwards and landing in the same direction, typically executed on a rail or box feature.</p></>);
        break;
      case 28:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/AvDXXH9w0fk?si=_oqpRhHTodkAlPdP&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=Ugkx8-gCMKohNiydHo4ZUdDu8JiSHDublpcC&amp;clipt=EOWyJBjt2SQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<><p className="trickName">K-Fed</p><p>Recommended prerequisites: <button className="redirect" onClick={() => onButtonClick(17)}>Frontside Switch Up</button><button className="redirect" onClick={() => onButtonClick(13)}>Backside 270 Out</button></p><p className="description">Performing a K-Fed in skiing involves executing a 270-degree spin while sliding sideways on a rail or box, transitioning from forward to backward and landing in the same direction.</p></>);
        break;
      case 24:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/AvDXXH9w0fk?si=TkkPD3Lode3WMkJG&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxBzmFygw3YdeluGi7zjD1_t_1D9W3_kUQ&amp;clipt=EIbWBxiO_Qc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Britney</p>);
        break;
      case 11:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/oLuLDfcTwT0?si=7krbuMh2IO_0B7WB&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxV2SG-6wmZjUsQgTWaDwy7litV69pLsWS&amp;clipt=EL_2CRjHnQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<p>540</p>);
        break;
      case 22:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/hQdXUw0_hkM?si=I4F6D_eeCKdP6QnN&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=Ugkxj9kFG9pohA8SqOhy9P2Waf2W3AWuOPtj&amp;clipt=EKTZCBisgAk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        );
        setVideoDesc(<p>720</p>);
        break;
      case 12:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/iJA06Yan_OQ?si=9zUExW3wl-04rNLw&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxlB5mZTchDIRvfdEmbRQb-ZWv5AKMjv1L&amp;clipt=ENyuBRjk1QU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        );
        setVideoDesc(<><p className="trickName">Backflip</p><p>Recommended prerequisites: <button className="redirect" onClick={() => onButtonClick(9)}>360</button></p><p className="description">Performing a backflip in skiing involves launching off a jump or feature, rotating backward in the air, and landing smoothly on the snow or landing surface.</p></>);
        break;
      case 21:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/gJ21zmTRX-k?si=V_C65NaYrHXNIK2o&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxnaKyKHJNmRU5Ekdgn47Y6XY5Yfq0OTWh&amp;clipt=ELuNBBjDtAQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<p>270 On</p>);
        break;
      case 27:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/QIaeu0Zsx-A?si=DiQKhgIwXp8yTSCe&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxLveHS3CAbY3xWMQafK3zvcNIxw0Pocbt&amp;clipt=EJn4BRihnwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Frontside 450 Out</p>);
        break;
      case 23:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/zLFGulQ5TpY?si=il2SAmLK0Cwf1R5d&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=Ugkx4i44hDGi6tEohAJql35bBtPX-XxS9qwo&amp;clipt=ELiOAxjAtQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Backside 450 Out</p>);
        break;
      case 29:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/gJ21zmTRX-k?si=es3LRhvw0tml7hAn&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxVTFBNCTq45wYS6TfOWgmS8KZVGtmadPW&amp;clipt=EIyxGBiU2Bg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Lazy Boy 360</p>);
        break;
      case 4:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/1hcxwDotQw4?si=C52pnjC0MpfSRwZT&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=Ugkx-JKwl-AtCnM8RdaQ3uwRpTPRk03oAXJX&amp;clipt=EPCoAhj4zwI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Nose Grab</p>);
        break;
      case 3:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/wWgCIEpE0Ug?si=nlpb8t3LRXlIgbOw&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxvzJ-F5K_c__W_pJ9jWAY70Cbb1w08HPr&amp;clipt=EMOxDRjL2A0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Mute Grab</p>);
        break;
      case 32:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/GzNy3igWPAo?si=AKq1p-gW68oNbSGP&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxFFh604TH1WZ7wNEbaDs6fNcG0HEkg3xB&amp;clipt=EIvVRBiT_EQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Rodeo 540</p>);
        break;
      case 26:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/48rpJlnKebA?si=_IswOROQzUE6J7KA&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxErG9VHt1YFEmN7gDRt1DJNo6C24LbF10&amp;clipt=EOSODBjstQw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Front Flip</p>);
        break;
      case 30:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/48rpJlnKebA?si=lAUWtKrn0sNKrjTY&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxqKQZlsnYODdaZd99lIgWq_z3N5ctWQZ2&amp;clipt=EOXhIxjtiCQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Lincoln Loop</p>);
        break;
      case 25:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/sGnRUkBalgg?si=CoOiil4FVNGBsqo0&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxuT8vPiWSHfXw-wTEe_UE52CxXUGWJ1ci&amp;clipt=EIw9GJRk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Flatspin 360</p>);
        break;
      case 2:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/wWgCIEpE0Ug?si=Vqxb3Bu00rRwQkYJ&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxQPYJCafQ02SjkJ8gWhqgdxI0uEK5H2El&amp;clipt=EKzAFRi05xU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Japan Grab</p>);
        break;
      case 31:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/x4wnHnnFPFA?si=5H_ST7Wk1USrNtBX&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=Ugkx67zTjc9bT029qJcLfaD5A7Bp_EVG_4Bd&amp;clipt=EJW1CBj_5Ag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<><p className="trickName">Misty 540</p><p>Recommended prerequisites: <button className="redirect" onClick={() => onButtonClick(26)}>Front Flip</button><button className="redirect" onClick={() => onButtonClick(11)}>540</button></p><p className="description">Performing a misty 540 in skiing involves initiating a forward flip while simultaneously rotating your body 540 degrees horizontally, creating a stylish spinning trick.</p></>);
        break;
      case 5:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/k10naSf1zXU?si=RbzpIu7UBfhY53a0&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=Ugkxd_H5wtmZ7hOiLr6zGTQoDtOk7JCdRU53&amp;clipt=EILZKxiujyw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Safety Grab</p>);
        break;
      case 1:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/fZMCOKqHJOg?si=L12tXbCWyL1eE-8g&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxvmvzI9vAZqwPT5JUvMzMeKAmAzF7Q_wA&amp;clipt=EPybBRjY2QU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Blunt Grab</p>);
        break;
      case 6:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/gJ21zmTRX-k?si=P_myKbJYv2nk8GyM&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxGK8L3mqGRTqUWST5iKgG6BvlMzbgXNQ1&amp;clipt=EJrSCRii-Qk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Switch</p>);
        break;
      case 18:
        setVideoContent(<iframe width="560" height="315" src="https://www.youtube.com/embed/gJ21zmTRX-k?si=r0_PwLrnKvCZK3Uq&amp;controls=0&amp;mute=1&amp;autoplay=1&amp;clip=UgkxOF7wP7j26SrJc7VogYEW0qCCV3oziR9H&amp;clipt=EPi0CxiA3As" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
        setVideoDesc(<p>Rail Grind</p>);
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
        {buttonData.map((buttonText, index) => {
          if (buttonText === "termComponent") return <Difficulty color="rgb(135, 135, 135)" text="Terminology" />;
          if (buttonText === "beginnerComponent") return <Difficulty color="rgb(95, 195, 95)" text="Beginner" />;
          if (buttonText === "intermediateComponent") return <Difficulty color="rgb(255, 207, 64)" text="Intermediate" />;
          return(
          <button class="grid-buttons" key={index} onClick={() => onButtonClick(index)} >{buttonText}</button>
          );
        })}
      </div>
    );
  };

  const buttonData = ["termComponent", "Blunt Grab", "Japan Grab", "Mute Grab", "Nose Grab", "Safety Grab", "Switch", "beginnerComponent", "180", "360", "50-50", "540", "Backflip", "Backside 270 Out", "Backside Switch Up", "Box Slide", "Frontside 270 Out", "Frontside Switch Up", "Rail Grind", "Shifty", "intermediateComponent", "270 On", "720", "Backside 450 Out", "Britney", "Flatspin 360", "Front Flip", "Frontside 450", "K-Fed", "Lazy Boy 360", "Lincoln Loop", "Misty 540", "Rodeo 540"];
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
          <button id="closeButton" onClick={closeSideWindow}>Close</button>
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
