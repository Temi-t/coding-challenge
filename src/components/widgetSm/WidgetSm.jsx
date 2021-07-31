import './widgetSm.css'
import { Notifications, Create, ShoppingBasket, People, LocalActivity} from "@material-ui/icons"


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
                            {/* <div class="w3-light-grey w3-round-xlarge">
                                <div class="w3-container w3-orange w3-round-xlarge" style={{width: "85%"}}></div>
                            </div> */}
                            <progress className="progress" value="85" max="100"> 85% </progress>
                        </div>
                    </div>
                </div>
            </div>
            <div className="title-container">
                <span className="widgetSmTitle">Recent Orders</span>
                <span className="see-all">See All</span>
            </div>

            {/* <ul className="widgetSmList">
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
                
            </ul> */}
            <table className="widgetSmTable">
                
                <tr className="widgetSmTr">
                    <td className="widgetSmUser">
                        <img src="https://source.unsplash.com/random" className="widgetImg" alt="user-avatar" />
                    </td>
                    <td className="widgetSmName">
                        Redmi 4x <br/>
                        <span>2 Minutes Ago</span>
                    </td>
                    <td className="widgetSmPrice">+$80.00</td>
                </tr>
                <tr className="widgetSmTr">
                    <td className="widgetSmUser">
                        <img src="https://source.unsplash.com/random" className="widgetImg" alt="user-avatar" />
                    </td>
                    <td className="widgetSmName">
                        Redmi 4x <br/>
                        <span>2 Minutes Ago</span>
                    </td>
                    <td className="widgetSmPrice">+$80.00</td>
                </tr>
                <tr className="widgetSmTr">
                    <td className="widgetSmUser">
                        <img src="https://source.unsplash.com/random" className="widgetImg" alt="user-avatar" />
                    </td>
                    <td className="widgetSmName">
                        Redmi 4x <br/>
                        <span>2 Minutes Ago</span>
                    </td>
                    <td className="widgetSmPrice">+$80.00</td>
                </tr>
            </table>
            
        </div>
    )
}

export default WidgetSm
