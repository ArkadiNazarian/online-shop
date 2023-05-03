import { Carousel } from "react-responsive-carousel";
import { NavBar } from "../../NavBar";
import laptop from '../../images/laptop.png'
import tv from '../../images/tv.png'
import kitchen from '../../images/kitchen.png'
export const Dashboard = () => (
    <div>
        <NavBar />
        <div className="tw-flex tw-justify-center">
            <Carousel width={1000} stopOnHover={false} showThumbs={false} showArrows={false} showStatus={false} infiniteLoop autoPlay>
                <div>
                    <img src={laptop} alt="carousel"/>
                </div>
                <div>
                    <img src={tv} alt="carousel"/>
                </div>
                <div>
                    <img src={kitchen} alt="carousel"/>
                </div>
            </Carousel>
        </div>
        <div className="tw-p-8 tw-flex tw-flex-wrap tw-gap-4 tw-justify-center">
            <div className="tw-w-96 tw-bg-white tw-p-4">
                <p>Game accessories</p>
                <img src={laptop} alt="carousel"/>
                <p>See more</p>
            </div>
            <div className="tw-w-96 tw-bg-white tw-p-4">
                <p>Game accessories</p>
                <img src={laptop} alt="carousel"/>
                <p>See more</p>
            </div>
            <div className="tw-w-96 tw-bg-white tw-p-4">
                <p>Game accessories</p>
                <img src={laptop} alt="carousel"/>
                <p>See more</p>
            </div>
            <div className="tw-w-96 tw-bg-white tw-p-4">
                <p>Game accessories</p>
                <img src={laptop} alt="carousel"/>
                <p>See more</p>
            </div>
            <div className="tw-w-96 tw-bg-white tw-p-4">
                <p>Game accessories</p>
                <img src={laptop} alt="carousel"/>
                <p>See more</p>
            </div>
        </div>
    </div>
)