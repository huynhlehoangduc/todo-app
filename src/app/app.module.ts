import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HighlightCardComponent } from './components/highlight-card/highlight-card.component';
import { TodoModule } from './features/todo/todo.module';
import { todoReducer } from './features/todo/store/todo.reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        HighlightCardComponent
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot({ todo: todoReducer }, {}),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        TodoModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
