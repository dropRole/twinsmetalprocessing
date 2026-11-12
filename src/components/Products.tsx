import { useEffect, useRef, useState, type ComponentRef, type FC } from "react";
import "./products.css";
import millingImg0 from "../assets/images/milling_0.jpg";
import millingImg1 from "../assets/images/milling_1.jpg";
import millingImg2 from "../assets/images/milling_2.jpg";
import millingImg3 from "../assets/images/milling_3.jpeg";
import millingImg4 from "../assets/images/milling_4.jpeg";
import millingImg5 from "../assets/images/milling_5.jpg";
import scrapingImg0 from "../assets/images/scraping_0.jpg";
import scrapingImg1 from "../assets/images/scraping_1.jpg";
import scrapingImg2 from "../assets/images/scraping_2.jpg";

type ProductImages = {
  src: string;
  productType: "CNC Glodanje" | "CNC Struganje";
}[];

const Products: FC = () => {
  const [_carouselScrollRight, setCarouselScrollRight] = useState<number>(0);

  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  const carouselRef = useRef<ComponentRef<"div">>(null);

  const moveCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    let carouselItemWidth =
      carouselRef.current.getElementsByTagName("div")[0].clientWidth;

    let carouselItemGap = parseInt(
      window.getComputedStyle(carouselRef.current).columnGap.split("px")[0],
    );

    let scrollWidth = carouselItemWidth + carouselItemGap;

    let carouselWidth = carouselRef.current.scrollWidth - 3 * scrollWidth;

    setCarouselScrollRight((prev) => {
      let next = prev;

      if (!carouselRef.current) return next;

      if (direction === "left" && prev > 0) {
        next = prev - scrollWidth;

        carouselRef.current.scrollLeft = next;
      }

      if (direction === "right" && prev < carouselWidth) {
        next = prev + scrollWidth;

        carouselRef.current.scrollLeft = next;
      }

      return next;
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (e) => {
        const [entry] = e;
        if (entry.isIntersecting) setShowScrollIndicator(true);
        else setShowScrollIndicator(false);
      },
      { threshold: 0.5 },
    );

    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;

      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) observer.unobserve(carouselRef.current);
    };
  }, []);

  const productImages: ProductImages = [
    {
      src: millingImg0,
      productType: "CNC Glodanje",
    },
    {
      src: millingImg1,
      productType: "CNC Glodanje",
    },
    {
      src: millingImg2,
      productType: "CNC Glodanje",
    },
    {
      src: millingImg3,
      productType: "CNC Glodanje",
    },
    {
      src: millingImg4,
      productType: "CNC Glodanje",
    },
    {
      src: millingImg5,
      productType: "CNC Glodanje",
    },
    {
      src: scrapingImg0,
      productType: "CNC Struganje",
    },
    {
      src: scrapingImg1,
      productType: "CNC Struganje",
    },
    {
      src: scrapingImg2,
      productType: "CNC Struganje",
    },
  ];

  return (
    <section id="products">
      <p>Izdvojeni proizvodi</p>
      <div>
        <p>Preciznost u svakom detalju.</p>
        <div id="carouselControls">
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            onClick={() => moveCarousel("left")}
          >
            <path
              d="M17 10H4M9 5l-5 5 5 5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            onClick={() => moveCarousel("right")}
          >
            <path
              d="M3 10h13M11 5l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
      <div id="carouselWrapper">
        <div
          id="carouselIndicator"
          className={showScrollIndicator ? "show" : "hide"}
        >
          <span></span>
          <span>&#10148;</span>
        </div>
        <div id="carousel" ref={carouselRef}>
          {productImages.map(({ src, productType }) => (
            <div key={src}>
              <img src={src} alt="product image" />
              <p>{productType}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
