import { TestBed } from '@angular/core/testing';

import { TodoServiceImp } from './todo-service.service';

describe('TodoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoServiceImp = TestBed.get(TodoServiceImp);
    expect(service).toBeTruthy();
  });
});
