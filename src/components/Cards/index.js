import "./styles.css"
import Card from "./card";
import {list} from "../../assets/cards-list"
function Cards()
{
    return <div className="card-flex">
        {list.map((value,idx)=>{
            return <Card title={value.title} date={value.date} price={value.price} desc={value.desc} imgSrc={value.imgSrc} rating={value.rating} key={idx} />
        })}
    </div>
}
export default Cards;