import { Component, Input, OnInit } from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() category: string | undefined;
  electronics: Product[];
  beautyProducts: Product[];
  fashionProducts: Product[];
  sportProducts: Product[];
  videoGames: Product[];

  constructor() {
    this.electronics = [
      new Product('Apple AirPods', 'https://images-na.ssl-images-amazon.com/images/I/71NTi82uBEL._AC_SL1500_.jpg',  'https://www.amazon.com/Apple-AirPods-Charging-Latest-Model/dp/B07PXGQC1Q/ref=sr_1_1?dchild=1&fst=as%3Aoff&pf_rd_i=16225009011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=ce987da1-b370-4b55-a7c2-b79bf2e3ba39&pf_rd_r=RRX4H2ZWRMP8ZDVGQN5K&pf_rd_s=merchandised-search-6&pf_rd_t=101&qid=1614750022&refinements=p_n_shipping_option-bin%3A3242350011%2Cp_72%3A1248880011&rnid=1248877011&s=electronics&sr=1-1', '\n' +
        'Color\tWhite\n' +
        'Material\tPlastic\n' +
        'Item Dimensions LxWxH\t0.65 x 0.71 x 1.59 inches\n' +
        'Brand\tApple\n' +
        'Item Weight\t3.5 Ounces'),
      new Product('Anker Wireless Charger', 'https://images-na.ssl-images-amazon.com/images/I/6114qzNg-3L._AC_SL1500_.jpg', 'https://www.amazon.com/Anker-Wireless-PowerWave-Upgraded-Fast-Charging/dp/B07THHQMHM/ref=sr_1_21?dchild=1&field-shipping_option-bin=3242350011&pf_rd_i=16225009011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=85a9188d-dbd5-424e-9512-339a1227d37c&pf_rd_r=KC8BD9F1MYF88PD92SR6&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1614750071&s=electronics&sr=1-21', '\n' +
        'Compatible Devices\tSamsung Galaxy Note 9, Galaxy Note 8, Samsung Galaxy S10, Galaxy S9, IPhone X, iPhone Xs, iPhone Xr, iPhone Xs Max, IPhone 8, iPhone 8 PlusSamsung Galaxy Note 9, Galaxy Note 8, Samsung Galaxy S10, Galaxy S9, IPhone X, iPhone Xs, iPhone Xr, iPhone Xs Max, IPhone 8, iPhone 8 Plus See more\n' +
        'Brand\tAnker\n' +
        'Color\tBlack\n' +
        'Power Source\tCorded Electric\n' +
        'Item Weight\t0.15 Pounds'),
      new Product('Acer Chromebook Spin 311', 'https://images-na.ssl-images-amazon.com/images/I/71c5W9NxN5L._AC_SL1500_.jpg', 'https://www.amazon.com/Acer-Chromebook-Convertible-Bluetooth-CP311-2H-C679/dp/B086MBQKH2/ref=sr_1_13?dchild=1&fst=as%3Aoff&pf_rd_i=16225009011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=82d03e2f-30e3-48bf-a811-d3d2a6628949&pf_rd_r=RRX4H2ZWRMP8ZDVGQN5K&pf_rd_s=merchandised-search-4&pf_rd_t=101&qid=1614751299&refinements=p_n_shipping_option-bin%3A3242350011&rnid=541966&s=pc&sr=1-13', 'Brand\tAcer\n' +
        'Operating System\tChrome OS\n' +
        'CPU Manufacturer\tIntel\n' +
        'Screen Size\t11.6 Inches\n' +
        'Computer Memory Size\t4 GB'),
      new Product('Cambridge Soundworks OontZ Angle 3', 'https://images-na.ssl-images-amazon.com/images/I/71evtyMeLiL._AC_SL1500_.jpg', 'https://www.amazon.com/Enhanced-Splashproof-Portable-Bluetooth-Radiator/dp/B010OYASRG/ref=sr_1_7?dchild=1&field-shipping_option-bin=3242350011&pf_rd_i=16225009011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=85a9188d-dbd5-424e-9512-339a1227d37c&pf_rd_r=KC8BD9F1MYF88PD92SR6&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1614751382&s=aht&sr=1-7', 'Brand\tCambridge Soundworks\n' +
        'Color\tBlack\n' +
        'Speaker Type\tOutdoor\n' +
        'Model Name\tOontZ Angle 3 Bluetooth Portable Speaker (Black)\n' +
        'Battery Life\t1 days'),
      new Product('Apple Watch Series 3', 'https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_SL1500_.jpg', 'https://www.amazon.com/Apple-Watch-GPS-38mm-Space-Aluminium/dp/B07K39FRSL/ref=sr_1_5?dchild=1&fst=as%3Aoff&pf_rd_i=16225009011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=82d03e2f-30e3-48bf-a811-d3d2a6628949&pf_rd_r=RRX4H2ZWRMP8ZDVGQN5K&pf_rd_s=merchandised-search-4&pf_rd_t=101&qid=1614751395&refinements=p_n_shipping_option-bin%3A3242350011&rnid=493964&s=electronics&sr=1-5', 'Supported Application\tFitness Tracker, Sleep Monitor, GPS, Pedometer, Heart Rate Monitor\n' +
        'Brand\tApple\n' +
        'Wireless Communication Standard\tBluetooth, 802.11a/b/g/n\n' +
        'Color\tSpace Gray Aluminum with Black Sport Band\n' +
        'Connectivity Technology\tBluetooth, Wi-Fi, GPS\n' +
        'Operating System\tWatchOS')
    ];
    this.beautyProducts = [
      new Product('Dr. Jart Ceramidin Cream', 'https://images-na.ssl-images-amazon.com/images/I/61OFisVULCL._SL1500_.jpg', 'https://www.amazon.com/Dr-Jart-Ceramidin-Cream-Ounce/dp/B015RYQBIS/ref=sr_1_2?dchild=1&keywords=dr+jart&qid=1614751558&s=beauty&sr=1-2', 'Ingredients\tAloe vera\n' +
        'Item Form\tCream\n' +
        'Brand\tDr. Jart\n' +
        'Skin Type\tDry'),
      new Product('Dr.Jart+ Vital Hydra Solution Deep Hydration Mask Sheet', 'https://images-na.ssl-images-amazon.com/images/I/51SN-xEoHgL._SL1200_.jpg', 'https://www.amazon.com/Dr-Jart-Vital-Solution-Hydration-0-9oz/dp/B01MRFKMGQ/ref=sr_1_4?dchild=1&keywords=dr+jart&qid=1614751558&s=beauty&sr=1-4', 'Brand\tDr. Jart\n' +
        'Ingredients\tHyaluronic-acid\n' +
        'Skin Type\tDry\n' +
        'Scent\tUnscented\n' +
        'Item Form\tSheet'),
      new Product('Dr.Jart+ Dermaclear Micro Foam', 'https://images-na.ssl-images-amazon.com/images/I/51v-dr9HggL._SL1200_.jpg', 'https://www.amazon.com/Dr-Jart-Dermaclear-Micro-Foam-120ml/dp/B07FB616XL/ref=sxin_9_ac_d_rm?ac_md=4-3-ZHIgamFydCBkZXJtYWNsZWFy-ac_d_rm&cv_ct_cx=dr+jart&dchild=1&keywords=dr+jart&pd_rd_i=B07FB616XL&pd_rd_r=811499bc-f789-481a-8d69-332854c1ae3c&pd_rd_w=ZIHaG&pd_rd_wg=ypzwO&pf_rd_p=5ceb2a76-ceaa-45a9-982b-6fa61a20d67b&pf_rd_r=2FQRA0ZGQVWZ8JW9Q61E&psc=1&qid=1614751558&s=beauty&sr=1-4-12d4272d-8adb-4121-8624-135149aa9081', 'Ingredients\tWater, Myristic Acid, Sorbitol\n' +
        'Scent\tCoconut\n' +
        'Brand\tDr. Jart\n' +
        'Skin Type\tSensitive'),
      new Product('Dr. Jart+ Shake & Shot Rubber Hydro Mask', 'https://images-na.ssl-images-amazon.com/images/I/61DU7S1W15L._SL1500_.jpg', 'https://www.amazon.com/Dr-Jart-Dermask-Shaking-Modeling/dp/B074L537Q2/ref=sr_1_16?dchild=1&keywords=dr+jart&qid=1614751558&s=beauty&sr=1-16', 'A set of fun, DIY rubbery modeling masks that infuse skin with potent actives to smooth for a healthy, dewy-looking complexion\n' +
        'Moisturizes and revitalizes the complexion.\n' +
        'The Hydro mask ampoule contains a Cocktail of Vitamin B5\n' +
        'The package dimension of the product is 5.6"L x 4"W x 3.1"H'),
      new Product('Dr. Jart+ Cicapair Serum', 'https://images-na.ssl-images-amazon.com/images/I/61E%2BfnqlOyL._SL1500_.jpg', 'https://www.amazon.com/Dr-Jart-Cicapair-Serum-1-69/dp/B07SYY6QDH/ref=sr_1_29?dchild=1&keywords=dr+jart&qid=1614751558&s=beauty&sr=1-29', 'A highly-concentrated serum that treats sensitive skin\n' +
        'Blend of strengthening jartbiome, soothing Centella Rx, and reparative cicabond.\n' +
        'Lightweight serum\n' +
        'The package dimension of the product is 4.8"L x 2.4"W x 2"H')
    ];
    this.fashionProducts = [
      new Product('Cubic Zirconia Bracelet', 'https://images-na.ssl-images-amazon.com/images/I/71EzWiNHl8L._AC_UL1500_.jpg', 'https://www.amazon.com/Pandora-Women-Silver-Charm-Bracelet/dp/B07BGQZJLZ/ref=sr_1_3?dchild=1&qid=1614752101&rnid=7192394011&s=fashion-womens-intl-ship&sr=1-3', 'Genuine Pandora\n' +
        'sterling silver\n' +
        '.925'),
      new Product('Gold Hoop Earrings', 'https://images-na.ssl-images-amazon.com/images/I/51kL9JyNtNL._AC_UX385_.jpg', 'https://www.amazon.com/PAVOI-Yellow-Colored-Lightweight-Earrings/dp/B07ML324GG/ref=sr_1_1?dchild=1&qid=1614752015&rnid=7192394011&s=fashion-womens-intl-ship&sr=1-1', 'PAVOI 4.5mm Thick 30mm / 1.2 Inch Diameter Yellow Gold Colored Small Hoop Earrings'),
      new Product('Diamond Stackable Ring Eternity Bands', 'https://images-na.ssl-images-amazon.com/images/I/51Okwv1XgWL._AC_UY695_.jpg', 'https://www.amazon.com/PAVOI-Sterling-Zirconia-Stackable-Eternity/dp/B01MPZOUKH/ref=sr_1_5?dchild=1&qid=1614752043&rnid=7192394011&s=fashion-womens-intl-ship&sr=1-5', 'Finest AAAAA Quality Gem Grade Cubic Zirconia Stacking Ring - 1.25mm CZ / Width'),
      new Product('Paperclip Chain Choker', 'https://images-na.ssl-images-amazon.com/images/I/71kYs3x89nL.jpg', 'https://www.amazon.com/Adjustable-Layering-Necklace-Minimalist-Jewelry/dp/B07Y2XFTDD/ref=sr_1_7?dchild=1&qid=1614752070&rnid=7192394011&s=fashion-womens-intl-ship&sr=1-7', 'Minimalist box chain choker necklace made of 18k gold plated'),
      new Product('Mevecco Layered Heart Necklace', 'https://www.ubuy.et/productimg/?image=aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzcxVHhVUWd3SDVMLl9TUzQwMF8uanBn.jpg', 'https://www.amazon.com/Layered-Necklace-Circle-Dainty-Elegant/dp/B07V34CN5N/ref=sr_1_23?dchild=1&pf_rd_i=16225018011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=0909843d-7d3a-40a7-8b35-6c3da8755bbd&pf_rd_r=TVWPXWYE45CV50RTZ48H&pf_rd_s=merchandised-search-left-2&pf_rd_t=101&qid=1614752712&s=fashion-womens-intl-ship&sr=1-23', 'Length of the first layer:15" ,second layer length:17", 2 inches extender. Disc Size(0.6 inch)')
    ];
    this.sportProducts = [
      new Product('Fitbit Charge 4 Fitness and Activity Tracker', 'https://images-na.ssl-images-amazon.com/images/I/71smqRr0pmL._AC_SL1500_.jpg', 'https://www.amazon.com/Fitbit-Fitness-Activity-Tracking-Included/dp/B084CQ41M2/ref=sr_1_5?dchild=1&qid=1614752809&s=sporting-goods&sr=1-5', 'Use built-in GPS to see your pace and distance on screen during outdoor runs, rides, hikes and more and see a workout intensity map in the app that shows your heart rate changes along your route'),
      new Product('Pull up Assist Band', 'https://images-na.ssl-images-amazon.com/images/I/71ijILT4eUL._AC_SL1500_.jpg', 'https://www.amazon.com/INTEY-Exercise-Resistance-Workout-Powerlifting/dp/B07226JDDD/ref=sr_1_10?dchild=1&qid=1614752809&s=sporting-goods&sr=1-10', 'Max safe length and Max weight limits of Each Single Band: Red(2.6m, 35 lbs/15kg), Black(2.6m, 65lbs/29.48kg), Purple(3.1m, 85lbs/38.55kg), Green(3.1m, 125lbs/56.69kg)'),
      new Product('Spalding NBA Street Outdoor Basketball', 'https://images-na.ssl-images-amazon.com/images/I/91PlxEj64%2BL._AC_SL1500_.jpg', 'https://www.amazon.com/Spalding-NBA-Street-Basketball-Official/dp/B0009VELG4/ref=sr_1_15?dchild=1&qid=1614752809&s=sporting-goods&sr=1-15', 'Performance: Durable outdoor rubber cover\n' +
        'Superior control: Deep channel design for easy handles\n' +
        'Official size: Size 7, 29.5”\n' +
        'Inflation: Shipped inflated and we recommend 8 PSI'),
      new Product('ProsourceFit Trainer', 'https://images-na.ssl-images-amazon.com/images/I/71lEJ%2BfgvVL._AC_SL1500_.jpg', 'https://www.amazon.com/Prosource-Multi-Grip-Chin-Up-Pull-Up-Doorway/dp/B002YQUP7Q/ref=sr_1_20?dchild=1&qid=1614752809&s=sporting-goods&sr=1-20', 'MULTIFUNCTIONAL – 12 comfortable grips & various handles allow you to perform wide, hammer, close-grip exercises'),
      new Product('Fitbit Inspire 2 Health & Fitness Tracker', 'https://images-na.ssl-images-amazon.com/images/I/71wPLzgLNYL._AC_SL1500_.jpg', 'https://www.amazon.com/Fitbit-Inspire-Fitness-Tracker-Included/dp/B08DFGPTSK/ref=sr_1_16?dchild=1&qid=1614752809&s=sporting-goods&sr=1-16', 'Earn Active Zone Minutes as you progress toward your weekly 150 minutes of heart-pumping activity and use 20+ exercise modes to track goals like distance, calories burned and more')
    ];
    this.videoGames = [
      new Product('Marvel\'s Spider-Man: Miles Morales Launch Edition', 'https://images-na.ssl-images-amazon.com/images/I/71dtn2ZMs7L._SL1361_.jpg', 'https://www.amazon.com/Marvels-Spider-Man-Miles-Morales-Launch-PlayStation/dp/B08JHVG9ZJ/ref=sr_1_3?dchild=1&fst=as%3Aoff&pf_rd_i=16225016011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=03b28c2c-71e9-4947-aa06-f8b5dc8bf880&pf_rd_r=EZE2VMGT8XDJT4BXG36H&pf_rd_s=merchandised-search-3&pf_rd_t=101&qid=1614753069&refinements=p_89%3APlaystation&rnid=2528832011&s=videogames-intl-ship&sr=1-3', 'Miles morales discovers explosive powers that set him apart from his mentor, peter parker. Master his unique, bio-electric venom Blast attacks and covert camouflage power alongside spectacular web-slinging acrobatics, gadgets and skills'),
      new Product('Minecraft Starter Collection', 'https://images-na.ssl-images-amazon.com/images/I/71AKO%2BU6F6L._SL1000_.jpg', 'https://www.amazon.com/Minecraft-Starter-Collection-PlayStation-4/dp/B0815VFZRL/ref=sr_1_6?dchild=1&fst=as%3Aoff&pf_rd_i=16225016011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=03b28c2c-71e9-4947-aa06-f8b5dc8bf880&pf_rd_r=EZE2VMGT8XDJT4BXG36H&pf_rd_s=merchandised-search-3&pf_rd_t=101&qid=1614753069&refinements=p_89%3APlaystation&rnid=2528832011&s=videogames-intl-ship&sr=1-6', 'Play and share with friends on console, mobile and Windows 10\n' +
        'Discover community creations in the new in-game store, Access new mini games and game modes through Servers, Share the couch with four player split screen\n' +
        'Starter Pack Contents - Includes 700 Tokens, LittleBigPlanet Mash-Up, Greek Mythology Mash-Up, Skin Pack 1, City Texture Pack'),
      new Product('Ghost of Tsushima', 'https://images-na.ssl-images-amazon.com/images/I/81Bzm37TIaL._SL1500_.jpg', 'https://www.amazon.com/Ghost-Tsushima-PlayStation-4/dp/B08BSKT43L/ref=sr_1_8?dchild=1&fst=as%3Aoff&pf_rd_i=16225016011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=03b28c2c-71e9-4947-aa06-f8b5dc8bf880&pf_rd_r=EZE2VMGT8XDJT4BXG36H&pf_rd_s=merchandised-search-3&pf_rd_t=101&qid=1614753069&refinements=p_89%3APlaystation&rnid=2528832011&s=videogames-intl-ship&sr=1-8', 'Available Now - Ghost of Tsushima: Legends, a new cooperative multiplayer experience inspired by Japanese folk tales and mythology.\n' +
        'Beyond war, ancient beauty endures: Uncover the hidden wonders of Tsushima in this open-world action adventure.\n' +
        'The rise of the Ghost: Forge a new path and wage an unconventional war for the freedom of Tsushima.'),
      new Product('Horizon Zero Dawn Complete Edition Hits', 'https://images-na.ssl-images-amazon.com/images/I/81ED9VvfBwL._SL1500_.jpg', 'https://www.amazon.com/Horizon-Zero-Dawn-Complete-Hits-PlayStation/dp/B07STWQ38X/ref=sr_1_11?dchild=1&fst=as%3Aoff&pf_rd_i=16225016011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=03b28c2c-71e9-4947-aa06-f8b5dc8bf880&pf_rd_r=EZE2VMGT8XDJT4BXG36H&pf_rd_s=merchandised-search-3&pf_rd_t=101&qid=1614753069&refinements=p_89%3APlaystation&rnid=2528832011&s=videogames-intl-ship&sr=1-11', 'A Lush Post Apocalyptic World How have machines dominated this world, and what is their purpose? What happened to the civilization here before?\n' +
        'Nature and Machines Collide Horizon Zero Dawn juxtaposes two contrasting elements, taking a vibrant world rich with beautiful nature and filling it with awe inspiring highly advanced technology'),
      new Product('Sackboy: A Big Adventure', 'https://images-na.ssl-images-amazon.com/images/I/81W13YKKR1L._SL1353_.jpg', 'https://www.amazon.com/Sackboy-Big-Adventure-PlayStation-5/dp/B08FC64CNF/ref=sr_1_14?dchild=1&fst=as%3Aoff&pf_rd_i=16225016011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=03b28c2c-71e9-4947-aa06-f8b5dc8bf880&pf_rd_r=EZE2VMGT8XDJT4BXG36H&pf_rd_s=merchandised-search-3&pf_rd_t=101&qid=1614753069&refinements=p_89%3APlaystation&rnid=2528832011&s=videogames-intl-ship&sr=1-14', 'Face thrilling, unpredictable challenges as you explore distinctive hand-crafted lands through deeply immersive and expressive controls')
    ];
  }

  ngOnInit(): void {
  }
}
