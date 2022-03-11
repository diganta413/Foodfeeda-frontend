import DonationPost from "components/DonationPost/DonationPost";
import Header from "../components/Header/header";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";

function Donation() {
    const [type, setType] = useState(0);
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <>
            <Header />
            <div className="donationLayout">
                <div className="content">
                    {type === 0 ? (
                        <div className="carouselMainContainer">
                            <div className="carouselContainer">
                                <Carousel
                                    swipeable={true}
                                    draggable={true}
                                    showDots={true}
                                    responsive={responsive}
                                    infinite={false}
                                    containerClass="carousel-container"
                                    removeArrowOnDeviceType={[
                                        "tablet",
                                        "mobile",
                                    ]}
                                    dotListClass="custom-dot-list-style"
                                    itemClass="carousel-item-padding-40-px"
                                    autoPlay={false}
                                    autoPlaySpeed={100000000}
                                >
                                    <DonationPost title={1} />
                                    <DonationPost title={2} />
                                    <DonationPost title={3} />
                                    <DonationPost title={4} />
                                    <DonationPost title={5} />
                                    <DonationPost title={6} />
                                </Carousel>
                            </div>
                        </div>
                    ) : (
                        <div className="gridPost">
                            <DonationPost title={1} />
                            <DonationPost title={2} />
                            <DonationPost title={3} />
                            <DonationPost title={4} />
                            <DonationPost title={5} />
                            <DonationPost title={6} />
                        </div>
                    )}
                    <div className="mainContent">
                        <button
                            className="btn"
                            onClick={() => {
                                setType(type === 0 ? 1 : 0);
                            }}
                        >
                            {type === 0 ? "Show All Posts" : "Show Carousel"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Donation;
