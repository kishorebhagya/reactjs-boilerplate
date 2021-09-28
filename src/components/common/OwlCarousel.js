import React, { useEffect } from "react";

export default function OwlCarousel(props) {
  const { children, id } = props;
  useEffect(() => {
    window.$(`#${id}`).owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoplay: false,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
    return () => {};
  }, []);
  return (
    <React.Fragment>
      <div className={props.className} id={id}>
        {children}
      </div>
    </React.Fragment>
  );
}
