

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
  

  
export default HotelRoom;

  