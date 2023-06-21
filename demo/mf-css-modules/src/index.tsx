import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'sample-piral';

import styles from "./style.modules.css";

console.log(styles);

const Page = React.lazy(() => import('./Page'));

export function setup(app: PiletApi) {
  app.registerPage('/css-modules', Page);

  app.registerMenu(() => <Link to="/css-modules">CSS Modules</Link>);

  app.registerTile(
    () => <div className={styles.tile}>Hello from CSS Modules!</div>,
    {
      initialColumns: 4,
      initialRows: 2,
    }
  );

  app.registerExtension("fragment", () => <output className={styles.output}>Fragment from CSS Modules</output>);
}
