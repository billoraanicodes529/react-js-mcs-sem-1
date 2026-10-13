import { useState } from "react";

const TrainBooking = () => {
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [message, setMessage] = useState("");

  const handleBooking = () => {
    if (!departure || !returnDate) {
      setMessage("Please select both dates.");
    } else if (returnDate <= departure) {
      setMessage("Return date must be greater than departure date.");
    } else {
      setMessage(
        `Train booked! Departure: ${departure}, Return: ${returnDate}`,
      );
    }
  };

  return (
    <div>
      <h2>Train Ticket Booking</h2>

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
        <button onClick={handleBooking}>Book Train</button>

        {message && (
          <div style={{ color: "red", marginTop: "10px" }}>{message}</div>
        )}
      </div>

      <hr />
    </div>
  );
};

export default TrainBooking;
