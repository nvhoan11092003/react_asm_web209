import Banner from "../components/Banner"
import CardHistory from "../components/CardHistory"
import MessageList from "../components/MessageList"
import OderStatus from "../components/OderStatus"
import RevenueStatistics from "../components/RevenueStatistics"
import Statistical from "../components/Statistical"
import TodoList from "../components/TodoList"
import VisitorsByCountries from "../components/VisitorsByCountries"

const DashBoard = () => {
  return (
    <>
    
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-12 grid-margin stretch-card">
              <div className="card corona-gradient-card">
              <Banner/>
              </div>
            </div>
          </div>
         <Statistical/>
          <div className="row">
            <CardHistory/>
            <TodoList/>
           <MessageList/>
          </div>
          <RevenueStatistics/>
          <OderStatus/>
          <VisitorsByCountries/>
        </div>
      </div>
      </>
  )
}

export default DashBoard