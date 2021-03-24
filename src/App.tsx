import React from "react";
import "./App.css";
import { MenuCamera } from "./components/MenuCamera/MenuCamera";

function App() {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <aside className="flex flex-col w-64 bg-gray-800 p-4">
        <h1 className="text-white text-m text-center">Inca</h1>
        <div className="mt-5 flex-1 bg-gray-800 space-y-1">
          <MenuCamera />
          {/* <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center -m-2 p-2 text-sm font-medium rounded-md"
          >
            <svg
              className="text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >

              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              />
            </svg>
            Background
          </a> */}
        </div>
        <div className="flex bg-gray-700 -m-4 p-4">
          <a
            href="/settings"
            className="flex items-center flex-shrink-0 w-full group"
          >
            <img
              className="inline-block h-9 w-9 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=4xnS6KQ4Ls&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <p className="text-xs font-medium ml-3 text-gray-300 group-hover:text-gray-200">
              Settings
            </p>
          </a>
        </div>
      </aside>
      <main className="flex flex-col w-0 flex-1 overflow-hidden">
        {/* worktop - where the 3D stuff lives */}
      </main>
    </div>
  );
}

export default App;
