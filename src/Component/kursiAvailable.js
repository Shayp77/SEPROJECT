import '../SeatPage.css';
import { useContext, useState} from 'react';
import { ThemesContext, limit } from '../SeatPage';
export let count = 0;
export let datase;
const KursiAvailable = (props)=>{
    let [clicked, setClicked] = useState("noBackground")
    let data = useContext(ThemesContext); 


    return (
        <div onClick={()=>{
            if(count < limit){
                if(clicked=="noBackground"){
                    setClicked("whiteBackground");
                    count = count+1;
                    if(data[0] == 0){
                        data[0] = props.chairNumber;
                    }else{
                        data.push(props.chairNumber);
                    }
                }
            }

            if(clicked=="whiteBackground"){
                setClicked("noBackground");
                count = count-1;
                data = data.filter(v=>v !== props.chairNumber)
            }
            datase = data;
            console.log(data);
            console.log(count);
            console.log("dadadad");
            console.log(datase);
        }} className={`display-one-seat ${clicked}`}>{props.chairNumber}</div>
    )
}
export default KursiAvailable;

