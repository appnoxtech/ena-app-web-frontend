import { Route, Routes } from "react-router-dom";
import React from "react";
import AgentHome from "../Screens/agents/Home/AgentHome";
import AssignedOrderList from "../Screens/agents/Delivery/AssignedOrderList";

function AgentsRoutes() {
  return (
    <Routes>
        <Route path='/' element={<AssignedOrderList />} />
    </Routes>
  )
}

export default AgentsRoutes