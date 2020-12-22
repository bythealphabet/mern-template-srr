import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import girlImg from "../../assets/images/succes-girl-afro.jpg";
import skillImg from "../../assets/images/skill.jpg";
import screamImg from "../../assets/images/scream-to-phone.jpg";
import BlogPost from "./BlogPost";

const data = [
  {
    title: "5 easy steps  to start finding clients ",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ... learn more",
    img: girlImg,
  },
  {
    title: "Learn how to start selling your skills, ability and advise.",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ... learn more",
    img: skillImg,
  },
  {
    title: "#1 Biggest Sales Mistake",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ... learn more",
    img: screamImg,
  },
];

function Blog() {
  return (
    <div>
      {data.map((post) => {
        return <BlogPost key={post.title} {...post} />;
      })}
    </div>
  );
}

export default Blog;
