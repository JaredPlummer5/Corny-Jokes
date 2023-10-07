// Importing necessary classes and interfaces from Angular Core and HTTPClient modules
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Declaring an interface to structure the expected API response
// This interface is not used and can be removed
interface ApiResponse {
  url: string; // A field to hold the URL string from the API response
}

// Interface to represent the structure of a joke in the API response
interface JokeResponse {
  joke: string; // Field to hold the joke text
}

// Interface to represent the structure of the API response
interface ApiResponse {
  jokes: JokeResponse[]; // Array of jokes
}

// Component decorator to define metadata for the HomeComponent
@Component({
  selector: 'app-home',  // The custom HTML tag for this component
  templateUrl: './home.component.html',  // The HTML template associated with this component
  styleUrls: ['./home.component.css']  // The CSS styles associated with this component
})
export class HomeComponent {
  // Initialize jokes as an empty array of JokeResponse
  jokes: JokeResponse[] = [];
  isLoading: boolean = false; // Add this line

  // Getter to construct the API URL
  get api_url() {
    return "https://api.api-ninjas.com/v1/jokes?limit=10";
  }

  // Constructor to instantiate the HttpClient
  constructor(private http: HttpClient) { }

  // Method to fetch jokes from the API
// Method to fetch jokes from the API
fetchData() {
  this.isLoading = true; // Set isLoading to true when data fetching starts
  const headers = new HttpHeaders({
    'X-Api-Key': '3pLcvCpchNMb2aMIYSZq6Q==HkMMHU5qyHiGsi9B',
  });
  this.http.get(this.api_url, { headers }).subscribe({
    next: (response: any) => {
      this.jokes = response;
      // Introduce a delay of 3 seconds before setting isLoading to false
      setTimeout(() => {
        this.isLoading = false; // Set isLoading to false after the delay
      }, 3000);
    },
    error: error => {
      console.error('Error: ', error);
      // Introduce a delay of 3 seconds even if there is an error
      setTimeout(() => {
        this.isLoading = false; // Set isLoading to false after the delay
      }, 3000);
    }
  });
}

}
