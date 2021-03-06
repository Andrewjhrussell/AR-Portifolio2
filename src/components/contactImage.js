import React from "react";

const contactImage = props => {
    console.log(props.info)
    return (
        <div className="col-md-4">
        <div className="card"  style={{height :'80%'}}>
            <img src={props.info.image} className="card-img-top" style={{height:'50%'}} alt={props.info.name} />
            <div className="card-body">
                <h5 className="card-title">{props.info.name}</h5>
                <div className="row">
                    <div className="col-sm-8">
                        <a href={props.info.deployedUrl} className="btn btn-primary"  target="blank">Deployed Website</a>

                    </div>
                    <div className="col-sm-4">
                    
                        
                    </div>
                </div>
               
            </div>
        </div>
    </div>
    
    )
}
export default contactImage