import React, { useState, useEffect } from "react";
import { ArrowLeft , ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProjectHeader({
  isReport,
  isSummary,
  isPhases,
  isAudit,
  selectedCompany,
  selectedAudit,
  setShowAttentionModal,
  isReportValid
}) {
  const navigate = useNavigate();

  // 🔥 Load from localStorage
  const [disableReport, setDisableReport] = useState(() => {
    const saved =
      JSON.parse(localStorage.getItem("reportData")) || {};
    return saved.disableReport || false;
  });

  // 🔥 Save to localStorage when changed
  useEffect(() => {
    const existingData =
      JSON.parse(localStorage.getItem("reportData")) || {};

    const updatedData = {
      ...existingData,
      disableReport: disableReport
    };

    localStorage.setItem("reportData", JSON.stringify(updatedData));
  }, [disableReport]);

  return (
    <div className="h-20 flex items-center justify-between px-6 border-b border-gray-300 bg-white">
      <button
      onClick={() => navigate("/dashboard")}
      className="p-2 hover:bg-gray-100 rounded-full border-2 border-gray-300 transition-colors cursor-pointer"
    >
      <ChevronLeft size={22} />
    </button>

      <h1 className="font-[20px]  font-medium text-gray-700">
        {isReport
          ? `Company report: ${selectedCompany}`
          : "TECHNICAL PROJECT REPORT"}
      </h1>

      <button
        onClick={() => {
          if (isReport) {
            setDisableReport(true); // 🔥 Mark as saved

            console.log("Saved successfully");
            navigate("/dashboard", { replace: true });

          } else if (isSummary) {
            navigate("/dashboard", { replace: true });

          } else if (isPhases) {
            navigate("/projecCompanies/summary", { replace: true });
            setShowAttentionModal(true);

          } else if (isAudit) {
            navigate("/projecCompanies/phases", { replace: true });
          }
        }}
        disabled={
          isReport
            ? !isReportValid || disableReport
            : !selectedAudit && !isSummary && !isPhases
        }
        className={`ml-4 px-4 py-1 rounded-lg text-md ${
          (isReport
            ? isReportValid && !disableReport
            : selectedAudit || isSummary || isPhases)
            ? "bg-[#181819] text-white shadow-md hover:bg-black/50 active:scale-95"
            : "bg-gray-200 text-gray-400 cursor-not-allowed border border-gray-300"
        }`}
      >
        {isReport ? "Save" : isSummary ? "Complete Report" : "Next"}
      </button>
    </div>
  );
}
