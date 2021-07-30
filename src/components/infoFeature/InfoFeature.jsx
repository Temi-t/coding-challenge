import './infoFeature.css';
import { ShoppingBasket, PieChart, People, AddShoppingCart } from "@material-ui/icons"

function InfoFeature() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <div className="featuredMoneyContainer">
                    <div className="feature-icon-percent">
                        <ShoppingBasket className="feature-icon basket" />
                        <span className="feature-percent" style={{color: "green"}}>+24%</span>
                    </div>
                    <span className="featuredMoney">$27,340.00</span>
                </div>
                <span className="featuredSub">Total Sales</span>
            </div>
            <div className="featuredItem">
                <div className="featuredMoneyContainer">
                    <div className="feature-icon-percent">
                        <PieChart className="feature-icon piechart"/>
                        <span className="feature-percent" style={{color: "red"}}>-32%</span>
                    </div>
                    <span className="featuredMoney">$27,340.00</span>
                </div>
                <span className="featuredSub">Total Expenses</span>
            </div>
            <div className="featuredItem">
                <div className="featuredMoneyContainer">
                    <div className="feature-icon-percent">
                        <People className="feature-icon visitors"/>
                        <span className="feature-percent" style={{color: "green"}}>+48%</span>
                    </div>
                    <span className="featuredMoney">$18,260.00</span>
                </div>
                <span className="featuredSub">Total Visitors</span>
            </div>
            <div className="featuredItem">
                <div className="featuredMoneyContainer">
                    <div className="feature-icon-percent">
                        <AddShoppingCart className="feature-icon cart"/>
                        <span className="feature-percent" style={{color: "pink"}}>-12%</span>
                    </div>
                    <span className="featuredMoney">$11,340.00</span>
                </div>
                <span className="featuredSub">Total Orders</span>
            </div>

        </div>
    )
}

export default InfoFeature;
