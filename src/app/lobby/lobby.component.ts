import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PlayerService } from '../service/player.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Player } from '../model/player.model';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LobbyComponent implements OnInit {
  form: FormGroup;

  constructor(private playerService: PlayerService,
              private fb: FormBuilder,
              private router: Router) { }

  join() {
    if (this.form.invalid) {
      return;
    }

    this.playerService.save(this.form.value).subscribe(
      (response: HttpResponse<Player>) => this.router.navigateByUrl('/chat'),
      (err: HttpErrorResponse) => console.error(err)
    );
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
  }

}
