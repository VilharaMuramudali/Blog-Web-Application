import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Firestore ,collection ,addDoc} from '@angular/fire/firestore'
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { doc } from '@firebase/firestore';
import { CategoriesService } from '../services/categories.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
 
export class CategoriesComponent implements OnInit {

  constructor(private categoryService :CategoriesService) { }

  
    ngOnInit(): void {

    }

    onSubmit(formData :NgForm){

      let categoryData = {
        category :formData.value.category
      }

      this.categoryService.saveData(categoryData)

      // let subcategoryData = {
      //   subcategory :'subCategory1'
      // }


      // this.afs.collection('categories') .add(categoryData).then(docRef =>{
      //   console.log(docRef);

      //   this.afs.doc(`categories/${docRef.id}/subcategories/${docRef.id}/`).collection('subcategories').add(subcategoryData)
      //   this.afs.collection('categories').doc(docRef.id).collection('subcategories').add(subcategoryData).then(docRef1 => {
      //     console.log(docRef1);

          
      //     this.afs.doc(`categories/${docRef.id}/subcategories/${docRef.id}`).collection('subsubcategories').add(subcategoryData)
          

      //     this.afs.collection('categories').doc(docRef.id).collection('subcategories').doc(docRef.id).collection('subsubcategories').add(subcategoryData).then(docRef2 =>{
      //       console.log("Second level subcategory saved Succesfully");
      //     })
      //   });
      // })
      // .catch(err => { console.log(err)});

  

      
    }

}
/*const collectionInstance = collection(this.afs,'categories');

      
       addDoc (collectionInstance, formData.value)
       .then(()=>{
        console.log("data saved succesfully");
       })
       .catch(err=>{console.log(err)})*/