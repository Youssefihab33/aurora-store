import parse from 'html-react-parser'
// import testImg from '../assets/react.svg'

let card = `<div className="card m-1">
                    <img src="/src/assets/react.svg?t=1738431118708" className="card-img-top" alt={testImg} />
                    <h5>Example Product</h5>
                    <p>Some quick example on the Example Product</p>
                    <a className="btn btn-primary">More</a>            
                </div>`

export default function Content(){
    return(
        <main className="container text-light my-4">
            <h1 className="fw-bold">Aurora Originals</h1>
            <div className="cardsWrapper d-flex flex justify-content-center overflow-x-scroll overflow-y-hidden m-4">
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
            </div>

            <h1 className="fw-bold">Hair, Skin Care and Accessories</h1>
            <div className="cardsWrapper d-flex flex justify-content-center overflow-x-scroll overflow-y-hidden m-4">
                {parse(card)}
                {parse(card)}
                {parse(card)}
                {parse(card)}
            </div>

        </main>
    )
}