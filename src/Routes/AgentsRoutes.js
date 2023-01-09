import { Route, Routes } from "react-router-dom";
import React from "react";
import AgentHome from "../Screens/agents/Home/AgentHome";
import AssignedOrderList from "../Screens/agents/Delivery/AssignedOrderList";
import OrderDetails from "../Screens/agents/Order/OrderDetails";

function AgentsRoutes() {
  return (
    <Routes>
        <Route path='/' element={<AssignedOrderList />} />
        <Route path='/orderDetails' element={<OrderDetails />} />
    </Routes>
  )
}

export default AgentsRoutes