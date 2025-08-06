import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(
    private client: HttpClient,
    @Inject("baseUrl") private baseUrl: string) {
  }

  private crate_url(parameters: Partial<RequestParameters>): string {
    let base_url = `${parameters.baseUrl ? parameters.baseUrl : this.baseUrl}`;
    let action_name = `${parameters.action ? `/${parameters.action}` : ""}`
    return `${base_url}/${parameters.controller}${action_name}`;
  }

  get<T>(parameters: Partial<RequestParameters>, id?: string): Observable<T> {
    
    let url: string = "";
    
    if (parameters.fullEndPoint != null && parameters.fullEndPoint != "") {
      url = parameters.fullEndPoint;
    }
    else {
      url = `${this.crate_url(parameters)}${id ? `/${id}` : ""}`
    }
    
    return this.client.get<T>(url, { headers: parameters.headers })

  };
}

export class RequestParameters {
  controller?: string;
  action?: string;
  headers?: HttpHeaders;
  baseUrl?: string;
  fullEndPoint?: string
}