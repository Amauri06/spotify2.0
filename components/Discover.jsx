"use client";

import SongCard from "./SongCard";
import { genres } from "../lib/constants";
import { useSelector } from "react-redux";
import { useGetTopChartsQuery } from "../redux/services/shazam";
import Loading from "../app/(dashboard)/loading";
import Error from "../app/(dashboard)/error";

const MenuDiscover = () => {
  //isFetching : mostrar un estado si esta cargada la data.
  const { data, isFetching, error } = useGetTopChartsQuery();

  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const genreTitle = "Pop";

  if (isFetching) return <Loading />;

  if (error) return <Error />;

  return (
    <div className=" flex flex-col px-6 ">
      <div
        className=" w-full flex justify-between items-center sm:flex-row 
         flex-col mt-4 mb-10
      "
      >
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genreTitle}
        </h2>

        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg
           outline-none sm:mt-0 mt-5 
          "
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>

      </div>
        <div className=" flex flex-wrap sm:justify-start justify-center gap-6 xl:gap-5">
          {data.tracks.map((song, i) => (
            <SongCard
              key={song.key}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
              i={i}
            />
          ))}
        </div>
    </div>
  );
};

export default MenuDiscover;
