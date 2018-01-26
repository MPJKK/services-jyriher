import {Component, OnInit} from '@angular/core';
import {DigitransitService} from '../services/digitransit.service';

@Component({
    selector: 'app-routes',
    templateUrl: './routes.component.html',
    styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {

  //  pysakki: object;
    tulos: any;
   // kaikkiPysakit: any;

    //  shortName: string;


    constructor(private digitransitService: DigitransitService) {
    }

    /*
    searchStop() {
        this.digitransitService.getRoutes(this.pysakki).subscribe(response => {
            console.log(response.data['stops']);
            //this.pysakki = response.data['stops'];
           // this.tulos = this.pysakki;
            this.tulos = response.data['stops']

            for (let i = 0; i < this.kaikkiPysakit; i++) {
                console.log('loop');

            }
        });
    }
*/

    ngOnInit() {


        this.digitransitService.getRoutes(this.tulos).subscribe(response => {
            console.log(response.data['stops']);
            this.tulos = response.data['stops'];
        });
    }

}
