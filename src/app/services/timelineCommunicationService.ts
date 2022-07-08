import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { tidslinje } from "../models/tidslinje";

@Injectable({ providedIn: 'root' })
export class timelineCommunicationService {

  baseURL: string = "https://commenttextpart.herokuapp.com/textServlet";

  constructor(private http: HttpClient) {
  }

  getInitPState(texttocommentid: Number): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const data = JSON.stringify(" et objekt " );
    return this.http.post(this.baseURL, data, { 'headers': headers });
  }

  sendTimePLine(timeline: tidslinje): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const data = JSON.stringify(" et objekt ");
    return this.http.post(this.baseURL, data, { 'headers': headers });
  }
  removePTimeLineById(id : Number): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const data = JSON.stringify(" et objekt ");
    return this.http.post(this.baseURL, data, { 'headers': headers });
  }
  changePTimeLineById(id: Number, timeline: Number): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const data = JSON.stringify(" et objekt ");
    return this.http.post(this.baseURL, data, { 'headers': headers });
  }
}

