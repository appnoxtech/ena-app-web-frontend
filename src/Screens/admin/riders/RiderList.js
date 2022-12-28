import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie';
import AddRiderAnimation from '../../../assets/animations/emptyCart.json';
import { GetRiderListService } from '../../../services/rider/RiderService';
import AddRiderForm from '../../../forms/Rider/AddRiderForm';
import RidersCard from './RidersCard';
function RiderList() {
  const [modalShow, setModalShow] = useState(false);
  const [riderList, setRiderList] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState({});
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AddRiderAnimation,
  };

  const getRiderList = async () => {
    try {
      const res = await GetRiderListService();
      const list = res.data.data;
      if (list.length > 0) {
        setRiderList(list);
      } else {
        setRiderList(list);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    getRiderList();
  }, []);

  const handleAgentUpdateClick = (agent) => {
      setSelectedAgent(agent);
      setModalShow(true);
  }

  return (
    <div className="col-12 py-2 mt-5">
      <div className="col-12 d-flex justify-content-between align-item-center">
        <div className="ps-4 col-6 col-md-3">
        <p className='mt-1 h3 fontWeight-700'>Agents</p>
        </div>
        <div className="col-6 col-md-3 d-flex">
          <div className='ms-auto me-4'>
            <a onClick={() => {
              setModalShow(true);
              setSelectedAgent({});
            }} className='btn btn-success text-light btnGreen'>Add Rider</a>
          </div>
        </div>
      </div>
      <div className="col-12 px-2 d-flex justify-content-center align-item-center">
        {
          riderList.length > 0 ? 
          <div className="container row">
            {riderList.map(agent => {
              return (
                <div className="col-12 col-md-6 col-xl-4 p-3">
                  <RidersCard 
                    agent={agent} 
                    getRiderList={getRiderList}
                    updateHandler={handleAgentUpdateClick} 
                  />
                </div>
              )
            })}
          </div>
            
          :
            <div className='col-12 d-flex justify-content-center align-item-center' style={{ height: '90vh' }}>
              <Lottie
                options={defaultOptions}
                height={400}
                width={400}
              />
            </div>
        }
      </div>
      <AddRiderForm
        show={modalShow}
        onHide={() => setModalShow(false)}
        getRiderList={getRiderList}
        selectedAgent={selectedAgent}
      />
    </div>
  )
}

export default RiderList