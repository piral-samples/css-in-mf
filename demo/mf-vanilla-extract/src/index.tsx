import * as React from "react";
import { Link } from "react-router-dom";
import type { PiletApi } from "sample-piral";
import { tile, output } from "./index.css.ts";

const Page = React.lazy(() => import("./Page"));

export function setup(app: PiletApi) {
  app.registerPage("/vanilla-extract", Page);

  app.registerMenu(() => <Link to="/vanilla-extract">Vanilla Extract</Link>);

  app.registerTile(() => <div className={tile}>Hello from Vanilla Extract!</div>, {
    initialColumns: 4,
    initialRows: 2,
  });

  app.registerExtension("fragment", () => (
    <output className={output}>Fragment from Vanilla Extract</output>
  ));
}
