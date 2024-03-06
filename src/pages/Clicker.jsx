import Balance from '../components/Balance';
import Booster from '../components/Booster';
import Header from '../components/Header';
import Kirje from '../components/Lemon';
//import SivuStore from '../pages/SivuStore';
import Theme from '../pages/Theme';
//<SivuStore />
function Clicker(props) {
  return (
    <div className="container clicker">
      
      <Header>Kirjeen kätkijä</Header>
      <Balance total={props.stats.balance} />
      <Kirje onClick={props.handleClick} />
      <Booster value={props.stats.increase} />
    </div>
  );
}
export default Clicker;