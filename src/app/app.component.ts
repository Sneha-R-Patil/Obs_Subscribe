import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project2';


   foo = new Observable(subscriber => {
    // for(let i=0;i<10000;i++){
    //   subscriber.next(i);
    // }
    setTimeout(() => {subscriber.next(1);},2000);
    setTimeout(() => {subscriber.next(3);},3000);
    setTimeout(() => { subscriber.complete() }, 3500); 
    setTimeout(() => { subscriber.error("error emitted") }, 3500);    //sending error event. observable stops here
    setTimeout(() => { subscriber.next("4") }, 4000);          //this code is never called
    setTimeout(() => { subscriber.next("5") }, 5000);

    // setTimeout(() => {subscriber.next(300);},3000);
    // setTimeout(() => {subscriber.next(1);},2000);
    // setTimeout(() => {subscriber.next(3);},3000);
  });

  // ngOnInit(): void {
  //   this.foo.subscribe(x => {
  //     console.log(x);
  //   });

    onClick(){
    console.log("before");
    this.foo.subscribe(x =>{
     
      console.log(x)
      
    });
    console.log("after");
   
  }
  }



