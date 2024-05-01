export const ProjectCard = ({ project }) => {
    return(
        <li>
            <img src={project.img} alt={project.altImg} />

            <div>
                <h3 className="title xsm">{project.name}</h3>

                <button className="text btn">Saiba mais</button>
            </div>
        </li>
    )
};
