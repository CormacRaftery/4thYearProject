import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../member.service';
@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {

  angForm: FormGroup;
  member: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private ms: MemberService, private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      EmployeeFirstName: ['', Validators.required],
      EmployeeSecondName: ['', Validators.required],
      EmployeeId: ['', Validators.required],
      EmployeeRecord: ['', Validators.required],
      EmployeeAge: ['', Validators.required]
    });}

    updateMember(EmployeeFirstName, EmployeeSecondName, EmployeeId, EmployeeRecord, EmployeeAge) {
      this.route.params.subscribe(params => {
        this.ms.updateMember(EmployeeFirstName, EmployeeSecondName, EmployeeId, EmployeeRecord, EmployeeAge, params.id);
        this.router.navigate(['members']);
      });
    }
    
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ms.editMember(params[`id`]).subscribe(res => {
        this.member = res;
      });
    });
  }
}
