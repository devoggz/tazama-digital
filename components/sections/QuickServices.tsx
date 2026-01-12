import React from "react";
import { BoltIcon, ClockIcon, PrintIcon } from "../icons";

function QuickServices() {
  return (
    <div className="grid grid-cols-3 items-start justify-center gap-2 mb-12">
      <div className="grid grid-cols-2 items-start justify-start gap-1">
        <div className="flex items-center justify-center w-[100px] h-[100px] bg-amber-300 rounded-full ">
          <PrintIcon className="text-slate-100" size={48} color="red" />
        </div>

        <div className="flex flex-col items-start justify-center gap-2">
          <h1 className="font-bold text-xl ">Quality Printing</h1>
          <p className="text-sm">
            Premium prints using the latest digital technology.
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuickServices;
