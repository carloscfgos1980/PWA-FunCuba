// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { memo } from "react";

const DatePicker = memo(({ selectedDate, onDateChange }: any) => {
  return <input type="date" value={selectedDate} onChange={onDateChange} />;
});

const FormCalendar = ({
  dateStart,
  dateEnd,
  getDateStart,
  getDateEnd,
}: any) => {
  return (
    <div className="d-flex">
      <div>
        <DatePicker
          selectedDate={dateStart}
          minDate={dateStart}
          onDateChange={getDateStart}
        />
      </div>
      <div>
        <DatePicker
          selectedDate={dateEnd}
          minDate={dateStart}
          onDateChange={getDateEnd}
        />
      </div>
    </div>
  );
};

export default FormCalendar;
