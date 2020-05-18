import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import { DataCvService } from '@app/services/data-cv.service';
import { User } from '@app/models';

@Component({
  selector: 'app-cv1',
  templateUrl: './cv1.component.html',
  styleUrls: ['./cv1.component.scss']
})
export class Cv1Component implements OnInit {
  @ViewChild('htmlData') htmlData: ElementRef;

  user1 = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : undefined;
  user2: User;
  zbel: string;
  error;

  constructor(private dataCv: DataCvService) {
   
  }

  getUser() {
    return this.dataCv.getUser(this.user1.id).subscribe(
      res => { this.user2 = res},
      err => { this.error = err.error.msg })
  }


  ngOnInit(): void {
  this.getUser();
  }

  downloadPDF(): void {
    html2canvas(document.getElementById('htmlData')).then(canvas => {
      // Few necessary setting options  
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });

  }

}

