import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const WorkPageRecurring = () => {
  const { sectionId, subId, questionId } = useParams();
  const navigate = useNavigate();
  const { auditSections, updateQuestionStatus, synchroniseQuestion } =
    useContext(AppContext);

  // 🔍 Find Section
  const section = auditSections.find(
    (s) => s.id === Number(sectionId)
  );
  if (!section) return <div>Section Not Found</div>;

  // 🔍 Find SubSection
  const subSection = section.subSections.find(
    (sub) => sub.id === Number(subId)
  );
  if (!subSection) return <div>SubSection Not Found</div>;

  // 🔍 Find Question
  const question = subSection.questions.find(
    (q) => q.id === Number(questionId)
  );
  if (!question) return <div>Question Not Found</div>;

  // 🔥 States
  const [description, setDescription] = useState(question.description || "");
  const [corrective, setCorrective] = useState("");
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);

  const isClosed = image1 || image2;

  // ✅ Save
  const handleSave = () => {
    if (!window.confirm("Save changes?")) return;

    updateQuestionStatus(
      Number(sectionId),
      Number(subId),
      Number(questionId),
      "down",
      {
        descriptionImage: image1,
        correctiveImage: image2,
        description: description,
        corrective: corrective,
      }
    );

    navigate("/audit-checklist", { replace: true });
  };

  // ✅ Sync
  const handleSync = () => {
    if (!window.confirm("Synchronise and Lock?")) return;

    updateQuestionStatus(
      Number(sectionId),
      Number(subId),
      Number(questionId),
      "down",
      {
        descriptionImage: image1,
        correctiveImage: image2,
        description: description,
        corrective: corrective,
      }
    );

    synchroniseQuestion(
      Number(sectionId),
      Number(subId),
      Number(questionId)
    );

    navigate("/audit-checklist", { replace: true });
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col">
      <div className="flex-1 w-full bg-white p-4 md:p-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h1 className="text-lg md:text-xl font-semibold text-gray-700">
            Non-conformity associated with risk
          </h1>

          <div className="flex gap-3 mt-3 md:mt-0">
            <button
              onClick={handleSync}
              disabled={!isClosed}
              className={`border px-4 py-1.5 rounded-md text-sm ${
                isClosed
                  ? "border-gray-400 hover:bg-gray-50"
                  : "border-gray-300 bg-gray-200 cursor-not-allowed"
              }`}
            >
              Synchronise
            </button>

            <button
              onClick={handleSave}
              className="bg-gray-800 text-white px-4 py-1.5 rounded-md text-sm hover:bg-black"
            >
              Save
            </button>
          </div>
        </div>

        {/* Risk Assessment Section (Static UI same as you gave) */}
        <div className="border rounded-md p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-xs text-gray-500">Project phase</label>
              <div className="mt-1 border rounded-md p-2 text-sm bg-gray-50">
                GENERAL PROJECT STATUS
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-500">Risk of the incident</label>
              <div className="mt-1 border rounded-md p-2 text-sm bg-gray-50">
                Site closure
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-500">Risk assessment</label>
              <div className="mt-1 bg-green-500 text-white text-sm font-semibold text-center py-2 rounded-md">
                MINOR
              </div>
            </div>
          </div>
        </div>

        {/* Description + Corrective Measure */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Description */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Description of the non-conformity*
            </label>

            <textarea
              rows="8"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full mt-2 border rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="file"
              className="mt-3"
              onChange={(e) => setImage1(e.target.files[0])}
            />
          </div>

          {/* Corrective */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Corrective measure*
            </label>

            <textarea
              rows="8"
              value={corrective}
              onChange={(e) => setCorrective(e.target.value)}
              className="w-full mt-2 border rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="file"
              className="mt-3"
              onChange={(e) => setImage2(e.target.files[0])}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default WorkPageRecurring;