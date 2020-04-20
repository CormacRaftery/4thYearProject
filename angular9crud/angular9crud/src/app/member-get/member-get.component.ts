import { Component, OnInit } from '@angular/core';
import Member from '../Member';
import { MemberService } from '../member.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-member-get',
  templateUrl: './member-get.component.html',
  styleUrls: ['./member-get.component.css']
})
export class MemberGetComponent implements OnInit {
  
  members: Member[];
  constructor(private ms: MemberService, private router: Router) {}
  
  ngOnInit() {
    
    this.ms
      .getMembers()
      .subscribe((data: Member[]) => {
        this.members = data;
      });
  }
  editMember(id){
    if(((<HTMLInputElement>document.getElementById("pw")).value)=="ManagerPassword"){
    this.router.navigate(['/edit', id]);
    }
  }
  deleteMember(id, index) {
    if(((<HTMLInputElement>document.getElementById("pw")).value)=="ManagerPassword"){
  
    this.ms.deleteMember(id).subscribe(res => {
      this.members.splice(index, 1);
    });
  }
}
}
