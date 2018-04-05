import React, { Component } from 'react';
import TopNavigation from '../pages/TopNavigation';
import Footer from '../pages/footer';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import { TweenMax, TimelineMax, Sine } from 'TweenMax'
import ScrollMagic from 'scrollmagic';
import 'animation.gsap';
import 'debug.addIndicators';
import Slider from 'react-slick';
class Contact extends Component {


    componentDidMount() {
        window.scrollTo(0,0);
        var $this = $(ReactDOM.findDOMNode(this));
        this.handleLoad();
      }

    handleLoad(x) {
        $(document).ready(function(){
       
            
          var controller = new ScrollMagic.Controller();
          var tween1 = new TimelineMax();
          tween1.add([
              TweenMax.to('#Menu', 0.5, {css:{opacity:0, top: -300}}),
              TweenMax.to(".title-landing", 0.5, {scale:0}),
              TweenMax.to(".top-nav-containerwrap", 0.5, {opacity:1,delay:0.4})
          ]);
    
             
            
                  
            var scene1 = new ScrollMagic.Scene({
                  triggerElement:"#fullwidthbg", //Selector or DOM object that defines the start of the scene
                  triggerHook: "onLeave", //sets the position of trigger hook w.r.t viewport
                  duration:300, //The duration(in pixels) for which the element will remain sticky
                  offset: 10 //Offset Value for the Trigger hook position
              }).setPin('#fullwidthbg')
              .setTween(tween1);
      
              controller.addScene([
              scene1,
                  ]);
    
              
      
      
          });
       }
    
  render() {
    return (
        <div id="Contact">
           <TopNavigation/>

           <div id="fullwidthbg" className="contactbg" >
             
                 <div className="column-content">
                      <div className="center-text">
                          
                          <p className="gwd-p-1yng gwd-gen-wpkhgwdanimation" id="Menu"></p>
                               <div className="title-landing">
                                  <h2 className="main-heading">We should talk</h2>
                                  <p>Either by phone for the more adventurous, or e-mail for the bashful, we should talk. We even <br/>
                                      prepared a form if you want to start a project.</p> <br/>
                               </div> 
                            
                      </div>
                      
                 </div>
                 
                      <img src="assests/images/arrow.png" className="scrollbtn bounce"/>
                      
              </div>

              <div className="container"> 
                  <div className="spacer">
                  </div>
            
              </div>
              <div className="container"> 
                      <div className="row">
                            <div className="col-lg-12">
                                          <center>   <h2>get in touch</h2> 
                                             <p>To get the ball rolling contact one of the friendly faces below</p>
                                           </center>                                      
                            </div>
                       </div>
               </div>

               <div className="container"> 
                  <div className="spacer100">
                  </div>
              </div>

              <div className="container"> 
                     <div class="row">
                       <div className="col-lg-1"></div>
                        <div className="col-lg-5 contactperson">
                            <div class="row">
                                <div className="col-sm-5 contactpersonimg">
                                         
                                      <img src="http://facetofaceuae.com/newimages/cris.jpg"/> 
                                 </div>
                                 <div className="col-sm-5">
                                         <p className="name">Christopher Bell</p>
                                         <p className="pos">CEO & Partner</p>
                                         <br/>
                                         <p className="email">christopher@facetofaceuae.com</p>
                                 </div>
                            </div>
                        </div>
                         
                        <div className="col-lg-5 contactperson mark">
                            <div class="row">
                                <div className="col-sm-5 contactpersonimg">
                                         
                                      <img src="http://facetofaceuae.com/newimages/marksell.jpg"/> 
                                 </div>
                                 <div className="col-sm-5">
                                         <p className="name">Mark Sell</p>
                                         <p className="pos">COO & Partner</p>
                                         <br/>
                                         <p className="email">marksell@facetofaceuae.com</p>
                                 </div>
                            </div>
                        </div>
                        <div className="col-lg-1"></div> 
                    
                        <div className="col-lg-12"><hr/></div>
                     </div>
              </div>

              <div className="container"> 
                  <div className="spacer">
                  </div>

                  <div class="row">
                      <div className="col-lg-12"> 
                      <center> 
                          
                           <h2>where we work</h2><br/>
                             
                              <p>Office 2601, 26th Floor,<br/>
                                Reef Tower, Jumeirah Lakes Towers,<br/>
                                P.O. Box 53189, Dubai, UAE.<br/>
                              </p><br/>

                       <p> <span className="numbers"><span>P</span> +971 4 399 0505</span> <span className="numbers"><span>P</span> +971  4 399 0507 </span> <span className="numbers"><span>F</span> +971 4 399 0502</span> </p>
                      </center>
                      
                       </div>
                  </div>
                 
                  <div className="container"> 
                     <div className="spacer">
                     </div>
                  </div>


                  <div class="row">
                      <div className="col-lg-12">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.4552907309863!2d55.14258032700845!3d25.07404988395357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6ca957d0df57%3A0xba51da02debd0ef1!2sFacetoface!5e0!3m2!1sen!2sae!4v1522833294201" width="100%" height="450" frameborder="0" Style="border:0" ></iframe>
                      </div>
                  </div>   

                  <div className="container"> 
                     <div className="spacer">
                     </div>
                 </div>
                 <form name="form" id="contact"> 
                 <div class="row">
                      <div className="col-lg-12">
                         <center><h2>drop us a line</h2></center>
                      </div>
                      <div className="spacer100">
                     </div>
                   
                     <div className="col-lg-6">
                       <input type="text" name="fullname" className="full" placeholder="Fullname" />
                     </div>

                     <div className="col-lg-6">
                        <input type="text" name="eaddress" className="full" placeholder="Email" />
                     </div>

                     <div className="col-lg-6">
                        <input type="text" name="companyname" className="full" placeholder="Company"  />
                     </div>

                     <div className="col-lg-6">
                          <input type="text" name="subject" className="full" placeholder="Subject"  />
                     </div>

                     <div className="col-lg-12"> 
                         <textarea name="text-area">    </textarea>
                     </div>
                     <div className="col-lg-12">
                        
                        <center>
                          <a href="#" className="btnsubmit">
                          <div className="buttonprojects">
                                 <div className="slidingbackground blue"></div>
                                 <div className="text">Submit</div>

                             </div>
                          </a>
                         </center> 
                       </div>
                 </div>     
                 </form>

                   <hr id="contacthr" />
              </div>

              <div className="container"> 
                     <div className="spacer">
                     </div>

                     <div className="col-lg-12"> 
                       <center> <h2> join our team</h2>
                           <p>Our purpose is simply to give amazing minds a place to do amazing work.<br/>

                               Please send your CV / portfolio to:<a href="mailto:jobs@facetofaceuae.com"> jobs@facetofaceuae.com</a>
                           </p>
                       </center>
                     </div>
                     <div className="spacer"></div>
             </div>


               
  <Footer/>
        </div>

        
    );
}
}

export default Contact;
