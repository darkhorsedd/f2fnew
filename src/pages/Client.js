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

class Client extends Component {

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
          <div>
          <TopNavigation />
          
          <div id="fullwidthbg" className="clientbg" >
             
                 <div className="column-content">
                      <div className="center-text">
                          
                          <p className="gwd-p-1yng gwd-gen-wpkhgwdanimation" id="Menu"></p>
                               <div className="title-landing">
                                  <h2 className="main-heading">clients we are proud to represent</h2>
                                  <p>Whether it’s a local boutique business, or the largest, global blue chip, our focus is always the <br/>
                                    same. To produce great creative that works. We live or die by the quality of our work and the <br/>
                                    results it generates for our clients.</p> <br/>
                               </div> 
                            
                      </div>
                      
                 </div>
                 
                 <div className="scrollwrap"><div className="scroll-text">Scroll</div><span class="scroll-line init"></span></div>
                      
              </div>

              <div className="container"> 
                  <div className="spacer100">
               </div>
                
             </div>   


             <div id="clientlogodiv" >
              <div  id="homeclientlogo" className="container">
                     <div className="row">
                    
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="100" data-aos-offset="200">  <img src="http://www.facetofaceuae.com/newimages/logos/1.jpg" alt="..."  class="client-thumb"/> </div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="100" data-aos-offset="200"> <img src="http://www.facetofaceuae.com/newimages/logos/2.jpg" alt="..."  class="client-thumb"/>  </div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="100" data-aos-offset="200"> <img src="http://www.facetofaceuae.com/newimages/logos/3.jpg" alt="..."  class="client-thumb"/>  </div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="100" data-aos-offset="200"> <img src="http://www.facetofaceuae.com/newimages/logos/4.jpg" alt="..."  class="client-thumb"/>  </div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="100" data-aos-offset="200"> <img src="http://www.facetofaceuae.com/newimages/logos/5.jpg" alt="..."  class="client-thumb" /> </div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="100" data-aos-offset="200"> <img src="http://www.facetofaceuae.com/newimages/logos/6.jpg" alt="..."  class="client-thumb" /> </div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="200" data-aos-offset="300"> <img src="http://www.facetofaceuae.com/newimages/logos/7.jpg" alt="..."  class="client-thumb" /> </div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="200" data-aos-offset="300"> <img src="http://www.facetofaceuae.com/newimages/logos/8.jpg" alt="..."  class="client-thumb" /> </div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="200" data-aos-offset="300"> <img src="http://www.facetofaceuae.com/newimages/logos/9.jpg" alt="..."  class="client-thumb" /> </div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="200" data-aos-offset="300"> <img src="http://www.facetofaceuae.com/newimages/logos/10.jpg" alt="..." class="client-thumb" /> </div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="200" data-aos-offset="300"> <img src="http://www.facetofaceuae.com/newimages/logos/11.jpg" alt="..." class="client-thumb"/>  </div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="200" data-aos-offset="300"> <img src="http://www.facetofaceuae.com/newimages/logos/12.jpg" alt="..." class="client-thumb" /> </div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="300" data-aos-offset="400"> <img src="http://www.facetofaceuae.com/newimages/logos/13.jpg" alt="..." class="client-thumb"  /></div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="300" data-aos-offset="400"> <img src="http://www.facetofaceuae.com/newimages/logos/14.jpg" alt="..." class="client-thumb" /> </div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="300" data-aos-offset="400"> <img src="http://www.facetofaceuae.com/newimages/logos/15.jpg" alt="..." class="client-thumb" /> </div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="300" data-aos-offset="400"> <img src="http://www.facetofaceuae.com/newimages/logos/16.jpg" alt="..." class="client-thumb" /> </div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="300" data-aos-offset="400"> <img src="http://www.facetofaceuae.com/newimages/logos/17.jpg" alt="..." class="client-thumb" /> </div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="400" data-aos-offset="500"> <img src="http://www.facetofaceuae.com/newimages/logos/18.jpg" alt="..." class="client-thumb" /> </div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="400" data-aos-offset="500"> <img src="http://www.facetofaceuae.com/newimages/logos/19.jpg" alt="..." class="client-thumb" /> </div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="400" data-aos-offset="500"> <img src="http://www.facetofaceuae.com/newimages/logos/20.jpg" alt="..." class="client-thumb" /> </div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="400" data-aos-offset="500"> <img src="http://www.facetofaceuae.com/newimages/logos/21.jpg" alt="..." class="client-thumb" /> </div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="400" data-aos-offset="500"> <img src="http://www.facetofaceuae.com/newimages/logos/22.jpg" alt="..." class="client-thumb" /> </div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="400" data-aos-offset="500"> <img src="http://www.facetofaceuae.com/newimages/logos/23.jpg" alt="..." class="client-thumb" /> </div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="400" data-aos-offset="500"> <img src="http://www.facetofaceuae.com/newimages/logos/24.jpg" alt="..." class="client-thumb" /> </div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="500" data-aos-offset="600"> <img src="http://www.facetofaceuae.com/newimages/logos/25.jpg" alt="..." class="client-thumb" /> </div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="500" data-aos-offset="600"> <img src="http://www.facetofaceuae.com/newimages/logos/26.jpg" alt="..." class="client-thumb" /> </div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="500" data-aos-offset="600"> <img src="http://www.facetofaceuae.com/newimages/logos/27.jpg" alt="..." class="client-thumb" /> </div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="500" data-aos-offset="600"> <img src="http://www.facetofaceuae.com/newimages/logos/28.jpg" alt="..." class="client-thumb" /> </div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="500" data-aos-offset="600"> <img src="http://www.facetofaceuae.com/newimages/logos/29.jpg" alt="..." class="client-thumb" /> </div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="500" data-aos-offset="600"> <img src="http://www.facetofaceuae.com/newimages/logos/30.jpg" alt="..." class="client-thumb"/>  </div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="500" data-aos-offset="600"> <img src="http://www.facetofaceuae.com/newimages/logos/31.jpg" alt="..." class="client-thumb" /> </div></div>
                    <div className="logowrap col-sm-2"> <div data-aos="zoom-in" data-aos-delay="500" data-aos-offset="600"
                    > <img src="http://www.facetofaceuae.com/newimages/logos/32.jpg" alt="..." class="client-thumb" /> </div></div>
                     </div>
              </div>
            </div>


          <Footer />
          </div>
    ); 
  }
}

export default Client;