import React, { Component } from 'react';
class Footer extends Component  {
  render() {
 

    return (
           <div className="Footer">
              <div className="container footer-con">
                <div className="row">
                     <div className="col-lg-5">

                        <h6>Address</h6>
                       
                        Office 2601, 26th Floor, Reef Tower,<br/>
                        Jumeirah Lakes Towers,<br/>
                        P.O. Box 53189, Dubai, UAE.
                     
                     </div>
                                          
                     <div className="col-lg-5">
                     <h6>EMAIL</h6>
                      
                        christopher@facetofaceuae.com<br/>
                        marksell@facetofaceuae.com
                        
                     </div>

                     <div className="col-lg-2">
                       <h6>PHONE</h6>
                      
                       +971 4 399 0505<br/>
                       +971  4 399 0507
                        
                     </div>
                </div>
               </div> 

               <hr/>
               <div className="container">
                  <div className="row">
                       <div className="col-lg-12 copy-rt"> ©2018 face to face / mcgarrybowen. All rights reserved.</div>
                  </div>
                
               </div>
           </div>
    ); 
  }
}

export default Footer;