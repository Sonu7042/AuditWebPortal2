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
              title:
                "RISKS RELATED TO ASSEMBLY POINTS & EMERGENCY INFRASTRUCTURE",
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

            {
              id: 10,
              title: "RISKS RELATED TO SANITATION & HYGIENE FACILITIES",
              questions: [
                {
                  id: 1,
                  question:
                    "Toilets and urinals are adequate in number relative to workforce strength",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Sanitation facilities are clean, functional and maintained in good condition",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Separate toilet facilities are provided for male and female workers",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Hand washing stations with soap are available near toilet facilities and food areas",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 5,
                  question:
                    "Changing rooms with lockers are available and accessible to workers",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 11,
              title: "RISKS RELATED TO SITE SECURITY & ACCESS CONTROL",
              questions: [
                {
                  id: 1,
                  question:
                    "Entry and exit points are controlled and a register of all persons on site is maintained",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Unauthorized persons are not observed in restricted or hazardous areas",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Visitors are issued PPE and briefed on site rules before entry",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Perimeter fencing or boundary is intact and adequate to prevent unauthorized entry",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 12,
              title: "RISKS RELATED TO OUTDOOR & YARD LIGHTING",
              questions: [
                {
                  id: 1,
                  question:
                    "Outdoor yards, parking areas and material storage areas have adequate lighting for safe movement",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Internal roads and vehicle movement areas are adequately lit during night operations (Applicable if night shift selected)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Lighting in loading and unloading areas is sufficient for safe operations during all shifts",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },
          ],
        },

        {
          id: 2,
          title: "LABOUR & WORKFORCE MANAGEMENT",
          subSections: [
            {
              id: 1,
              title: "RISKS RELATED TO WORKER IDENTITY & GATE CONTROL",
              questions: [
                {
                  id: 1,
                  question:
                    "All workers on site are issued identity cards and are carrying them during work hours",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Entry and exit register is maintained with accurate details of all persons on",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Contract workers are registered separately with contractor name and deployment area noted",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "No unauthorized or unregistered person is observed working on site",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 2,
              title: "RISKS RELATED TO SAFETY INDUCTION",
              questions: [
                {
                  id: 1,
                  question:
                    "Safety induction records are available for every worker currently deployed on site",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Induction covers site rules, emergency procedure, PPE requirements and hazard awareness",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Induction is conducted in language understood by the worker",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Contractor and visitor induction records are maintained separately (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 5,
                  question:
                    "Refresher induction is conducted at defined intervals for long-term workers (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 3,
              title: "RISKS RELATED TO TRAINING & COMPETENCY",
              questions: [
                {
                  id: 1,
                  question:
                    "Training records are available for all workers showing topics covered and dates",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Workers engaged in high risk tasks hold valid competency certificates (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Supervisors are trained in safety management and their training records are available (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Training is conducted in local language and worker understanding is assessed",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 5,
                  question:
                    "Retraining is conducted when new hazards, processes or equipment are introduced (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 4,
              title: "RISKS RELATED TO SUPERVISION & DEPLOYMENT",
              questions: [
                {
                  id: 1,
                  question:
                    "Adequate number of supervisors are deployed relative to number of workers on site",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Supervisors are identifiable by vest, helmet colour or badge",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "No high risk work is observed being carried out without supervision",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Supervisors are aware of their safety responsibilities when asked during audit",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 5,
              title: "RISKS RELATED TO CONTRACTOR SAFETY MANAGEMENT",
              questions: [
                {
                  id: 1,
                  question:
                    "Contractor safety agreement or HSE clauses are part of the contract document",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Contractor has submitted safety plan or method statement before starting work",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Contractor workers are covered under insurance and records are available",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Contractor safety performance is monitored and records of safety meetings are maintained",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 6,
              title: "RISKS RELATED TO VISITOR & THIRD PARTY MANAGEMENT",
              questions: [
                {
                  id: 1,
                  question:
                    "Visitors are registered, issued PPE and accompanied by authorized person at all times",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Visitors are briefed on emergency procedure and assembly point before entering site 0",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Third party service personnel are treated as contractors and covered under induction process",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 7,
              title: "RISKS RELATED TO PPE AVAILABILITY & USE",
              questions: [
                {
                  id: 1,
                  question:
                    "Required PPE is available at point of use and issued to workers without delay",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Workers are observed wearing correct PPE for their task without prompting during audit walk",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "PPE is in good condition — no damaged, worn out or ill-fitting PPE is observed in use",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "PPE storage and issue system is in place and replacement procedure is defined",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 5,
                  question:
                    "PPE selected conforms to relevant Indian or international standard (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 6,
                  question:
                    "Contractor workers are provided with required PPE and compliance is enforced",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 8,
              title: "RISKS RELATED TO WORKING HOURS & SHIFT MANAGEMENT",
              questions: [
                {
                  id: 1,
                  question:
                    "Working hours register is maintained and no worker is observed working beyond permissible hours",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Shift handover procedure is followed and incoming shift is briefed on ongoing hazards",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Overtime records are maintained and excessive overtime is not observed without authorization",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 9,
              title: "RISKS RELATED TO NIGHT SHIFT OPERATIONS",
              questions: [
                {
                  id: 1,
                  question:
                    "Adequate supervision is maintained during night shift operations",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "All safety facilities including first aid, emergency lighting and communication are functional during night shift",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Female workers on night shift are provided with legally required facilities and protection as per applicable law",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Security arrangements are adequate during night shift hours",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 10,
              title: "RISKS RELATED TO FATIGUE & WORKER FITNESS",
              questions: [
                {
                  id: 1,
                  question:
                    "Workers showing signs of fatigue, illness or impairment are not observed operating machinery or doing high risk work",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Adequate rest breaks are provided during long shifts and records are available",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Fit for work assessment is conducted for workers returning after illness or injury",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 11,
              title: "RISKS RELATED TO WORKER WELFARE & GRIEVANCE",
              questions: [
                {
                  id: 1,
                  question:
                    "Canteen or lunch area is clean, maintained separately from work areas and chemical storage",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Workers are aware of the grievance reporting mechanism and it is accessible to all",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "No evidence of harassment, intimidation or punishment for reporting safety concerns is observed",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Worker welfare amenities including lockers, rest areas and canteen are adequate for workforce strength",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 12,
              title: "RISKS RELATED TO SAFETY CULTURE & WORKER PARTICIPATION",
              questions: [
                {
                  id: 1,
                  question:
                    "Toolbox talks are conducted before work commencement and attendance records are maintained",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Workers can explain site emergency procedure and assembly point location when asked",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Near miss reporting system is active and workers are aware of how to report",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Safety suggestions from workers are recorded and responses are communicated back",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 5,
                  question:
                    "Safety committee meetings are held at defined frequency and minutes are available (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },
          ],
        },

        {
          id: 3,
          title: "OCCUPATIONAL HEALTH & HYGIENE",
          subSections: [
            {
              id: 1,
              title:
                "RISKS RELATED TO MEDICAL SURVEILLANCE & HEALTH MONITORING",
              questions: [
                {
                  id: 1,
                  question:
                    "Pre-employment medical examination records are available for all workers (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Periodic medical examination is conducted for all workers at defined intervals (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Workers exposed to chemicals, noise, dust or heat are under specific health surveillance program (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Medical records are maintained confidentially and available for review",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 5,
                  question:
                    "Occupational health centre or medical room is available and functional on site",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 2,
              title: "RISKS RELATED TO NOISE & HEARING PROTECTION",
              questions: [
                {
                  id: 1,
                  question:
                    "High noise areas are identified, demarcated and mandatory hearing protection signs are posted",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Noise level monitoring is conducted at defined intervals (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Engineering controls such as enclosures, barriers or dampers are in place to reduce noise at source",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Workers in high noise areas are provided with appropriate hearing protection and are observed using it",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 5,
                  question:
                    "Audiometric testing is conducted for workers regularly exposed to high noise (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 3,
              title: "RISKS RELATED TO DUST, FUMES & AIR QUALITY",
              questions: [
                {
                  id: 1,
                  question:
                    "Dust and fume generating processes have local exhaust ventilation systems installed",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Ventilation systems are maintained and performance tested at defined intervals (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Airborne dust and fume levels are monitored and records are available (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Workers exposed to dust or fumes are provided with appropriate respiratory protection",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 5,
                  question:
                    "No recirculation of contaminated exhaust air back into work areas is observed",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 4,
              title: "RISKS RELATED TO VENTILATION & THERMAL COMFORT",
              questions: [
                {
                  id: 1,
                  question:
                    "Natural or mechanical ventilation is adequate in all enclosed work areas",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Hot air, steam or process emissions are captured at source and not allowed to accumulate",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Work areas with excessive heat have supplementary ventilation or cooling arrangements",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Ventilation maintenance records are available (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 5,
              title: "RISKS RELATED TO ILLUMINATION",
              questions: [
                {
                  id: 1,
                  question:
                    "Illumination levels in all work areas are adequate for the nature of work being performed",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Illumination study has been carried out and records are available (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Lighting fittings are cleaned and replaced at defined intervals to maintain required levels (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Workers performing precision or close work are provided with task lighting where required",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 6,
              title: "RISKS RELATED TO HEAT STRESS & COLD WORK",
              questions: [
                {
                  id: 1,
                  question:
                    "Heat stress risk areas are identified and control measures such as rest schedules, shade and water are in place",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Workers in hot environments are observed taking adequate water and rest breaks",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "New workers are acclimatized gradually before full deployment in hot work areas",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Cold storage or cold work areas have defined entry procedures and duration limits",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 7,
              title: "RISKS RELATED TO ERGONOMICS & MANUAL STRAIN",
              questions: [
                {
                  id: 1,
                  question:
                    "Workstations are assessed for ergonomic risks including awkward posture, repetitive motion and force",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Mechanical aids are available and used for heavy or repetitive lifting tasks",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Workers are trained in safe manual handling techniques (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Ergonomic risk assessment findings are implemented at workstations (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 8,
              title:
                "RISKS RELATED TO PERSONAL HYGIENE & WORKER HEALTH PRACTICES",
              questions: [
                {
                  id: 1,
                  question:
                    "Workers are observed washing hands before eating and after handling chemicals or waste",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Eating, drinking and smoking is restricted to designated areas only",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Workers handling food, chemicals or biological material are provided with appropriate gloves and hygiene facilities",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Pest control is conducted at defined intervals in canteen, kitchen and food storage areas **(Next Due Date: ****)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },
          ],
        },

        {
          id: 4,
          title: "MACHINERY & EQUIPMENT SAFETY",
          subSections: [
            {
              id: 1,
              title: "RISKS RELATED TO MACHINE GUARDING & PHYSICAL SAFEGUARDS",
              questions: [
                {
                  id: 1,
                  question:
                    "All rotating, moving and nip point hazards are guarded with fixed or interlocked guards",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "No machine is observed operating with guard removed or bypassed during audit walk",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Guards are of adequate strength, properly fixed and cannot be easily removed without tool",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Danger zones around machines are clearly marked and workers are not observed entering during operation",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 2,
              title: "RISKS RELATED TO EMERGENCY STOPS & SAFETY DEVICES",
              questions: [
                {
                  id: 1,
                  question:
                    "Emergency stop buttons are provided on all machines, clearly marked in red and accessible",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Emergency stops are tested at defined intervals and records are maintained (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Safety sensors, light curtains and interlocks are functional and tested regularly (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Audible and visual alarms are provided for machine malfunctions and are tested (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 3,
              title: "RISKS RELATED TO PRE-USE INSPECTION & DAILY CHECKS",
              questions: [
                {
                  id: 1,
                  question:
                    "Pre-use inspection checklist is completed daily for all major plant and equipment",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Defective equipment identified during pre-use check is taken out of service immediately",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Pre-use inspection records are maintained and available for last 30 days",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 4,
              title: "RISKS RELATED TO PREVENTIVE MAINTENANCE",
              questions: [
                {
                  id: 1,
                  question:
                    "Preventive maintenance schedule exists for all critical equipment and is being followed",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Maintenance records show servicing is carried out as per schedule (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Breakdown maintenance records are maintained with root cause and action taken noted",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Maintenance work is carried out only by authorized and competent personnel",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 5,
              title: "RISKS RELATED TO LOCKOUT & TAGOUT",
              questions: [
                {
                  id: 1,
                  question:
                    "Documented LOTO procedure is in place and displayed near relevant equipment",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "LOTO devices including locks, tags and hasps are available in adequate quantity",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Workers performing maintenance are observed applying LOTO before starting work",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "No maintenance work on energized or running equipment is observed without LOTO applied",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 5,
                  question:
                    "LOTO training records are available for all maintenance personnel (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 6,
              title: "RISKS RELATED TO DEFECT REPORTING & EQUIPMENT TAGGING",
              questions: [
                {
                  id: 1,
                  question:
                    "Defective equipment is tagged out with a red DO NOT USE tag and physically isolated",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Defect reporting system is in place and workers are aware of how to report",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Tagged out equipment is not observed being used or operated during audit walk",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Green serviceable tags are visible on inspected and approved tools and equipment",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 7,
              title: "RISKS RELATED TO HAND TOOLS & PORTABLE POWER TOOLS",
              questions: [
                {
                  id: 1,
                  question:
                    "Hand tools are in good condition with no cracked handles, mushroomed heads or damaged insulation",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Portable power tools are fitted with correct guards and dead man switches are functional",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Tools are stored in designated locations when not in use",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Non-sparking tools are used in flammable or explosive atmospheres where required",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 8,
              title: "RISKS RELATED TO PRESSURE VESSELS & BOILERS",
              questions: [
                {
                  id: 1,
                  question:
                    "All pressure vessels and boilers have valid inspection certificates from competent authority (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Safety valves, pressure gauges and relief devices are in place, functional and calibrated (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Operating pressure and temperature parameters are displayed on or near the vessel",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Log book for pressure vessel and boiler operations is maintained and updated daily ",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Log book for pressure vessel and boiler operations is maintained and updated daily ",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 9,
              title: "RISKS RELATED TO COMPRESSORS & PNEUMATIC SYSTEMS",
              questions: [
                {
                  id: 1,
                  question:
                    "Compressors have valid inspection certificates and safety relief valves are functional (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Air receivers are inspected and tested at defined intervals (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Compressed air is not used for cleaning body or clothing",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Pneumatic hoses and connections are in good condition and free from damage",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 10,
              title: "RISKS RELATED TO CONVEYOR & AUTOMATED SYSTEMS",
              questions: [
                {
                  id: 1,
                  question:
                    "All conveyor systems have nip point guards, pull cord emergency stops and are functional",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "No worker is observed crossing or passing under moving conveyors without designated crossover points",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Conveyor maintenance and inspection records are available (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Automated systems have adequate safeguarding to prevent accidental activation during maintenance",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 11,
              title:
                "RISKS RELATED TO PLANT LAYOUT & HAZARDOUS AREA CLASSIFICATION",
              questions: [
                {
                  id: 1,
                  question:
                    "Plant layout drawing with hazardous area classification is displayed at appropriate location (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Electrical equipment in classified hazardous zones is of flameproof or intrinsically safe type",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Hazardous zones are clearly demarcated and access is controlled",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "No ignition sources are observed in classified flammable or explosive zones",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            {
              id: 12,
              title: "RISKS RELATED TO NEW EQUIPMENT & MANAGEMENT OF CHANGE",
              questions: [
                {
                  id: 1,
                  question:
                    "New equipment is reviewed for safety before commissioning and approval records are available",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Risk assessment is conducted for new equipment or process changes before introduction",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "P&I diagrams and equipment drawings are updated when changes are made (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Workers are trained on new equipment or changed processes before deployment (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },
          ],
        },

        {
          id: 5,
          title: "ELECTRICAL & ENERGY SAFETY",
          subSections: [
            // 05.01
            {
              id: 1,
              title: "RISKS RELATED TO ELECTRICAL INSTALLATIONS & PANELS",
              questions: [
                {
                  id: 1,
                  question:
                    "All electrical panels and distribution boards are enclosed, labeled and access is restricted to authorized persons only",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "No open wiring, bare conductors or non-standard temporary connections are observed",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Electrical installations are done by licensed electricians and installation records are available",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Rubber mats are placed in front of all electrical panels and switchgear",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 5,
                  question:
                    "Panel doors are closed, latched and free from damage during operation",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 05.02
            {
              id: 2,
              title: "RISKS RELATED TO EARTHING, BONDING & PROTECTIVE DEVICES",
              questions: [
                {
                  id: 1,
                  question:
                    "All electrical equipment and structures are properly earthed and continuity is verifiable",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Earth leakage circuit breakers or RCCBs are installed and tested at all supply points (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "MCBs and fuses are of correct rating and no makeshift or oversized fuses are observed",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Earthing resistance is tested at defined intervals and records are maintained (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 05.03
            {
              id: 3,
              title: "RISKS RELATED TO WIRING & CABLE CONDITIONS",
              questions: [
                {
                  id: 1,
                  question:
                    "No cut, damaged or poorly joined cables are observed anywhere on site",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Cables are routed through conduits or cable trays and not left trailing on floors",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Cables crossing walkways or vehicle routes are protected from mechanical damage",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Cable insulation condition is inspected periodically and records are maintained (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 05.04
            {
              id: 4,
              title: "RISKS RELATED TO TEMPORARY ELECTRICAL ARRANGEMENTS",
              questions: [
                {
                  id: 1,
                  question:
                    "Temporary electrical supply is routed through proper industrial grade cabling",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Extension boards used on site are industrial grade with earthing and overcurrent protection",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "No temporary connections are left unattended or used beyond their intended duration",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Temporary electrical arrangements are inspected before use and records are maintained",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 05.05
            {
              id: 5,
              title:
                "RISKS RELATED TO PORTABLE & HAND-HELD ELECTRICAL EQUIPMENT",
              questions: [
                {
                  id: 1,
                  question:
                    "Portable electrical tools are double insulated or properly earthed",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Portable tools are inspected before each use and defective tools are tagged out immediately",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Portable tool inspection register is maintained (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Reduced voltage or battery operated tools are used in wet or confined areas",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 05.06
            {
              id: 6,
              title: "RISKS RELATED TO OVERHEAD & UNDERGROUND POWER LINES",
              questions: [
                {
                  id: 1,
                  question:
                    "Overhead power line proximity zones are identified and exclusion zones are marked (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Underground cable routes are identified, marked and drawings are available",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "No excavation or drilling is observed near underground cables without cable detection survey",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Warning signs are posted at overhead line crossing points on internal roads",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 05.07
            {
              id: 7,
              title: "RISKS RELATED TO GENERATOR & DG SET SAFETY",
              questions: [
                {
                  id: 1,
                  question:
                    "DG set is installed in a separate ventilated room with adequate fire protection",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "DG set inspection and maintenance records are available (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Fuel storage for DG set is within permitted quantity and stored safely",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Automatic changeover and manual operation of DG set is tested periodically (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 05.08
            {
              id: 8,
              title: "RISKS RELATED TO STATIC ELECTRICITY & BONDING",
              questions: [
                {
                  id: 1,
                  question:
                    "Equipment and processes generating static charge are identified and bonding and earthing is applied",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Bonding cables and earthing connections at chemical transfer points are in good condition",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Anti-static devices are fitted wherever required and tested periodically (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Workers handling flammable liquids are aware of static electricity risks",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 05.09
            {
              id: 9,
              title: "RISKS RELATED TO ENERGY ISOLATION & LOTO FOR ELECTRICAL",
              questions: [
                {
                  id: 1,
                  question:
                    "Electrical isolation procedure is documented and available at point of use",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Individual locks are used by each worker during electrical maintenance work",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "No electrical maintenance work is observed being performed on live equipment without authorization",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Electrical work permit is raised for all electrical maintenance activities",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 05.10
            {
              id: 10,
              title:
                "RISKS RELATED TO ELECTRICAL MAINTENANCE & AUTHORIZED WORK",
              questions: [
                {
                  id: 1,
                  question:
                    "Only authorized and licensed electricians perform electrical installation and maintenance work",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Electrical maintenance records are maintained with date, work done and person responsible",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Periodic inspection of all electrical installations is carried out by competent person (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Thermographic survey of electrical panels and connections is conducted at defined intervals (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },
          ],
        },

        {
          id: 6,
          title: "LIFTING, STORAGE & MATERIAL HANDLING",
          subSections: [
            // 06.01
            {
              id: 1,
              title: "RISKS RELATED TO OVERHEAD CRANES & HOISTS",
              questions: [
                {
                  id: 1,
                  question:
                    "All cranes and hoists have valid third party load test certificate (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Safe working load is clearly marked on crane and hoist structure",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Pre-use inspection of crane is completed by operator before operations begin",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Crane operator holds valid competency certificate (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 5,
                  question:
                    "Crane hook has safety latch in place and is free from cracks or deformation",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 06.02
            {
              id: 2,
              title: "RISKS RELATED TO MOBILE CRANES & LIFTING EQUIPMENT",
              questions: [
                {
                  id: 1,
                  question:
                    "Mobile crane has valid inspection certificate and is operated by certified operator (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Outriggers are fully extended and pads are placed on firm ground before lifting",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Lifting plan is prepared and approved before every critical or complex lift",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Exclusion zone is established around lift area and enforced during operations",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 06.03
            {
              id: 3,
              title: "RISKS RELATED TO RIGGING, SLINGS & LIFTING ACCESSORIES",
              questions: [
                {
                  id: 1,
                  question:
                    "All slings, chains and shackles have rated capacity markings visible",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Lifting accessories are inspected before each use and defective items are removed from service",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Lifting accessories inspection register is maintained (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "No person stands or passes under a suspended load at any time during audit observation",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 06.04
            {
              id: 4,
              title: "RISKS RELATED TO FORKLIFTS & INDUSTRIAL TRUCKS",
              questions: [
                {
                  id: 1,
                  question:
                    "Forklift has valid inspection certificate and daily pre-use check is completed (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Forklift operator holds valid license or competency certificate (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Forklifts are not observed carrying loads beyond rated capacity",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Pedestrian and forklift routes are segregated with physical barriers or markings",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 5,
                  question:
                    "Forklifts are parked in designated areas with forks lowered when not in use",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 06.05
            {
              id: 5,
              title: "RISKS RELATED TO VEHICLE & INTERNAL TRAFFIC MANAGEMENT",
              questions: [
                {
                  id: 1,
                  question:
                    "Internal traffic routes are clearly marked and speed limit signs are posted",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Pedestrian walkways are physically separated from vehicle routes",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Vehicle reversing in congested areas is controlled by trained banksman",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Visiting vehicles are escorted and not allowed to move freely on site",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 06.06
            {
              id: 6,
              title: "RISKS RELATED TO LOADING & UNLOADING OPERATIONS",
              questions: [
                {
                  id: 1,
                  question:
                    "Loading and unloading areas are clearly marked and supervised during operations",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Dock levelers, wheel chocks and vehicle restraints are used during loading operations",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Workers involved in loading and unloading are trained and wearing appropriate PPE",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "No unauthorized persons are observed in loading and unloading zones during operations",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 06.07
            {
              id: 7,
              title: "RISKS RELATED TO MANUAL HANDLING & ERGONOMICS",
              questions: [
                {
                  id: 1,
                  question:
                    "Workers are trained in safe manual handling techniques (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Mechanical aids such as trolleys, pallet jacks and conveyors are available and used for heavy loads",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Maximum single lift weight limits are defined and communicated to workers",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Workers are not observed lifting loads in awkward postures or beyond safe limits",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 06.08
            {
              id: 8,
              title: "RISKS RELATED TO GENERAL MATERIAL STORAGE & STACKING",
              questions: [
                {
                  id: 1,
                  question:
                    "Materials are stored in designated areas only and storage areas are clearly marked",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Stacking height limits are defined and observed in all storage areas",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Racks and shelving are in good condition, load rated and secured to prevent toppling",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Heavy items are stored at lower levels and lighter items at higher levels",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 5,
                  question:
                    "Storage areas are accessible with clear aisles maintained at all times",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 06.09
            {
              id: 9,
              title: "RISKS RELATED TO STORAGE VESSELS & TANK FARM",
              questions: [
                {
                  id: 1,
                  question:
                    "Storage vessels are clearly labeled with contents, capacity and hazard information",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Bunds or dykes are in place around storage vessels and are free from accumulation",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Level indicators, pressure gauges and relief valves are functional and within calibration (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Storage vessels are inspected and tested by competent authority at defined intervals (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 5,
                  question:
                    "Remotely operated isolation valves are functional and accessible in emergency",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 06.10
            {
              id: 10,
              title: "RISKS RELATED TO FLAMMABLE & COMBUSTIBLE STORAGE",
              questions: [
                {
                  id: 1,
                  question:
                    "Flammable materials are stored in designated fireproof or fire resistant storage areas",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Quantity of flammable material in work areas does not exceed one shift requirement",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "No ignition sources are present near flammable storage areas",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Flammable storage areas are ventilated, earthed and fitted with appropriate fire suppression (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 06.11
            {
              id: 11,
              title:
                "RISKS RELATED TO COMPRESSED GAS CYLINDER HANDLING & STORAGE",
              questions: [
                {
                  id: 1,
                  question:
                    "Gas cylinders are stored upright, secured with chains or brackets and segregated by type",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Full and empty cylinders are stored separately and clearly labeled",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Cylinders are protected from heat sources, direct sunlight and physical damage",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Cylinder valve caps are in place when cylinders are not in use",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 5,
                  question:
                    "Valid license for storage of gas cylinders is available (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 06.12
            {
              id: 12,
              title: "RISKS RELATED TO HAZARDOUS MATERIAL TRANSPORTATION",
              questions: [
                {
                  id: 1,
                  question:
                    "Vehicles transporting hazardous materials are labeled with appropriate hazard placards",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Drivers of hazardous material transport vehicles hold valid licenses and training certificates (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Transport emergency cards or TREM cards are available with drivers during transit",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Loading and unloading of hazardous materials follows documented safe procedures",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },
          ],
        },

        {
          id: 7,
          title: "FIRE & EMERGENCY PREPAREDNESS",
          subSections: [
            // 07.01
            {
              id: 1,
              title: "RISKS RELATED TO FIRE PREVENTION & HOUSEKEEPING CONTROLS",
              questions: [
                {
                  id: 1,
                  question:
                    "Combustible waste and scrap is not allowed to accumulate in or near work areas",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Hot work areas have dedicated fire watch person and extinguisher at point of work",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Smoking is restricted to designated areas only and no smoking signs are posted elsewhere",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Fire resistant doors and walls are in good condition and self closing mechanisms are functional",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 07.02
            {
              id: 2,
              title: "RISKS RELATED TO FIRE EXTINGUISHERS",
              questions: [
                {
                  id: 1,
                  question:
                    "Fire extinguishers are adequate in type and quantity for the hazards present in each area",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Fire extinguishers are mounted at designated locations, clearly signed and unobstructed",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Pressure gauge on all extinguishers is in green zone and seal is intact",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Fire extinguishers are within inspection and refilling due date (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 5,
                  question:
                    "Workers in each area know the location and basic operation of fire extinguishers",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 07.03
            {
              id: 3,
              title: "RISKS RELATED TO FIRE HYDRANT & HOSE REEL SYSTEMS",
              questions: [
                {
                  id: 1,
                  question:
                    "Fire hydrant points are accessible, unobstructed and clearly marked",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Hydrant system pressure is maintained and pump operation is tested periodically (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Hose reels are in good condition, fully wound and nozzles are functional",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Dedicated water reservoir for fire fighting is maintained at required capacity (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 5,
                  question:
                    "Alternate power source for fire hydrant pump is available and tested (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 07.04
            {
              id: 4,
              title: "RISKS RELATED TO FIRE DETECTION & ALARM SYSTEMS",
              questions: [
                {
                  id: 1,
                  question:
                    "Fire detection system covers all areas of the facility including storage and server rooms",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Fire alarm system is tested at defined intervals and records are maintained (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Fire alarm is audible in all areas of the facility including outdoor and remote areas",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Manual call points are unobstructed, clearly marked and workers know their locations",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 07.05
            {
              id: 5,
              title: "RISKS RELATED TO SPRINKLER & SUPPRESSION SYSTEMS",
              questions: [
                {
                  id: 1,
                  question:
                    "Sprinkler system covers all designated areas and is free from obstruction below sprinkler heads",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Sprinkler system is inspected and tested at defined intervals (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Fixed suppression systems in special risk areas such as generator room and server room are functional (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 07.06
            {
              id: 6,
              title: "RISKS RELATED TO EMERGENCY RESPONSE PLAN",
              questions: [
                {
                  id: 1,
                  question:
                    "Site specific emergency response plan is documented and available on site",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Emergency response plan covers all credible emergency scenarios for the site",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Emergency response plan is reviewed and updated at defined intervals (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Key personnel roles in emergency response are assigned and persons are trained",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 07.07
            {
              id: 7,
              title: "RISKS RELATED TO EMERGENCY COMMUNICATION SYSTEMS",
              questions: [
                {
                  id: 1,
                  question:
                    "Public address system is available and functional across all plant areas (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Hot line to fire station or emergency services is available and tested (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Emergency communication system has uninterrupted power supply backup",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Emergency contact list is current and posted at control room and security post",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 07.08
            {
              id: 8,
              title: "RISKS RELATED TO EVACUATION & ASSEMBLY MANAGEMENT",
              questions: [
                {
                  id: 1,
                  question:
                    "Evacuation procedure is posted at all work areas in local language",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Assembly points are adequate in number, clearly signed and known to all workers",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Head count procedure at assembly point is defined and practiced during drills",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Evacuation of disabled or injured workers is addressed in the emergency plan",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 07.09
            {
              id: 9,
              title: "RISKS RELATED TO MOCK DRILLS & EMERGENCY EXERCISES",
              questions: [
                {
                  id: 1,
                  question:
                    "Mock drills are conducted at defined intervals covering different emergency scenarios (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Drill records include time taken, observations and improvement actions",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Improvement actions from previous drills are implemented before next drill",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Mutual aid scheme with neighboring industries or local emergency services is established (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 07.10
            {
              id: 10,
              title: "RISKS RELATED TO FIRST AID FACILITIES & EQUIPMENT",
              questions: [
                {
                  id: 1,
                  question:
                    "First aid boxes are available at defined locations, fully stocked and accessible during all working hours",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "First aid box contents are checked and replenished at defined intervals (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "First aid box locations are clearly signed and known to workers in each area",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Stretcher and first aid equipment for serious injury are available on site",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 07.11
            {
              id: 11,
              title: "RISKS RELATED TO FIRST AID PERSONNEL",
              questions: [
                {
                  id: 1,
                  question:
                    "Trained first aider is available on site during all working hours including all shifts",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "First aider name and location is displayed in each work area",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "First aider holds valid first aid certificate (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Adequate number of trained first aiders are available relative to workforce strength",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 07.12
            {
              id: 12,
              title: "RISKS RELATED TO MEDICAL EMERGENCY & AMBULANCE",
              questions: [
                {
                  id: 1,
                  question:
                    "Ambulance or dedicated emergency transport is available on site or on call at all times",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Nearest hospital details including route map and contact numbers are posted at site",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Medical officer or nurse is available on site during all working hours (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Liaison with nearest hospital for emergency treatment is established and documented",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },
          ],
        },

        {
          id: 8,
          title: "HAZARDOUS SUBSTANCES & ENVIRONMENT",
          subSections: [
            // 08.01
            {
              id: 1,
              title: "RISKS RELATED TO CHEMICAL IDENTIFICATION & SDS",
              questions: [
                {
                  id: 1,
                  question:
                    "Safety Data Sheets are available at point of use for all hazardous chemicals used on site",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "SDS are in local language and workers handling chemicals are aware of their contents",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "SDS are current and updated when new chemicals are introduced (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "List of all hazardous chemicals used on site is maintained and current",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 08.02
            {
              id: 2,
              title: "RISKS RELATED TO CHEMICAL LABELING & IDENTIFICATION",
              questions: [
                {
                  id: 1,
                  question:
                    "All chemical containers are labeled with contents, hazard symbols and first aid instructions",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "No unlabeled chemical containers are observed anywhere on site",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Pipeline carrying hazardous chemicals are color coded and flow direction is marked",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Transferred chemicals in secondary containers are labeled immediately after transfer",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 08.03
            {
              id: 3,
              title: "RISKS RELATED TO CHEMICAL HANDLING & USE",
              questions: [
                {
                  id: 1,
                  question:
                    "Workers handling hazardous chemicals are provided with task specific PPE",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Chemical handling procedures are documented and workers are trained on them (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Safe containers are used for movement of small quantities of hazardous chemicals",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Chemical incompatibility is considered in storage and handling arrangements",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 08.04
            {
              id: 4,
              title: "RISKS RELATED TO CHEMICAL STORAGE",
              questions: [
                {
                  id: 1,
                  question:
                    "Chemical storage area is ventilated, bunded and separated from ignition sources",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Incompatible chemicals are stored separately with adequate segregation distance",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Chemical storage quantities do not exceed licensed or permitted limits",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Chemical storage area inspection is conducted at defined intervals (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 08.05
            {
              id: 5,
              title: "RISKS RELATED TO SPILL CONTROL & EMERGENCY RESPONSE",
              questions: [
                {
                  id: 1,
                  question:
                    "Spill kits are available near chemical storage and handling areas and are fully stocked",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Workers are trained in spill response procedures (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Spill containment measures such as bunds and drain covers are in place and functional",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "No evidence of uncontrolled chemical spillage or staining on floors or ground is observed",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 08.06
            {
              id: 6,
              title: "RISKS RELATED TO WASTE SEGREGATION & DISPOSAL",
              questions: [
                {
                  id: 1,
                  question:
                    "Hazardous waste is stored in clearly labeled containers segregated from general waste",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Hazardous waste disposal is through authorized contractors and records are maintained (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Waste storage area is secure, covered and within permitted storage limits",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Waste disposal records and manifests are maintained as required by law",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 08.07
            {
              id: 7,
              title: "RISKS RELATED TO EFFLUENT & WASTEWATER MANAGEMENT",
              questions: [
                {
                  id: 1,
                  question:
                    "Effluent treatment plant is operational and functioning within permitted parameters (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "No discharge of untreated effluent to open ground, drains or water bodies is observed",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Effluent monitoring records are maintained and available (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "ETP approval from competent authority is valid and available (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 08.08
            {
              id: 8,
              title: "RISKS RELATED TO AIR EMISSIONS & STACK MONITORING",
              questions: [
                {
                  id: 1,
                  question:
                    "Stack emissions are monitored at defined intervals and records are available (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Emission control devices such as scrubbers and bag filters are operational and maintained",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Ambient air quality monitoring is conducted at defined intervals (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Dust suppression measures are active in areas generating fugitive dust emissions",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 08.09
            {
              id: 9,
              title: "RISKS RELATED TO ENVIRONMENTAL INCIDENT & SPILL CONTROL",
              questions: [
                {
                  id: 1,
                  question:
                    "Environmental incident reporting procedure is in place and workers are aware of it",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "All environmental incidents including spills and unauthorized discharges are reported and investigated",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Corrective actions from environmental incidents are implemented and verified",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },
          ],
        },

        {
          id: 9,
          title: "PERMITS, PROCEDURES & DOCUMENTATION",
          subSections: [
            // 09.01
            {
              id: 1,
              title:
                "RISKS RELATED TO FACTORY LICENSE & STATUTORY REGISTRATIONS",
              questions: [
                {
                  id: 1,
                  question:
                    "Factory license is obtained, displayed and valid (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Contract labour license is obtained and valid where applicable (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Explosive, petroleum or hazardous substance licenses are obtained where applicable (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Environmental consent to establish and consent to operate are valid (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 5,
                  question:
                    "All statutory registrations are current and available for inspection",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 09.02
            {
              id: 2,
              title: "RISKS RELATED TO STATUTORY REGISTERS & RECORDS",
              questions: [
                {
                  id: 1,
                  question:
                    "All statutory registers required under Factories Act are maintained and up to date",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Accident register is maintained in prescribed form and all reportable accidents are entered",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Register of dangerous occurrences is maintained and entries are current",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Inspection book is available on site for statutory inspector use",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 5,
                  question:
                    "Safety committee meeting minutes are maintained and available (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 09.03
            {
              id: 3,
              title: "RISKS RELATED TO STATUTORY INSPECTIONS & CERTIFICATIONS",
              questions: [
                {
                  id: 1,
                  question:
                    "Lifting equipment third party inspection certificate is valid (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Pressure vessel and boiler inspection certificate from competent authority is valid (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Electrical installation inspection certificate is valid (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Fire NOC from fire department is valid (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 5,
                  question:
                    "Calibration certificates for all measuring and monitoring instruments are valid (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 09.04
            {
              id: 4,
              title: "RISKS RELATED TO WORKER INSURANCE & SOCIAL SECURITY",
              questions: [
                {
                  id: 1,
                  question:
                    "ESIC registration and contribution records are current and available (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "EPFO registration and contribution records are current and available (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Workers compensation insurance policy is valid (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Group accident insurance covering all workers is valid (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 09.05
            {
              id: 5,
              title: "RISKS RELATED TO PERMIT TO WORK SYSTEM",
              questions: [
                {
                  id: 1,
                  question:
                    "PTW system procedure is documented and covers all high risk activities on site",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "All high risk activities observed during audit are covered by valid signed permits",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Permits are displayed at work location and workers are aware of permit conditions",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Completed and cancelled permits are retained as records (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 5,
                  question:
                    "PTW issuer and receiver are trained and competent (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 09.06
            {
              id: 6,
              title: "RISKS RELATED TO HOT WORK PERMIT",
              questions: [
                {
                  id: 1,
                  question:
                    "Hot work permit is raised for all welding, cutting, grinding and open flame activities",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Fire watch is assigned and extinguisher is at point of work during hot work",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Combustibles are removed or protected before hot work commences",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Post hot work fire watch is maintained for defined period after work completion",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 09.07
            {
              id: 7,
              title: "RISKS RELATED TO CONFINED SPACE ENTRY PERMIT",
              questions: [
                {
                  id: 1,
                  question:
                    "Confined space entry permit is raised before every entry into confined space",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Atmospheric testing for oxygen, flammable and toxic gases is conducted before entry (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Standby person is stationed outside confined space during entire entry operation",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Rescue equipment is available and rescue plan is defined before entry",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 09.08
            {
              id: 8,
              title: "RISKS RELATED TO SAFE OPERATING PROCEDURES",
              questions: [
                {
                  id: 1,
                  question:
                    "Written SOPs are available for all routine and high risk operations on site",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "SOPs are available at point of use in language understood by workers",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Workers can describe key steps of SOP for their current task when asked",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "SOPs are reviewed and updated at defined intervals or when incidents occur (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
              ],
            },

            // 09.09
            {
              id: 9,
              title:
                "RISKS RELATED TO SAFETY POLICY & MANAGEMENT DOCUMENTATION",
              questions: [
                {
                  id: 1,
                  question:
                    "Safety policy is displayed, signed by top management and current (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 2,
                  question:
                    "Safety officer appointment order and competency certificate are available (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 3,
                  question:
                    "Site safety plan or HSE plan is available, current and approved (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 4,
                  question:
                    "Legal register identifying applicable safety laws and compliance status is maintained (Next Due Date: ______)",
                  status: "na",
                  isSynced: false,
                  images: [],
                  description: "",
                },
                {
                  id: 5,
                  question:
                    "Records of previous safety audits and inspection findings are available and CAPA status is tracked",
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
