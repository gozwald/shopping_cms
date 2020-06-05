import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Editable, withReact, useSlate, Slate } from "slate-react";
import { Editor, Transforms, createEditor } from "slate";
import { withHistory } from "slate-history";
import Cookies from "js-cookie";

import { useParams } from "react-router";

const BlogPost = (props) => {
  const [value, setValue] = useState(initialValue);
  const [author, setAuthor] = useState("");
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  useEffect(() => {
    const fetchBlog = () => {
      fetch(`http://localhost:5000/fetchBlog/getPostById/${props.blogId}`, {
        method: "GET",
        headers: {
          token: Cookies.get("token"),
        },
      })
        .then((response) => response.json())
        .then((res) => setValue(res))
        .catch((error) => console.log(error));
    };
    fetchBlog();
  }, []);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={() => console.log("Nothing To Type Here")}
    >
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Enter some rich text…"
        autoFocus
      />
    </Slate>
  );
};

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case "block-quote":
      return <blockquote {...attributes}>{children}</blockquote>;
    case "bulleted-list":
      return <ul {...attributes}>{children}</ul>;
    case "heading-one":
      return <h1 {...attributes}>{children}</h1>;
    case "heading-two":
      return <h2 {...attributes}>{children}</h2>;
    case "list-item":
      return <li {...attributes}>{children}</li>;
    case "numbered-list":
      return <ol {...attributes}>{children}</ol>;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};
const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "Loading..." }],
  },
];
export default BlogPost;
