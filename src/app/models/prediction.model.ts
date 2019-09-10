export class PredictedSettings {
  predictedSettings1: number;
  predictedSettings2: number;
  predictedSettings3: number;
}

export class PredictionSettings {
  sitc: predictionSitc;
  country: predictionCountry;
  size: predictionCountry;
  role: predictionRole;
}

export enum predictionSitc {
  G45110 = 0,
  M69201 = 1,
  F43320 = 2
}

export enum predictionCountry {
  Se = 0,
  No = 1,
  Nl = 2,
}

export enum predictionSize {
  smale = 0,
  medium = 1,
  large = 2
}

export enum predictionRole {
  manager = 0,
  accountant = 1,
  auditor = 2
}
