import React, { useState, useEffect } from "react";
import ShiftForm from "./ShiftForm";
import ShiftList from "./ShiftList";

function TimeRegistrationApp() {
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    // fetch data from database using API
    const fetchData = async () => {
      const response = await fetch("/api/shifts");
      const data = await response.json();
      setShifts(data);
    };
    fetchData();
  }, []);

  const addShift = async (shift) => {
    // add shift to database using API
    const response = await fetch("/api/shifts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(shift),
    });
    const data = await response.json();
    setShifts([...shifts, data]);
  };

  const deleteShift = async (id) => {
    // delete shift from database using API
    await fetch(`/api/shifts/${id}`, {
      method: "DELETE",
    });
    setShifts(shifts.filter((shift) => shift._id !== id));
  };

  return (
    <div>
      <h1>Time Registration App</h1>
      <ShiftForm addShift={addShift} />
      <ShiftList shifts={shifts} deleteShift={deleteShift} />
    </div>
  );
}

export default TimeRegistrationApp;
