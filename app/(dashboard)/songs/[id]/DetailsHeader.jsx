import Link from "next/link";


const DetailsHeader = ({ artistId, artistData }) => {

  

  return (
    <div className=" relative w-full flex flex-col">
      {/* este el fondo */}
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />
       
       {/* tendra una posicion absolute todo esto, para hacer el efecto sumergido*/}
      <div className=" absolute inset-0 flex items-center   ">
        
          <img
            alt="art"
            src={artistData?.images?.coverart}
            fill
            className="
            w-28 
            h-28 
            sm:w-[170px]
            sm:h-[170px]
            rounded-full 
            object-cover 
            border-2 
            shadow-xl 
            shadow-black
            "
          />
      
        <div className="ml-5">
          <p className="font-bold sm:text-2xl text-xl text-white">
            {artistId ? artistData?.artists.alias : artistData?.title}
          </p>
          {!artistId && (
            <Link href={`/artists/${artistId}`}>
              <p className=" text-base text-gray-400 mt-2">
                {artistData?.subtitle}
              </p>
            </Link>
          )}
          
          <p className=" text-base text-gray-400 mt-2 ">
              {artistData?.genre}
          </p>
        </div>
      </div>
      {/* el titulo y la imagen se sumergiran en este div ya que tiene una posicion absolutw */}
      <div className="w-full sm:h-44 h-24  "/>
    </div>
  );
};

export default DetailsHeader;
