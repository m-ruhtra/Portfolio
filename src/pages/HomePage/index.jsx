import { DefaultTemplate } from "../../components";
import { BannerSection } from "../../components/Sections";
import { TechSection } from "../../components/Sections/TechsSection";

export const HomePage = () => {
    return(
        <>
            <DefaultTemplate>
                <BannerSection />
                <TechSection />
            </DefaultTemplate>
        </>
    )
};
