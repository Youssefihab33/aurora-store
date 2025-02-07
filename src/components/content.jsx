import Card from './Card'
import img1 from '../assets/pictures/img_1.jpg'
import img2 from '../assets/pictures/img_2.jpg'
import img3 from '../assets/pictures/img_3.jpg'
import img4 from '../assets/pictures/img_4.jpg'
import img5 from '../assets/pictures/img_5.jpg'

export default function Content(){
    return(
        <main className="container">
            <div id="ads">
                <h1>ADS</h1>
            </div>

            <h1 className="fw-bold">Aurora Originals</h1>
            <div className="d-flex flex overflow-x-scroll">
                <Card/>
                <Card/>
                <Card/>
            </div>

            <hr/>

            <h1 className="fw-bold">Hair, Skin Care and Accessories</h1>
            <div className="d-flex flex overflow-x-scroll">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card title="Product 1" description="Quick picture of Joo and Roro Taken in the Uni" img={img1} />
                <Card title="Product 2" description="Joo and tess in the last day of the 1st term" img={img2} />
                <Card title="Product 1" description="Quick picture of Joo and Roro Taken in the Uni" img={img1} />
                <Card title="Product 3" description="Roro in the museum (taken by Joo😉)" img={img3} />
                <Card title="Product 4" description="Joo and tess in her practical exam" img={img4} />
                <Card title="Product 5" description="Roro and Joo" img={img5} />
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>

        </main>
    )
}