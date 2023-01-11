import { Route, Routes } from "react-router-dom";
import React from "react";
import AgentHome from "../Screens/agents/Home/AgentHome";
import AssignedOrderList from "../Screens/agents/Delivery/AssignedOrderList";
import OrderDetails from "../Screens/agents/Order/OrderDetails";
import UserProfile from "../Screens/userProfile/UserProfile";

function AgentsRoutes() {
  return (
    <Routes>
        <Route path='/' element={<AssignedOrderList />} />
        <Route path='/orderDetails' element={<OrderDetails />} />
        <Route path='/profile' element={<UserProfile />} />
    </Routes>
  )
}

export default AgentsRoutes