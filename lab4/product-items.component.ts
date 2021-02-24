import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  products: any[];

  constructor() {
    this.products = [
      {
        link: 'https://www.amazon.com/Lenovo-Android-Octa-Core-Processor-ZA5T0300US/dp/B083JXPDL5/ref=sr_1_3?dchild=1&keywords=tablets&qid=1614141841&s=pc&sr=1-3',
        img: 'https://images-na.ssl-images-amazon.com/images/I/71sfODG%2Bc%2BL._AC_SL1500_.jpg',
        p_name: 'Lenovo Tab M10 Plus',
        description: 'Screen Size: 10.3 inches \n' + 'Brand: Lenovo' +
          'Series: ZA5T0300US\n' +
          'Memory Storage Capacity: 64 GB\n' +
          'Item Dimensions LxWxH: 9.6 x 6.04 x 0.33 inches\n',
        rating: 4.5
      },
      {
        link: 'https://www.amazon.com/Samsung-Galaxy-256GB-Tablet-Cloud/dp/B07VFFC4FS/ref=sr_1_17?dchild=1&keywords=tablets&qid=1614141841&s=pc&sr=1-17',
        img: 'https://www.worldshop.eu/medias/sys_master/genmedia_PIC1760443_RL_01_w1500_h1500_c217224230255.jpg?1606897104927',
        p_name: 'Samsung Galaxy Tab S6',
        description: 'Screen Size: 10.5 inches\n' +
          'Brand: Samsung Electronics\n' +
          'Series: Samsung Galaxy Tab S6 10.5"\n' +
          'Memory Storage Capacity: 256 GB\n' +
          'Item Dimensions LxWxH: 0.22 x 6.28 x 9.63 inches',
        rating: 4.7
      },
      {
        link: 'https://www.amazon.com/Samsung-5100mAh-Battery-SM-T290-International/dp/B07XQC3NLR/ref=sr_1_4?dchild=1&keywords=tablets&qid=1614141841&s=pc&sr=1-4',
        img: 'https://images-na.ssl-images-amazon.com/images/I/511H32UuN6L._AC_SL1000_.jpg',
        p_name: 'Samsung Galaxy Tab A',
        description: 'Screen Size: 8 inches\n' +
          'Brand: SAMSUNG\n' +
          'Series: Samsung Galaxy Tab A 8.0" (2019, WiFi Only) 32GB, 5100mAh Battery, Dual Spe\n' +
          'Memory Storage Capacity: 32 GB\n' +
          'Item Dimensions LxWxH: 8.3 x 0.3 x 4.9 inches',
        rating: 4.6
      },
      {
        link: 'https://www.amazon.com/BOOX-Max-Lumi-Fingerprint-Recognition/dp/B08F9LN79L/ref=sr_1_4?dchild=1&qid=1614141752&rnid=541966&s=electronics&sr=1-4',
        img: 'https://images-na.ssl-images-amazon.com/images/I/7132lEFslAL._AC_SL1500_.jpg',
        p_name: 'BOOX Max Lumi 13.3',
        description: 'Screen Size: 13.3 inches\n' +
          'Brand: BOOX\n' +
          'Series: Max Lumi\n' +
          'Memory Storage Capacity: 64 GB\n' +
          'Color: Black',
        rating: 4.3
      },
      {
        link: 'https://www.amazon.com/Samsung-Galaxy-Wi-Fi-Mystic-Black/dp/B08FBPRY3N/ref=sr_1_11?dchild=1&keywords=tablets&qid=1614141841&s=pc&sr=1-11',
        img: 'https://www.worldshop.eu/medias/sys_master/haa/he1/8912878108702.png',
        p_name: 'Samsung Galaxy Tab S7',
        description: 'Screen Size: 12.4 inches\n' +
          'Brand: Samsung Electronics\n' +
          'Series: Tab S7+\n' +
          'Memory Storage Capacity: 128 GB\n' +
          'Item Dimensions LxWxH: 0.22 x 7.28 x 11.22 inches',
        rating: 4.8
      },
      {
        link: 'https://www.amazon.com/Apple-iPad-12-9-inch-Wi-Fi-128GB/dp/B0863D15R6/ref=sr_1_18?dchild=1&keywords=tablets&qid=1614141841&s=pc&sr=1-18',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg',
        p_name: 'Apple iPad Pro',
        description: 'Screen Size: 12.9 inches\n' +
          'Brand: Apple\n' +
          'Model Name: IPad Pro 12.9-inch (4th generation)\n' +
          'Memory Storage Capacity: 128 GB\n' +
          'Item Dimensions LxWxH: 11.54 x 8.9 x 1.97 inches',
        rating: 4.9
      },
      {
        link: 'https://www.amazon.com/Samsung-Galaxy-Active-Water-Resistant-Rugged/dp/B07YNJD8J3/ref=sr_1_30?dchild=1&keywords=tablets&qid=1614141841&s=pc&sr=1-30',
        img: 'https://images-na.ssl-images-amazon.com/images/I/71XFm0upzQL._AC_SL1500_.jpg',
        p_name: 'Samsung Galaxy Tab Active PRO',
        description: 'Screen Size: 10.1 inches\n' +
          'Brand: SAMSUNG\n' +
          'Series: Galaxy Tab Active Pro\n' +
          'Memory Storage Capacity: 64 GB\n' +
          'Item Dimensions LxWxH: 6.69 x 0.39 x 9.58 inches',
        rating: 4.6
      },
      {
        link: 'https://www.amazon.com/Microsoft-Surface-Touchscreen-Windows-Platinum/dp/B08C7S2VV9/ref=sr_1_50?dchild=1&keywords=tablets&qid=1614141841&s=pc&sr=1-50',
        img: 'https://images-na.ssl-images-amazon.com/images/I/61UAUtDxHrL._AC_SL1500_.jpg',
        p_name: 'Microsoft Surface Pro 7',
        description: 'Screen Size: 12.3 inches\n' +
          'Brand: Microsoft\n' +
          'Series: Surface Pro 7\n' +
          'Item Dimensions LxWxH: 12 x 8 x 0.3 inches\n' +
          'Color: WIth Surface pen & sleeve',
        rating: 4.7
      },
      {
        link: 'https://www.amazon.com/Samsung-Galaxy-SM-T515-Factory-Unlocked/dp/B07NR41ZZL/ref=sr_1_52?dchild=1&keywords=tablets&qid=1614141876&s=pc&sr=1-52',
        img: 'https://images-na.ssl-images-amazon.com/images/I/71m87%2BNnU7L._AC_SL1500_.jpg',
        p_name: 'Samsung Galaxy Tab A',
        description: 'Screen Size: 10.1 inches\n' +
          'Brand: SAMSUNG\n' +
          'Series: Galaxy Tab A\n' +
          'Memory Storage Capacity: 32 GB\n' +
          'Item Dimensions LxWxH: 5.88 x 0.3 x 9.65 inches',
        rating: 4.6
      },
      {
        link: 'https://www.amazon.com/Apple-iPad-mini-Wi-Fi-64GB/dp/B07PQ8VVG4/ref=sr_1_52?dchild=1&keywords=tablets&qid=1614141876&s=pc&sr=1-52',
        img: 'https://images-na.ssl-images-amazon.com/images/I/714Usywrd0L._AC_SL1500_.jpg',
        p_name: 'Apple iPad mini',
        description: 'Screen Size: 7.9 inches\n' +
          'Brand: Apple\n' +
          'Model Name: 7.9-inch iPad mini Wi-Fi 64GB - Gold\n' +
          'Memory Storage Capacity: 64 GB\n' +
          'Item Dimensions LxWxH: 8.5 x 5.71 x 1.89 inches',
        rating: 4.8
      }
    ];
  }

  share(link: string): void {
    window.open('https://wa.me?text=' + link, '_blank');
  }
}
