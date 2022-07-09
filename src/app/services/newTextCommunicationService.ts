import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { tidslinje } from "../models/tidslinje";

@Injectable({ providedIn: 'root' })
export class newTextCommunicationService {

  baseURL: string = "https://commenttextpart.herokuapp.com/newTextServlet";

  constructor(private http: HttpClient) {
  }


  addPNewText(title: String, text: String): Observable<any> {
    const headers = { 'content-type': 'application/json; charset=utf-8' };
    const data = JSON.stringify({ "remoteMethod": "addText", "title": title, "text": text });
    return this.http.post(this.baseURL, data, { 'headers': headers });
  }

  getText(title : String): Observable<any> {
    const headers = { 'content-type': 'application/json; charset=utf-8' };
    const data = JSON.stringify({ "remoteMethod": "getText", "title": title });
    return this.http.post(this.baseURL, data, { 'headers': headers });
  }
  deletePText(title: String): Observable<any> {
    const headers = { 'content-type': 'application/json; charset=utf-8' };
    const data = JSON.stringify({ "remoteMethod": "deleteText", "title": title });
    return this.http.post(this.baseURL, data, { 'headers': headers });
  }
  getTitlesFromServer(): Observable<String[]> {
    const headers = {
      'content-type': 'application/json; charset=utf-8'   };
    const data = JSON.stringify({ "remoteMethod": "getTitles" });
    //return this.http.post<String[]>(this.baseURL, data, { 'headers': headers });

    //MOCK TEST
    return of(["twtw", "trett", "sjokolade", "TEST"]);
  }
}

