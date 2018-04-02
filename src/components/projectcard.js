import React,{ Component } from 'react';
import Tilt from 'react-tilt';
class Projectcard extends Component{

    constructor(props) {
        super(props);
        this.state = { 
            projectLoading: 1
         };
      
    }

    listOfResult = ({data}) =>{
 
        if(data)
        {
            
            return data.map((data)=>{
                const style = {
                    backgroundImage: "url("+data.homeimage+")",
                    backgroundSize: "100% 100%"
                  };
                  const style2 = {
                    backgroundColor:data.color,
                  }
                    return(
                        <div className="col-lg-6">
                        <Tilt className="Tilt" options={{ max : 20,scale:1.05, }}  >
                        <div className="projectsection">
                        <a href='' className="link-hover">  <div className="image-datacontainer" style={style}>
                                 <div className="project-data" style={style2}>
                                     <div className="project-heading">
                                     {data.heading}
                                     </div>
                                     <div className="project-content">
                                             <div className="main-project-content">
                                                <p class="project-clientname">{data.clientname}</p>
                                                <p class="project-name-client">{data.heading} </p>
                                                <p class="project-name-desc">{data.homepagetext}</p>
                                             </div>
                                     </div>

                                 </div>
                          </div>
                          </a>
                      </div>
                      </Tilt>
                     </div>
                    )
            })
        }
    }
  


    render()
    {
        return(
            <div className="row">

                 {this.listOfResult(this.props.data)}
            </div>
        )
    }
}

export default Projectcard;

