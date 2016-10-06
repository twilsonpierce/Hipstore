const data = {

  apparel: [{name: 'All Black Beanie', image: ['https://s-media-cache-ak0.pinimg.com/564x/cd/ec/75/cdec7586d503e4b90a9bc6c39286b25f.jpg'], price: 9.99, description: 'HipStore Hats', quantity: 50, rating: 4.0, category: "apparel"},
      
      {name: 'Idk, Google It ', image: ['https://img1.etsystatic.com/067/0/11131067/il_570xN.790990333_kngx.jpg'], price: 14.99, description: 'hipstore Graphic Tee',quantity: 35, rating: 3.5, category: "apparel"},
      
      {name: 'Plaid shirt with sleeves rolled up',image: ['http://d.looklive.com/N3yMUPHUxGW_nk6xQt-aVJBa56I=/76x44:1062x1030/filters:extend():watermark(20ce9879-6197-4286-bbf8-171853bd3dee,736,1301,10)/f5df592a-fe5e-4777-a912-9590af4be4c4'], price: 45.00, 
      description: "We know you're tired of rolling up your sleeves. That's why we already did it for you.",quantity: 15,rating: 4.8, category: "apparel"},
      
      {name: 'Traditional blanket sweater', image: ['https://images1.novica.net/pictures/4/p211245_2.jpg'], price: 75.00, description: 'Totally not a poncho', quantity: 35, rating: 4.1, category: "apparel"}, 

      {name: 'Converse Shoe: Vintage',image: ['http://s9.favim.com/orig/131103/all-star-converse-old-shoes-Favim.com-1033746.jpg'], price: 95, description: "Want to fit in but don't know where to start. Well grab you a pair of these bad boys, and everyone will want to hang out with you. We dipped them in a bag of dirt, to give you the vintage fill with out the smell. You are welcome.", quantity: 0, rating: 0, category: "apparel"},

      {name: 'Hipster roll-up Jeans', image: ['http://picture-cdn.wheretoget.it/lr7aex-l-610x610-jeans-ripped+jeans-boyfriend+jeans-dope-indie-hipster-hole+jeans-high+waisted+jeans.jpg'], price: 25.99, description: 'Hipster roll-up Jeans/ Denim Blue', quantity: 16, rating: 9.5, category: "apparel"}, 

      {name: 'Mermaid T-Shirt', image: ['https://ae01.alicdn.com/kf/HTB1azTRKXXXXXbZXFXXq6xXFXXXq/Basic-t-shirt-women-font-b-hipster-b-font-font-b-clothes-b-font-cute-cartoon.jpg'], price: 14.99, description: 'Mermaid T-Shirt/ Womens', quantity: 5, rating: 7.5, category: "apparel"},

      {name: 'Shoes', image: ['http://i.ebayimg.com/images/i/261211749074-0-1/s-l1000.jpg'], price: 35.75, description: 'Suade Gentlemen woven shoes', quantity: 14, rating: 9.5, category: "apparel"}
      ],

//---------- CATEGORY:FOOD -----------

  food: [{name: 'Thai style peanut chicken wrap', image: ['http://globalassets.starbucks.com/assets/47e532188086402e9ef3b37292a61fde.jpg'], price: 5.99, description: 'Grilled chicken breast tossed in a peanut coconut sauce, topped with a chile-lime veggie slaw, red bell peppers, lettuce and ginger cream cheese served on a chile tortilla. Paired with peanut-coconut sauce and a side of grapes.', quantity: 30, rating: 4.0, category: "food"},

        {name: 'Organic Quinoa', image:['http://truthseekerdaily.com/wp-content/uploads/2013/11/quinoa-package.jpg'], price: 14.99, description: "We're still not sure what it's made of, but it's better than tofu." , quantity: 'Seriously, buy this. We have way too much of this stuff', rating: 3.9, category: "food"},

        {name:'Ciderboys',  image: ['https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRgbu2eF0Zqbz65Dy9zwcSuR54khTCHM1rUUgybbD48Ik2GU8dhGg'], price: 11.99, description: 'Six Pack: Pours a clear light yellow gold. Aroma has a good amount of sweet sugary apple with a bit of a light bitterness underlying. Flavor is similarly sweet with apple and has just a light bite towards the finish. Just drink it, cause all the cool kids are.', quantity: 1000, rating: 4, category: "food"},

        {name: 'Kombucha', image: ['http://www.netcostphilly.com/wp-content/uploads/2015/07/1111.jpg'], price: 3.69, description: 'Vegan Immune- boosting drink', quantity: 18, rating: 7.8, category: "food"}, 

        {name: 'Vegan Sandwiches', image: ['http://www.seriouseats.com/assets_c/2012/01/20120126-vegan-experience-day-14-primary-thumb-625xauto-215777.jpg'], price: 4.49, description: 'Pre-packaged Vegan Sandwiches that are utterly delightful!', quantity: 16, rating: 8.7, category: "food"}, 

        {name: 'Vegan Spices', image: ['http://www.gotethnicfoods.com/pictures/Regular/AJORSB0490.jpg'], price: 7.89, description: 'Indian Spices with an authentic taste!', quantity: 40, rating: 9.6, category: "food"}
        ],


//---------- CATEGORY:TECH -----------

    tech: [{name: 'Amara Headphones', image: ['https://9fc150e398464d83928c-3d3ba9297f2f7303be162d5343c146a9.ssl.cf3.rackcdn.com/products/main/115671/mw60-wireless-over-ear-headphones-silver-brown-251808.jpg'], price: 229.99, description: 'Style: Silver/Brown', quantity: 0, rating: 0, category: "tech"}, 

          {name: 'Beyonce Vinyl Platinum Edition', image: ['http://images.urbanoutfitters.com/is/image/UrbanOutfitters/33666397_001_b?$xlarge$&defaultImage='], price: 43.99, description: 'The surprise self-titled album from Beyonce, available here on vinyl.', quantity: 0, rating: 0, category: "tech"},

          {name: 'Fujifilm Instax',image: ['http://www.bunchofbackpackers.com/wp-content/uploads/2015/03/Review-Fujifilm-Instax-25-Polaroid-5-1024x1024.jpg'], price: 85.00, description: "Tired of taking perfectly fine, high-quality images on your iPhone 7? This is the camera for you. Keep your blurry memories with you forever." , quantity: 30,rating: 2.7, category: "tech"},

          {name:'Mini Fridge',  image: ['http://images.urbanoutfitters.com/is/image/UrbanOutfitters/38558284_085_b?$xlarge$&defaultImage='], price: 0, description:'Perfect size fridge for the really small studio apartment you live in. Enough room inside for all 4 of your roommate.', quantity: 919, rating: 2, category: "tech"},

          {name: 'Polaroid Camera: Lilac', image:['http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40768012_053_e?$xlarge$&defaultImage='], price: 0, description: "What is life without a picture you can't shake?", quantity: 0, rating: 0, category: "tech"},

          {name: 'Walkman', image: ['http://d2j00gktbpe2bf.cloudfront.net/albums/images/f44aca342042b3656c9ce2i289370266/scale-750x750'], price: 24.99, description: 'Sony Walkman', quantity: 4, rating: 7.5, category: "tech"}, 

          {name: 'Vinyl Records player', image: ['https://static.independent.co.uk/s3fs-public/styles/story_medium/public/thumbnails/image/2014/07/17/17/steepleton-norwic.jpg'], price: 56.99, description: 'An all- wooden Vinyl Records player', quantity: 3, rating: 8.5, category: "tech"}, 

          {name: 'Boom-box', image: ['http://ajournalofmusicalthings.com/wp-content/uploads/BoomBox_10.jpg'], price: 45.50, description: 'JVC Boom-box', quantity: 4, rating: 7.5, category: "tech"}
          ],

//---------- CATEGORY:ART -----------

    art: [{name: 'Art Not War ', image: ['https://s-media-cache-ak0.pinimg.com/236x/2f/53/73/2f537397bd7421fdca931a9ce7d5ecb9.jpg'], price: 12.99, description: 'HipStore Poster', quantity: 50, rating: 3.7, category: "art"}, 

          {name: 'Soilder ', image: ['https://s-media-cache-ak0.pinimg.com/564x/b1/75/19/b175195f1bd3d3dc5f4c7fd7a36e66aa.jpg'], price: 12.99, description: ' HipStore Poster', quantity: 50, rating: 4.0, category: "art"},

          {name: 'Foxy Art',image: ['https://img1.etsystatic.com/102/1/10394139/il_fullxfull.843600093_dd82.jpg'],price: 200.00,description: 'hipStore poster', quantity: 3, rating: 4.3, category: "art"}, 

          {name: 'Dads Are the Original Hipsters', image: ['https://books.google.com/books/content/images/frontcover/ZW8Yn2Tj7AwC?fife=w300-rw'], price: .50, description: 'He listened to vinyl before you did. He drank whiskey before you did. He had a mustache before you did. Admit it: your dad was a hipster before you were! Based on the blog phenomenon of the same name, this book celebrates dads as the original hipsters. Vintage photos of real dads back in the day—in their short shorts and tight tees playing arcade games—accompany snarky captions that at once tip a cap to Dad\'s glory days and poke fun at modern hipsters. Featuring tons of never-before-seen content, this book is perfect for dads, hipsters, and those who love to tease them!', quantity: 1000000, rating: 1, category: "art"},

          {name: 'So You Think You Are A Hipster', image: ['https://s-media-cache-ak0.pinimg.com/originals/c0/e3/7a/c0e37adcec1c99cdf5f8a5fe6b10f5cd.jpg'], price: .25, description: 'Are you sure you are a hipster? Find out in this one page book if you are. But honestly... its not that serious.', quantity: "why do we even sell this", rating: 0, category: "art"},

          {name: 'Lion painting', image: ['https://images.icanvas.com/list-hero/balazs-solti.jpg'], price: 25.99, description: 'Picture of a Nerdy Lion', quantity: 6, rating: 8.5, category: "art"}, 

          {name: 'Edward Scissor-hands', image: ['https://modaddictiondotnet.files.wordpress.com/2014/04/artista-chileno-fab-ciraolo-ilustraciones-hipster-cleopatra-frida-kahlo-salvador-dali-iconos-popart-modaddiction-0.png?w=620'], price: 17.99, description: 'Picture of Edwad Scissor-hands', quantity: 4, rating: 6.7, category: "art"}, 

          {name: 'Picture of a Praying Man', image: ['https://67.media.tumblr.com/9969af17c591797f4083063fc70421cb/tumblr_n13r2d1HSE1rp70gvo1_500.jpg'], price: 14.99, description: 'Picture of a Praying man, with 2 monkeys on his shoulders', quantity: 7, rating: 8.5, category: "art"},

          {name: 'One with Nature', image: ['http://s3.favim.com/orig/141022/amazing-art-grunge-hipster-Favim.com-2170520.jpg'], price: 13.79, description: 'Picture of a woman who is seen to be one with Nature', quantity: 4, rating: 7.5, category: "art"}
          ],

//---------- CATEGORY:OTHER -----------

   other: [{name: ' Vintage Roll Top BackPack', image: ['https://s-media-cache-ak0.pinimg.com/236x/43/59/69/435969d9048531c9d8719a94d082179a.jpg'], price: 24.99, description: 'Black Leather Buckled Roll Top BackPack', quantity: 0, rating: 0, category: "other"},

          {name: "Beard Grooming kit", image: ['http://bearddusud.com/wp-content/uploads/2015/04/Elite-BEARD-Grooming-Kit-Kit-packed-closeup-2.jpg'], price: 29.99, description: 'hipStore favorite',quantity: 25, rating: 4.5, category: "other"},

          {name: 'Glasses with no lenses', image:['https://koreadaybyday.files.wordpress.com/2013/02/oculos-sem-lente.jpg'], price: 89.99, description: 'Stylish glasses for those with 20/20 vision and are in need of some face swag.', quantity: 25, rating: 3.5, category: "other"},

          {name: 'Hipster Bingo', image: ['https://cdn.instructables.com/FN6/51TU/I1EU3IPW/FN651TUI1EU3IPW.MEDIUM.jpg'], price: 35, description: 'bingo reinvented for a new generation, for the 21st century, with bells and whistles, but still unmistakably, undeniably, bingo. There are cards and callers, numbers to be crossed off or dabbed, lines and full houses to be had, winners in waiting.', quantity: 30, rating: 3, category: "other"},
          
          {name: 'Vote for Bernie', image: ['http://rlv.zcache.co.nz/hipster_bernie_poster-r2033d75cf4db437b838ff397d28921eb_wdk_8byvr_324.jpg'], price: 22, description: 'We know who you are voting for... go ahead and REPRESENT', quantity: 25000, rating: 5, category: "other"},
          
          {name: 'The Palm Tree in the Corner', image: ['http://images.urbanoutfitters.com/is/image/UrbanOutfitters/37890407_046_b?$xlarge$&defaultImage='], price: 250, description: 'Buy this dying palm tree to give your room a vintage feel. Limited stock. Get one before they die out. #Pun', quantity: 5, rating: 1, category: "other"},

          {name: 'Beard Wax', image: ['https://cdn2.loxabeauty.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/w/o/woody_s_beard_balm_-_2_oz_500x500.jpg'], price: 6.75, description: 'Woodys Beard Wax', quantity: 12, rating: 8.5, category: "other"},

          {name: 'Blood Rage', image: ['http://pop.h-cdn.co/assets/15/53/3-blood-rage.png'], price: 14.99, description: 'Blood rage Board game', quantity: 6, rating: 8.5, category: "other"},

          {name: 'Hack and Sack', image: ['http://thumbs2.picclick.com/d/w1600/pict/291806629105_/Dc-Comics-Superman-Shield-Logo-Super-Hero-Hack.jpg'], price: 8.75, description: 'Superman Hack & Sack ball', quantity: 13, rating: 8.5, category: "other"}
          ],

};


export default data;

