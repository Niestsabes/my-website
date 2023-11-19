import { ResumeInterface, ResumeItemInterface, ResumeExperienceInterface, ResumeRolesInterface, ResumeSpeakInterface } from './resume.interface';

export class Resume {

    private _rawData: ResumeInterface;


    constructor(resume: ResumeInterface = null) {
        this._rawData = resume;
    }

    public setData(value: ResumeInterface): void {
        this._rawData = value;
    }

    public getRoles(): ResumeRolesInterface {
        if ( !this._rawData || !this._rawData.roles ) {
            return null;
        }
        return this._rawData.roles;
    }

    public getSpeak(): ResumeSpeakInterface {
        if ( !this._rawData || !this._rawData.languages ) {
            return null;
        }
        return this._rawData.languages;
    }

    /**
     * @description Returns the presentation found in raw data
     * @returns presentation
     */
    public getPresentation(): ResumeItemInterface {
        if ( !this._rawData || !this._rawData.presentation ) {
            return null;
        }
        return this._rawData.presentation;
    }

    /**
     * @description Returns education found in raw data
     * @returns list of educations
     */
    public getEducation(): Array<ResumeExperienceInterface> {
        if ( !this._rawData || !this._rawData.education ) {
            return [];
        }
        return this._rawData.education;
    }

    /**
     * @description Returns the experiences found in raw data
     * @returns list of experiences
     */
    public getExperiences(): Array<ResumeExperienceInterface> {
        if ( !this._rawData || !this._rawData.experiences ) {
            return [];
        }
        return this._rawData.experiences;
    }

    /**
     * @description Returns the list of tastes found in raw data
     * @returns list of tastes
     */
    public getTastes(): Array<ResumeItemInterface> {
        if ( !this._rawData || !this._rawData.tastes ) {
            return [];
        }
        return this._rawData.tastes;
    }

    /**
     * @description Returns the portefolio found in row data
     */
    public getPortefolio(): Array<ResumeItemInterface> {
        if ( !this._rawData || !this._rawData.portefolio ) {
            return [];
        }
        return this._rawData.portefolio;
    }

    /**
     * @description Returns the list of characteristics found in raw data
     * @returns list of characteristics
     */
    public getCharacteristics(): Array<ResumeItemInterface> {
        if ( !this._rawData || !this._rawData.characteristics ) {
            return [];
        }
        return this._rawData.characteristics;
    }

    /**
     * @description Returns the list of skill found in raw data
     * @param type Type of skill wanted. If null, returns all skills
     * @return list of skills
     */
    public getSkills(type: string = null): Array<ResumeItemInterface> | {[skillType: string]: Array<ResumeItemInterface>} {
        if ( !this._rawData
            || !this._rawData.skills
            || (type !== null && !this._rawData.skills[type])
        ) {
            return [];
        }
        else if ( !type ) {
            return this._rawData.skills;
        }
        else {
            return this._rawData.skills[type];
        }
    }

    /**
     * @description Returns the list of skill types available in the raw data
     * @returns List of skill types
     */
    public getSkillTypes(): Array<string> {
        if ( !this._rawData || !this._rawData.skills ) {
            return [];
        }
        return Object.keys(this._rawData.skills);
    }
}