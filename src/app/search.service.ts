import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {Subject} from "rxjs/internal/Subject";

@Injectable()
export class SearchService {

  subjectAllPage = new Subject();

  constructor(private http: HttpClient){ }

  total_pages = 0;

  sendReqFromSubject(obj){

    let url = `https://api.nestoria.co.uk/api?encoding=json&room_min=${obj.minRoom}&room_max=${obj.maxRoom}&price_min=${obj.minPrice}
&price_max=${obj.maxPrice}&pretty=1&property_type=${obj.property}&listing_type=${obj.listing_type}&place_name=${obj.city}
&number_of_results=5&page=${obj.numberPage}&action=search_listings&country=uk`;
    return this.http.get(url).pipe(map(data=>{
      this.total_pages = data["response"].total_pages;
      let flatList = data["response"]['listings'];
      this.subjectAllPage.next({
        page:data["response"]['page'],
        total:data["response"]['total_pages']
      });
      if (flatList && flatList.length){
        return flatList.map(flat =>  flat )
      } else {
        return []
      }
    }));

  }

}

