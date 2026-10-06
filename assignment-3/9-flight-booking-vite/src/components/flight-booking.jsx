import React, { useState } from "react";

const FlightBooking = () => {
  // 1. Hooks must be declared inside the component function
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [message, setMessage] = useState("");

  // 2. Wrap the booking logic inside the handler function called by the button
  const handleBooking = () => {
    if (!departure || !returnDate) {
      setMessage("Please select both dates.");
    } else if (returnDate < departure) {
      setMessage("Return date must be after departure date.");
    } else {
      setMessage(`Flight booked! Departure: ${departure}, Return: ${returnDate}`);
    }
  };

  return (
    <div>
      <h2>Flight Booking</h2>
      <div>
        <label htmlFor="departure">Departure Date: </label>
        <input
          type="date"
          id="departure"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
        />
      </div>
      <hr />
      <div>
        <label htmlFor="returnDate">Return Date: </label>
        <input
          type="date"
          id="returnDate"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />
      </div>
      <hr />
      <div>
        {/* The function is now properly linked here */}
        <button onClick={handleBooking}>Book Flight</button>
        {message && (
          <div style={{ color: "red", marginTop: "10px" }}>
            {message}
          </div>
        )}
      </div>
      <hr />
    </div>
  );
};

export default FlightBooking;
