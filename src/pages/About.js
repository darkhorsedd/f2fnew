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
            <div id="fullwidthbg" class="aboutbg">
             
                 <div className="column-content">
                      <div className="center-text">
                      
                          <p className="gwd-p-1yng gwd-gen-wpkhgwdanimation" id="Menu">
                         </p>
                               <div className="title-landing">
                               <h2 className="main-heading">we are an agency of change</h2>
                               <p>
                               Being at the forefront of positive change with agility, excellence and quality. We realize innovative <br/>
                               ideas across all media channels for agencies and brands around the world.
                               </p>
                               </div> 
                            
                      </div>
                      
                 </div>
                 
                      <img src="assests/images/arrow.png" className="scrollbtn bounce"/>
                     
              </div>

       
            
              
              <div className="spacer"></div>
              <div className="container"> 
                      <div className="row">
                            <div className="col-lg-6">
                                  <h3 className="born-in" data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine">
                                  born in <br/>
                                  1995
                                  </h3>
                                   
                            </div>

                            <div className="col-lg-6">
                               <div className="textboxabout" data-aos="fade-left" data-aos-offset="500" data-aos-easing="ease-in-sine">    
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id hendrerit ex. Nulla in lacus cursus, vgravida massa in, auctor augue. Aliquam tempus vel eros a aliquam. Aenean sit amet purus commodo, ullamcorper lorem id, faucibus justo.
                               </div>
                            </div>
                       </div>
                       <div class="row" data-aos="zoom-in-down" data-aos-offset="500" data-aos-easing="ease-in-sine">
                           <div className="col-lg-12">
                             <img src="http://facetofaceuae.com/newimages/aboutmap.jpg"/>
                             <div className="Dubai" data-aos="zoom-in" data-aos-delay="200" data-aos-offset="500" data-aos-easing="ease-in-sine">Dubai</div>
                             <div className="pulsecontainer">
                                 <img src="http://facetofaceuae.com/newimages/pulse.png"/>
                                  <div class="pulse-ring" data-aos="fade-right" data-aos-offset="800" data-aos-delay="100" data-aos-easing="ease-in-sine"></div>
                             </div>
                             
                           </div>
                       </div>
                       <div className="spacer"></div>
                       <div class="row about-copy" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine">
                           <div className="col-lg-12">
                               
                               <h2 id="approach" data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine">our approach</h2>  
                            </div>

                            <div className="col-lg-6">
                              <div className="aboutVideo">
                                 <iframe width="370" height="370" src="https://www.youtube.com/embed/538s1xXJEMM" frameborder="0"></iframe>
                            </div>
                            </div>

                            <div className="col-lg-5">
                              <div className="textarea" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
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

                    <div className="spacer trigger-2"></div>

                    <div class="row">
                           <div className="col-lg-12">
                               
                               <h2 data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine">random facts about us</h2>  
                            </div>
                     </div>

                     <div className="factscontainer">
                             <div class="row">

                            
                                    <div className="col-lg-6">
                                    { /* Fact Box */} 
                                    <div class="row">
                                        <div className="col-lg-12">
                                                  <div className="circle" data-aos="zoom-in-down" data-aos-delay="200" data-aos-anchor-placement="top-center">
                                                           <div  data-aos="zoom-in-down" data-aos-delay="200" data-aos-anchor-placement="top-center">
                                                            <img src="http://facetofaceuae.com/newimages/flag.png" />

                                                            <h4>17</h4>
                                                            <h6>nationalities</h6>
                                                           </div>  
                                                  </div>
                                        </div>
                                    </div>
                                    { /* Fact Box CLOSE */}  

                                    { /* Fact Box */} 
                                    <div class="row">
                                        <div className="col-lg-12">
                                                  <div className="circle" data-aos="zoom-in-down" data-aos-delay="200" data-aos-anchor-placement="top-center">
                                                          <div data-aos="zoom-in-down" data-aos-delay="200" data-aos-anchor-placement="top-center">  
                                                            <img src="http://facetofaceuae.com/newimages/award.png" />

                                                            <h4>18</h4>
                                                            <h6>awards</h6>
                                                          </div> 
                                                  </div>
                                        </div>
                                    </div>
                                    { /* Fact Box CLOSE */}     

                                    { /* Fact Box */} 
                                    <div class="row">
                                        <div className="col-lg-12" >
                                                  <div className="circle" data-aos="zoom-in-down" data-aos-delay="100" data-aos-anchor-placement="top-center">
                                                         <div data-aos="zoom-in-down" data-aos-delay="200" data-aos-anchor-placement="top-center"> 
                                                            <img src="http://facetofaceuae.com/newimages/brain.png" />

                                                            <h4>312</h4>
                                                            <h6>years of combined experience</h6>
                                                        </div> 
                                                  </div>
                                        </div>
                                    </div>
                                    { /* Fact Box CLOSE */}     

                         
                                    
                                     </div>   


                                    <div className="col-lg-6 col-2-facts"> 
                                    
                                    <div class="row">
                                        <div className="col-lg-12">
                                                  <div className="circle" data-aos="zoom-in-down" data-aos-delay="150" data-aos-anchor-placement="top-center">
                                                          <div data-aos="zoom-in-down" data-aos-delay="200" data-aos-anchor-placement="top-center">  
                                                            <img src="http://facetofaceuae.com/newimages/building.png" />
                                                            <h4>26</h4>
                                                            <h6>floors up</h6>
                                                          </div>  
                                                  </div>
                                        </div>
                                    </div>
                                    { /* Fact Box CLOSE */} 

                                    <div class="row">
                                        <div className="col-lg-12">
                                                  <div className="circle" data-aos="zoom-in-down" data-aos-delay="150" data-aos-anchor-placement="top-center">
                                                          <div  data-aos="zoom-in-down" data-aos-delay="200" data-aos-anchor-placement="top-center">  
                                                            <img src="http://facetofaceuae.com/newimages/target.png" />

                                                            <h4>82</h4>
                                                            <h6>markets where our work has run</h6>
                                                          </div>  
                                                  </div>
                                        </div>
                                    </div>
                                    { /* Fact Box CLOSE */} 


                                    <div class="row">
                                        <div className="col-lg-12">
                                                  <div className="circle" data-aos="zoom-in-down" data-aos-delay="150" data-aos-anchor-placement="top-center">
                                                           <div data-aos="zoom-in-down" data-aos-delay="200" data-aos-anchor-placement="top-center"> 
                                                            <img src="http://facetofaceuae.com/newimages/cups.png" />
                                                            <h4>52,127</h4>
                                                            <h6>cups of tea last year</h6>
                                                           </div> 
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
