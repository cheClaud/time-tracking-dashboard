import { useState } from "react";
import data from "./data.json";
import jeremy from "./assets/images/image-jeremy.png";
//import { ReactComponent as EllipsisIcon } from "./assets/images/icon-ellipsis.svg";
import ellipsis from "./assets/images/icon-ellipsis.svg";
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
              className="py-1 pb-2 sm:pb-6 w-[70px] h-[70px] md:w-[105px] md:h-[105px] lg:w-[105px] lg:h-[105px] border-2 border-white-600 rounded-full"
            />
            <div className="md:py-8 lg:py-2  ">
              <p className="text-xs pt-4 sm:pt-0">Report for</p>
              <p className="text-2xl md:pt-4 lg:pt-2">Jeremy</p>
              <p className="text-2xl md:pt-4 lg:pt-2">Robson</p>
            </div>
          </div>
          <div className="flex justify-between p-6 sm:pb-2 md:flex-col ">
            {["daily", "weekly", "monthly"].map((piriod) => (
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
          {data.map(({ title, timeframes }) => {
            const { current, previous } = timeframes[period];

            return (
              <div
                key={title}
                className={`${title === "Work" && "bg-rose-300"} ${
                  title === "Play" && "bg-sky-300"
                } ${title === "Study" && "bg-red-400"} ${
                  title === "Exercise" && "bg-emerald-400"
                } ${title === "Social" && "bg-violet-400"} ${
                  title === "Self Care" && "bg-amber-300"
                } pt-12 rounded-lg`}
              >
                <div className="p-5 md:p-3 lg:p-5 bg-indigo-950 rounded-lg">
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
