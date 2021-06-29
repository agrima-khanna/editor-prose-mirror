//Initialising  the Floating menu: appears on entering a new line

import React from "react";

import { ImageUpload } from "../menuBarButtons/ImageUpload";

export var FloatingMenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <>
      <ImageUpload editor={editor} />
    </>
  );
};
