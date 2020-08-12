import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = 'app';
  topics = ['Angular', 'React', 'Vue'];
 // userModel = new User('Rob', 'rob@test.com', 5556665566, 'default', 'morning', true);
  userModel = new User('', '', '', '', 'default', 'morning', true);
  topicHasError = true;
  submitted = false;
  errorMsg = '';



  zoom: number = 8;
  
  // initial center position for the map
  lat: number = 23.873751;
  lng: number = 90.396454;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		  lat: 23.873751,
		  lng: 90.396454,
		  label: 'Uttara',
		  draggable: true
    }
    // ,
	  // {
		//   lat: 23.875843,
		//   lng: 90.399257,
		//   label: 'B',
		//   draggable: true
	  // },
	  // {
		//   lat: 23.878634,
		//   lng: 90.399357,
		//   label: 'C',
		//   draggable: true
	  // }
  ]


  constructor() { }

  

  ngOnInit(): void {
  }



  // validateTopic(value) {
  //   if (value === 'default') {
  //     this.topicHasError = true;
  //   } else {
  //     this.topicHasError = false;
  //   }
  // }

  onSubmit() {
    
  }

}

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
