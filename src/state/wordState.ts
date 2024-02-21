import { atom } from "recoil";

export const wordState = atom({
  key: "wordState",
  default: {
    name: "",
    selected: false,
  },
});
