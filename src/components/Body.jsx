import { useState } from "react";
import { resList } from "../utils/resList";
import RestrauntCard from "./RestrauntCard";

const Body = () => {
    const [listOfRestraunts, SetListOfRestraunts] = useState(resList)
    return (
        <div className="body">
            <div className="button">
                <button className="filter-btn" onClick={() => {
                    const filteredList = resList.filter(resraunt => resraunt.data.avgRating > 4);
                    SetListOfRestraunts(filteredList);
                    console.log('Filter button clicked');
                }}>Filter</button>
            </div>
            <div className="restraunt-container">
                {
                    listOfRestraunts.map(restraunt => 
                        <RestrauntCard key={restraunt.data.id} resData={restraunt}/>
                    )
                }
            </div>
        </div>
    )
}

export default Body;