'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('landmarks').del()
    .then(function () {
      return Promise.all([
      // Inserts seed entries
      knex('landmarks').insert(
        {
          id: 1,
          name: 'Willis Case Golf Course',
          description: 'City-Owned Golf course established in 1928. Formerly, the Northwest Denver country club owned by the El Jebel Shriners.',
          photo_url_recent: '/assets/williscasegolfcourserecent.jpg',
          photo_url_2: '/assets/williscasepresent.jpeg',
          address:'4999 Vrain Street',
          longitude: -105.049044,
          latitude: 39.787329,
          neighborhood: 'Berkeley'
        }),
      knex('landmarks').insert(
        {
          id: 2,
          name: 'Mirador at Tennyson',
          description: 'Adjacent to the Willis Case Golf Course, the  $12 million Mirador Condominiums housing development project (opening March 2017) was once known as the El Jebel Shrine. 5.6 acres made up the El Jebel land, until they sold in 2015. The El Jebel shrine was established in 1929, in response to the organization\'s growing size of 5,500. The Shriners once owned all the land surrounding the temple, which at the time, was a country club and golf course for Highland\'s elite. But in 1936 they were forced to sell to the city of Denver, due to financial trouble during the Great Depression. The Shriners, or \'Ancient Arabic Order of the Nobles of the Mystic Shrine\' formed in response to the  Freemasons. Shriner organizations were established with the express purpose of having fun, finding their Freemason bretherin \'too serious\'. The first Denver Shriners met for the first time in 1887 in downtown Denver. At the turn of the 20th century, it is estimated that between 30-40% of adult Males belonged to some sort of fraternal organization. These organizations were often made up of political, economic \& socially important men responsible for shaping governments, cities and development. But that\'s not all these organizations were known for: Shriner organizations focus was always on philanthropy, and to this day, they provide free healthcare and access to their 22 hospitals to children regardless of their family\'s ability to pay.',
          photo_url_recent: '/assets/eljebel_modern.jpg',
          photo_url_2: '/assets/eljebelold.jpg',
          address:'3443 S Galena St',
          longitude: -105.04702,
          latitude: 39.787873,
          neighborhood: 'Berkeley'
        }),
      knex('landmarks').insert(
        {
          id: 3,
          name: 'Lakeside Amusement Park',
          description: 'A family-owned amusement park formally known as \'White City\' when it opened in 1908. It was named White City for it\'s glittering display of 100,000 lights and as an homage to another amusement park in Chicago, known for its heavy use of white Plaster of Paris. It is one of the oldest running amusement parks in the Country. It was originally owned by Adolph Zang, one of Denver\'s beer and real-estate magnates. Zang was also responsible for Zang Brewery (which is now the Denver Aquarium).',
          photo_url_recent: '/assets/lakesidenew.jpg',
          photo_url_2: '/assets/lakeside1908.png',
          address:'4601 Sheridan Blvd',
          longitude: -105.0543345,
          latitude: 39.7792034,
          neighborhood: 'Berkeley'
        }),
      knex('landmarks').insert(
        {
          id: 4,
          name: 'Skinner Middle School',
          description: 'Built in 1922, Skinner was the first middle school in Denver.',
          photo_url_recent: '/assets/skinnermodern.jpg',
          photo_url_2: '',
          address:'3435 W 40th Ave',
          longitude: -105.0314378,
          latitude: 39.7724218,
          neighborhood: 'Berkeley'
        }),
      knex('landmarks').insert(
        {
          id: 5,
          name: 'Billy\'s Inn',
          description: 'Originally a service and gas station in the 1920s, Billy\'s inn operated as an actual inn and food establishment when it was bought by Billy and Judy smith in 1933. The kitchen closed in the early 60s and was run as a bar by Billy\'s son in law until he sold to developers in 2008. Currently, Billy\'s Inn is a neighborhood bar and burger joint.',
          photo_url_recent: '/assets/billyinnnew.jpg',
          photo_url_2: '',
          address:'4403 Lowell Blvd',
          longitude: -105.034978,
          latitude: 39.7769733,
          neighborhood: 'Berkeley'
        }),
      knex('landmarks').insert(
        {
          id: 6,
          name: 'Berkeley Park',
          description: 'Berkeley Park and the surrounding area was once known as Berkeley Farms, established as an alfalfa farm in 1879 by John Brisbane Walker, a developer and businessman of the time. The Berkeley Farm and Cattle company was organized to manage the farm, and the lake at Berkeley park was developed as a resevoir by the Rocky Mountain Ditch Company. In 1887, Walker sold part of the farm land to the Jesuits, who used it to establish the Sacred Heart College, or Regis University, as we know it today. In 1888, Walker sold his farm, and the land was subdivided, sold and commissioned for housing.',
          photo_url_recent: '/assets/berkeleyparknew.jpg',
          photo_url_2: '/assets/berkeleylake1914.png',
          address:'4544 W 46th Ave',
          longitude: -105.0460611,
          latitude: 39.7806425,
          neighborhood: 'Berkeley'
        }),
      knex('landmarks').insert(
        {
          id: 7,
          name: 'Oriental Theatre',
          description: 'Opened in 1927, the Oriental got it\s start as a theatre for showcasing films. It was built by Leo A. Desjardins, who modeled it after a middle-eastern palace. In the 1960s, the dark days of the movie theatre were underway and the Oriental couldn\'t muster much of an audience. The owners resorted to only showing adult films and by the 1970s, it was forced to close. At one point in the 80s, it was home to a church, and then shut back down. It sat for 45 years in disrepair until it was bought in 2005 and turned into a live-music venue. Unfortunately, it had to immediately close only a couple of years later due to the lack of structural integrity threatening the venue-goers lives. After fixes to the building were completed, it was reopened to the public in 2012, and today hosts some of the Denver\'s largest events as well as national acts.',
          photo_url_recent: '/assets/orientalnewcolor.jpg',
          photo_url_2: '/assets/orientalold.jpg',
          address:'4335 W 44th Avenue',
          longitude: -105.0436002,
          latitude: 39.7768535,
          neighborhood: 'Berkeley'
        }),
      knex('landmarks').insert(
        {
          id: 8,
          name: 'Smiley Library',
          description: 'Built in 1918, the Smiley library was one of the original libraries partially funded by the Carnegie Corporation. Costing 20,000 to build, the library was deisgned by Park French of Mountjoy, French & Frewen of Denver and modeled off of an English Cottage. The libary was named after William H Smiley, a Denver school teacher and superintendent. He was known to many as the \'Grand old man of Education\'. In the 1980s, the Smiley library became the \'Northwest Denver Toy Library\', run solely by neighborhood volunteers.' ,
          photo_url_recent: '/assets/smileylibrarynew.jpg',
          photo_url_2: '/assets/smileyinsideold.jpg',
          address:'4501 W. 46th Avenue',
          longitude: -105.045116,
          latitude: 39.780535,
          neighborhood: 'Berkeley'
        }),
      knex('landmarks').insert(
        {
          id: 9,
          name: 'Shops of Tennyson St.',
          description: 'By 1852, 450 people lived on and around the Shops of Tennyson street between 38th avenue and 44th. The Berkeley area became popular because of it\'s close proximity to Elitch\'s-home to a botanical garden, zoo and amusement park located on the corner of 38th and Tennyson. This, along with access to the area by trolley in  1888, known as \'The Berkeley Motor\', made Berkeley grow steadily, and between 1926 and 1950, the number of properties on Tennyson between 38th and 44th grew 50%. In 1896, the Alcott post office was established, followed quickly by Eaker\'s grocery store, a movie theatre, a drug store, and a furniture and hardware store. The shopping area went through a depression in the 80s and 90s, as did most commercial areas in NW Denver. By the 2000s, growth started to pick up again, and today in 2017, the shops and restaurants on Tennyson are some of the trendiest and busiest in Denver. Dozens of new developments are going up left and right, literally. To visit from one week to the next is jarring, as the street is constantly changing.',
          photo_url_recent: '/assets/tennysonstmodern.jpg',
          photo_url_2: '/assets/tennyson_oriental_old.png',
          address:'Tennyson St between 38th and 44th Avenues.',
          longitude: -105.0440087,
          latitude: 39.7693728,
          neighborhood: 'Berkeley'
        }),
      knex('landmarks').insert(
        {
          id: 10,
          name: 'Argo Smelter',
          description: 'The story begins with the discovery of gold and silver in Colorado in 1858 and the "Rush to the Rockies" that followed, bringing hordes of fortune seekers to the territory. A crisis developed as business leaders realized that the mineral wealth was untouchable unless the metals could be separated from the complex ores that held them - settlers were leaving and eastern investors were withdrawing funds. What followed was a quest to find an economical, efficient and reliable method for recovering minerals - the region\'s survival was at stake. Entrepreneurs, businessmen, scientists and charlatans proposed remedies, but it was a professor of chemistry from Brown University, Nathaniel P. Hill, who found the solution and opened the Boston and Colorado Smelter near Black Hawk in 1867. The smelter was wildly successful and soon outgrew its canyon location, moving in 1878 to a hill north of Denver and close to the Colorado Central and Denver Pacific Railroads. In 1879, Argo was incorporated as a village, becoming a factory town with housing for its workers. The new plant covered six acres between what is now West 44th and 47th Avenues, and Fox to Pecos Street. 350 men, mostly English, Welsh, Irish, Scotts and Swedes worked at the Smelter. The Boston and Colorado organized a classic company town, with three hotels for single men, houses for families and several company stores. The village was named Argo, after the mythical ship sailed by Jason in search of the golden fleece, and people soon referred to the smelter by the same name. The firm\'s success lead to the construction of more smelting operations in the area, the Omaha and Grant in 1882 and the Globe in 1886. Changes in technology, and the depletion of the state\'s mineral-rich ores made the Boston and Colorado Smelter obsolete by 1902. A fire in the smelter\'s refinery in 1906 spelled the end of the smelter and the town of Argo, but the legacy of mining and refining lives on in the neighborhood in the remains of ASARCO\'s Globe plant. Today, the site is designated as a SuperFund: A United States federal government program designed to fund the cleanup of sites contaminated with hazardous substances and pollutants.',
          photo_url_recent: '/assets/argosmeltertoday.jpg',
          photo_url_2: '/assets/argosmelterpast.jpg',
          address:'Vasquez Boulevard and I-70',
          longitude: -104.9490891,
          latitude: 39.7835662,
          neighborhood: 'Sunnyside'
        }),
      knex('landmarks').insert(
        {
          id: 11,
          name: 'Smedley Elementary Public School',
          description: 'Establsiehd in 1902. Smedley closed in 2007, due to low attendence. Currently is houses students who are waiting on renovations in their own schools, and plans may be in the works to turn it into a Montessori school, though many neighbors oppose. The school was built in the late 1800s by Dentist and Quaker, \'Dr. William Smedley\', who moved to Colorado for health reasons.',
          photo_url_recent: '/assets/smedleynew.jpg',
          photo_url_2: '/assets/smedley1902.jpeg',
          address:'4250 Shoshone St',
          longitude: -105.0096069,
          latitude: 39.7747505,
          neighborhood: 'Sunnyside'
        }),
      knex('landmarks').insert(
        {
          id: 12,
          name: 'Chubby\'s',
          description: 'In 1951, Stella Cordova, the now 99 year-old matriarch of Chubby\'s worked as a maid and a dishwasher before noticing the "Cook Wanted" sign at a burger drive-in at 1231 West 38th, near her home. She got the job, but business was slow, so the owner eventually decided to call it quits. He asked Stella if she wanted to buy the place, but Stella, who was making 85 cents an hour, didn\'t have nearly enough cash. Eager to sell, the owner made Stella a deal: $2,000 for the joint, $500 down, the rest to be made in payments. Stella couldn\'t say no, so she borrowed the down payment from a daughter and agreed to pay $50 a month until the building was paid off. She decided to keep the restaurant\'s name, Chubby\'s. For the next few months, Stella continued to peddle burgers, fries, ice cream and shakes with no increase in customers. So she started serving tacos, burritos and tostadas, prepared the way she was taught by her grandmother back on the farm: with a heavy dose of spicy green chile. The formula worked, Chubby\'s started to boom, and like that, the 59-year-old Stella Cordova had a bona fide neighborhood institution on her hands — the sole Mexican-American eatery in what was then a predominantly Italian neighborhood.',
          photo_url_recent: '/assets/chubbysnew2.jpg',
          photo_url_2: '/assets/chubbysnew.jpg',
          address:'1231 W 38th Ave',
          longitude: -105.0015035,
          latitude: 39.7693937,
          neighborhood: 'Sunnyside'
        }),
      knex('landmarks').insert(
        {
          id: 13,
          name: 'Gaetano\'s',
          description: 'A family-run Italian restaurant open in the 1930s by Ralph and Mamie Smaldone. The Smaldone\'s had nine children-6 of them boys, who would grow up to be some of Denver\'s most infamous mobsters. The Smaldone family started out as bootleggers, spent time in and out of jail, and switched to gambling when prohibition ended. They found success in their mother\'s restaurant, and renamed it Gaetano\'s (Italian for Clyde) in the 1940s. They ran a successful undercover gambling ring above the restaurant. Invite-only access was by a secret entrance in the men\'s bathroom. The Gaetano\'s ruled North Denver from the 1930s to the 1970s, but the brothers were known as Robin-hood\'s of the Northwest Denver neighborhood-helping out those in need, and being life-long devout Catholics at the local Italian Mt. Carmel Church.',
          photo_url_recent: '/assets/gaetanosnew.jpg',
          photo_url_2: '/assets/smaldonefamily.jpg', //stretched
          address:'3760 Tejon St',
          longitude: -105.0110518,
          latitude: 339.7691309,
          neighborhood: 'Sunnyside'
        }),
      knex('landmarks').insert(
        {
          id: 14,
          name: 'Panaderia Rosales Bakery',
          description: 'Opened in 1976, Panaderia Rosales was one of the few businesses in the area. Owned by the Rosales family, recent immigrants at the time from Ciudad Juarez in Mexico, the store is now owned by daughter, Laura Rosales. Regardless of the decrease of latino families living in the gentrified area, business has not slowed. Laura serves around 500 customers a day, serving hand-made mexican pastries and breads, that can\t be replicated.',
          photo_url_recent: '/assets/panaderiatoday.jpg',
          photo_url_2: '',
          address:' 2636 W 32nd Ave,',
          longitude: -105.0199399,
          latitude: 39.7619113,
          neighborhood: 'Lower Highland'
        }),
      knex('landmarks').insert(
        {
          id: 15,
          name: 'Potter Highland',
          description: 'A historic disctrict bound by 38th on the North, Zuni on the East, Federal on the West and  32nd on the south, Potter Highland is one of the oldest areas of North Denver. In 1863, Revered Walter McDuffie Potter visited Denver and immediately saw a need for soul-saving in the rough and tumble town. He returned  at the end of the year, and found the first Baptist church of Denver. Potter and his Sister homesteaded 320 acres in North Denver with plans for another church. By 1865, Potter became ill and died a year later. The land eventually became the six-block residential area known as Potter Highland in 1872.',
          photo_url_recent: '/assets/potterhighland.png',
          photo_url_2: '/assets/denverhighland.png',
          address:'2701 W 35th Ave',
          longitude: -105.0205138,
          latitude: 39.7656252,
          neighborhood: 'Lower Higland'
        }),
      knex('landmarks').insert(
        {
          id: 16,
          name: 'Highlands Garden Village',
          description: 'Once home to Elitch Gardens, one of the most popular amusement destinations in Colorado. A seasonal family-owned amusement park, theatre, zoo, and botanical garden owned and operated by widow, Mary Elitch (the first woman to own and operate a zoo). The Zoo portion of the park was opened in 1890 on 16 acres of former farmland. It was the first zoo west of Chicago, and many of the animals were donated by P.T. Barnum. In 1893, the Elitch Gardens Theatre was opened and housed the oldest summerstock theatre in the country. The first films exhibited in Colorado were shown at the theatre in 1896, and many famous actressess and actors of the time passed through.  It was during this early time in Elitch\'s history that the slogan was coined, \'Not to See Elitch\'s is Not to See Denver\'. In 1916, the park was sold to John Mulvihill. In 1917, the Trocadero Ballroom was added, and in 1928 a new carousel was built. Mulvihill died in 1930, and ownership transferred to his son-in-law. In the mid 1930s, The Trocadero ballroom became associated with an array of big band and swing musicians touring through for the weekly, \'Evening at the Troc\' ballroom dance. The event was broadcast nationally during the summer. The park went through more management changes, and in 1975, the Trocadero ballroom was torn down and replaced by Skee Ball and Arcade games. The Theatre closed in 1991, and in 1985, Elitch\'s relocated closer to downtown and was absorbed by the Amusement Park chain \'Six Flags\'. In  2010, developers bought the now 26 acres of land and began construction on what is now Highlands Garden Village-a mix of residential homes, apartments and commercial businesses.',
          photo_url_recent: '/assets/elitchgardensnew.jpg',
          photo_url_2: '/assets/elitchgardensold.jpg',
          address:'3755 Tennyson St',
          longitude: -105.0444225,
          latitude: 39.7681262,
          neighborhood: 'West Higland'
        }),
      knex('landmarks').insert(
        {
          id: 17,
          name: 'Elitch Garden Theatre',
          description: 'An addition to the Elitch Gardens Amusement park, and opened in 1896, the Elitch theatre was Colorado\'s first cultural center. It was the first Summer Stock theatre in the nation, and hosted the first screening of a moving picture in 1896. Known stars of the time such as Grace Kelly, Douglas Fairbanks and Antoinette \'Tony\', Perry (namesake of the Tony awards) passed through Elitch, and it was known as a restful, desirable place to perform. Mary Elitch, the owner of the theatre, created a school of Drama, Dance and art, where children could explore their talents.',
          photo_url_recent: '/assets/elitchgardennew2.jpg',
          photo_url_2: '/assets/elitchtheatre.jpg',
          address:'3755 Tennyson St',
          longitude: -105.046382,
          latitude: 39.7682481,
          neighborhood: 'West Higland'
        }),
      knex('landmarks').insert(
        {
          id: 18,
          name: 'Highlands 32',
          description: 'Before the controversial and drawn-out development plan began in 2011, Highlands 32 was a baptist church with it\'s roots in Highlands since 1893. In 1930, it moved to the location of the present-day development. When the church moved locations, developers The West Highland community fought hard against this particular development project that was originally under contract through RedPeak Properties for $4.55 million. A neighborhood coalition was formed under the banner \'No High Rises in West Highland\', and for three years a battle that included protests, verbal attacks, and a lawsuit against the city ensued. In the end the land was re-sold to another development group, and construction started up again. The highrise apartments are currently being leased out.',
          photo_url_recent: '/assets/bethedennew.jpg',
          photo_url_2: '',
          address:'3251 Lowell Blvd',
          longitude: -105.0347261,
          latitude: 39.7630768,
          neighborhood: 'West Higland'
        }),
      knex('landmarks').insert(
        {
          id: 19,
          name: 'Woodbury Library',
          description: 'Originally opened in 1913, the library was the fourth in Denver to be funded by Carnegie. It was named after WWI General Roger Williams Woodbury. After the Civil War, Woodbury became an editor and proprietor of the local Denver Daily Tribune,  President of the Union Bank of Denver, President of the California Eastern Railway Company and President of the Chamber of Commerce. Some say General Woodbury was one of the most influential men in Denver and Colorado.',
          photo_url_recent: '/assets/woodburynew.jpg',
          photo_url_2: '/assets/woodburyold.jpg',
          address:'3265 Federal Boulevard',
          longitude: -105.025747,
          latitude: 39.763135,
          neighborhood: 'West Higland'
        }),
      knex('landmarks').insert(
        {
          id: 20,
          name: 'Little Sisters of the Poor',
          description: 'The organization is an international congregation of Roman Catholic women who serve the elderly poor in need of care. The location at 29th street was founded in 1911 by a prominent citizen of the time, J.K. Mullen and his wife, Catherine Smith. In 1975, two new wings were added, and the nursing care facility is still active today.',
          photo_url_recent: '/assets/littlesistersnew.jpg',
          photo_url_2: '/assets/littlesistersofthepoor1920.jpg',
          address:'3629 W 29th Ave,',
          longitude: -105.0359076,
          latitude: 39.7593502,
          neighborhood: 'West Higland'
        }),
      knex('landmarks').insert(
        {
          id: 21,
          name: 'Aquarium',
          description: 'Originally called Ocean Journey, the aquarium opened in 1999. The building the aquarium is housed in has some very interesting history. In 1859, a businessman named John Good started a brewery in the building, naming it Rocky Mountain Brewery. It was one of very few breweries in the area. A recently emigrated Bavarian beer-brewer, Philip Zang, moved to Denver seeking gold. When that didn\'t pan out, he turned to working as the superintendent for John Good from 1869 until 1871, when he bought out his employer and continued business alone. Philip renamed the Brewery \'Philip Zang \& Co\', and in 1882, Philip\'s son, Adolph, took over his father\'s business. Adolph turned the Zang Brewery into one of the most successful breweries west of the Mississippi River. The brewery was expanded, and production was increased to over 65,000 barrels a year, making it the largest brewery between St. Louis and San Francisco. An English syndicate bought the business in 1889, but Adolph continued to manage it until his retirement in 1913. Due to the selling of the brewery, as well as his mining holding interests, Adolph was listed as one of the 33 millionaires living in Denver at the time. A prominent figure, he was elected for a term as the city\'s Alderman and was engaged as the Superintendent. The brewery continued successfully, becoming the largest beer producer in the West until Prohibition.',
          photo_url_recent: '/assets/zangnew.jpg',
          photo_url_2: '/assets/zang_brewing_co_denver.jpg',
          address:'700 Water St',
          longitude: -105.0140163,
          latitude: 39.7518244,
          neighborhood: 'Lower Higland'
        }),
      knex('landmarks').insert(
        {
          id: 22,
          name: 'My Brother\'s Bar',
          description: 'Recently sold in January 2017 to family friends, My Brother\'s Bar, was bought by the Karagas brothers in the 1970s. It is the oldest Bar in the city  and was originally opened in 1873. At first known as the Highland House, it went through several ownership and name changes, and at one point Neal Cassady is said to have spent a great deal of time there, running up a hefty tab. Several years ago, it was time for the brothers to officially retire. Many offers were made to buy the lot- one for $3 million by a development company responsible for recently building mammoth apartment complexes in the area. Eventually though, the bar was bought by family friends who had spend much of their time working at the bar. The change in ownership will not change the vibe of the bar too much, and they plan to keep much the same, including the name.',
          photo_url_recent: '/assets/brothersbaroutsidemodern.jpeg',
          photo_url_2: '/assets/mybrothersbarold.jpg',
          address:'2376 15th st',
          longitude: -105.0093761,
          latitude: 39.756183,
          neighborhood: 'Lower Higland'
        }),
      knex('landmarks').insert(
        {
          id: 23,
          name: 'Scottish Highland Historic District',
          description: 'The Highland Park Scottish Village represents the only fragment left of Denver\'s unique High Victorian Romantic suburbs. The layout is similar to old European cities with meandering streets and a large park park, Highland park in its center. Originally, it was the largest holding in the Highlands, running diagonally from North 38th avenue, to South 26th avenue, and contained on the east by Zuni and on the west by Lowell Boulevard, but presently it has shrunked to nearly two thirds its original size, and has mostly been replaced with the more traditional grid. It was founded by William A. Bell and General William Jackson Palmer, and was one of the earliest of the 36 subdivisions formed in North Denver. The large lots were first advertised in the spring of 1874 and catered to the wealthy, being reminiscent of the famed Highland Park suburb in Chicago. However, the lots did not sell well, and the lots were re-subdivided to half their size.',
          photo_url_recent: '/assets/scottishhighland.png',
          photo_url_2: '/assets/denver_lohi.png',
          address:'2498 W Argyle Pl',
          longitude: -104.990251,
          latitude: 39.7392358,
          neighborhood: 'Lower Higland'
        }),
      knex('landmarks').insert(
        {
          id: 24,
          name: 'Centura Senior Residences',
          description: 'Founded originally in 1894 as a sanitorium for Tuburculosis under the direction of Reverend Frederick Oakes. At the time, Colorado, and Highland in particular had a reputation for being a place of clean \& dry air, suitable for those with consumption. The Oakes home was the first organized institution to care for tuberculosis victims in Colorado, and the second in the country.',
          photo_url_recent: '/assets/oakeshomemodern.jpg',
          photo_url_2: '/assets/oakeshome1905.jpeg',
          address:'2835 W 32nd Ave',
          longitude: -105.0231845,
          latitude: 39.7624782,
          neighborhood: 'Lower Higland'
        }),
      knex('landmarks').insert(
        {
          id: 25,
          name: 'Our Lady of Mount Carmel Church',
          description: 'Italian immigrants looking for work as farmers, moved to the Platte River valley in the late 1800s for its cheap housing, good soil and proximity to water. Before Our Lady of Mount Carmel Church was built in 1894, the Italian, predominantly Catholic population worshipped at St. Patrick\'s, an Irish Catholic church in the area. Seeing a need for their own parish, recently arrived Father Lepore, with the help of others dedicated a small church. Lepore was a champion for the poor Italian immigrants who were often targeted for being WOPS (with out passports). Mother Cabrini (Italian-born foundress of the Missionary Sisters of the Sacred Heart, and the first U.S. citizen to be canonized as a saint), was another advocate for the Italians and the building of the Mount Carmel church. She set up a grade school in the church and attendence was so high, the children used foggy window panes and their own fingers to do their lessons.',
          photo_url_recent: '/assets/mountcarmelnew.jpg',
          photo_url_2: '/assets/mountcarmelold.jpg',
          address:'3549 Navajo Street',
          longitude: -105.0045395,
          latitude: 39.7666764,
          neighborhood: 'Lower Higland'
        }),
      knex('landmarks').insert(
        {
          id: 26,
          name: 'Our Lady of Guadalupe Church',
          description: 'Established in 1936, our Lady of Guadalupe is a Catholic church that was built to serve the needs of the growing hispanic population in the Highlands. At the same time as waves of Italian immigrants began moving farther outside of Denver, settling in suburbs and other cities, Latino immigrants began settling in the same area, taking up the mantle. By the 1970s, the neighborhood was 60% latino. Though the hispanic population has begun to dwindle since the early 2000s, due mainly to rising housing costs, Our Lady of Guadalupe church still serves an active community.',
          photo_url_recent: '/assets/ourladyofguadalupenew.jpg',
          photo_url_2: '/assets/',
          address:'1209 W 36th Ave',
          longitude: -105.0010135,
          latitude: 39.7670449,
          neighborhood: 'Lower Higland'
        }),
      knex('landmarks').insert(
        {
          id: 27,
          name: 'Carbon Coffee',
          description: 'Originally known as Paris on the Platte, this building has a long coffee tradition as being billed as one of the oldest Coffee shops in Denver. Established in 1986, Paris had a reputation for being the grungy, artists hangout of young Denver-ites in the 90s and 2000s. In 2015, the building was sold and turned into Carbon Coffee-a coffeeshop/doughnut dispensary/bar serving the ever-growing highland population.',
          photo_url_recent: '/assets/parisnew.jpg',
          photo_url_2: '/assets/parisontheplatteold.jpg',
          address:'1553 Platte St',
          longitude: -105.0085572,
          latitude: 39.7573081,
          neighborhood: 'Lower Higland'
        }),
      knex('landmarks').insert(
        {
          id: 28,
          name: 'Linger',
          description: 'Linger, along with some of the hippest restaurants in the area were all opened by Denver real-estate mogul, Paul Tamurello (responsible for Little Man Ice cream and Root Down-both in restored historic buildings). Before Linger was a restaurant, it was a well-known Mortuary. Opened by undertakers, John and Emma Olinger in 1890, the business started simply enough, but grew rapidly, and by 1900, their 15 year-old son, George dropped out of school to help run the place. He expanded the Mortuary and in 1917, Olinger\'s was tasked with embalming the famous \'Buffalo Bill\'. Over the years, George expanded his funeral empire, established a plethora of good-works projects around the area, and was known by many as an honorable, good-natured man. Olinger once wrote: “Watching people, one sometimes thinks that most of them expect to find life ready-made and hope to find it fortunate and happy; but we never find life—all we find is raw materials, materials out of which we have to make life.  Today, the giant Neon Olinger Mortuary signs still hangs high above the original building that has since been converted into one of Denver\'s hippest restaurants. The legacy of George Olinger lives on, and his words of wisdom ring true for those who moved to the Highlands when it was only a fledgling neighborhood, looking to make something of themselves in the 1800s as well as to those waves of people today, scrambling to buy property in the now, hip and trendy area.',
          photo_url_recent: '/assets/lingernew2.jpg',
          photo_url_2: '/assets/lingerold2.jpg',
          address:'2030 W 30th Ave',
          longitude: -105.0114406,
          latitude: 39.759526,
          neighborhood: 'Lower Higland'
        }),
      knex('landmarks').insert(
        {
          id: 29,
          name: 'Patsy\'s',
          description: 'Established in 1921, Patsy\'s was Denver\'s oldest Italian restaurant serving up classic fare to the Northwest denver neighborhood. The owners closed the restaurant due to ailing health in 2016. The space is slated to open as a new restaurant in the coming year.',
          photo_url_recent: '/assets/patsysnew.jpg',
          photo_url_2: '/assets/patsysold.png',
          address:'3651 Navajo St',
          longitude: -105.0043387,
          latitude: 39.7677387,
          neighborhood: 'Lower Higland'
        }),
      knex('landmarks').insert(
        {
          id: 30,
          name: 'North Highschool',
          description: 'Established in 1883, North Highschool was built to serve the growing community of Highland who at the time had only one single room school house for the area. In 1911 the building was expanded to accomodate growing class sizes, and today North High serves over 3000 students.',
          photo_url_recent: '/assets/northhighnew.jpg',
          photo_url_2: '/assets/northhighold.jpg',
          address:'2960 Speer Blvd',
          longitude: -105.0229181,
          latitude: 39.7611868,
          neighborhood: 'Lower Higland'
        }),
      knex('landmarks').insert(
        {
          id: 31,
          name: 'Lumber Baron Inn \& Gardens',
          description: 'A Victorian Bed \& Breakfast opened at the end of 2016, the Lumber Baron Inn, is a full service event venue. Before it\'s new remodel, the home served as a single family home as was known as the John Mouat Mansion. Built in 1890, in the Potter Highland Historic district, it stood as a classic example of the Victorian Queen-Anne style architecture of the day. John Mouat, the original owner, was a lumber baron who lost his fortune in the Silver crash of 1893. In the 1970s, the mansion had been converted into low-income apartment units and was the site of an unsolved double murder of two young girls. For many years the mansion stood in disrepair, and was considered haunted until its recent revamping.',
          photo_url_recent: '/assets/lumberbaroninnnew.jpg',
          photo_url_2: '/assets/lumberbaroninnold.jpg', //stretched
          address:'2555 West 37th Avenue',
          longitude: -105.018763,
          latitude: 39.768381,
          neighborhood: 'Lower Higland'
        }),
      knex('landmarks').insert(
        {
          id: 32,
          name: 'St. Patrick\'s Church ',
          description: 'Established in 1881 and rebuilt in 1907 to serve the Irish Catholic community, St. Patrick\'s Church was once the third largest parish in Denver. In 1885, Father Carrigan, one of the first Pastors of the church helped to organize some of the first St. Patrick\'s Day festivities in Denver. By the 1970s, attendence had dwindled, competing with other Church\'s in the area and in 1989, the Hispanic Vicariate was moved into St. Patrick\'s to better serve the needs of the primarily hispanic population in the area. In honor of the Mexican nuns who now live there, part of the church was rechristened \'Our Lady of Light Monastery\'.',
          photo_url_recent: '/assets/stpatricksnew.jpg',
          photo_url_2: '/assets/stpatrickschurchold.jpg', //stretched
          address:'3325 Pecos Street ',
          longitude: -105.0067064,
          latitude: 39.7635627,
          neighborhood: 'Lower Higland'
        }),
      knex('landmarks').insert(
        {
          id: 33,
          name: 'Sloan Lake',
          description: 'A body of water in the Sloan\'s Lake neighborhood with an interesting beginning. Once dry land owned by Thomas F. Sloan, the area was once used for cattle ranching. Then one storied day in 1861, Sloan accidentally dug up a well-spring and over the course of the following days, what started as a small trickle, turned into a 200 acre-sized lake. His farmland now useless, Sloan turned to the ice business-shoveling in bricks to Denver to provide local breweries with much-needed refrigeration. But by 1872, Sloan was selling his land. In 1874, a giant steamship was launched from the Grandview Hotel in Denver, travling up a man-made canal until it reached Sloan Lake. Passengers paid 25 cents to ride. In 1881, the famed Amusement park opened, \'Manhattan Beach\' was opened. Thought to be the first amusement park west of the Mississippi, it touted a rollercoaster, dance hall, ferris wheel, boating attractions, hot air balloon rides, bear wrestling, contortionists, aerial acts, a human cannonball, an exhibit of 40 species of animals and a man who walked on celings.',
          photo_url_recent: '/assets/sloanlakenew.jpg',
          photo_url_2: '/assets/sloanlake1935.jpg',
          address:'4700 West Byron Place',
          longitude: -105.0484355,
          latitude: 39.7490012,
          neighborhood: 'Sloan Lake'
        }),
      knex('landmarks').insert(
        {
          id: 34,
          name: 'SLOANS Denver',
          description: 'Originally the hospital, \'St. Anthony\'s\', SLOANS Denver sits directly across from Sloan\'s Lake. The hospital was opened in 1892 by the Poor Sisters of St. Francis and provided healthcare for railroad workers and miners. In the 1970s, the first civilian hospital-based emergency helicopter service, \'Flight for Life\', was established- A program that is modeled by countless hospitals around the world. By the 1990s, it had become a hospital of almost 1 million square feet, and in the early 2000s, it announced plans to move to a larger location in Lakewood. In 2011, the hospital announced entering exclusive negotiations with EnviroFinance group for the revelopment of the land. In 2013, demolition began. The development is slated to be mainly large-scale Condominiums ranging from the $400,000s upwards of $1 million. Amenities will include an 18,000-square-foot outdoor deck with an urban farm, pool, hot tub, cabanas, gardens, a fitness center with exercise equipment, yoga room, sauna and juice bar. The project, called \'SLOANS\', will have up to 1,200 residential units and 150,000 square feet of retail and office space, including an Alamo Drafthouse Cinema.',
          photo_url_recent: '/assets/stanthonynew2.jpg',
          photo_url_2: '/assets/stanthonys_hospital_past.jpg',
          address:'Perry St & W 17th Ave',
          longitude: -105.0393298,
          latitude: 39.7439653,
          neighborhood: 'Sloan Lake'
        }),
      knex('landmarks').insert(
        {
          id: 35,
          name: 'Fire Station 12',
          description: 'The original building served as the Highland area\'s first Town Hall. It has since been converted into a fire station that serves the Jefferson Park neighborhood.',
          photo_url_recent: '/assets/firestation12.png',
          photo_url_2: '/assets/townhallfirestationold.jpg',
          address:'2575 Federal Boulevard',
          longitude: -105.0256141,
          latitude: 39.7545711,
          neighborhood: 'Jefferson Park'
        }),
      knex('landmarks').insert(
        {
          id: 36,
          name: 'Sassafrass American Eatery',
          description: 'A breakfast and lunch restaurant serving up southern comfort food in a restored Victorian home. Sassafrass opened in 2012, restoring the Victorian home. The building also housed for some time a popular mexican restaurant, \'La Loma\', for some time. Originally, the home the restaurant is housed in, was known as the  Dunwoody Home. William J. Dunwoody, its builder and first resident, was born in 1858 in Poughkeepsie, New York, his health failed him young and he contracted tuberculosis. In 1883 at the age of twenty-five, he came to Colorado to recover. His health improved somewhat, and in 1884 he was able to return to New York, marry, and return to Colorado with his bride. He then built the Dunwoody home and lived there until his death.',
          photo_url_recent: '/assets/sassafrassnew.jpg',
          photo_url_2: '',
          address:'2637 W 26th Ave',
          longitude: -105.0201561,
          latitude: 39.7550748,
          neighborhood: 'Jefferson Park'
        }),
      knex('landmarks').insert(
        {
          id: 37,
          name: 'Briar Common Brewery',
          description: 'Opened in October 2016, Briar Common Brewery is one of the recent additions to the historic Jefferson Park neighborhood. The building served as a local grocery store and residence for some time, before being converted to a two-story local brewery and restaurant, next to the neighborhood\'s namesake park, \'Jefferson Park\'.',
          photo_url_recent: '/assets/briarcommonrecent.jpg',
          photo_url_2: '',
          address:'2298 Clay Street',
          longitude: -105.0203794,
          latitude: 39.7510689,
          neighborhood: 'Jefferson Park'
        }),
      knex('landmarks').insert(
        {
          id: 38,
          name: '7/11',
          description: 'Originally this modest gas station and convenience store was the grand \'Boulevard Congregational Church serving the Highland community in the late 1800s and early 1900s.',
          photo_url_recent: '/assets/7_11new.jpg',
          photo_url_2: '/assets/7_11boulevardcongre.jpeg',
          address:'2609 Federal Blvd',
          longitude: -105.0259066,
          latitude: 39.7550984,
          neighborhood: 'Jefferson Park'
        }),
      knex('landmarks').insert(
        {
          id: 39,
          name: 'Anderson House',
          description: 'This residential home in the Jefferson Park neighborhood was the subject of heated debate in 2015, as it came under consideration for being scraped and rebuilt as larger, more modern housing, or being given historical designation. At the turn of the 20th century, the house was home to William A. Anderson, prominent attorney at the time. He is famed for representing infamous Alfred Packer, a cannibal who was charged with eating his work-mates on a mining expedition gone-wrong. During the trial, Denver Post Editors, H.H. Tammen and Frederick Bonfils published what Anderson considered to be sensationalist articles about Packer. In a heated argument, the three wound up in fisticuffs, and Anderson shot both Tammen and Bonfils, twice each. The two lived, and in the subsequent trial, Anderson was acquitted after it was discovered that the two newspaper editors had tampered with the jury by offering them whiskey, womena and $500. After heated debates between local neighbors and the owner of the house, the landmark bid was denied and the house, sold for over 1 million was slated for demolition and development of townhomes.',
          photo_url_recent: '/assets/andersonhousenew.jpg',
          photo_url_2: '',
          address:'2329 Eliot St',
          longitude: -105.024005,
          latitude: 39.7517489,
          neighborhood: 'Jefferson Park'
        }),
      knex('landmarks').insert(
        {
          id: 40,
          name: 'Adam\'s Mystery Playhouse',
          description: 'The only theatre in Denver specializing in Murder mystery and dinner, the Adam\' Mystery Playhouse is housed in a historic Jefferson Park home built in the 1880s. It was lived in by the William Simpson family from Canada. They lived there until the 1920s, when Mr. Simpson mysteriously disappeared. Afer the original owners, the home was converted to a Mortuary, and eventually converted to a spanish funeral home from 2003-2005. In 2006, the building was bought by the Cuellars and converted to a playhouse, showing weekly \'Death For Dinner events\'.',
          photo_url_recent: '/assets/adamsmysterynew.jpg',
          photo_url_2: '',
          address:'2406 Federal Blvd',
          longitude: -105.024748,
          latitude: 39.75259,
          neighborhood: 'Jefferson Park'
        }),

      ]);
    })
    .then(() => {
        return knex.raw(
            "SELECT setval('landmarks_id_seq', (SELECT MAX(id) FROM landmarks));"
        );
    });
  };
