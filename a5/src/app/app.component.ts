import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
} )
export class AppComponent {

  @ViewChild( 'mainScreen' ) elementView: ElementRef;
  viewHeight: number;

  constructor(private router: Router,
              private route: ActivatedRoute
  ) {

    this.route.queryParams.subscribe( (params) => {
      console.log( params );
    } );

    window.addEventListener( 'message', (event) => {
      return this.receiveMessage(event);
    }, false );

  }

  receiveMessage(event) {
    if (event.origin === 'http://localhost:8000') {
      console.log( this.elementView.nativeElement.offsetHeight );
      event.source.postMessage( {height: this.elementView.nativeElement.offsetHeight}, 'http://localhost:8000' );

    }
  }

}
