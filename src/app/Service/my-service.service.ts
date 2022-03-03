import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idata } from '../data';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

private url:string = "/assets/data/data.json";

obs: any;
constructor(private http:HttpClient) { }

// obs = new Observable(observer =>{
//   console.log("Hello");
//   observer.next("sneha"); 
//   observer.next("Patil");
// });

getData():Observable<Idata[]>{
  return this.http.get<Idata[]>(this.url);
}

setGitHubdata(){
   this.obs= this.http.get('https://api.github.com/users/Sneha-R-Patil');
}
getGitHubData(){
  return this.obs;
}

}
