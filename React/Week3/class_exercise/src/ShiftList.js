import React from "react";

function ShiftList({ shifts, deleteShift }) {
  const shiftItems = shifts.map((shift) => (
    <tr key={shift._id}>
      <td>{shift.employeeName}</td>
      <td>{new Date(shift.startTime).toLocaleString()}</td>
      <td>{new Date(shift.endTime).toLocaleString()}</td>
      <td>
        {(
          (new Date(shift.endTime) - new Date(shift.startTime)) /
          3600000
        ).toFixed(2)}
      </td>
      <td>
        $
        {(
          ((new Date(shift.endTime) - new Date(shift.startTime)) / 3600000) *
          shift.hourlyRate
        ).toFixed(2)}
      </td>
      <td>
        <button onClick={() => deleteShift(shift._id)}>Delete</button>
      </td>
    </tr>
  ));

  return (
    <div>
      <h2>Shift List</h2>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Total Hours</th>
            <th>Price for Shift</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{shiftItems}</tbody>
      </table>
    </div>
  );
}

export default ShiftList;
