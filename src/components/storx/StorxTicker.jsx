//fetch the storx list

import { useEffect } from "react"
import { getAllStorx } from "../../services/storxService"
import { useState } from "react"


export const StorxTicker = () => {

    const [allStorx, setAllStorx] = useState([])

    const getAndSetAllStorx = () => {
        getAllStorx().then((storxArray) => {
            setAllStorx(storxArray)
        })
    }

    useEffect(() => {
        getAndSetAllStorx()
    }, [])

    return (
        <div className="storx-container">
            <h2>Storx Ticker</h2>
        
        <article className="storx">
            {allStorx.map((storxObj) => {
                 console.log(storxObj.image);
                return (
                    <section key={storxObj.id}>
                        <img className="storx-img" src={storxObj.image} alt="Storx Image" />
                        <footer>
                            <div className="storx-info">Responses: # - Response Types</div>
                            <div className="button-container">Button Placeholder</div>
                        </footer>
                    </section>
                )
            })}
        </article>
        </div>
    )

}
//useState to set the list
//useEffect hook to call the render

//render the storx list
//render search bar
//render filter ddm
//render "Add Response" button that navigates to the response view under each item in the list
//render a display of types of responses and the response count under each item in the list

//clicking on a Storx should navigate to the Storx view