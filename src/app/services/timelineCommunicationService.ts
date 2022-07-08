import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { tidslinje } from "../models/tidslinje";

@Injectable({ providedIn: 'root' })
export class timelineCommunicationService {

  baseURL: string = "https://commenttextpart.herokuapp.com/textServlet";
  timestamp: Number = new Number();

  constructor(private http: HttpClient) {
  }

  getInitPState(texttocommentid: Number): Observable<any> {
    const headers = { 'content-type': 'application/json; charset=utf-8' };
    const data = JSON.stringify({ "remoteMethod": "getInitState", "texttocommentid": texttocommentid });
    return this.http.post(this.baseURL, data, { 'headers': headers });
  }

  sendTimePLine(timeline: tidslinje): Observable<any> {
    const headers = { 'content-type': 'application/json; charset=utf-8' };
    const data = JSON.stringify({ "remoteMethod": "addTimeLine", "timeline": timeline });
    return this.http.post(this.baseURL, data, { 'headers': headers });
  }
  removePTimeLineById(id: Number): Observable<any> {
    let changeTime = new Date().valueOf();
    const headers = { 'content-type': 'application/json; charset=utf-8' };
    const data = JSON.stringify({ "remoteMethod": "removeTimeline", "id": id, "timestampChanged": changeTime });
    return this.http.post(this.baseURL, data, { 'headers': headers });
  }
  changePTimeLineById(id: Number, timeline: Number): Observable<any> {
    const headers = { 'content-type': 'application/json; charset=utf-8' };
    const data = JSON.stringify({ "remoteMethod": "changeTimeline", "timeline": timeline, "id": id });
    return this.http.post(this.baseURL, data, { 'headers': headers });
  }
  getPChanges(texttocommentid : Number): Observable<any> {
    const headers = { 'content-type': 'application/json; charset=utf-8' };
    const data = JSON.stringify({ "remoteMethod": "getChanges", "texttocommentid": texttocommentid, "timestamp": this.timestamp });
    return this.http.post(this.baseURL, data, { 'headers': headers });
  
  }

}

