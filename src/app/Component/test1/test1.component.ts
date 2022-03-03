import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/Service/my-service.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  
  data:any;
  data1:any;
  constructor(private myService:MyServiceService) { }

  ngOnInit(): void {
   }

  onClick(){
    // this.myService.obs.subscribe((x: any)=>{
    //   console.log(x);
    // })

  this.myService.getData().subscribe((x: any)=>{
    console.log(x);
    this.data = x;
  })
  }

  onClickGit(){
    this.myService.setGitHubdata();
    this.myService.getGitHubData().subscribe((y:any)=>{
      console.log(y);
      this.data1 = y;

    })
  }

}
