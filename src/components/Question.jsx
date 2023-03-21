import React from 'react'
import ContentTitle from './ContentTitle'
import { motion } from "framer-motion";

const Question = () => {
  return (
    <motion.div className="question-content"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.8, delay: 0.1}}
    >
        <ContentTitle title="MY QUESTION PAGE." text="私のQ & Aページ" />
        <div className="question">
          <div className="question-answer">
            <h1 className='q-sec'>Q. フロントエンジニアになりたいと思った理由はなんですか？</h1>
            <h1 className='a-sec'>A. 大学の講義で初めてコードを書いたときに、とにかく楽しかったからです。</h1>
            <h1 className='q-sec'>Q. 今後、どのようなエンジニアになりたいと考えていますか？</h1>
            <h1 className='a-sec'>A. UI/UXデザインを重要視したフルスタックエンジニアを目指したいです。</h1>
            <h1 className='q-sec'>Q. なんの教材を使って勉強していますか？</h1>
            <h1 className='a-sec'>A. YouTubeやUdemyの教材や、Qiitaを参照して勉強しています。</h1>
            <h1 className='q-sec'>Q. 今、どのようなことを勉強していますか？</h1>
            <h1 className='a-sec'>A. Three.jsで3Dアニメーションの作成を勉強しています。</h1>
          </div>
        </div>
    </motion.div>
  )
}

export default Question