import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'sample-piral';

import "./style.css";

const Page = React.lazy(() => import('./Page'));

export function setup(app: PiletApi) {
  app.registerPage('/convention', Page);

  app.registerMenu(() => <Link to="/convention">Convention</Link>);

  app.registerTile(
    () => <div className="mf-convention-tile-background">Hello from Convention!</div>,
    {
      initialColumns: 4,
      initialRows: 2,
    }
  );

  app.registerExtension("fragment", () => <output className="mf-convention">Fragment from Convention</output>);
}
