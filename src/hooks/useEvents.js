import React, { useEffect, useState } from 'react';

const useEvents = () => {
    const [events, setEvents] = useState()


    useEffect(() => {
        fetch('https://localhost:5000/events')
            .then(res => res.json())
            .then(events=>{
                console.log(events);
                setEvents(events)
            })
    }, [])


    return ([
        events,
        setEvents
    ]

    );
};

export default useEvents;