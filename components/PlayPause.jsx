
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { twMerge } from "tailwind-merge";


const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
  className

  //si el titulo de la cancion activa es igual al titulo de la cancion de la lista entonces:
}) => (isPlaying && activeSong?.title === song.title ? (
    <button 
     className={twMerge(`
     transition
     rounded-full
     flex
     items-center
     bg-cyan-400/80
     p-2
     drop-shadow-md
     translate
     group-hover:opacity-100
     hover:scale-110
     text-2xl
     `,
     className
     )}

     onClick={handlePause}
    >
      <FaPauseCircle />
    </button>
  ) : (
    <button
    className={twMerge(`
    transition
    rounded-full
    flex
    items-center
    bg-cyan-400
    p-2
    drop-shadow-md
    translate
    group-hover:opacity-100
    hover:scale-110
    text-2xl
    `,
    className
    )}
     onClick={handlePlay}
    >
      <FaPlayCircle />
     </button>
  ));

export default PlayPause;
