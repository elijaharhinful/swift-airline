import { Link } from "react-router-dom";
import whoImage from "../assets/images/who-image.png";

function WhoWeAre() {
    return (
        <div className="who">
            <div className="who__image">
                <img src={whoImage} alt="" />
            </div>
            <div className="who__text">
                <h2 className="section__title">Who we are</h2>
                <p>At Swift airline, we prioritise our clients satisfaction by provide expert <br />
                 guiidance in planning and booking travels. we aim to streamline our clients <br />
                  travel process by making it convenient nad hassle free.
                </p>
                <a className="button"><Link className="who__link" to="/about">About us</Link></a>
            </div>
        </div>
    )
}

export default WhoWeAre;