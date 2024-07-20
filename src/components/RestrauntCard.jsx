const RestrauntCard = (props) => {
    const {name, cuisines, avgRating, costForTwo, deliveryTime, imgUrl} = props?.resData?.data;
    return (
        <div className="w-[200] h-[370] px-2 py-2 mx-2 my-2 bg-slate-100 hover:bg-slate-300">
            <div>
                <img className="w-full h-[160]" src={imgUrl} alt="res-logo" />
            </div>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>₹{costForTwo/100} FOR TWO</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
    )
}

export default RestrauntCard;