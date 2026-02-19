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

  // ================= AUDIT =================
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
            ],
          },
        ],
      },
    ];
  });

  // ================= PREVENT PLAN (NEW ADDED) =================
  const [preventPlanSections, setPreventPlanSections] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("reportData")) || {};
    return stored.preventPlanSections || [
      {
        id: 1,
        title: "PREVENTIVE ACTION PLAN",
        subSections: [
          {
            id: 1,
            title: "Safety Measures",
            questions: [
              {
                id: 1,
                question:
                  "Are preventive safety controls implemented properly?",
                status: "na",
                isSynced: false,
                images: [],
                description: "",
              },
            ],
          },
        ],
      },
    ];
  });

  // 🔥 SAVE (Editable) - AUDIT
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
                              images: [
                                data.descriptionImage,
                                data.correctiveImage,
                              ],
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

  // 🔥 SAVE (Editable) - PREVENT PLAN (SAME LOGIC JUST STATE CHANGE)
  const updatePreventPlanStatus = (sectionId, subId, questionId, status, data) => {
    setPreventPlanSections((prev) =>
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
                              images: [
                                data.descriptionImage,
                                data.correctiveImage,
                              ],
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

  // 🔒 SYNCHRONISE - AUDIT
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

  // 🔒 SYNCHRONISE - PREVENT PLAN (SAME LOGIC)
  const synchronisePreventPlanQuestion = (sectionId, subId, questionId) => {
    setPreventPlanSections((prev) =>
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

  // 🔥 ADD NEW QUESTION - AUDIT
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

  // 🔥 ADD NEW QUESTION - PREVENT PLAN (SAME LOGIC)
  const addNewPreventPlanQuestion = (sectionId, subId, questionText) => {
    if (!questionText.trim()) {
      alert("Please enter a question");
      return;
    }

    setPreventPlanSections((prev) =>
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
      preventPlanSections,
    };

    localStorage.setItem("reportData", JSON.stringify(updated));
  }, [auditSections, preventPlanSections]);

  return (
    <AppContext.Provider
      value={{
        formData,
        setFormData,
        savedMachinery,
        setSavedMachinery,
        auditSections,
        preventPlanSections,
        updateQuestionStatus,
        updatePreventPlanStatus,
        synchroniseQuestion,
        synchronisePreventPlanQuestion,
        visitedSections,
        setVisitedSections,
        addNewQuestion,
        addNewPreventPlanQuestion
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
