export const TechCard = ({ tech }) => {
    return(
        <li>
            <img src={tech.img} alt={tech.altImg} />
            <h3 className="title xsm">{tech.name}</h3>
        </li>
    )
};
