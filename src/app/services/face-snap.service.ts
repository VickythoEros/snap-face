import { Injectable } from '@angular/core';
import { Facesnap } from '../facesnap';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapService {
  constructor() {}
  faceSnapList: Facesnap[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Paris',
    },
    {
      id: 2,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 6,
      location: 'la montagne',
    },
    {
      id: 3,
      title: 'Un bon repas',
      description: "Mmmh que c'est bon !",
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps: 0,
    },
  ];

  getAllSnaps(): Facesnap[] {
    return this.faceSnapList;
  }

  getFaceSnapById(faceSnapId: number): Facesnap {
    const faceSnap = this.faceSnapList.find(
      (facesnap) => facesnap.id === faceSnapId
    );
    if (!faceSnap) {
      throw new Error('FaceSnap not found !');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnap(faceSnapId: number,snapType: "snap" | "unsnap"): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }


}
