import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export default function ServiceGrid({
  services,
  checkedServices,
  setCheckedServices,
  setActiveServiceIndex,
  setShowModal,
}) {
  const handleToggleService = (index, service) => {
    if (service.title === "") {
      setActiveServiceIndex(index);
      setShowModal(true);
      return;
    }

    if (checkedServices.includes(index)) {
      // 🔥 UNCHECK
      setCheckedServices((prev) => prev.filter((item) => item !== index));
    } else {
      // 🔥 CHECK
      setCheckedServices((prev) => [...prev, index]);
    }
  };

  return (
    <div className="flex-1 p-6">
      <div className="grid gap-6 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 max-w-6xl w-full">
        {services.map((service, index) => {
          const isChecked = checkedServices.includes(index);

          return (
            <div
              key={index}
              onClick={() => handleToggleService(index, service)}
              className="relative bg-white rounded-xl shadow-sm p-8 text-center cursor-pointer transition-all duration-300"
            >
              {isChecked && (
                <div className="absolute top-4 left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                  <IoCheckmarkCircleOutline className="w-8 h-8" />
                </div>
              )}

              <div className="text-gray-600 mb-3 sm:mb-4 flex justify-center">
                {React.cloneElement(service.icon, {
                  className:
                    "w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11",
                })}
              </div>

              <h3
                className="text-gray-700 font-medium 
               lg:text-sm md:text-[14px] sm:text-base 
               leading-relaxed break-words text-center"
              >
                {service.title}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
