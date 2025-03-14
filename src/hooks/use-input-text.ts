import { ChangeEventHandler, useState } from "react";

export const useInputText = (init: string) => {
  const [text, setText] = useState(init);

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.target.value);
  };

  return { text, onChange };
};
