import Menu from '../components/Menu'
import { Outlet } from "react-router-dom";
//import SivuStore from '../pages/SivuStore';
import Theme from '../pages/Theme';
// <SivuStore />

function Root(props) {
  return (
    <div className="root">
      <Theme />
      
      <div className="root_content">
        <Outlet />
      </div>
      <Menu items={props.items}/>
    </div>
  )
}
export default Root;