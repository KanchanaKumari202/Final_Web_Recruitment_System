import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApplicantManagementService {
  public getAllApplicantsUrl='applicant/getAllNonEvaluatedUsers';
  public getAllEvaluatedUrl = 'applicant/getAllEvaluatedUsers';
  public setEvaluatedUrl = 'applicant/update/id';
  public getSingleUserUrl = 'applicant/getSpecificUser';
  public setNotesUrl = 'applicant/updateUserNotesDetails';
  public updateUserUrl = 'applicant/updateUserDetails';
  public getCountOfApplicantsUrl = 'applicant/countApplicants';
  public getCountOfInterviewsUrl = 'applicant/countInterviews';
  public getCountOfSelectedUrl = 'applicant/countSelected';
  public getpositionCountUrl = 'api/position/countPositions';
  
  constructor(
   public  http: HttpClient
  ) { }

  getAllApplicants():Observable<HttpResponse<any>>{
    return this.http.get<any>(this.getAllApplicantsUrl,{observe: 'response'})
  }

  getCountOfApplicants():Observable<HttpResponse<any>>{
    return this.http.get(this.getCountOfApplicantsUrl,{observe: 'response'})
  }

  getCountOfinterviews():Observable<HttpResponse<any>>{
    return this.http.get(this.getCountOfInterviewsUrl,{observe: 'response'})
  }

  getCountOfSelected():Observable<HttpResponse<any>>{
    return this.http.get(this.getCountOfSelectedUrl,{observe: 'response'})
  }

  getpositionCount():Observable<HttpResponse<any>>{
    return this.http.get(this.getpositionCountUrl,{observe: 'response'})
  }

  getAllEvaluated():Observable<HttpResponse<any>>{
    return this.http.get<any>(this.getAllEvaluatedUrl,{observe: 'response'})
  }

  setEvaluated(applicant,id):Observable<HttpResponse<any>> {
    return this.http.put<any>(`${this.setEvaluatedUrl}/${id}`,applicant,{observe: 'response'})
  }

  getSingleUser(id):Observable<HttpResponse<any>> {
    return this.http.get<any>(`${this.getSingleUserUrl}/${id}`, {observe: 'response'});
  }

  setNotes(applicant):Observable<HttpResponse<any>> {
    return this.http.put<any>(this.setNotesUrl,applicant,{observe:'response'})
  }

  updateUser(applicant):Observable<HttpResponse<any>>{
    return this.http.put<any>(this.updateUserUrl, applicant, {observe: 'response'})
  }

 
}
