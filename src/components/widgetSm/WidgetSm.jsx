import './widgetSm.css'
import {Visibility, Notifications, Create, ShoppingBasket, People, LocalActivity} from "@material-ui/icons"

function WidgetSm() {
    return (
        <div className="widgetSm">
            <div className="outer-container">
                <div className="notif-edit-container">
                    <div className="notif-edit">
                        <Notifications />
                    </div>
                </div>
                <div className="notif-edit-container">
                    <div className="notif-edit">
                        <Create />
                    </div>
                </div>
            </div>
            <div className="pulsa">
                <div className="pulsa-img-container">
                    <div className="img-container">
                        <img src="https://source.unsplash.com/random" alt="" className="widgetSmPulsa" />
                    </div>
                    <div className="title-container">
                        <span className="widgetSmTitle">Konster Pulsa</span>
                    </div>
                    <div className="prod-followers">
                        <div className="prod">
                            <div className="icon-container">
                                <ShoppingBasket className="icon"/>
                            </div>
                            <div className="details">
                                <span className="numb">218</span>
                                <span className="item">Products</span>
                            </div>
                        </div>
                        <div className="followers">
                            <div className="icon-container">
                                <People className="icon"/>
                            </div>
                            <div className="details">
                                <span className="numb">2,580</span>
                                <span className="item">Followers</span>
                            </div>
                        </div>
                    </div>
                    <div className="reputation">
                        <LocalActivity className="star-icon"/>
                        <div className="inner-container">
                            <div className="star-container">
                                <span className="star-seller">Star seller</span>
                                <span className="star-percent">85%</span>
                            </div>
                        Progress bar
                        </div>
                    </div>
                </div>
            </div>
            <span className="widgetSmTitle">Recent Orders</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://source.unsplash.com/random" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>   
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://source.unsplash.com/random" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>   
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />Display
                    </button>
                </li>
                
            </ul>
            
        </div>
    )
}

export default WidgetSm
