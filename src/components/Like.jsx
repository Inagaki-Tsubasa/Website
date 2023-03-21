import React from 'react'
import ContentTitle from './ContentTitle'
import { motion } from "framer-motion";

const Like = () => {
  return (
    <motion.div className="like-content"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.8, delay: 0.1}}
    >
        <ContentTitle title="MY LIKE PAGE." text="私の好きなもの紹介ページ" />
        <h1 className='like-title'># MOVIE</h1>
        <div className="movie-youtube">
          <div className="card-link">
            <div className="link-text">
            <h1>へレディタリー/継承</h1>
            <p>話題になった映画「ミッドサマー」の監督であるアリア・スターが手がけたホラー映画。<br />
               平凡な家族の生活に嫌な雰囲気がまとわりついているストーリーで、とにかく効果音の使い方がゾワゾワしすぎて半泣きになった。</p>
            <iframe width="100%" 
            height="400" 
            src="https://www.youtube.com/embed/H0JhliQDc4U" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture; web-share" 
            allowfullscree>
            </iframe>
            </div>

          </div>
          <div className="card-link">
            <div className="link-text">
            <h1>きっと、うまくいく</h1>
            <p>インドで大ヒットしたコメディ映画。<br />
            インド名門の大学生三人がとにかくめちゃくちゃに荒らす学生友情ストーリーで、映画を見てる間ずっとワクワクが止まらなかった。
            誰が見てもヒットした理由に納得できる映画だと思う。
            </p>
            <iframe width="100%" 
            height="400" 
            src="https://www.youtube.com/embed/MAMv_s526vU" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
            </iframe>
            </div>

          </div>
          <div className="card-link">
            <div className="link-text">
            <h1>アメリカン・アニマルズ</h1>
            <p>監督には失礼だが、全然知名度がない映画。今までこの映画を紹介してきて、知ってる人に出会ったことがない。でも好き。<br />
            大学生の四人が平凡な生活に飽き、老人のコスプレして有名な絵画を盗むというストーリー。もうあらすじから面白い。しかも、内容全てノンフィクション。
            </p>
            <iframe width="100%" 
            height="400" 
            src="https://www.youtube.com/embed/IjXNQnlSVEo" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write;
            encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
            </iframe>
            </div>
          </div>


        </div>
    </motion.div>
  )
}

export default Like