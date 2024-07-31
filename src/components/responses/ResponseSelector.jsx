import { useEffect, useState } from "react"
import { getAllStorx, getStorxById } from "../../services/storxService"
import { postResponse } from "../../services/responseService"


export const ResponseSelector = ({ currentUser }) => {
    const [responseTarget, setResponseTarget]  = useState({})
    const [responseSelection, setResponseSelection] = useState({})
    const [responseList, setResponseList] = useState([])
    const [allChoices, setAllChoices] = useState([])
    const [responseClickId, setResponseClickId] = useState({})

    useEffect(() => {
        getStorxById(2).then(storx => {
            setResponseTarget(storx)
        })
    },[])

    useEffect(() => {
        if (responseClickId) {
            getStorxById(responseClickId).then(storx => {
                setResponseSelection(storx);
            }).catch(error => {
                console.error('Failed to fetch Storx:', error);
            });
        }
    }, [responseClickId]);  // This effect triggers when responseClickId changes
    

    useEffect(() => {
        getAllStorx().then(data => {
          setAllChoices(data);
        });
        
      }, []);

      useEffect(() => {
        const choices = allChoices.filter(responseArray => 
            responseArray.id !== responseTarget.id && 
            responseArray.userId !== responseTarget.userId && 
            responseArray.id !== responseSelection.id && 
            responseArray.image !== responseTarget.image
        );
        setResponseList(choices);
    }, [allChoices, responseTarget, responseSelection]);  // Include all dependencies used inside the effect
    

    const handleResponseClick = (storxId) => {
        setResponseClickId(storxId);
    };
    
    const handleRespond = () => {
        const response = {
            userId: currentUser.id,
            targetStorxId: responseTarget.id,
            responseStorxId: responseSelection.id
        };
    
        postResponse(response).then(createdResponse => {
            console.log('Response created:', createdResponse);
            // Optional: Do something after the response is created, e.g., show a notification or redirect the user
        }).catch(error => {
            console.error('Error posting response:', error);
        });
    };
    

    return (
        <>
        <article className="response-target">
            <h2>Target Storx</h2>
            <div className="response-image">
                <img src={responseTarget?.image} alt="Target image" />
            </div>
        </article>
        <div className="response-selection">
            <h2>Selected Response</h2>
            <div className="response-image">
                <img src={responseSelection?.image} alt="Response image" />
            </div>
            <button onClick={handleRespond} disabled={!responseTarget.id || !responseSelection.id}>
                Respond
            </button>

        </div>
        <div className="response-list">
            <h2>Response List</h2>
            {responseList?.map((storx) => (
                <div className="response-image" onClick={() => handleResponseClick(storx.id)}>
                    <img src={storx?.image} alt="Response image" />
                </div>
            ))}
        </div>
        </>
    )
}

//needs to fetch the Storx list

//useState hook to set the response Storx

//useEffect to handle the change in selection


// useEffect(() => {
        
// },[])

