import React, { useState } from "react";
import "./style.css";

function Scheduler() {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState(""); // 추가

  const addEvent = () => {
    if (!title || !date || !time) return;
    setEvents([
      ...events,
      { id: Date.now(), title, date, time }
    ]);
    setTitle("");
    setDate("");
    setTime("");
  };

  const removeEvent = (id) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  return (
    <div className="scheduler-container">
      <h1>스케줄러</h1>

      <div className="scheduler-form">
        <input
          type="text"
          placeholder="일정 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button onClick={addEvent}>추가</button>
      </div>

      <div className="scheduler-list">
        {events.length === 0 ? (
          <p>등록된 일정이 없습니다.</p>
        ) : (
          <ul>
            {events.map((e) => (
              <li key={e.id}>
                <span>{e.date} {e.time} - {e.title}</span>
                <button onClick={() => removeEvent(e.id)}>삭제</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Scheduler;
