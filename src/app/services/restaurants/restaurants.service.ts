import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  corsUrl = 'https://cors-anywhere.herokuapp.com/';
  baseUrlPlaces = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
  keyAPI = 'AIzaSyAhf3JleYpal9S-xouJYH8lf7Dvz5Y2Nko';
  baseUrlPlaceDetail = 'https://maps.googleapis.com/maps/api/place/details/json';
  fields = 'name';
  baseUrlLocation = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json';
  constructor(private http: HttpClient) {}
  getLocation(search: string) {
    const urlLocation: string = this.corsUrl + this.baseUrlLocation;
    const urlTest = new URL(urlLocation);
    const test = new URLSearchParams();
    test.set('input', search);
    test.set('inputtype', 'textquery');
    test.set('fields', 'geometry');
    test.set('key', this.keyAPI);
    urlTest.search = new URLSearchParams(test).toString();
    return this.http.get('' + urlTest).pipe();
  }
  getAllRestaurantLyon(lat: string, lng: string) {
    const urlRestaurant: string = this.corsUrl + this.baseUrlPlaces;
    const urlTest = new URL(urlRestaurant);
    const test = new URLSearchParams();
    test.set('location', lat + ',' + lng);
    test.set('radius', '10');
    test.set('type', 'restaurant');
    test.set('keyword', 'restaurant');
    test.set('key', this.keyAPI);
    urlTest.search = new URLSearchParams(test).toString();
    return this.http.get('' + urlTest).pipe();
  }
  getPlaceName(placeid: string, field: string ) {
    const urlPlace: string = this.corsUrl + this.baseUrlPlaceDetail;
    const urlTest = new URL(urlPlace);
    const test = new URLSearchParams();
    test.set('placeid' , placeid);
    test.set('fields' , field);
    test.set('key', this.keyAPI);
    urlTest.search = new URLSearchParams(test).toString();
    return this.http.get('' + urlTest).pipe();
  }
  getAllRestaurantJSON(url: string): Observable<any[]> {
    return this.http.get<any[]>(url).pipe();
    /*this.http.get('' + url).subscribe(res => {
      window.sessionStorage.setItem('allRestaurants', JSON.stringify(res));
    });*/
    // return JSON.parse(window.sessionStorage.getItem('allRestaurants'));
  }
  /*await fetch('./assets/restaurants.json')
        .then(r => r.json())
        .then(json => {
          window.sessionStorage.setItem('allRestaurants', JSON.stringify(json));
        });*/
}
