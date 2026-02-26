import { Component, OnInit, OnChanges, SimpleChanges, Input } from "@angular/core";
import { Control, ControlMemberApi, TypeAttributes } from "@sassoftware/vi-api/control";
import { PageModel } from "@sassoftware/vi-api/page-model";
import { CommonModule } from '@angular/common';
import { AlertLeftPanelComponent } from '../alert-left-panel/alert-left-panel.component';
import { AlertRightPanelComponent } from '../alert-right-panel/alert-right-panel.component';
import { AlertData, AlertAction } from '../alert.model';
import { RtaApiService } from '../services/rta-api.service';

@Component({
  selector: 'sol-rta-page',
  imports: [CommonModule, AlertLeftPanelComponent, AlertRightPanelComponent],
  standalone: true,
  templateUrl: './rta-page.component.html',
  styleUrls: ['./rta-page.component.css'],
  providers: [RtaApiService]
})
export class RtaPageComponent implements OnInit, OnChanges {
  alertData: AlertData | null = null;

  @Input() childNode!: Control;
  @Input() pageModel!: PageModel;
  @Input() controlApi!: ControlMemberApi<TypeAttributes, any>;

  constructor(private rtaApiService: RtaApiService) {}

  ngOnInit(): void {
    this.loadFromPageModel();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pageModel'] && this.pageModel) {
      this.loadFromPageModel();
    }
  }

  private loadFromPageModel(): void {
    if (!this.pageModel) return;
    this.alertData = this.rtaApiService.getRTADataFromPageModel(this.pageModel);
  }

  onActionTaken(action: AlertAction): void {
    console.log('Action triggered:', action);
    switch (action) {
      case 'acknowledge': break;
      case 'close': break;
      case 'escalate': break;
      case 'investigation': break;
    }
  }
}