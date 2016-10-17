const data = {
  apparel:         
  [ 
  //HipStore-Outwear
  {name:'Oversized Demin Jacket', image:['http://ak2.polyvoreimg.com/cgi/img-thing/size/l/tid/144240771.jpg'],price:35.00,description:'Dark.blue stretch.denim. Button fastenings through front. 92% cotton, 6% elastomultiester, 2% elastane; trim: 100% cotton. Machine wash. Designer wash: Loved Cabin Plaid The Trucker oversized stretch.denim jacket.',category:"apparel"},
  {name:'Oversized Bomber Olive Green Jakcet', image:['http://i61.photobucket.com/albums/h58/tionnaw95/HipStore/jacket%206_zpsjt4sv6lw.jpg?t=1476643075'], price:50.00,description:'On the Road bomber jacket with ribbed trim. Baseball collar; front zip. Long ruched sleeves; zip pocket on left sleeve. Side slip pockets. Relaxed silhouette. Straight hem. Polyester. Contrast, polyester/spandex. Hand wash. Imported.',category:"apparel"},
  {name:'Brown Shearling Coat',image:['http://i61.photobucket.com/albums/h58/tionnaw95/HipStore/jacket%204_zpsfxx96xfe.jpg?t=1476643082'],price:500.00,description:'Invest in a chic outerwear piece this winter. Crafted from faux shearling, this coat is guaranteed to keep you warm throughout the colder months. Featuring button up fastening and practical pockets, this stylish piece is perfect for throwing over your knitwear. 100% Polyester. Machine wash.',category:"apparel"},
  //HipStore- Sweaters/Shirts
  {name:'Rose Pink Sweater', image:['http://i61.photobucket.com/albums/h58/tionnaw95/HipStore/new%20sweater%204_zpso2eamsmj.jpg?t=1476643083'],price:20.00,description:'Soft textured knit sweater, Relaxed, flattering fit , Length covers your back pockets and hits mid-zipper on your favorite jeggings , oversized fit, Metal logo tab at hem, Ribbed cuffs, neck and hem HipStore female adult Rose cotton/acrylic/nylon/wool S/M/L/XL.',category:"apparel"},
  {name:'Khaki Sweater', image:['http://i61.photobucket.com/albums/h58/tionnaw95/HipStore/new%20sweater%205_zpsdlgrlrqv.jpg?t=1476643083'],price:20.00,description:'When youre bundled up in this cozy off shoulder sweater, the whole world will feel right once again. Whether youre going out on a date or staying in on a weekend, this knit topper can provide you with warmth and style to keep you looking fashionable. Pair this sweater with sneakers and leggings, and you re good to go',category:"apparel"},
  {name:'Dark Grey Sweater', image:['http://i61.photobucket.com/albums/h58/tionnaw95/HipStore/new%20sweater%206_zpsantuh1is.jpg?t=1476643083'],price:20.00,description:'We all loves this simple but chic sweater, especially on a cold day. This cozy dark grey sweater is made of comfortable material. Sweeten up your look by wearing this with a pair of leggings or skinnies, and ankle booties.',category:"apparel"},
  {name:'Oversized Red Flannel Shirt',image:['https://sc01.alicdn.com/kf/HTB1LQzYJVXXXXaKXXXXq6xXFXXXc.jpg'],price: 20.00,description:' Relaxed oversized button down plaid flannel shirt in burgundy with a patch pocket & roll tab sleeves.We know you are tired of rolling up your sleeves. That is why we already did it for you',category:"apparel"},
  {name:'Denim Blue Button-Up Shirt', image:['http://ak1.polyvoreimg.com/cgi/img-thing/size/l/tid/177845579.jpg'],price:20.00,description:'A super cute button-up shirt in a lightweight medium wash denim with fading effects, an icon embroidered at the left chest pocket and a curved hem, Easy Fit, Imported',category:"apparel"},
  {name:'Army Green Vintage Flannel Sweater', image:['https://s-media-cache-ak0.pinimg.com/564x/71/4c/9e/714c9eec1f82c58761dc206443d0a0d4.jpg'], price:25.00, description:'Rock your casual style with confidence wearing this womens plaid shirt from Rock & Republic, featuring a cool high-low hem. High-low hem 1-pocket Button front Button tab sleeves roll from long to 3/4-length Fabric & Care Rayon Machine wash Imported',category:"apparel"},

  //HipStore-Bottoms/Pants 
  {name: 'Hipster roll-up Jeans', image: ['http://picture-cdn.wheretoget.it/lr7aex-l-610x610-jeans-ripped+jeans-boyfriend+jeans-dope-indie-hipster-hole+jeans-high+waisted+jeans.jpg'], price: 26.00, description: 'Laid-back boyfriend jeans with a low rise, featuring dark wash stretch denim, a button fly, destruction and patch detailing, fading and whiskering, five-pocket styling, a double roll hem and iconic back pocket stitching, Imported',category: "apparel"}, 

  {name:'Denim Blue Boyfriend Jeans', image:['http://ak2.polyvoreimg.com/cgi/img-thing/size/l/tid/181658401.jpg'],price:20.00,description:'Karl Lagerfeld blue Stella jeans. Mid.weight denim. Belt loops, designer.embossed black leather label, five pockets, faded, whiskered, distressed details. Button and concealed zip fastening at front. 100% cotton. Machine wash inside out to avoid color transfer Stella mid.rise boyfriend jeans.',category:"apparel"},

  {name:'All Black Skinny Jeans ', image:['http://ak1.polyvoreimg.com/cgi/img-thing/size/l/tid/181805693.jpg'],price:25.00,description:'Black stretch cotton skinny fit jeans from Saint Laurent featuring a low rise, a waistband with belt loops, a button and zip fly, a five pocket design and a regular length. Color: Black. Gender: Female. Material: Cotton/Spandex/Elastane.',category:"apparel"},
  {name:'Khaki Jeans ', image:['http://ak2.polyvoreimg.com/cgi/img-thing/size/l/tid/114665100.jpg'],price:25.00,description:'Your bold style demands chic 7 For All Mankind jeans. Relaxed Skinny features a slightly looser cut through the top block that tapers to a slim leg. Wide, rolled cuff. Buff is a faded, light khaki wash 9 oz stretch twill with frayed grinding and light ripping for a worn-in look.',category:"apparel"},
  {name:'Burgundy Jeans ', image:['http://ak2.polyvoreimg.com/cgi/img-thing/size/l/tid/177035265.jpg'],price:25.00,description:'Add these burgundy jeans to your school uniform, featuring faux pockets and iconic back pocket stitching, Imported',category:"apparel"},

  //HipStore-Footwear  
  {name:'All Black Doc Martins',image:['http://ak2.polyvoreimg.com/cgi/img-thing/size/l/tid/156735588.jpg'],price:150.00,description:'The Dr. Martens Classic 1460 W boot has a classic style with a modern durability that you can always depend on. Smooth leather upper. Features the trademark Dr. Martens yellow stitching and heel loop. Comfortable synthetic lining',category:"apparel"},
  {name:'Classic White Chuck Taylors',image:['http://ak2.polyvoreimg.com/cgi/img-thing/size/l/tid/113849327.jpg'],price:45.00,description:'Ol skool never looked so fly! Rep your era to the fullest in a pair of these classic Chucks from Converse. Features hi-top sneakers with canvas uppers. Vintage Converse rubber toe cap and color-contrasting sidewall. Canvas-lined with lightly padded footbed for comfort.',category:"apparel"},
  {name:'Rusty Brown Loafers',image:['http://i61.photobucket.com/albums/h58/tionnaw95/HipStore/new%20shoes%202_zps87kizlmm.jpg?t=1476643082'],price:60.00,description:'Ready for your moccasin mainstay? Reach for the Pineland Moc. Timeless casual receives hits of outdoor inspiration in this premium leather package. Features Dual-tone, full grain leather upper with rolled collar and moc toe details Waxed cotton laces Removable',category:"apparel"},
  {name:'Black Lace Up Ankle Booties',image:['http://ak2.polyvoreimg.com/cgi/img-thing/size/l/tid/181251967.jpg'],price:580.00,description:'Leather and suede ankle boots have a sharply pointed toe that creates a flattering leg-lengthening effect. They are set on an elegant wedge heel thats constructed with a sleek panel of acrylic for a stacked look. We think they are the perfect height for this seasons cropped denim',category:"apparel"},

  ],

//---------- CATEGORY:FOOD -----------

  food: [{name: 'Thai style peanut chicken wrap', image: ['https://s25.postimg.org/ag24bd6jj/47e532188086402e9ef3b37292a61fde.jpg'], price: 6.00, description: 'Grilled chicken breast tossed in a peanut coconut sauce, topped with a chile-lime veggie slaw, red bell peppers, lettuce and ginger cream cheese served on a chile tortilla. Paired with peanut-coconut sauce and a side of grapes.', quantity: 30, rating: 4.0, category: "food"},

        {name: 'Organic Quinoa', image:['https://s25.postimg.org/fpaxegt3z/kchips.jpg'], price: 15.00, description: "We're still not sure what it's made of, but it's better than tofu." , quantity: 'Seriously, buy this. We have way too much of this stuff', rating: 3.9, category: "food"},

        {name:'Ciderboys',  image: ['https://s25.postimg.org/5iojq94kf/9754e395a9fe8f58bde2da49b648f897.jpg'], price: 12.00, description: 'Six Pack: Pours a clear light yellow gold. Aroma has a good amount of sweet sugary apple with a bit of a light bitterness underlying. Flavor is similarly sweet with apple and has just a light bite towards the finish. Just drink it, cause all the cool kids are.', quantity: 1000, rating: 4, category: "food"},

        {name: 'Kombucha', image: ['https://s25.postimg.org/v2qtwopy7/o_KOMBUCHATONICA_facebook.jpg'], price: 5.00, description: 'Vegan Immune- boosting drink. Kombucha is a fizzy, fermented beverage made from tea that is refreshing.The drink is essentially fermented tea: its made from sweetened tea, usually black, that is fermented by a bacteria and yeast culture and ends up full of probiotics as a result.', quantity: 18, rating: 7.8, category: "food"}, 

        {name: 'Vegan Sandwiches', image: ['https://s25.postimg.org/jro68bj33/d5efe3e0455e534256e35a5c1e8083b4.jpg'], price: 5.00, description: 'Hummus Kale Toast. It’s a game-changer. Not to mention that you’re getting some carbs, protein, healthy fats, and leafy greens, all in one spectacular toasty experience. These sandwiches are utterly delightful!', quantity: 16, rating: 8.7, category: "food"}, 

        {name: 'Vegan Spices', image: ['https://s25.postimg.org/gm3ki40gv/AJORSB0490.jpg'], price: 8.00, description: 'Indian Spices with an authentic taste!', quantity: 40, rating: 9.6, category: "food"},

        {name:'Gluten Free Cherry Almond Muffins', image: ['https://s25.postimg.org/irxvcm3xb/600x400_Gluten_Free_Cherry_Almond_Muffins1368194624.jpg'], price:3.00,description:'The apples in Apple Cranberry Muffins make these baked goods super moist. Natural wheat bran adds extra nutrition to this tasty treat.',quantity:30,rating:5,category:"food"},

        {name: 'French Croissants', image: ['https://s25.postimg.org/rbluo41nj/d91fd78adf72fb1754a41cee26ccba95.jpg'], price:  2.00, description: 'There is nothing like a hot buttered french croissant with a bowl of jam this fall. This is one of hipStore breakfast favorites', quantity: 40, rating: 5, category: "food"},

        {name:'Vegan homemade fries', image:['https://s25.postimg.org/yg3nx58wv/ad2da3831ee8c41458b00eb6b72b126a.jpg'], price:5.00,description:'Thyme Potatoes with Vegan Herb & Mustard Dip. One of the most delicious dishes you can ever ate. Try It Here at our hipStore Cafe ', quantity:30,rating:5,category:"food"}

        
        ],


//---------- CATEGORY:TECH -----------

    tech: [{name: 'Amara Headphones', image: ['https://s25.postimg.org/x2c11u9nj/mw60_wireless_over_ear_headphones_silver_brown_2.jpg'], price: 230.00, description: 'Style: Silver/Brown', quantity: 30, rating: 0, category: "tech"}, 

          {name: 'Beyonce Vinyl Platinum Edition', image: ['https://s25.postimg.org/frut1awrj/beyonce.jpg'], price: 44.00, description: 'The surprise self-titled album from Beyonce, available here on vinyl.', quantity: 0, rating: 0, category: "tech"},

          {name: 'Fujifilm Instax',image: ['https://s25.postimg.org/gfugsrgpr/Review_Fujifilm_Instax_25_Polaroid_5_1024x1024.jpg'], price: 85.00, description: "Tired of taking perfectly fine, high-quality images on your iPhone 7? This is the camera for you. Keep your blurry memories with you forever." , quantity: 30,rating: 2.7, category: "tech"},

          {name:'Mini Fridge',  image: ['https://s25.postimg.org/r7iugdhen/minifridge.jpg'], price: 125.00, description:'Perfect size fridge for the really small studio apartment you live in. Enough room inside for all 4 of your roommate.', quantity: 900, rating: 2, category: "tech"},

          {name: 'Polaroid Camera: Lilac', image:['https://s25.postimg.org/in7w860rj/pol.jpg'], price: 45.00, description: "What is life without a picture you can't shake?", quantity: 10, rating: 10, category: "tech"},

          {name: 'Phone Projector', image:['https://s25.postimg.org/mkvo4hh0f/1smart.jpg'], price: 165.50, description: "Plan the perfect movie night with this phone projector. No need to watch HBO with the subsscription your friend of a friend gave you on your little smart phone. Project the image large on a black wall.", quantity: 1000990, rating: 7, category: "tech"},

          {name: 'Walkman', image: ['https://s25.postimg.org/likzf14rj/Walkman_006.jpg'], price: 24.00, description: 'Sony Walkman', quantity: 4, rating: 7.5, category: "tech"}, 

          {name: 'Vinyl Records player', image: ['https://s25.postimg.org/3pq8fo8rj/steepleton_norwic.jpg'], price: 57.00, description: 'An all- wooden Vinyl Records player', quantity: 13, rating: 8.5, category: "tech"}, 

          {name: 'Boom-box', image: ['https://s25.postimg.org/c99mdfh3z/Boom_Box_10.jpg'], price: 45.00, description: 'JVC Boom-box', quantity: 4, rating: 7.5, category: "tech"}
          ],

//---------- CATEGORY:ART -----------

    art: [{name: 'Art Not War ', image: ['https://s25.postimg.org/4ukal1v8f/2f537397bd7421fdca931a9ce7d5ecb9.jpg'], price: 12.99, description: 'HipStore Poster', quantity: 50, rating: 3.7, category: "art"}, 

          {name: 'Soilder ', image: ['https://s25.postimg.org/p3guy99b3/b175195f1bd3d3dc5f4c7fd7a36e66aa.jpg'], price: 12.99, description: ' HipStore Poster', quantity: 50, rating: 4.0, category: "art"},

          {name: 'Foxy Art',image: ['https://s25.postimg.org/fio1jw57j/b175195f1bd3d3dc5f4c7fd7a36e66aa.jpg'],price: 200.00,description: 'hipStore poster', quantity: 3, rating: 4.3, category: "art"}, 

          {name: 'Dads Are the Original Hipsters', image: ['https://s25.postimg.org/xzigapl5r/image.jpg'], price: .50, description: 'He listened to vinyl before you did. He drank whiskey before you did. He had a mustache before you did. Admit it: your dad was a hipster before you were! Based on the blog phenomenon of the same name, this book celebrates dads as the original hipsters. Vintage photos of real dads back in the day—in their short shorts and tight tees playing arcade games—accompany snarky captions that at once tip a cap to Dad\'s glory days and poke fun at modern hipsters. Featuring tons of never-before-seen content, this book is perfect for dads, hipsters, and those who love to tease them!', quantity: 1000000, rating: 1, category: "art"},

          {name: 'So You Think You Are A Hipster', image: ['https://s25.postimg.org/vjgmwv333/c0e37adcec1c99cdf5f8a5fe6b10f5cd.jpg'], price: .25, description: 'Are you sure you are a hipster? Find out in this one page book if you are. But honestly... its not that serious.', quantity: "why do we even sell this", rating: 0, category: "art"},

          {name: 'Lion painting', image: ['https://s25.postimg.org/pwovd4py7/balazs_solti.jpg'], price: 25.99, description: 'Picture of a Nerdy Lion', quantity: 6, rating: 8.5, category: "art"}, 

          {name: 'Edward Scissor-hands', image: ['https://s25.postimg.org/m1lhak6sf/artista_chileno_fab_ciraolo_ilustraciones_hipste.png'], price: 17.99, description: 'Picture of Edwad Scissor-hands', quantity: 4, rating: 6.7, category: "art"}, 

          {name: 'Picture of a Praying Man', image: ['https://s25.postimg.org/ij9he65wf/tumblr_n13r2d1_HSE1rp70gvo1_500.jpg'], price: 14.99, description: 'Picture of a Praying man, with 2 monkeys on his shoulders', quantity: 7, rating: 8.5, category: "art"},

          {name: 'One with Nature', image: ['https://s25.postimg.org/f0xhhs50f/amazing_art_grunge_hipster_Favim_com_2170520.jpg'], price: 13.79, description: 'Picture of a woman who is seen to be one with Nature', quantity: 4, rating: 7.5, category: "art"}
          ],

//---------- CATEGORY:OTHER -----------

    //Accessories  + Hats + Scarfs + Bags + Watches 


   other: [{name: ' Vintage Roll Top BackPack', image: ['https://s-media-cache-ak0.pinimg.com/236x/43/59/69/435969d9048531c9d8719a94d082179a.jpg'], price: 24.99, description: 'Black Leather Buckled Roll Top BackPack', quantity: 0, rating: 0, category: "other"},

          {name: "Beard Grooming kit", image: ['https://s25.postimg.org/rm2jyxv1b/Elite_BEARD_Grooming_Kit_Kit_packed_closeup_2.jpg'], price: 29.99, description: 'hipStore favorite',quantity: 25, rating: 4.5, category: "other"},
          {name: "Rug Runned Over By A Lawnmover", image: ['https://s25.postimg.org/md817z61r/1home.jpg'], price: 799.99, description: 'This one of a kind rug fell off the back of this truck. Then it rolled over underneath a lawnmover. It still looked cool, so we are selling it.',quantity: 1, rating: 2, category: "other"},

          {name: 'Glasses with no lenses', image:['https://s25.postimg.org/c9e7r66hr/oculos_sem_lente.jpg'], price: 89.99, description: 'Stylish glasses for those with 20/20 vision and are in need of some face swag.', quantity: 25, rating: 3.5, category: "other"},

          {name: 'Hipster Bingo', image: ['https://s25.postimg.org/4563mfk2n/FN651_TUI1_EU3_IPW_MEDIUM.jpg'], price: 35, description: 'bingo reinvented for a new generation, for the 21st century, with bells and whistles, but still unmistakably, undeniably, bingo. There are cards and callers, numbers to be crossed off or dabbed, lines and full houses to be had, winners in waiting.', quantity: 30, rating: 3, category: "other"},
          
          {name: 'Vote for Bernie', image: ['https://s25.postimg.org/x8ubio867/hipster_bernie_poster_r2033d75cf4db437b838ff397d.jpg'], price: 22, description: 'We know who you are voting for... go ahead and REPRESENT', quantity: 25000, rating: 5, category: "other"},
          
          {name: 'The Palm Tree in the Corner', image: ['https://s25.postimg.org/jxx9xo2u7/duvet.jpg'], price: 250, description: 'Buy this dying palm tree to give your room a vintage feel. Limited stock. Get one before they die out. #Pun', quantity: 5, rating: 1, category: "other"},

          {name: 'Beard Wax', image: ['https://s25.postimg.org/so853qogv/woody_s_beard_balm_2_oz_500x500.jpg'], price: 6.75, description: 'Woodys Beard Wax', quantity: 12, rating: 8.5, category: "other"},

          {name: 'Blood Rage', image: ['https://s25.postimg.org/5ba3l88db/3_blood_rage.png'], price: 14.99, description: 'Blood rage Board game', quantity: 6, rating: 8.5, category: "other"},

          {name: 'Hack and Sack', image: ['https://s25.postimg.org/vxr5ny1y7/Dc_Comics_Superman_Shield_Logo_Super_Hero_Hack.jpg'], price: 8.75, description: 'Superman Hack & Sack ball', quantity: 13, rating: 8.5, category: "other"},

          {name: 'Toy Car: Vintage', image: ['https://s25.postimg.org/7sqyd5b33/1car.jpg'], price: 8.75, description: 'Let your inner child shine with this toy car. But your to cool for that, so buy this toy car and leave it on a high shelf for "decoration."', quantity: 255, rating: 3, category: "other"},

          {name: 'Key Holder', image: ['https://s25.postimg.org/6ualauxr3/1other.jpg'], price: 15.95, description: 'Key all you little items safe in this tray. Why would you buy this? We do not know. But it looks nice, and you are going to buy it."', quantity: 1655, rating: 3, category: "other"},
          {name: 'Tokyo Bike', image: ['https://s25.postimg.org/dto53b49r/tumblr_m4f9ld059_R1qcuhvho1_540.jpg'], price: 1200, description: "For those people who love the earth. Don't drive ride to where every your heart desire", quantity: 4, rating: 9, category: "other"},
          {name: 'Hack and Sack', image: ['http://thumbs2.picclick.com/d/w1600/pict/291806629105_/Dc-Comics-Superman-Shield-Logo-Super-Hero-Hack.jpg'], price: 8.75, description: 'Superman Hack & Sack ball', quantity: 13, rating: 8.5, category: "other"},

          {name: 'hipStore Black Beanie', image: ['https://s-media-cache-ak0.pinimg.com/564x/cd/ec/75/cdec7586d503e4b90a9bc6c39286b25f.jpg'], price: 9.99, description: 'Essential beanie in the color black, exclusively available at hipStore. Cozy knit construction is complete with a sloughy fit.', quantity: 50, rating: 4.0, category: "apparel"}
          ],

};


export default data;
//

