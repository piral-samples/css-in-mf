import * as React from "react";
import styled from "styled-components";

const Page = styled.div`
  > h2 {
    color: magenta;
  }
`;

export default () => {
  return (
    <Page>
      <h2>Styled Components</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
        reiciendis illum qui nulla adipisci, laudantium vitae atque dicta
        blanditiis ab. Quae deleniti eum sapiente temporibus tenetur, maxime
        quibusdam iure nisi.
      </p>
      <piral-extension name="fragment"></piral-extension>
    </Page>
  );
};
