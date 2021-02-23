import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayerComponent } from './default-layer.component';

describe('DefaultLayerComponent', () => {
  let component: DefaultLayerComponent;
  let fixture: ComponentFixture<DefaultLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultLayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
