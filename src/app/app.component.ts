import { Component, NgZone, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'assignment';
  items: MenuItem[] | undefined;
  isConstentShow: boolean = false;
  value: number = 0;

  interval: any;

  constructor(private messageService: MessageService, private ngZone: NgZone) {}
  ngOnInit() {
    this.items = [
      {
        label: 'Orgamisation Structure',
        icon: 'pi pi-user-edit',
        items: [
          {
            label: 'UI Kit',
          },
        ],
      },
      {
        label: 'Configurations',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'UI Kit',
          },
        ],
      },
      {
        label: 'Reports',
        icon: 'pi pi-copy',
        items: [
          {
            label: 'UI Kit',
          },
        ],
      },
      {
        label: 'ETL',
        icon: 'pi pi-envelope',
        items: [
          {
            label: 'UI Kit',
          },
        ],
      },
    ];
  }

  hideContent() {
    this.isConstentShow = false;
  }
  showContent() {
    this.isConstentShow = true;
  }

  showBottomRight() {
    this.value = 0;
    this.isConstentShow = true;
    this.ngZone.runOutsideAngular(() => {
      this.interval = setInterval(() => {
        this.ngZone.run(() => {
          this.value = this.value + Math.floor(Math.random() * 10) + 1;
          if (this.value >= 100) {
            this.value = 100;
            setTimeout(() => {
              this.isConstentShow = false;
              this.messageService.add({
                severity: 'success',
                summary: 'Success Message',
                detail: 'Migration applied succesfully',
                key: 'br',
                life: 3000,
              });
            }, 1000);
            clearInterval(this.interval);
          }
        });
      }, 500);
    });
  }
}
