import { Component, OnInit, OnDestroy } from '@angular/core';
import {AppareilService} from './services/appareil.service';
import { Observable, Subject, interval, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
secondes: number;
counterSubscription :Subscription;

  constructor() {

  }

  ngOnInit() {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      (value: number) => {
        this.secondes = value;
      }
    );
    // counter.subscribe(
    //   (value: number) => {
    //     this.secondes = value;
    //   },
    //   (error: any) => {
    //     console.log('Une erreur a été rencontrée !')
    //   },
    //   () => {
    //     console.log('Tout s\'est bien passé !');
    //   }
    // );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }

};
