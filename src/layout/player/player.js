import React, { useEffect, useRef, useState } from 'react'
import './player.css'
import { db } from '../../firbeaseConfig/firebaseConfig'
import { addDoc, collection, doc } from 'firebase/firestore'
import axios from 'axios';

function Player() {

    const [audioProgress, setAudioProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false)
    const currentAudio = useRef();

    const handleAudioProgressBar = async (e) => {
        setAudioProgress(e.target.value)
        currentAudio.current.currentTime = e.target.value * currentAudio.current.duration / 100;
    }

    const handleAudioUpdate = () => {
        const progress = parseInt((currentAudio.current.currentTime / currentAudio.current.duration) * 100)
        setAudioProgress(isNaN(progress) ? 0 : progress)
    }

    const deezerOptions = {
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
        params: { q: 'jatt mehkma, yo yo honey singh' },
        headers: {
            'x-rapidapi-key': 'a7f4797df6msh7108391419fe310p1f3a35jsn55af705cc6ac',
            'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
        },
    };

    const [url, setUrl] = useState('');
    const [duration, setDuration] = useState();

    const fetch = async () => {
        await axios(deezerOptions)
            .then((result) => {
                setUrl(result.data.data[0].preview)
                setDuration(result.data.data[0].duration)
                console.log(duration)
            })
    }

    useEffect(() => {
        fetch();
    }, [])

    const handleAudioPlay = () => {
        if (currentAudio.current.paused) {
            currentAudio.current.play();
            setIsPlaying(true)
        } else {
            currentAudio.current.pause();
            setIsPlaying(false)
        }
    }

    return (
        <div className='player_container' >
            <div className='player_control_container'>
                {
                    isPlaying ?
                        <div onClick={handleAudioPlay} >
                            <svg width="45" height="45" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="19.0085" cy="19.0085" r="19.0085" fill="#1ED760" />
                                <path d="M15.8401 14.2563V23.7606" stroke="black" stroke-width="3.16809" stroke-linecap="round" />
                                <path d="M22.1765 14.2563V23.7606" stroke="black" stroke-width="3.16809" stroke-linecap="round" />
                            </svg>
                        </div>
                        :
                        <div onClick={handleAudioPlay}>
                            <svg width="45" height="45" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20.2054" cy="20.2054" r="20.2054" fill="#1ED760" />
                                <path d="M26.328 18.8797C27.3484 19.4688 27.3484 20.9418 26.328 21.5309L18.2917 26.1707C17.2712 26.7598 15.9956 26.0234 15.9956 24.845L15.9956 15.5656C15.9956 14.3872 17.2712 13.6508 18.2917 14.2399L26.328 18.8797Z" fill="black" />
                            </svg>
                        </div>
                }
                <div>
                    <svg width="30" height="30" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.21082 6.44092V15.9452" stroke="#898989" stroke-width="2.37606" stroke-linecap="round" />
                        <path d="M9.10026 12.4051C8.21694 11.8385 8.21694 10.5476 9.10026 9.98099L15.6855 5.75654C16.644 5.14171 17.9031 5.82993 17.9031 6.96862V15.4175C17.9031 16.5562 16.644 17.2444 15.6855 16.6296L9.10026 12.4051Z" fill="#898989" />
                    </svg>
                </div>
                <div>
                    <svg width="30" height="30" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.4841 6.44092V15.9452" stroke="#898989" stroke-width="2.37606" stroke-linecap="round" />
                        <path d="M14.5947 9.98109C15.478 10.5477 15.478 11.8386 14.5947 12.4052L8.00942 16.6297C7.05099 17.2445 5.79184 16.5563 5.79184 15.4176L5.79184 6.96871C5.79184 5.83003 7.05099 5.14181 8.00943 5.75664L14.5947 9.98109Z" fill="#898989" />
                    </svg>
                </div>
                <div>
                    <svg width="30" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.99622 8.06491V8.06491C6.48228 8.06491 7.87168 8.8016 8.70554 10.0317L9.49167 11.1913L10.5514 12.7545M22.5381 20.5704H17.9049C16.6627 20.5704 15.47 20.0841 14.582 19.2155L13.7085 18.3611M22.5381 20.5704L19.2526 23.9053M22.5381 20.5704L19.2526 17.2356" stroke="#898989" stroke-width="1.90085" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4.99622 22.4799V22.4799C6.48596 22.4799 7.88259 21.7552 8.74032 20.5372L14.5475 12.2906C15.4376 11.0266 16.887 10.2745 18.4329 10.2745H22.538M22.538 10.2745L19.2526 6.9397M22.538 10.2745L19.2526 13.6094" stroke="#898989" stroke-width="1.90085" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div>
                    <svg width="30" height="30" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.30904 18.7375H6.93298C5.18329 18.7375 3.76489 17.3191 3.76489 15.5694V9.23328C3.76489 7.48359 5.18329 6.06519 6.93298 6.06519H19.6053C21.355 6.06519 22.7734 7.48359 22.7734 9.23327V15.5694C22.7734 17.3191 21.355 18.7375 19.6053 18.7375H13.2692M13.2692 18.7375L16.4372 15.5694M13.2692 18.7375L16.4372 21.9056" stroke="#898989" stroke-width="1.90085" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <div className='player_timing'>
                <h4>0:00</h4>
                <input type='range' value={audioProgress} onChange={handleAudioProgressBar} className='player_liner' />
                <h4>0:30</h4>
                <div className='mute_button' >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2124_6365)">
                            <path d="M4.88697 15.7896C1.93878 14.3155 1.93878 10.1083 4.88697 8.63421L13.5307 4.31235C13.9739 4.09072 14.4955 4.41305 14.4955 4.90864L14.4955 19.5152C14.4955 20.0108 13.9739 20.3331 13.5307 20.1115L4.88697 15.7896Z" stroke="#898989" stroke-width="2" />
                            <path d="M18.829 17.2119C19.6098 16.999 20.3318 16.5265 20.9071 15.8381C21.7108 14.8764 22.1623 13.572 22.1623 12.2119C22.1623 10.8518 21.7108 9.54745 20.9071 8.58572C20.3318 7.89734 19.6098 7.42487 18.829 7.21191" stroke="#898989" stroke-width="1.66667" stroke-linecap="round" />
                            <path d="M17.9959 11.7057C17.9959 11.525 18.1479 11.3728 18.3148 11.4419C18.4159 11.4838 18.5078 11.5452 18.5852 11.6226C18.6626 11.7 18.724 11.7918 18.7658 11.8929C18.8077 11.994 18.8293 12.1024 18.8293 12.2118C18.8293 12.3213 18.8077 12.4296 18.7658 12.5307C18.724 12.6318 18.6626 12.7237 18.5852 12.8011C18.5078 12.8785 18.4159 12.9399 18.3148 12.9817C18.1479 13.0509 17.9959 12.8987 17.9959 12.7179L17.9959 12.2118L17.9959 11.7057Z" fill="#898989" stroke="#898989" stroke-width="0.833333" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2124_6365">
                                <rect width="23.3333" height="23.3333" fill="white" transform="translate(0.495605 0.54541)" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>
            </div>
            <div className='playing_details' >
                <div className='playing_cover_img' >
                    <img src='../../../../image/cover-image.png' />
                </div>
                <div className='playing_names' >
                    <h4>Get Lucky</h4>
                    <h6>Draft Punk</h6>
                </div>
            </div>
            <div className='player_functional_icons' >

                <div>
                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.7197 14.0678L20.8558 15.8738L18.992 14.0678C17.0376 12.1741 13.9025 12.2787 12.0786 14.2984C10.3089 16.2581 10.0652 19.1936 11.6678 21.2923C11.8647 21.5502 12.0583 21.7972 12.2426 22.0232C13.4091 23.4542 15.9541 25.9531 17.2292 27.2942C18.1713 28.285 19.0181 29.1113 19.6561 29.7132C20.3298 30.3488 21.3698 30.335 22.0448 29.7007C23.2211 28.5954 25.025 26.8736 26.2957 25.5372C27.5709 24.1961 28.3026 23.4542 29.469 22.0232C29.6533 21.7972 29.8469 21.5502 30.0439 21.2923C31.6464 19.1936 31.4028 16.2581 29.633 14.2984C27.8092 12.2787 24.674 12.1741 22.7197 14.0678Z" stroke="#898989" stroke-width="2.02054" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div>
                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="19.75" height="19.75" rx="2.9625" transform="matrix(1 0 0 -1 10.355 31.688)" stroke="#898989" stroke-width="1.975" stroke-linejoin="round" />
                        <path d="M12.3296 11.938H28.1296V11.938C28.1296 10.3018 26.8032 8.97549 25.1671 8.97549H15.2921C13.6559 8.97549 12.3296 10.3018 12.3296 11.938V11.938Z" stroke="#898989" stroke-width="1.48125" stroke-linejoin="round" />
                        <path d="M16.28 21.813H20.23M24.18 21.813H20.23M20.23 21.813V17.863M20.23 21.813V25.763" stroke="#898989" stroke-width="1.99528" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div>
                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4048 14.6499H23.2548" stroke="#898989" stroke-width="1.975" stroke-linecap="round" />
                        <path d="M11.4048 21.5623H19.3048" stroke="#898989" stroke-width="1.975" stroke-linecap="round" />
                        <path d="M11.4048 28.4749H19.3048" stroke="#898989" stroke-width="1.975" stroke-linecap="round" />
                        <path d="M29.1799 13.6624V22.4845M29.1799 22.4845V27.0919C29.1799 27.8324 28.6538 28.4735 27.9133 28.4748C26.4503 28.4775 24.2424 28.0472 24.2424 25.4252C24.2424 21.5043 29.1799 22.4845 29.1799 22.4845Z" stroke="#898989" stroke-width="1.975" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div>
                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="17.5234" y="11.6599" width="11.7865" height="17.6797" rx="2.94662" stroke="#898989" stroke-width="2.06263" />
                        <circle cx="23.4168" cy="23.4466" r="2.94662" fill="#898989" />
                        <circle cx="23.4167" cy="16.08" r="1.47331" fill="#898989" />
                        <circle cx="13.1037" cy="27.8666" r="1.47331" fill="#898989" />
                        <path d="M13.8403 22.7099H13.1037C12.29 22.7099 11.6304 22.0503 11.6304 21.2366V16.08C11.6304 15.2663 12.29 14.6067 13.1037 14.6067H13.8403" stroke="#898989" stroke-width="2.06263" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div>
                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.769" cy="20.7058" r="1.68378" fill="#898989" />
                        <circle cx="21.1879" cy="20.7058" r="1.68378" fill="#898989" />
                        <circle cx="29.6066" cy="20.7058" r="1.68378" fill="#898989" />
                    </svg>
                </div>
                <div style={{ width: '3px', height: '40px', background: '#4d5057', borderRadius: '5px' }} ></div>
                <div>
                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4695 15.0929C12.4695 13.543 13.7259 12.2866 15.2758 12.2866H26.501C28.0509 12.2866 29.3073 13.543 29.3073 15.0929V15.0929C29.3073 16.6428 28.0509 17.8992 26.501 17.8992H15.2758C13.7259 17.8992 12.4695 16.6428 12.4695 15.0929V15.0929Z" stroke="#898989" stroke-width="2.3573" />
                        <path d="M12.4695 23.512L29.3073 23.512" stroke="#898989" stroke-width="2.3573" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.4695 29.1245L29.3073 29.1245" stroke="#898989" stroke-width="2.3573" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <audio ref={currentAudio} src={url} onTimeUpdate={handleAudioUpdate}></audio>
        </div>
    )
}

export default Player