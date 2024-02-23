import React from "react";

interface IGenButton {
  buttonClass: string;
  handler: () => void;
  buttonText: string;
}

const GenButton: React.FC<IGenButton> = ({
  buttonClass,
  handler,
  buttonText,
}) => {
  return (
    <button type="button" className={buttonClass} onClick={handler}>
      {buttonText}
    </button>
  );
};

export default GenButton;
