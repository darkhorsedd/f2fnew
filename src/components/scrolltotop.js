import React, { Component } from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';

class Scrolltotop extends Component {

    componentDidMount(){
        this.ScrollTo();
    }


    ScrollTo()
    {
     
        $('body,html').animate({
            scrollTop : 0                       
        }, 500);

     

    }

    
    render() {

        return (
            <div className="scroll-up-wrap">
                    <div class="scroll-lin"></div>
                    <div class="scroll-arrow" onClick={this.ScrollTo}><img src="http://facetofaceuae.com/newimages/top-arrow.png"/></div>
            </div>
        );

    }

}
export default Scrolltotop;


