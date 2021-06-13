import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFavouriteListComponent } from './todo-favourite-list.component';

describe('TodoFavouriteListComponent', () => {
  let component: TodoFavouriteListComponent;
  let fixture: ComponentFixture<TodoFavouriteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFavouriteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFavouriteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
