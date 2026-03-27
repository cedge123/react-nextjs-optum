"use client"; 
import { useEffect, useState, JSX  } from "react";
import { sayHello } from "../actions/hello";


type SearchSuppliersActionsProps={
    suppliers:(q:string)=> Promise<JSX.Element>
}

export default function SearchSuppliersActions({suppliers}:SearchSuppliersActionsProps) {
  const [searchText, setSearchText] = useState("");
  const [messageView,setMessageView] = useState<JSX.Element>();
  const [supplierView,setsupplierView] = useState<JSX.Element>();

  async function search() {
      const result = await sayHello(searchText);
      setMessageView(result)
      const suppliersJSX = await suppliers(searchText);
      setsupplierView(suppliersJSX);
  }

  useEffect(()=>{

    async function getSuppliers() {
        const suppliersJSX = await suppliers("");
        setsupplierView(suppliersJSX);
    }
    getSuppliers();

  },[]);

  return (
    <div>
      <input
        className="form-control"
        type="search"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <br />
      <button className="btn btn-success" onClick={search}>
        Search
      </button>
      {searchText ? (
        <div className="alert alert-info">Searching for {searchText}</div>
      ) : null}
      <div>{messageView}</div>
      <div>{supplierView}</div>
    </div>
  );
}