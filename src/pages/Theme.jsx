import theme from '../assets/theme.png'
function Theme() {
    return (
        <div className="theme">
            <img src={theme} alt="theme" /*onClick={props.onClick}*/ />
            
            <button>
            <img src={theme} alt="theme" />
      </button>
        </div>
    );
}

export default Theme;