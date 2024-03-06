import Header from './Header';
import Item from './Item';
import getPurchasableItems from '../utils/getPurchasableItems';

function SivuStore(props) {
  // Muodostetaan renderöitävä tuotelista.
  //const items = getPurchasableItems(props.storeitems).map(item => (
    <Item key="paketti"
          item="Paketti"
         /* handlePurchase={props.handlePurchase}
          disabled={props.stats.balance < paketti.price} *//>
 // ));
//hae viimeinen ostettava item(max).
  return (
    <div className="sivustore">
    </div>
  );
}
export default SivuStore;