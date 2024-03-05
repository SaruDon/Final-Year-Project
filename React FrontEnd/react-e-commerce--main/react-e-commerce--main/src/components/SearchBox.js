import React from 'react'
import { useState } from 'react'
import "../styles/SearchBox.css"
import { AiOutlineSearch } from "react-icons/ai";
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { AiFillStar } from "react-icons/ai"
import Highlighter from "react-highlight-words";


const SearchBox = () => {
  const [search, setSearch] = useState("tyres");

  const tyresClick = "tyres";
  const sizeClick = "size";
  const comfortClick = "comfort"
  const stabilityClick = "stability";
  const brakeClick = "brake performance";
  const noiseClick = "low noise";
  const durabilityClick = "durability";
  const offroadClick = "off-roading";
  const highgripClick = "high grip"


  const tyreHandler = (e) => {
    setSearch(tyresClick)
  }

  const sizeHandler = (e) => {
    setSearch(sizeClick)
  }

  const comfortClickHandler = (e) => {
    setSearch(comfortClick)
  }

  const stabilityHandler = (e) => {
    setSearch(stabilityClick)
  }

  const brakeHnadler = () => {
    setSearch(brakeClick);
  }

  const noiseClickHandler = () => {
    setSearch(noiseClick);
  }

  const durabilityClickHandler = () => {
    setSearch(durabilityClick);
  }

  const offroadClickHandler = () => {
    setSearch(offroadClick);
  }

  const highgripClickHnadler = () => {
    setSearch(highgripClick);
  }


  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  }






  const names = [
    // 1 - 5 tyres
    {
      id: "1",
      name: "Bailey C",
      type: "tyres",
      heading: "P Zero Corsa - Exceptional All-Season Performance!",
      description: "I recently switched to P Zero Corsa tyres, and the difference is remarkable. These tyres offer outstanding grip on wet and dry surfaces, making them perfect for year-round use. The durability and tread life are impressive, making them a solid investment for any driver seeking high-quality tyres.",
      stars: 5,
    },

    {
      id: "2",
      name: "Kimberly",
      type: "tyres",
      heading: "Scorpion Tyres - Unmatched Comfort and Stability",
      description: "My experience with Scorpion tyres has been fantastic. The ride is incredibly smooth, and the tyres provide excellent stability even at high speeds. They've proven to be a perfect balance between comfort and performance, making them my go-to choice for city driving.",
      stars: 5,
    },


    {
      id: "3",
      name: "Christen",
      type: "tyres",
      heading: "Cinturato P7 - Fuel-Efficient and Eco-Friendly",
      description: "Cinturato P7 exceeded my expectations with its fuel efficiency and environmentally conscious design. These tyres not only deliver on performance but also contribute to reducing my carbon footprint. A great choice for those looking to make a positive impact without compromising on quality.",
      stars: 4,
    },

    {
      id: "4",
      name: "Vincent ",
      type: "tyres",
      heading: "Wrangler Tyres - Tackling Tough Terrains with Ease",
      description: "Wrangler tyres are a game-changer for off-road enthusiasts. The exceptional traction and durability make them perfect for tackling tough terrains. Whether it's mud, gravel, or rocky paths, these tyres handle it all with ease. A must-have for anyone seeking adventure on the road less traveled.",
      stars: 5,
    },

    {
      id: "5",
      name: "Morikawa",
      type: "tyres",
      heading: "Assurance Triple Max - Tyres that Truly Define Safety",
      description: "Safety is a top priority for me, and SwiftGrip tyres have proven to be an excellent choice. The braking performance is outstanding, providing a sense of confidence on the road. Their durability and responsive handling make them an ideal option for those who prioritize safety without compromising on style.",
      stars: 5,
    },

    // 6 - 10  Size
    {
      id: "6",
      name: "Joanne",
      type: "size",
      heading: "My go-to choice for size!",
      description: "My favourite! I use it all the time just to refresh my size and enhance my vehicle's performance. Its superior properties make me purchase the product again and again. Excellent size for a smooth ride.",
      stars: 4,
    },
    
    {
      id: "7",
      name: "Irene C.",
      type: "size",
      heading: "Perfect fit for my needs!",
      description: "It gives me a feeling of instant refreshment and optimal size, especially when I feel my vehicle's performance needs a boost in the middle of the day. Only once that I needed a different size, I felt a bit of inconvenience.",
      stars: 4,
    },
    
    {
      id: "8",
      name: "Julia P",
      type: "size",
      heading: "Love this product. Perfect size!",
      description: "Love this product. So easy to use, and my vehicle feels great with the right size.",
      stars: 5,
    },
    
    {
      id: "9",
      name: "Rachel V.",
      type: "size",
      heading: "Never felt so great with this size!",
      description: "My vehicle has been so amazing using these products! And love the size! My vehicle isn’t underperforming, and my performance got better.",
      stars: 5,
    },
    
    {
      id: "10",
      name: "Kimberly P.",
      type: "size",
      heading: "I love how this makes my vehicle feel!",
      description: "I love how this makes my vehicle feel optimized and clean. It has a fresh impact too. I love using it all over my vehicle, and it runs smoothly. I’m glad I bought this product.",
      stars: 4,
    },
    
    // comfort

    {
      id: 11,
      name: "Michael H.",
      type: "comfort",
      heading: "Unmatched Comfort and Smooth Ride",
      description: "These comfort tyres have truly transformed my driving experience. The smooth ride and reduced road noise make every journey a pleasure. The exceptional comfort they provide is unparalleled, making them my top choice for a relaxing drive.",
      stars: 5,
    },
    
    {
      id: 12,
      name: "Laura M.",
      type: "comfort",
      heading: "Comfort Redefined!",
      description: "Comfort tyres by this brand redefine what driving comfort means. The enhanced cushioning and stability on the road create an unparalleled driving experience. I no longer worry about bumps or uneven surfaces. These tyres deliver the ultimate in driving comfort.",
      stars: 4,
    },
    
    {
      id: 13,
      name: "Alex B.",
      type: "comfort",
      heading: "A Smooth Journey Every Time",
      description: "Switching to these comfort tyres was a game-changer. The ride feels like gliding on air, and the reduced vibrations contribute to a smooth journey. The level of comfort they provide is impressive, making my daily commutes more enjoyable.",
      stars: 5,
    },
    
    {
      id: 14,
      name: "Natalie S.",
      type: "comfort",
      heading: "Driving Bliss with Comfort Tyres",
      description: "These comfort tyres have brought bliss to my daily drives. The exceptional comfort and stability on the road are unmatched. I feel confident and relaxed behind the wheel, making these tyres an excellent investment for anyone prioritizing driving comfort.",
      stars: 4,
    },
    
    {
      id: 15,
      name: "Daniel R.",
      type: "comfort",
      heading: "Comfort Meets Performance",
      description: "Choosing comfort tyres from this brand was a decision I won't regret. The perfect blend of comfort and performance makes every drive enjoyable. The road grip and reduced fatigue are exactly what I needed for long journeys. Highly recommended!",
      stars: 5,
    },
    


    // stability

    {
      id: 16,
      name: "Stellar Grip",
      type: "stability",
      heading: "Unmatched Stability on the Road!",
      description: "Stellar Grip provides unparalleled stability, giving you confidence and control during your drives. Its advanced technology ensures a smooth and secure ride, making it my top choice for stability on the road.",
      stars: 5,
    },
    
    {
      id: 17,
      name: "SureTrack Master",
      type: "stability",
      heading: "Reliable Stability in Every Turn",
      description: "SureTrack Master offers reliable stability, especially during sharp turns and maneuvers. I've never experienced such precise control with any other tyre. A must-have for those who value stability on the road.",
      stars: 4,
    },
    
    {
      id: 18,
      name: "UltimaTread",
      type: "stability",
      heading: "Ultimate Stability for a Confident Drive",
      description: "UltimaTread delivers ultimate stability for a confident drive. Whether it's highway cruising or city navigation, these tyres provide a stable foundation, enhancing the overall driving experience.",
      stars: 5,
    },
    
    {
      id: 19,
      name: "SmoothSail Tires",
      type: "stability",
      heading: "SmoothSail - Your Path to Stability",
      description: "SmoothSail Tires make every journey smooth and stable. The cutting-edge technology behind these tyres ensures stability on various terrains, offering drivers a reliable and enjoyable ride.",
      stars: 4,
    },
    
    {
      id: 20,
      name: "EternalGrip",
      type: "stability",
      heading: "EternalGrip - Timeless Stability",
      description: "EternalGrip provides timeless stability, standing the test of time in various driving conditions. Its durable design and reliable performance make it a trusted choice for those seeking enduring stability on the road.",
      stars: 5,
    },
    

    // brake performance

    {
      id: 21,
      name: "Michael R.",
      type: "brake performance",
      heading: "Enhanced Stopping Power!",
      description: "I'm amazed by the enhanced braking performance of these tyres. They provide a reliable grip on the road, and the difference in stopping power is noticeable. Whether in wet or dry conditions, these tyres deliver exceptional brake response.",
      stars: 5,
    },
    
    {
      id: 22,
      name: "Samantha H.",
      type: "brake performance",
      heading: "Confidence in Every Stop!",
      description: "These tyres have given me confidence in every stop. The braking is smooth and responsive, making my driving experience safer. Even during sudden stops, I can rely on the exceptional brake performance of these tyres.",
      stars: 4,
    },
    
    {
      id: 23,
      name: "Daniel S.",
      type: "brake performance",
      heading: "Impressive Braking Precision!",
      description: "Impressed by the precision these tyres offer in braking. Whether navigating city traffic or cruising on the highway, the braking response is top-notch. It's a crucial aspect of my driving experience, and these tyres exceed expectations.",
      stars: 5,
    },
    
    {
      id: 24,
      name: "Emily W.",
      type: "brake performance",
      heading: "Reliable Brakes in All Conditions!",
      description: "I appreciate the reliable brake performance these tyres provide across various driving conditions. Wet or dry, these tyres offer consistent and effective braking. A must-have for anyone prioritizing safety on the road.",
      stars: 4,
    },
    
    {
      id: 25,
      name: "Alexander G.",
      type: "brake performance",
      heading: "Optimal Braking Efficiency!",
      description: "These tyres deliver optimal braking efficiency, enhancing the overall control of my vehicle. The braking system feels responsive and reliable, making my daily commute much safer. Highly recommend for those seeking top-tier brake performance.",
      stars: 5,
    },
    

    // Low Noise

    {
      id: "26",
      name: "Sophie M.",
      type: "low noise",
      heading: "Quiet Journey Every Time",
      description: "My rides have become a breeze with these low noise tires! They offer a smooth and quiet journey, and I can't get enough of the tranquility they bring. Excellent choice for those seeking a peaceful driving experience.",
      stars: 5,
    },
    
    {
      id: "27",
      name: "Oliver H.",
      type: "low noise",
      heading: "Silent and Reliable",
      description: "These low noise tires are a game-changer! I appreciate the silence they bring to my drives, and their reliability is unmatched. Whether it's highways or city roads, the peace and performance are consistent.",
      stars: 5,
    },
    
    {
      id: "28",
      name: "Emma L.",
      type: "low noise",
      heading: "Reduced Noise, Maximum Comfort",
      description: "Driving with these low noise tires is a pleasure! The reduced noise level adds to the overall comfort of the journey. I can now enjoy the serenity of the road without compromising on performance.",
      stars: 4,
    },
    
    {
      id: "29",
      name: "Daniel R.",
      type: "low noise",
      heading: "Whisper-Quiet Excellence",
      description: "These tires redefine quiet excellence! The low noise is impressive, and the performance is top-notch. It's like having a whisper-quiet companion on every journey. Highly recommended for those who value a serene driving experience.",
      stars: 5,
    },
    
    {
      id: "30",
      name: "Sophia W.",
      type: "low noise",
      heading: "Peaceful Cruising Ahead",
      description: "Say goodbye to noisy rides! These low noise tires provide a peaceful cruising experience. I appreciate the tranquility they bring to my daily commutes. If you prefer a quiet ride, these tires are the perfect choice.",
      stars: 4,
    },
    

    // durability
    {
      id: 31,
      name: "John M.",
      type: "durability",
      heading: "Impressive Durability!",
      description: "These tyres have truly impressed me with their exceptional durability. I've been using them for an extended period, and they show no signs of wear. Whether it's daily commuting or long drives, these tyres have proven their longevity. A solid choice for those seeking reliability and longevity in their tyres.",
      stars: 5,
    },
    
    {
      id: 32,
      name: "Diana S.",
      type: "durability",
      heading: "Reliable and Long-Lasting",
      description: "When it comes to durability, these tyres stand out. I've driven through various terrains, and they have held up exceptionally well. The tread life is impressive, and they've maintained their performance even after extensive use. If you're looking for tyres that go the distance, these are the ones.",
      stars: 4,
    },
    
    {
      id: 33,
      name: "Michael R.",
      type: "durability",
      heading: "Built to Last!",
      description: "I've had these tyres on my vehicle for a while now, and I'm thoroughly impressed with their durability. No signs of wear and tear, even after facing challenging road conditions. These tyres are built to last, making them a smart investment for anyone prioritizing longevity and reliability.",
      stars: 5,
    },
    
    {
      id: 34,
      name: "Linda K.",
      type: "durability",
      heading: "Longevity and Performance",
      description: "Durability meets performance with these tyres. They have proven to be long-lasting, providing excellent traction and stability. Whether it's city driving or highway cruising, these tyres continue to deliver consistent performance. I highly recommend them for those who prioritize both durability and performance.",
      stars: 4,
    },
    
    {
      id: 35,
      name: "Brian H.",
      type: "durability",
      heading: "Sturdy and Dependable",
      description: "Sturdiness and dependability define these tyres. I've put them to the test, and they have surpassed my expectations in terms of durability. Even under heavy loads and varying weather conditions, these tyres have maintained their resilience. If you're in search of reliable and durable tyres, look no further.",
      stars: 5,
    },
    

    // off-roading

    {
      id: 36,
      name: "Off-Road Warrior",
      type: "off-roading",
      heading: "Unleash the Adventure!",
      description: "Unleash the adventure with Off-Road Warrior tires! Whether you're conquering rocky trails or navigating through mud, these tires provide unparalleled performance. Their rugged design ensures optimal traction and durability, making them the perfect choice for off-roading enthusiasts.",
      stars: 4,
    },
    
    {
      id: 37,
      name: "Trailblazer XT",
      type: "off-roading",
      heading: "Conquer Any Terrain",
      description: "Conquer any terrain with Trailblazer XT off-roading tires! Engineered for extreme off-road conditions, these tires deliver superior grip and stability. Dominate mud, sand, and rocky paths with confidence. Trailblazer XT is your companion for off-road adventures.",
      stars: 4,
    },
    
    {
      id: 38,
      name: "Dirt Dominator",
      type: "off-roading",
      heading: "Dominate the Dirt",
      description: "Dominate the dirt with Dirt Dominator off-roading tires! Designed for maximum off-road performance, these tires provide exceptional traction on dirt trails. Whether you're off-roading for pleasure or tackling challenging terrains, Dirt Dominator ensures a thrilling and safe journey.",
      stars: 5,
    },
    
    {
      id: 39,
      name: "RoughRider Plus",
      type: "off-roading",
      heading: "Rough Roads, Smooth Ride",
      description: "Experience a smooth ride on rough roads with RoughRider Plus off-roading tires! These tires offer a perfect balance between comfort and off-road durability. Enjoy the journey without compromising performance. RoughRider Plus is your go-to choice for an adventurous ride.",
      stars: 5,
    },
    
    {
      id: 40,
      name: "Extreme Trekker",
      type: "off-roading",
      heading: "Embark on Extreme Adventures",
      description: "Embark on extreme adventures with Extreme Trekker off-roading tires! Engineered for off-road enthusiasts, these tires provide unmatched performance on the toughest terrains. Conquer challenges with confidence and elevate your off-road experience with Extreme Trekker.",
      stars: 4,
    },
    

    // high grip

    {
      id: 41,
      name: "HighGrip Enthusiast",
      type: "high grip",
      heading: "Unmatched Grip for Ultimate Control",
      description: "Experience the thrill of the road with high grip Enthusiast tyres. Engineered for high-performance driving, these tyres deliver unmatched grip, ensuring you have ultimate control in every turn. Say goodbye to slipping and hello to precision handling.",
      stars: 4,
    },
    
    {
      id: 42,
      name: "ExtremeTraction Master",
      type: "high grip",
      heading: "Dominating Traction in All Conditions",
      description: "Conquer any road condition with ExtremeTraction Master tyres. These high grip wonders provide dominating traction, whether you're navigating wet surfaces or challenging terrains. Elevate your driving experience with confidence and control.",
      stars: 4,
    },
    
    {
      id: 43,
      name: "GripMax Pro",
      type: "high grip",
      heading: "Pro-Level Grip for Performance Enthusiasts",
      description: "GripMax Pro is the go-to choice for performance enthusiasts seeking high grip. Unleash the full potential of your vehicle with these high-performance tyres. The road is your playground, and GripMax Pro ensures you stay firmly in control.",
      stars: 5,
    },
    
    {
      id: 44,
      name: "TurboTread Elite",
      type: "high grip",
      heading: "Elite Grip for Turbocharged Adventures",
      description: "TurboTread Elite is your passport to turbocharged adventures. With high grip capabilities, these tyres ensure maximum traction, allowing you to push the limits of speed and performance. Elevate your driving experience with TurboTread Elite.",
      stars: 5,
    },
    
    {
      id: 45,
      name: "PrecisionGrip X",
      type: "high grip",
      heading: "Precision Grip Redefined",
      description: "Experience precision like never before with PrecisionGrip X. These high grip tyres redefine precision, offering unparalleled handling and control. Whether you're cruising on highways or navigating tight corners, PrecisionGrip X ensures a driving experience like no other.",
      stars: 4,
    },
    



  ]




  return (
    <div>


      <div className='flex flex-col gap-7 filterRevHold relative'>
        <p className='frText text-3xl relative fof'> Filter Reviews </p>

        <input type="text" placeholder="Search" className='bg-black fof searchBox relative text-gray-400 pl-3' onChange={e => setSearch(e.target.value)} />
      </div>


      <div className='searchItemsHold'>{names.filter(val => {
        if (search === "") {
          return val;
        }
        else if (val.description.toLowerCase().includes(search.toLowerCase())) {
          return val;
        }
      }).slice(0, 6).map(i => {
        return (<div key={i.id} className="searchList relative">
          <p className='font-semibold text-md mb-1 capitalize'> {i.name}</p>
          <p className='text-md mb-1'>  {i.stars === 4 ? <div className='flex'> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />  </div> : <div className='flex'> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />  </div>} </p>
          <p className=' text-gray-500 font-semibold mb-1 capitalize'> {i.heading} </p>
            <Highlighter
              className='fof mb-1 w50rem capitalize mobdesc'
              highlightClassName="YourHighlightClass highlightWord"
              searchWords={[search]}
              autoEscape={true}
              textToHighlight={i.description}
            > {i.description}
            </Highlighter>

          <p className='firstLetterHold rounded-full text-center pt-1 relative mb-1 capitalize'> {i.name.charAt(0)} </p>

        </div>
        )
      })} </div>


      <p className='popularKeyWordsText absolute text-2xl fof'> POPULAR KEYWORDS </p>


      <div className='keyWordHold w40rem uppercase flex flex-wrap  gap-9'>
        <p className='keyWord hover:bg-slate-200' onClick={tyreHandler}>Tyre</p> {/*smell*/ }
        <p className='keyWord hover:bg-slate-200' onClick={sizeHandler}> Size </p> {/*skin*/ }
        <p className='keyWord hover:bg-slate-200' onClick={comfortClickHandler}> Comfort </p> {/*fragrance*/ }
        <p className='keyWord hover:bg-slate-200' onClick={stabilityHandler}> Stability </p> {/*toner*/ }
        <p className='keyWord hover:bg-slate-200' onClick={brakeHnadler}> Brake Performance </p> {/*hydrating*/ }
        <p className='keyWord hover:bg-slate-200' onClick={noiseClickHandler}> Low Noise </p> {/*face*/ }
        <p className='keyWord hover:bg-slate-200' onClick={durabilityClickHandler}> Durability </p> {/*mist*/ }
        <p className='keyWord hover:bg-slate-200' onClick={offroadClickHandler}> Off-Roading </p> {/*glow*/ }
        <p className='keyWord hover:bg-slate-200' onClick={highgripClickHnadler}> High Grip</p> {/*boost*/ }

      </div>

    </div>
  )
}

export default SearchBox;

//   .substring(0 , 32)) + "\n" + (i.description.substring(33  , 60)) + "\n" + (i.description.substring(34 , 64))