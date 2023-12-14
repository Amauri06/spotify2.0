"use client";

import DetailsHeader from "./DetailsHeader";
import RelatedSongs from './RelatedSongs'
import { genreMusic } from "../../../../lib/music/genre";


import { useDispatch, useSelector } from "react-redux";
import {
  setActiveSong,
  playPause,
} from "../../../../redux/features/playerSlice";



const Details = ({ songid, initialData }) => {
  const data = genreMusic();
  
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

//  primero buscamos los datos correspondiente con el id.
   const songData = initialData.find(item => item.id === songid)
 
   const handlePauseClick = () =>{
    dispatch(playPause(false))
  }

  const handlePlayClick = (song,i) =>{
  dispatch(setActiveSong({song, data, i}))
  dispatch(playPause(true))
  }




  return (
    <div className=" flex flex-col px-6">
      {/* header de la cancion */}
        <DetailsHeader 
        artistId=""
        artistData ={songData} 
        />

        {/* description de la cancion */}
      <div className="mb-10 ">

        <h2 className="text-white text-2xl font-bold">Lyrics:</h2>
        <div className="mt-5 w-1/2">
          {
           songData?.id === songid ?(
             initialData.map(song =>(
               <p key={song.id} className="text-gray-400 text-base my-1"> {song.lyrics}</p>
             ))
           ):(
            <p className="text-gray-400 text-base my-1">Sorry, No lyrics found!</p>
           )
          }
        </div>
      </div>
     <RelatedSongs
       data={data}
       genre = {songData?.type}
       isPlaying={isPlaying}
       activeSong={activeSong}
       handlePauseClick={handlePauseClick}
       handlePlayClick={handlePlayClick}

     />
    </div>
  );
};

export default Details;
