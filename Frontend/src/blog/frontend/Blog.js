import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cookies from "js-cookie";
import { Node } from "slate";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1em;
`;

const Primary = styled.div`
  max-width: 650px;
  margin: 0 auto;
  font-family: "Sen", sans-serif;
`;

const Block = styled.div`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  border: 2px solid darkgray;
  margin: 0 1em;
  padding: 0.25em 1em;
  margin-bottom: 3vh;
  margin-top: 1vh;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: darkgray;
    color: white;
  }
`;

const Customize = (props) => (
  <Block>
    <h1>{props.title}</h1>
    <p>{props.subTitle}</p>
    <p>{props.contentCut}</p>
  </Block>
);

function Blog() {
  const [blogs, setBlogs] = useState([]);

  const serialize = (nodes) => {
    const storeMeInArray = nodes.map((n) => Node.string(n));
    return storeMeInArray;
  };

  const blogListContent = blogs.map((blog) => serialize(blog.post_content));
  console.log(blogListContent.length);

  const getAllBlogs = () => {
    fetch("http://localhost:5000/blog/getAllWithId", {
      method: "GET",
      headers: { token: Cookies.get("token") },
    })
      .then((response) => response.json())
      .then((res) => setBlogs(res));
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  let merged = [];

  for (let i = 0; i < blogs.length; i++) {
    merged.push({
      ...blogs[i],
      ...blogListContent[i],
    });
  }

  console.log("merges");
  console.log(merged);

  const blogList = merged.map((post) => (
    <Link
      to={`/blog/getPostById/${post.post_id}`}
      style={{
        color: "inherit",
        textDecoration: "inherit",
      }}
    >
      <Customize title={post[0]} subTitle={post[1]} contentCut={post[2]} />
    </Link>
  ));
  console.log(blogListContent);

  return (
    <Wrap>
      <Primary>{blogList}</Primary>
    </Wrap>
  );
}

export default Blog;
