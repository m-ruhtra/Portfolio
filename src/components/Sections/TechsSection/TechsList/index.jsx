import { techsData } from "../../../../data/techsData";
import { TechCard } from "./TechCard";

export const TechList = () => {
    return(
        <ul>
            {
                techsData.map((tech) => {
                    return(
                        <TechCard key={tech.id} tech={tech} />
                    )
                })
            }
        </ul>
    )
};
