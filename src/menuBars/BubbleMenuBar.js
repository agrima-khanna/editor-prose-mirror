//Initialising  the Bubble menu: appears on selecting text

import React from "react";

import { ImageUpload } from "../menuBarButtons/ImageUpload";

export var BubbleMenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <>
      <ImageUpload editor={editor} />
    </>
  );
};
