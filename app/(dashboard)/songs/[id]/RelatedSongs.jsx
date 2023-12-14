import SongBar from "../../../../components/SongBar";

const RelatedSongs = ({
  data,
  genre,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => {
  return (
    <div className=" flex flex-col">
      <h1 className="font-bold text-3xl text-white ">Related Songs:</h1>
      <div className="mt-6 w-full flex flex-col">
        {data.map((song, i) => {
          return (
            song.type === genre && (
              <SongBar
                key={song.key}
                song={song}
                i={i}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={handlePlayClick}
                
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default RelatedSongs;
