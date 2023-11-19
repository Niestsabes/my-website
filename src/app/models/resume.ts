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
}