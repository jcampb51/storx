//fetch the storx list

//useState to set the list
//useEffect hook to call the render

//passed the user prop

//render the user's storx list
const [userStorx, setUserStorx] = useState([]); // Corrected: Added this state

useEffect(() => {
    const filteredStorx = allStorx.filter(storx => storx.userId === currentUser?.id);
    setUserStorx(filteredStorx);
  }, [allStorx, currentUser]);

//render search bar
//render filter ddm
//render "edit" button that navigates to the edit storx view under each item in the list
//render a display of types of responses and the response count under each item in the list

//clicking on a Storx should navigate to the User's Storx view