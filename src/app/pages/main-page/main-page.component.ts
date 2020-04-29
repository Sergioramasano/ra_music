import {Component, OnDestroy, OnInit} from '@angular/core';
import {GetAuthorService} from "../../services/get-author.service";
import {FormBuilder} from "@angular/forms";
import {Observable, Subscription} from "rxjs";
import {IAudio, IAudious} from "../../interfaces";
import {select, Store} from "@ngrx/store";
import {selectSongsList} from "../../store/selectors/audio.selectors";
import {GetSongs, SongsActions} from "../../store/actions/audio.actions";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {

  trackForm = this.fb.group({
    trackName: ['']
  });
  audios: IAudious;
  sub: Subscription;
  public songs$: Observable<IAudio[]> = this.store.pipe(select(selectSongsList));
  constructor(private getAuthor: GetAuthorService, private fb: FormBuilder, private store: Store<IAudio[]>) {
  }

  ngOnInit(): void {

  }

  onSubmit() {
    // this.sub = this.getAuthor.getSongByName(this.trackForm.value.trackName, '25').subscribe(res => {
    //   this.audios = res.results;
    // })
    const songName = this.trackForm.value.trackName;
    this.store.dispatch({
      type: SongsActions.GetSongs,
      payload: {songName, limit:'25'}
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
