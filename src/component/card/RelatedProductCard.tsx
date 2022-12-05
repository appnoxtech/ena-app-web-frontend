import Carrot from '../../assets/images/carrot.jpg'
import heartIcon from '../../assets/images/hearticonred.svg'


const RelatedProductCard = () => {
    return (
        <div className='card_container border'>
            <div className='card'>
                <img src={Carrot} className='card-img-top ' alt='...' />
                <div className='fabDiv'>
                    <div className='rounded-end Off_container offContainerGreen'>
                        <p className=' p-0 m-0 px-4 py-2'>10% off</p>
                    </div>

                    <a href='#' className='text-end px-2'>
                        <img src={heartIcon} alt="wish" className='img-fluid' />
                    </a>
                </div>
                <div className='card-body'>
                    <h5 className='card-title'>Carrot </h5>
                    <p className='card-text w-2 '>kn 35.2/kg <s className='crossTextRelated'>kn 35.2/kg</s></p>
                </div>
            </div>
        </div>
    )
}

export default RelatedProductCard