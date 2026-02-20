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
              title: "RISKS RELATED TO MEDICAL SURVEILLANCE & HEALTH MONITORING",
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
                    "— Workers in high noise areas are provided with appropriate hearing protection and are observed using it",
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
              title: "RISKS RELATED TO PERSONAL HYGIENE & WORKER HEALTH PRACTICES",
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
