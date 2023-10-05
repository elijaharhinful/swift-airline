import man1 from "../assets/images/man1.png";
import woman1 from "../assets/images/woman1.png";
import woman2 from "../assets/images/woman2.png";


function Reviews() {
   return (
      <div className="reviews section">
         <div className="review__title">
            <h2 className="section__title reviews__show">Reviews From Our Clients</h2>
            <h3 className="section__subtitle reviews__show">Here is what our clients are saying about us,you can be one too!</h3>
            <h2 className="section__title reviews__hidden">Reviews</h2>
         </div>
         <div className="reviews__body">
            <div className="reviews__card">
               <img className="reviews__card-image" src={woman1} alt="woman1" />
               <h4 className="reviews__card-title">
                  Sarah Motunrayo
               </h4>
               <h5 className="reviews__card-subtitle">Travel Vlogger</h5>
               <p>"The best ever travel airline i’ve <br />
                  journeyed with. Swift like the name implies "
               </p>
            </div>

            <div className="reviews__card">
               <img className="reviews__card-image" src={man1} alt="woman1" />
               <h4 className="reviews__card-title">
                  Williams Charles
               </h4>
               <h5 className="reviews__card-subtitle">Business Man</h5>
               <p>"This airline makes it easy for me to <br />
                  track my flight bookings  which is <br />
                  extremely commendable”
               </p>
            </div>

            <div className="reviews__card">
               <img className="reviews__card-image" src={woman2} alt="woman1" />
               <h4 className="reviews__card-title">
                  Beyin Agba
               </h4>
               <h5 className="reviews__card-subtitle">Content Creator</h5>
               <p>"The best ever travel airline i’ve <br />
                  journeyed with. Swift like the name <br />
                  implies “
               </p>
            </div>
         </div>
      </div>

   )
}

export default Reviews;