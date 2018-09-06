import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {throwError} from "rxjs/internal/observable/throwError";

import {Phone} from './phone';

// import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class SearchService {

  // private counter: number = 0;

  constructor(private http: HttpClient){ }

  total_pages = 0;
  // numberPage = 3;

  sendReqFromSubject(obj){
    console.dir(obj);
    let url = `https://api.nestoria.co.uk/api?encoding=json&pretty=1&place_name=${obj.city}&number_of_results=5&page=${obj.numberPage}&action=search_listings&country=uk&listing_type=buy`; //&number_of_results=7
    console.log(url);
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
  /*  const favoriteArr = JSON.parse(localStorage.getItem('favoriteStorage')) || [];
    console.log(favoriteArr);
    return favoriteArr;*/
  }


  // url:string = 'https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=durham&number_of_results=3';
  // resp;
  // trueResponse = true;
  // private dataRespond: any [] = [];
  // placeName = 'durham';
  // private allRespond;
  // setNumberPage(num: number){
  //   this.numberPage = num;
  //   console.log(`numberPage = ${num}`);
  //   // this.url = `https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=durham&page=${this.numberPage}&number_of_results=3`;
  //   this.sendRequestNestoria();
  // }

  // addRegionOnRequestUrl(placeName: string){
  //   this.placeName = placeName;
  //   console.log(`newPlaseName = ${this.placeName}`);
  //   this.getFlats();
  //   this.sendRequestNestoria();
  // }

  // getDataNestoria(){
  //   console.dir(this.dataRespond);
  //   return  this.dataRespond;
  // }

  // urlChange(){
  //   this.url = `https://api.nestoria.co.uk/api?encoding=json&pretty=1&place_name=${this.placeName}&page=${this.numberPage}&number_of_results=3&action=search_listings&country=uk&listing_type=buy`;
  //   console.log(this.url);
  // }

  // sendRequestNestoria(){
  //   this.urlChange();
  //   this.http.get(this.url).subscribe((data)=> {
  //     this.dataRespond.splice(0, this.dataRespond.length);
  //     this.allRespond = data;
  //     data["response"]['listings'].forEach((item)=> {
  //       this.dataRespond.push(item);
  //     });
  //
  //     console.dir(this.allRespond);
  //   });
  // }

  // getFlats() : Observable<any[]> {
  //   return this.http.get(this.url).pipe(map(data=>{
  //     let flatList = data["response"]['listings'];
  //     return flatList.map((flat:any) => {
  //       return flat;
  //     });
  //   }));
  // }


  //----

  private data: Phone[] = [
    { name:"Apple iPhone 7", price: 56000},
    { name: "HP Elite x3", price: 56000},
    { name: "Alcatel Idol S4", price: 25000}
  ];

  addData(name: string, price: number){
    this.data.push(new Phone(name, price));
  }

  getData(): Phone[] {
    console.log(this.data);
    return this.data;
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

/*  respondObj ={
    "request": {
      "country": "uk",
      "language": "en",
      "location": "brighton",
      "num_res": "20",
      "offset": 0,
      "output": "json_xs",
      "page": 1,
      "pretty": "1",
      "product_type": "realestate",
      "property_type": "property",
      "size_type": "net",
      "size_unit": "m2",
      "sort": "nestoria_rank",
      "listing_type": "buy"
    },
    "response": {
      "application_response_code": "100",
      "application_response_text": "listings returned for one unambiguous location",
      "attribution": {
        "img_height": 22,
        "img_url": "https://resources.nestimg.com/nestoria/img/pbr_v1.png",
        "img_width": 183,
        "link_to_img": "http://www.nestoria.com"
      },
      "created_http": "Tue, 28 Aug 2018 08:15:23 GMT",
      "created_unix": 1535444123,
      "link_to_url": "https://www.nestoria.co.uk/brighton/property/buy",
      "listings": [
        {
          "bathroom_number": "",
          "bedroom_number": 4,
          "car_spaces": 0,
          "commission": 0,
          "construction_year": 0,
          "datasource_name": "Home.co.uk",
          "img_height": 264,
          "img_url": "https://imgs.nestimg.com/detached_house_109905879971927876.jpg",
          "img_width": 352,
          "keywords": "Detached, Garden, En suite, Conservatory, Conversion, Garage, Kitchen",
          "latitude": 50.86168,
          "lister_name": "Spencer & Leigh",
          "lister_url": "https://www.nestoria.co.uk/detail/0000000109905879971927876/title/5/1-1?serpUid=&pt=1&ot=1&l=brighton&did=85_default&utm_source=api&utm_medium=external",
          "listing_type": "buy",
          "location_accuracy": 10,
          "longitude": -0.157218,
          "price": 625000,
          "price_currency": "£",
          "price_formatted": "£625,000",
          "price_high": 625000,
          "price_low": 625000,
          "property_type": "house",
          "size": 0,
          "size_type": "net",
          "summary": "Guide price 625,000 665,000family homes don't get much better than ...",
          "thumb_height": 60,
          "thumb_url": "https://imgs.nestimg.com/medium/detached_house_109905879971927876.jpg",
          "thumb_width": 80,
          "title": "Eldred Avenue, Westdene, Brighton",
          "updated_in_days": 0,
          "updated_in_days_formatted": "new!"
        },
        {
          "bathroom_number": 1,
          "bedroom_number": 3,
          "car_spaces": 0,
          "commission": 0,
          "construction_year": 0,
          "datasource_name": "Sourced",
          "img_height": 300,
          "img_url": "https://imgs.nestimg.com/old_patcham_mews_brighton_east_sussex_east_sussex_brighton_bn1_8yw_109868770454291265.jpg",
          "img_width": 400,
          "keywords": "Garden, Mews, En suite, Terraced, Garage, Kitchen, Dishwasher, Modern, Patio",
          "latitude": 50.864426,
          "lister_url": "https://www.nestoria.co.uk/detail/0000000109868770454291265/title/5/1-2?serpUid=&pt=1&ot=1&l=brighton&did=328794_default&utm_source=api&utm_medium=external",
          "listing_type": "buy",
          "location_accuracy": 9,
          "longitude": -0.150687,
          "price": 425000,
          "price_currency": "£",
          "price_formatted": "£425,000",
          "price_high": 425000,
          "price_low": 425000,
          "property_type": "house",
          "room_number": 3,
          "size": 0,
          "size_type": "net",
          "summary": "Set in the heart of the patcham village location is this ly present...",
          "thumb_height": 60,
          "thumb_url": "https://imgs.nestimg.com/medium/old_patcham_mews_brighton_east_sussex_east_sussex_brighton_bn1_8yw_109868770454291265.jpg",
          "thumb_width": 80,
          "title": "Old Patcham Mews Brighton - Mews",
          "updated_in_days": 6,
          "updated_in_days_formatted": "first seen 6 days ago"
        },
        {
          "bathroom_number": "",
          "bedroom_number": 1,
          "car_spaces": 0,
          "commission": 0,
          "construction_year": 0,
          "datasource_name": "Home.co.uk",
          "img_height": 264,
          "img_url": "https://imgs.nestimg.com/flatapartment_109905880041165994.jpg",
          "img_width": 352,
          "keywords": "Garden, Double Bedroom",
          "latitude": 50.84428,
          "lister_name": "Mishon Mackay",
          "lister_url": "https://www.nestoria.co.uk/detail/0000000109905880041165994/title/5/1-3?serpUid=&pt=1&ot=1&l=brighton&did=85_default&utm_source=api&utm_medium=external",
          "listing_type": "buy",
          "location_accuracy": 10,
          "longitude": -0.144268,
          "price": 270000,
          "price_currency": "£",
          "price_formatted": "£270,000",
          "price_high": 270000,
          "price_low": 270000,
          "property_type": "flat",
          "size": 0,
          "size_type": "net",
          "summary": "A opportunity to purchase this bright and one double bedroom apartm...",
          "thumb_height": 60,
          "thumb_url": "https://imgs.nestimg.com/medium/flatapartment_109905880041165994.jpg",
          "thumb_width": 80,
          "title": "Preston Drove, Brighton, East Sussex, BN1",
          "updated_in_days": 0,
          "updated_in_days_formatted": "new!"
        },
        {
          "bathroom_number": "",
          "bedroom_number": 1,
          "car_spaces": 0,
          "commission": 0,
          "construction_year": 0,
          "datasource_name": "Home.co.uk",
          "img_height": 264,
          "img_url": "https://imgs.nestimg.com/flatapartment_109905878359289907.jpg",
          "img_width": 352,
          "keywords": "Share of Freehold, No Chain, Conversion, Kitchen, Modern",
          "latitude": 50.832963,
          "lister_name": "John Hilton",
          "lister_url": "https://www.nestoria.co.uk/detail/0000000109905878359289907/title/5/1-4?serpUid=&pt=1&ot=1&l=brighton&did=85_default&utm_source=api&utm_medium=external",
          "listing_type": "buy",
          "location_accuracy": 10,
          "longitude": -0.12269,
          "price": 219950,
          "price_currency": "£",
          "price_formatted": "£219,950",
          "price_high": 219950,
          "price_low": 219950,
          "property_type": "flat",
          "size": 0,
          "size_type": "net",
          "summary": "A , raised one bedroom flat which forms the ground floor of a conve...",
          "thumb_height": 60,
          "thumb_url": "https://imgs.nestimg.com/medium/flatapartment_109905878359289907.jpg",
          "thumb_width": 80,
          "title": "Bonchurch Road, Brighton - Conversion",
          "updated_in_days": 0,
          "updated_in_days_formatted": "new!"
        },
        {
          "bathroom_number": 4,
          "bedroom_number": 3,
          "car_spaces": 0,
          "commission": 0,
          "construction_year": 0,
          "datasource_name": "Home.co.uk",
          "img_height": 264,
          "img_url": "https://imgs.nestimg.com/detached_house_109707700173384492.jpg",
          "img_width": 352,
          "keywords": "Detached, Garden, New Build",
          "latitude": 50.817973,
          "lister_name": "Justin Lloyd",
          "lister_url": "https://www.nestoria.co.uk/detail/0000000109707700173384492/title/5/1-5?serpUid=&pt=1&ot=1&l=brighton&did=85_default&utm_source=api&utm_medium=external",
          "listing_type": "buy",
          "location_accuracy": 10,
          "longitude": -0.111692,
          "price": 750000,
          "price_currency": "£",
          "price_formatted": "£750,000",
          "price_high": 750000,
          "price_low": 750000,
          "property_type": "house",
          "size": 0,
          "size_type": "net",
          "summary": ", newly built, 3 bedroom, 4 bathroom detached house in a sought aft...",
          "thumb_height": 60,
          "thumb_url": "https://imgs.nestimg.com/medium/detached_house_109707700173384492.jpg",
          "thumb_width": 80,
          "title": "Church Place, Brighton, BN2 - Garden",
          "updated_in_days": 0,
          "updated_in_days_formatted": "new!"
        },
        {
          "bathroom_number": "",
          "bedroom_number": 1,
          "car_spaces": 0,
          "commission": 0,
          "construction_year": 0,
          "datasource_name": "Home.co.uk",
          "img_height": 264,
          "img_url": "https://imgs.nestimg.com/flatapartment_109905876715790413.jpg",
          "img_width": 352,
          "keywords": "Garden, Lower Ground, Victorian, Kitchen, Modern",
          "latitude": 50.82111,
          "lister_name": "Sawyer",
          "lister_url": "https://www.nestoria.co.uk/detail/0000000109905876715790413/title/5/1-6?serpUid=&pt=1&ot=1&l=brighton&did=85_default&utm_source=api&utm_medium=external",
          "listing_type": "buy",
          "location_accuracy": 10,
          "longitude": -0.130605,
          "price": 300000,
          "price_currency": "£",
          "price_formatted": "£300,000",
          "price_high": 300000,
          "price_low": 300000,
          "property_type": "flat",
          "size": 0,
          "size_type": "net",
          "summary": "Guide price 300,000 325,000 view our interactive 360 degree state-o...",
          "thumb_height": 60,
          "thumb_url": "https://imgs.nestimg.com/medium/flatapartment_109905876715790413.jpg",
          "thumb_width": 80,
          "title": "St James's Avenue, Brighton - Modern",
          "updated_in_days": 0,
          "updated_in_days_formatted": "new!"
        },
        {
          "bathroom_number": "",
          "bedroom_number": 5,
          "car_spaces": 0,
          "commission": 0,
          "construction_year": 0,
          "datasource_name": "Home.co.uk",
          "img_height": 264,
          "img_url": "https://imgs.nestimg.com/semi_detached_house_109893054317510499.jpg",
          "img_width": 352,
          "keywords": "Garden, Semi-Detached, Fireplace, High Ceilings, Terraced, Wood Floor, Garage, Kitchen, Modern, Edwardian",
          "latitude": 50.84432,
          "lister_name": "Fine & Country",
          "lister_url": "https://www.nestoria.co.uk/detail/0000000109893054317510499/title/5/1-7?serpUid=&pt=1&ot=1&l=brighton&did=85_default&utm_source=api&utm_medium=external",
          "listing_type": "buy",
          "location_accuracy": 10,
          "longitude": -0.142831,
          "price": 930000,
          "price_currency": "£",
          "price_formatted": "£930,000",
          "price_high": 930000,
          "price_low": 930000,
          "property_type": "house",
          "size": 0,
          "size_type": "net",
          "summary": "Superb 5 bedroom end of terrace edwardian house with landscaped gar...",
          "thumb_height": 60,
          "thumb_url": "https://imgs.nestimg.com/medium/semi_detached_house_109893054317510499.jpg",
          "thumb_width": 80,
          "title": "Preston Drove, Brighton - Fireplace",
          "updated_in_days": 2,
          "updated_in_days_formatted": "first seen 2 days ago"
        },
        {
          "bathroom_number": 2,
          "bedroom_number": 4,
          "car_spaces": 0,
          "commission": 0,
          "construction_year": 0,
          "datasource_name": "Home.co.uk",
          "img_height": 264,
          "img_url": "https://imgs.nestimg.com/terraced_house_109899235885528981.jpg",
          "img_width": 352,
          "keywords": "Terraced, Edwardian",
          "latitude": 50.834897,
          "lister_name": "Brand Vaughan",
          "lister_url": "https://www.nestoria.co.uk/detail/0000000109899235885528981/title/5/1-8?serpUid=&pt=1&ot=1&l=brighton&did=85_default&utm_source=api&utm_medium=external",
          "listing_type": "buy",
          "location_accuracy": 10,
          "longitude": -0.149781,
          "price": 800000,
          "price_currency": "£",
          "price_formatted": "£800,000",
          "price_high": 800000,
          "price_low": 800000,
          "property_type": "house",
          "size": 0,
          "size_type": "net",
          "summary": "Guide price 800,000 850,000 edwardian situated on a quiet road in p...",
          "thumb_height": 60,
          "thumb_url": "https://imgs.nestimg.com/medium/terraced_house_109899235885528981.jpg",
          "thumb_width": 80,
          "title": "Chatsworth Road, Brighton, BN1",
          "updated_in_days": 1,
          "updated_in_days_formatted": "first seen yesterday"
        },
        {
          "bathroom_number": "",
          "bedroom_number": 3,
          "car_spaces": 0,
          "commission": 0,
          "construction_year": 0,
          "datasource_name": "Home.co.uk",
          "img_height": 264,
          "img_url": "https://imgs.nestimg.com/terraced_house_109893054090663349.jpg",
          "img_width": 352,
          "keywords": "Terraced, Victorian, Double Bedroom, Kitchen",
          "latitude": 50.844751,
          "lister_name": "Brand Vaughan",
          "lister_url": "https://www.nestoria.co.uk/detail/0000000109893054090663349/title/5/1-9?serpUid=&pt=1&ot=1&l=brighton&did=85_default&utm_source=api&utm_medium=external",
          "listing_type": "buy",
          "location_accuracy": 10,
          "longitude": -0.133183,
          "price": 500000,
          "price_currency": "£",
          "price_formatted": "£500,000",
          "price_high": 500000,
          "price_low": 500000,
          "property_type": "house",
          "size": 0,
          "size_type": "net",
          "summary": "Guide price 500,000 525,000fiveways catchment sitting within the ca...",
          "thumb_height": 60,
          "thumb_url": "https://imgs.nestimg.com/medium/terraced_house_109893054090663349.jpg",
          "thumb_width": 80,
          "title": "Stanmer Park Road, Brighton, BN1",
          "updated_in_days": 2,
          "updated_in_days_formatted": "first seen 2 days ago"
        },
        {
          "bathroom_number": "",
          "bedroom_number": 2,
          "car_spaces": 0,
          "commission": 0,
          "construction_year": 0,
          "datasource_name": "Home.co.uk",
          "img_height": 264,
          "img_url": "https://imgs.nestimg.com/flatapartment_109800489063747829.jpg",
          "img_width": 352,
          "keywords": "Garden, Garage, Kitchen, Modern",
          "latitude": 50.849398,
          "lister_name": "Spencer & Leigh",
          "lister_url": "https://www.nestoria.co.uk/detail/0000000109800489063747829/title/5/1-10?serpUid=&pt=1&ot=1&l=brighton&did=85_default&utm_source=api&utm_medium=external",
          "listing_type": "buy",
          "location_accuracy": 10,
          "longitude": -0.145428,
          "price": 325000,
          "price_currency": "£",
          "price_formatted": "£325,000",
          "price_high": 325000,
          "price_low": 325000,
          "property_type": "flat",
          "size": 0,
          "size_type": "net",
          "summary": "Ground floor flat in this close off surrenden road. We particularly...",
          "thumb_height": 60,
          "thumb_url": "https://imgs.nestimg.com/medium/flatapartment_109800489063747829.jpg",
          "thumb_width": 80,
          "title": "Surrenden Holt, Surrenden, Brighton",
          "updated_in_days": 2,
          "updated_in_days_formatted": "first seen 2 days ago"
        },
        {
          "bathroom_number": "",
          "bedroom_number": 1,
          "car_spaces": 0,
          "commission": 0,
          "construction_year": 0,
          "datasource_name": "Home.co.uk",
          "img_height": 264,
          "img_url": "https://imgs.nestimg.com/flatapartment_109893052879416195.jpg",
          "img_width": 352,
          "keywords": "Shared Garden, Balcony, Purpose Built, Kitchen, Lift",
          "latitude": 50.833285,
          "lister_name": "John Hilton",
          "lister_url": "https://www.nestoria.co.uk/detail/0000000109893052879416195/title/5/1-11?serpUid=&pt=1&ot=1&l=brighton&did=85_default&utm_source=api&utm_medium=external",
          "listing_type": "buy",
          "location_accuracy": 10,
          "longitude": -0.126511,
          "price": 179950,
          "price_currency": "£",
          "price_formatted": "£179,950",
          "price_high": 179950,
          "price_low": 179950,
          "property_type": "flat",
          "size": 0,
          "size_type": "net",
          "summary": "A pristine and ly presented studio apartment which occupies the 3rd...",
          "thumb_height": 60,
          "thumb_url": "https://imgs.nestimg.com/medium/flatapartment_109893052879416195.jpg",
          "thumb_width": 80,
          "title": "Napier House, Wellington Road, Brighton",
          "updated_in_days": 2,
          "updated_in_days_formatted": "first seen 2 days ago"
        },
        {
          "bathroom_number": "",
          "bedroom_number": 2,
          "car_spaces": 0,
          "commission": 0,
          "construction_year": 0,
          "datasource_name": "Home.co.uk",
          "img_height": 264,
          "img_url": "https://imgs.nestimg.com/flatapartment_109893055210846551.jpg",
          "img_width": 352,
          "keywords": "Garden",
          "latitude": 50.839364,
          "lister_name": "Phillips & Still",
          "lister_url": "https://www.nestoria.co.uk/detail/0000000109893055210846551/title/5/1-12?serpUid=&pt=1&ot=1&l=brighton&did=85_default&utm_source=api&utm_medium=external",
          "listing_type": "buy",
          "location_accuracy": 10,
          "longitude": -0.14165,
          "price": 260000,
          "price_currency": "£",
          "price_formatted": "£260,000",
          "price_high": 260000,
          "price_low": 260000,
          "property_type": "flat",
          "size": 0,
          "size_type": "net",
          "summary": "If you are looking for your first home or an investment you need lo...",
          "thumb_height": 60,
          "thumb_url": "https://imgs.nestimg.com/medium/flatapartment_109893055210846551.jpg",
          "thumb_width": 80,
          "title": "Beaconsfield Villas, Brighton",
          "updated_in_days": 2,
          "updated_in_days_formatted": "first seen 2 days ago"
        },
        {
          "bathroom_number": "",
          "bedroom_number": 2,
          "car_spaces": 0,
          "commission": 0,
          "construction_year": 0,
          "datasource_name": "Home.co.uk",
          "img_height": 264,
          "img_url": "https://imgs.nestimg.com/flatapartment_109893054831127110.jpg",
          "img_width": 352,
          "keywords": "Maisonette, No Chain, Raised Ground, Double Bedroom, Gas Central Heating",
          "latitude": 50.832696,
          "lister_name": "Maslen",
          "lister_url": "https://www.nestoria.co.uk/detail/0000000109893054831127110/title/5/1-13?serpUid=&pt=1&ot=1&l=brighton&did=85_default&utm_source=api&utm_medium=external",
          "listing_type": "buy",
          "location_accuracy": 10,
          "longitude": -0.123993,
          "price": 250000,
          "price_currency": "£",
          "price_formatted": "£250,000",
          "price_high": 250000,
          "price_low": 250000,
          "property_type": "flat",
          "size": 0,
          "size_type": "net",
          "summary": "Open for inspection on saturday the saturday 1st september and satu...",
          "thumb_height": 60,
          "thumb_url": "https://imgs.nestimg.com/medium/flatapartment_109893054831127110.jpg",
          "thumb_width": 80,
          "title": "Franklin Road, Brighton - No Chain",
          "updated_in_days": 2,
          "updated_in_days_formatted": "first seen 2 days ago"
        },
        {
          "bathroom_number": "",
          "bedroom_number": 4,
          "car_spaces": 0,
          "commission": 0,
          "construction_year": 0,
          "datasource_name": "Home.co.uk",
          "img_height": 264,
          "img_url": "https://imgs.nestimg.com/detached_house_109893054859459155.jpg",
          "img_width": 352,
          "keywords": "Detached, Garden, Grade II, Fireplace, Garage, Listed",
          "latitude": 50.826573,
          "lister_name": "Fine & Country",
          "lister_url": "https://www.nestoria.co.uk/detail/0000000109893054859459155/title/5/1-14?serpUid=&pt=1&ot=1&l=brighton&did=85_default&utm_source=api&utm_medium=external",
          "listing_type": "buy",
          "location_accuracy": 10,
          "longitude": -0.149428,
          "price": 1600000,
          "price_currency": "£",
          "price_formatted": "£1,600,000",
          "price_high": 1600000,
          "price_low": 1600000,
          "property_type": "house",
          "size": 0,
          "size_type": "net",
          "summary": "Distinguished grade ii listed detached house with sea views, idylli...",
          "thumb_height": 60,
          "thumb_url": "https://imgs.nestimg.com/medium/detached_house_109893054859459155.jpg",
          "thumb_width": 80,
          "title": "Victoria Place, Brighton, East Sussex",
          "updated_in_days": 2,
          "updated_in_days_formatted": "first seen 2 days ago"
        },
        {
          "bathroom_number": "",
          "bedroom_number": 1,
          "car_spaces": 0,
          "commission": 0,
          "construction_year": 0,
          "datasource_name": "Home.co.uk",
          "img_height": 264,
          "img_url": "https://imgs.nestimg.com/flatapartment_109887347551495042.jpg",
          "img_width": 352,
          "keywords": "Share of Freehold, No Chain, Double Bedroom, Kitchen",
          "latitude": 50.824228,
          "lister_name": "Sawyer",
          "lister_url": "https://www.nestoria.co.uk/detail/0000000109887347551495042/title/5/1-15?serpUid=&pt=1&ot=1&l=brighton&did=85_default&utm_source=api&utm_medium=external",
          "listing_type": "buy",
          "location_accuracy": 10,
          "longitude": -0.153,
          "price": 265000,
          "price_currency": "£",
          "price_formatted": "£265,000",
          "price_high": 265000,
          "price_low": 265000,
          "property_type": "flat",
          "size": 0,
          "size_type": "net",
          "summary": "One bedroom contemporary apartment close to brighton seafront with ...",
          "thumb_height": 60,
          "thumb_url": "https://imgs.nestimg.com/medium/flatapartment_109887347551495042.jpg",
          "thumb_width": 80,
          "title": "Sillwood Court, Brighton - No Chain",
          "updated_in_days": 3,
          "updated_in_days_formatted": "first seen 3 days ago"
        },
        {
          "bathroom_number": "",
          "bedroom_number": 2,
          "car_spaces": 0,
          "commission": 0,
          "construction_year": 0,
          "datasource_name": "Home.co.uk",
          "img_height": 264,
          "img_url": "https://imgs.nestimg.com/flatapartment_109651586655824112.jpg",
          "img_width": 352,
          "keywords": "Conversion",
          "latitude": 50.823933,
          "lister_name": "Mishon Mackay",
          "lister_url": "https://www.nestoria.co.uk/detail/0000000109651586655824112/title/5/1-16?serpUid=&pt=1&ot=1&l=brighton&did=85_default&utm_source=api&utm_medium=external",
          "listing_type": "buy",
          "location_accuracy": 10,
          "longitude": -0.149689,
          "price": 475000,
          "price_currency": "£",
          "price_formatted": "£475,000",
          "price_high": 475000,
          "price_low": 475000,
          "property_type": "flat",
          "size": 0,
          "size_type": "net",
          "summary": "Guide price 475,000 500,000 two bedroom top floor apartment in the ...",
          "thumb_height": 60,
          "thumb_url": "https://imgs.nestimg.com/medium/flatapartment_109651586655824112.jpg",
          "thumb_width": 80,
          "title": "Stone Street, Brighton, East Sussex, BN1",
          "updated_in_days": 3,
          "updated_in_days_formatted": "first seen 3 days ago"
        },
        {
          "bathroom_number": 1,
          "bedroom_number": 3,
          "car_spaces": 0,
          "commission": 0,
          "construction_year": 0,
          "datasource_name": "Sourced",
          "img_height": 300,
          "img_url": "https://imgs.nestimg.com/westfield_crescent_brighton_east_sussex_east_sussex_brighton_bn1_8ja_109868771544131105.jpg",
          "img_width": 400,
          "keywords": "Garden, Garage, Kitchen, Modern",
          "latitude": 50.858208,
          "lister_url": "https://www.nestoria.co.uk/detail/0000000109868771544131105/title/5/1-17?serpUid=&pt=1&ot=1&l=brighton&did=328794_default&utm_source=api&utm_medium=external",
          "listing_type": "buy",
          "location_accuracy": 9,
          "longitude": -0.135814,
          "price": 375000,
          "price_currency": "£",
          "price_formatted": "£375,000",
          "price_high": 375000,
          "price_low": 375000,
          "property_type": "house",
          "room_number": 3,
          "size": 0,
          "size_type": "net",
          "summary": "Guide price £375,000 £400,000 set back from the road is this large ...",
          "thumb_height": 60,
          "thumb_url": "https://imgs.nestimg.com/medium/westfield_crescent_brighton_east_sussex_east_sussex_brighton_bn1_8ja_109868771544131105.jpg",
          "thumb_width": 80,
          "title": "Westfield Crescent Brighton - Modern",
          "updated_in_days": 6,
          "updated_in_days_formatted": "first seen 6 days ago"
        },
        {
          "bathroom_number": 1,
          "bedroom_number": 2,
          "car_spaces": 0,
          "commission": 0,
          "construction_year": 0,
          "datasource_name": "Sourced",
          "img_height": 42,
          "img_url": "https://imgs.nestimg.com/lowther_road_brighton_east_sussex_east_sussex_brighton_bn1_6lg_109868764089687070.jpg",
          "img_width": 57,
          "keywords": "Freehold, Terraced, Victorian, Double Bedroom, Kitchen, Modern",
          "latitude": 50.845688,
          "lister_url": "https://www.nestoria.co.uk/detail/0000000109868764089687070/title/5/1-18?serpUid=&pt=1&ot=1&l=brighton&did=328794_default&utm_source=api&utm_medium=external",
          "listing_type": "buy",
          "location_accuracy": 9,
          "longitude": -0.139225,
          "price": 294000,
          "price_currency": "£",
          "price_formatted": "£294,000",
          "price_high": 294000,
          "price_low": 294000,
          "property_type": "flat",
          "room_number": 2,
          "size": 0,
          "size_type": "net",
          "summary": "An recently improved 2 bedroom first floor flat forming part of thi...",
          "thumb_height": 42,
          "thumb_url": "https://imgs.nestimg.com/medium/lowther_road_brighton_east_sussex_east_sussex_brighton_bn1_6lg_109868764089687070.jpg",
          "thumb_width": 57,
          "title": "Lowther Road Brighton - Victorian",
          "updated_in_days": 6,
          "updated_in_days_formatted": "first seen 6 days ago"
        },
        {
          "bathroom_number": 2,
          "bedroom_number": 4,
          "car_spaces": 0,
          "commission": 0,
          "construction_year": 0,
          "datasource_name": "Sourced",
          "img_height": 42,
          "img_url": "https://imgs.nestimg.com/stanmer_park_road_brighton_east_sussex_east_sussex_brighton_bn1_7jl_109868771210615885.jpg",
          "img_width": 57,
          "keywords": "En suite, No Chain, Fireplace, Wood Floor, Kitchen, Reception, Edwardian",
          "latitude": 50.844757,
          "lister_url": "https://www.nestoria.co.uk/detail/0000000109868771210615885/title/5/1-19?serpUid=&pt=1&ot=1&l=brighton&did=328794_default&utm_source=api&utm_medium=external",
          "listing_type": "buy",
          "location_accuracy": 9,
          "longitude": -0.133211,
          "price": 575000,
          "price_currency": "£",
          "price_formatted": "£575,000",
          "price_high": 575000,
          "price_low": 575000,
          "property_type": "house",
          "room_number": 4,
          "size": 0,
          "size_type": "net",
          "summary": "A ly appointed 4 bedroom edwardian family home which has under gone...",
          "thumb_height": 42,
          "thumb_url": "https://imgs.nestimg.com/medium/stanmer_park_road_brighton_east_sussex_east_sussex_brighton_bn1_7jl_109868771210615885.jpg",
          "thumb_width": 57,
          "title": "Stanmer Park Road Brighton - En Suite",
          "updated_in_days": 6,
          "updated_in_days_formatted": "first seen 6 days ago"
        },
        {
          "bathroom_number": 1,
          "bedroom_number": 4,
          "car_spaces": 0,
          "commission": 0,
          "construction_year": 0,
          "datasource_name": "Sourced",
          "img_height": 300,
          "img_url": "https://imgs.nestimg.com/carden_hill_brighton_east_sussex_east_sussex_brighton_bn1_8aa_109868770636200430.jpg",
          "img_width": 400,
          "keywords": "Garden, Fireplace, Double Bedroom, Kitchen",
          "latitude": 50.85719,
          "lister_url": "https://www.nestoria.co.uk/detail/0000000109868770636200430/title/5/1-20?serpUid=&pt=1&ot=1&l=brighton&did=328794_default&utm_source=api&utm_medium=external",
          "listing_type": "buy",
          "location_accuracy": 9,
          "longitude": -0.132871,
          "price": 310000,
          "price_currency": "£",
          "price_formatted": "£310,000",
          "price_high": 310000,
          "price_low": 310000,
          "property_type": "house",
          "room_number": 4,
          "size": 0,
          "size_type": "net",
          "summary": "A unique four bedroom maisonette, situated on the first and second ...",
          "thumb_height": 60,
          "thumb_url": "https://imgs.nestimg.com/medium/carden_hill_brighton_east_sussex_east_sussex_brighton_bn1_8aa_109868770636200430.jpg",
          "thumb_width": 80,
          "title": "Carden Hill Brighton - Double Bedroom",
          "updated_in_days": 6,
          "updated_in_days_formatted": "first seen 6 days ago"
        }
      ],
      "locations": [
        {
          "center_lat": 50.854603,
          "center_long": -0.132899,
          "long_title": "Brighton",
          "place_name": "brighton",
          "title": "Brighton"
        }
      ],
      "page": 1,
      "sort": "nestoria_rank",
      "status_code": "200",
      "status_text": "OK",
      "thanks": "For using the Nestoria API.",
      "total_pages": 110,
      "total_results": 2187,
      "_cu5t0mP434m_": "remove"
    }
  }*/
