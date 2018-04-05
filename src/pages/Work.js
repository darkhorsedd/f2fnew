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
          <div id="fullwidthbg" className="workbg" >
             
                 <div className="column-content">
                      <div className="center-text">
                          
                          <p className="gwd-p-1yng gwd-gen-wpkhgwdanimation" id="Menu"></p>
                               <div className="title-landing">
                                  <h2 className="main-heading"> it’s not creative unless it works</h2>
                                  <p>With more than 20 years’ experience at combining creative and marketing, face to face creates <br/>
                                       award-winning projects and creative campaigns both online and offline. Browse through our case  <br/>
                                       studies, get inspired and learn more about how storytelling brands are mad.</p> <br/>
                               </div> 
                            
                      </div>
                      
                 </div>
                 
                      <img src="assests/images/arrow.png" className="scrollbtn bounce"/>
                      
              </div>


             <div id="work" className="center-div" > 
               
                <div  class="center-div-inner" >
               

                <Slider {...settings}>
                    <div class="clip"><div><a href="#/portfolio/100-YEARS-OF-ZAYED"><img src="http://www.facetofaceuae.com/newimages/creative-image.jpg"/><h2>Barbican. This is us.</h2></a></div></div>
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