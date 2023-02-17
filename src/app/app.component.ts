import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>{{result}}</div>`,
})
export class AppComponent {
    result = "Hello World";

    constructor(private httpClient: HttpClient) {
        this.httpClient.get<any>("https://lab03-api.azurewebsites.net/weatherforecast").subscribe((res)=>{
            this.result = JSON.stringify(res);
        });
    }
}
