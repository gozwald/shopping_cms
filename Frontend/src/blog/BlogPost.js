import React, { useCallback, useEffect, useMemo, useState } from "react";
import isHotkey from "is-hotkey";
import { Editable, withReact, useSlate, Slate } from "slate-react";
import { Editor, Transforms, createEditor } from "slate";
import { withHistory } from "slate-history";
import axios from "axios";
import { Node, Text } from "slate";

import { Button, Icon, Toolbar } from "./BlogUtil";
import Cookies from "js-cookie";

const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
};

const LIST_TYPES = ["numbered-list", "bulleted-list"];

const BlogPost = (props) => {
  const [value, setValue] = useState(initialValue);
  const [author, setAuthor] = useState("");
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  const fetchBlog = () => {
    fetch("http://localhost:5000/blog/fetchById", {
      method: "GET",
      headers: { token: Cookies.get("token") },
    })
      .then((response) => response.json())
      .then((res) => setValue(res.post_content))
      .catch((error) => console.log(error));
  };

  const getAuthor = () => {
    fetch("http://localhost:5000/blog/getPostById", {
      method: "GET",
      headers: {
        postId: 12,
        token: Cookies.get("token"),
      },
    })
      .then((response) => response.json())
      .then((res) => setAuthor(res));
  };

  useEffect(() => {
    fetchBlog();
    getAuthor();
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
