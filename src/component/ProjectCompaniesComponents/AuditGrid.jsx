import React from "react";

export default function AuditGrid({
  audits,
  selectedAudit,
  setSelectedAudit,
}) {
  // ✅ Only these audits allowed
  const allowedAudits = [
    "SAFETY AUDIT(IS 14489)",
    "QUALITY AUDIT",
  ];

  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="grid grid-cols-2 gap-4">
        {audits.map((audit, index) => {
          const isAllowed = allowedAudits.includes(audit);

          return (
            <div
              key={index}
              onClick={() => {
                if (isAllowed) {
                  setSelectedAudit(audit);
                }
              }}
              className={`p-4 rounded-lg border transition-all duration-300
                ${
                  !isAllowed
                    ? "opacity-40 pointer-events-none cursor-not-allowed"
                    : "cursor-pointer hover:shadow-md"
                }
                ${
                  selectedAudit === audit
                    ? "bg-black text-white border-black"
                    : "bg-white"
                }`}
            >
              {audit}
            </div>
          );
        })}
      </div>
    </div>
  );
}