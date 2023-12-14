"use client";

import Link from "next/link";
import Image from "next/image";

import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay} from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import  "swiper/css/autoplay";

import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazam";
import PlayPause from "./PlayPause";

import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";

import { onClose, onOpen } from "../redux/features/menuSlice";
import { selectSidebar } from "../redux/features/menuSlice";


/* Abrir Menu Mobile*/

const MobileMenu = () => {
  const mobileMenuOpen = useSelector(selectSidebar);
  const dispath = useDispatch();

  return(
    <div className=" fixed md:hidden block top-6 right-3 z-30">
      {mobileMenuOpen ? (
        <RiCloseLine
          className="w-6 h-6 text-white mr-2"
          onClick={() => dispath(onClose())}
        />
      ) : (
        <HiOutlineMenu
          className="w-6 h-6 text-white mr-2"
          onClick={() => dispath(onOpen())}
        />
      )}
    </div>
  );
};

//Componente TodCharCard
const TopChartCard = ({
  song,
  i,
  activeSong,
  handlePlayClick,
  handlePauseClick,
  isPlaying,
}) => (
  <div
    className=" w-full flex flex-row items-center hover:bg-[#4c426e]
    py-2 p-4 rounded-lg cursor-pointer 
  "
  >
    <h3 className=" font-bold text-base xl:text-xs text-white mr-3 ">{i + 1}.</h3>
    <div className=" flex-1 flex flex-row justify-between items-center   ">

      <div className=" relative h-20 w-20  xl:h-12 xl:w-12" >

      <Image
        src={song?.images?.coverart}
        alt={song?.title}
        fill
        className=" rounded-lg"
      />
      </div>
      <div className=" flex-1 flex flex-col justify-center mx-4   ">
        <Link href={`/songs/${song.key}`}>
          <p className="text-xl font-bold text-white xl:text-sm">
            {song?.title}
          </p>
        </Link>
        <Link href={`/artists/${song.artists[0].adamid}`}>
          <p className="text-sm font-bold text-slate-500 mt-1 xl:text-xs  ">
            {song?.subtitle}
          </p>
        </Link>
      </div>
    </div>
    <PlayPause
      className=" bg-transparent text-gray-300 text-3xl  xl:text-2xl"
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
      isPlaying={isPlaying}
    />
  </div>
);

//componente princiapl
const TopPlay = () => {

  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);

  useEffect(() => {
    //en dispotivo mobile tenemos un error que al cargar la pagina por primera vez
    // solo se muestra la ultima parte de abjo no desde arriba y lo corregimos con esto.
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const topPlays = data?.tracks.slice(0, 5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div
      //ponemos el enfoque aqui porque al pasar a dispositifo mobile queda arriba con el reverse.
      ref={divRef}
      className=" ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[426px] max-w-full flex flex-col 
       
      "
    >
      <MobileMenu/>
      <div className="w-full flex flex-col">
        <div className=" flex flex-row justify-between items-center">
          <h2 className=" text-white font-bold text-2xl ">
            Top Charts
          </h2>
          <Link href="/top-charts">
            <p className=" text-gray-300 text-base cursor-pointer xl:text-sm mr-3 ">See more</p>
          </Link>
        </div>

        <Swiper 
        className="flex flex-col relative mt-4 xl:mt-0"
        slidesPerView="auto"
        centeredSlides
        centeredSlidesBounds
        freeMode
        autoplay={{delay:1500}}
        modules={[FreeMode,Autoplay]}
        direction="vertical"
        spaceBetween={5}
        
       
        
        >
          {topPlays?.map((song, i) => (
            <SwiperSlide  key={song.key} className="absolute animate-slidedown" >
              
              <TopChartCard
                song={song}
                i={i}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={() => handlePlayClick(song, i)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className=" w-full flex flex-col mt-8 xl:mt-4 ">
        <div className=" flex flex-row justify-between items-center ">
          <h2 className=" text-white font-bold text-2xl ">
            Top Artists
          </h2>
          <Link href="/top-artists">
            <p className=" text-gray-300 cursor-pointer text-base xl:text-sm mr-3">See more</p>
          </Link>
        </div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          autoplay={{delay:4000}}
          modules={[FreeMode,Autoplay]}
          className="mt-4 xl:mt-3"
        >
          {topPlays?.map((song, i) => (
            <SwiperSlide
              key={song.key}
              style={{ width: "25%", height: "auto" }}
              className="shadow-lg rounde-full animate-slideright"
            >
              <Link href={`/artists/${song?.artists[0].adamid}`}
              
              >
                <Image
                  src={song?.images.background}
                  alt="name"
                  className="rounded-full object-cover"
                  width={200}
                  height={200}
                  
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
     
    </div>
  );
};

export default TopPlay;
