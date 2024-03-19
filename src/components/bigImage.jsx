import "../index.css"


export default function BigImage(prop){

        //change last of link to 50/50
        function changeURL(url){
            const newUrl = url.replace(/\/\d+\/\d+$/, "/350/350");
            return newUrl        
        }

    return (
        <img className="image" src={changeURL(prop.imageURL)} alt="BigCo Inc. logo"/>
    );
}