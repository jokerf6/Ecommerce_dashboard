"use client";
import React, { useState } from "react";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";

export default function DatePickerOverlay() {
  const [isVisible, setIsVisible] = useState(false);

  const showOverlay = () => setIsVisible(true);
  const hideOverlay = () => setIsVisible(false);
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2023, 0, 20),
    to: addDays(new Date(2023, 0, 20), 20),
  });
  return (
    <>
      {/* Button to show the overlay */}
      <Button onClick={showOverlay} className="m-4">
        Show Date Picker
      </Button>

      {/* Overlay with the date picker */}
      {isVisible && (
        <div
          className=" bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-300 h-screen overflow-hidden absolute w-full  top-0 left-0"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          <div className="bg-white p-4 mb-[30px] rounded-lg shadow-lg relative w-fit">
            <Button
              className="absolute top-2 right-2  text-white "
              onClick={hideOverlay}
            >
              X
            </Button>
            {/* ShadCN Calendar (Date Picker) */}
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
              className=" mt-[30px]"
            />
          </div>
        </div>
      )}
    </>
  );
}
