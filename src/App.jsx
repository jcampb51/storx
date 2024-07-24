import { useEffect, useState } from "react";
import { EditStorx } from "./components/storx/EditStorx";
import { StorxTicker } from "./components/storx/StorxTicker";
import { getAllStorx } from "./services/storxService"; // Adjust the import path as necessary
import { getAllTypes } from "./services/typeService";
import { CreateStorx } from "./components/storx/CreateStorx";

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
      <CreateStorx allTypes={allTypes} />
      <EditStorx allStorx={allStorx} allTypes={allTypes} />
      <StorxTicker allStorx={allStorx} />
    </div>
  );
};

