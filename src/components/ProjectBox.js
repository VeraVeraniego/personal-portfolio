
import "../stylesheets/ProjectBox.css"

function ProjectBox ({ projurl,imgurl,name }){
    return(
        <a className="project project-tile" target="_blank" href={projurl}>
              <img src={imgurl} alt={`Screenshot of ${name}`} />
              <h3 className="project-title"><span className="c">&lt;</span>{name}<span className="c">&#47;&gt;</span></h3>
            </a>
    );
}

export default ProjectBox;