import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { TranslocoLocaleService } from '@ngneat/transloco-locale';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pin: number;
  amount = 1;
  amount1 = 1;
  pwd: any = 'a1s';
  be = false;
  fc = false;
  cw = false;
  pc = false;
  successTransC = false;
  successTransCW = false;
  fastCash = false;
  successPwd = false;
  date: number = Date.now();

  constructor(private service: TranslocoService, private service2: TranslocoLocaleService) { }

  ngOnInit() {
    this.service2.setLocale('en-US');
  }

  // ngOnInit(): void {
  //    TextToSpeech.talk('Welcome to you Bank ATM, We are happy to serve you.')
  // }
  changeLang(event: { target: { value: string } }): void {
    const lang = event.target.value;
    this.service.setActiveLang(lang.toLowerCase());
  }

}
