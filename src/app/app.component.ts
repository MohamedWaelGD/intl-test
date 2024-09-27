import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import intlTelInput from 'intl-tel-input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'intl-test';

  constructor() {
    
  }

  ngAfterViewInit() {
    const input = document.querySelector("#phone") as any;
    const intl = intlTelInput(input, {
        utilsScript: "intl-tel-input/build/js/utils.js"
    });

    console.log(intl);
  }
}
