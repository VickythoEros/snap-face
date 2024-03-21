import { FaceSnapService } from './../services/face-snap.service';
import { Component, OnInit } from '@angular/core';
import { Facesnap } from '../facesnap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent, CommonModule],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss',
})
export class FaceSnapListComponent implements OnInit {
  faceSnapList!: Facesnap[];

  constructor(private faceSnapService: FaceSnapService){}

  ngOnInit(): void {
    this.faceSnapList = this.faceSnapService.getAllSnaps()
  }
}
