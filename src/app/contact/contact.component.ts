import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Mail} from '../interfaces/Mail';
import {FirebaseService} from '../firebase.service';
import {DialogComponent} from '../dialog/dialog.component';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private firebase: FirebaseService, public dialog: MatDialog, private route: Router) {
  }

  ngOnInit(): void {
  }


  onsubmit(form: NgForm): void {

    const name = form.value.name;
    const email = form.value.email;
    const message = form.value.message;
    const subject = form.value.subject;
    const send = new Mail(name, email, subject, message);
    const mailSend = JSON.parse(JSON.stringify(send));
    this.firebase.sendMail(mailSend)
      .then((response: any) => {
        this.dialog.open(DialogComponent);
        setTimeout(() => {
            this.dialog.closeAll();
          }
          , 1500);

      }).catch((error: any) => console.log(error));

  }
}


