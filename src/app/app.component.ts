import { Component } from '@angular/core'

import {Student} from './student/student.model'

@Component({
  selector: 'a-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  students: Student[] = [

    {name: 'Iane', isProgrammer: true, isTheBest: false },
    {name: "Rita", isProgrammer: false, isTheBest: true },
    {name: "Nicolas", isProgrammer: true, isTheBest:false },
    {name: "Wender", isProgrammer: true, isTheBest:false },
    {name: "Orlando", isProgrammer: true, isTheBest: false}
  ]
}
