import { useEffect, useState } from "react";
import { resList } from "../utils/resList";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [listOfRestraunts, SetListOfRestraunts] = useState([]);
    const [searchRestraunt, SetSearchRestraunt] = useState('');
    const [filteredRestrauntList, SetFilteredRestrauntList] = useState([]);

    useEffect(() => {
        console.log('Body component mounted');
        setTimeout(() => {
            SetListOfRestraunts(resList);
            SetFilteredRestrauntList(resList);
        }, 3000);
        SetSearchRestraunt('');
    }, []);

    if(listOfRestraunts.length === 0) {
        return <Shimmer/>
    }

    return (
        <div className="body">
            <div className="body-elements-container">
            <div className="search">
                <input name="search" value={searchRestraunt} onChange={(event) => {
                    console.log('Search input changed');
                    SetSearchRestraunt(event.target.value);
                }} /> 
                <button className="search-btn" onClick={()=> {
                    const filteredList = listOfRestraunts.filter(restraunt => restraunt.data.name.toLowerCase().includes(searchRestraunt.toLowerCase()));
                    console.log(filteredList);
                    SetFilteredRestrauntList(filteredList);
                }}>Search</button>
            </div>
            <div className="button">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestraunts.filter(resraunt => resraunt.data.avgRating > 4);
                    SetFilteredRestrauntList(filteredList);
                    console.log('Filter button clicked');
                }}>Filter</button>
            </div>
            </div>
            
            <div className="restraunt-container">
                {
                    filteredRestrauntList.map(restraunt =>
                        <Link key={restraunt.data.id} to={`/restraunt-menu/${restraunt.data.id}`}>
                            <RestrauntCard resData={restraunt}/>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default Body;