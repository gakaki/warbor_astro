import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <div className=''>
                <Carousel 
                showArrows={true} 
                showStatus={true} 
                showIndicators={true} 
                infiniteLoop={true} 
                showThumbs={false} 
                useKeyboardArrows={true} 
                autoPlay={true} 
                stopOnHover={false} 
                swipeable={true} 
                dynamicHeight={false} 
                emulateTouch={true} 
                autoFocus={true} 
                >
                    {/* {
                    [...Array(10).keys()].map( (item, index) => {
                            { `${item}` }
                            // <div>
                            //     <img src={`/img/slide/slide${item}.jpg`} />
                            // </div>
                        }
                    )} */}
                    {/* <img src="img/slide/slide1.jpg" className='h-72' /> */}
                    <div> <img src="img/slide/slide1.jpg" /> </div>
                    <div> <img src="img/slide/slide2.jpg" /> </div>
                    <div> <img src="img/slide/slide3.jpg" /> </div>
                    <div> <img src="img/slide/slide4.jpg" /> </div>
                    <div> <img src="img/slide/slide5.jpg" /> </div>
                    <div> <img src="img/slide/slide6.jpg" /> </div>
                    <div> <img src="img/slide/slide7.jpg" /> </div>
                
                </Carousel>
            </div>
        );
    }
};
export default DemoCarousel;
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));