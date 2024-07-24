//fetch the storx list

export const StorxTicker = ({ allStorx }) => {
    return (
      <div className="storx-container">
        <h2>Storx Ticker</h2>
        <article className="storx">
          {allStorx.map((storxObj) => {
            return (
              <section key={storxObj.id}>
                <img className="storx-img" src={storxObj.image} alt="Storx Image" />
                <footer>
                  <div className="storx-info">Responses: # - Response Types</div>
                  <div className="button-container">Button Placeholder</div>
                </footer>
              </section>
            );
          })}
        </article>
      </div>
    );
  };
  




//render search bar
//render filter ddm
//render "Add Response" button that navigates to the response view under each item in the list
//render a display of types of responses and the response count under each item in the list

//clicking on a Storx should navigate to the Storx view