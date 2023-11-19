export interface ResumeInterface {
    presentation: ResumeSection<CommonItem>,
    roles: ResumeSection<RoleItem>,
    languages: ResumeSection<CommonItem>,
    tastes: ResumeSection<CommonItem>,
    education: ResumeSection<ExperienceItem>,
    experiences: ResumeSection<ExperienceItem>,
    portefolio: ResumeSection<CommonItem>,
    others: { [key: string]: string }
}

export type ResumeSection<T = any> = {
    title: string;
    description: string[];
    items: T[];
}

export type RoleItem = {
    title: string;
    icon: string;
    description: string[];
    tagsTitle: string;
    tags: string[];
    toolsTitle: string;
    tools: string[];
}

export type CommonItem = {
    title: string;
    description: string[];
    image: string;
}

export type ExperienceItem = {
    title: string,
    subtitle: string,
    type: string,
    company: string,
    place: string,
    date: string,
    description: Array<string>,
    tags: string[],
    image?: string,
    link: string
}
