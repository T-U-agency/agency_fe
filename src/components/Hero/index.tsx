import React from "react";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  return (
    <section
      data-w-id="38038267-6d18-d0b5-3e78-0239c2852b90"
      style={{
        opacity: 1,
        transform:
          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d",
      }}
      className="hero-section section-spacing"
    >
      <div className="w-layout-blockcontainer container w-container">
        <div className="w-layout-grid grid-hero-split">
          <div className="product-hero-content-wrap">
            <h1 className="hero-title-left">
              Your Gateway to Academic Excellence abroad!
            </h1>
            <p className="hero-description-left">
              Unlock your potential with expert guidance for studying abroad.
            </p>
            <div className="buttons-inline">
              <Link href="/user-pages/sign-up" passHref>
                <div className="button-black-inline w-inline-block">
                  <div className="button-black-text">Free consultation</div>
                  <Image
                    src="https://assets-global.website-files.com/655c521643f3726e71438eaf/655c69a84fb51f126b312902_button-decoration.svg"
                    alt="Button decoration"
                    className="button-black-icon"
                    width={16}
                    height={16}
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="hero-image-wrap">
            <div className="hero-decoration-line-top"></div>
            <div className="hero-decoration-line-center"></div>
            <div className="hero-image-right-wrap">
              <Image
                src="https://bustedhalo.com/wp-content/uploads/2016/05/graduation-prayer.jpg"
                alt="Dashboard image 01"
                className="hero-image"
                width={900}
                height={450}
                layout="responsive"
              />
            </div>
            <div className="hero-decoration-line-bottom"></div>
          </div>
        </div>
      </div>
      <div className="hero-decoration-wrap">
        <div className="hero-decoration">
          <div className="hero-decoration-rounded"></div>
          <div className="hero-decoration-rounded two"></div>
          <div className="hero-decoration-rounded three"></div>
          <div className="hero-decoration-bg right"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
