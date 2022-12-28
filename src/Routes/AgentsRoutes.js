import { Route, Routes } from "react-router-dom";
import React from "react";
import AgentHome from "../Screens/agents/Home/AgentHome";

function AgentsRoutes() {
  return (
    <Routes>
        <Route path='/' element={<AgentHome />} />
    </Routes>
  )
}

export default AgentsRoutes