import React, { useState, useEffect, useMemo } from 'react';

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Link } from 'react-router-dom';



export function PageNotFound() {


  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      background: {
        color: {
          value: "#1C1C1C",
        },
      },

      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          onPush: {
            enable: true,
            mode: "push",
          }

        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 10,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#CCCCCC",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1.5,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: false,
          },
          value: 60,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "star",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {

    return (

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh'
      }}>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <h1 style={{ textAlign: 'center', color: 'white' }}>
          Page Not Found :(
        </h1>

        <Link to="/home" style={{ display: 'block', color: 'rgb(0,150,250,1)', textAlign: 'center' }}>Go back to home?</Link>

      </div>

    );
  }
}

