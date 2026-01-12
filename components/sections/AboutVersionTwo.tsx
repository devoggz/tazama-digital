import React from "react";
import { BoltIcon, ClockIcon, PrintIcon } from "../icons";

function AboutVersionTwo() {
  return (
    <section className="flex items-center justify-center bg-amber-50  py-18 rounded-lg w-full mb-8">
      <div className="flex-1  flex-col items-center max-w-[600px] justify-center gap-4">
        <div className="max-w-[360px] p-12">
          <h1 className="font-bold text-3xl leading-tight tracking-tighter bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Why Choose Tazama Digital Studios
          </h1>
          <p className=" text-sm mt-8 text-slate-500 leading-normal tracking-tighter">
            We are your trusted creative partner located in Nairobi, Kenya. We
            deliver precision, innovation, and exceptional customer service for
            all printing needs.
          </p>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex flex-col items-center justify-center gap-8 p-4 ">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-[60px] h-[60px] bg-amber-400 rounded-lg p-4">
              <PrintIcon size={40} />
            </div>
            <div>
              <h1 className="font-bold">Unmatched Quality</h1>
              <p className="text-small">
                Premium prints using the latest digital technology.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-[60px] h-[60px] bg-amber-400 rounded-lg p-4">
              <BoltIcon size={40} />
            </div>
            <div>
              <h1 className="font-bold">Fast & Reliable Delivery</h1>
              <p className="text-small">
                Timely service with haraka options to meet tight deadlines.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-[60px] h-[60px] bg-amber-400 rounded-lg p-4">
              <ClockIcon size={40} />
            </div>
            <div>
              <h1 className="font-bold">All-in-One Solutions</h1>
              <p className="text-small">
                Digital and large format printing under one roof in Nairobi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutVersionTwo;
