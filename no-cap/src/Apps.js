import React from 'react';
import './scss/style.css';
import Particles from 'react-particles-js';
import Nav from './components/nav.js';
import Header from './components/header.js';
import Projects from './components/projects.js';
import Profile from './components/profile.js';
import Footer from './components/footer.js';
import weather from './img/weather.png';
import alphaMark from './img/alphaMark.png';
import topview from './img/topview.png';
import bankroll from './img/bankroll.png';

/*
const particlesJS = window.particlesJS;
    particlesJS.load('particles-js', './particlesjs-config.json', function() {
      console.log('callback - particles.js config loaded');
    });
*/
const Project = [
  {
    src: weather,
    title: 'Weather Application',
    text: 'Application made using OpenWeatherMap.org Api to display the weather.',
    tech: 'ReactJS, API, Bootstrap, SASS',
    date: '5/17/18',
    link: 'https://github.com/anthonyg56/React-Weather-App'
  },
  {
    src: topview,
    title: 'Top View Zero',
    text: 'Top View is an Entrepreneurial platform that aims to zero in on those who are on top of their game in their respected field.',
    tech: 'HTML, CSS, JS, Bootstrap, SASS, Ajax',
    date: "5/3/18",
    link: 'https://github.com/anthonyg56/Top-View'
  },
  {
    src: bankroll,
    title: 'Bankroll Cartel Music',
    text: 'Page for the music group "The Bankroll Cartel" to showcase their music, personality, and activities throughout the city.',
    tech: 'HTML, CSS, JS, Bootstrap, SASS, Ajax',
    date: '4/28/18',
    link: 'https://github.com/anthonyg56/Bankroll'
  },
  {
    src: alphaMark,
    title: 'Alpha Mark Real Estate',
    text: 'Real Estate website that makes it easier to get in touch with The owner of Alphamark to buy or sell a house.',
    tech: 'HTML, CSS, JS, Bootstrap, SASS',
    date: '2/4/18',
    link: 'https://github.com/anthonyg56/Alpha-Mark-Real-Estate'
  },
];

var newStyle = {
  display: "block",
  height: "100%",
  left: "0",
  position: "absolute",
  top: "0",
  width: "100%",
};

class App extends React.Component {
  render(){
    const proj = Project.map(project =>{
        return(
            <Projects className="git_projects" pic={project.src} title={project.title} description={project.text} link={project.link} />
        );
    });

    return(
      <div className="container-fluid">
        <Nav className="navigation-bar"/>
        <Particles
          params={
            {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#000000'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      },
      polygon: {
        nb_sides: 5
      },
      /*image: {
        src: img/github.svg,
        width: 100,
        height: 100
      }*/
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 11.83721462448409,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 12.626362266116361,
      direction: 'bottom-right',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
        mode: 'repulse'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
}
            }
          
          style={newStyle}
        />
        <div className="header-wrapper container text-center" id="particles-js">
        <Header className="heading"/>
        </div>
        <div className="project-wrapper container text-center">
          <h1>Projects</h1>
          {proj}
        </div>
        <div className="profile-wrapper container text-right">
          <Profile className="profile"/>
        </div>
        <div className="footer-wrapper container">
            <Footer className="footer"/>
        </div>
      </div>
    );
  }
}

export default App;
