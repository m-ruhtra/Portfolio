import { DefaultTemplate } from "../../components";
import { BannerSection, ProjectsSection, TechSection } from "../../components/Sections";
import { ContactSection } from "../../components/Sections/ContactSection";

export const HomePage = () => {
    return(
        <>
            <DefaultTemplate>
                <BannerSection />
                <TechSection />
                <ProjectsSection />
                <ContactSection />
            </DefaultTemplate>
        </>
    )
};
