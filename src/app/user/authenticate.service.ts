import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularDelegate } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(public ngFireAuth: AngularFireAuth) { }

  loginFirebase(email, password){
    return this.ngFireAuth.signInWithEmailAndPassword(email, password)
  }

  insertFirebase(email, password) {
    return this. ngFireAuth.createUserWithEmailAndPassword(email, password)
  }

  logoutFirebase(){
    return this.ngFireAuth.signOut
  }
}
