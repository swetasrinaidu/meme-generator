import memeData from "../memeData";
import React from 'react';


export default function Meme(){
    const[meme,setMeme] = React.useState({
                         topText:"",
                         bottomText:"",
                         randomImg:"https://i.imgflip.com/30b1gx.jpg"
    })
    const[allmemes,setallmemes] = React.useState([])
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
         .then(res=>res.json())
         .then(data=>setallmemes(data.data.memes))
    },[])

    function handleClick(){
        const randomNumber = Math.floor(Math.random()*allmemes.length);
        setMeme(prevMeme=>{
            return({
                ...prevMeme,
                randomImg:allmemes[randomNumber].url
            })
        }) 
    } 
    function handleChange(event){
        const {name,value}=event.target;
        setMeme(prevMeme=>({
            ...prevMeme,
            [name]:value
        }))

    }
    return(
        <div>
          <div className="form">
            <form className="form-input">
               <input type="text" name="topText"  onChange={handleChange} placeholder="Top Text"/>
               <input type="text" name="bottomText" onChange={handleChange} placeholder="Bottom Text"/>
            </form>
            <button className="submit" onClick={handleClick}>Get New Meme Image</button>
          </div>
          <div className="meme">
             <img src={meme.randomImg} alt="meme image" className="meme-image"/>
             <h2 className="meme-top-text">{meme.topText}</h2>
             <h2 className="meme-bottom-text">{meme.bottomText}</h2>
          </div>

        </div>

    )
}