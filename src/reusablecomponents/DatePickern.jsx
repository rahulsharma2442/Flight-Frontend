/* eslint-disable react/prop-types */
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";

export const DatePickerComp = ({ customClass }) => {
  const [startDate, setStartDate] = useState(new Date());
    console.log(customClass);
  return (
    <div className={`custom-date-picker ${customClass}`}>
      <DatePicker
        minDate={new Date()}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};
