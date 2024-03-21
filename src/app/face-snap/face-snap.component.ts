import { FaceSnapService } from './../services/face-snap.service';

import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Facesnap } from '../facesnap';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  [x: string]: any;
  @Input() faceSnap!: Facesnap;

  buttonSnap!: string;

  constructor(private faceSnapService: FaceSnapService,
    private router: Router) {}
  ngOnInit(): void {
    this.buttonSnap = 'Oh Snap !';
  }

  onSnap() {
    if (this.buttonSnap === 'Oh Snap !') {
      this.faceSnapService.snapFaceSnap(this.faceSnap.id, 'snap');
      this.buttonSnap = 'Oops UnSnap !';
    } else {
      this.faceSnapService.snapFaceSnap(this.faceSnap.id, 'unsnap');
      this.buttonSnap = 'Oh Snap !';
    }
  }

  showDetails(){
    this.router.navigateByUrl(`/facesnaps/${this.faceSnap.id}`);
  }
}
