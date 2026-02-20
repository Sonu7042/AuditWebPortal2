import React, { useState } from "react";
import {
  ArrowLeft,
  HelpCircle,
  Globe,
  Building2,
  MapPin,
  Calendar,
  ChevronLeft,
  Info,
} from "lucide-react";
import { BsGlobeCentralSouthAsia, BsBuildings } from "react-icons/bs";
import { IoCheckmarkDoneOutline, IoCalendarOutline } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";

export default function TechnicalProjectReport() {
  const navigate = useNavigate();
  // ===== Default Current Date =====
  const today = new Date().toISOString().split("T")[0];

  const [market, setMarket] = useState("INDIA");
  const [promoter, setPromoter] = useState(
    "INDITEX TRENT RETAIL INDIA PRIVATE, LTD.",
  );
  const [project, setProject] = useState(
    "BANGALORE - SANJEEVINI NAGAR - YES - BERSHKA - MALL OF ASIA - INITIAL PROJECT 0",
  );
  const [visitDate, setVisitDate] = useState(today);

  const handleCreateReport = () => {
    const reportData = {
      market,
      promoter,
      project,
      visitDate,
      createdAt: new Date().toISOString(),
    };

    // Save to localStorage
    localStorage.setItem("reportData", JSON.stringify(reportData));

    // Navigate
    navigate("/projecCompanies", { replace: true });
  };

  return (
    <div className="h-screen bg-[#f5f6f7] flex flex-col">
      {/* ===== Top Header ===== */}
      <div className="bg-white h-20 border-b border-gray-300 lg:px-8 md:px-4 py-4 flex items-center justify-between">
        <button
          onClick={() => window.history.back()}
          className="p-2 hover:bg-gray-100 rounded-full border-2 border-gray-300 transition-colors cursor-pointer"
        >
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-[20px] font-semibold text-gray-800">
          See Project Reports
        </h1>
        <Info className="w-6 h-6 text-blue-500 cursor-pointer" size={20} />
      </div>

      {/* ===== Split Layout ===== */}
      <div className="flex flex-1">
        {/* ===== LEFT SIDE ===== */}
        <div className="w-1/2 border-r border-gray-300 flex flex-col">
          {/* Section Header */}
          <div className="h-12 flex items-center justify-between px-6 border-b border-gray-400">
            <p className="text-md text-gray-600">
              Select market, promoter and project:
            </p>
            <HelpCircle size={20} className="text-blue-500" />
          </div>

          {/* Item 1 */}
          {/* Item 1 */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-5 sm:py-7 border-b border-gray-300 gap-3">
            <div className="flex items-center gap-3 sm:gap-6 min-w-0">
              <BsGlobeCentralSouthAsia className="text-gray-400 w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" />

              <div className="min-w-0">
                <p className="text-[11px] sm:text-[12px] text-gray-400">
                  Select project market
                </p>
                <p className="text-[13px] sm:text-[14px] text-gray-700 truncate">
                  INDIA
                </p>
              </div>
            </div>

            <IoCheckmarkDoneOutline className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex-shrink-0" />
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-5 sm:py-7 border-b border-gray-300 gap-3">
            <div className="flex items-center gap-3 sm:gap-6 min-w-0">
              <BsBuildings className="text-gray-400 w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" />

              <div className="min-w-0">
                <p className="text-[11px] sm:text-[12px] text-gray-400">
                  Select project promoter
                </p>
                <p className="text-[13px] sm:text-[14px] text-gray-700 truncate">
                  INDITEX TRENT RETAIL INDIA PRIVATE, LTD.
                </p>
              </div>
            </div>

            <IoCheckmarkDoneOutline className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex-shrink-0" />
          </div>

          {/* Item 3 */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-5 sm:py-7 border-b border-gray-300 gap-3">
            <div className="flex items-center gap-3 sm:gap-6 min-w-0">
              <GrMapLocation className="text-gray-400 w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" />

              <div className="min-w-0">
                <p className="text-[11px] sm:text-[12px] text-gray-400">
                  Select project
                </p>
                <p className="text-[13px] sm:text-[14px] text-gray-700 truncate">
                  BANGALORE - SANJEEVINI NAGAR - YES - BERSHKA - MALL OF ASIA -
                  INITIAL PROJECT 0
                </p>
              </div>
            </div>

            <IoCheckmarkDoneOutline className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex-shrink-0" />
          </div>
        </div>

        {/* ===== RIGHT SIDE ===== */}
        <div className="w-1/2 flex flex-col relative">
          {/* Section Header */}
          <div className="h-12 bg-[#f5f6f7] flex items-center justify-between lg:px-6 md:px-4 border-b border-gray-400">
            <p className="text-md text-[#181819]">Select visit date</p>
            <HelpCircle size={20} className="text-blue-500" />
          </div>

          {/* Center Content */}
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <p className="lg:text-2xl md:text-[16px] text-[#181819] mb-6 font-normal">
              Project report with visit date
            </p>

            <IoCalendarOutline className="text-gray-400 mb-6 text-6xl sm:text-7xl md:text-8xl lg:text-[170px]" />

            <input
              type="date"
              className="rounded-md px-4 py-2 lg:text-[16px] md:text-[12px] border border-gray-600 text-[#181819] cursor-pointer
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 placeholder:bg"
              value={visitDate}
              onChange={(e) => setVisitDate(e.target.value)}
              // className="text-lg text-gray-50 cursor-pointer"
            />
          </div>

          {/* Bottom Button */}
          <div className="absolute bottom-8 right-10">
            <button
              onClick={handleCreateReport}
              className="lg:px-5 lg:py-3 md:px-3 md:py-1 text-sm border border-[#181819] text-[#181819] rounded-md cursor-pointer "
            >
              Create report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
