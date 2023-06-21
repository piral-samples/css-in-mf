import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import type { PiletApi } from 'sample-piral';

const Tile = styled.div`
  background: cyan;
  color: magenta;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Output = styled.output`
  border: 1px dashed magenta;
  background: cyan;
  color: magenta;
  padding: 1rem;
  font-weight: bold;
`;

const Page = React.lazy(() => import('./Page'));

export function setup(app: PiletApi) {
  app.registerPage('/styled-components', Page);

  app.registerMenu(() => <Link to="/styled-components">Styled Components</Link>);

  app.registerTile(
    () => <Tile>Hello from Styled Components!</Tile>,
    {
      initialColumns: 4,
      initialRows: 2,
    }
  );

  app.registerExtension("fragment", () => <Output>Fragment from Styled Components</Output>);
}
