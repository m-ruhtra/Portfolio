import { DefaultTemplate } from "../../components";
import { BannerSection, ProjectsSection, TechSection } from "../../components/Sections";

export const HomePage = () => {
    return(
        <>
            <DefaultTemplate>
                <BannerSection />
                <TechSection />
                <ProjectsSection />
            </DefaultTemplate>
        </>
    )
};
