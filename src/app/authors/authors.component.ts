import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {

  authors;

  constructor(service : AuthorsService) {
    this.authors = service.getAuthors();
   }

   imgSource = "https://dl1.cbsistatic.com/i/2017/06/14/7b9c8f4d-838c-43da-9e2d-4053ad1e1624/a73f830efd30ae8dcb10b5cc17ef3558/imgingest-8648420337569711989.png";

}
