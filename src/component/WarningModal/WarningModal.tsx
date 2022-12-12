import React, { FC } from "react"
import { FaExclamationCircle } from "react-icons/fa";
import CommentBox from "../CommentBox/CommentBox";
import CustomButton from "../Button/Button";
import './WarningModal.css';
import { Modal } from "react-bootstrap";
const WarningModal: FC<any> = ({ showModal, closeModal, message, showReason }) => {
    //    return (
    //     <div className="modal modal-dialog modal-dialog-centered">
    //         <div className="">
    //             <div>
    //                 <FaExclamationCircle />
    //             </div>
    //             <div>
    //                 <h3>{props.message}</h3>
    //             </div>
    //             {
    //                 props.showReason ? (
    //                     <div>
    //                     <CommentBox placeholder="Tell us the reason of cancellation" />
    //                     </div>
    //                 ) : null
    //             }
    //         <div className='d- flex flex-column align-items-center justify-content-between'>
    //                 <CustomButton
    //                     props={{ styleName: 'dark px-5  p-0', indexData: 'Go back', btnType: 'btn-outline' }}
    //                 />

    //                 <CustomButton
    //                     props={{ styleName: 'danger px-3 p-0 mt-2', indexData: 'Cancel', btnType: 'btn-primary' }}
    //                 />
    //         </div>
    //         </div>
    //     </div>
    //    )
    return (
        <Modal show={showModal} onHide={closeModal} className="cartModalMain">
            <Modal.Body>
                <div>
                    <FaExclamationCircle />
                </div>
                <div className="">
                    <h3>{message}</h3>
                </div>
                <div className="cartModalMain">
                    <div className="cartModalSubTotal">
                        <h5>Subtotal: <span>kn 3568</span></h5>
                    </div>
                </div>
                {
                    showReason ? <div className="">
                        <CommentBox
                            placeholder="Tell us the reason of cancellation"
                        />
                    </div>
                        : null
                }

            </Modal.Body>
            <Modal.Footer className='cartModalFooter'>
                {/* <button onClick={() => navigate('/cart')} className='btn modalViewCartBtn'>
                    View Cart
                </button>
                <button className='btn marginLeft modalViewCartBtn'>
                    Checkout
                </button> */}
                <div className='d- flex flex-column align-items-center justify-content-between'>
                    <CustomButton
                        props={{ styleName: 'dark px-5  p-0', indexData: 'Go back', btnType: 'btn-outline' }}
                    />

                    <CustomButton
                        props={{ styleName: 'danger px-3 p-0 mt-2', indexData: 'Cancel', btnType: 'btn-primary' }}
                    />
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default WarningModal;