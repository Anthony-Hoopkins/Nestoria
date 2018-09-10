import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";


@Injectable()
export class SearchService {

  constructor(private http: HttpClient){ }

  total_pages = 0;

  sendReqFromSubject(obj){
    console.log();
    let url = `https://api.nestoria.co.uk/api?encoding=json&pretty=1&place_name=${obj.city}&number_of_results=5&page=${obj.numberPage}&action=search_listings&country=uk&listing_type=buy`; //&number_of_results=7
    return this.http.get(url).pipe(map(data=>{
      this.total_pages = data["response"].total_pages;
      let flatList = data["response"]['listings'];
      console.log(data);
      if (flatList && flatList.length){
        return flatList.map(flat =>  flat )
      } else {
        return []
      }
      // ,
      // catchError(err => {
      //   console.log(err);
      //   return throwError(err);
      // });
    }));
  }

}




















//-------------------------------


// increment(){
//   this.counter ++;
// }
//
// decrement(){
//   this.counter --;
// }
//
// getValue(){
//   return this.counter;
// }
//
// log(message: string){
//   this.counter++;
//   console.log(message);
// }


//--------------------------------


// if (!this.dataRespond.length ) {
//   this.trueResponse = false;
//   console.log(this.trueResponse);
//   // return
// }

// sendRequestNestoria(){
//   // console.log('sendRequestNestoria on      '+this.url);
//   this.http.get(this.url).subscribe((data)=> {
//     this.dataRespond = data["response"]['listings'];
//     console.dir(this.dataRespond);
//     // return this.resp.response.listings;
//   });
// }


// getFlats() : Observable<any[]> {
//   return this.http.get(this.url).pipe(map(data=>{
//     let flatList = data["response"]['listings'];
//     return flatList.map(function(flat:any) {
//       console.log(flat);
//       return flat;
//     });
//   }));
// }


// getDataNestoria(){
//   console.log('sendRequestNestoria on      '+this.url);
//   // this.sendRequestNestoria();
//   this.http.get(this.url).subscribe((data)=> {
//     this.resp = data;
//     return this.resp.response.listings;
//   });
//   console.log(this.resp);
//   // return dataNestoria;
// }
