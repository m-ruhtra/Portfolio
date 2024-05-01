export const ProjectCard = ({ project }) => {
    return(
        <li>
            <img src={project.img} alt={project.altImg} />

            <div>
                <h3>{project.name}</h3>

                <button>Saiba mais</button>
            </div>
        </li>
    )
};
