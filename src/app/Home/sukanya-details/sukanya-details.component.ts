import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SukanyaAccount } from 'src/app/models/sukanyaaccount.model';
import { SukanyaService } from 'src/app/services/sukanya.service';

@Component({
  selector: 'app-sukanya-details',
  templateUrl: './sukanya-details.component.html',
  styleUrls: ['./sukanya-details.component.css']
})
export class SukanyaDetailsComponent implements OnInit {

  userId: number;
  public accountDetails: SukanyaAccount;

  constructor(private route: ActivatedRoute, private accountService: SukanyaService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(resp => this.userId = resp.userId);
    this.accountService.getSukanyaDetails(this.userId).subscribe(
      data => {
        this.accountDetails = data;
        console.log(JSON.stringify(this.accountDetails));
      }
    )
  }
}
