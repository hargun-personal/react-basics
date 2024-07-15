const ShimmerItem = () => {
    return (
        <div className="shimmer"></div>
    )
}

const Shimmer = () => {
    return (
        <div className="shimmer-container">
            {
                Array.from({ length: 14 }).map((_, index) => (
                    <ShimmerItem/>
                ))

            }
            {/* Array(14).fill().map((_, index) => (
                    <ShimmerItem/>
                )) */}
        </div>
    )
}

export default Shimmer;