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
import Slider from 'react-slick';
import Scrolltotop from '../components/scrolltotop';
import { Player,BigPlayButton  } from 'video-react';


class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            items:'',
            loading: 1
         };
      
    }

    componentDidMount(){
        window.scrollTo(0,0);
        var project = this.props.match.params.id;
        
        axios
        .get('http://facetofaceuae.com/dev/vimto2017/service/api/Vimto/getproject/?project='+project)
        .then((response) => {

          this.setState({items: response.data.data});
          
         // this.handleLoad();
          //this.setState({name: response.data.name});
          
         // 
        })
        .catch((e) => 
        {
          console.error(e);
        });
        
      
    
    } 
    
  


     visualclick()
    {
        
        TweenMax.to('.main-visual', 0.5, {css: {
           width:'100%',
            transformOrigin: "center center"
        }});

        $('html,body').animate({
            scrollTop: $('#casestudycontent').offset().top-800},
            900);
    }

    handleLoad(x) {
        $(document).ready(function(){
       
            var controller = new ScrollMagic.Controller();
            var tween1 = new TimelineMax();
            var tween2 = new TimelineMax();


            tween1.add([
                TweenMax.to('.main-visual', 0.1, {css: {
                    width:'100%',
                    transform:'scale(1.05,1.05)',
                 }}),
                TweenMax.to('#casestudycontent', 0.5, {css:{opacity:1, top: -200}}),
                TweenMax.to(".top-nav-containerwrap", 0.5, {opacity:1,delay:0.1}),
                TweenMax.to(".back-button-project-wrap", 0.7, {css:{display:'block'}}),
            ]);

          
            var scene1 = new ScrollMagic.Scene({
                triggerElement:"#fullwidthbg", //Selector or DOM object that defines the start of the scene
                triggerHook: "onLeave", //sets the position of trigger hook w.r.t viewport
                duration:200,
                offset:0 //Offset Value for the Trigger hook position
            }).setPin('#fullwidthbg')
            .setTween(tween1);

            
              controller.addScene([
              scene1
                  ]);

               
      
                  setTimeout(function(){$('html,body').animate({scrollTop: 300},500); }, 300);
          });
       }

   
      
     

     
     
  render() {

    const style={
        backgroundImage: `url(${this.state.items.image1})`,
    };


    if (this.state.loading)
    { return (
        
        <div>
           <center> <br/><br/><br/> <img src="http://www.facetofaceuae.com/newimages/setting.gif" /></center>
           <img className="hiddenimage" src={this.state.items.image1}  onLoad={() => {this.setState({loading: 0});this.handleLoad()}} />
        </div>
    );
    }

    else {
            let divStyle = {
                
                backgroundColor:this.state.items.bcolor,
                
            };
            console.log(divStyle);
      
    return (
         
       <div id="Portfolio">
                 <TopNavigation />

                   <div id="fullwidthbg" className="workinnerpage">
                      <div className="column-content">
                      <div className="center-text">
                                  <div className="main-visual" style={style}  onClick={this.visualclick} onLoad={this.inital}>
                                     <div className="back-button-project-wrap">
                                       <a href="/work"><div className="back-project-button">
                                         <div className="arrow-back"></div>
                                            <span>Back</span>
                                       </div></a>
                                     </div>
                                  </div>
                      </div>
                    </div>
                              
                               <div className="scrollwrap"><div className="scroll-text">Scroll</div><span class="scroll-line init"></span></div>
                               
                 </div>     

              <div className="container"> 
                  <div className="spacer30">
               </div>
             </div>  
     
           <div id="casestudycontent">
             <div className="container">  
               <div className="row">
                  <div className="col-lg-1"></div>
                   <div className="col-lg-10">
                   <h3 className="project-client">{this.state.items.heading}</h3>
                  <h2 className="project-name">{this.state.items.heading2}</h2>
                   </div>
                   <div className="col-lg-1"></div> 
             </div>
             <div className="spacer100 trigger2"></div>
             <div className="row">
             <div className="col-lg-1"></div>
                 <div className="col-lg-10">

                 {(() => {
                          if(this.state.items.layout==2)
                          {
                              return(
                                   <div className="row">
                                         <div className="col-lg-4">
                                         <img src="http://www.facetofaceuae.com/newimages/mobile-layout.png" />
                                               <div className="div-inner-video">
                                                   {(()=>{
                                                             if(this.state.items.video1.split('.').pop()=='jpg' || this.state.items.video1.split('.').pop()=='jpeg' )
                                                             {
                                                                     return(
                                                                         <img src={this.state.items.video1} />
                                                                     )
                                                             }

                                                             else{
                                                                      return(
                                                                        <Player playsInline src={this.state.items.video1}>
                                                                           <BigPlayButton position="center" />
                                                                        </Player>
                                                                      )
                                                             }
                                                   })()}
                                                 
                                               </div>
                                           </div>

                                         <div className="col-lg-4">
                                            <img src="http://www.facetofaceuae.com/newimages/mobile-layout.png" />
                                            <div className="div-inner-video">
                                            {(()=>{
                                                if(this.state.items.video2.split('.').pop()=='jpg' || this.state.items.video2.split('.').pop()=='jpeg' )
                                                {
                                                        return(
                                                            <img src={this.state.items.video2} />
                                                        )
                                                }
                                            
                                                else{
                                                         return(
                                                           <Player playsInline src={this.state.items.video2}>
                                                              <BigPlayButton position="center" />
                                                           </Player>
                                                         )
                                                }
                                             })()}
                                    
                                               </div>
                                         </div>

                                         <div className="col-lg-4">
                                         <img src="http://www.facetofaceuae.com/newimages/mobile-layout.png" />
                                         <div className="div-inner-video">
                                         {(()=>{
                                                             if(this.state.items.video3.split('.').pop()=='jpg' || this.state.items.video3.split('.').pop()=='jpeg' )
                                                             {
                                                                     return(
                                                                         <img src={this.state.items.video3} />
                                                                     )
                                                             }

                                                             else{
                                                                      return(
                                                                        <Player playsInline src={this.state.items.video3}>
                                                                           <BigPlayButton position="center" />
                                                                        </Player>
                                                                      )
                                                             }
                                          })()}
                                                 
                                               </div>
                                         </div>
                                   </div>
                              )
                          }



                          if(this.state.items.layout==3)
                          {
                              return(
                                   <div className="row">
                                         <div className="col-lg-4">
                                         <img src="http://www.facetofaceuae.com/newimages/mobile-layout.png" />
                                               <div className="div-inner-video">
                                                   {(()=>{
                                                             if(this.state.items.image3.split('.').pop()=='jpg' || this.state.items.image3.split('.').pop()=='jpeg' )
                                                             {
                                                                     return(
                                                                         <img src={this.state.items.image3} />
                                                                     )
                                                             }

                                                             else{
                                                                      return(
                                                                        <Player playsInline src={this.state.items.image3}>
                                                                           <BigPlayButton position="center" />
                                                                        </Player>
                                                                      )
                                                             }
                                                   })()}
                                                 
                                               </div>
                                           </div>

                                         <div className="col-lg-4">
                                            <img src="http://www.facetofaceuae.com/newimages/mobile-layout.png" />
                                            <div className="div-inner-video">
                                            {(()=>{
                                                if(this.state.items.image4.split('.').pop()=='jpg' || this.state.items.image4.split('.').pop()=='jpeg' )
                                                {
                                                        return(
                                                            <img src={this.state.items.image4} />
                                                        )
                                                }
                                            
                                                else{
                                                         return(
                                                           <Player playsInline src={this.state.items.image4}>
                                                              <BigPlayButton position="center" />
                                                           </Player>
                                                         )
                                                }
                                             })()}
                                    
                                               </div>
                                         </div>

                                         <div className="col-lg-4">
                                         <img src="http://www.facetofaceuae.com/newimages/mobile-layout.png" />
                                         <div className="div-inner-video">
                                         {(()=>{
                                                             if(this.state.items.homeimage.split('.').pop()=='jpg' || this.state.items.homeimage.split('.').pop()=='jpeg' )
                                                             {
                                                                     return(
                                                                         <img src={this.state.items.homeimage} />
                                                                     )
                                                             }

                                                             else{
                                                                      return(
                                                                        <Player playsInline src={this.state.items.homeimage}>
                                                                           <BigPlayButton position="center" />
                                                                        </Player>
                                                                      )
                                                             }
                                          })()}
                                                 
                                               </div>
                                         </div>
                                   </div>
                              )
                          }

                        

                          else{
                              return(
                                   <div>
                                       {(()=>{
                                             if(this.state.items.video1.split('.').pop()=='jpg')
                                             {
                                                 return(
                                                      <img src={this.state.items.video1} />
                                                 )
                                             }

                                             else{
                                                 
                                                return(
                                                    <Player playsInline src={this.state.items.video1}>
                                                    <BigPlayButton position="center" />
                                                    </Player>
                                                )

                                             }
                                       })()}
                                            
                                </div>
                              )
                          }
                        })()}

                      
                       
                  </div>
                  <div className="col-lg-1"></div>
             </div>
                 <div className="spacer100"> </div>
             <div className="row">
             <div className="col-lg-1"></div>
                   <div className="col-lg-5">
                      <p className="p-project" dangerouslySetInnerHTML={{__html: this.state.items.description}}>
                      
                      </p>
                   </div>
                   <div className="col-lg-1"></div>
                   <div className="col-lg-4 pimage"><img src={this.state.items.image2} /></div>
                   <div className="col-lg-1"></div>
             </div> 
                
             {(()=>{
                       if(this.state.items.video2 && this.state.items.video3 && !(this.state.items.layout==2) )
                       {
                        
                            return(
                                 
                                <div className="row">
                                 <div className="spacer30"></div>
                                     <div className="col-lg-1"></div>
                                     <div className="col-lg-5">
                                     <Player playsInline src={this.state.items.video3}>
                                          <BigPlayButton position="center" />
                                       </Player>
                                     </div>
                                     <div className="col-lg-5">
                                     <Player playsInline src={this.state.items.video2}>
                                          <BigPlayButton position="center" />
                                       </Player>
                                     </div>
                                     <div className="col-lg-1"></div>
                                </div>
                            )

                       }
                       else
                       {

                       }

             })()}     

             </div>

 
 
          

             <Scrolltotop/>  
            </div>

  
           <div className="nextproject" style={divStyle}>
                 <a href={''+this.state.items.next}><h2 className="nextproject-name">{(this.state.items.next.replace(/-/g, ' '))}</h2></a>
                 <div className="previous"><a href={''+this.state.items.previous}>previous</a></div>
           </div>


       </div>

    ); 
  }
}
}

export default Portfolio;