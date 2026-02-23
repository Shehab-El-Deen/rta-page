import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertDetails, VehicleDetails, DriverDetails, ImageDetails } from '../alert.model';

@Component({
  selector: 'app-alert-left-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-left-panel.component.html',
  styleUrls: ['./alert-left-panel.component.css']
})
export class AlertLeftPanelComponent implements OnInit {
  @Input() alertDetails!: AlertDetails;
  @Input() vehicleDetails!: VehicleDetails;
  @Input() driverDetails!: DriverDetails;
  @Input() imageDetails!: ImageDetails;

  ngOnInit(): void {}
}
