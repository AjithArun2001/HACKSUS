import React from 'react'
import Particles from "react-tsparticles";
import leafa from './images/leafs/leaf a.png'
import leafb from './images/leafs/leaf b.png'
import leafc from './images/leafs/leaf c.png'
import leafd from './images/leafs/leaf d.png'

function AnimationBG({height}) {
    
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    
    return (
        <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      width = "100vw"
      height = "100%"
      style ={{position: "absolute", top: 0, left: 0}}
      options={{
        background: {
          color: {
            value: "#ffffff",
            opacity: 0
          },
        },
        fullScreen : {
            enable: false,
            zIndex: -2
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#000000",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "bottom",
            enable: true,
            outMode: "out",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 2500,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          rotate: {
            random : {
              enable: true,
              minimumValue: 0
            },
            animation: {
              enable: true,
              speed: 5,
              sync: false
            },
            value: 0,
            direction: "random",
            path: false
          },
          shape: {
            type: "image",
            options: {
              image : [

                {
                  src : leafa,
                  width: 48,
                  height: 48
                },
                {
                  src : leafb,
                  width: 48,
                  height: 48
                },
                {
                  src : leafc,
                  width: 48,
                  height: 48
                },
                {
                  src : leafd,
                  width: 48,
                  height: 48
                }
              ]
            }
          },
          size: {
            random: {
              enable: true,
              minimumValue: 40 
            },
            value: 50,
          },
        },
        detectRetina: true,
      }}
    />
    )
}

export default AnimationBG
