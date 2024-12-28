import { Outlet } from "react-router-dom";

import React from 'react'

function AdminLayout() {
  return (
    <div>
        admin sidebar layout
        <Outlet />
    </div>
    
  )
}

export default AdminLayout