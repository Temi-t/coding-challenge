import './widgetLg.css'

function WidgetLg() {
    // const Button = ({type}) =>{
    //     return <button className={"widgetLgButton " + type}>{type}</button>
    // }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle"> Popular Products</h3>
            <table className="widgetLgTable">
                <tr className="widgetLtTr">
                    <th className="photos header">Photos</th>
                    <th className="name header">Name</th>
                    <th className="date header">Date</th>
                    <th className="category header">Category</th>
                    <th className="brands header">Brand</th>
                    <th className="price header">Price</th>
                    <th className="status header">Status</th>

                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://source.unsplash.com/random" className="widgetImg" alt="user-avatar" />
                    </td>
                    <td className="widgetLgName">
                        Cowboy Hat <br/>
                        <span>#2807856940</span>
                    </td>
                    <td className="widgerLgDate">Aug 12, 2020</td>
                    <td className="widgerLgCategory"> Fashion</td>
                    <td className="widgerLgBrand"> Swallow</td>
                    <td className="widgerLgPrice"> $99.89</td>
                    <td className="widgerLgStatus">
                        Available<br/>
                        #18k viewers
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://source.unsplash.com/random" className="widgetImg" alt="user-avatar" />
                    </td>
                    <td className="widgetLgName">
                        Smartphone<br/>
                        <span>#3456756940</span>
                    </td>
                    <td className="widgerLgDate">Aug 12, 2020</td>
                    <td className="widgerLgCategory"> Gadget</td>
                    <td className="widgerLgBrand"> Swallow</td>
                    <td className="widgerLgPrice"> $99.89</td>
                    <td className="widgerLgStatus">
                        Available<br/>
                        <span>#18k viewers</span>
                    </td>
                </tr>
                {/* <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://source.unsplash.com/random" className="widgetImg" alt="user-avatar" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgerLgDate">2 Jun 2021</td>
                    <td className="widgerLgAmount"> $322.00</td>
                    <td className="widgerLgStatus">
                        <Button type="Pending"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://source.unsplash.com/random" className="widgetImg" alt="user-avatar" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgerLgDate">2 Jun 2021</td>
                    <td className="widgerLgAmount"> $322.00</td>
                    <td className="widgerLgStatus">
                        <Button type="Approved"/>
                    </td>
                </tr> */}
            </table>
        </div>
    )
}

export default WidgetLg
