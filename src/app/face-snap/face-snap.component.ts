
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Facesnap } from '../facesnap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: Facesnap;

  buttonSnap!: string;

  ngOnInit(): void {
    this.buttonSnap = 'Oh Snap !';
  }

  onSnap() {
    if (this.buttonSnap === 'Oh Snap !') {
      this.faceSnap.snaps++;
      this.buttonSnap = 'Oops UnSnap !';
    } else {
      this.faceSnap.snaps--;
      this.buttonSnap = 'Oh Snap !';
    }
  }
}
