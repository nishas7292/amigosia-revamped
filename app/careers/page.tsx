import { CareersHero } from "@/components/sections/careers/hero";
import { CareersDepartments } from "@/components/sections/careers/departments";
import { CareersOpenPositions } from "@/components/sections/careers/open-positions";

function CareersPage() {
    return (
        <main>
            <CareersHero />
            <CareersDepartments />
            <CareersOpenPositions />
        </main>
    );
}

export default CareersPage