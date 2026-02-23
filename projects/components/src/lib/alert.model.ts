export interface AlertData {
  alertDetails: AlertDetails;
  vehicleDetails: VehicleDetails;
  driverDetails: DriverDetails;
  imageDetails: ImageDetails;
  location: LocationDetails;
  videoDetails: VideoDetails;
}

export interface AlertDetails {
  title: string;
  timestamp: string;
}

export interface VehicleDetails {
  company: string;
  sideNumber: string;
  plateNumber: string;
}

export interface DriverDetails {
  staffId: string;
  permitId: string;
  name: string;
  photoUrl?: string;
}

export interface ImageDetails {
  driver: string;
  cabin: string;
  front: string;
  back: string;
}

export interface LocationDetails {
  areaName: string;
  lat: number;
  lng: number;
}

export interface VideoDetails {
  videoUrl: string;
  activeView: 'driver' | 'cabin' | 'front' | 'back';
}

export type AlertAction = 'acknowledge' | 'close' | 'escalate' | 'investigation';
