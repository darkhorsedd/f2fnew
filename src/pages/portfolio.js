import React, { Component } from 'react';
import TopNavigation from '../pages/TopNavigation';
import Footer from '../pages/footer';
import axios from 'axios';
import Carousel from 'nuka-carousel'; 

class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            items:'',
            loading: 1
         };
      
    }

    componentDidMount(){
        var project = this.props.match.params.id;
        console.log(project);
        axios
        .get('http://facetofaceuae.com/dev/vimto2017/service/api/Vimto/getproject/?project='+project)
        .then((response) => {
          this.setState({items: response.data.data,loading:0});

          //this.setState({name: response.data.name});
        })
        .catch((e) => 
        {
          console.error(e);
        });
      } 
      
     

     
     
  render() {
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

                 <div id="fullwidthbg-work" className="full-bg-image" style={divStyle}>
                 <div className="column-content">
                     
                 </div>
              </div>

              <div className="container"> 
                  <div className="spacer100">
               </div>
                
             </div>  

             <div className="container">
                 <div className="row">
                    <div className="col-lg-12">
                        <h3><span className="greenblue">Work |</span> <span className="orange"> {this.state.items.clientname} </span></h3>
                        <h2>{this.state.items.heading}</h2>
                    </div>
                 </div>
             </div>
               <br/>
             <div className="container">
                 <div className="row">
                      <div className="col-lg-6 slider-dv">

                      <Carousel decorators={[]} autoplay>
        <img src="http://placehold.it/500x417/93130a/c0392b/&text=slide1" onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
        <img src="http://placehold.it/500x417/93130a/c0392b/&text=slide2" onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
        <img src="http://placehold.it/500x417/93130a/c0392b/&text=slide3" onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
        <img src="http://placehold.it/500x417/93130a/c0392b/&text=slide4"onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
        <img src="http://placehold.it/500x417/93130a/c0392b/&text=slide5"onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
        <img src="http://placehold.it/500x417/93130a/c0392b/&text=slide6" onLoad={() => {window.dispatchEvent(new Event('resize'));}}/>
      </Carousel>

                      </div>
                      
                      <div className="col-lg-6 ">
                           <div className="projectDetails">
                              <div className="column-content">
                                <div className="center-text projectDetailsInner">
                                    <h3>{this.state.items.heading2}</h3>
                                    <div className="projecttextcopy" dangerouslySetInnerHTML={ { __html:(this.state.items.description) } }></div>
                                </div>
                              </div>    
                           </div>
                      </div>

                 </div>
             </div>  
              <br />
             <div className="container">
                 <div className="row">
                      <div className="col-lg-12">
                        <iframe width="100%" height="500px" src={'https://www.youtube.com/embed/'+this.state.items.video1+'?rel=0&amp;controls=0&amp;showinfo=0'} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                      </div>  
                 </div>
             </div>   
               <br/>
             <div className="container">
                 <div className="row">
                 
                      <div  className={this.state.items.video2 ? ' col-lg-6 show' : ' col-lg-6 hide'}>
                      <iframe width="100%" height="500px" src={'https://www.youtube.com/embed/'+this.state.items.video2+'?rel=0&amp;controls=0&amp;showinfo=0'} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>  
                      </div>
                  
                      <div className={this.state.items.video3 ? ' col-lg-6 show' : ' col-lg-6 hide'}>
                      <iframe width="100%" height="500px" src={'https://www.youtube.com/embed/'+this.state.items.video3+'?rel=0&amp;controls=0&amp;showinfo=0'} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>            
                      </div>
                 </div>
              </div> 
              <div className="row">
                <div class="col-lg-12 center">
              <a href="#/Work" className="allproject2"><div className="buttonWrapper-black black">
                                                <span className="buttontext"> view all projects </span>
                                               <div className="borderboxbutton blackbutton">

                                               </div>
                                           </div></a>
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