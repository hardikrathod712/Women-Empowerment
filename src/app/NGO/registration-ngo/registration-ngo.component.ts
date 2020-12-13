import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-ngo',
  templateUrl: './registration-ngo.component.html',
  styleUrls: ['./registration-ngo.component.css']
})
export class RegistrationNGOComponent implements OnInit {

  error: boolean;
  sectorNames: any = ['Agriculture', 'Animal Husbandary', 'Dairying', 'Fisheries', 'Handlooms', 'Handicrafts', 'Khadi and Village Industries', 'Sericulture'];
  registrationForm: FormGroup;
  nameControl: FormControl;
  address1Control: FormControl;
  address2Control: FormControl;
  descriptionControl: FormControl;
  cityControl: FormControl;
  stateControl: FormControl;
  zipcodeControl: FormControl;
  countryControl: FormControl;
  emailControl: FormControl;
  passwordControl: FormControl;
  contactControl: FormControl;
  sectornameControl: FormControl;
  sectorAddress1Control: FormControl;
  sectorAddress2Control: FormControl;
  sectorDescriptionControl: FormControl;
  sectorCityControl: FormControl;
  sectorStateControl: FormControl;
  sectorZipcodeControl: FormControl;
  sectorCountryControl: FormControl;
  startDateControl: FormControl;
  endDateControl: FormControl;
  seatsControl: FormControl;

  submitted: boolean;

  constructor(formBuilder: FormBuilder) {
    this.nameControl = new FormControl("", Validators.compose([Validators.required, Validators.minLength(3)]));
    this.zipcodeControl = new FormControl("", Validators.compose([Validators.required, Validators.minLength(6)]));
    this.contactControl =
      new FormControl("", Validators.compose([Validators.required, Validators.minLength(10)]));

    this.passwordControl =
      new FormControl("", Validators.compose([Validators.required, Validators.minLength(10)]));

    this.descriptionControl =
      new FormControl("", Validators.compose([Validators.required, Validators.minLength(10)]));

    this.address1Control = new FormControl("", Validators.required);
    this.address2Control = new FormControl("", Validators.required);
    this.cityControl = new FormControl("", Validators.required);
    this.stateControl = new FormControl("", Validators.required);
    this.countryControl = new FormControl("", Validators.required);
    this.emailControl = new FormControl("", Validators.required);

    this.sectornameControl = new FormControl("", Validators.compose([Validators.required, Validators.minLength(3)]));
    this.sectorAddress1Control = new FormControl("", Validators.required);
    this.sectorAddress2Control = new FormControl("", Validators.required);
    this.sectorDescriptionControl = new FormControl("", Validators.required);
    this.sectorCityControl = new FormControl("", Validators.required);
    this.sectorStateControl = new FormControl("", Validators.required);
    this.sectorZipcodeControl = new FormControl("", Validators.compose([Validators.required, Validators.minLength(6)]));
    this.sectorCountryControl = new FormControl("", Validators.required);
    this.startDateControl = new FormControl("", Validators.required);
    this.endDateControl = new FormControl("", Validators.required);
    this.seatsControl = new FormControl("", Validators.required);


    // build the form
    this.registrationForm = formBuilder.group({
      // each form control needs to be provided an id
      "name": this.nameControl,
      "description": this.descriptionControl,
      "address1": this.address1Control,
      "address2": this.address2Control,
      "city": this.cityControl,
      "state": this.stateControl,
      "country": this.countryControl,
      "zipcode": this.zipcodeControl,
      "email": this.emailControl,
      "password": this.passwordControl,
      "contact": this.contactControl,
      "sectorname": this.sectornameControl,
      "sectorDescription": this.sectorDescriptionControl,
      "sectorAddress1": this.sectorAddress1Control,
      "sectorAddress2": this.sectorAddress2Control,
      "sectorcity": this.sectorCityControl,
      "sectorstate": this.sectorStateControl,
      "sectorcountry": this.sectorCountryControl,
      "sectorzipcode": this.sectorZipcodeControl,
      "startDate": this.startDateControl,
      "endDate": this.endDateControl,
      "seats": this.seatsControl
    });

    this.error = false;

  }

  ngOnInit(): void {
  }

  changeSectorName(e) {
    this.sectornameControl.setValue(e.target.value, {
      onlySelf: true
    })
  }

  onRegsubmit() {
    this.submitted = true;
  }

}
