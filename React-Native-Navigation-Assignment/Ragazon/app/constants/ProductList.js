const Products = [
    {
        id: 1,
        title: 'Foldsack Laptop Backpack',
        price: 109,
        description:
            'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday backpack.',
        category: 'Mens',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rating: { rate: 3.9, count: 120 },
    },
    {
        id: 2,
        title: 'Mens T-Shirts ',
        price: 22,
        description:
            'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
        category: 'Mens',
        image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        rating: { rate: 4.1, count: 259 },
    },
    {
        id: 3,
        title: 'Mens Cotton Jacket',
        price: 55,
        description:
            'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
        category: 'Mens',
        image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        rating: { rate: 4.7, count: 500 },
    },
    {
        id: 4,
        title: 'Mens Casual Slim Fit',
        price: 15,
        description:
            'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
        category: 'Mens',
        image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
        rating: { rate: 2.1, count: 430 },
    },
    {
        id: 5,
        title: 'Dragon Station Chain Bracelet',
        price: 695,
        description:
            "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        category: 'Jewelry',
        image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
        rating: { rate: 4.6, count: 400 },
    },
    {
        id: 6,
        title: 'Solid Gold Petite Micropave ',
        price: 168,
        description:
            'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
        category: 'Jewelry',
        image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
        rating: { rate: 3.9, count: 70 },
    },
    {
        id: 7,
        title: 'White Gold Plated ring',
        price: 9,
        description:
            "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        category: 'Jewelry',
        image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
        rating: { rate: 3, count: 400 },
    },
    {
        id: 8,
        title: 'Pierced Owl  Double',
        price: 10,
        description:
            'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel.',
        category: 'Jewelry',
        image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
        rating: { rate: 1.9, count: 100 },
    },
    {
        id: 9,
        title: 'Hard Drive - USB 3.0 ',
        price: 64,
        description:
            'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system.',
        category: 'Electronics',
        image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
        rating: { rate: 3.3, count: 203 },
    },
    {
        id: 10,
        title: 'SanDisk SSD PLUS 1TB SSD',
        price: 109,
        description:
            'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application).',
        category: 'Electronics',
        image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
        rating: { rate: 2.9, count: 470 },
    },
    {
        id: 11,
        title: 'Silicon Power SATA III 2.5',
        price: 109,
        description:
            '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
        category: 'Electronics',
        image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
        rating: { rate: 4.8, count: 319 },
    },
    {
        id: 12,
        title: 'Playstation 4 External Hard Drive',
        price: 114,
        description:
            "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty.",
        category: 'Electronics',
        image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
        rating: { rate: 4.8, count: 400 },
    },
    {
        id: 13,
        title: 'Acer SB220Q TV',
        price: 599,
        description:
            '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz.',
        category: 'Electronics',
        image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
        rating: { rate: 2.9, count: 250 },
    },
    {
        id: 14,
        title: 'Samsung  Curved Gaming Monitor QLED',
        price: 999,
        description:
            '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag.',
        category: 'Electronics',
        image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
        rating: { rate: 2.2, count: 140 },
    },
    {
        id: 15,
        title: 'Snowboard Jacket Winter Coats',
        price: 56,
        description:
            'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates.',
        category: 'Women',
        image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
        rating: { rate: 2.6, count: 235 },
    },
    {
        id: 16,
        title: 'Leather Moto Biker Jacket',
        price: 29,
        description:
            '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON.',
        category: 'Women',
        image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
        rating: { rate: 2.9, count: 340 },
    },
    {
        id: 17,
        title: 'Rain Jacket',
        price: 39,
        description:
            "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        category: 'Women',
        image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
        rating: { rate: 3.8, count: 679 },
    },
    {
        id: 18,
        title: 'Short Sleeve Boat Neck V ',
        price: 9,
        description:
            '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom.',
        category: 'Women',
        image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
        rating: { rate: 4.7, count: 130 },
    },
    {
        id: 19,
        title: 'Short Sleeve Moisture',
        price: 7,
        description:
            '100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort.',
        category: 'Women',
        image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
        rating: { rate: 4.5, count: 146 },
    },
    {
        id: 20,
        title: 'Casual Cotton T-Shirt',
        price: 12,
        description:
            '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
        category: 'Women',
        image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
        rating: { rate: 3.6, count: 145 },
    },

    {
        id: 21,
        title: 'VMBS Fast-Fast Active 2 Watch',
        price: 50,
        description:
            "Choose your look and your comfort for a wellness partner you’ll want to keep on 24/7. Watch Active2 comes customized from day one, starting with your choice of Bluetooth or LTE model, 44mm or 40mm, stainless steel or lightweight aluminum design, and straps galore.Maximize your screen space with an uninterrupted view on a sleek body fitted with a touch bezel for quick control Watch Active2 features an enlarged display with a pure black screen and a border that's hardly there for more space to get the insight you need.",

        category: 'Mens',
        image: 'https://m.media-amazon.com/images/I/51DQu1QoqcL._AC_UL400_.jpg',
        rating: { rate: 4.1, count: 150 },
    },

    {
        id: 22,
        title: 'Fire-Boltt Phoenix Smart Watch with Bluetooth Calling',
        price: 60,
        description: `Fire-Boltt is India' No 1 Wearable Watch Brand Q122 by IDC Worldwide quarterly wearable device tracker Q122.【Bluetooth Calling Watch】- Fire-Boltt Phoenix enables you to make and receive calls directly from your watch via the built-in speaker and microphone. This smartwatch features a dial pad, option to access recent calls & sync your phone’s contacts.;【High Resolution Display】- Comes with a 1.3" TFT Color Full Touch Screen and a 240*240 Pixel High Resolution this watch is covered to flaunt the sleek and stylish look always.`,

        category: 'Mens',
        image: 'https://m.media-amazon.com/images/I/61xXm6kS-hL._AC_UL400_.jpg',
        rating: { rate: 4.5, count: 150 },
    },

    {
        id: 23,
        title: 'Shining Diva Fashion 18k Gold Plated Pearl Necklace Set',
        price: 30,
        description: `Beauty This pearl necklace jewellery set will complement any traditional or modern attire. The color complements all outfits and may be worn as a statement piece to any occasion. Once you wear this jewellery set you will look no less than a diva. Ideal necklace jewellery set for party and festive wear.`,

        category: 'Jewelry',
        image: 'https://m.media-amazon.com/images/I/61v86MOmYRL._AC_UL400_.jpg',
        rating: { rate: 3.5, count: 150 },
    },

    {
        id: 24,
        title: 'GIVA 925 Sterling Silver Falling Dew Necklace with Box Chain',
        price: 90,
        description: `The dewy pendant holds a AAA+ quality zircon on top of a Stamped 925 sterling silver. It is rhodium e-coated to prevent tarnish. Includes 38cm + 5cm Adjustable Sterling Silver Chain, AAA+ Quality Zircons, Rhodium e-coat to prevent tarnish.`,

        category: 'Jewelry',
        image: 'https://m.media-amazon.com/images/I/61G3XnVaI3L._AC_UL400_.jpg',
        rating: { rate: 4.5, count: 150 },
    },
];

export default Products;
