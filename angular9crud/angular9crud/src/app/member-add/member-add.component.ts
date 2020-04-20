import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css']
})
export class MemberAddComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ms: MemberService, private router: Router, ) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      EmployeeFirstName: ['', Validators.required],
      EmployeeSecondName: ['', Validators.required],
      EmployeeId: ['', Validators.required],
      EmployeeRecord: ['', Validators.required],
      EmployeeAge: ['', Validators.required]
    });
  }

  addMember(EmployeeFirstName, EmployeeSecondName, EmployeeId, EmployeeRecord, EmployeeAge) {
    if (((<HTMLInputElement>document.getElementById("pw")).value) == "ManagerPassword") {
      this.ms.addMember(EmployeeFirstName, EmployeeSecondName, EmployeeId, EmployeeRecord, EmployeeAge);
      this.router.navigate(['members']);
    }
  }

  ngOnInit(): void {
  }

}