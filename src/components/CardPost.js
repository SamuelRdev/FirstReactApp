

const CardPost = (props) => {
    return ( 
        <div className="card">
            <img src={props.post.thumbnailUrl} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{props.post.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="http://blablacar.com" className="btn btn-primary">Go somewhere</a>
            </div>
        </div> 
    )
}

export default CardPost