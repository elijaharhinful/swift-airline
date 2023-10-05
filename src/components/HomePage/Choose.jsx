import expertise from "../assets/icons/expertise.svg";
import swift from "../assets/icons/Swift.svg";
import hospitality from "../assets/icons/Reception.svg";
import banknotes from "../assets/icons/Banknotes.svg";



function Choose() {
    return (
        <div className="choose section">
            <div className="choose__title">
                <h2 className="section__title">Why Choose our travel airline?</h2>
                <h3 className="section__subtitle">
                    Here are some of the reasons why you should book swift travel for your <br />
                    journeys.
                </h3>
            </div>
            <div className="choose__body">
                <div className="choose__card">
                    <img src={expertise} alt="expertise-icon" />
                    <h4>Expertise</h4>
                    <p>
                        Our staff have an adequate <br />
                        knowlege and expertise in <br />
                        providing the best deals for <br />
                        your experience.
                    </p>
                </div>
                <div className="choose__card">
                    <img src={swift} alt="swift-icon" />
                    <h4>Swift and Fast</h4>
                    <p>
                        We can save you time by <br />
                        handling all the details, from <br />
                        flight to actiivities.
                    </p>
                </div>
                <div className="choose__card">
                    <img src={hospitality} alt="hospitality-icon" />
                    <h4>Hospitality</h4>
                    <p>
                        Our staff are always ready to <br />
                        accept clients with an open <br />
                        arms.
                    </p>
                </div>
                <div className="choose__card">
                    <img src={banknotes} alt="cash-icon" />
                    <h4>Cost Effectiveness</h4>
                    <p>
                        Our flights are cheap and very <br />
                        pocket friendly for everyone.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Choose;