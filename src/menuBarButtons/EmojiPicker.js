import React, { useState } from "react";
import Picker from "emoji-picker-react";

export function EmojiPicker({ editor }) {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [displayStatus, setDisplayStatus] = useState("0");
  const onEmojiClick = (event, emojiObject) => {
    editor.chain().focus().insertContent(emojiObject.emoji).run();
    setChosenEmoji(emojiObject);
    // console.log(chosenEmoji);
  };
  const displayPicker = () => {
    if (displayStatus === "0") {
      setDisplayStatus("100%");
    } else setDisplayStatus("0");
  };
  return (
    <>
      <button onClick={() => displayPicker()}>Emoji</button>
      <Picker
        onEmojiClick={onEmojiClick}
        pickerStyle={{ width: { displayStatus } }}
      />
    </>
  );
}
