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
    <div className="flex-1 p-4 sm:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
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
              className={`lg:p-4 md:p-2 sm:p-5 rounded-md border transition-all duration-300 lg:text-[16px] md:text-[10px] break-words
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