//Initialising  the menu bar

import React from "react";

import { Table } from "../menuBarButtons/Table";
import { ImageUpload } from "../menuBarButtons/ImageUpload";
import { EmojiPicker } from "../menuBarButtons/EmojiPicker";

export var MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="menuBar">
      <Table editor={editor} />
      <EmojiPicker editor={editor} />
      <ImageUpload editor={editor} />
    </div>
  );
};
