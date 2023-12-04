// Calendar.js
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = () => {
  return (
    <div>
      <h1>My Calendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: 'Event 1', date: '2023-12-01' },
          { title: 'Event 2', date: '2023-12-10' },
          // Add more events as needed
        ]}
      />
    </div>
  );
};

export default Calendar;
