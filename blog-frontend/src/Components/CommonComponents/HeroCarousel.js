import { Carousel, CarouselItem } from "react-bootstrap";

const HeroCarousel = () => {
  return (
    <Carousel fade>
      <CarouselItem interval={5000}>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="First slide"
        />        
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </CarouselItem>
      {/* <CarouselItem interval={5000}>
        <img 
          className="d-block w-100"
          src="https://picsum.photos/id/238/800/400" 
          alt="Second slide" 
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </CarouselItem>
      <CarouselItem interval={5000}>
        <img 
          className="d-block w-100"
          src="https://picsum.photos/id/238/800/400" 
          alt="Second slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </CarouselItem> */}
    </Carousel>
  )
}

export default HeroCarousel;