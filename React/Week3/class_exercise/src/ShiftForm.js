import React, { useState } from "react";

function ShiftForm({ addShift }) {
  const [employeeName, setEmployeeName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [shiftOverview, setShiftOverview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const shift = {
      employeeName,
      startTime,
      endTime,
      shiftOverview,
    };
    addShift(shift);
    setEmployeeName("");
    setStartTime("");
    setEndTime("");
    setShiftOverview("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit Shift</h2>
      <div>
        <label htmlFor="employeeName">Employee Name:</label>
        <input
          type="text"
          id="employeeName"
          value={employeeName}
          placeholder="Please write your name"
          onChange={(e) => setEmployeeName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="startTime">Start Time:</label>
        <input
          type="datetime-local"
          id="startTime"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="endTime">End Time:</label>
        <input
          type="datetime-local"
          id="endTime"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="shiftOverview">Shift Overview:</label>
        <textarea
          id="shiftOverview"
          value={shiftOverview}
          onChange={(e) => setShiftOverview(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ShiftForm;
