import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchText:string = '';
  titleStyle: boolean = false;
  fontSize:number = 12;
  searchError: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  goSearch(){
    console.log('haha');
    this.titleStyle = !this.titleStyle;
    // this.fontSize += 2;
    !this.searchText ? this.searchError = true : this.searchError = false;
  }

  keyEnter(){
    this.goSearch()
  }

}
