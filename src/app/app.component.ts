import { Component } from '@angular/core';
import { OnInit } from "@angular/core";
import htmlLogger from "./html-logger";

import SimpleObservable from "./observables-sampels/simple-observable";
import ObservableWithMultipleSubscribers from "./observables-sampels/observable-with-multiple-subscribers";
import SimpleSubject from "./observables-sampels/simple-subject";

/* 
                      Online Editor
  https://stackblitz.com/edit/typescript-kbpvmm?file=index.ts&devtoolsheight=100

*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RXJS - Sampels';

  simpleObservable = SimpleObservable;
  simpleSubject = SimpleSubject;
  observableWithMultipleSubscribers = ObservableWithMultipleSubscribers;

  ngOnInit(): void {
    setTimeout(() => {
      htmlLogger();
    });
  }
}
