export interface InPostPoint {
  href: string;
  name: string;
  type: string[];
  status: string;
  location: {
    longitude: number;
    latitude: number;
  };
  location_type: any;
  location_date: any;
  location_description: any;
  location_description_1: any;
  location_description_2: any;
  distance: number;
  opening_hours: string;
  address: {
    line1: string;
    line2: string;
  };
  address_details: {
    city: string;
    province: string;
    post_code: string;
    street: string;
    building_number: string;
    flat_number: any;
  };
  phone_number: any;
  payment_point_descr: any;
  functions: string[];
  partner_id: number;
  is_next: boolean;
  payment_available: boolean;
  payment_type: Record<any, any>;
  virtual: any;
  recommended_low_interest_box_machines_list: any;
  apm_doubled: any;
  location_247: boolean;
  operating_hours_extended: Record<any, any>;
  agency: string;
  image_url: string;
  easy_access_zone: boolean;
  air_index_level: any;
  physical_type: any;
  physical_type_mapped: any;
  physical_type_description: any;
  in_mobile_collect_excluded: any;
  in_mobile_send_excluded: any;
  in_mobile_return_excluded: any;
  express_delivery_send: boolean;
  express_delivery_collect: boolean;
  delivery_area_id: any;
  micro_area_id: any;
  last_updated_date: {
    seconds: number;
    nanos: number;
  };
}
