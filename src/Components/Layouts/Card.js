import React from "react";
import { HiArrowRight } from "react-icons/hi";

export default function Card({ title, des, icon, isShowArrow = false }) {
  return (
    <div
      className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b
    hover:from-black hover:to-[#1e2024] transition-colors duration-100 group:"
    >
      <div className="h-72 overflow-hidden group">
        <div className="flex h-full flex-col gap-6 translate-y-10 group-hover:translate-y-0 transition-transeform duration-500">
          <div>
            <span className="text-5xl text-designColor">{icon}</span>
          </div>
          <div>
            <h2 className="text-2xl font-titleFont font-boldtext-gray-300">
              {title}
            </h2>
            <p className="base">{des}</p>
            {isShowArrow && (
              <span className="text-2xl text-designColor">
                <HiArrowRight />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
