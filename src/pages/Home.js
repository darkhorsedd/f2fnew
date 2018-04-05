import React, { Component } from 'react';
import TopNavigation from '../pages/TopNavigation';
import Footer from '../pages/footer';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import axios from 'axios';
import Projectcard from '../components/projectcard';
import { TweenMax, TimelineMax, Sine } from 'TweenMax'
import ScrollMagic from 'scrollmagic';
import 'animation.gsap';
import 'debug.addIndicators';
import $ from 'jquery';
class Home extends Component {
    constructor(props) {
        super(props);
    
        this.handleHover = this.handleHover.bind(this);
        this.changeProjects=this.changeProjects.bind(this);
        this.changeProjectsBack = this.changeProjectsBack.bind(this);
        this.state = {
            isHovered:"",
            projectdata:"",
            limit:"0"
        };
      }

      handleHover(){
        this.setState({
            isHovered: !this.state.isHovered
        });
      
    }

    changeProjects()
    {
        var newLimit = this.state.limit + 2;
        this.makeAjaxCall(newLimit);
        this.state.limit = newLimit;
    }
    changeProjectsBack()
    {
        var newLimit = this.state.limit - 2;
        this.makeAjaxCall(newLimit);
        this.state.limit = newLimit;
    }


    componentDidMount()
    {
          window.scrollTo(0,0);
           this.makeAjaxCall(this.state.limit);
           this.screenAnimation();
           this.Section();
           var lastScrollTop = 0;
           this.scrollSection();

           window.postions=[{
               'top':[{
                   'next':'rec'
               }],


           }];

    }

    scrollSection(){

        $(window).scroll(function(e){
            
                        /*var postion= $('#section2').offset().top;
                      
                       
                        $('html,body').animate({
                            scrollTop: $('#section2').offset().top},
                            1600); 
                            */
                           var st = $(this).scrollTop();
                           
                            if(st < window.lastScrollTop) {
            
                                
                                console.log('up 1');
                            }
                            else {
                                console.log('down 1');
                            }
                            window.lastScrollTop = st;
                    })    
             
    }

    screenAnimation()
    {
        var controller = new ScrollMagic.Controller();
        var tween1 = new TimelineMax();
        tween1.add([
            TweenMax.to('.vd', 0.01, {css:{'z-index':'0'}}),
            TweenMax.to('#Menu', 0.5, {css:{opacity:0, top: -300}}),
            TweenMax.to(".title-landing", 0.6, {css:{left:"-400px",scale:0,top:-300}}),
            TweenMax.to(".top-nav-containerwrap", 0.5, {opacity:1,delay:0.4}),
            TweenMax.to(".scrollwrap", 0.5, {scale:0})
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
        
            

    }

    makeAjaxCall(limit)
    {
        axios
        .get('http://facetofaceuae.com/dev/vimto2017/service/api/Vimto/gethomeproject/?limitblock='+limit)
        .then((response) => {
          this.setState({projectdata: response.data,loading:0});
          
          //this.setState({name: response.data.name});
        })
        .catch((e) => 
        {
          console.error(e);
        });
        
    }

    Section()
    {
        $('.sections').height(window.innerHeight);
        //$( ".sections" ).wrap( "<div class='sections-inner'></div>" );
    }

  render() {
   
    const btnClass = this.state.isHovered ? "dep" : "";

    
      

    return (
        <div>
       
              <TopNavigation/>
         
          <div id="fullpage">
         
          <div class="section" id="section1">
          <video autoPlay loop controls muted id="video-bg" className="og-1 vd">

                        <source src="http://facetofaceuae.com/videof2f.mp4" type="video/mp4"  />

                    </video>

                    <video autoPlay loop muted id="video-bg2" className="vd">

                        <source src="http://ak2.picdn.net/shutterstock/videos/4493552/preview/stock-footage-open-business-office-with-busy-staff-members-high-quality-hd-video-footage.mp4" type="video/mp4" />

                    </video>
              <div id="fullwidthbg" >
                 <div className="column-content">
                      <div className="center-text">
                          <div className="htmlNoPages">
                          <p className="gwd-p-1yng gwd-gen-wpkhgwdanimation" id="Menu"><a href="" className="linka" video-id="#video-bg">About</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<a href="" className="linka" video-id="#video-bg2">Culture</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<a href="" className="linka">People</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<a href="">Clients</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<a href="">Work</a>&nbsp;
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<a href="">Contact</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
                          <div className="title-landing">
  <p className="gwd-p-v0bs gwd-gen-pb6igwdanimation">face to face / mcgarry bowen</p>
  <p className="gwd-p-1j10 gwd-gen-1t75gwdanimation">we are</p>
  <div className="gwd-div-3vay gwd-gen-bfytgwdanimation"></div>
  <div className="gwd-animation-event event-1-animation" data-event-name="event-1" data-event-time="4500"></div>
</div>
                            </div>
                      </div>
                 </div>
                 <div className="scrollwrap"><div className="scroll-text">Scroll</div><span class="scroll-line init"></span></div>
                      
              </div>
        </div> 
            <div className="sections" id="section2">
            
            <div className="inenr-sections">

             <div id="work" className="container" > 
                     <div className="topLine"></div>
                    <div className="row">

                        <div className="col-lg-4">
                                <h4>WORK</h4>
                                <h2>
                                it’s not
                                creative
                                unless
                                it works
                                </h2>
                        </div>
                        
                        <div className="col-lg-8">
                               <Projectcard  data={this.state.projectdata}/>
      

                        </div>
                        

                       
                    </div>
                   
                    <div className="row">
                         <div className="col-lg-6">
                             <div className="buttonprojects">
                                 <div className="slidingbackground"></div>
                                 <div className="text"> view all projects</div>

                             </div>
                         </div>
                         <div className="col-lg-6 nav-container">
                               <div className="nav-arrows" >
                                           <div className={'rightarrow '+btnClass} id="rightarrow" onClick={this.changeProjects}>
                                              <img src="http://facetofaceuae.com/newimages/arrow-right.jpg"   />
                                           </div>
                                           <div className="leftarrow"  onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} onClick={this.changeProjectsBack}>
                                           <img src="http://facetofaceuae.com/newimages/arrow-left.jpg"  className="leftarrow-img" />
                                           </div>
                               </div>
                         </div>
                    </div>

             </div>
            </div>

            </div>

            
            <div class="sections" id="section3">
                  
            <div className="inenr-sections">               
                  
             <div id="about" className="container"> 
                   <div className="row">
                       <div className="col-lg-12 aboutwrapper" >

                       <div className="homeaboutdiv"> 
                         <div> 
                          <h4 >About</h4>

                          <h2>We are an agency<br/> of change</h2>
                          </div>     
                       
                          <p class="widthp">
                          One that believes in the power of creativity to have a 
                          transformational effect on companies, brands and communities.  
                          Bring us your biggest problem. That's all we ask.   
                          </p>     
                          </div>
                          
                          
                      </div>  
                      <div className="col-lg-12 buttonarea">
                      <a href="#/about" >
                          <div className="buttonprojects">
                                 <div className="slidingbackground blue"></div>
                                 <div className="text">Learn more</div>

                             </div>
                          </a>
                      </div> 
                   </div>

             </div>
             </div>
             </div>


             <div class="sections">


            <div id="culture" className="container"> 
                   <div className="row">
                       <div className="col-lg-12 culturewrapper">
                         <div id="scene2">
                            <div>
                          <h4 >Culture</h4>

                          <h2 >Good People.<br/> Great Work.</h2>
                            </div>
                                        
                        </div>
                        </div>
                        <div className="col-lg-12 cultr-section2">

                          <div class="row">
                                   <div className="col-lg-5">
                                   <p>
                                    We’re a group of good people. Gathered together over the years, <br/>
                                    a collective of right-minded individuals, producing great work <br/>
                                    for clients we’re proud to represent.   <br/>
                                    </p>    
                                   
                                   </div>
                                   <div className="col-lg-3"><img src="http://www.facetofaceuae.com/newimages/cultr.jpg" /></div>
                                   <div className="col-lg-3">
                                   
                                   <div className="demotext">
                                        <h6>lorem ipsum</h6>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla ultrices odio a consectetur.
                                   </div>
                                   
                                   </div>
                                   <div className="col-lg-1"></div>
                          </div>

                           

                          
                      </div>   
                   </div>

             </div>
            </div>
             
            
            
           <Footer />
          
           </div>
         
   </div>
            

    ); 
  }
}

export default Home;