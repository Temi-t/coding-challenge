import React from 'react';
import './sidebar.css';
import { ViewModule, Description, NearMe, ShoppingBasket, Settings, Send, People} from "@material-ui/icons"

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sideWrapper">
                <div className="brand">
                    <img src="https://source.unsplash.com/random" className="logo" alt="logo" />
                    <span className="brandName">Tumbas</span>
                </div>
            {/* <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcon"/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div> */}
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle"> Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <ViewModule className="sidebarIcon"/>
                            Overview
                        </li>
                        <li className="sidebarListItem">
                            <Description className="sidebarIcon"/>
                            Orders
                        </li>
                        <li className="sidebarListItem">
                            <ShoppingBasket className="sidebarIcon"/>
                            Products
                        </li>
                        <li className="sidebarListItem">
                            <Settings className="sidebarIcon"/>
                            Settings
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Bussiness</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            < NearMe className="sidebarIcon"/>
                            Shipment
                        </li>
                        <li className="sidebarListItem">
                            < People className="sidebarIcon"/>
                            Employee
                        </li>
                        {/* <li className="sidebarListItem">
                            < ChatBubbleOutline className="sidebarIcon"/>
                            Messages
                        </li> */}
                    </ul>
                </div>
                {/* <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcon"/>
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div> */}


            </div>
            
        </div>
    )
}

export default Sidebar
