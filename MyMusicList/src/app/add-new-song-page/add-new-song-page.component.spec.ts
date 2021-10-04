import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewSongPageComponent } from './add-new-song-page.component';

describe('AddNewSongPageComponent', () => {
  let component: AddNewSongPageComponent;
  let fixture: ComponentFixture<AddNewSongPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewSongPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewSongPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
