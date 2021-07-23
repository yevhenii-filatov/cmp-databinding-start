import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('serverCreatedEvent') serverCreated = new EventEmitter<{ serverName: string, serverContent: string; }>();
  @Output('bluePrintCreatedEvent') bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string; }>();
  newServerContent = '';
  newServerName = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.bluePrintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

}
