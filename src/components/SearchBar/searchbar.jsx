import { useState } from "react";
import { useRef } from "react";
import '../SearchBar/searchbar.css'

export function Search(input, collaborator, select1, select2) {
    console.log(input);
    console.log(select1);
    console.log(select2);
   console.log(makeSearch(input, collaborator, select1, select2));
}

export default function SearchBar() {

    
    const SearchValue = useRef ("");
    const [select1, setSelect1] = useState ("name");
    const [select2, setSelect2] = useState ("all");

    function Onsearch (e) {
        SearchValue.current = e.target.value;
        makeSearch(SearchValue, collaboraters, select1, select2);
        console.log(select1, select2);
    };

    return(
        <div className="container">
        <form action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden">Search</span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Search"
                name="s"
                onChange={(e) => Onsearch(e) }
            />
            <label className="ms-3" htmlFor="" id="inputSearch">Rechercher par</label> 
            <select className="ms-3" name="select1" id="selectSearch1" onChange={(e) => setSelect1(e.target.value) }>
                <option value="nom">Nom</option>
                <option value="place">Location</option>
            </select>
            <label className="ms-3 me-3" htmlFor="">Catégory</label> 
            <select name="select2" id="selectSearch2" onChange={(e) => setSelect2(e.target.value) }>
                <option value="Marketing">Marketing</option>
                <option value="Client">Client</option>
                <option value="Technique">Technique</option>
            </select>
        </form>
        </div>
    );
}