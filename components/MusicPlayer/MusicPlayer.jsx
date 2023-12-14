'use client'
import ControlPlayer from './ControlPlayer';

import { useSelector } from 'react-redux';

const MusicPlayer = () => {
    const { activeSong } = useSelector((state) => state.player);
  return (
    <>

    {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br 
           from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <ControlPlayer />
        </div>
      )}
    </>
  )
}

export default MusicPlayer;