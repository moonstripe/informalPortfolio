import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import useWindowDimensions from './hooks/useWindowHeight';
import { useEffect, useState, useRef } from 'react';

// break the following out into /components
const YoutubeEmbed = () => (
  <div data-aos='fade-left' className='presentationTwoFour' style={{ padding: 25 }}>
    <iframe width='670' height="300" src="https://www.youtube.com/embed/MG1J4Zn35zE" title="Beyond Beyond" frameBorder="0"></iframe>
  </div>
);

const FileSVG = () => {
  return (
    <svg width="auto" height="auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className='presentationTwoThree'>

      <g id="file">
        <path d="M65.5 46.5V90.5H21V34H53M65.5 46.5L53 34M65.5 46.5H53V34" stroke="black" fill="white" />
      </g>

      <g id="text">
        <rect x="25" y="42" width="11" height="4" fill="#C4C4C4" id="text1" />
        <rect x="39" y="42" width="7" height="4" fill="#C4C4C4" id="text2" />
        <rect x="25" y="51" width="7" height="4" fill="#C4C4C4" id="text3" />
        <rect x="34" y="51" width="10" height="4" fill="#C4C4C4" id="text4" />
        <rect x="46" y="51" width="12" height="4" fill="#C4C4C4" id="text5" />
      </g>

      <g id="pencil">
        <path
          d="M25.4311 45.1993L26.625 39.8264L28.5733 38.9306L28.0561 40.6527L29.2889 39.3437L29.4872 41.4789L25.4311 45.1993Z"
          fill="white" stroke="black" stroke-width="0.5" />
        <path
          d="M42 13.1962L27 39.1769L28.5733 38.9306L28.4311 40.0032L29.2889 39.3437L29.8622 40.8294L44.8622 14.8486L42 13.1962Z"
          fill="#FFA500" stroke="black" />
        <path d="M26.9311 42.6012L26.0733 43.2607L25.6811 44.7663L26.7888 43.6738L26.9311 42.6012Z"
          stroke="black" />
        <path d="M43 11.4641L42 13.1961L44.8622 14.8486L45.8622 13.1166L43 11.4641Z" fill="#008000"
          stroke="black" />
        <path d="M45 8L43 11.4641L45.8622 13.1166L47.8622 9.65248L45 8Z" fill="#FFC0CB" stroke="black" />
      </g>
    </svg>
  )
}


function App() {

  const time = new Date().getHours()
  const { height } = useWindowDimensions()
  const [scrollPosition, setScrollPosition] = useState(0);

  const introRef = useRef()
  const missionRef = useRef()
  const kaiRef = useRef()
  const beyondRef = useRef()
  const svgRef = useRef()

  // break the following out into /hooks
  const handleIntroClick = () => {
    introRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const handleMissionCLick = () => {
    missionRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const handleKaiClick = () => {
    kaiRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const handleBeyondClick = () => {
    beyondRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const handleSVGClick = () => {
    svgRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScroll = () => {
    const position = window.pageYOffset;
    console.log(position / height)
    setScrollPosition(position);
  };

  useEffect(() => {
    Aos.init({ duration: 1300 })
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  })


  return (
    <div ref={introRef} className='container'>
      <div className='oneTwo' style={{ position: 'fixed', marginTop: height / 3 }}>
        <ul>
          <li data-aos='fade-in'><button onClick={handleIntroClick}>Intro</button></li>
          { scrollPosition / height > 0.8 ?
            <li data-aos='fade-in'><button onClick={handleMissionCLick}>Mission Statement</button></li> : null
          }
          <ul>
            {scrollPosition / height > 2 ?
              <li data-aos='fade-in'><button onClick={handleKaiClick}>KaiCube</button></li> : null
            }
            {scrollPosition / height > 2.5 ?
              <li data-aos='fade-in'><button onClick={handleBeyondClick}>Beyond <i>Beyond</i></button></li> : null
            }
            {scrollPosition / height > 3 ?
              <li data-aos='fade-in'><button onClick={handleSVGClick}>SVGs</button></li> : null
            }
          </ul>
        </ul>
      </div>



      <h2 data-aos="fade-in" className='twoFour' style={{ marginTop: height / 3 }}>{time > 11 ? 'Good afternoon,' : 'Good morning,'}</h2>

      <div data-aos="fade-in" className='twoFour' style={{ marginTop: height / 8 }}>
        <h3>My name is
          <span style={{ fontSize: "1.5em", fontWeight: "bold", borderStyle: 'solid', borderWidth: "3px", padding: "0.25em", width: '250', marginLeft: '0.25em' }}>Kojin Glick.</span>
        </h3>
      </div>

      <h2 ref={missionRef} data-aos="fade-up" className='twoFour' style={{ marginTop: height / 2 }}>What I want to achieve at Informal Systems,</h2>
      <h1 data-aos="fade-up" className='threeFive' style={{ marginTop: height / 8  }}>is to make the blockchain <i style={{ fontFamily: 'EB Garamond'}}>feel</i> good.</h1>

      <p data-aos="fade-in" className='twoFour' style={{ marginTop: height / 8 }}>The technology that can change most everyone's lives already exists. What's lacking is a voice to spread the word. The blockchain and its offspring have allowed us to think beyond the traditional. It's time to apply that to design.</p>

      <div data-aos="fade-in" className='twoFour' style={{ marginTop: height / 4 }}>
        <h2>
          <span style={{ fontSize: "1.5em", fontWeight: "bold", borderStyle: 'solid', borderWidth: "3px", padding: "0.25em", width: '250', marginLeft: '0.25em' }}>Design Experience</span>
        </h2>
      </div>

      <div ref={kaiRef} className="presentation" style={{ marginTop: height / 16 }}>
        <h2 data-aos='fade-right' className='presentationTwoThree' style={{ marginLeft: '2vw' }}>KaiCube: An Emulator Case</h2>

        <img data-aos='fade-right' className='presentationTwoThree' style={{ maxHeight: '25vw' }} src='./images/nocont.png' alt="The KaiCube, an emulator made of pine wood, acrylic, and a Raspberry Pi 4" />

        <p data-aos='fade-in' className='presentationThreeFive' style={{ padding: 25 }}>The KaiCube is a vertically oriented case for a Raspberry Pi that runs the RetroPie emulation software. It can play many of the games made prior to the addition of the Graphics Processing Unit in consumer consoles, making it the perfect nostalgia machine. <br /><br /> Sit down with your friends and family and enjoy more 8-bit action than you thought could fit in the red and pine case of the KaiCube! The presentation of this console was designed in Adobe Illustrator.</p>
      </div>

      <div ref={beyondRef} className="presentation" style={{ marginTop: height / 16 }}>
        <h2 data-aos='fade-left' className='presentationTwoThree' style={{ marginLeft: '2vw' }}>Beyond <i>Beyond</i>: A Visual Case Study of Leidsche Rijn</h2>
        <YoutubeEmbed />
        <p data-aos='fade-in' className='presentationTwoFive' style={{ paddingLeft: 25, paddingRight: 25, paddingBottom: 25 }}>Beyond <i>Beyond</i> was a semester-long project in understanding and appreciating a new district annexation of the city of Utrecht in the Netherlands. The visual direction we took was to preserve the new, almost sterile environment of the recently added residential areas. This video was created using Adobe Premiere.</p>
      </div>

      <div className="presentation" style={{ marginTop: height / 16 }}>
        <h2 data-aos='fade-right' className='presentationTwoThree' style={{ marginLeft: '2vw' }}>SVG Icons and Graphics</h2>
        <FileSVG />
        <p data-aos='fade-in' className='presentationThreeFive' style={{ padding: 25 }}>In addition to fabrication and motion picture production, I have also done several studies of SVGs and iconography. From personal logos and branding to making loading animations, this skill can be used to populate any webpage with visually striking iconography and branded graphics to make Informal Systems look and feel like Informal Systems. <br /><br /> This SVG was made using Figma and animated with raw CSS, making it flexible for use in whatever web framework Informal Systems chooses. In other projects, I use Adobe Illustrator to create the SVG file to animate with CSS.</p>
      </div>

      <div ref={svgRef} className="presentation" style={{ marginTop: height / 16, marginBottom: height / 16, textAlign: 'center', color: 'white' }}>
        <h3>Find the source here: <a href="https://github.com/moonstripe/informalPortfolio" target="_blank" rel="noreferrer" >GitHub</a></h3>
      </div>
    </div >
  );
}

export default App;
