import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react';

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      className='w-full h-full absolute z-0'
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: '',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        detectRetina: true,
        particles: {
          number: {
            value: 90,
            density: {
              enable: true,
              area: 800,
            },
          },
          shape: {
            type: ['circle', 'image'],
            image: [
              {
                src: '/cdprojekt.svg',
                width: 20,
                height: 20,
              },
              {
                src: '/actigraph.svg',
                width: 20,
                height: 20,
              },
              {
                src: 'apacheflink.svg',
                width: 20,
                height: 20,
              },
              {
                src: 'apachehbase.svg',
                width: 20,
                height: 20,
              },
              {
                src: 'dbeaver.svg',
                width: 20,
                height: 20,
              },
              {
                src: 'fluentd.svg',
                width: 20,
                height: 20,
              },
              {
                src: 'kitsu.svg',
                width: 20,
                height: 20,
              },
              {
                src: 'lichess.svg',
                width: 20,
                height: 20,
              },
              {
                src: 'silverairways.svg',
                width: 20,
                height: 20,
              },
              {
                src: 'supercrease.svg',
                width: 20,
                height: 20,
              },
            ],
          },
          size: {
            value: {
              min: 8,
              max: 12,
            },
            random: true,
          },
          opacity: {
            value: 1,
          },
          color: {
            value: ['#39ff14', '#00ffff', '#ff00ff', '#ff9900', '#00ffcc'], // neon colors
          },
          links: {
            enable: true,
            distance: 130,
            color: '#f5d393',
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            random: true,
            straight: false,
            outModes: {
              default: 'bounce',
            },
          },
        },
      }}
    />
  );
};

export default ParticlesContainer;
