import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApplicantManagementService {
  public getAllApplicantsUrl='http://localhost:3000/applicant/getAllNonEvaluatedUsers';
  public getAllEvaluatedUrl = 'http://localhost:3000/applicant/getAllEvaluatedUsers';
  public setEvaluatedUrl = 'http://localhost:3000/applicant/update/id';
  public getSingleUserUrl = 'http://localhost:3000/applicant/getSpecificUser';
  public setNotesUrl = 'http://localhost:3000/applicant/updateUserNotesDetails';
  public updateUserUrl = 'http://localhost:3000/applicant/updateUserDetails';

  constructor(
   public  http: HttpClient
  ) { }

  getAllApplicants():Observable<HttpResponse<any>>{
    return this.http.get<any>(this.getAllApplicantsUrl,{observe: 'response'})
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
