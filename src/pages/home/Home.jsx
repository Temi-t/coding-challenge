import './home.css';
import InfoFeature from '../../components/infoFeature/InfoFeature';
import Chart from '../../components/chart/Chart';
import {userData} from '../../dummyData';
import WidgetLg from '../../components/widgetLg/WidgetLg'
import { Search } from '@material-ui/icons'
// import SearchBar from '../../components/searchBar/Searchbar'


function Home() {
    return (
        <div className="home">
            <div className="searchBar">
                <Search className="search-icon" />
            <input  placeholder="Search for product" className="search-input"/>
            </div>
            {/* <SearchBar /> */}
            <span className="home-title">Overview</span>
            <InfoFeature />
            <Chart 
                data={userData} 
                title="Income " 
                title2="Expense"
                dataKey="Active User"
                grid
            />
            <div className="homeWidgets">
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home
