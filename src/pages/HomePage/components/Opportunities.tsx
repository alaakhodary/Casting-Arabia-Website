import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";
import Card from "../../../components/Card";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Virtual } from "swiper";
import { Swiper as SwiperType } from "swiper";
import { OpportunitiesData as Opportunities } from "../../../mock/OpportunitiesData";
import Button from "../../../components/Button";

const Opportunitie = () => {
  const swiperRef = useRef<SwiperType | undefined>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (swiper) {
      swiper.on("slideChange", () => {
        setActiveIndex(swiper.realIndex);
      });
    }
  }, []);

  const handleSlidePrev = () => {
    if (swiperRef.current && swiperRef.current.slidePrev) {
      swiperRef.current.slidePrev();
    }
  };

  const handleSlideNext = () => {
    if (swiperRef.current && swiperRef.current.slideNext) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <Card>
      <div className="mb-6 flex items-center justify-between pr-4">
        <div>
          <h1 className="text-2xl font-[600] text-[#6371E0]">opportunities</h1>
        </div>
        <div className="flex gap-8">
          <button
            onClick={() => {
              handleSlidePrev();
            }}
            disabled={activeIndex === 0}
          >
            <ArrowBackIosIcon
              style={{
                color: activeIndex === 0 ? "#888888" : "rgb(99, 113, 224)",
              }}
            />
          </button>
          <button
            onClick={() => {
              handleSlideNext();
            }}
            disabled={activeIndex === Opportunities.length - 1}
          >
            <ArrowForwardIosIcon
              style={{
                color:
                  activeIndex === Opportunities.length - 1
                    ? "#888888"
                    : "rgb(99, 113, 224)",
              }}
            />
          </button>
        </div>
      </div>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Virtual]}
        spaceBetween={50}
        slidesPerView={4}
        slidesPerGroup={4}
        watchSlidesProgress={true}
        virtual
      >
        {Opportunities.map((item, index) => (
          <SwiperSlide key={item.id} virtualIndex={index}>
            <div className="rounded-t-lg border-2">
              <img
                src={item.image}
                alt="OpportunitiesImage"
                className="mb-2 h-[150px] w-full rounded-t-lg object-cover"
              />
              <h1 className="px-3 text-lg font-semibold text-[#444444]">
                {item.title}
              </h1>
              <p className="mb-2 mt-2 px-3 text-sm text-[#6B6B6B]">
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
        <div className="text-center">
          <Button
            text="Show More"
            className="mt-10 rounded-lg border-2 border-[#6371e080] px-7 py-2 font-semibold text-[#6371e0] hover:border-[#6371e0] hover:bg-[#6370e00a] hover:text-[#6371e0]"
          />
        </div>
      </Swiper>
    </Card>
  );
};

export default Opportunitie;
