import React from "react";
import { Link } from "gatsby";

import Logo from "../common/Logo";

export default function Footer() {
  return (
    <div className="max-w-screen-xl mx-auto mt-10 py-10 md:pt-10 md:py-10 px-5 md:px-0">
      <div className="flex flex-col md:flex-row">
        <div className="flex-grow items-end">
          <Logo hasText />
          <p className="mt-3 text-gray-600 text-sm">
            UI framework for developing modular and consistent apps in React
            Native
          </p>
        </div>
        <div>
          <div className="flex pt-3 md:pt-0 pb-3">
            <Link to="/docs/getting-started" className="d-block text-gray-700">
              Getting started
            </Link>
            <Link to="/docs" className="d-block pl-4 text-gray-700">
              Documentation
            </Link>
          </div>
          <div className="flex mt-3 md:justify-end">
            <a
              target="_blank"
              href="https://github.com/jsartisan/react-native-magnus"
              className="d-block flex text-gray-500 hover:text-gray-600"
            >
              <i className="icon-github text-xl "></i>
            </a>
            <a
              href="https://twitter.com/magnusui"
              target="_blank"
              className="block pl-5 flex text-gray-500 hover:text-gray-600"
            >
              <i className="icon-twitter text-xl "></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}