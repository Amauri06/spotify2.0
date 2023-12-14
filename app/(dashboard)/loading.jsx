import {loader} from '../../assets'
import Image from 'next/image';

const Loading = () => {
  return (
    <div className='w-full flex justify-center items-center flex-col 

    '>
     <div className=' relative w-30 h-32 object-contain'>
        <Image
          src={loader}
          fill
          alt='loader'
        
        />
        <h1 className=' font-bold text-2xl text-white mt-2'>Cargando...</h1>
     </div>
    </div>
  )
}

export default Loading;