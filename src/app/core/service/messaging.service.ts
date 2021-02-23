import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()

export class MessagingService {

  private baseUrl ="https://ng-loan-app.herokuapp.com/api/message";
  // private baseUrl ="http://localhost:3000/api/message";
  constructor(private http: HttpClient){}

public sendMessage(message): Observable<void> {
  return this.http.post<any>(`${this.baseUrl}`, message);
}

}