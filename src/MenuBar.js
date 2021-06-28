//Initialising  the menu bar

import React from "react";
import { Table } from "./menuBarButtons/Table";
import { ImageUpload } from "./menuBarButtons/ImageUpload";
import { EmojiPicker } from "./menuBarButtons/EmojiPicker";

export var MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <>
      <ImageUpload editor={editor} />
      <Table editor={editor} />
      <EmojiPicker editor={editor} />
    </>
  );
};
