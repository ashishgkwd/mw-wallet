import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mw-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() message;

  constructor(
    private modalService: ModalService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  close() {
    this.router.navigate(['/topup']);
    this.modalService.destroy();
  }

}
