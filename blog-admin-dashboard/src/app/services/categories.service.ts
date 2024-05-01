import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { Action } from 'rxjs/internal/scheduler/Action';
import { map } from 'rxjs/operators';

interface CategoryData {
  category: string;
  // Other properties if any
}
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private afs : AngularFirestore, private toastr :ToastrService) { }

  
  saveData(data: CategoryData){
    this.afs.collection('categories') .add(data).then(docRef =>{
      console.log(docRef);
      this.toastr.success('Data Insert Successfully')

    })
    .catch(err => { console.log(err)});
  }

  loadData(){
    return this.afs.collection('categories').snapshotChanges().pipe(
      map(actions =>{
        return actions.map(a =>{

          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id,data}

        })
      })
    )
  }
}
