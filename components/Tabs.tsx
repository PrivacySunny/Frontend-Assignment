"use client";

import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("aboutMe");

  // Render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "aboutMe":
        return (
          <div>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              quia, repellendus rerum ipsa dolorem non vero harum reiciendis
              neque. Distinctio numquam officiis inventore minima consequuntur.
              Tenetur rerum sint voluptas delectus. Tenetur rerum sint voluptas
              delectus. Tenetur rerum sint voluptas delectus. Tenetur rerum sint
              voluptas delectus.
            </p>
          </div>
        );
      case "experiences":
        return (
          <div>
            <p className="text-gray-300">
              Tenetur rerum sint voluptas delectus. neque. Distinctio numquam
              officiis inventore minima consequuntur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Pariatur quia, repellendus rerum
              ipsa dolorem non vero harum reiciendis ipsa dolorem non vero harum
              reiciendis ipsa dolorem non vero harum reiciendis ipsa dolorem non
              vero harum reiciendis
            </p>
          </div>
        );
      case "recommended":
        return (
          <p className="text-gray-300">
            neque. Distinctio numquam officiis inventore minima consequuntur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            Tenetur rerum sint voluptas delectus. quia, repellendus rerum ipsa
            dolorem non vero harum reiciendis dolorem non vero harum reiciendis
            dolorem non vero harum reiciendis dolorem non vero harum reiciendis
            dolorem non vero harum reiciendis
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-customGray rounded-2xl p-6 shadow-lg shadow-black mt-11 w-full md:w-2/3 lg:w-1/2 ml-auto mr-6">
      <div className="bg-darkGray flex justify-around p-2 rounded-full">
        <button
          onClick={() => setActiveTab("aboutMe")}
          className={`relative p-3 w-1/3 rounded-full text-center overflow-hidden transition-colors ${
            activeTab === "aboutMe"
              ? "bg-tabColor text-white shadow-2xl shadow-black font-bold"
              : "bg-darkGray relative items-center justify-start overflow-hidden font-medium transition-all rounded hover:bg-gray group py-1.5 px-2.5"
          }`}
        >
          <span
            className={`wave ${
              activeTab === "aboutMe" ? "" : "button"
            } rounded-full bg-indigo-600 absolute top-0 right-0 translate-x-full ease-out duration-500 transition-all group-hover:translate-x-0 group-hover:w-full group-hover:h-full`}
          ></span>
          <span className="relative z-10 w-full text-left transition-colors duration-300 ease-in-out group-hover:text-white">
            About Me
          </span>
        </button>
        <button
          onClick={() => setActiveTab("experiences")}
          className={`relative p-3 w-1/3 rounded-full text-center overflow-hidden transition-colors ${
            activeTab === "experiences"
              ? "bg-tabColor text-white shadow-2xl shadow-black font-bold"
              : "bg-darkGray relative items-center justify-start overflow-hidden font-medium transition-all rounded hover:bg-gray group py-1.5 px-2.5"
          }`}
        >
          <span
            className={`wave ${
              activeTab === "experiences" ? "" : "button"
            } rounded-full bg-indigo-600 absolute top-0 right-0 translate-x-full ease-out duration-500 transition-all group-hover:translate-x-0 group-hover:w-full group-hover:h-full`}
          ></span>
          <span className="relative z-10 w-full text-left transition-colors duration-300 ease-in-out group-hover:text-white">
            Experiences
          </span>
        </button>

        <button
          onClick={() => setActiveTab("recommended")}
          className={`relative p-3 w-1/3 rounded-full text-center overflow-hidden transition-colors ${
            activeTab === "recommended"
              ? "bg-tabColor text-white shadow-2xl shadow-black font-bold"
              : "bg-darkGray relative items-center justify-start overflow-hidden font-medium transition-all rounded hover:bg-gray group py-1.5 px-2.5"
          }`}
        >
          <span
            className={`wave ${
              activeTab === "recommended" ? "" : "button"
            } rounded-full bg-indigo-600 absolute top-0 right-0 translate-x-full ease-out duration-500 transition-all group-hover:translate-x-0 group-hover:w-full group-hover:h-full`}
          ></span>
          <span className="relative z-10 w-full text-left  transition-colors duration-300 ease-in-out group-hover:text-white">
            Recommended
          </span>
        </button>
      </div>

      {/* Content area below the tabs */}
      <div className="mt-6 p-4 rounded-lg max-h-32 overflow-y-auto shadow-inner">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Tabs;
