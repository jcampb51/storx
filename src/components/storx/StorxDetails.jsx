//show the navbar

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const StorxDetails = () => {
    const [displayStorx, setDisplayStorx] = useState({})
    const { id } = useParams()

    const baseURL = "http://127.0.0.1:5173/"
    
    useEffect(() => {
        // Remove baseURL if not necessary
        const fetchStorxById = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8088/storx/${id}?_expand=type&_expand=user`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
            const data = await response.json();
        setDisplayStorx(data);
        } catch (error) {
            console.error("Failed to fetch Storx:", error);
        }
        };

      
        if (id) {
            fetchStorxById();
            console.log("ta da")
        }
      }, [id])

    return (
        <>
        <article className="storx-item">
            <img src={baseURL+displayStorx?.image}/>
            <button>Add Response</button>
        </article>
        <article className="storx-stats">
            <h2>Stats</h2>
            <p>Type: {displayStorx?.type?.name}</p>
            <p>Response: place holder</p>
            <p>Times Used: place holder</p>
            <p>Created by: {displayStorx?.user?.username}</p>
        </article>
        </>
    )
}

//render the selected Storx image
//render count and response widget
//render "Add Response" button
//render stat bubble with the Type, Number of Responses, Times Used, and the creator's user name
//clicking on the creator's username should navigate to that user's profile view
//clicking on responses should navigate to that storx's responses view

// useEffect (() => {
        
// }, [])
