import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureBoardsComponent } from './azure-boards.component';

describe('AzureBoardsComponent', () => {
  let component: AzureBoardsComponent;
  let fixture: ComponentFixture<AzureBoardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzureBoardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AzureBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
