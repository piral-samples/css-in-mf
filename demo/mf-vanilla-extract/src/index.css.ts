import { style } from "@vanilla-extract/css";

export const tile = style({
  background: "beige",
  color: "black",
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const output = style({
  border: "1px dashed black",
  background: "beige",
  color: "black",
  padding: "1rem",
  fontWeight: "bold",
});
