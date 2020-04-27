import {Component, OnDestroy, OnInit} from '@angular/core';
import {GetAuthorService} from "../../services/get-author.service";
import {FormBuilder} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {

  trackForm= this.fb.group({
    trackName: ['']
  });
  audioSrc: [];
  sub: Subscription;

  constructor(private getAuthor: GetAuthorService, private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  onSubmit() {
  this.sub = this.getAuthor.getSongByName(this.trackForm.value.trackName, '25').subscribe(res=>{
      this.audioSrc = res.results;
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  play(id) {
   const audio = document.getElementById(id);
      audio.play()
  }
}
