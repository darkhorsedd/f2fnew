import React, { Component } from 'react';
import TopNavigation from '../pages/TopNavigation';
import Footer from '../pages/footer';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import { TweenMax, TimelineMax, Sine } from 'TweenMax'
import ScrollMagic from 'scrollmagic';
import 'animation.gsap';
import 'debug.addIndicators';
class About extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
        
        var $this = $(ReactDOM.findDOMNode(this));
        this.handleLoad(this);
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
 <TopNavigation />
            <div id="fullwidthbg" >
             
                 <div className="column-content">
                      <div className="center-text">
                          <div className="htmlNoPages">
                          <p className="gwd-p-1yng gwd-gen-wpkhgwdanimation" id="Menu"><a href="" className="linka" video-id="#video-bg">About</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<a href="" className="linka" video-id="#video-bg2">Culture</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<a href="" className="linka">People</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<a href="">Clients</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<a href="">Work</a>&nbsp;
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<a href="">Contact</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
                               <div class="title-landing">
                                <p className="gwd-p-v0bs gwd-gen-pb6igwdanimation">face to face / mcgarry bowen</p>
                                <p className="gwd-p-1j10 gwd-gen-1t75gwdanimation">we are</p>
                                <div className="gwd-div-3vay gwd-gen-bfytgwdanimation"></div>
                                <div className="gwd-animation-event event-1-animation" data-event-name="event-1" data-event-time="4500" id="trig"></div>
                               </div> 
                            </div>
                      </div>
                      
                 </div>
                 
                      <img src="assests/images/arrow.png" className="scrollbtn bounce"/>
                      <video autoPlay loop muted id="video-bg" className="og-1">

                        <source src="http://facetofaceuae.com/videof2f.mp4" type="video/mp4" />

                    </video>

                    <video autoPlay loop muted id="video-bg2" >

                        <source src="http://ak2.picdn.net/shutterstock/videos/4493552/preview/stock-footage-open-business-office-with-busy-staff-members-high-quality-hd-video-footage.mp4" type="video/mp4" />

                    </video>
              </div>

       
            
              
              <div className="spacer"></div>
              <div className="container"> 
                      <div className="row">
                            <div className="col-lg-6">
                                  <h3 className="born-in">
                                  born in <br/>
                                  1995
                                  </h3>
                                   
                            </div>

                            <div className="col-lg-6">
                               <div className="textboxabout">    
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id hendrerit ex. Nulla in lacus cursus, vgravida massa in, auctor augue. Aliquam tempus vel eros a aliquam. Aenean sit amet purus commodo, ullamcorper lorem id, faucibus justo.
                               </div>
                            </div>
                       </div>
                       <div class="row">
                           <div className="col-lg-12">
                             <img src="http://facetofaceuae.com/newimages/aboutmap.jpg"/>
                             <div className="Dubai">Dubai</div>
                             <div className="pulsecontainer">
                                 <img src="http://facetofaceuae.com/newimages/pulse.png"/>
                                  <div class="pulse-ring"></div>
                             </div>
                             
                           </div>
                       </div>
                       <div className="spacer"></div>
                       <div class="row about-copy">
                           <div className="col-lg-12">
                               
                               <h2 id="approach">our approach</h2>  
                            </div>

                            <div className="col-lg-6">
                              <div className="aboutVideo">
                                 <iframe width="370" height="370" src="https://www.youtube.com/embed/kQrZNDsji4c" frameborder="0"></iframe>
                            </div>
                            </div>

                            <div className="col-lg-5">
                              <div className="textarea">
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus nisl nunc, ut venenatis lorem consequat rhoncus. Vivamus auctor ut metus eu malesuada.
                                <br/><br/>
                               Nam in felis ac nunc tristique suscipit non at lectus. Vivamus nec justo quis sem fermentum facilisis vitae at ligula. Sed vitae quam erat. Vivamus mattis posuere arcu eget auctor. Sed rutrum tincidunt dolor quis pharetra.
                               <br/><br/>
                                Aenean sollicitudin augue accumsan, lobortis metus at, egestas purus.
                               </div> 
                            </div>

                            <div className="col-lg-1">

                            </div>
                             
                    </div>

                    <div className="spacer"></div>

                    <div class="row">
                           <div className="col-lg-12">
                               
                               <h2 >random facts about us</h2>  
                            </div>
                     </div>

                     <div className="factscontainer">
                             <div class="row">

                            
                                    <div className="col-lg-6">
                                    { /* Fact Box */} 
                                    <div class="row">
                                        <div className="col-lg-12">
                                                  <div className="circle">
                                                            <img src="http://facetofaceuae.com/newimages/flag.png" />

                                                            <h4>17</h4>
                                                            <h6>nationalities</h6>
                                                  </div>
                                        </div>
                                    </div>
                                    { /* Fact Box CLOSE */}  

                                    { /* Fact Box */} 
                                    <div class="row">
                                        <div className="col-lg-12">
                                                  <div className="circle">
                                                            <img src="http://facetofaceuae.com/newimages/award.png" />

                                                            <h4>18</h4>
                                                            <h6>awards</h6>
                                                  </div>
                                        </div>
                                    </div>
                                    { /* Fact Box CLOSE */}     

                                    { /* Fact Box */} 
                                    <div class="row">
                                        <div className="col-lg-12">
                                                  <div className="circle">
                                                            <img src="http://facetofaceuae.com/newimages/brain.png" />

                                                            <h4>312</h4>
                                                            <h6>years of combined experience</h6>
                                                  </div>
                                        </div>
                                    </div>
                                    { /* Fact Box CLOSE */}     

                         
                                    
                                     </div>   


                                    <div className="col-lg-6 col-2-facts"> 
                                    
                                    <div class="row">
                                        <div className="col-lg-12">
                                                  <div className="circle">
                                                            <img src="http://facetofaceuae.com/newimages/building.png" />

                                                            <h4>26</h4>
                                                            <h6>floors up</h6>
                                                  </div>
                                        </div>
                                    </div>
                                    { /* Fact Box CLOSE */} 

                                    <div class="row">
                                        <div className="col-lg-12">
                                                  <div className="circle">
                                                            <img src="http://facetofaceuae.com/newimages/target.png" />

                                                            <h4>82</h4>
                                                            <h6>markets where our work has run</h6>
                                                  </div>
                                        </div>
                                    </div>
                                    { /* Fact Box CLOSE */} 


                                    <div class="row">
                                        <div className="col-lg-12">
                                                  <div className="circle">
                                                            <img src="http://facetofaceuae.com/newimages/cups.png" />

                                                            <h4>52,127</h4>
                                                            <h6>cups of tea last year</h6>
                                                  </div>
                                        </div>
                                    </div>
                                    { /* Fact Box CLOSE */} 
                                    
                                    </div>
                             </div>

                     </div>


               </div>
           
               <div className="spacer"></div>      
        <Footer/>       
               
        </div>

        
    );
}
}

export default About;
