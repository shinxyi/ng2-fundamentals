import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { userRoutes } from './user.routes'
import { ProfileComponent } from './profile.component'
import { LoginComponent } from './login.component'

@NgModule({
    imports: [
        CommonModule, //<--as opposed to BrowserModule for the root modulue
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes) //<-- as opposed to .forRoot for the root modulue
    ],
    declarations: [
        ProfileComponent,
        LoginComponent
    ], 
    providers: [

    ]
})

export class UserModule { }