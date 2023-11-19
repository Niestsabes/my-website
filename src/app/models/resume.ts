import { ResumeInterface } from './resume.interface';

export class Resume {

    private _rawData: ResumeInterface;


    constructor(resume: ResumeInterface = null) {
        this._rawData = resume;
    }

    public setData(value: ResumeInterface): void {
        this._rawData = value;
    }

    public getRoles(): any {
        if ( !this._rawData || !this._rawData.roles ) {
            return null;
        }
        return this._rawData.roles;
    }

    public getSpeak(): any {
        if ( !this._rawData || !this._rawData.languages ) {
            return null;
        }
        return this._rawData.languages;
    }

    /**
     * @description Returns the presentation found in raw data
     * @returns presentation
     */
    public getPresentation(): any {
        if ( !this._rawData || !this._rawData.presentation ) {
            return null;
        }
        return this._rawData.presentation;
    }

    /**
     * @description Returns education found in raw data
     * @returns list of educations
     */
    public getEducation(): any {
        if ( !this._rawData || !this._rawData.education ) {
            return [];
        }
        return this._rawData.education;
    }

    /**
     * @description Returns the experiences found in raw data
     * @returns list of experiences
     */
    public getExperiences(): any {
        if ( !this._rawData || !this._rawData.experiences ) {
            return [];
        }
        return this._rawData.experiences;
    }

    /**
     * @description Returns the list of tastes found in raw data
     * @returns list of tastes
     */
    public getTastes(): any {
        // if ( !this._rawData || !this._rawData.tastes ) {
        //     return [];
        // }
        // return this._rawData.tastes;
        return [];
    }

    /**
     * @description Returns the portefolio found in row data
     */
    public getPortefolio(): any {
        if ( !this._rawData || !this._rawData.portefolio ) {
            return [];
        }
        return this._rawData.portefolio;
    }
}