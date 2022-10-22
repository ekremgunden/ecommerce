// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { Autoplay, Pagination, Navigation } from "swiper";

const Home =() => {
  return (
    <Swiper
    centeredSlides={true}
    loop
    autoplay={{
      delay: 4000,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
    >
        <SwiperSlide>
          <img className="w-full" src="aksesuar.webp" alt="aksesuar" loading="lazy"/>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src="indirim.webp" alt="indirim" loading="lazy"/>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src="pantolon_kampanya.webp" alt="pantolon kampanya" loading="lazy"/>
        </SwiperSlide>
    </Swiper>
  );
};

export default Home;