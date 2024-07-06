"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'
import { smallHeroVideo,heroVideo } from '@components/utils'

export default function Hero() {
    const  [videoSrc, setVideoSrc] = useState('');

    useEffect(() => {
        // Set initial video source based on window width
        setVideoSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

        const handleVideoSrcSet = () => {
            if (window.innerWidth < 760) {
                setVideoSrc(smallHeroVideo);
            } else {
                setVideoSrc(heroVideo);
            }
        };

        window.addEventListener('resize', handleVideoSrcSet);
        return () => {
            window.removeEventListener('resize', handleVideoSrcSet);
        };
    }, []);


    useGSAP(() =>{
gsap.to('#hero', {opacity:1,delay:2})
gsap.to('#cta', {opacity:1,y:-50,delay:2})

    },[])
  return (
    <div>
        <section className=' h-5/6 w-full nav-height bg-black relative '>
            <div className=' w-full flex-center flex-col'>
                <p id='hero' className='hero-title'>
                    iPhone 15 Pro
                </p></div>
                <div>
                    <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}><source  src={videoSrc} type='video/mp4'/> </video>
                </div>
                <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
                    <a href="#highlights" className='btn'>
                        Buy
                    </a>
                    <p className='font-normal text-xl'> From $199/month or $999</p>
                </div>
        </section>
    </div>
  )
}
