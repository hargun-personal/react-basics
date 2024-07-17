import { useParams } from "react-router-dom";

const RestrauntMenu = () => {
    const {restrauntId} = useParams();
    console.log(restrauntId);
    return (
        <div className="restraunt-menu">
            <h2>Restraunt Menu</h2>
        </div>
    )
}

export default RestrauntMenu;