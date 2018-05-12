import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import axios from 'axios';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usuarios: any;

  constructor(public navCtrl: NavController) {
    
  }
  ionViewDidLoad(){
    this.carregaUsuarios();
  }

  async carregaUsuarios(){
    const URL = "https://randomuser.me/api/?results=1000&nat=br";
      
    try {
      let response = await axios.get(URL);
      this.usuarios = response.data.results;
    } catch(e) {
      console.log(e);
    }
     
  }

}
