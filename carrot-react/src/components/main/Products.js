import {db} from "../../index";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {useHistory} from "react-router-dom";
import {IoChatbubblesOutline, IoMdHeartEmpty} from "react-icons/all";
import {Divider} from "@mui/material";
import {Container} from "react-bootstrap";

export default function Products(){

    const productRef = db.collection('product')
    const query = productRef.orderBy('date')

    const [products] = useCollectionData(query, {idField: 'id'})

    return (
        <>
            <div>
                {products && products.map(product => <ProductCard key={product.id} product={product}/>)}
            </div>
        </>
    )
}

function ProductCard(props){
    const { title, content, image, name, price, uid, id} = props.product
    const timestamp = props.product.date.toDate()
    const date = String(timestamp).slice(4,21)
    let history = useHistory()

    const thumbnail={
        width: "100%",
        maxWidth: "180px",
        height: "180px",
        borderRadius: "10px",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "inline-block",
        verticalAlign: "top"

    }

    return (
        <>
            <div className="product" onClick={()=>{ history.push('/detail/' + id) }}>
                <div className='thumbnail' style={thumbnail}></div>
                <div className="product-content">
                    <h5 className="title">{title}</h5>
                    <p className="date">{date}</p>
                    <p className="price">{price}원</p>
                    <p className="float-end chat"><IoMdHeartEmpty/>0</p>
                    <p className="float-end likes"><IoChatbubblesOutline/>0</p>
                </div>
            </div>
            <Divider variant="middle" className="product-divider" />
        </>
    )
}
