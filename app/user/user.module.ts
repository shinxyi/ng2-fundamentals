import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { userRoutes } from './user.routes'
import { ProfileComponent } from './profile.component'

@NgModule({
    imports: [
        CommonModule, //<--as opposed to BrowserModule for the root modulue
        RouterModule.forChild(userRoutes) //<-- as opposed to .forRoot for the root modulue
    ],
    declarations: [
        ProfileComponent
    ], 
    providers: [

    ]
})

export class UserModule { }