import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import heroStyles from "./home-hero-styles";
import subsStyles from "./home-subs-styles";
import whoamiStyles from "./home-whoami-styles";
import testimonialsStyles from "./home-testimonials-styles";
import latestPostStyles from "./home-latestPost-styles";
import questionsStyles from "./home-questions-styles";
import { Link } from "react-router-dom";
import Ellipse from "../../components/Svgs/Ellipse";
import Input from "../../components/Form/Input";
import rodneyBournImg from "../../assets/images/rodney-bourne.jpg";

import Testimonials from "../../components/Testimonials/Testimonials";
import Blog from "../../components/Blog/Blog";
import QuestionMark from "../../components/Svgs/QuestionMark";
import homeQuestionsStyles from "./home-questions-styles";

function Home(props) {
  return (
    <>
      <section className="base-grid hero" css={heroStyles.heroGrid}>
        <div css={heroStyles.heroImg}></div>
        <h1 css={heroStyles.heroHeader}>
          Get More <br /> Clients <br />
          <span>Grow</span> your Bussines
          <br />
          Selling Easier
        </h1>
        <Link to="questions" className="btn" css={heroStyles.actionBtn}>
          start here
        </Link>
      </section>
      <section className="base-grid subscribe" css={subsStyles.subsGrid}>
        <Ellipse position={subsStyles.ellipse} />
        <div css={subsStyles.subsTextBox}>
          <h3 css={subsStyles.subsHeader}>Subscribe</h3>
          <p>
            Stay notified with online
            <br /> Workshops, Blog Articles, and Videos with Tips for growing
            your bussines.{" "}
          </p>
          <p css={subsStyles.actionText}>
            Ad your Email and click the Grow Button
          </p>
        </div>
        <form css={subsStyles.form}>
          <Input />
          <button className="btn">Grow</button>
        </form>
      </section>
      <section className="base-grid whoami" css={whoamiStyles.whoami}>
        <img
          src={rodneyBournImg}
          alt="Rodney Bourne Photo"
          css={whoamiStyles.imgStyles}
        />
        <p css={whoamiStyles.nameText}>
          Hi,
          <br /> my name is <br />
          Rodney Bourne
          <br />
          Director of Selling Easier
        </p>
        <p css={whoamiStyles.bodyText}>
          In the past <span>23 years</span> I had the privilege of helping up to{" "}
          <span> 3000, Companies and Professionals</span> reach their{" "}
          <span>goals</span> and gain mayor profits.
        </p>
        <p css={whoamiStyles.tail}>
          Be part of this growing family of <span>Entrepreneurs</span> and start
          <br />
          <span>Selling Easier</span>.
        </p>
      </section>
      <section
        className="base-grid testimonials"
        css={testimonialsStyles.testimonialsGrid}
      >
        <div
          className="testimonial-background"
          css={testimonialsStyles.background}
        ></div>
        <h3 css={testimonialsStyles.heading}>Testimonials</h3>
        <p css={testimonialsStyles.subHeading}>What our clients have to say</p>
        <Testimonials position={testimonialsStyles.testimonials} />
      </section>
      <section
        className="base-grid latest-post"
        css={latestPostStyles.latestPost}
      >
        <h3 css={latestPostStyles.heading}>Latest Posts</h3>
        <div css={latestPostStyles.postBox}>
          <Blog />
        </div>
      </section>
      <section className="base-grid" css={questionsStyles.questions}>
        <h3 css={questionsStyles.text}>
          Answer This Questions and find out how we can help you Grow your
          bussines today.
        </h3>
        <QuestionMark position={questionsStyles.questionMark} />
        <Link to="/questions" className="btn" css={questionsStyles.btn}>
          Go to Questions
        </Link>
      </section>
    </>
  );
}

export default Home;
