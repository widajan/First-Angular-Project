import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCmpComponent } from "./new-cmp/new-cmp.component";
import { firstCmpComponent} from "./firstCmp/firstcmp.component";
import { testCmpComponent } from "./test-cmp/test-cmp.component";

const routes: Routes = [
  {
    path: "alishah",
    component: NewCmpComponent
  },
  {
    path: "firstcmppath",
    component: firstCmpComponent
  }, 
  {
    path: "testpath",
    component: testCmpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
