import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArgazkiBildumaPage } from './argazki-bilduma.page';

describe('ArgazkiBildumaPage', () => {
  let component: ArgazkiBildumaPage;
  let fixture: ComponentFixture<ArgazkiBildumaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArgazkiBildumaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
