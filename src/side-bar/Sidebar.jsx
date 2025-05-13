import "./sidebar.css";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const openSvg = (
    <svg
      class="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="white"
      viewBox="0 0 24 24"
    >
      <path d="M13 21h6c1.1046 0 2-.8954 2-2V5c0-1.10457-.8954-2-2-2h-6v18Z" />
      <path
        fill-rule="evenodd"
        d="M11 3H5c-1.10457 0-2 .89543-2 2v14c0 1.1046.89543 2 2 2h6V3Zm-5.70711 7.7071c-.39052-.3905-.39052-1.02368 0-1.41421.39053-.39052 1.02369-.39052 1.41422 0l1.99994 1.99991c.39052.3906.39052 1.0237 0 1.4142l-1.99994 2c-.39053.3905-1.02369.3905-1.41422 0-.39052-.3905-.39052-1.0237 0-1.4142l1.29284-1.2929-1.29284-1.2928Z"
        clip-rule="evenodd"
      />
    </svg>
  );

  const closeSvg = (
    <svg
      class="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M13 21h6c1.1046 0 2-.8954 2-2V5c0-1.10457-.8954-2-2-2h-6v18Z" />
      <path
        fill-rule="evenodd"
        d="M11 3H5c-1.10457 0-2 .89543-2 2v14c0 1.1046.89543 2 2 2h6V3Zm-2.29295 7.7071c.39052-.3905.39052-1.02368 0-1.41421-.39053-.39052-1.02369-.39052-1.41421 0L5.29289 11.2928c-.39052.3906-.39052 1.0237 0 1.4142l1.99995 2c.39052.3905 1.02368.3905 1.41421 0 .39052-.3905.39052-1.0237 0-1.4142l-1.29284-1.2929 1.29284-1.2928Z"
        clip-rule="evenodd"
      />
    </svg>
  );

  const [animateButton, setAnimateButton] = useState(false);
  const [isBarOpen, setIsBarOpen] = useState(true);
  const [hoverClass, setHoverClass] = useState("");
  const [slideBarIcon, setSlideBarIcon] = useState(closeSvg);

  setTimeout(() => {
    isBarOpen ? setHoverClass("holder-h") : "";
  }, 900);

  function buttonClick() {
    // use for little button animation
    setAnimateButton(true);
    setTimeout(() => {
      setAnimateButton(false);
    }, 300);

    // isBarOpen ? setIsBarOpen(false) : setIsBarOpen(true);
    if (isBarOpen) {
      setIsBarOpen(false);
      setHoverClass("");
      setSlideBarIcon(openSvg);
    } else {
      setIsBarOpen(true);
      setSlideBarIcon(closeSvg);
      setTimeout(() => {
        setHoverClass("holder-h");
      }, 800);
    }

    //checking if the sidebar is open or not
  }

  return (
    <div className="bar">
      {/* sidebar-button */}
      <button
        className={`sidebar-button ${animateButton ? "but-animated" : ""} `}
        onClick={buttonClick}
      >
        {slideBarIcon}
      </button>

      {/* sidebar items */}
      <div
        className={`items-holder ${isBarOpen ? "holder-open" : "holder-close"} 
        ${hoverClass} `}
      >
        <NavLink to="/" className="nav-link">
          <div className="item">
            <div className="item-icon">
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 2c-1.10457 0-2 .89543-2 2v4c0 .55228.44772 1 1 1s1-.44772 1-1V4h12v7h-2c-.5523 0-1 .4477-1 1v2h-1c-.5523 0-1 .4477-1 1s.4477 1 1 1h5c.5523 0 1-.4477 1-1V3.85714C20 2.98529 19.3667 2 18.268 2H6Z" />
                <path d="M6 11.5C6 9.567 7.567 8 9.5 8S13 9.567 13 11.5 11.433 15 9.5 15 6 13.433 6 11.5ZM4 20c0-2.2091 1.79086-4 4-4h3c2.2091 0 4 1.7909 4 4 0 1.1046-.8954 2-2 2H6c-1.10457 0-2-.8954-2-2Z" />
              </svg>
            </div>
            <div className="item-label">Dashboard</div>
          </div>
        </NavLink>
        <NavLink to="/users" className="nav-link">
          <div className="item">
            <div className="item-icon">
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="item-label">Users</div>
          </div>
        </NavLink>
        <NavLink to="/test-codes" className="nav-link">
          <div className="item">
            <div className="item-icon">
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 15v3c0 .5523.44772 1 1 1h8v-8m-9 4v-4m0 4h9m-9-4V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v4M3 11h11m6.25 5c0 1.2426-1.0073 2.25-2.25 2.25M20.25 16c0-1.2426-1.0073-2.25-2.25-2.25M20.25 16H21m-3 2.25c-1.2426 0-2.25-1.0074-2.25-2.25M18 18.25V19m-2.25-3c0-1.2426 1.0074-2.25 2.25-2.25M15.75 16H15m3-2.25V13m-1.591 1.409-.5303-.5303m4.2426 4.2426-.5303-.5303m-3.182 0-.5303.5303m4.2426-4.2426-.5303.5303"
                />
              </svg>
            </div>
            <div className="item-label">Test Codes</div>
          </div>
        </NavLink>
        <NavLink to="/test-results" className="nav-link">
          <div className="item">
            <div className="item-icon">
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.403 5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6.403a3.01 3.01 0 0 1-1.743-1.612l-3.025 3.025A3 3 0 1 1 9.99 9.768l3.025-3.025A3.01 3.01 0 0 1 11.403 5Z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M13.232 4a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v5.768a1 1 0 1 1-2 0V6.414l-6.182 6.182a1 1 0 0 1-1.414-1.414L17.586 5h-3.354a1 1 0 0 1-1-1Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="item-label">Test Results</div>
          </div>
        </NavLink>
        <NavLink to="/questions" className="nav-link">
          {" "}
          <div className="item">
            <div className="item-icon">
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6a2 2 0 0 1 2-2h5.532a2 2 0 0 1 1.536.72l1.9 2.28H3V6Zm0 3v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9H3Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="item-label">Questions</div>
          </div>
        </NavLink>
        <NavLink to="/oral-test-slot" className="nav-link">
          <div className="item">
            <div className="item-icon">
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="item-label">Oral Test Slot</div>
          </div>
        </NavLink>
        <NavLink to="/settings" className="nav-link">
          <div className="item">
            <div className="item-icon">
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            <div className="item-label">Settings</div>
          </div>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Sidebar;
