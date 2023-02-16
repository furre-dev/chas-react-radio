import { useState } from "react"
export default function Station({ text, imgSrc, color, audioSource }) {
    return (
        <div className="w-[30rem] h-[10rem] flex overflow-hidden rounded-2xl
        shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]" style={{ background: `#${color}` }}>
            {imgSrc ? <img src={imgSrc} className="h-full border-r-2" /> :
                <div className="flex justify-center items-center text-center h-full aspect-square border-r-2 px-2">Sorry, could not get image!</div>}
            <div className="py-5 px-5 flex flex-col justify-around w-full">
                <h1 className="font-sans text-white text-3xl">{text}</h1>
                <audio controls className="w-full">
                    <source src={audioSource} />
                </audio>
            </div>
        </div>
    )

}