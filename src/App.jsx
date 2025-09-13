import { useState } from "react";
import data from "./data.json";
import jeremy from "./assets/images/image-jeremy.png";
//import { ReactComponent as EllipsisIcon } from "./assets/images/icon-ellipsis.svg";
import ellipsis from "./assets/images/icon-ellipsis.svg";
import exercise from "./assets/images/icon-exercise.svg";
import play from "./assets/images/icon-play.svg";
import selfcare from "./assets/images/icon-self-care.svg";
import social from "./assets/images/icon-social.svg";
import study from "./assets/images/icon-study.svg";
import work from "./assets/images/icon-work.svg";

const svgImages = [work, play, study, exercise, social, selfcare];
function App() {
  const [period, setPeriod] = useState("weekly");

  return (
    <>
      <div className="grid px-8 py-8 lg:py-6 md:grid-cols-3 lg:grid-cols-4 justify-items-center items-center gap-2 bg-slate-950 h-screen text-white overflow-auto">
        <div className="bg-blue-950 w-full md:pb-5 lg:pb-0 rounded-lg md:col-span-1 lg:col-span-1 ">
          <div className="bg-indigo-500 p-5 rounded-lg mb-2 md:pt-6 lg:pt-5">
            <img
              src={jeremy}
              alt="Logo"
              className="w-[70px] h-[70px] md:w-[105px] md:h-[105px] lg:w-[105px] lg:h-[105px] border-2 border-white rounded-full object-cover"
            />
            <div className="md:py-8 lg:py-2  ">
              <p className="text-xs pt-4 sm:pt-0">Report for</p>
              <p className="text-2xl md:pt-4 lg:pt-2">Jeremy</p>
              <p className="text-2xl md:pt-4 lg:pt-2">Robson</p>
            </div>
          </div>
          <div className="flex justify-between p-6 sm:pb-2 md:flex-col ">
            {["dayly", "weekly", "monthly"].map((piriod) => (
              <p
                key={piriod}
                onClick={() => setPeriod(piriod)}
                className={`pb-2 pl-5 capitalize text-xs text-indigo-300 cursor-pointer ${
                  period === piriod && "text-white"
                } hover:text-white md:py-4 lg:py-3 lg:pt-2`}
              >
                {piriod}
              </p>
            ))}
          </div>
        </div>
        <div className="grid gap-4 w-full py-2 md:col-span-2 md:grid-cols-2 lg:grid-cols-3 lg:col-span-3">
          {data.map(({ title, timeframes }, index) => {
            const { current, previous } = timeframes[period];
            const hangingImage = svgImages[index];

            return (
              <div
                key={title}
                className={`${title === "Work" && "bg-rose-300"} ${
                  title === "Play" && "bg-sky-300"
                } ${title === "Study" && "bg-red-400"} ${
                  title === "Exercise" && "bg-emerald-400"
                } ${title === "Social" && "bg-violet-400"} ${
                  title === "Self Care" && "bg-amber-300"
                } pt-12 rounded-lg relative`}
              >
                <img
                  src={hangingImage}
                  alt="image of activity"
                  className="absolute top-2 right-5 w-12 h-12 opacity-40"
                />
                <div className="p-5 md:p-3 lg:p-5 bg-indigo-950 rounded-lg relative z-10 ">
                  <div className="flex justify-between items-center">
                    <h2 className="text-sm font-medium mb-2">{title}</h2>
                    <img
                      src={ellipsis}
                      alt="ellipsis icon"
                      className="w-4 h-1"
                    />
                  </div>
                  <div className="flex justify-between md:flex-col">
                    <p className="text-4xl font-thin lg:pt-4">{current} hrs</p>
                    <p className="text-xs text-slate-400 pt-2">
                      Last {period.slice(0, -2)} - {previous} hrs
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
