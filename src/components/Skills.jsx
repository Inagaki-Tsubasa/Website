import React from 'react'
import ContentTitle from './ContentTitle';
import { motion } from "framer-motion";
import  Card   from './Card';
import bootstrap from "../images/bootstrap.png";
import todo from "../images/todo.png";
import quiz from "../images/quiz.png";
import portfolio from "../images/portfolio.png";
import kinggnu from "../images/kinggnu.png";
import majan from "../images/majan.png";

const Skills = () => {
  return (

    <motion.div className="skills-content"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.8, delay: 0.1}}
    >
      
    
      <div className="skills">
        <ContentTitle title="MY SKILLS PAGE." text="私の学習まとめページ" />
        <div className="skills-content">

          <Card  
          image={portfolio}
          text="自分のことを紹介するオリジナルサイトを作ってみた！" 
          skill="React, FramerMotion"
          link="https://inagaki-tsubasa.github.io/website/"
          />
          <Card  
          image={kinggnu}
          text="好きなバンドを紹介するギャラリーを作ってみた" 
          skill="React, Three.js"
          link="https://inagaki-tsubasa.github.io/kinggnu-gallery/"
          />
          <Card  
          image={majan}
          text="大学のHPに自分のページを載せてもらった！" 
          skill="React, TypeScript, Material UI"
          link="https://inagaki-tsubasa.github.io/university-website/"
          />
          <Card  
          image={bootstrap}
          text="Bootstrapでサイトを作ってみた" 
          skill="Bootstrap"
          link="https://inagaki-tsubasa.github.io/Bootstrap-Responsive-Design./"
          />
          <Card  
          image={todo}
          text="Hooksを使ってtodoリストを作った" 
          skill="React, Hooks"
          link="https://inagaki-tsubasa.github.io/todolists/"
          />
          <Card  
          image={quiz}
          text="生のjavascriptでクイズゲームを作った" 
          skill="javascript"
          link="https://inagaki-tsubasa.github.io/js-Quiz./"
          />
          
        </div>
      </div>
    </motion.div>
    
  )
}

export default Skills