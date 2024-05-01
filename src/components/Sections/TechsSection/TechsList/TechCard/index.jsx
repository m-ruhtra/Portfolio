export const TechCard = ({ tech }) => {
    return(
        <li>
            <img src={tech.img} alt={tech.altImg} />
            <h3>{tech.name}</h3>
        </li>
    )
};
