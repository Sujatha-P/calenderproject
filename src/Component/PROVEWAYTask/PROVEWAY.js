import { Button } from "react-bootstrap";
import { AiOutlineCheckCircle } from "react-icons/ai";

import image from "../Image/imges.JPG"

export default function Proveway() {
    return (
        <div>
            <div className=" shadow  w-100">
                <div className="w-75 m-auto d-flex justify-content-between headpart">
                    <h2>PROVEWAY</h2>
                    <div>Home</div>
                    <div>Why Up Track?</div>
                    <div>Pricing</div>
                    <div>Team</div>
                    <div>Faq</div>
                    <div>Contact Us</div>
                    <div><Button> View App Store</Button></div>
                </div>

            </div>
            <div className="Body-style w-100">
                <div className="w-75 d-flex justify-content-between part1-style m-auto flex-row flex-wrap">
                    <div className="w-50">
                        <h6>Build paypal's trust</h6>
                        <h2>With Up Track Intelligence </h2>
                        <div>Establish  Trust with paypal by synchronizing Shipment information To your paypal Account</div>
                        <div>
                            <AiOutlineCheckCircle />
                            <b className="ms-2">Reliable & Truly Affordable</b>

                        </div>
                        <div>
                            <AiOutlineCheckCircle />
                            <span className="ms-2">99.99% Secured Through UpTrack API Servers</span>

                        </div>
                        <div>
                            <AiOutlineCheckCircle />
                            <span className="ms-2">Fully Auto-Pilot,Date-based & Customized-Sync</span>

                        </div>
                        <div className="d-flex justify-content-between mt-3">

                            <input className="text-info rounded form-control shadow w-75 p-3" placeholder="Enter Shop myshopify.com
" />
                            <input className="text-info ms-1 rounded shadow form-control w-50" placeholder="Start Trial Now....
" />
                        </div>

                    </div>
                    <div className="image-style mt-5">
                        <img src={image} alt="this is image" style={{width:"450px",height: "350px"}}/>

                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}