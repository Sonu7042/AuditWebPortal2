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
    return (
      stored.auditSections || [
        {
          id: 1,
          title: "GENERAL SAFETY STATUS",
          subSections: [
            {
              id: 1,
              title: "RISKS RELATED TO PATHWAYS & FLOOR CONDITIONS",
              questions: [
                {
                  id: 1,
                  question:
                    "All walkways and pedestrian pathways are clearly marked with yellow lines and free from obstruction ",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Floor surfaces are even, non-slippery and free from oil, water or any spillage",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Drain covers are in place, flush with floor level and in good condition",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Drip trays are positioned wherever oil or chemical leakage is likely",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 2,
              title: "RISKS RELATED TO LIGHTING & VISIBILITY",
              questions: [
                {
                  id: 1,
                  question:
                    "All work areas have adequate illumination suitable for the work being performed",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Emergency lighting is installed at exits, stairways and critical areas (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Lighting fixtures are clean, functional and free from damage",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "No dark corners, blind spots or poorly lit areas are observed during audit walk",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 3,
              title: "RISKS RELATED TO SAFETY SIGNAGE & DISPLAYS",
              questions: [
                {
                  id: 1,
                  question:
                    "Mandatory PPE signs are displayed at entry points of all work areas ",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Prohibition signs are posted at relevant locations and are clearly visible",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Warning signs for hazardous areas, hot surfaces and moving machinery are in place ",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Safety signs are in local language understood by the workforce ",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 5,
                  question:
                    "Safety notice board is maintained with current information, emergency contacts and safety statistics",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 4,
              title: "RISKS RELATED TO EMERGENCY EXITS & ESCAPE ROUTES",
              questions: [
                {
                  id: 1,
                  question:
                    "Emergency exit doors are clearly marked, unobstructed and open outward freely",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Exit route signs are illuminated or phosphorescent and visible from all directions",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Escape routes are free from storage, equipment or any obstruction at all times ",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Emergency exit doors are not locked or bolted during working hours",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 5,
              title: "RISKS RELATED TO STAIRS, PLATFORMS & FIXED ACCESS",
              questions: [
                {
                  id: 1,
                  question:
                    "All staircases have handrails on both sides and treads are in good condition",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Fixed platforms and mezzanine floors have guardrails and toe boards on all open sides",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Access to elevated areas is through designated fixed staircases only",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Anti-slip nosings or strips are present on staircase treads",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 6,
              title: "RISKS RELATED TO GUARDRAILS & FLOOR OPENINGS",
              questions: [
                {
                  id: 1,
                  question:
                    "All floor openings, pits and manholes are covered with flush fitting covers or guarded with railings",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Guardrails are of adequate height, structurally sound and free from damage ",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Temporary removal of any guardrail or cover is not observed without compensatory protection ",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Edge protection is in place at all elevated work areas and loading bays",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 7,
              title: "RISKS RELATED TO ASSEMBLY POINTS & EMERGENCY INFRASTRUCTURE",
              questions: [
                {
                  id: 1,
                  question:
                    "Assembly point is clearly identified, signed and adequate in size for all workers on site",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Emergency contact numbers are displayed prominently at multiple locations across the site",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Site map showing emergency exits, assembly points and fire equipment locations is displayed (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Emergency siren or alarm is audible across all areas of the site (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 8,
              title: "RISKS RELATED TO HOUSEKEEPING & WASTE MANAGEMENT",
              questions: [
                {
                  id: 1,
                  question:
                    "All work areas are clean, tidy and free from unnecessary accumulation of material or scrap",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Waste bins are provided at adequate locations, clearly labeled and regularly emptied",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Waste segregation is practiced with separate bins for general, hazardous and recyclable waste",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "No food or beverages are observed in work areas or near chemical storage ",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 5,
                  question:
                    "Housekeeping inspection is conducted at defined frequency and records are available (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 9,
              title: "RISKS RELATED TO DRINKING WATER & REST FACILITIES",
              questions: [
                {
                  id: 1,
                  question:
                    "Drinking water is available at accessible points, covered, clean and potable",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Drinking water points are located away from chemical storage, waste areas and toilets",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Water storage tanks are cleaned at defined intervals and records are maintained (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Rest shelters with adequate seating and shade are available near work areas",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },


          ],
        },
      ]
    );
  });

  // ================= PREVENT PLAN (NEW ADDED) =================
  const [preventPlanSections, setPreventPlanSections] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("reportData")) || {};
    return (
      stored.preventPlanSections || [
        {
          id: 1,
          title: "PREVENTIVE ACTION nhi hoo rha kya PLAN",
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
      ]
    );
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
                          : q,
                      ),
                    }
                  : sub,
              ),
            }
          : section,
      ),
    );
  };

  // 🔥 SAVE (Editable) - PREVENT PLAN (SAME LOGIC JUST STATE CHANGE)
  const updatePreventPlanStatus = (
    sectionId,
    subId,
    questionId,
    status,
    data,
  ) => {
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
                          : q,
                      ),
                    }
                  : sub,
              ),
            }
          : section,
      ),
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
                        q.id === questionId ? { ...q, isSynced: true } : q,
                      ),
                    }
                  : sub,
              ),
            }
          : section,
      ),
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
                        q.id === questionId ? { ...q, isSynced: true } : q,
                      ),
                    }
                  : sub,
              ),
            }
          : section,
      ),
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
                              ? Math.max(...sub.questions.map((q) => q.id)) + 1
                              : 1,
                          question: questionText,
                          status: "na",
                          isSynced: false,
                          images: [],
                          description: "",
                        },
                      ],
                    }
                  : sub,
              ),
            }
          : section,
      ),
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
                              ? Math.max(...sub.questions.map((q) => q.id)) + 1
                              : 1,
                          question: questionText,
                          status: "na",
                          isSynced: false,
                          images: [],
                          description: "",
                        },
                      ],
                    }
                  : sub,
              ),
            }
          : section,
      ),
    );
  };

  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem("reportData")) || {};

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
        addNewPreventPlanQuestion,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
