import Slide from "@mui/material/Slide";
import React from "react";
import Slider from "react-slick";
import Slide01 from '../../assets/images/slide01.JPG';
import Slide02 from '../../assets/images/slide02.JPG';
import Slide03 from '../../assets/images/slide03.JPG';
const HomeBanner =() =>{
    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true
  };
    return(
        <div className="homeBannerSection">
        <Slider {...settings}>
            <div className="item">
                <img src={Slide01} style={{ width: '60%', margin: '0 auto', display: 'block' , borderRadius:"8px"}}/>
            </div>
            <div className="item">
                <img src={Slide02} style={{ width: '60%', margin: '0 auto', display: 'block' , borderRadius:"8px"}}/>
            </div>
            <div className="item">
                <img src={Slide03} style={{ width: '60%', margin: '0 auto', display: 'block' , borderRadius:"8px"}}/>
            </div>
        </Slider>
        </div>
    )
}

export default HomeBanner;