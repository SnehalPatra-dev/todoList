import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', () => {

  let fixture, app;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });


  beforeEach(async () => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  // Test 0
  it('should create the app', () => {
    expect(app).toBeDefined();
  });

  // Test 1
  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  // Test 2
  it(`should have as title 'Tasks at hand:'`, () => {
    expect(app.title).toEqual('Tasks at hand:');
  });

  // Test 3
  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#headingid1').textContent).toContain('Tasks at hand:');
  });

  // Test 4
  it('text content should not be null', () => {
    //Arrange
    fixture.detectChanges();
    const e1 = fixture.debugElement.query(By.css('.heading1')).nativeElement;

    //Assert
    expect(e1.innerHTML).not.toBeNull();
    expect(e1.innerHTML.length).toBeGreaterThan(0);

  });

  // Test 5
  it('content of icon should not be null', () => {
    // Arrange
    fixture.detectChanges();
    const e1 = fixture.debugElement.query(By.css('#icon1')).nativeElement;

    //Assert
    expect(e1.innerHTML).not.toBeNull();
  });

  //Test 6
  it('icon1 should be defined', () => {
    // Arrange
    fixture.detectChanges();
    const e1 = fixture.debugElement.query(By.css('#icon1')).nativeElement;

    //Assert
    expect(e1.innerHTML).toBeDefined();
  });

  //Test 7 
  it('icon2 should be defined', () => {
    // Arrange 
    fixture.detectChanges();
    const e2 = fixture.debugElement.query(By.css('#icon2')).nativeElement;

    //Assert
    expect(e2.innerHTML).toBeDefined();
  });

  //Test 8 
  it('icon1 should not be null', () => {
    // Arrange 
    fixture.detectChanges();
    const e1 = fixture.debugElement.query(By.css('#icon1')).nativeElement;

    //Assert
    expect(e1.innerHTML).not.toBeNull();
  });

  //Test 9
  it('icon2 should not be null', () => {
    // Arrange 
    fixture.detectChanges();
    const e2 = fixture.debugElement.query(By.css('#icon2')).nativeElement;

    //Assert 
    expect(e2.innerHTML).not.toBeNull();
  });

  //Test 10
  it('icon2 should contain the specified text', () => {
    // Arrange 
    fixture.detectChanges();
    const e2 = fixture.debugElement.query(By.css('#icon2')).nativeElement;

    // Assert
    expect(e2.textContent).toContain('add_task');
  });

  //Test 11
  it('icon1 should contain the specified text', () => {
    // Arrange 
    fixture.detectChanges();
    const e1 = fixture.debugElement.query(By.css('#icon1')).nativeElement;

    // Assert
    expect(e1.textContent).toContain('border_color');
  });

  //Test 12
  it('button1 should be defined and non-empty', () => {
    // Arrange
    fixture.detectChanges();
    const b1 = fixture.debugElement.query(By.css('.button1')).nativeElement;

    // Assert
    expect(b1.innerHTML).not.toBeNull();
    expect(b1.innerHTML).toBeDefined();
  });

});
