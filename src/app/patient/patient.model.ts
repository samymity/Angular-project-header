export interface Patient {
  id: number;
  name: string;
  age: number;
  mySQLPatientDetails: Array<{ id: number; detail: string }>; // Adjust as needed
}