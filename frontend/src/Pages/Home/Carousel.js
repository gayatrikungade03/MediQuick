import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2022/08/601x901-pinterest-homepage-hub-depression-3.jpg",
    key: 1,
  },
  {
    src: 'https://s3.ap-south-1.amazonaws.com/m3india-app-dev/ckeditor/content/health_insurance-1552707640.jpg',
    key: 2,
  },
  {
    src: 'https://static.pib.gov.in/WriteReadData/userfiles/image/image002O1IJ.jpg',
    key: 3,
  },
];

function Crousel(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={`Slide ${item.key}`} />
        <CarouselCaption
          captionText={`Slide ${item.key}`}
          captionHeader={`Slide ${item.key}`}
        />
      </CarouselItem>
    );
  });

  return (
    <div className="carousel-container">
      <Carousel
        className="carousel"
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}

export default Crousel;
