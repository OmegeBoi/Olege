import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchWord:string = ''

  @Output()
  searchedTextChange:EventEmitter<string> = new EventEmitter<string>()

  onSearch(){
    this.searchedTextChange.emit(this.searchWord)
  }

}
