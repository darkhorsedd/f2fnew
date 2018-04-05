import React, { Component } from 'react';
import TopNavigation from '../pages/TopNavigation';
import Footer from '../pages/footer';
import axios from 'axios';
import Carousel from 'nuka-carousel'; 
import $ from 'jquery';
import ReactDOM from 'react-dom';
import { TweenMax, TimelineMax, Sine } from 'TweenMax'
import ScrollMagic from 'scrollmagic';
import 'animation.gsap';
import 'debug.addIndicators';
import Slider from 'react-slick'

class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            items:'',
            loading: 0
         };
      
    }

    componentDidMount(){
        $("html, body").animate({ scrollTop: 0 },600);
        var project = this.props.match.params.id;
        
        axios
        .get('http://facetofaceuae.com/dev/vimto2017/service/api/Vimto/getproject/?project='+project)
        .then((response) => {
          this.setState({items: response.data.data,loading:0});
          this.handleLoad();
          //this.setState({name: response.data.name});
        })
        .catch((e) => 
        {
          console.error(e);
        });
        
      //this.visualclick();
      setTimeout(function() { this.visualclick();}.bind(this), 800);
    } 


     visualclick()
    {
        //window.scrollTo(0,0);
        TweenMax.to('.main-visual', 0.5, {css: {
           width:'100%',
            transformOrigin: "center center"
        }});

        $('html,body').animate({
            scrollTop: $('#casestudycontent').offset().top-200},
            1600);
    }

    handleLoad(x) {
        $(document).ready(function(){
       
            var controller = new ScrollMagic.Controller();
            var tween1 = new TimelineMax();
            var tween2 = new TimelineMax();


            tween1.add([
                TweenMax.to('.main-visual', 0.5, {css: {
                    width:'100%',
                     transformOrigin: "center center"
                 }}),
                TweenMax.to('#casestudycontent', 0.5, {css:{opacity:1, top: -200}}),
                TweenMax.to(".top-nav-containerwrap", 0.5, {opacity:1,delay:0.4}),
                
            ]);

            tween2.add([
                TweenMax.to(".factwrapper", 0.7, {css:{transform:'scale(1,1)'}}),
                
                
            ]);
            var scene1 = new ScrollMagic.Scene({
                triggerElement:"#fullwidthbg", //Selector or DOM object that defines the start of the scene
                triggerHook: "onLeave", //sets the position of trigger hook w.r.t viewport
                duration:600,
                offset:0 //Offset Value for the Trigger hook position
            }).setPin('#fullwidthbg')
            .setTween(tween1);

            var scene2 = new ScrollMagic.Scene({
                triggerElement:".results", //Selector or DOM object that defines the start of the scene
                triggerHook: "onEnter", //sets the position of trigger hook w.r.t viewport
                duration:200,
                offset:150 //Offset Value for the Trigger hook position
            })
            .setTween(tween2);
      
              controller.addScene([
              scene1,scene2
                  ]);

               
      
      
          });
       }
      
     

     
     
  render() {

    const style={
        backgroundColor:'#b9f1ff'
    };
    if (this.state.loading)
    { return (
        
        <div>
           <center> <br/><br/><br/> <img src="https://css.stylebest.com/imagecache/st/images/domeimg/loading-normal.gif" /></center>
        </div>
    );
    }

    else {
            let divStyle = {
                color: 'white',
                backgroundImage: `url(http://www.facetofaceuae.com/newimages/${this.state.items.image1})`,
                WebkitTransition: 'all', // note the capital 'W' here
                msTransition: 'all' // 'ms' is the only lowercase vendor prefix
            };
      
    return (
         
       <div id="Portfolio">
                 <TopNavigation />

                   <div id="fullwidthbg" className="workinnerpage">
                      <div className="column-content">
                      <div className="center-text">
                                
                                  <div className="main-visual" style={style} onClick={this.visualclick}><img src="http://www.facetofaceuae.com/newimages/creative-image.jpg" /></div>
                      </div>
                    </div>
                              
                               <div className="scrollwrap"><div className="scroll-text">Scroll</div><span class="scroll-line init"></span></div>
                               
                 </div>     

              <div className="container"> 
                  <div className="spacer100">
               </div>
             </div>  
     
           <div id="casestudycontent">
             <div className="container">  
               <div className="row">
                   <div className="col-lg-6">
                  <h2> Barbican
                   This is us</h2>
                   </div>

                   <div className="col-lg-6">
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id hendrerit ex. Nulla in lacus cursus, gravida massa in, auctor augue. Aliquam tempus vel eros a aliquam. Aenean sit amet purus commodo, ullamcorper lorem id, faucibus justo.</p>
                   </div>
             </div>
             <div className="spacer100 trigger2"></div>
             <div className="row">
                 <div className="col-lg-12">
                 <iframe width="100%" height="500"  src="https://www.youtube.com/embed/kQrZNDsji4c?rel=0&amp;controls=0&amp;showinfo=0" ></iframe>
                   
                  </div>
             </div>
                 <div className="spacer100"> </div>
             <div className="row">
                   <div className="col-lg-12">
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque enim ex, ultricies sit amet rhoncus vel, elementum at ipsum. Aenean et euismod ex, in ultrices sem. Suspendisse ac sodales elit. Fusce scelerisque nunc a imperdiet interdum. Donec ultrices mauris faucibus est convallis scelerisque. Duis posuere pulvinar diam quis cursus. Sed sagittis diam quis lacus pellentesque, nec fermentum odio vestibulum. Sed volutpat at metus in facilisis. Quisque aliquam laoreet augue, id dictum dui dignissim eget. Ut tempor vehicula facilisis. Integer elementum molestie mauris eu rhoncus. Nullam volutpat diam ac sem porta tincidunt. Aliquam commodo gravida gravida. Aenean faucibus in massa sed interdum.
<br/>
<br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque enim ex, ultricies sit amet rhoncus vel, elementum at ipsum. Aenean et euismod ex, in ultrices sem. Suspendisse ac sodales elit. Fusce scelerisque nunc a imperdiet interdum. Donec ultrices mauris faucibus est convallis scelerisque. Duis posuere pulvinar diam quis cursus. Sed sagittis diam quis lacus pellentesque, nec fermentum odio vestibulum. Sed volutpat at metus in facilisis. Quisque aliquam laoreet augue, id dictum dui dignissim eget. Ut tempor vehicula facilisis. Integer elementum molestie mauris eu rhoncus. Nullam volutpat diam ac sem porta tincidunt. Aliquam commodo gravida gravida. Aenean faucibus in massa sed interdum.
                      </p>
                   </div>
             </div>      

             </div>

             <div className="spacer100"> </div>
             
             <div className="sm-container"> 
                     
             <div className="row results">
                  <div className="col-lg-12"><h6>Results</h6>  </div>
             </div>

                  <div className="row">
                      <div className="col-lg-4">
                           <div className="factwrapper">
                             <figure> 74 </figure>
                              <span>mill impressions</span>
                           </div>
                      </div>

                      <div className="col-lg-4">
                           <div className="factwrapper">
                             <figure> 74 </figure>
                              <span>mill impressions</span>
                           </div>
                      </div>

                      <div className="col-lg-4">
                           <div className="factwrapper">
                             <figure> 74 </figure>
                              <span>mill impressions</span>
                           </div>
                      </div>

                  </div>
            </div>
            <div className="spacer100"> </div>
 
            <div className="container">

               <div className="row">
                 <div class="col-lg-6"> 
                 <iframe width="100%" height="315" src="https://www.youtube.com/embed/kQrZNDsji4c?controls=0&amp;showinfo=0"></iframe>
                 </div>
                 <div class="col-lg-6">
                 <iframe width="100%" height="315" src="https://www.youtube.com/embed/kQrZNDsji4c?controls=0&amp;showinfo=0"></iframe>
                  </div>
               </div>
            </div>
     

            
            </div>

         

              
                           
              <div className="spacer30" />
              <Footer/>  
       </div>

    ); 
  }
}
}

export default Portfolio;