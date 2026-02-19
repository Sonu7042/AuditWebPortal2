import React, { useEffect, useState } from "react";
import { Trash2, Info , ChevronLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function ProjectReports() {
  const navigate = useNavigate();

  const [reports, setReports] = useState([
    // {
    //   id: 23,
    //   brand: "Bershka",
    //   location:
    //     "BANGALORE - SANJEEVINI NAGAR - YES - BERSHKA - MALL OF ASIA - INITIAL PROJECT 0",
    //   visitDate: "06-02-2026",
    //   closedDate: "06-02-2026",
    //   syncDate: "06-02-2026",
    //   status: "Closed",
    //   nonConformities: 11,
    // },
    // {
    //   id: 22,
    //   brand: "Bershka",
    //   location:
    //     "BANGALORE - SANJEEVINI NAGAR - YES - BERSHKA - MALL OF ASIA - INITIAL PROJECT 0",
    //   visitDate: "03-02-2026",
    //   closedDate: "03-02-2026",
    //   syncDate: "03-02-2026",
    //   status: "Closed",
    //   nonConformities: 9,
    // },
    // {
    //   id: 21,
    //   brand: "Bershka",
    //   location:
    //     "BANGALORE - SANJEEVINI NAGAR - YES - BERSHKA - MALL OF ASIA - INITIAL PROJECT 0",
    //   visitDate: "31-01-2026",
    //   closedDate: "31-01-2026",
    //   syncDate: "31-01-2026",
    //   status: "Closed",
    //   nonConformities: 10,
    // },
  ]);

  // ✅ LOAD reportData AND ADD TO LIST
  useEffect(() => {
    const storedData =
      JSON.parse(localStorage.getItem("reportData")) || null;

    if (!storedData) return;

    const newReport = {
      id: 1, // unique ID
      brand: storedData.project || "New Report",
      location: storedData.project || "N/A",
      visitDate: storedData.visitDate || "-",
      closedDate: "-",
      syncDate: "-",
      status: "Open",
      nonConformities:
        storedData.createNonConformity?.length || 0,
    };

    setReports((prev) => [newReport, ...prev]);
  }, []);

  // ✅ DELETE
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this report?"
    );

    if (confirmDelete) {
      setReports((prevReports) =>
        prevReports.filter((report) => report.id !== id)
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-700">
      {/* HEADER */}
      <div className="bg-white h-20 border-b border-gray-300 px-6 py-4 flex items-center justify-between">
          <button onClick={() => window.history.back()} className="p-2 hover:bg-gray-100 rounded-full border-2 border-gray-300 transition-colors cursor-pointer" >
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-[20px] font-semibold text-gray-800">
            See Project Reports
          </h1>

        <Info className="w-6 h-6 text-blue-500 cursor-pointer" size={20} />
      </div>

      <div className="flex items-center gap-8 px-8 h-12 bg-gray-100 text-sm text-gray-600 border-b border-gray-200">
        <Info size={20} />
        <span className="text-[16px]">List of completed reports pending synchronisation</span>
      </div>


      {/* REPORT LIST */}
      <div className="px-8 py-6">
      <Link to={"/projecCompanies/summary"} className="p-6 space-y-6">
        {reports.length === 0 ? (
          <p className="text-center text-gray-500">
            No reports available.
          </p>

        ) : (
          reports.map((report) => (
            <div
              key={report.id}
              className="flex border border-gray-300 shadow-sm overflow-hidden"
            >
              {/* LEFT ID */}
              <div className="w-40 border-r border-gray-300 flex flex-col items-center justify-center p-6">
                <div className="w-26 h-26 rounded-full bg-cyan-100 text-cyan text-2xl text-gray-700 flex items-center justify-center font-medium">
                  N. {report.id}
                </div>
              </div>

              {/* CENTER */}
              <div className="w-full flex items-start px-8 py-6 bg-white gap-6">
                <div className="flex-1 ">
                  <div>
                    <h2 className="w-full text-lg pb-3 border-b border-gray-400 font-semibold text-gray-800">
                      {report.brand}
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                      {report.location}
                    </p>
                  </div>

                {/* DETAILS */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-6 text-sm">
                  <div>
                    <p className="text-gray-400">Visit date</p>
                    <p className="font-medium text-gray-800">
                      {report.visitDate}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400">Date closed</p>
                    <p className="font-medium text-gray-800">
                      {report.closedDate}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400">Synchronisation</p>
                    <p className="font-medium text-gray-800">
                      {report.syncDate}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400">Status</p>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        report.status === "Closed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {report.status}
                    </span>
                  </div>

                  <div>
                    <p className="text-gray-400">
                      Non-conformities
                    </p>
                    <p className="font-semibold text-gray-800">
                      {report.nonConformities}
                    </p>
                  </div>
                </div>
                </div>

                <button
                    onClick={() => handleDelete(report.id)}
                    className="text-gray-400 hover:text-red-500 transition cursor-pointer"
                >
                    <Trash2 size={24} />
                </button>
              </div>


            </div>
          ))
        )}
      </Link>
    </div>
    </div>
  );
}
