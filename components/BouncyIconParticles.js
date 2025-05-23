import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react';

const BouncyIconParticles = () => {
    const particlesInit = useCallback(async(engine) => {
        await loadFull(engine);
    }, []);

    const loadedParticles = useCallback(async() => {}, []);
        
    return (
        <Particles
            id='tsparticles'
            className='w-full h-full absolute z-0'
            init={particlesInit}
            loaded={loadedParticles}
            options={{
                fullscreen: { enable: false },
                background: {
                    color: {
                        value: 'transparent',
                    },      
                },
                fpsLimit: 60,
                detectRetina: true,
                particles: {
                    number: {
                        value: 20,
                        density: {
                            enable: true,
                            area: 800,
                        },
                    },
                    shape: {
                        type: ['image', 'circle'],
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
                        value: 10,
                        random: { enable: true, minimumValue: 8 },
                    },
                    move: {
                        enable: true,
                        speed: 1.5,
                        direction: 'none',
                        random: 'true',
                        staright: 'false',
                        outModes: {
                            default: 'bounce',
                        },
                    },
                    opacity: {
                        value: 1,
                    },
                    color: {
                        value: ['#39ff14', "#00ffff", "#ff00ff", "#ff9900", "#00ffcc" ], // neon-like colors
                    },
                },
            }}
        />
    );
};

export default BouncyIconParticles;