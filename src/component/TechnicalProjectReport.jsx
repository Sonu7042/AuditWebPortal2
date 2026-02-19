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
import { BsGlobeCentralSouthAsia , BsBuildings } from "react-icons/bs";
import { IoCheckmarkDoneOutline , IoCalendarOutline } from "react-icons/io5";
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
     <div className="bg-white h-20 border-b border-gray-300 px-6 py-4 flex items-center justify-between">
          <button onClick={() => window.history.back()} className="p-2 hover:bg-gray-100 rounded-full border-2 border-gray-300 transition-colors cursor-pointer" >
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
          <div className="flex items-center justify-between px-6 py-7 border-b border-gray-400 gap-3">
            <div className="flex items-center gap-6">
              <BsGlobeCentralSouthAsia size={40} className="text-gray-400" />
              <div>
                <p className="text-[12px] text-gray-400">
                  Select project market
                </p>
                <p className=" text-gray-700">INDIA</p>
              </div>
            </div>
            <IoCheckmarkDoneOutline size={30} className="text-blue-500" />
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-between px-6 py-7 border-b border-gray-400 gap-3">
            <div className="flex items-center gap-6">
              <BsBuildings size={40} className="text-gray-400" />
              <div>
                <p className="text-[12px] text-gray-400">
                  Select project promoter
                </p>
                <p className=" text-gray-700">
                  INDITEX TRENT RETAIL INDIA PRIVATE, LTD.
                </p>
              </div>
            </div>
            <IoCheckmarkDoneOutline size={30} className="text-blue-500" />
          </div>

          {/* Item 3 */}
          <div className="flex items-center justify-between px-6 py-7 border-b border-gray-400 gap-3">
            <div className="flex items-center gap-6">
              <GrMapLocation size={40} className="text-gray-400" />
              <div>
                <p className="text-[12px] text-gray-400">Select project</p>
                <p className=" text-gray-700">
                  BANGALORE - SANJEEVINI NAGAR - YES - BERSHKA - MALL OF ASIA -
                  INITIAL PROJECT 0
                </p>
              </div>
            </div>
            <IoCheckmarkDoneOutline size={30} className="text-blue-500" />
          </div>
        </div>

        {/* ===== RIGHT SIDE ===== */}
        <div className="w-1/2 bg-gray-700 flex flex-col relative">
          {/* Section Header */}
          <div className="h-12 bg-[#f5f6f7] flex items-center justify-between px-6 border-b border-gray-400">
            <p className="text-md text-gray-600">Select visit date</p>
            <HelpCircle size={20} className="text-blue-500" />
          </div>

          {/* Center Content */}
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <p className="text-2xl text-white mb-6 font-mono">
              Project report with visit date
            </p>

            <IoCalendarOutline size={170} className="text-gray-300 mb-6" />

            <input
              type="date"
              className="bg-gray-600 rounded-md px-4 py-2 text-lg text-gray-50 cursor-pointer
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
              className="px-5 py-4 text-sm border bg-[#181819] text-white rounded-md hover:bg-black/50  hover:border-none transition-normal duration-400 "
            >
              Create report and continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
