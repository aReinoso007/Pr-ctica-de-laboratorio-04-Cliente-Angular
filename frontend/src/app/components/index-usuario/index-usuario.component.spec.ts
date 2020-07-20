import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexUsuarioComponent } from './index-usuario.component';

describe('IndexUsuarioComponent', () => {
  let component: IndexUsuarioComponent;
  let fixture: ComponentFixture<IndexUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
