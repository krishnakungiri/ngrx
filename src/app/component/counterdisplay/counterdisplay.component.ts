import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counterdisplay',
  // standalone: true,
  // imports: [],
  templateUrl: './counterdisplay.component.html',
  styleUrl: './counterdisplay.component.css'
})
export class CounterdisplayComponent implements OnInit {
  constructor(private store: Store<{ counter: { counter: number } }>) { }

  counterDisplay: number = 0

  ngOnInit(): void {
    this.store.select('counter').subscribe(data => {
      this.counterDisplay = data.counter
    })
  }
}
