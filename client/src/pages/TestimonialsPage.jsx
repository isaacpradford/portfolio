import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const TestimonialsPage = () => {
  return (
    <div id="testimonials" className="b-testimonials">
      <div className="b-testimonials__header">
        <h1>The reviews are in:</h1>
        <ImQuotesRight size={40} color="#06dd83" />
      </div>
      <div className="b-testimonials__swiper">
        <Swiper
          slidesPerView={1}
          spaceBetween={100}
          loop={true}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          // autoplay={{
          //   delay: 100000,
          //   disableOnInteraction: false,
          // }}
        >
          <SwiperSlide>
            <div className="b-testimonials__content">
              <p>
                "I had the pleasure of working with Isaac during his time as a
                Full-Stack Developer at Subitt. Isaac excelled in collaborating
                with a large team of developers to create products and solutions
                for real-world problems, including those requiring immediate
                attention.
              </p>
              <p>
                Isaac is a highly capable and competent problem-solver,
                particularly with React.js and Node.js. He not only thinks
                creatively and efficiently when tackling technical challenges
                but also communicates effectively with non-technical
                stakeholders. This ensures a smooth transition of projects from
                the development teams to other associated teams.
              </p>
              <p>
                I strongly recommend Isaac to any team looking for a candidate
                with the perfect blend of technical and soft skills."
              </p>
            </div>

            <div className="b-testimonials__name">
              {/* <ImQuotesRight /> */}
              <h1 className="b-testimonials__name">Jae Hyun Kim</h1>
              <h4>Head of Business Success | Subitt.io</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="b-testimonials__content">
              <p>
                "I had the pleasure of working with Isaac during his time as a
                Full-Stack Developer at Subitt. Isaac excelled in collaborating
                with a large team of developers to create products and solutions
                for real-world problems, including those requiring immediate
                attention.
              </p>
              <p>
                Isaac is a highly capable and competent problem-solver,
                particularly with React.js and Node.js. He not only thinks
                creatively and efficiently when tackling technical challenges
                but also communicates effectively with non-technical
                stakeholders. This ensures a smooth transition of projects from
                the development teams to other associated teams.
              </p>
              <p>
                I strongly recommend Isaac to any team looking for a candidate
                with the perfect blend of technical and soft skills."
              </p>
            </div>

            <div className="b-testimonials__name">
              {/* <ImQuotesRight /> */}
              <h1 className="b-testimonials__name">Jae Hyun Kim</h1>
              <h4>Head of Business Success | Subitt.io</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="b-testimonials__content">
              <p>
                "I had the pleasure of working with Isaac during his time as a
                Full-Stack Developer at Subitt. Isaac excelled in collaborating
                with a large team of developers to create products and solutions
                for real-world problems, including those requiring immediate
                attention.
              </p>
              <p>
                Isaac is a highly capable and competent problem-solver,
                particularly with React.js and Node.js. He not only thinks
                creatively and efficiently when tackling technical challenges
                but also communicates effectively with non-technical
                stakeholders. This ensures a smooth transition of projects from
                the development teams to other associated teams.
              </p>
              <p>
                I strongly recommend Isaac to any team looking for a candidate
                with the perfect blend of technical and soft skills."
              </p>
            </div>

            <div className="b-testimonials__name">
              {/* <ImQuotesRight /> */}
              <h1 className="b-testimonials__name">Jae Hyun Kim</h1>
              <h4>Head of Business Success | Subitt.io</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialsPage;
