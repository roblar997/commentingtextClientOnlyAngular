import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { tidslinje } from "../models/tidslinje";

@Injectable({ providedIn: 'root' })
export class newTextCommunicationService {

  baseURL: string = "https://commenttextpart.herokuapp.com/newTextServlet";

  constructor(private http: HttpClient) {
  }

  getInitPState(texttocommentid: Number): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const data = JSON.stringify(" et objekt ");
    return this.http.post(this.baseURL, data, { 'headers': headers });
  }

  addPNewText(title: String, text: String): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const data = JSON.stringify(" et objekt ");
    return this.http.post(this.baseURL, data, { 'headers': headers });
  }

  getText(title : String): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const data = JSON.stringify(" et objekt ");
    return this.http.post(this.baseURL, data, { 'headers': headers });
  }
  deletePText(title: String): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const data = JSON.stringify(" et objekt ");
    return this.http.post(this.baseURL, data, { 'headers': headers });
  }
  getTitlesFromServer(): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const data = JSON.stringify(" et objekt ");
    return this.http.post(this.baseURL, data, { 'headers': headers });
  }
}

