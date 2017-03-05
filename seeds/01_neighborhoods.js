'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('neighborhoods').del()
    .then(function () {
      return Promise.all([
      // Inserts seed entries
      knex('neighborhoods').insert(
        {
          id: 1,
          name: 'Berkeley',
          description: 'Berkeley was advertised as a healthful suburb, free from the smoke and dust of the city, with plentiful water and convenient public transportation. In 1892, the mostly middle and working class residents of the community incorporated the town of North Denver, encompassing the acreage of Walker\'s farm. Its boundaries were roughly 52nd Avenue to the north, Sheridan Boulevard to the west, 44th Avenue to south, and Federal Boulevard to the east. In 1898, the town\'s name was changed to Berkeley. Commercial development was limited to small neighborhood stores and a small commercial district along Tennyson Street where the post office was established. Berkeley grew slowly and by the time it was annexed on 1 December 1902, there were only 707 residents in the town. The eastern stretches of Berkeley were especially slow to develop. In 1910 there were only three houses between Regis College and the Henry Weirich celery farm at the east end of Rocky Mountain Lake. At this time, the area was largely occupied by "truck farmers" -- farmers who took their fruits and vegetables into Denver to sell -- and the area remained this way through the 1940\'s. The Berkeley area eventually became split into two parts: Lower Berkeley and Berkeley Hill. The school for lower Berkeley was the Louisa M. Alcott Elementary School, built in 1892. The Berkeley Hill children went to Berkeley School at West 50th Avenue and Lowell. The Berkeley neighborhood continued to develop throughout the mid 20th century, largely though subdivisions. The lion\'s share of the growth occurred in the 1950s and 1960s.',
          photo_url: ''
        }),
      knex('neighborhoods').insert(
        {
          id: 2,
          name: 'Sunnyside',
          description: 'This neighborhood is considered by many to be the newest of the North Denver neighborhoods to begin gentrification. Before being called Sunnyside, the area was considered to be apart of Highlands. The neighborhood was home to poorer irish, italian and hispanic immigrants who wanted cheap housing, access to the farmland and river, and proximity to the Argo Smelter, just north of town-a major employer during the Gold Rush of the late 1800s and the railroad-also a major employer. Sunnyside, with a border on the now Lower-Highlands area, shared many of the same demographics of its southern neighbor. The area borering the two neighborhoods was the Little Italy of its day, home to two Italian churches, an orphanage and school overseen by Mother Francis Xavier Cabrini, and four Italian language newspapers, in addition to the families and businesses.  Sunnyside saw crime and neglect through the 70s, 80s, 90s and 2000s, and was considered to be the seediest area of Northwest Denver. Today, housing prices are still considerably cheaper than it\'s pricier neighbors to the south and west. With a large hispanic population, the area is quieter, more residential and borders up on warehouse disctricts and forgotten neighborhoods of Globeville and Elyria-Swansea.',
          photo_url: ''
        }),
      knex('neighborhoods').insert(
        {
          id: 3,
          name: 'West Highland',
          description: 'Just west of lo-hi, it\'s beginnings are similar to that of it\'s eastern neighbor, people began to move up the hill more readily after the flood of 1864, and that brought the expansion of the highlands area into what we now refer to as West Highland. When streetcars were introduced in______, it made access to West Highland even easier. Business centers began to pop up around street car stops, including West Highland\'s shopping and business district, \'Highland Square\'. The neighborhood is famous for the establishment of the botanical garden, zoo and amusement park, \'Elitch Gardens\'. Today, home prices are continuing to rise steadily (The average price for a home in 2000 was 100,000, and is now closer to 500,000). In 2016, West Highland was ranked 8th for best neighborhood in the nation.',
          photo_url: ''
        }),
      knex('neighborhoods').insert(
        {
          id: 4,
          name: 'Lower Highland',
          description: 'Perhaps what most people associate Northwest Denver to the most, Lower Highlands, or simply \'Lo-Hi\', has seen explosive growth over the past decade. Its proximity to downtown and plethora of restaurants make it a destination for young working professionals. This playground for Denver\'s young elite, started as a one of the first suburbs of the fledgling city. The area is also perhaps the most historic of North Denver, as Denver began its expansion in all directions in the mid 1800s. Lo-Hi was the first bit of land to be established west of downtown. In the 1850s, The Rocky Mountain News noted: \'No more handsome location for residences can be found than on the highlands of Highland, on the opposite side of the river from and overlooking Auraria and Denver, and a vast extent of surrounding territory.\'. The building of bridges, streetcars and the flood of 1864, which killed 20 people and wiped away many homes in Denver, were all factors in Highland getting it\'s start. The area was advertised as having the best water (after the discovery of a local artesian well), the cleanest air (as it sat above the rest of smoggy Denver and regularly got breezes from the west), and was considered to be above Denver, both literally and figuratively. Strict laws and guidelines were put into effect in 1889, to separate the neigbhorhood from wild ways of Denver, including: restrictions on hitching horses to trees, riding horses “immoderately” (speeding?), use of vulgar language, and kite flying. The town permitted liquor sales, but charged between $3000 and $5000 annually (at a time when that likely represented more than a decade’s worth of profits). In alot of ways, Highland was perhaps the first suburb with an HOA. All in all, It was a place to escape the undignified, \'rough and tumble\' ways of Denver. Men were expected to work in Denver, and come home to their clean and quiet home, up the hill. In the 1880 and 1890s, a new wave of neighbors began moving into the area, starting with the Irish, Italians and later Hispanics from Southwestern Colorado and Mexico primarily.',
          photo_url: ''
        }),
      knex('neighborhoods').insert(
        {
          id: 5,
          name: 'Sloan Lake',
          description: 'A mostly residential neighborhood, known for it\'s namesake-the 200-acre sized lake. The area is seeing much development just as the rest of North Denver continues to change.',
          photo_url: ''
        }),
      knex('neighborhoods').insert(
        {
          id: 6,
          name: 'Jefferson Park',
          description: 'An area just to the west of Highland, Jefferson Park was once considered a part of Highland, housing the original highland Town Hall. Today, Jefferson Park is one of the fastest in the area to change. The stream of new developments never seems to end.',
          photo_url: ''
        })
        //add all neighborhoods seed????
      ]);
    })
    .then(() => {
        return knex.raw(
            "SELECT setval('neighborhoods_id_seq', (SELECT MAX(id) FROM neighborhoods));"
        );
    });
  };
