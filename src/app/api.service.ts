import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class ApiService {
  
  constructor(private httpClient: HttpClient) {}

  url = "https://ce-authenticated-backend.herokuapp.com/";

  async get(path, options?): Promise<any> {
    return await this.httpClient
      .get(this.url + path, options).toPromise();
  }

  async post(path, data, options?): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

        /* is it .post(this.url + path, data, httpOptions)
            or .post(this.url + path, data, options) */

    return await this.httpClient
      .post(this.url + path, data, options)
      .toPromise();
  }

}
