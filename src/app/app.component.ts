import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './shared/store/counter.reducer';
import { CounterbuttonComponent } from './component/counterbutton/counterbutton.component';
import { CounterdisplayComponent } from './component/counterdisplay/counterdisplay.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterbuttonComponent, CounterdisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learn-ngrx';
}
