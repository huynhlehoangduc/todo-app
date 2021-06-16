import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoBaseListComponent } from './todo-base-list.component';

describe('TodoBaseListComponent', () => {
  let component: TodoBaseListComponent;
  let fixture: ComponentFixture<TodoBaseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoBaseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoBaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
