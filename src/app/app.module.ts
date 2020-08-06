import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import{ HeaderComponent} from'./header/header.component';
import { ReciepeComponent } from './reciepe/reciepe.component';
import { ReciepeListComponent } from './reciepe/reciepe-list/reciepe-list.component';
import { ReciepeDetailComponent } from './reciepe/reciepe-detail/reciepe-detail.component';
import { ReciepeItemComponent } from './reciepe/reciepe-list/reciepe-item/reciepe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReciepeComponent,
    ReciepeListComponent,
    ReciepeDetailComponent,
    ReciepeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],

  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}
