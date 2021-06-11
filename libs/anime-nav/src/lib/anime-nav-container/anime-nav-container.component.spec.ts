import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeNavContainerComponent } from './anime-nav-container.component';

describe('AnimeNavContainerComponent', () => {
  let component: AnimeNavContainerComponent;
  let fixture: ComponentFixture<AnimeNavContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeNavContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeNavContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
