
import "../index.css"

export default function Image(prop){
    return (
    <button className="butt" onClick={() => prop.onImageClick(prop.data)}>
    <img className="image" src={prop.data} alt="A pic from Picsum" />
    </button>

    );
}