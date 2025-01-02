import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  responseMessage: string = ''; // Variable to hold the response message

  constructor() { }

  ngOnInit(): void { }

  // Function to fetch data from Google
  fetchGoogle() {
    return new Promise((resolve, reject) => {
      fetch('https://api.github.com/users/samymity/repos')
        .then(response => {
          if (!response.ok) {
            reject(`Error: ${response.status} ${response.statusText}`);
          } else {
            resolve(response); // Resolve with the response
          }
        })
        .catch(error => {
          reject(`Network Error: ${error.message}`);
        });
    });
  }

  // Method to call fetchGoogle and handle the result
  callFetchGoogle() {
    this.fetchGoogle()
      .then(response => {
        this.responseMessage = 'Successfully fetched data from GitHUb.';
        console.log(response); // Additional processing if needed
      })
      .catch(error => {
        this.responseMessage = error; // Display error message
        console.error('Error occurred:', error);
      });
  }
}