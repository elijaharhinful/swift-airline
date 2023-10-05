import airfrance from "../assets/logos/airfrance.png";
import expedia from "../assets/logos/expedia.png";
import jetstar from "../assets/logos/jetstar.png";
import onestaff from "../assets/logos/onestaff.png";

function Partners() {
    return (
        <div className="partners section">
            <div className="partners__title section__title">
                <h2>Our Partners</h2>
            </div>
            <div className="partners__logos">
                <img src={airfrance} alt="airfrance" />
                <img src={onestaff} alt="onestaff" />
                <img src={jetstar} alt="jetstar" />
                <img src={expedia} alt="expedia" />
            </div>
        </div>
    )
}
export default Partners;