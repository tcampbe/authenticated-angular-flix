import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class MovieApiService {

  constructor(private httpClient : HttpClient) { }

  url = "https://api.themoviedb.org/3/";

  async get(path, options?): Promise<any> {
    return await this.httpClient
      .get(this.url + path 
        + "&api_key=33f59a5c5ff0dcf180c32c8e4dcd5792", options)
        .toPromise();
  }

}