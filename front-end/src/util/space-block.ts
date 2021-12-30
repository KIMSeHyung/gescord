import { KeyboardEvent } from "react";

const spaceBlock = (e: KeyboardEvent) => {
  if (e.key === " ") {
    e.preventDefault();
  }
};

export default spaceBlock;
