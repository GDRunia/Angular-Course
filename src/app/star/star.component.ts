import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  isActive: boolean;

  constructor() { }

  ngOnInit() {
  }

  clickIcon() {
    this.isActive = !this.isActive;
  }

}
