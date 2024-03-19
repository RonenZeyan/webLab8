
import ImageList from "./imageList";



export default function Gallary(props){       

    return (
        <div>
            <ImageList data={props.data}/>
        </div>
    );
}