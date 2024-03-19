
import Image from "./image";
import "../index.css"
export default function ImageList(props){

    //change last of link to 50/50
    function changeURL(url){
        const newUrl = url.replace(/\/\d+\/\d+$/, "/50/50");
        return newUrl        
    }

    const data = props.data;
    return (
      <div className="image-list">
        {data.map((d, index) => (
          <Image key={index} data={changeURL(d.download_url)} onImageClick={props.onImageClick} />
        ))}
      </div>
    );
}