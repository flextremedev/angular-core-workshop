import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';
const BASE_URL = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  model = 'projects';
  constructor(private httpClient: HttpClient) {}
  all(): Observable<Project[]> {
    return this.httpClient.get(`${BASE_URL}${this.model}`) as Observable<
      Project[]
    >;
  }
}
