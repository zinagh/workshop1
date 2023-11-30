import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-appartment-component',
  templateUrl: './detail-appartment-component.component.html',
  styleUrls: ['./detail-appartment-component.component.css']
})
export class DetailAppartmentComponentComponent {
  appId!: number;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.appId = +params['appId'];
    });
  }
}
