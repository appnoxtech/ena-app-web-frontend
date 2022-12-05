import RelatedProductCard from '../card/RelatedProductCard'

const RelatedProduct = () => {
    return (
        <div className="container-fluid py-4">
            <div className="col-10 mx-auto">
                <div className="relatedProductMain">
                    <div className="text-center mb-4">
                        <h4>You may also like</h4>
                    </div>
                    <div className="row g-3">
                        {
                            Array.from({ length: 8 }).map((data, index) => (
                                <div className="col-md-3" key={index}>
                                    <RelatedProductCard />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelatedProduct