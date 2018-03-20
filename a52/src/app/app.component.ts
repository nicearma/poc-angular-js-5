import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'a52-root',
  template: `
	Hello {{user}}  
	  
  	Application Angular A52
  `,
  styles: []
})
export class AppComponent implements OnInit{

	user = "not";

	ngOnInit(): void {
		this.user =  window.localStorage.getItem('user');
	}



}
