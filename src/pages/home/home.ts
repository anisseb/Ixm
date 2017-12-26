import { Component, ViewChild  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';
import { Slides } from 'ionic-angular';
import * as $ from 'jquery';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
mySlideOptions: any;
@ViewChild(Slides) mySlider: Slides;

items: Observable<any[]>;
  constructor(public navCtrl: NavController,db: AngularFireDatabase,  public _DomSanitizer: DomSanitizer) {
  this.items = db.list('Ixm').valueChanges();
  }

nextSlide() {
    this.mySlider.slideNext();
}

prevSlide(){
	this.mySlider.slidePrev();
}

showBar(){
	$( "#test" ).hide();
	$( "#icon-bar-on" ).show();
	$( "#icon-setting" ).show();
	$( "#icon-save" ).show();
	$( "#icon-volume" ).show();
	$( "#icon-zoom" ).show();
	$( "#icon-expand" ).show();

}


hidebar(){
	$( "#icon-bar-on" ).hide();
	$( "#icon-expand" ).hide();
	$( "#icon-setting" ).hide();
	$( "#icon-save" ).hide();
	$( "#icon-zoom" ).hide();
	$( "#icon-volume" ).hide();
	$( "#test" ).show();
}

zoom_vignette(){
	this.mySlider.resize();
}

}
