import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import data from '../pages/data/data.json';

const Materiales = () => {

  const images = data.data;

  return (
    <>
    <blockquote id='Materiales' className='flex justify-center items-center '>
        <p className="text-2xl italic font-medium text-gray-900 dark:text-white pb-10">Nuestros materiales</p>
    </blockquote>
      <Swiper 
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        effect={''}
        className='hover:cursor-grab active:cursor-grabbing'
        direction={'horizontal'}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation
      >
        {images.map((item, index) => (
        <SwiperSlide className='flex flex-col items-center  mx-auto justify-center w-full h-full' key={index}>
          <div className='opacity-90 md:rounded-md flex flex-col gap-10'>
            <img
              className='mx-auto h-[500px] w-[500px] bg-gray-800 rounded-xl object-contain'
              src={item.img}
              loading="lazy"
              alt={`Slide ${index + 1}`}
            />
            <div className='flex flex-col  justify-center items-center bg-transparent rounded-xl w-full'>
              <div className='gap-3 flex-col flex'>
                <button className='bg-violet-600 px-8 rounded-sm'>
                  <p className='text-white text-center font-medium'>{item.category}</p>
                </button>
                <button className='bg-gray-300 w-full rounded-sm'>
                  <p className='text-black text-center font-medium'>{item.color}</p>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
))}
</Swiper>

    </>
  );
};

export default Materiales;
