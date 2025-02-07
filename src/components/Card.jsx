import imgReact from '../assets/react.svg'
const defTitle = "Example Brand"
const defDescription = "Some quick example on the Example Brand"
const defImg = imgReact

export default function Card({title=defTitle, description=defDescription, img=defImg}){
    return(
        <div className="card m-1">
            <img src={img} className="card-img-top" alt={title} />
            <div className="card-bottom">
                <h5>{title}</h5>
                <p>{description}</p>
                <a href="#">More...</a>
            </div>
        </div>
    )
}