import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeftIcon, InformationCircleIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { ChevronLeft, Info, HelpCircle, RefreshCw, AlertTriangle, CheckCircle, X } from "lucide-react";

export default function SynchronisationPage() {
  return (
    <div className="min-h-screen bg-gray-700 flex flex-col">

      {/* Header */}
      <div className="h-20 flex items-center justify-between lg:px-8 md:px-4 py-4 bg-white border-b border-gray-200">
        <div className="w-full flex items-center justify-between">
          <button onClick={() => window.history.back()} className="p-2 hover:bg-gray-100 rounded-full border-2 border-gray-300 transition-colors cursor-pointer" >
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-[20px] font-semibold text-gray-800">
            Synchronisation of reports
          </h1>
        
        <QuestionMarkCircleIcon className="w-6 h-6 text-blue-500 cursor-pointer" />
        </div>
      </div>

      {/* Sub Header */}
      <div className="flex items-center gap-8 lg:px-8 md:px-4 h-12 bg-gray-100 text-sm text-gray-600 border-b border-gray-200">
        <Info size={20} />
        <span className="text-[16px]">List of completed reports pending synchronisation</span>
      </div>

      {/* Content */}
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center max-w-full">
          <div className="flex justify-center">
            <Info size={92} className="text-white mb-4" />
          </div>

          <h2 className="text-2xl font-medium text-white">
            There are no project reports to synchronise
          </h2>

          <p className="mt-2 text-sm text-gray-200 font-mono">
            The user does not have any closed project reports to synchronise.
          </p>
        </div>
      </div>
    </div>
  );
}
