import { toDate } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({date}) => {
    console.log('date', date)
    return (
        <div>
            <h2>Available Appointments {date.toDateString()}</h2>
        </div>
    );
};

export default AvailableAppointments;