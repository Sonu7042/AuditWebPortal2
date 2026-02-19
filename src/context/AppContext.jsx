import React, { createContext, useState, useEffect } from "react";


export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // 🔹 WORK PAGE FORM DATA
  const [formData, setFormData] = useState({
    subcontractedCompany: "",
    machinery: "",
    description: "",
    correctiveMeasure: "",
    descriptionImage: null,
    correctiveImage: null,
  });

  const [savedMachinery, setSavedMachinery] = useState([]);

  const [visitedSections, setVisitedSections] = useState([]);

const [auditSections, setAuditSections] = useState(() => {
  const stored = JSON.parse(localStorage.getItem("reportData")) || {};
  return stored.auditSections || [
    {
      id: 1,
      title: "GENERAL PROJECT STATUS",
      subSections: [
        {
          id: 1,
          title: "Project Definition",
          questions: [
            {
              id: 1,
              question:
                "Is project scope clearly defined as per ISO 9001 requirements?",
              status: "na",
              isSynced: false,
              images: [],
              description: "",
            },
            {
              id: 2,
              question:
                "Are risk assessments conducted before starting site activities?",
              status: "na",
              isSynced: false,
              images: [],
              description: "",
            },
            {
              id: 3,
              question:
                "Is documented information properly controlled and updated?",
              status: "na",
              isSynced: false,
              images: [],
              description: "",
            },
            {
              id: 4,
              question:
                "Are internal audits conducted periodically?",
              status: "na",
              isSynced: false,
              images: [],
              description: "",
            },
            {
              id: 5,
              question:
                "Is management review performed as per ISO standards?",
              status: "na",
              isSynced: false,
              images: [],
              description: "",
            },
          ],
        },
      ],
    },
    // 🔥 KEEP ALL YOUR OTHER SECTIONS SAME (no change)
  ];
});

  // 🔥 SAVE (Editable)
  const updateQuestionStatus = (sectionId, subId, questionId, status, data) => {
    setAuditSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? {
            ...section,
            subSections: section.subSections.map((sub) =>
              sub.id === subId
                ? {
                  ...sub,
                  questions: sub.questions.map((q) =>
                    q.id === questionId
                      ? {
                        ...q,
                        status,
                        images: [data.descriptionImage, data.correctiveImage],
                        description: data.description,
                      }
                      : q
                  ),
                }
                : sub
            ),
          }
          : section
      )
    );
  };

  // 🔥 SYNCHRONISE (Lock)
  // 🔒 SYNCHRONISE (LOCK QUESTION)
  const synchroniseQuestion = (sectionId, subId, questionId) => {
    setAuditSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? {
            ...section,
            subSections: section.subSections.map((sub) =>
              sub.id === subId
                ? {
                  ...sub,
                  questions: sub.questions.map((q) =>
                    q.id === questionId ? { ...q, isSynced: true } : q
                  ),
                }
                : sub
            ),
          }
          : section
      )
    );
  };

  // 🔥 ADD NEW QUESTION
  const addNewQuestion = (sectionId, subId, questionText) => {
    if (!questionText.trim()) {
      alert("Please enter a question");
      return;
    }

    setAuditSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? {
            ...section,
            subSections: section.subSections.map((sub) =>
              sub.id === subId
                ? {
                  ...sub,
                  questions: [
                    ...sub.questions,
                    {
                      id:
                        sub.questions.length > 0
                          ? Math.max(...sub.questions.map(q => q.id)) + 1
                          : 1,
                      question: questionText,
                      status: "na",
                      isSynced: false,
                      images: [],
                      description: "",
                    },
                  ],
                }
                : sub
            ),
          }
          : section
      )
    );
  };


  useEffect(() => {
  const existing =
    JSON.parse(localStorage.getItem("reportData")) || {};

  const updated = {
    ...existing,
    auditSections,
  };

  localStorage.setItem("reportData", JSON.stringify(updated));
}, [auditSections]);

  return (
    <AppContext.Provider
      value={{
        formData,
        setFormData,
        savedMachinery,
        setSavedMachinery,
        auditSections,
        updateQuestionStatus,
        synchroniseQuestion,
        visitedSections,
        setVisitedSections,
        addNewQuestion
      }}
    >
      {children}
    </AppContext.Provider>
  );
};