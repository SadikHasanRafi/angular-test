  import { Component, OnInit } from '@angular/core';
// import HotelRoom from './rooms';


interface HotelRoom {
  roomNumber: string;
  floor: number;
  type: string;
  capacity: number;
  hasBalcony: boolean;
  pricePerNight: number;
  amenities: string[];
  availableDates: { startDate: string; endDate: string }[];
}

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})


export class RoomsComponent {

  
  hotelRooms: HotelRoom[] = [  {
    roomNumber: "D401",
    floor: 4,
    type: "Standard",
    capacity: 2,
    hasBalcony: false,
    pricePerNight: 80,
    amenities: ["Wi-Fi", "TV", "Air Conditioning"],
    availableDates: [
      {
        startDate: "2023-06-01",
        endDate: "2023-06-05",
      },
      {
        startDate: "2023-06-10",
        endDate: "2023-06-15",
      },
    ],
  },
  {
    roomNumber: "E202",
    floor: 2,
    type: "Suite",
    capacity: 3,
    hasBalcony: true,
    pricePerNight: 200,
    amenities: ["Wi-Fi", "TV", "Mini Bar", "Air Conditioning", "Jacuzzi"],
    availableDates: [
      {
        startDate: "2023-06-05",
        endDate: "2023-06-10",
      },
      {
        startDate: "2023-06-20",
        endDate: "2023-06-25",
      },
    ],
  },
  {
    roomNumber: "F601",
    floor: 6,
    type: "Deluxe",
    capacity: 4,
    hasBalcony: true,
    pricePerNight: 180,
    amenities: ["Wi-Fi", "TV", "Mini Bar", "Air Conditioning"],
    availableDates: [
      {
        startDate: "2023-06-15",
        endDate: "2023-06-20",
      },
      {
        startDate: "2023-06-25",
        endDate: "2023-06-30",
      },
    ],
  },
  // Add more room objects here...

    {
      roomNumber: "A101",
      floor: 1,
      type: "Deluxe",
      capacity: 2,
      hasBalcony: true,
      pricePerNight: 150,
      amenities: ["Wi-Fi", "TV", "Mini Bar", "Air Conditioning"],
      availableDates: [
        {
          startDate: "2023-06-01",
          endDate: "2023-06-05",
        },
        {
          startDate: "2023-06-15",
          endDate: "2023-06-20",
        },
      ],
    },
    {
      roomNumber: "B205",
      floor: 2,
      type: "Standard",
      capacity: 3,
      hasBalcony: false,
      pricePerNight: 100,
      amenities: ["Wi-Fi", "TV", "Air Conditioning"],
      availableDates: [
        {
          startDate: "2023-06-10",
          endDate: "2023-06-14",
        },
        {
          startDate: "2023-06-25",
          endDate: "2023-06-30",
        },
      ],
    },
    {
      roomNumber: "C310",
      floor: 3,
      type: "Suite",
      capacity: 4,
      hasBalcony: true,
      pricePerNight: 250,
      amenities: ["Wi-Fi", "TV", "Mini Bar", "Air Conditioning", "Jacuzzi"],
      availableDates: [
        {
          startDate: "2023-06-08",
          endDate: "2023-06-12",
        },
        {
          startDate: "2023-06-20",
          endDate: "2023-06-25",
        },
      ],
    },
  ];

  reservedRooms:HotelRoom []=[]
  click:boolean=true;
  isReserveButtonEnable:boolean=false
  isCancelReserveButtonEnable:boolean=false
  reserveButtonClicked:number = this.hotelRooms.length
  cancelButtonClicked:number = 0
  handleClickReserveRoom():void{
    if (this.reserveButtonClicked<=6 && this.reserveButtonClicked >= 1) {
      let mew:any  = this.hotelRooms.pop()
      this.click=false;
      this.reserveButtonClicked--;
      this.cancelButtonClicked++;
      this.reservedRooms.push(mew as HotelRoom)
      console.log("handle click clicked")
      mew = null
      // this.isCancelReserveButtonEnable=true
    }else{
      this.reserveButtonClicked=0;
      // this.isReserveButtonEnable = false
    }
  }

  handleClickCancelReserveRoom():void{
    if (this.cancelButtonClicked<=6 && this.cancelButtonClicked >= 1) {
      this.reserveButtonClicked++;
      this.cancelButtonClicked--;
      // this.isCancelReserveButtonEnable = true
      // this.isReserveButtonEnable = true
      console.warn("cancel button clicked")
      let mew : any = this.reservedRooms.shift();
      this.hotelRooms.push(mew as HotelRoom)
      console.log(mew)
      mew = null
    }
    else{
      this.cancelButtonClicked=0; 
      // this.isCancelReserveButtonEnable = false
    }  
  }


}
