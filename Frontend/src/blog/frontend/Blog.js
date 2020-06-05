import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cookies from "js-cookie";
import { Node } from "slate";

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

const Lovers = () => (
  <Block>
    <h1>Lovers</h1>
    <p>Do you do everything by heart?</p>
    <p>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum."
    </p>
  </Block>
);

const Thinkers = () => (
  <Block>
    <h1>Thinkers</h1>
    <p>Do you do everything by mind?</p>
    <p>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum."
    </p>
  </Block>
);

const Tasters = () => (
  <Block>
    <h1>Tasters</h1>
    <p>Are you only able to function with a full belly?</p>
    <p>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum."
    </p>
  </Block>
);

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
    // return nodes.map((n) => Node.string(n)).join("\n");
  };

  const blogListContent = blogs.map((blog) => serialize(blog.post_content));

  const getAllBlogs = () => {
    fetch("http://localhost:5000/blog/getAllPosts", {
      method: "GET",
      headers: { token: Cookies.get("token") },
    })
      .then((response) => response.json())
      .then((res) => setBlogs(res));
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  const blogList = blogListContent.map((post) => (
    <Customize title={post[0]} subTitle={post[1]} contentCut={post[2]} />
  ));

  return (
    <Wrap>
      <Primary>{blogList}</Primary>
    </Wrap>
  );
}

export default Blog;
