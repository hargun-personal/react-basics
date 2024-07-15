const RestrauntCard = (props) => {
    const {name, cuisines, avgRating, costForTwo, deliveryTime, imgUrl} = props?.resData?.data;
    return (
        <div className="restraunt-card" style={{backgroundColor: '#f0f0f0'}}>
            <div>
                <img className="restraunt-logo" src={imgUrl} alt="res-logo" />
            </div>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>₹{costForTwo} FOR TWO</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
    )
}

export default RestrauntCard;