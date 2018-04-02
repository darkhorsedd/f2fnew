import React, { Component } from 'react';
import TopNavigation from '../pages/TopNavigation';
import Footer from '../pages/footer';
class Contact extends Component {
  render() {
    return (
        <div id="Contact">
           <TopNavigation/>

           <div className="fullwidthbg-contact" >
                 <div className="column-content">
                     
                 </div>
              </div>

              <div className="container"> 
                  <div className="spacer100">
                  </div>
            
              </div>
              <div className="container " data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-cubic" data-aos-anchor-placement="top-center"> 
                      <div class="row">
                            <div className="col-lg-12 contactBox">
                            <div className="contactVideo">
                                           <video autoPlay loop muted id="video-bg">

                                            <source src="http://ak9.picdn.net/shutterstock/videos/23180089/preview/stock-footage-dubai-uae-january-aerial-view-of-burj-khalifa-downtown-dubai-at-sunset-the-burj-al-khal.mp4" type="video/mp4" />

                                        </video>
                                        </div>
                                 <h3 className="purpleText">Dubai</h3>
                                 <h2>WHERE SUN SHINES<br/>
                                   MOST OF THE YEAR</h2>

                                   <p>
                                   26th Floor, Reef Tower,<br/>
                                    Jumeirah Lakes Towers<br/>
                                    P.O. Box 53189, Dubai, UAE.<br/><br/>

                                    971 4 399 0505<br/>
                                   </p>
                                   <a href="mailto:jobs@facetofaceuae.com"><div className="buttonWrapper-black black">
                                                <span className="buttontext"> Work with us </span>
                                               <div className="borderboxbutton">

                                               </div>
                                           </div></a>
                                       
                            </div>
                       </div>
               </div>
               <div className="container"> 
                  <div className="spacer100">
                  </div>
            
              </div>
               <div className="fullwidthbg-contact-bg" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-cubic" data-aos-anchor-placement="center-bottom">
                 <div className="column-content">
                 <a href="https://www.google.ae/maps/place/Facetoface/@25.0740499,55.1409388,17z/data=!4m12!1m6!3m5!1s0x3e5f6ca957d0df57:0xba51da02debd0ef1!2sFacetoface!8m2!3d25.0740499!4d55.1431275!3m4!1s0x3e5f6ca957d0df57:0xba51da02debd0ef1!8m2!3d25.0740499!4d55.1431275" target="_new"><div className="buttonWrapper direction">
                                                <span className="buttontext black"> Direction </span>
                                               <div className="borderboxbutton">

                                               </div>
                                           </div></a>
                 </div>
              </div> 
  <Footer/>
        </div>

        
    );
}
}

export default Contact;
