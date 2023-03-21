import React from 'react'
import Image2 from "../images/IMG_6487.jpg";
import Image from "../images/mailchimp-Vc2dD4l57og-unsplash.jpg";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import  Image3  from "../images/kinggnu.png";
import  Image4  from "../images/majan.png";
import  three  from "../images/three.png";
import  nextjs  from "../images/nextjs.png";
import  ts  from "../images/ts.png";
import  fire  from "../images/fire.png";
import  vue  from "../images/vue.png";



const HomePage = () => {
  return (
    <motion.div className="homepage" 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.8, delay: 0.1}}
    >

      {/* hero-sec */}

      <div className="hero">
        <div className="hero-text">
          <h1>PORTFOLIO</h1>
          <p>INAGAKI.</p>
        </div>
        <div className="hero-image">
          <img src={ Image  } alt="" />
        </div>
      </div>


      {/* introduction-sec */}

      <div className="self-introduction">
        <div className="self-icon">
          <img src={ Image2 } alt="" />
        </div>
        <div className="introduction-text">
          <h1>INAGAKI TSUBASA</h1>
          <h5>
            2020.05  Word Pressに触れる。<br />
            2022.04  大学の講義でプログラミングに触れる。<br />
            2022.08  講義が終わり、独学でプログラミングを学ぶ。  
          </h5>
          <div className="icon">
            <a href="https://github.com/Inagaki-Tsubasa" className="github-icon">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.instagram.com/gakkie_ab/" className='insta-icon'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com/machino_end" className='twitter-icon'>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>

      <div className="app-container">
        <h1>NEW APP!!</h1>
        <div className="card-content">
          <div className="card">
            <img src={Image3} alt="" />
            <div className="card-body">
              <h2>KingGnuの紹介サイト</h2>
              <p>使用した言語</p>
              <h5>React, Three.js (fiber, drei)</h5>
              <a href="https://inagaki-tsubasa.github.io/kinggnu-gallery/">サイトを見に行く→</a>
            </div>
          </div>

          <div className="card">
            <img src={Image4} alt="" />
            <div className="card-body">
              <h2>大学で掲載していただいたサイト</h2>
              <p>使用した環境</p>
              <h5>React, Typescript, Material UI</h5>
              <a href="https://inagaki-tsubasa.github.io/university-website/">サイトを見に行く→</a>
            </div>
          </div>
        </div>
      </div>

      <div className="study">
        <h1>現在勉強しているスキル</h1>
        <div className="study-container">
          <img src={three} alt="" />
          <img src={nextjs} alt="" />
          <img src={ts} alt="" />
        </div>
        <h1>これから勉強したいスキル</h1>
        <div className="study-container">
          <img src={vue} alt="" />
          <img src={fire} alt="" />
        </div>

      </div>



    </motion.div>
  )           
}

export default HomePage