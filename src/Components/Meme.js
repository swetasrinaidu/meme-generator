import memeData from "../memeData";
import React from 'react';


export default function Meme(){
    const[meme,setMeme] = React.useState({
                         topText:"",
                         bottomText:"",
                         randomImg:"https://i.imgflip.com/30b1gx.jpg"
    })
    function handleClick(){
        const memeArray= memeData.data.memes;
        const randomNumber = Math.floor(Math.random()*memeArray.length);
        setMeme(prevMeme=>{
            return({
                ...prevMeme,
                randomImg:memeArray[randomNumber].url
            })
        }) 
    } 
    function handleChange(event){
        const {name,value}=event.target;
        console.log(name,value)
        setMeme(prevMeme=>({
            ...prevMeme,
            [name]:value
        }))
    }
    return(
        <div>
          <div className="form">
            <form className="form-input">
               <input type="text" name="top-text" value={meme.topText} onChange={handleChange} placeholder="Top Text"/>
               <input type="text" name="bottom-text" value={meme.bottomText} onChange={handleChange} placeholder="Bottom Text"/>
            </form>
            <button className="submit" onClick={handleClick}>Get New Meme Image</button>
          </div>
          <div className="meme">
             <img src={meme.randomImg} alt="meme image" className="meme-image"/>
                <h2 className="meme-top-text">hi</h2>
                <h2 className="meme-bottom-text">Bye</h2>
          </div>

        </div>

    )
}