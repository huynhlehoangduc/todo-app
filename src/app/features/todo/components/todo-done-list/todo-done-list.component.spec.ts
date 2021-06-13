import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDoneListComponent } from './todo-done-list.component';

describe('TodoDoneListComponent', () => {
  let component: TodoDoneListComponent;
  let fixture: ComponentFixture<TodoDoneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDoneListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
