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
class Culture extends Component {

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
          <div id="culture">
          <TopNavigation />
          
             <TopNavigation/>

           <div id="fullwidthbg" className="contactbg" >
             
                 <div className="column-content">
                      <div className="center-text">
                          
                          <p className="gwd-p-1yng gwd-gen-wpkhgwdanimation" id="Menu"></p>
                               <div className="title-landing">
                                  <h2 className="main-heading">good people. great work.</h2>
                                  <p>We’re a group of good people. Gathered together over the years, a collective of right-minded individuals,<br/>
                                   producing great work for clients we’re proud to represent.  But the Face to Face culture isn’t simply a product <br/>
                                   of the talents assembled here, or our passion for the work. It’s about the character of the people.  </p>

                               </div> 
                            
                      </div>
                      
                 </div>
                 
                      
                      
              </div>


              <div className="container"> 
                  <div className="spacer100">
               </div>
                
             </div>  

             <div className="container">
                   <div className="row">
                          <div className="col-lg-5">
                             <div className="row">
                                <div className="col-lg-12">
                                    <a href="#"><div className="fright"> <img src="http://www.facetofaceuae.com/newimages/facebook.jpg" />
                                       <div className="culture-p"><p>On the CEO's mantle piece</p></div>
                                    </div></a>
                                 </div>
                                 <div className="col-lg-12">
                                 <a href="http://twitter.com" target="_new"> <div className="ftop fright"> <img src="http://www.facetofaceuae.com/newimages/twitter.jpg" /></div></a>
                                 </div>  
                             </div>   
                          </div>

                          <div className="col-lg-4">
                          <a href="https://soundcloud.com/gdvne/sets/mojichella" target="_new">    <div className="zigzag"> <img src="http://www.facetofaceuae.com/newimages/spotify.jpg" />
                               <div className="culture-p"><p>Our Sunday morning playlist </p></div>
                             </div> </a>
                          </div>

                          <div className="col-lg-2">
                              <div className="f31"><img src="http://www.facetofaceuae.com/newimages/31.jpg" />
                                 <div className="culture-p"><p>Our own artworker turned artist </p></div>
                              </div>
                          </div>
                   </div>
                  <br/>
                   <div className="row">
                       <div className="col-lg-2"><div className="zigzag"> <img src="http://www.facetofaceuae.com/newimages/21.jpg" /></div></div>
                       <div className="col-lg-4"><div className="zigzag"> <img src="http://www.facetofaceuae.com/newimages/22.jpg" /><div className="culture-p"><p>Let’s bowl, let’s bowl</p></div></div></div>
                       <div className="col-lg-2"><div className="zigzag"> <div className="row"> <div className="col-lg-12"><a href="https://www.pinterest.com/pin/730779477008865204/" target="_new"><img src="http://www.facetofaceuae.com/newimages/23.jpg" /></a></div>  <div className="col-lg-12 ftop2"><a href="https://www.instagram.com/eatingwithn/?hl=en" target="_new"><img src="http://www.facetofaceuae.com/newimages/231.jpg" /></a><div className="culture-p"><p>Our own influencer to follow</p></div></div></div> </div></div>
                       <div className="col-lg-4"><div className="zigzag"> <img src="http://www.facetofaceuae.com/newimages/24.jpg" /></div><div className="culture-p"><p>Face to Face after hours</p></div></div>
                   </div>

                   <br/>
                   <div className="row">
                       <div className="col-lg-4"><div className="zigzag"> <img src="http://www.facetofaceuae.com/newimages/41.jpg" /><div className="culture-p"><p>Creative that inspires us</p></div></div></div>
                       <div className="col-lg-4"><div className="zigzag"> <img src="http://www.facetofaceuae.com/newimages/ytube.jpg" /><div className="culture-p"><p>Client appreciation day</p></div></div></div>
                       <div className="col-lg-2"><div className="zigzag"> <img src="http://www.facetofaceuae.com/newimages/44.jpg" /><div className="culture-p"><p>Our talented friends and family</p></div></div></div>
                   </div>
             </div>

             <div className="container"> 
                  <div className="spacer100">
               </div>
             </div>   
          <Footer />
          </div>
    ); 
  }
}

export default Culture;