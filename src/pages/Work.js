import React, { Component } from 'react';
import TopNavigation from '../pages/TopNavigation';
import Footer from '../pages/footer';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import { TweenMax, TimelineMax, Sine } from 'TweenMax'
import ScrollMagic from 'scrollmagic';
import 'animation.gsap';
import 'debug.addIndicators';
import Slider from 'react-slick'
class Work extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
        
        var $this = $(ReactDOM.findDOMNode(this));
        this.handleLoad(this);
        this.WorkSection()
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

       WorkSection()
       {
           $('#work').height(window.innerHeight-200);
       }


  render() {

    var settings = {
        className: 'slider variable-width',
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        focusOnSelect:true,
        initialSlide:4,
        autoplay:true,
  

      };


    return (
          <div id="wordpage">
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


             <div id="work" className="center-div" > 
               
                <div  class="center-div-inner" >
               

                <Slider {...settings}>
                    <div class="clip"><div><img src="http://www.facetofaceuae.com/newimages/creative-image.jpg"/><h2>Barbican. This is us.</h2></div></div>
                    <div class="clip"><div><img src="http://www.facetofaceuae.com/newimages/creative-image2.jpg"/><h2>Barbican. This is us.</h2></div></div>
                    <div class="clip"><div><img src="http://www.facetofaceuae.com/newimages/creative-image3.jpg"/><h2>Barbican. This is us.</h2></div></div>    
                    <div class="clip"><div><img src="http://www.facetofaceuae.com/newimages/creative-image2.jpg"/><h2>Barbican. This is us.</h2></div></div>              
                </Slider>
                </div>


             </div>

             <div className="spacer100"></div>
             <div className="spacer100"></div>

             <div class="container">

               <div class="row">
               {/*project */}
                   <div class="col-lg-3">
                       <div class="projectthumb" Style="background-image:url('http://www.facetofaceuae.com/newimages/project-images.jpg')"> 
                         <div className="hovertext-wraper">
                            <div className="inner-hover">Barbican. This is us.</div>
                         </div>
                       </div>
                   </div>
                 {/*project close */} 

                  {/*project */}
                  <div class="col-lg-3">
                       <div class="projectthumb" Style="background-image:url('http://www.facetofaceuae.com/newimages/project-images.jpg')"> 
                         <div className="hovertext-wraper">
                            <div className="inner-hover">Barbican. This is us.</div>
                         </div>
                       </div>
                   </div>
                 {/*project close */} 

                  {/*project */}
                  <div class="col-lg-3">
                       <div class="projectthumb" Style="background-image:url('http://www.facetofaceuae.com/newimages/project-images.jpg')"> 
                         <div className="hovertext-wraper">
                            <div className="inner-hover">Barbican. This is us.</div>
                         </div>
                       </div>
                   </div>
                 {/*project close */} 

                  {/*project */}
                  <div class="col-lg-3">
                       <div class="projectthumb" Style="background-image:url('http://www.facetofaceuae.com/newimages/project-images.jpg')"> 
                         <div className="hovertext-wraper">
                            <div className="inner-hover">Barbican. This is us.</div>
                         </div>
                       </div>
                   </div>
                 {/*project close */} 

                  {/*project */}
                  <div class="col-lg-3">
                       <div class="projectthumb" Style="background-image:url('http://www.facetofaceuae.com/newimages/project-images.jpg')"> 
                         <div className="hovertext-wraper">
                            <div className="inner-hover">Barbican. This is us.</div>
                         </div>
                       </div>
                   </div>
                 {/*project close */} 

                  {/*project */}
                  <div class="col-lg-3">
                       <div class="projectthumb" Style="background-image:url('http://www.facetofaceuae.com/newimages/project-images.jpg')"> 
                         <div className="hovertext-wraper">
                            <div className="inner-hover">Barbican. This is us.</div>
                         </div>
                       </div>
                   </div>
                 {/*project close */} 

                  {/*project */}
                  <div class="col-lg-3">
                       <div class="projectthumb" Style="background-image:url('http://www.facetofaceuae.com/newimages/project-images.jpg')"> 
                         <div className="hovertext-wraper">
                            <div className="inner-hover">Barbican. This is us.</div>
                         </div>
                       </div>
                   </div>
                 {/*project close */} 

                  {/*project */}
                  <div class="col-lg-3">
                       <div class="projectthumb" Style="background-image:url('http://www.facetofaceuae.com/newimages/project-images.jpg')"> 
                         <div className="hovertext-wraper">
                            <div className="inner-hover">Barbican. This is us.</div>
                         </div>
                       </div>
                   </div>
                 {/*project close */}

                 <div className="spacer100"></div>
               </div>

             </div>

            

            
           <Footer />

          
          </div> 

            

    ); 
  }
}

export default Work;