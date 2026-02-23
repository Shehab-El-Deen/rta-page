import { 
  Component, Input, Output, EventEmitter, 
  OnInit, OnChanges, SimpleChanges, 
  AfterViewInit, OnDestroy 
} from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';
import { AlertAction, LocationDetails, VideoDetails } from '../alert.model';

type VideoView = 'driver' | 'cabin' | 'front' | 'back';

@Component({
  selector: 'app-alert-right-panel',
  templateUrl: './alert-right-panel.component.html',
  styleUrls: ['./alert-right-panel.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AlertRightPanelComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  @Input() videoDetails!: VideoDetails;
  @Input() location!: LocationDetails;
  @Output() actionTaken = new EventEmitter<AlertAction>();

  activeVideoView: VideoView = 'driver';
  videoViews: VideoView[] = ['driver', 'cabin', 'front', 'back'];

  private map: L.Map | null = null;
  private marker: L.Marker | null = null;
  private mapInitialized = false;

  latitude: number = 25.1136;
  longitude: number = 55.1719;

  ngOnInit(): void {
    if (this.location?.lat && this.location?.lng) {
      this.latitude = this.location.lat;
      this.longitude = this.location.lng;
    }
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['location'] && this.location?.lat && this.location?.lng) {
      this.latitude = this.location.lat;
      this.longitude = this.location.lng;

      if (this.mapInitialized) {
        this.updateMarker();
      }
    }
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
      this.map = null;
    }
  }

 private initMap(): void {
  // Use inline SVG as data URL - no file path issues
  const iconDefault = L.divIcon({
    html: `
      <<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
           width="32" height="32" fill="#e53935">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5" fill="white"/>
      </svg>>
    `,
    className: '',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });

  L.Marker.prototype.options.icon = iconDefault;

  this.map = L.map('map').setView([this.latitude, this.longitude], 15);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(this.map);

  this.marker = L.marker([this.latitude, this.longitude]).addTo(this.map);
  this.mapInitialized = true;
}

  private updateMarker(): void {
    if (this.map && this.marker) {
      const newLatLng = L.latLng(this.latitude, this.longitude);
      this.marker.setLatLng(newLatLng);
      this.map.setView(newLatLng, 15);
    }
  }

  setActiveView(view: VideoView): void {
    this.activeVideoView = view;
  }

  onAction(action: AlertAction): void {
    this.actionTaken.emit(action);
  }

  getViewLabel(view: VideoView): string {
    return view.charAt(0).toUpperCase() + view.slice(1);
  }
}