export interface ResumeInterface {
    presentation: ResumeItemInterface,
    education: Array<ResumeExperienceInterface>,
    experiences: Array<ResumeExperienceInterface>,
    portefolio: Array<ResumeItemInterface>,
    characteristics: Array<ResumeItemInterface>,
    tastes: Array<ResumeItemInterface>,
    languages: Array<ResumeItemInterface>,
    skills: {
        [type: string]: Array<ResumeItemInterface>
    }
}

export interface ResumeItemInterface {
    title: string;
    level?: number;
    rank?: string;
    description: Array<string>;
    image?: string;
}

export interface ResumeExperienceInterface {
    title: string,
    subtitle: string,
    type: string,
    company: string,
    place: string,
    startDate: string,
    endDate: string,
    description: Array<string>,
    image?: string
}