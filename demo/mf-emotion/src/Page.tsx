import * as React from "react";
import { css } from "@emotion/css";

const heading = css`
  color: orange;
`;

export default () => {
  return (
    <>
      <h2 className={heading}>Emotion</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
        reiciendis illum qui nulla adipisci, laudantium vitae atque dicta
        blanditiis ab. Quae deleniti eum sapiente temporibus tenetur, maxime
        quibusdam iure nisi.
      </p>
      <piral-extension name="fragment"></piral-extension>
    </>
  );
};
