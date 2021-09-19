import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Mail} from './interfaces/Mail';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  mails: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    this.mails = this.firestore.collection('mails').valueChanges();
  }

  sendMail(mail: Mail): any {
    return this.firestore.collection('mails').add(mail);
  }

  recive(): any {
    return this.mails;
  }


}



