import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'sample-piral';
import { css } from '@emotion/css';

const Page = React.lazy(() => import('./Page'));

const tile = css`
  background: orange;
  color: white;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const output = css`
  border: 1px dashed red;
  background: orange;
  color: white;
  padding: 1rem;
  font-weight: bold;
`;

export function setup(app: PiletApi) {
  app.registerPage('/emotion', Page);

  app.registerMenu(() => <Link to="/emotion">Emotion</Link>);

  app.registerTile(
    () => <div className={tile}>Hello from Emotion!</div>,
    {
      initialColumns: 4,
      initialRows: 2,
    }
  );

  app.registerExtension("fragment", () => <output className={output}>Fragment from Emotion</output>);
}
