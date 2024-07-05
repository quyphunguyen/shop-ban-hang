import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation, OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {UserService} from "../../../services/user.service";
import {UserDTO} from "../../../dto/UserDTO";
import {User} from "../../../dto/User";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements  OnInit{
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  showFiller = false;
  user = new User;

  constructor(public dialog: MatDialog,
              public userService :UserService) {}

  ngOnInit(): void {
    this.getInfoUser();
  }


  getInfoUser(){
    const sessionUser=  sessionStorage.getItem('user');
    if(sessionUser){
      var obj = JSON.parse(sessionUser);
      this.user.id = obj.id;
      this.user.userName = obj.userName;
      this.user.userPassword = obj.userPassword;
    }
  }


}
