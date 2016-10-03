const data = {
  apparel: [{
      name: 'Plaid shirt with sleeves rolled up',
      image: ['http://d.looklive.com/N3yMUPHUxGW_nk6xQt-aVJBa56I=/76x44:1062x1030/filters:extend():watermark(20ce9879-6197-4286-bbf8-171853bd3dee,736,1301,10)/f5df592a-fe5e-4777-a912-9590af4be4c4'], 
      price: 45.00, 
      description: "We know you're tired of rolling up your sleeves. That's why we already did it for you.",
      quantity: 15, 
      rating: 4.8
      }, 

      {name: 'Traditional blanket sweater', 
      image: 'https://images1.novica.net/pictures/4/p211245_2.jpg', 
      price: 75.00, 
      description: 'Totally not a poncho', 
      quantity: 35, 
      rating: 4.1
      }, 
      {name: 'Converse Shoe: Vintage', type: 'shoe',images: ['http://s9.favim.com/orig/131103/all-star-converse-old-shoes-Favim.com-1033746.jpg'], price: 95, description: "Want to fit in but don't know where to start. Well grab you a pair of these bad boys, and everyone will want to hang out with you. We dipped them in a bag of dirt, to give you the vintage fill with out the smell. You are welcome.", quantity: 0, rating: 0}
  ],

  food: [{
      name: 'Organic Quinoa', 
      image: ['http://truthseekerdaily.com/wp-content/uploads/2013/11/quinoa-package.jpg'], 
      price: 14.99, 
      description: "We're still not sure what it's made of, but it's better than tofu." , 
      quantity: "Seriously, buy this. We have way too much of this stuff", 
      rating: 3.9
      },
      {name: 'Ciderboys', type: 'Hard Apple Cider', images: ['https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRgbu2eF0Zqbz65Dy9zwcSuR54khTCHM1rUUgybbD48Ik2GU8dhGg'], price: 11.99, description: 'Six Pack: Pours a clear light yellow gold. Aroma has a good amount of sweet sugary apple with a bit of a light bitterness underlying. Flavor is similarly sweet with apple and has just a light bite towards the finish. Just drink it, cause all the cool kids are.', quantity: 1000, rating: 4} 
  ],

  art: [{
      name: 'Foxy Art', 
      image: ['https://img1.etsystatic.com/102/1/10394139/il_fullxfull.843600093_dd82.jpg'], 
      price: 200.00, 
      description: '', 
      quantity: 3, 
      rating: 4.3}, 
      {name: 'Dads Are the Original Hipsters', type: 'How-To',images: ['https://books.google.com/books/content/images/frontcover/ZW8Yn2Tj7AwC?fife=w300-rw'], price: .50, description: "He listened to vinyl before you did. He drank whiskey before you did. He had a mustache before you did. Admit it: your dad was a hipster before you were! Based on the blog phenomenon of the same name, this book celebrates dads as the original hipsters. Vintage photos of real dads back in the day—in their short shorts and tight tees playing arcade games—accompany snarky captions that at once tip a cap to Dad's glory days and poke fun at modern hipsters. Featuring tons of never-before-seen content, this book is perfect for dads, hipsters, and those who love to tease them!", quantity: 1000000, rating: 1},
      {name: 'So You Think You Are A Hipster', images: ['https://s-media-cache-ak0.pinimg.com/originals/c0/e3/7a/c0e37adcec1c99cdf5f8a5fe6b10f5cd.jpg'], price: .25, description: 'Are you sure you are a hipster? Find out in this one page book if you are. But honestly... its not that serious.', quantity: "why do we even sell this", rating: 0},
      {name: '', images: [''], price: 0, description: '', quantity: 0, rating: 0}
       ],

  tech: [{
      name: 'Fujifilm Instax', 
      image: ['http://www.bunchofbackpackers.com/wp-content/uploads/2015/03/Review-Fujifilm-Instax-25-Polaroid-5-1024x1024.jpg'], 
      price: 85.00, 
      description: "Tired of taking perfectly fine, high-quality images on your iPhone 7? This is the camera for you. Keep your blurry memories with you forever." , 
      quantity: 30, 
      rating: 2.7},
      {name: 'Mini Fridge', type: 'Home', images: ['http://images.urbanoutfitters.com/is/image/UrbanOutfitters/38558284_085_b?$xlarge$&defaultImage='], price: 0, description: 'Perfect size fridge for the really small studio apartment you live in. Enough room inside for all 4 of your roommate.', quantity: 919, rating: 2},
      {name: 'Polaroid Camera: Lilac', type: 'Camera',images: ['http://images.urbanoutfitters.com/is/image/UrbanOutfitters/40768012_053_e?$xlarge$&defaultImage='], price: 0, description: "What is life without a picture you can't shake?", quantity: 0, rating: 0}

  ],
  other: [{name: 'Beard Grooming kit', 
      image: ['http://bearddusud.com/wp-content/uploads/2015/04/Elite-BEARD-Grooming-Kit-Kit-packed-closeup-2.jpg'], 
      price: 29.99, 
      description: '', 
      quantity: 25, 
      rating: 4.5},
            
      {name: 'Glasses with no lenses', 
      image: ['https://koreadaybyday.files.wordpress.com/2013/02/oculos-sem-lente.jpg'], 
      price: 89.99, 
      description: 'Stylish glasses for those with 20/20 vision and are in need of some face swag.', 
      quantity: 25, 
      rating: 3.5},
      {name: 'Hipster Bingo', type: 'Board Game',images: ['https://cdn.instructables.com/FN6/51TU/I1EU3IPW/FN651TUI1EU3IPW.MEDIUM.jpg'], price: 35, description: 'bingo reinvented for a new generation, for the 21st century, with bells and whistles, but still unmistakably, undeniably, bingo. There are cards and callers, numbers to be crossed off or dabbed, lines and full houses to be had, winners in waiting.', quantity: 30, rating: 3},
      {name: 'Vote for Bernie', type: 'Poster', images: ['http://rlv.zcache.co.nz/hipster_bernie_poster-r2033d75cf4db437b838ff397d28921eb_wdk_8byvr_324.jpg'], price: 22, description: 'We know who you are voting for... go ahead and REPRESENT', quantity: 25000, rating: 5},
      {name: 'The Palm Tree in the Corner', type: 'Home',images: ['http://images.urbanoutfitters.com/is/image/UrbanOutfitters/37890407_046_b?$xlarge$&defaultImage='], price: 250, description: 'Buy this dying palm tree to give your room a vintage feel. Limited stock. Get one before they die out. #Pun', quantity: 5, rating: 1}  
       ]
}

export default data