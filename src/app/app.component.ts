import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angualar1';
  urls: any = []
  onSelectFile(event) {
    console.log(event.target.files)
    if (event.target.files) {
      for (let i = 0; i < event.target.files.length; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[i])
        reader.onload = (event: any) => {
          this.urls.push(event.target.result)
        }
      }
    }
  }

}
