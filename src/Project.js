
import "./project.css"
function Project(props) {

    const src = require(`./assets/${props.name}.png`)
    const name = props.name
    const link = props.link
    const number = props.number
    let projectClassname = "project"
    if (number%2 === 0) {
        projectClassname = "project mirror"
    }

    return (
        <div className={projectClassname}>
            <div className="projectImageContainer">
                <img className="projectImage" src={src} alt={name}/>
            </div>
            <div className="projectDescription">
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque consequat felis id pulvinar. Nullam tristique ut lectus eget euismod.Nullam fermentum urna sit amet risus convallis, quis iaculis ligula suscipit. Etiam semper sapien in velit aliquet ullamcorper. Suspendisse potenti. Quisque nec tortor ut tellus vestibulum rutrum a sed turpis. Curabitur placerat lacinia nisl vitae volutpat. Pellentesque ultricies mi vel sapien commodo, vel scelerisque massa dictum. Suspendisse potenti. Etiam vitae urna venenatis ipsum mattis viverra. Pellentesque vitae rutrum mauris. Nunc ut arcu laoreet, posuere enim vel, sodales nisi. Nam euismod erat viverra nisi pharetra, vel auctor mauris cursus. Aenean nec lectus lacus. In nec diam libero. In euismod laoreet urna. Nullam mattis justo ut ante porta sollicitudin. </p>
                <a href={link} target="_blank" rel="noreferrer">Visiter le site</a>
            </div>
        </div>
    )
}

export default Project