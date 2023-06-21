import * as React from "react";
import { Link } from "react-router-dom";
import type { PiletApi } from "sample-piral";
import { createWrapper } from "./utils";

const Page = React.lazy(() => import("./Page"));

export function setup(app: PiletApi) {
  const wrap = createWrapper("mf-shadow-dom");

  app.registerPage("/shadow-dom", wrap(Page));

  app.registerMenu(() => <Link to="/shadow-dom">Shadow DOM</Link>);

  app.registerTile(
    wrap(() => <div className="tile-background">Hello from Shadow DOM!</div>),
    {
      initialColumns: 4,
      initialRows: 2,
    }
  );

  app.registerExtension(
    "fragment",
    wrap(() => <output>Fragment from Shadow DOM</output>)
  );
}
