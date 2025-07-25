declare module "react-slick" {
  import * as React from "react";

  interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    initialSlide?: number;
    responsive?: Array<{ breakpoint: number; settings: object }>;
  }

  class Slider extends React.Component<Settings> {}

  export default Slider;
}
