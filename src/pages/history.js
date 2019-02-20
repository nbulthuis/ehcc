import React, {Component} from 'react'

import Layout from '../components/layout'

import data from '../assets/historyData'

import './history.css' 

class HistoryPage extends Component {
  state = data;

  previousSlide = () => {
    let newState = [...this.state.slides]
    newState.map((slide, index, slides) => {
      if(slide.active && slide.number !== 1){
        slides[index] = {...slide, active: false};
        slides[index-1] = {...slides[index-1], active: true};
      };
      return slide;   
    });
    console.log(this.state);
    this.setState({...this.state, slides: newState});
  }

  nextSlide = () => {
    let newState = [...this.state.slides].reverse();
    newState.map((slide, index, slides) => {
      if (slide.active && slide.number !== 12) {
        slides[index] = {...slide,
          active: false
        }
        slides[index - 1] = {...slides[index - 1],
          active: true
        }
      };
      return slide;
    });
    newState = newState.reverse();
    this.setState({...this.state, slides: newState});
    console.log(this.state);
  }
    
  selectSlide = (number) => {
    let newState = this.state.slides.map(slide => slide.number === number ? ({...slide, active: true}) : ({...slide, active: false}))
    this.setState({...this.state, slides: newState})
  }

  handleKeyPress = (event) => {
    if(event.keyCode === 37){
      this.previousSlide();
    }
    if(event.keyCode === 39){
      this.nextSlide();
    }
  }

  render() {
    return <Layout place="about">
      <h2 style={{margin: "0 auto 10px auto", textAlign: "center", width: "100%"}}>The History of Ellis Hollow</h2>
        <div className="slideshow-container" style={{display: "flex", cursor: "pointer"}} onKeyPress={event => this.handleKeyPress(event)}>
          <div className="slideNumber">
            <svg style={{flex: 1}} onClick={() => this.previousSlide()} enable-background="new 0 0 256 256" height="2em" id="Layer_1" version="1.1" viewBox="0 0 256 256" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M91.474,33.861l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051l89.6,89.6c2.5,2.5,6.551,2.5,9.051,0s2.5-6.742,0-9.242L21.849,134  H249.6c3.535,0,6.4-2.466,6.4-6s-2.865-6-6.4-6H21.849l78.676-78.881c1.25-1.25,1.875-2.993,1.875-4.629s-0.625-3.326-1.875-4.576  C98.024,31.413,93.974,31.361,91.474,33.861z"/></svg>
            {this.state.slides.map(slide => (slide.active ? <p style={{textAlign: "center", flex: 1}} key={slide.number}>
                <strong>{slide.number}</strong>
            </p> : <p key={slide.number} style={{textAlign: "center", flex: 1}} onClick={() => this.selectSlide(slide.number)}>
                {slide.number}
              </p>))}
            <svg style={{flex: 1}} onClick={() => this.nextSlide()} enable-background="new 0 0 256 256" height="2em" id="Layer_1" version="1.1" viewBox="0 0 256 256" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M164.525,222.138l89.6-89.6c2.5-2.5,2.5-6.551,0-9.051l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0s-2.5,6.743,0,9.243  L234.15,122H6.4c-3.535,0-6.4,2.466-6.4,6s2.865,6,6.4,6h227.75l-78.676,78.881c-1.25,1.25-1.875,2.992-1.875,4.629  s0.625,3.326,1.875,4.576C157.975,224.586,162.025,224.638,164.525,222.138z" /></svg>
          </div>
          <div className="slideContent">
            <div className="slideText">
              <div className={`${this.state.slides[0].active ? 'active' : 'passive'}`}>
                <div className="text">
                  <h4>{this.state.slides[0].name}</h4>
                  <p>
                    Ellis Hollow is a community at the southeastern boundary
                    of Ithaca, New York. Although small and in a rural
                    setting, Ellis Hollow is rich in history and beautiful
                    in setting. Over the years the people of Ellis Hollow
                    have come together in the spirit of friendship to form a
                    neighborhood committee which has built not only a
                    Community Center - but a way of life for its residents.
                    As we move from the 20th to the 21st Century, The Ellis
                    Hollow Community Center and its Board will, within the
                    next few years, celebrate a half Century of community
                    involvement and support. This Website is dedicated to -
                    not only the Founders of The Ellis Hollow Community
                    Association - but also to those individuals both living
                    and now gone, named and unnamed, who have kept the
                    traditions and the memories alive for all the residents
                    who live here...
                  </p>
                </div>
              </div>
              <div className={`slide ${this.state.slides[1].active ? 'active' : 'passive'}`}>
                <div className="text">
                  <h4>{this.state.slides[1].name}</h4>
                  <p>
                    Ellis Hollow is a small upland valley, about four miles
                    long, and less than 2 miles wide, in the southwestern
                    corner of the town of Dryden. It is drained by
                    Cascadilla Creek, "cascadilla" being a Latin word which
                    means small cascade or falls. The shallow stony land is
                    a legacy of the ice age. The glacier which covered this
                    area scraped off the topsoil as it advanced, and
                    deposited stones as it receded. The land was covered by
                    forests when the first settlers arrived, less than 200
                    years ago. Much of the timber was white pine, but there
                    were also sugar maples and other hardwoods.
                  </p>
                </div>
              </div>
              <div className={`slide ${this.state.slides[2].active ? 'active' : 'passive'}`}>
                <div className="text">
                  <h4>{this.state.slides[2].name}</h4>
                  <p>
                    According to the Centennial History of the Town of
                    Dryden \u0028George Goodrich, 1898\u0029 there is
                    evidence that Indians once occupied this area as a
                    hunting ground. It is known that the Cayuga Indian
                    tribe, one of the five or six tribes which made up the
                    Iroquois confederacy &#40;Cayugas, Senecas, Oneidas,
                    Onondagas, Mohawks and later the Tuscaroras&#41;, lived
                    at the present site of Ithaca, on both sides of Cayuga
                    Lake.
                  </p>
                  <p>
                    The first white men to live among them were French
                    Jesuit Priests, who spend many years of their lives
                    trying to convert the Indians to Christianity. Led by
                    Hiawatha during the Revolution, the Iroquois formed the
                    Iroquois Confederacy.
                  </p>
                  <p>
                    The Iroquois Indians took the side of the English during
                    both the French and Indian War and the Revolutionary
                    War. There were massacres and retaliations. To secure
                    his western front, George Washington planned an invasion
                    in 1779 called the Sullivan Expedition. A force of 5000
                    men under Generals Sullivan and Clinton defeated the
                    Iroquois Indians in a battle near Newton
                    &#40;Elmira&#41;. A detachment of soldiers under Colonel
                    Zebulon Taylor and Lt. Colonel Dearborn then marched
                    north toward the Cayuga Indian villages on the side of
                    Cayuga Lake.
                  </p>
                  <p>
                    Following the Iroquois custom of avoiding a mass action
                    with enemy troops, the Cayugas disappeared into the
                    woods. It was late September when the soldiers reached
                    the empty Indian villages. They burned the villages and
                    destroyed all the corn and grain that had been stored.
                    According to The Story of the Cayugas by Mary Van Sickle
                    Wait and William Heidt &#40;1966&#41;, the Cayugas never
                    recovered from this complete devastation. They had
                    vacated the area well before the first white settlers
                    came to Dryden.
                  </p>
                  <p>
                    Most of the historical information on this website came
                    from the book Ellis Hollow, written by Jeanette Knapp
                    and Jill Welch. Excerpts and chapters taken from "The
                    History of Ellis Hollow" written and researched by Jacob
                    Myers who is the Grandson of Elsie Myers Stainton and
                    Walter Stainton who lived in the Ellis home
                    "Headwaters." The paper contains pictures
                    &#40;photocopies&#41; of both Peleg and Ruth Ellis,
                    photocopies of deeds of transactions, and other
                    interesting memorabilia. A copy is retained by the
                    editor of the Gazette.
                  </p>
                </div>
              </div>
              <div className={`slide ${this.state.slides[3].active ? 'active' : 'passive'}`}>
                <div className="text">
                  <h4>{this.state.slides[3].name}</h4>
                  <p>
                    John and Peleg Ellis, two brothers, were among the first
                    settlers in Dryden. They were originally from Rhode
                    Island, but had settled in Herkimer County, New York.
                    Peleg traded his Herkimer County property for lot no.
                    84, originally assigned to Dr. Samuel Cook, a surgeon in
                    the war.
                  </p>
                  <p>
                    Peleg Ellis came to survey his land, the area
                    surrounding the intersection of Ellis Hollow and Ellis
                    Hollow Creek Roads, in 1799. He cleared the woods for
                    eleven days without knowing there was another human in
                    the area.
                  </p>
                  <p>
                    Zephaniah Brown, who had already settled on lot 71
                    &#40;1185 Ellis Hollow Road&#41;, heard the sound of
                    Peleg's axe. Brown came to call on Ellis with his gun in
                    his hand. Zephaniah Brown had cleared a road from his
                    home to Ithaca &#40;settled in 1789&#41;; two years
                    later Brown and Ellis cleared a road to the Ellis
                    property, a distance of about three miles. It is
                    believed that the house which now stands, was built by
                    Brown about 1830.
                  </p>
                  <p>
                    Peleg built a log house on his land at the headwaters of
                    Cascadilla Creek. He brought his wife and two daughters
                    to the Hollow in 1800. Zelle Middaugh Pritchard, in her
                    book Ellis Hollow Lore &#40;1962&#41;, said her mother
                    was told stories by her grandmother &#40;Peleg's
                    wife&#41;, about life in that log house. She related
                    that she often rocked her babies with panthers crying
                    around the house, and only a canvas door separating
                    them.
                  </p>
                  <p>
                    Later in 1808 Peleg Ellis built a larger house in front
                    of the log cabin. It was made up of four rooms, each
                    with a fireplace. Peleg and Ruth slept in a four poster
                    bed in the west bedroom. Their ten children occupied the
                    east bedroom. That house is the front half of
                    "Headwaters",1735 Ellis Hollow Road. The house was
                    lighted and heated by an open fireplace. Even candles
                    were a luxury at the time. Mother and children gathered
                    pine for the fire at night.
                  </p>
                  <p>
                    Peleg, who was captain of the early state militia in
                    Dryden, volunteered with his entire company when the war
                    of 1812 broke out and served under Colonel Winfield
                    Scott. He eventually became a major and died in the home
                    he had built at the Cascadilla headwater, on his 84th
                    birthday, May 9, 1859. His wife, Ruth Dawley Ellis,
                    lived on in the house with her daughter, Ann H. Smith
                    and her husband John, until she died at the age of 93 in
                    1870. Both Ruth and Peleg are buried in the Ellis Hollow
                    cemetery &#40;see map&#41;, along with many other early
                    residents.
                  </p>
                  <p>
                    Although Peleg and Ruth are buried in the Ellis Hollow
                    Cemetery, there is also a small cemetery on a small
                    knoll southeast of the house where their small daughter,
                    Betsy, was buried in 1805. Ann H. Smith lived on in
                    Headwaters until her death, in 1900.
                  </p>
                  <p>
                    In his paper "The History of Ellis Hollow" Jacob Myers,
                    grandson of Elsie Myers Stainton, who later owned
                    "Headwaters" states,"There has been a back end to the
                    house added on. The old cabin is not standing, and one
                    of the bedrooms has been made into two smaller rooms.
                    The house is still in very good shape."
                  </p>
                  <p>
                    Peleg gave an eastern portion to his son, John J. Ellis
                    who built a fine fashionable Gothic house, cruciform in
                    shape, not far from his parents' home.
                  </p>
                  <p>
                    John Ellis, Peleg's brother , lived in Virgil and Dryden
                    before settling in Ellis Hollow around 1801. He was
                    promoted in political affairs, serving in many offices
                    and twice a member of the assembly and Judge of the
                    Court of Common Pleas of Tompkins and Cayuga Counties.
                    He lived in what is numbered 850 Ringwood Road. In his
                    later years, John was called the "King of Dryden."
                  </p>
                </div>
              </div>
              <div className={`slide ${this.state.slides[4].active ? 'active' : 'passive'}`}>
                <div className="text">
                  <h4>{this.state.slides[4].name}</h4>
                  <p>
                    After the end of the Revolutionary War in 1781, the
                    State Legislature did not have the money to pay its
                    surviving soldiers, so in February 1789, The New York
                    State Legislature passed a law governing the surveying
                    and setting apart, for use of its surviving soldiers of
                    the Revolutionary War, a large section of land between
                    Seneca and Oneida lakes. This was known as the "Military
                    Tract 2"
                  </p>
                  <p>
                    The town of Dryden, named for an English poet, John
                    Dryden, was part of the New York military tract, two
                    million acres of wilderness between Seneca and Oneida
                    Lakes, the land which comprises Ellis Hollow was
                    included in this as well.
                  </p>
                  <p>
                    The land was divided into 600 acre lots, which the
                    veterans drew by ballot in 1791. What is now known as
                    Ellis Hollow was then Military Lots 71-74, and parts of
                    lots 62-65, 75, 82-83 and 85. Many former soldiers had
                    no interest in settling on their military lots. They
                    sold or traded them for what they could get and left the
                    pioneering to bolder, younger people.
                  </p>
                </div>
              </div>
              <div className={`slide ${this.state.slides[5].active ? 'active' : 'passive'}`}>
                <div className="text">
                  <h4>{this.state.slides[5].name}</h4>
                  <div>
                    <h5>Early Businesses</h5>
                    <p>
                      There were once five dams and five water-powered mills
                      on Cascadilla Creek between Ringwood and Turkey Hill
                      Roads. A sash and blind factory was operated near the
                      Horton Hunt property &#40;now 529 Ellis Hollow Creek
                      Road&#41;. The saws were apparently powered by a huge
                      water wheel, which used to stand in the creek behind
                      the residence at 541 Ellis Hollow Creek Road.
                    </p>
                    <p>
                      Orrin Middaugh, one of the early residents, had a
                      lumber business, which was eventually run by his son
                      Fred. The mill was given power by a pond connected to
                      Cascadilla Creek. The Middaugh homestead is now 493
                      Ellis Hollow Creek Road. It is believed that the house
                      might have been a stop on the underground railroad
                      before the Civil War period.
                    </p>
                    <p>
                      Peter Genung and his son operated a gristmill, located
                      at 182 Ellis Hollow Creek Road, farther down the
                      Hollow on Cascadilla Creek, for many years. Myron
                      Cornelius had a shingle mill on his farm, and Horton
                      Ogden once had a cider mill on his place.
                    </p>
                    <p>
                      A cheese and butter factory existed in the early days
                      of the Hollow directly across the road from the
                      church. The factory, which flourished from 1867-1872,
                      was owned by a group of stockholders, most of whom
                      were residents from the Hollow. Over 25 men bought
                      stock in the factory. The price of one share of stock
                      was $50. The largest stockholders were Daniel F. Rice,
                      $300; John J. Ellis, $250; Harrison Middaugh, $200;
                      and Chauncy Goodspeed, $200; most of the others
                      purchased 1 to 3 shares of stock. Joseph A. Genung
                      kept the account register. In 1977, the original
                      foundation was still visible across the road from the
                      church, but it has since been covered over. The barn
                      that housed the factory was moved behind the John J.
                      Ellis house. The more than a century-old barn is of
                      board and batten construction.
                    </p>
                  </div>
                  <div>
                    <h5>The Village of Ellis</h5>
                    <p>
                      The little village of Ellis was a thriving community
                      in the late 1800's. The town was at the bend of Ellis
                      Hollow Road and Ellis Hollow Creek Road. There was a
                      school, a church, a post office and general store, a
                      barbershop and a blacksmith shop.
                    </p>
                    <p>
                      Before 1880, all Ellis Hollow mail was put in one box
                      in the Ithaca Post Office and any Ellis Hollow
                      resident who went to town would bring the mail to the
                      John J. Ellis home, where each person would then sort
                      out his own mail. In 1880 or 1881, a post office was
                      established in William and Luthera Bennet's home
                      &#40;now 1780 Ellis Hollow Road&#41;. The mail was
                      brought back and forth from Brookton &#40;now called
                      Brooktondale&#41;, sometimes on horseback. The Ellis
                      Hollow Post Office was discontinued in 1903 when Rural
                      Free Deliver &#40;R.F.D.&#41; began. John Ellis gave a
                      lot near his house for a school building. It was
                      turned into a house after School District 10 voted to
                      send their children to Ithaca Schools in 1945.
                    </p>
                    <p>
                      William Bennett also had a country store in his home.
                      The store was a gathering place for the local
                      residents who traded butter, eggs, etc. for flour and
                      other staples they couldn't make or grow themselves.
                      Some years later Bennett took in a partner, Emmons
                      Ogden Sr., and they ran a horse-drawn grocery wagon
                      around Ellis Hollow and the surrounding area.
                    </p>
                    <p>
                      Eugene Banfield had a blacksmith shop across the road
                      from the country store. In the 1890's Leon Willsey, an
                      Ellis Hollow native, built a small building in his
                      yard and opened a barbershop. During the political
                      campaigns, the Democrats gathered at the barbershop,
                      while the Republican pole was raised in front of the
                      John J. Ellis house. John and Jerri Behler &#40;562
                      Ellis Hollow Creek Road&#41; now own the house. The
                      barbershop is still standing &#40;barely&#41;.
                    </p>
                    <p>
                      Most of the mills were closed by the turn of the
                      century. Emmons Ogden, the grandson of Emmons Ogden
                      Sr., said the general closed about 1908. Emmons, who
                      has lived in Ellis Hollow all his life, said the
                      Hollow began changing from a farming to a residential
                      community after World War I. Because the land was
                      poor, it was hard to make a good living by farming.
                      People moved to town to work, and did not move back
                      until roads and automobiles improved enough to make
                      commuting practical.
                    </p>
                    <p>
                      After World War II, many more houses were built in
                      Ellis Hollow and there were little woods left. Ithaca
                      was expanding, and Ellis Hollow had become less of a
                      town-like community. Most of the John Ellis farm
                      &#40;not including the house&#41; has become the Ellis
                      Highlands Development.
                    </p>
                  </div>
                  <div>
                    <h5>"Spooky Hollow"</h5>
                    <p>
                      In her book Ellis Hollow Lore, Zelle Pritchard said
                      that a history of Ellis Hollow just would not be
                      complete without tales of "Spooky Hollow". The stories
                      about "Spooky Hollow" &#40;see map&#41;, center around
                      an old farmhouse which burned down many years ago.
                    </p>
                    <p>
                      According to legend, an old peddler who had always
                      stayed at the farmhouse when he came to Ellis Hollow
                      was murdered there. Some farmers who were pulling
                      stumps in the swamp discovered human bones under one
                      of them. Years later, just before he died, one of the
                      men who murdered the peddler confessed to the crime
                      and told about burying a pot of gold under a stump in
                      the swamp below the house. However, he had lost the
                      markings of the stump and could never find it again.
                    </p>
                    <p>
                      People searched for the pot of gold for years.
                      According to Zelle Pritchard, a man who lived on Ellis
                      Hollow Creek Road, and whose pasture ran into the
                      swamp, thought the men might have buried it on his
                      land. He dug up about ten acres by hand looking for
                      the gold. He went insane and died in Willard Asylum.
                      Stories have been told of a headless horseman who rode
                      through "Spooky Hollow" at night, and of a skull
                      rolling down the road in the advance of anyone
                      traveling the road after dark.
                    </p>
                  </div>
                </div>
              </div>
              <div className={`slide ${this.state.slides[6].active ? 'active' : 'passive'}`}>
                <div className="text">
                  <h4>{this.state.slides[6].name}</h4>
                  <p>
                    There used to be two schools in Ellis Hollow, one at
                    each end of the Hollow. The Ellis Hollow School
                    &#40;District School No. 10&#41; was built between 1830
                    and 1853. It was a large one-room school with as many as
                    20 to 30 children enrolled some years. The school closed
                    in the late 1930s and has since been remodeled into a
                    house &#40;575 Ellis Hollow Creek Road&#41;. The swing
                    set from the old Ellis Hollow schoolyard was moved to
                    the old community center for the nursery school and then
                    to the new center where it is still in use, together
                    with a new playground that was built in 1987.
                  </p>
                  <p>
                    Hibbard's Corners School &#40;District School No.
                    20&#41; was at the corner of Ellis Hollow and Turkey
                    Hill Roads. It was named after the Hibbard family. This
                    one-room Greek Revival schoolhouse was built about 1840.
                    Warren Ellis Schutt, the first United States Rhodes
                    Scholar, completed the 8th grade at Hibbard's Corners
                    School about 1889. The school closed in 1940. The
                    building served as the community center from 1952 to
                    1968. It was enlarged in 1974 and was used as the home
                    of the Foundation of Light until their new facility was
                    built in 1999. &#40;The Foundation of Light is a free
                    church whose members are interested in meditation and
                    the wholeness of life.&#41; Today, the schoolhouse is
                    again filled with young students ages 6 through 12. In
                    1999, Stone Circle School opened its doors to offer the
                    Ithaca community a classical waldorf curriculum
                  </p>
                  <p>
                    The two old school districts consolidated and became
                    Dryden School District 20. For a dozen years, Ellis
                    Hollow parents contracted with Ithaca to send their
                    children to the city's schools and were taxed according
                    to busing and tuition costs. Grade school children were
                    assigned to whichever school had room - East Hill, Belle
                    Sherman, and even West Hill one year.
                  </p>
                  <p>
                    In 1956, Ellis Hollow and 41 other out-lying school
                    districts joined the Ithaca schools to form the new
                    consolidated Ithaca City School District. Elementary
                    school children were then assigned to the Belle Sherman
                    Elementary School. When the new Caroline Elementary
                    School opened in 1959, Ellis Hollow children were again
                    divided between two grade schools. Those living west of
                    Turkey Hill/Quarry Road attended the Belle Sherman
                    Elementary School, while those to the east went to the
                    Caroline Elementary School. In 1984 all Ellis Hollow
                    children were assigned to the Caroline School.
                  </p>
                </div>
              </div>
              <div className={`slide ${this.state.slides[7].active ? 'active' : 'passive'}`}>
                <div className="text">
                  <h4>{this.state.slides[7].name}</h4>
                  <p>
                    Religious services were held in the Ellis school house
                    &#40;see map&#41; during the early days. The small group
                    of people who worshipped there were members of the
                    Slaterville Springs Methodist church. The minister had
                    other congregations and could only come on alternate
                    Sunday afternoons.
                  </p>
                  <p>
                    Attendance increased and weekly services were held after
                    the congregation joined the Varna Methodist Church in
                    1889. Ann H. Smith, the youngest daughter of Peleg
                    Ellis, was a member of the congregation. She had long
                    dreamed of a church in Ellis Hollow. In 1895, five years
                    before her death, she donated land that had been cleared
                    by her father, and the first $1000 to the church's
                    building fund. Members and residents of the community
                    donated what they could in money and labor. In 1896, the
                    little church in the valley was filled to capacity for
                    its dedication. The Ellis Hollow Community Church,
                    located on Ellis Hollow Road continues to welcome all to
                    its Sunday services.
                  </p>
                  <p>
                    Today the Church closes down during the winter months.
                    The Pastor, Carolyn Byrne, also welcomes you at the
                    Varna Methodist Church during these months.The Church
                    reopens each year with the Palm Sunday Service.
                  </p>
                </div>
              </div>
              <div className={`slide ${this.state.slides[8].active ? 'active' : 'passive'}`}>
                <div className="text">
                  <h4>{this.state.slides[8].name}</h4>
                  <p>
                    There are well over two dozen houses in Ellis Hollow
                    that have been lived in for a century or more. There
                    were farmhouses, many built in the Greek Revival style
                    popular between 1820 and 1860.
                  </p>
                  <ul>
                    <li>
                      The Home of Zephaniah Brown &#40;Fig. 1&#41; built
                      around 1830.
                    </li>
                    <li>
                      The home that Peleg Ellis built in 1800 started out as
                      a log cabin at the headwaters of Cascadilla Creek. In
                      1808 Peleg built a larger house in front of the log
                      cabin. It was made up of four rooms, each with a
                      fireplace. That house is the front half of
                      "Headwaters" &#40;Fig. 2&#41;. For more information
                      see &#40;Peleg Ellis page&#41;
                    </li>
                    <li>
                      The house at 1202 Ellis Hollow Road, formerly owned by
                      Paul Gates, was built about 1865, and for many years
                      was the main farmhouse of the old Snyder farm. Paul
                      Gates, who died in 1999, wrote an unpublished paper on
                      Ellis Hollow. The front half of the house at 1184
                      Ellis Hollow Road was the hired man's house on that
                      farm.
                    </li>
                    <li>
                      The front half of the house at 1184 Ellis Hollow Road
                      was the hired man's house on that farm.
                    </li>
                    <li>
                      1780 Ellis Hollow Rd. &#40;Fig. 3&#41; was the former
                      General Store and Post Office run by William and
                      Luthera Bennett.
                    </li>
                    <li>
                      The house at 1374 Ellis Hollow Road was built in 1860
                      by a member of the Cornelius family, one of the early
                      families in the Hollow &#40;Fig. 4&#41;. The house is
                      built in Greek Revival style and was once owned by Mr.
                      and Mrs. Kenneth Post, one of the founding families of
                      the Community Center
                    </li>
                    <li>
                      The home of Paul & Sabina Kneeland on the southeast
                      corner of Ellis Hollow and Genung Road, was thought to
                      have been a speakeasy where illegal liquor was sold
                      during prohibition in the 1920's. Judging by the
                      quantity of clam shells and broken glass found in the
                      back yard, business must have been good.
                    </li>
                    <li>
                      The former J. H. Whitlock house &#40;1502 Ellis Hollow
                      Road&#41;, was built in the Federal style of the early
                      1800's by Wessels S. Middaugh, it is one of the oldest
                      houses in Ellis Hollow.
                    </li>
                    <li>
                      The gothic house at 1790 Ellis Hollow Road was built
                      in 1843 by John J. Ellis on land given to him by his
                      father Peleg Ellis. Most of the present Ellis
                      Highlands development is on the original John J. Ellis
                      farm. The gabled house has undergone extensive
                      restoration and renovation around 1999-2000. The barn
                      behind the house is the old cheese factory building,
                      which was moved from its original location across the
                      road from the church. &#40;Fig. 5&#41;.
                    </li>
                    <li>
                      H. Emmons Ogden was born in the former Horton Hunt
                      home &#40;Fig. 6&#41;, 529 Ellis Hollow Creek Road.
                      The house, which his great-grandfather bought almost
                      new in 1865, remained in his family for 110 years.
                      Hunt Hill Road is named for the Hunt family, which
                      homesteaded the area. &#40;see map&#41;. Emmons, who
                      now lives next door at 517 Ellis Hollow Creek Road,
                      contributed to the current housing boom in Ellis
                      Hollow by building 14 houses in the area. The Town of
                      Caroline named Ogden Road for him.
                    </li>
                    <li>
                      The home at 91 Ellis Hollow Creek Road was built by
                      John Mitchell about 1840. Hesikiah English, Jr. bought
                      it about 1889. He was a prosperous sheep farmer who
                      did not believe in banks. When he died it was rumored
                      that large numbers of bills, mildewed with age, were
                      found in old almanacs. The house stood vacant for
                      almost 25 years until shortly before Wat and Edie
                      Dimock bought it in 1940.
                    </li>
                    <li>
                      The home of John and Jerri Behler, 562 Ellis Hollow
                      Creek Rd. as it stands today &#40;fig.7&#41;. Eugene
                      Banfield had a blacksmith shop across the road from
                      the country store. In the 1890's Leon Willsey, an
                      Ellis Hollow native, built a small building in his
                      yard and opened a barbershop. During the political
                      campaigns, the Democrats gathered at the barbershop,
                      while the Republican pole was raised in front of the
                      John J. Ellis house. John and Jerri Behler &#40;562
                      Ellis Hollow Creek Road&#41; now own the house. The
                      barbershop is still standing &#40;barely&#41; and the
                      Behlers plan on more clearly marking the site for
                      historical purposes. A new drawing was done of the
                      house for the 50th Anniversary booklet by Lois
                      McManus, who has done all the original drawings which
                      are shown in the booklets and website &#40;Fig 8&#41;.
                    </li>
                    <li>
                      The house at 870 Ringwood Road was built by John
                      Ellis, brother of Peleg, who was prominent in Dryden
                      and New York state politics. The house was owned from
                      the 1940s to 1991 by Leverett and Nancy Saltonstall.
                      The original farm was later divided among the
                      Saltonstall children and some sections, including the
                      house, were sold. See the Saltonstall Arts Colony. The
                      house is currently owned by Doug and Wendy Antczak
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`slide ${this.state.slides[9].active ? 'active' : 'passive'}`}>
                <div className="text">
                  <h4>{this.state.slides[9].name}</h4>
                  <div>
                    <h5>The Founding</h5>
                    <p>
                      The little red school house at the corner of Ellis
                      Hollow and Turkey Hill Roads &#40;Hibbard's
                      Corners&#41; was unused and empty for more than a
                      dozen years. At a school district meeting in 1950,
                      Earl and Mabel DeMotte, owners of the land on which
                      the school house stood, suggested that it be used for
                      a community center. Interest in the idea grew. The
                      following is an excerpt from minutes taken at the
                      first meeting of the Ellis Hollow Community
                      Association:
                    </p>
                    <p>
                      On January 30, 1952 Mr. and Mrs. Earl DeMotte, Mr. and
                      Mrs. Rueben Shapley, Mr. and Mrs. Cuyler Page, Mr. and
                      Mrs. Kenneth Post, and Mr. and Mrs. Robert Musgrave
                      met at the Post's to discuss the possibility of making
                      a community center of the hold school house on the
                      DeMotte property. The old building had no well or
                      inside toilet facilities, but it was wired for
                      electricity and the stove worked, but the chimney
                      needed repairing.
                    </p>
                    <p>
                      A discussion followed of the uses to which the
                      building might be put. 4-H and Boy Scout meetings,
                      special Home Bureau meetings and the annual school
                      meetings were mentioned along with a summer play
                      program for young children and square dancing.
                    </p>
                    <p>
                      The cost of running the center was approximated at a
                      minimum of $25 per year which covers insurance and
                      electricity. Fuel would be donated and water carried
                      from outside if needed. In addition, each interested
                      family could contribute a small amount, such as 50
                      cents. The five families present decided to act as a
                      committee with Kenneth Post as chairman to get the
                      center underway. Each family paid 50 cents on expense
                      fund, making a total of $2.50.
                    </p>
                    <p>
                      The men of the newly formed association agreed to meet
                      in the school house in the latter part of April to see
                      what work must be done. The women of the newly formed
                      association would meet in the schoolhouse to see what
                      furnishings are needed to make the place attractive.
                    </p>
                    <p>
                      The meeting was adjourned with everyone agreeing they
                      were starting on a worthwhile and enjoyable project.
                    </p>
                    <p>
                      In 1952 five families met to discuss using the empty
                      little red school house at the corner of Ellis Hollow
                      and Turkey Hill Roads as a Community Center. Fifty
                      families donated $92.50 to renovate the old school and
                      the first of many, many work bees was planned.
                    </p>
                    <p>
                      That first Community Center building has since been
                      painted brown and converted to the Foundation of
                      Light, but the Community Center itself, now located on
                      Genung Road &#40;Fig.7&#41;, continues to grow. There
                      are now more than 600 member families &#40;1999&#41;.
                    </p>
                  </div>
                  <div>
                    <h5>Early Activities</h5>
                    <p>
                      "We wanted to provide some activities for the
                      children," explained Eleanore Page, one of those
                      present at the first Community Center organizational
                      meeting. Over the years, there have been visits from
                      Santa and Easter egg hunts for the little ones;
                      Halloween parties, hay rides, and bowling nights for
                      older children; dances for teen-agers; and ice
                      skating, swimming, skiing, and Christmas caroling for
                      everyone.
                    </p>
                    <p>
                      "Fun, fun fun!!!" says an exuberant report from the
                      Senior High teenagers, May 1956. "Twelve dances, two
                      hayrides, one ice skating party and one evening trail
                      ride." The March 1956 Gazette reported, "The adults
                      have been living it up to some extent. So far there
                      have been three square dances for the old folks with
                      an average attendance of 24 and a grand time was had
                      by all." Square dances continued to be held the last
                      Saturday of the month for the next 4 years.
                    </p>
                    <p>
                      Thursday night was bridge night at the old school
                      house for several years. There have been exercise
                      classes and art, dance, swimming, and baton twirling
                      lessons. Residents have taught their neighbors
                      Spanish, crocheting, basket weaving, how to play
                      bridge, how to make quilts, how to color prints, and
                      many other skills.
                    </p>
                    <p>
                      The bookmobile began stopping at the Community Center
                      in 1967, and the Center became a polling place in
                      1975. Boy Scouts and 4-H groups meet regularly at the
                      Center. There have often been Cub Scout dens and
                      Brownie troops and baseball teams. Sporting goods
                      exchanges have been held in the fall so residents can
                      profitably swap old skis and skates. The best-attended
                      activity, aside from the Fair, is the annual chicken
                      barbecue. The Center building and grounds are
                      available for use by any members. There have been many
                      quilting and other work bees, countless meetings,
                      group picnics, and at least one wedding.
                    </p>
                  </div>
                  <div>
                    <h5>1968: The New Community Center</h5>
                    <p>
                      Plans for additions and improvements to the Community
                      Center have been under discussion since the
                      association was formed. In the fall of 1960, the Board
                      of Directors sent a questionnaire to the 160 families
                      of Ellis Hollow requesting suggestions for the future.
                      A report on the questionnaire was printed in the
                      November Gazette. Comments "range from the completely
                      negative to the wildly enthusiastic, from "let's just
                      enjoy the country," to "Buy property and build a
                      community center near Cascadilla Creek and have a
                      swimming hole'." The wildly enthusiastic prevailed.
                    </p>
                    <p>
                      The Community Center owned the school house, but the
                      land was leased from the DeMottes. As the Ellis Hollow
                      population continued to grow, the Board felt more land
                      and a larger building were needed. A "Walking
                      Committee" was formed which investigated a number of
                      sites including land on Cascadilla Creek, but the
                      swimming hole idea proved impractical.
                    </p>
                    <p>
                      In the summer of 1963, the Community Center purchased
                      28 acres on Genung Road from Reuben Shapley. The Long
                      Range Planning Committee was formed by the Board in
                      1964 to plan the new center. When Peter Levatich,
                      Chair of the Planning Committee, presented the plan to
                      the Board in April of 1965, the center site was
                      undeveloped land covered by marsh, brush and small
                      trees. The plan was approved, and a fund drive was
                      held in June 1966. One hundred and twenty-two families
                      donated $18,965. Volunteers cleared the land and the
                      new Community Center was under construction by the
                      spring of 1967. Again, many work bees were organized
                      and much of the work at the new Center was done by
                      volunteer labor. By the fall of 1968, the new
                      Community Center was in use.
                    </p>
                  </div>
                </div>
              </div>
              <div className={`slide ${this.state.slides[10].active ? 'active' : 'passive'}`}>
                <div className="text">
                  <h4>{this.state.slides[10].name}</h4>
                  <table>
                    <tbody>
                      <tr>
                        <th>Year</th>
                        <th>Name</th>
                      </tr>
                      {this.state.presidents.map(item => {
                        let [year, name] = item.split(' - ')
                        return <tr key={item}>
                            <td key={year}>{year}</td>
                            <td key={name}>{name}</td>
                          </tr>
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className={`slide ${this.state.slides[11].active ? 'active' : 'passive'}`}>
                <div className="text">
                  <h4>{this.state.slides[11].name}</h4>
                  <div>
                    <h5>The Dodie Harris Award</h5>
                    <p>
                      Dodie and Tony Harris and their family were very
                      active members of the community during the 1980s.
                      Dodie ran a small gift and craft shop from an
                      outbuilding on their property she called "The Grey
                      Goose." Dodie was also very active with youth hockey,
                      Ithaca HS Tennis Boosters, and the PTA Council. Dodie
                      and Tony were also involved with the Fairs, working in
                      a variety of capacities over the years from the food
                      and dried flower booths to the white elephant booth.
                      They were always ready to pitch in when help was
                      needed.
                    </p>
                    <p>
                      In December 1989, Dodie and Tony Harris and their
                      children, Mark and Shelby, were robbed and murdered.
                      Their tragic and senseless deaths shocked and saddened
                      the community and put Ellis Hollow in the national
                      news for a brief time. A month later, the perpetrator
                      was identified. He died resisting arrest. In 1990, a
                      community service award was established to
                      posthumously honor Dodie Harris who had made so many
                      contributions to the community. This award, presented
                      at the Annual Spring Chicken Barbecue each year,
                      recognizes Hollow residents who have provided notable
                      service to the community in the calendar year
                      preceding the year in which the award is conferred.
                      The recipients of the award have been:
                    </p>
                    <table>
                      <tbody>
                        <tr>
                          <th>Name</th>
                          <th>Year</th>
                        </tr>
                        {this.state.harris.map(item => {
                          let [year, name] = item.split(' - ')
                          return <tr key = {item}>
                              <td key={year}>{year} </td>
                              <td key={name}>{name}</td>
                            </tr>
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <h5>The Don Lake Endowment</h5>
                    <p>
                      In the wake of the tragedy which took the lives of
                      Dodie Harris and her family in 1989, an endowment was
                      made to the Community Center by Don Lake, father of
                      Dodie Harris. Mr.Lake donated $10,000. to the Ellis
                      Hollow Community Center. The gift had no restrictions.
                      On November 11, 1990 the Board of the Community Center
                      formally approved arrangements for managing the Don
                      Lake donation. The Board voted unanimously that the
                      money be invested in an endowment fund, and that the
                      Board of Directors use the interest each year in a
                      discretionary manner to fund proposals received from
                      the community. On March 13, 1991, the Board approved
                      the following uses and restrictions of the endowment
                      and interest:
                    </p>
                    <ul>
                      <li>
                        For projects in the spirit of the Harris' commitment
                      </li>
                      <li>
                        For projects that would benefit the entire Ellis
                        Hollow community &#40;social events, newcomer
                        activities, etc.&#41;
                      </li>
                      <li>
                        For projects that would improve the buildings,
                        grounds, or athletic facilities at the EHCC
                      </li>
                    </ul>
                    <p>
                      Each year the forms are mailed out to all members of
                      the community in the November and December issues of
                      the Gazette. Proposals are received by January 31st
                      and voted upon for the upcoming year by the Ellis
                      Hollow Board.
                    </p>
                    <p>
                      EHCC Disbursement of the Don Lake Endowment 1992 a
                      utility trailer for use by the EHCC and Boy Scouts.
                      Community Center projects funded by the Don Lake
                      Endowment include:
                    </p>
                    <table>
                      <tbody>
                        {this.state.lake.map(item => {
                          let [year, name] = item.split(' - ')
                          return <tr key={item}>
                              <td key={year}>{year} </td>
                              <td key={name}>{name}</td>
                            </tr>
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
  }
}

export default HistoryPage
