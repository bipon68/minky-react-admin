import React from "react";
import { Link } from "react-router-dom";
import { FaDownload, FaFileAlt, FaGithub } from "react-icons/fa";
const DashboardContent = () => {
  return (
    <div>
      <div className="flex w-full gap-6 px-6">
        <div className="w-full">
          <div className="tile">
            <h3 className="tile-title">Features</h3>
            <ul>
              <li>Built with Tailwind, SASS and PUG.js</li>
              <li>Fully responsive and modular code</li>
              <li>
                Seven pages including login, user profile and print friendly
                invoice page
              </li>
              <li>Smart integration of forgot password on login page</li>
              <li>Chart.js integration to display responsive charts</li>
              <li>Widgets to effectively display statistics</li>
              <li>Data tables with sort, search and paginate functionality</li>
              <li>
                Custom form elements like toggle buttons, auto-complete, tags
                and date-picker
              </li>
              <li>
                A inbuilt toast library for providing meaningful response
                messages to user's actions
              </li>
            </ul>
            <p>
              Vali is a free and responsive admin theme built with Bootstrap 4,
              SASS and PUG.js. It's fully customizable and modular.
            </p>
            <p>
              Vali is is light-weight, expendable and good looking theme. The
              theme has all the features required in a dashboard theme but this
              features are built like plug and play module. Take a look at the
              <Link href="#" target="_blank">
                documentation
              </Link>
              about customizing the theme colors and functionality.
            </p>
            <p className="my-4 flex">
              <Link
                className="flex items-center gap-1 btn btn-primary mr-2 mb-2"
                href="#"
                target="_blank"
              >
                <FaFileAlt />
                Docs
              </Link>
              <Link
                className="flex items-center gap-1 btn btn-info mr-2 mb-2"
                href="#"
                target="_blank"
              >
                <FaGithub />
                GitHub
              </Link>
              <Link
                className="flex items-center gap-1 btn btn-success mr-2 mb-2"
                href="#"
                target="_blank"
              >
                <FaDownload />
                Download
              </Link>
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="tile">
            <h3 className="tile-title">Compatibility with frameworks</h3>
            <p>
              This theme is not built for a specific framework or technology
              like Angular or React etc. But due to it's modular nature it's
              very easy to incorporate it into any front-end or back-end
              framework like Angular, React or Laravel.
            </p>
            <p>
              Go to
              <Link href="#" target="_blank">
                documentation
              </Link>
              for more details about integrating this theme with various
              frameworks.
            </p>
            <p>
              The source code is available on GitHub. If anything is missing or
              weird please report it as an issue on
              <Link href="https://github.com/" target="_blank">
                GitHub
              </Link>
              . If you want to contribute to this theme pull requests are always
              welcome.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
