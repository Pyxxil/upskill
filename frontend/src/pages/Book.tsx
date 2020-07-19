import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import "./book.css";

interface OwnProps {
  classId: number;
}

type BookProps = OwnProps;

const Book = (props: BookProps) => {
  const [date, setDate] = useState(new Date());
  const [booked, setBooked] = useState(false);

  if (booked) {
    return (
      <div className="content centered">
        You have now successfully booked {props.classId} for {new Date(date).toDateString()} at 1-2pm!
      </div>
    );
  }

  return (
    <div className="content centered">
      <h1>Make a Booking for Blockchain</h1>
      <div style={{ justifyContent: "center" }}>
        <Calendar
          value={date}
          onChange={(d) => setDate(Array.isArray(d) ? d[0] : d)}
          tileContent={(d) =>
            d.date.getUTCDay() === 1 || d.date.getUTCDay() === 3 ? (
              <p style={{ color: "#65AE5B" }}>Available (1-2pm)</p>
            ) : (
              <p>N/A</p>
            )
          }
        />
      </div>

      <button
        onClick={() => setBooked(true)}
        disabled={date.getUTCDay() !== 1 && date.getUTCDay() !== 3}
        className="pure-button"
      >
        Book
      </button>
    </div>
  );
};

export default Book;
