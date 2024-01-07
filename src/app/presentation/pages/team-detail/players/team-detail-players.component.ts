import { Component, Input, OnInit } from "@angular/core";
import { PersonService } from "../../../../dataproviders/soccer/person/person.service";
import { Person } from "../../../../core/domain/person.model";
import { ModalController } from "@ionic/angular";
import { PersonPage } from "../../person/person.page";

@Component({
  selector: "app-team-detail-players",
  templateUrl: "team-detail-players.component.html"
})
export class TeamDetailPlayersComponent implements OnInit {
  @Input() projectId: number;

  players: Map<string, Person[]> = new Map<string, Person[]>();

  isLoading = true;
  errorMessage = "Daten konnten nicht geladen werden";
  isError = false;

  constructor(
    private playerService: PersonService,
    private modalController: ModalController
  ) {
  }

  ngOnInit(): void {
    if (this.projectId > 0) {
      this.playerService.loadPersonsByProjectId(this.projectId).subscribe({
        next: (players) => {
          this.players = this.groupBy(players, (player) => player.position);

          if (this.players.size <= 0) {
            this.isError = true;
            this.errorMessage = "Für diese Spielzeit gibt es keinen Kader";
          }

          this.isLoading = false;
        },
        error: (error) => {
          this.isError = true;
          console.error(error);
        }
      });
    }
  }

  public openPlayer(personId: number) {
    this.modalController
      .create({
        component: PersonPage,
        componentProps: {
          personId: personId,
          projectId: this.projectId
        }
      })
      .then((modal) => modal.present());
  }

  returnZero() {
    return 0;
  }

  private groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  }
}
