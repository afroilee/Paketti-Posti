import kirje from '../assets/kirje-iso.svg'

function Kirje(props) {
  return (
    <div className="kirje">
      <img src={kirje} alt="kirje" onClick={props.onClick} />
    </div>
  );
}
export default Kirje;