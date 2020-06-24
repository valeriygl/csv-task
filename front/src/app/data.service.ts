import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private API_URL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  public sendGetRequest() {
    return this.httpClient.get(`${this.API_URL}/api/transactions`);
  }

  public sendPostRequest(body: any) {
    const headers = { 'Content-Type': 'application/json' };

    return this.httpClient.post(`${this.API_URL}/api/transactions`, body, {
      headers,
    });
  }

  public sendDeleteRequest(id: number) {
    return this.httpClient.delete(`${this.API_URL}/api/transactions/${id}`);
  }
}
