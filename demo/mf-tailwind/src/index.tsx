import * as React from "react";
import { Link } from "react-router-dom";
import type { PiletApi } from "sample-piral";

import "./style.css";

const Page = React.lazy(() => import("./Page"));

export function setup(app: PiletApi) {
  app.registerPage("/tailwind", Page);

  app.registerMenu(() => <Link to="/tailwind">Tailwind</Link>);

  app.registerTile(
    () => (
      <div className="bg-blue-600 text-yellow-300 flex flex-1 justify-center items-center">
        Hello from Tailwind!
      </div>
    ),
    {
      initialColumns: 4,
      initialRows: 2,
    }
  );

  app.registerExtension("fragment", () => (
    <output className="border-blue-600 bg-gray-400 text-gray-800 p-4 font-bold">
      Fragment from Tailwind
    </output>
  ));
}
