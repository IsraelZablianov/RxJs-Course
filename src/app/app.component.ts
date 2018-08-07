import { Component } from '@angular/core';
import { OnInit } from "@angular/core";
import htmlLogger from "./html-logger";

import SimpleObservable from "./observables-sampels/simple-observable";
import ObservableWithMultipleSubscribers from "./observables-sampels/observable-with-multiple-subscribers";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RXJS - Sampels';

  simpleObservable = SimpleObservable;
  observableWithMultipleSubscribers = ObservableWithMultipleSubscribers;

  ngOnInit(): void {
    setTimeout(() => {
      htmlLogger();
    });
  }
}
