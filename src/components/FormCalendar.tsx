import { memo } from "react";

const DatePicker = memo(({ selectedDate, onDateChange }: any) => {
  return <input type="date" value={selectedDate} onChange={onDateChange} />;
});

const FormCalendar = ({
  dateStart,
  dateEnd,
  getDateEnd,
  calculateDays,
}: any) => {
  return (
    <div className="d-flex">
      <div>
        <DatePicker selectedDate={dateStart} />
      </div>
      <div>
        <DatePicker
          selectedDate={dateEnd}
          onDateChange={getDateEnd}
          onClick={() => calculateDays(dateStart, dateEnd)}
        />
      </div>
    </div>
  );
};

export default FormCalendar;
