import { useState } from "react"
import { Tweet } from "./components/tweet"

import './App.css';
import { AppRoutes } from "./Router";

function App() {
    // const [tweets, setTweets] = useState<string[]>([
    //     'tweet 1',
    //     'tweet 2',
    //     'tweet 3'
    // ])

    // function craeteTweet() {
    //     setTweets([...tweets, 'Tweet 5'])
    //     console.log("cria")
    // }

    return (
        <AppRoutes />
        // <div>
        //     {tweets.map(r => {
        //         return <Tweet text={r} />
        //     })}

        //     <button 
        //     onClick={craeteTweet}
        //     style={{
        //         backgroundColor: '#8257e6',
        //         border: 0,
        //         padding: '6px 12px',
        //         color: '#fff'
        //     }}
        //     >Adicionar Tweet
        //     </button>
        // </div>
    )
}

export default App 