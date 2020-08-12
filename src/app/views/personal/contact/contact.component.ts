import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = 'app';

 // userModel = new User('Rob', 'rob@test.com', 5556665566, 'default', 'morning', true);
  public userModel = new User('', '', '', '', 'default', 'morning', true);
  public topicHasError = true;
  public submitted = false;
  public errorMsg = '';



  constructor(private toastr: ToastrService) { 

  }

  

  ngOnInit(): void {
  }




  onSubmit(form) {
    this.toastr.success('Your message sent successfully !', 'SUCCESS !!!');
    form.reset();

  }

}


