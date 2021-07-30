import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings} from '@material-ui/icons';
function Topbar() {
    return (
        <div className="topbar">
            {/* <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">wavyAdmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <div>
                        <img src="https://source.unsplash.com/random" className="topAvatar" alt="random"  />}
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Topbar
