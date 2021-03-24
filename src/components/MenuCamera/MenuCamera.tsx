import React, { useState } from "react";
import "./style.css";

const DEFAULT_LIGHT = [
  {
    id: 1,
    label: "Ambient Light",
  },
];

export const MenuCamera = () => {
  // hover:bg-gray-700 hover:text-white
  const [lights, setLights] = useState(DEFAULT_LIGHT);
  const [isMenuOpen, toggleMenu] = useState<boolean>(true);

  const addNewLight = () => {
    const newLight = {
      id: new Date().getTime(),
      label: `Light ${lights.length + 1}`,
    };
    setLights([...lights, newLight]);
  };

  const removeLight = (id: number) => {
    const filtered = lights.filter(light => light.id !== id);
    console.table(filtered);
    setLights([...filtered]);
  };

  return (
    <div className={`text-gray-300 group flex flex-col -m-2 p-2 text-sm font-medium rounded-md overflow-hidden ${!isMenuOpen ? 'max-h-10' : ''}`}>
      <div className="flex justify-between w-full cursor-pointer" onClick={() => toggleMenu(!isMenuOpen)}>
        <span>Lights</span>
        <span className={`chevron ${!isMenuOpen ? 'transform rotate-180' : ''}`}></span>
      </div>
      <div className="mt-2 flex flex-col items-center">
        {lights.map((light) => (
          <div
            className="flex mt-2 p-2 w-full items-center cursor-pointer"
            key={light.id}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#FFFFFF"
                d="M14 19h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm0 2h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm.25 2h-4.5l1.188.782c.154.138.38.218.615.218h.895c.234 0 .461-.08.615-.218l1.187-.782zm3.75-13.799c0 3.569-3.214 5.983-3.214 8.799h-1.989c-.003-1.858.87-3.389 1.721-4.867.761-1.325 1.482-2.577 1.482-3.932 0-2.592-2.075-3.772-4.003-3.772-1.925 0-3.997 1.18-3.997 3.772 0 1.355.721 2.607 1.482 3.932.851 1.478 1.725 3.009 1.72 4.867h-1.988c0-2.816-3.214-5.23-3.214-8.799 0-3.723 2.998-5.772 5.997-5.772 3.001 0 6.003 2.051 6.003 5.772zm4-.691v1.372h-2.538c.02-.223.038-.448.038-.681 0-.237-.017-.464-.035-.69h2.535zm-10.648-6.553v-1.957h1.371v1.964c-.242-.022-.484-.035-.726-.035-.215 0-.43.01-.645.028zm-3.743 1.294l-1.04-1.94 1.208-.648 1.037 1.933c-.418.181-.822.401-1.205.655zm10.586 1.735l1.942-1.394.799 1.115-2.054 1.473c-.191-.43-.423-.827-.687-1.194zm-3.01-2.389l1.038-1.934 1.208.648-1.041 1.941c-.382-.254-.786-.473-1.205-.655zm-10.068 3.583l-2.054-1.472.799-1.115 1.942 1.393c-.264.366-.495.763-.687 1.194zm13.707 6.223l2.354.954-.514 1.271-2.425-.982c.21-.397.408-.812.585-1.243zm-13.108 1.155l-2.356 1.06-.562-1.251 2.34-1.052c.173.433.371.845.578 1.243zm-1.178-3.676h-2.538v-1.372h2.535c-.018.226-.035.454-.035.691 0 .233.018.458.038.681z"
              />
            </svg>
            <span className="ml-3">{light.label}</span>
            <button
              type="button"
              className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-gray-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ml-auto"
              onClick={() => removeLight(light.id)}
            >
              <svg
                className="h-5 w-5 transform rotate-45"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="visua11y-hidden">Delete light</span>
            </button>
          </div>
        ))}
        <button
          type="button"
          className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          onClick={addNewLight}
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clip-rule="evenodd"
            />
          </svg>
          <span className="visua11y-hidden">Add new light</span>
        </button>
      </div>
    </div>
  );
};
