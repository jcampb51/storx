import { useEffect, useState } from "react";
import { EditStorx } from "./components/storx/EditStorx";
import { StorxTicker } from "./components/storx/StorxTicker";
import { getAllStorx } from "./services/storxService"; // Adjust the import path as necessary
import { getAllTypes } from "./services/typeService";

export const App = () => {
  const [allStorx, setAllStorx] = useState([]);
  const [allTypes, setAllTypes] = useState([])

  const getAndSetAllStorx = () => {
    getAllStorx().then((storxArray) => {
      setAllStorx(storxArray);
    });
  };

  const getAndSetAllTypes = () => {
    getAllTypes().then((typesArray) => {
      setAllTypes(typesArray)
    })
  }

  useEffect(() => {
    getAndSetAllStorx();
  }, []);

  useEffect(() => {
    getAndSetAllTypes()
  }, [])

  return (
    <div>
      <EditStorx allStorx={allStorx} allTypes={allTypes} />
      <StorxTicker allStorx={allStorx} />
    </div>
  );
};

