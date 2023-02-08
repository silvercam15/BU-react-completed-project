const mockPetData = [
  {
    id: 1,
    img_url:
      'https://paradepets.com/.image/t_share/MTkxMzY1Nzg4MTM3NDMyNjc0/shiba-inu.jpg',
    pet_name: 'Bailey',
    pet_description:
      'Kind Tanlin found himself in a high kill shelter in Houston, TX. His foster Dad stepped up to save him on the day he was scheduled to be put to sleep. The shelters in Houston, TX stay full as the daily average intake can be 100 animals a day. The only way to make space can be putting dogs to sleep. It is not because the dogs are not adoptable, its simple math. When you are taking in so many dogs and they are not leaving by adoption, foster or rescue, the only option is to humanely euthanize.',
    gender: 'Male',
    location: 'Tanlin',
    size: 'S',
  },
  {
    id: 2,
    img_url:
      'https://www.purina.co.uk/sites/default/files/2020-12/Dog_1098119012_Teaser.jpg',
    pet_name: 'Byrom',
    pet_description:
      'My name is Byrom and I LOVE my foster family! He can run a 5k with his foster mom and LOVES it! Some things he likes to do is play fetch or play with toys! His favorite things are CUDDLES and HUGS!!! Byrom likes to please his person! He understands and knows “sit” and “jump”. He also understand “no”, “kennel”, and my personal favorites “GOOD BOY and HANDSOME BOY!!!”.',
    gender: 'Male',
    location: 'Tabor',
    size: 'L',
  },
  {
    id: 3,
    img_url:
      'https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445',
    pet_name: 'Dory',
    pet_description:
      'Here is what her foster has to say about her: I was drawn to foster her from her shelter video of her rolling over and loving belly rubs. She loves AFFECTION and SNUGGLES. She will do great in a home with other males or submissive females. She prefers to be the pack leader. My 3 dogs are ok with that.She plays great with my other little pocket pitty Loretta from the shelter She loves walks and will run to the door when she sees you get a leash. She is potty trained and uses the dog door. At night she is good to either SNUGGLE with you or will sleep peacefully in her crate. She loves treats and is very motivated to listen with a tasty snack. She is a beautiful sweet dog that is the perfect size for a forever family. Shelter dogs are always grateful for a forever home.',
    gender: 'Female',
    location: 'San Antonio',
    size: 'L',
  },
  {
    id: 4,
    img_url:
      'https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg',
    pet_name: 'Corry',
    pet_description:
      "A nice person came along and took me in and, now, I am ready to hit the road to your house! Uh, make that “our” house, OK? The rescue requires an Excellent, already-established vet History on a current or previous dog. If you fulfill this requirement, let me know and I will email an application back to you. We would call your vet once you have filled out an application. You don't have to produce vet records beforehand. I am a Beagle/Boxer mix. I am a great girl. ! am 3 years old. I weigh 48 lbs. Those funny-looking 2-legged creatures said I am also microchipped – whatever THAT is. I love my peeps! I love belly rubs. I mean, who doesn't? I'm a great walking buddy. I can entertain myself by throwing and chasing toys! I prefer being with you, of course, but I do very well on my own.",
    gender: 'Female',
    location: 'Golopau',
    size: 'M',
  },
  {
    id: 5,
    img_url: 'https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg',
    pet_name: 'Byran',
    pet_description:
      "Meet Byran! This guy has gone through so much over the past few months and deserves nothing but the absolute best. Byran was hit by a car in November, which resulted in a shattered shoulder and received care from one of our rescue partners. Come to find out, his parents were looking for him, and shortly after his surgery, they were reunited. Unfortunately, this didn't have a happy ending... after they were reunited, we found out he was left outside chained to a tree and lost 17 lbs in just 23 days. Disgraceful, yet this boy is the poster child for forgiveness and love. His tail hasn't stopped wagging since our rescue partners got him back to the rescue.",
    gender: 'Male',
    location: 'Divnomorskoye',
    size: 'S',
  },
  {
    id: 6,
    img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCROsUP2YTtuL_59hQouIoyhm1GKZ3sAYllg&usqp=CAU',
    pet_name: 'Wilek',
    pet_description:
      'Meet Caramel! He is an adorable little guy who had a rocky start but is now ready to find a forever home. Caramel and his littermate, Twix, were found as strays and while we do not have much history on them, they were believed to have poison in their system, which they have since been treated for and have made a full recovery. We are not sure how big he will be when fully grown, but he is approx 5 months old and is under 20 lbs as of now. We think he is some sort terrier/ chih/ maybe shep mix?! Twix and Caramel are currently in a wonderful foster home but now they are getting older, they really need to find a forever family. They are dog and kid friendly and have not been formally tested around cats but are likely not going to have any issues as long as they are properly introduced. Caramel will need a patient and dedicated owner to work with him on basic obedience and potty training. He is `100% puppy and will need someone to keep him busy and understand this is a huge responsibility.',
    gender: 'Male',
    location: 'Casimiro de Abreu',
    size: 'XL',
  },
  {
    id: 7,
    img_url:
      'https://www.rd.com/wp-content/uploads/2022/01/GettyImages-912084898-e1641834261695.jpg',
    pet_name: 'Valenka',
    pet_description:
      'Meet Joy! She is a playful girl with lots of love to give and is looking to find a forever home. Joy was found as a stray, and while we do not have any history, she is believed to be 1-2 years old and around 52 lbs. She seems to be fully grown and is a GSD mix. Joy is a very sweet girl who loves just about anyone and has done well around children and other dogs.Joy would do best in a home with another dog to keep her company or with an owner who can keep her active and busy throughout the day. She has a lot of puppy/young dog energy and needs someone to work with her on basic training. She cannot live in a home with cats. She seems too interested in them but has not attempted to harm them. Joy needs a home with access to a fenced yard and would do best with someone familiar with the breed or similar breeds.',
    gender: 'Female',
    location: 'Yefimovskiy',
    size: 'M',
  },
  {
    id: 8,
    img_url:
      'https://cf.ltkcdn.net/dogs/puppies/images/std/321597-800x515-cutest-puppy-videos.jpg',
    pet_name: 'Lona',
    pet_description:
      'Meet Frida! She is a sweet girl who has been through so much at just four years old and deserves to find her forever family. Frida was adopted a few years ago at a local TX shelter and, unfortunately, was ditched two years later by her owner due to her moving situation. Thankfully, Frida was found by her wonderful foster parents and has come such a long way since being abandoned. Her foster parents have had nothing but positive things to say about Frida and know she will make an excellent dog with the love and care of a forever family. Frida can be shy at first, but the moment she learns she can trust you, she will be the best girl.',
    gender: 'Non-binary',
    location: 'Kultayevo',
    size: 'M',
  },
  {
    id: 9,
    img_url:
      'https://mediaproxy.salon.com/width/1200/https://media.salon.com/2022/06/smiling-dog-0624221.jpg',
    pet_name: 'Carmencita',
    pet_description:
      "Meet Traveler! He is an adorable boxer mix with big brown puppy eyes. Traveler is approximately 1 year old and ready to find a forever family. As of right now, Traveler does not seem to be very fond of other male dogs and would do best in a home with a female or alone. Although this could change, it will take time and proper introductions. Traveler will need a patient owner dedicated to socializing him with the world and helping him become the best dog he can be. He is in a foster home with other dogs and has done well, but he would do best in a home as an only dog or with a female dog close in size. Traveler is fairly high-energy and will need an active home to keep up with I'm. He would also benefit from basic training. He must go to a home with a yard. He will need someone to work with him on basic training but he seems to be housebroken and crate trained. He would also do best in a home with older children since he might knock smaller kids over accidentally.",
    gender: 'Female',
    location: 'Mamboma',
    size: '2XL',
  },
  {
    id: 10,
    img_url:
      'https://vcahospitals.com/-/media/2/vca/images/lifelearn-images-foldered/10813/french_bulldog_4713013_480scaler.ashx',
    pet_name: 'Lonnie',
    pet_description:
      'Sofie is a super sweet girl! - she is around 3 years old and approximately 62 lbs. Sofie was picked up as a stray in Texas and taken to a high kill shelter. After sitting there for months with no interest, the shelter put this beautiful girl on the list to be euthanized. We went and got her out of there before that could happen and we are so happy we did! She is such a gentle girl, she takes her treats so softly and is eager to please and be next to her human. She loves going on walks and does well on the leash! Sofie is so easy going, she would fit in with any type of family. Sofie is even tempered, gentle, and has some basic training. She is also house trained and crate trained. She is good with people, dogs, and children. Sofie would love to be a companion to someone who works from home- the more snuggle time the better!',
    gender: 'Male',
    location: 'Dinghuo',
    size: 'XL',
  },
  {
    id: 11,
    img_url:
      'https://paradepets.com/.image/t_share/MTkxMzY1Nzg4NDA2MzI2ODgy/cutest-dog-breeds-yorkshire-terrier.jpg',
    pet_name: 'Gretel',
    pet_description:
      'This sweet “Scooby Doo” senior is ready to find his forever home. Chico is a estimated to be around 8 years old. He was rescued from a high-kill shelter in Texas with hours left to live (likely due to his old age and finding himself in a shelter). Chico is guessed to be a Shepherd/Black Mouth Cur mix. He is a big boy, weighing in around 68 pounds. He is heartworm negative, neutered, up to date on all vaccines and monthly preventatives. Poor Chico has been bounced around from shelter to boarding facility - he is ready (and so deserving) to land himself a warm and finally safe home.Although 8, Chico is an active boy who would love a big backyard to stretch his long legs in - and he would LOVE a companion who takes him for long walks - but can curl up in the couch with him afterwards.',
    gender: 'Agender',
    location: 'Zhangjiapan',
    size: 'XS',
  },
  {
    id: 12,
    img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCROsUP2YTtuL_59hQouIoyhm1GKZ3sAYllg&usqp=CAU',
    pet_name: 'Selene',
    pet_description:
      'Vance is a smiley pit bull terrier who was rescued from a high-kill shelter in Texas moments before he was to be euthanized for space. He is a big, sweet and happy boy, and we love that he always has the biggest smile on his face! He is super friendly and loves to play with other dogs- he is submissive and takes social cues well should his new pup friend need a few days to warm up to him. Vance loves being outside and would do very well in an active home with another pup-sibling and family who can provide him with the stimulation, play, and attention he craves! He is great on a leash and would be the perfect hiking buddy. Vance is good with people and great with kids, but due to his size, we suggest a home with children over the age of 10! He is an intelligent boy, eager to learn and very trainable! He sits for a treat!',
    gender: 'Female',
    location: 'Bulupayung',
    size: 'L',
  },
  {
    id: 13,
    img_url:
      'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg',
    pet_name: 'Laurent',
    pet_description:
      'Do you or someone you know have the ability to be birch’s hero? Do you want to rock this little guys world and make him realize humans aren’t that bad? special needs: fearful - will need an experienced owner, fenced in yard, and time to decompress. Birch would like to be the only pet while he is settling in his new home. He is an anxious little fella that is being well-managed with Prozac. He loves his toys. He is house trained but can have occasional accidents (but trained to use pee pads). Once he warms up, he is a cuddly little doodle bug that will shower you in kisses. He needs a patient, understanding family that will give him the time he needs to come out of his shell. NOTE - If this dog is listed on this site, he/she is still currently available; consideration is given to those who submit actual applications first. We receive an enormous amount of inquiries daily. Serious applicants, please apply! *NOTE: Meet and Greets are only conducted after an application has been submitted and approved',
    gender: 'Male',
    location: 'Tocok',
    size: 'L',
  },
  {
    id: 14,
    img_url:
      'https://d2rd7etdn93tqb.cloudfront.net/wp-content/uploads/2020/09/instagram-thechowcalledziggy-chow-chow-dog.jpg',
    pet_name: 'Joseito',
    pet_description:
      'Hi! My name is Allie! I am a 14 lbs, 10 week old puppy! My mom is a medium sized about 25 lbs mix breed, she might have some corgi in her. My dad is unknown. Unfortunately my mom was left alone in a back yard and got out. A few weeks later, surprise! We were born so my mom’s owners decided to surrender her and all her babies to a rescue. I have been vaccinated, dewormed and microchipped. Since Im too young to be spayed I will be going home under a spay contract so my new family can take care of it once I am old enough for that. I am still being fostered in the Arlington, MA area. If you are interested in me please visit my rescues website at www.RociosRescues.org for adoption information and applications. Please disregard the transport information and fees as Im already in the MA area.',
    gender: 'Male',
    location: 'Boncis',
    size: '2XL',
  },
  {
    id: 15,
    img_url:
      'https://media1.popsugar-assets.com/files/thumbor/MSIju8bytDnZwRnlj5W6rsUXdto/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/10/22/706/n/44498184/00a3e8fab6f9e4be_GettyImages-637995704/i/cute-photos-dogs-in-winter.jpg',
    pet_name: 'Mendy',
    pet_description:
      'MEET UNO! Is he the one for you? Uno is a goofy, clunky, fun-loving dude. His quirks included rubbing up against brick walls and getting his lip stuck on his teefs. He is as soft as fleece and makes a great cuddle partner. He is dog friendly and could do well with an equally energetic brother or sister. Uno is currently up to date on all vaccinations, has been spayed/neutered, microchipped and been seen by our vet team.',
    gender: 'Male',
    location: 'Samobor',
    size: '2XL',
  },
];

export default mockPetData;
