import React, { useEffect, useState } from 'react';

const useEvents = () => {
    const [events, setEvents] = useState()
    const [isLoading, setIsLoading] = useState(true)
    // console.log(isLoading);

    useEffect(() => {
        
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(events=>{
                // console.log(events);
                setEvents(events)
                setIsLoading(false)
            })
    }, [])


    return ([
        events,
        setEvents,
        isLoading
    ]

    );
};


export default useEvents;