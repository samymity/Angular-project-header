import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Patient } from './patient.model';




@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients: Patient[] = [];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients(): void {
    console.log('Fetching patients...');
    this.patientService.getPatients().subscribe(
      (data: Patient[]) => {
        console.log('Patients fetched:', data);
        this.patients = data;
      },
      (error) => {
        console.error('Error fetching patients', error);
      }
    );
  }
}