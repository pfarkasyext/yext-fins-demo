import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ServiceCard } from "./Services";
// @ts-ignore
const SliderComponent = typeof window === "undefined" ? Slider.default : Slider;
export type ServiceProps = {
  name: string;
  c_serviceDescription: string;
  slug: string;
};

interface ServicesProps {
  services: ServiceProps[];
}

const Carousel = ({ services }: ServicesProps) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <SliderComponent {...settings}>
      {services &&
        services.map((item: ServiceProps, index: any) => (
          <ServiceCard service={item} key={index} />
        ))}
    </SliderComponent>
  );
};

export default Carousel;
