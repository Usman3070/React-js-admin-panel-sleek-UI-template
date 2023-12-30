import React from "react";
import { Outlet } from 'react-router-dom'
export default function RootLayout() {
    return (
        <div className="bg-white">
            <Outlet />
        </div>
    )
}