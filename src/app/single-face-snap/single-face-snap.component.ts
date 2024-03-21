import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';
import { FaceSnapService } from '../services/face-snap.service';
import { Facesnap } from '../facesnap';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss',
})
export class SingleFaceSnapComponent {
  faceSnap!: Facesnap;

  buttonSnap!: string;

  constructor(private faceSnapService: FaceSnapService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.buttonSnap = 'Oh Snap !';
    const facesnapId = +this.route.snapshot.params['id']
    this.faceSnap = this.faceSnapService.getFaceSnapById(facesnapId)
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
}
