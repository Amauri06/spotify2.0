
import DetailsLyrics from './DetailsLyrics'
import { songData } from "../../../../lib/data";

const SongDetails = ({params}) => {

 const songId = params.id;
 
  return (
   
      <DetailsLyrics
        songid={songId}
        initialData={songData}
      />
    )
}

export default SongDetails


