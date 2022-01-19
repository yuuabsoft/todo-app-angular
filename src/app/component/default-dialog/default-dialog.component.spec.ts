import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {DefaultDialogComponent} from './default-dialog.component';

describe('TodoDeleteDialogComponent', () => {
  let component: DefaultDialogComponent;
  let fixture: ComponentFixture<DefaultDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefaultDialogComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture   = TestBed.createComponent(DefaultDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
