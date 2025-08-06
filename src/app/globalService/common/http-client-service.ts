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

  private buildUrl(parameters: Partial<RequestParameters>, id?: string): string {
    if (parameters.fullEndPoint) {
      return parameters.fullEndPoint;
    }
    return `${this.create_url(parameters)}${id ? `/${id}` : ''}`;
  }
  private create_url(parameters: Partial<RequestParameters>): string {
    let base_url = `${parameters.baseUrl ? parameters.baseUrl : this.baseUrl}`;
    let action_name = `${parameters.action ? `/${parameters.action}` : ""}`
    return `${base_url}/${parameters.controller}${action_name}`;
  }

  get<T>(parameters: Partial<RequestParameters>, id?: string): Observable<T> {

    const url = this.buildUrl(parameters, id);

    return this.client.get<T>(url, { headers: parameters.headers })

  };

  post<T>(parameters: Partial<RequestParameters>, body: Partial<T>): Observable<T> {

    const url = this.buildUrl(parameters);

    return this.client.post<T>(url, body, { headers: parameters.headers })
  }

  put<T>(parameters: Partial<RequestParameters>, body: Partial<T>): Observable<T> {
    
    const url = this.buildUrl(parameters);
    
    return this.client.put<T>(url, body, { headers: parameters.headers })
  }

  delete<T>(parameters: Partial<RequestParameters>, id?: string): Observable<T> {
   
    const url = `${this.buildUrl(parameters)}`

    return this.client.delete<T>(url, { headers: parameters.headers })
  }
}

export interface  RequestParameters {
  controller?: string;
  action?: string;
  headers?: HttpHeaders;
  baseUrl?: string;
  fullEndPoint?: string
}