import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {collection, collectionData, Firestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title = 'skillforge';

  public firestore: Firestore = inject(Firestore);

  items$: Observable<any[]>;

  constructor() {
    const aCollection = collection(this.firestore, 'items')
    // collectionData(aCollection).subscribe(res => console.log(res));
    this.items$ = collectionData(aCollection);
  }
}
