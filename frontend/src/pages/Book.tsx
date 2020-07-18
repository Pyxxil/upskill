import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface OwnProps {
  classId: number;
}

type BookProps = OwnProps;

const isFib = (n: number): Boolean => {
  return ([1, 2, 3, 5, 8, 13, 21].find((v) => v === n) && true) || false;
};

const Book = (props: BookProps) => {
  const [date, setDate] = useState(new Date());
  const [booked, setBooked] = useState(false);

  if (booked) {
    return <div>You have now successfully booked {props.classId}!</div>;
  }

  return (
    <div>
      <Calendar
        value={date}
        onChange={(d) => setDate(Array.isArray(d) ? d[0] : d)}
        tileContent={(d) =>
          d.date.getUTCDay() === 1 || d.date.getUTCDay() === 3 ? (
            <p style={{ color: "green" }}>A</p>
          ) : (
            <p style={{ color: "red" }}>N/A</p>
          )
        }
      />

      <button
        onClick={() => setBooked(true)}
        disabled={date.getUTCDay() !== 1 && date.getUTCDay() !== 3}
      >
        Book
      </button>
    </div>
  );
};

export default Book;
