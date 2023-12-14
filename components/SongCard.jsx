"use client";

import Link from "next/link";


import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { twMerge } from "tailwind-merge";

const SongCard = ({ song, isPlaying, activeSong, data, i  }) => {

  const dispath = useDispatch();

  
  const handlePauseClick = () =>{
    dispath(playPause(false))
  }

  const handlePlayClick = () =>{
  dispath(setActiveSong({song, data, i}))
  dispath(playPause(true))
  }

 

  return (
    <div className=" flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 
    backdrop-blur-sm animate-slideup rounded-lg cursor-pointer xl:w-[210px] 
  "
    >
      <div className=" relative w-full h-56 group lg:h-[190px]">
        {/* reproductor */}
        <div
          className={twMerge(
            `absolute inset-0 justify-center items-center
          bg-black bg-opacity-50 group-hover:flex 
        `,
             activeSong?.title === song.title
              ? "flex bg-black bg-opacity-70"
               : "hidden"
          )}
        >
          <PlayPause 
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause = {handlePauseClick}
            handlePlay = {handlePlayClick}

          /> 
        </div>

          <img 
           src={song.images?.coverart} 
           alt="song_img"
           className=" h-full w-full rounded-lg"
           />
        
        
      </div>
        
        {/* TItulos */}
      <div className="mt-4 flex flex-col ">
        {/* Titlo */}
        <p className=" font-semibold text-lg text-white truncate">
          <Link href={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        {/* Subtitulo */}
        <p className=" text-sm truncate text-gray-300 mt-1 ">
          {/* redireccionamos si el artista existe o no*/}
          <Link
            href={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : "/top-artists"
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
