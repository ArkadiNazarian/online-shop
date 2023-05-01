import { Carousel } from "react-responsive-carousel";
import { NavBar } from "../../NavBar";

export const Dashboard = () => (
    <div>
        <NavBar />
        <Carousel showThumbs={false} autoPlay>
                <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </div>
)