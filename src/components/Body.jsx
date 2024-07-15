import { resList } from "../utils/resList";
import RestrauntCard from "./RestrauntCard";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restraunt-container">
                {
                    resList.map(restraunt => 
                        <RestrauntCard key={restraunt.data.id} resData={restraunt}/>
                    )
                }
            </div>
        </div>
    )
}

export default Body;