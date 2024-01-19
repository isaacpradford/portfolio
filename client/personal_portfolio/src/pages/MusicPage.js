import HeaderNav from "../components/HeaderNav";
import Logo from "../components/Logo";
import { Socials } from "../components/Socials";

import "../css/music.css";

import { useEffect } from "react";

export const MusicPage = () => {

     // Reset classes, update bg color, update scrollwheel
    document.body.classList = "";
    document.body.style.overflowY = 'scroll';
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.setProperty('--background-color', "#f3f3f3");
    document.documentElement.style.setProperty('--scrollbar-gutter-color', 'rgba(0, 0, 0, 0)');
    document.documentElement.style.setProperty('--scrollbar-thumb-color', '#000000');
    document.documentElement.style.setProperty('--logo-color', '#000000');

    // Load header nav animation
	useEffect(() => {
		const headerNavA = document.querySelectorAll('.headerNav');
		headerNavA.forEach((item) => {
			// item.classList.add("HeaderNavMusicLoad");
            item.classList.add("HeaderNavProjectLoad");
		})

        const descriptions = document.querySelectorAll('.music-description p');
        descriptions.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('musicDescriptionLoad');
            }, 400 * index);
        })
    }, []);

    return (
        <div className="music-page">
            <ul className="music-bg">
                <li id="music-bg-square3"></li>
                <li id="music-bg-square2"></li>
                <li id="music-bg-square1"></li>
            </ul>

            
            <div className="music-content">
                <HeaderNav pages={["Projects", "AboutMe", "Contact"]}/>
                <Logo loadAnimation={false}/>

                <div className="music-video-container">
                    <iframe src="https://www.youtube.com/embed/q7JFvn6Bnuk?si=hYcBQ4uGPF_TSf1u" 
                            title="YouTube video player"   
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen>
                    </iframe>
                </div>

                <h2 className="music-title">About my music:</h2>

                <div className="music-description">
                    <p className="music-description1">In addition to being a programmer, I've also been a music producer since I was about 15. It's been my goal for years to be able to write music and soundtracks like the songs from my favorite games.</p>
                    
                    <div className="soundcloud-1"> 
                        <iframe width="90%" 
                                height="300"   
                                scrolling="no" 
                                frameBorder="no" 
                                allow="autoplay" 
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1131659833&color=%230c0c0c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                        </iframe>
                    </div>

                    {/* <p className="music-description2">I love music and its ability to tell subtle stories, and my interest in it eventually gave me my interest in programming through audio engineering.</p> */}

                    <p className="music-description2">I tend to be inspired by music from video games that have impacted me such as The Legend of Zelda: BOTW, Bloodborne, or Elden Ring.</p>
                   
                    {/* <div className="soundcloud-2"> 
                        <iframe width="100%" 
                                height="120"   
                                scrolling="no" 
                                frameborder="no" 
                                allow="autoplay" 
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1131659833&color=%230c0c0c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                        </iframe>
                    </div> */}

                    <h1 className="demo-title">DEMOS</h1>
                    <p className="music-description3">You can find a few of my favorite demos here or follow me at my soundcloud below:</p>

                    <div className="soundcloud-2"> 
                        <iframe width="100%" 
                                height="120"   
                                scrolling="no" 
                                frameBorder="no" 
                                allow="autoplay" 
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1131659833&color=%230c0c0c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                        </iframe>
                    </div>

                    <div className="soundcloud-2"> 
                        <iframe width="100%" 
                                height="120"   
                                scrolling="no" 
                                frameBorder="no" 
                                allow="autoplay" 
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1131659833&color=%230c0c0c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                        </iframe>
                    </div>

                    <div className="soundcloud-2"> 
                        <iframe width="100%" 
                                height="120"   
                                scrolling="no" 
                                frameBorder="no" 
                                allow="autoplay" 
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1131659833&color=%230c0c0c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                        </iframe>
                    </div> 

                    <Socials />
                </div>
		</div>
    </div>
	);
}