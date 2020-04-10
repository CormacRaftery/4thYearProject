import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  uri = 'http://localhost:4000/members';

  constructor(private http: HttpClient) { }

  addMember(EmployeeFirstName, EmployeeSecondName, EmployeeId, EmployeeRecord, EmployeeAge) {
    const obj = {
      EmployeeFirstName, EmployeeSecondName, EmployeeId, EmployeeRecord, EmployeeAge
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }
  getMembers() {
    return this
      .http
      .get(`${this.uri}`);
  }
  editMember(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }
    deleteMember(id) {
      return this
        .http
        .get(`${this.uri}/delete/${id}`);
    }
    updateMember(EmployeeFirstName, EmployeeSecondName, EmployeeId, EmployeeRecord, EmployeeAge, id) {
      const obj = {
        EmployeeFirstName, EmployeeSecondName, EmployeeId, EmployeeRecord, EmployeeAge
      };
      this
        .http
        .post(`${this.uri}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }
}
/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  uri = 'http://localhost:4000/members';

  constructor(private http: HttpClient) { }

  addMember(MemberName, MemberBio, MemberAge) {
    const obj = {
      MemberName,
      MemberBio,
      MemberAge
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }
  getMembers() {
    return this
      .http
      .get(`${this.uri}`);
  }
  editMember(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }
    deleteMember(id) {
      return this
        .http
        .get(`${this.uri}/delete/${id}`);
    }
    updateMember(MemberName, MemberBio, MemberAge, id) {
      const obj = {
        MemberName,
        MemberBio,
        MemberAge
      };
      this
        .http
        .post(`${this.uri}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }
}*/