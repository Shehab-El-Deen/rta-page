import { Component, OnInit, Input } from "@angular/core";
import { Control, ControlMemberApi, TypeAttributes } from "@sassoftware/vi-api/control";
import { PageModel } from "@sassoftware/vi-api/page-model";
import { CommonModule } from '@angular/common';
import { AlertLeftPanelComponent } from '../alert-left-panel/alert-left-panel.component';
import { AlertRightPanelComponent } from '../alert-right-panel/alert-right-panel.component';
import { AlertData, AlertAction } from '../alert.model';


@Component({
  selector: 'sol-rta-page',
  imports: [CommonModule, AlertLeftPanelComponent, AlertRightPanelComponent],
  standalone: true,
  templateUrl: './rta-page.component.html',
  styleUrls: ['./rta-page.component.css']
})
export class RtaPageComponent implements OnInit {
  alertData: AlertData = {
    alertDetails: {
      title: 'PTSM - Driver phoning detected',
      timestamp: '05/02/2026 11:48:34'
    },
    vehicleDetails: {
      company: 'Arabia Taxi',
      sideNumber: 'AT0316',
      plateNumber: '12345'
    },
    driverDetails: {
      staffId: '0003007918',
      permitId: '2835318',
      name: 'Jasim Ali Hamid Ali',
      photoUrl: ''
    },
    imageDetails: {
      driver: '',   // Replace with actual image URLs
      cabin: '',
      front: '',
      back: ''
    },
    location: {
      areaName: 'Area Name',
      lat: 25.1136,   
      lng: 55.1719
    },
    videoDetails: {
      videoUrl: '', // Replace with actual video URL
      activeView: 'driver'
    }
  };

  @Input() childNode!: Control;
  @Input() pageModel!: PageModel;
  @Input() controlApi!: ControlMemberApi<TypeAttributes, any>

  constructor() {
  }
ngOnInit(): void {
  this.pageModel.data['company'] = 'RTA Alert Details';
}

  onActionTaken(action: AlertAction): void {
    console.log('Action triggered:', action);
    // Handle action: call API, show confirmation dialog, etc.
    switch (action) {
      case 'acknowledge':
        // Handle acknowledge
        break;
      case 'close':
        // Handle close
        break;
      case 'escalate':
        // Handle escalate
        break;
      case 'investigation':
        // Handle investigation
        break;
    }
  }
}
