import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    window.addEventListener("scroll", reveal);

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top;
      var revealPoint = 200;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  return (
    <div className="aboutHeight">
      <div className="whatWeDoContainer">
        <h1 className="whatWeDo">What we do ?</h1>
      </div>
      <div className="marginContainer ">
        <div className="aboutContainer ">
          <div className="aboutH1Container ">
            <h1 className="aboutH1 ">
              {/* <span>We Build Brands that </span>Drive Change */}
              Digital Strategy
            </h1>
          </div>
          <div className="aboutDesc ">
            <p className="aboutP aboutCol ">
              At the beginning of each digital product design collaboration, we
              take a deep dive into your business through our in-depth discovery
              phase. Our team of UX designers conducts stakeholder interviews,
              user research, competitive analysis, and content consolidation to
              create an action plan that delivers a seamless and comprehensive
              brand and user experience.
            </p>
          </div>
        </div>
        <div className="aboutContainer  ">
          <div className="aboutDesc ">
            <p className="aboutP aboutCol ">
              Our branding agency knows that a brand is more than just a logo or
              digital design. It's a cohesive system that creates an emotional
              connection with customers. We offer a complete solution from
              naming and logo design to communications and style guides to help
              your brand stand out. Let's make your brand unforgettable!
            </p>
          </div>
          <div className="aboutH1Container ">
            <h1 className="aboutH1 ">
              {/* <span>We Build Brands that </span>Drive Change */}
              Branding
            </h1>
          </div>
        </div>
        <div className="aboutContainer  ">
          <div className="aboutH1Container ">
            <h1 className="aboutH1 ">
              {/* <span>We Build Brands that </span>Drive Change */}
              User Experience
            </h1>
          </div>
          <div className="aboutDesc ">
            <p className="aboutP aboutCol ">
              As a UI/UX design agency, we're committed to creating digital
              products that convert and engage customers. We go beyond mobile
              apps, web applications, and multi-platform experiences to develop
              user-friendly products that embody your brand's personality.
            </p>
          </div>
        </div>
        <div className="aboutContainer  ">
          <div className="aboutDesc ">
            <p className="aboutP aboutCol ">
              At Nexwave, we know that great products require both top-notch
              design and development. That's why our team works closely together
              to deliver the best possible results for our clients. As a UX UI
              and app development company, we specialize in creating native
              mobile apps for iOS and Android, web applications, apps for
              wearables, and B2B/enterprise software. From front-end to back-end
              development, we've got you covered.
            </p>
          </div>
          <div className="aboutH1Container ">
            <h1 className="aboutH1 ">
              {/* <span>We Build Brands that </span>Drive Change */}
              Development
            </h1>
          </div>
        </div>
        <div className="aboutContainer  ">
          <div className="aboutH1Container ">
            <h1 className="aboutH1 ">
              {/* <span>We Build Brands that </span>Drive Change */}
              Web Design
            </h1>
          </div>
          <div className="aboutDesc ">
            <p className="aboutP aboutCol ">
              At Nexwave, we don't just make pretty websites. We craft
              experiences that tell your brand's unique story while engaging
              your users every step of the way. Our designers and developers
              work hand in hand to create websites that are responsive, dynamic,
              and can adapt to any device. From product landing pages to
              marketing sites, or UX UI for company intranet portals – you name
              it, we do it.
            </p>
          </div>
        </div>
        <div className="aboutContainer  ">
          <div className="aboutDesc ">
            <p className="aboutP aboutCol ">
              At Nexwave, we believe that business software shouldn't be boring
              or hard to use. It's time to say goodbye to clunky, outdated
              enterprise platforms and hello to sleek, modern designs that your
              employees will love. We're a team of experts dedicated to
              transforming your legacy systems into top-notch, consumer-grade
              experiences. Whether it's revamping existing platforms or
              designing new B2B products, our goal is to create software that
              people love using.
            </p>
          </div>
          <div className="aboutH1Container ">
            <h1 className="aboutH1 ">
              {/* <span>We Build Brands that </span>Drive Change */}
              Enterprise UX
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
