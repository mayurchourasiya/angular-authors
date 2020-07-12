import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  // method to retrieve list of authors
  getAuthors() {
    return ["Tulsidas", "Sumitra", "Premchand"];
  }
  
}
