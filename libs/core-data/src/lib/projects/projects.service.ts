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
  getUrl() {
    return `${BASE_URL}${this.model}`;
  }
  getUrlForId(id: string) {
    return `${this.getUrl()}/${id}`;
  }
  all(): Observable<Project[]> {
    return this.httpClient.get(this.getUrl()) as Observable<Project[]>;
  }

  create(project: Project) {
    return this.httpClient.post(this.getUrl(), project);
  }
  update(project: Project) {
    return this.httpClient.patch(this.getUrlForId(project.id), project);
  }
  delete(projectId: string) {
    return this.httpClient.delete(this.getUrlForId(projectId));
  }
}
