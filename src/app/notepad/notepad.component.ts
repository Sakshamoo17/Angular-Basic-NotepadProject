import { Component } from '@angular/core';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent {

  content : string = '';
  constructor() { }
  
  save() {
    localStorage.setItem('notepad-content', this.content);
  }
  
  ngOnInit() {
    const savedContent = localStorage.getItem('notepad-content');
    if (savedContent) {
      this.content = savedContent;
    }
  }
  
}
