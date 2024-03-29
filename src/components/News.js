import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Kevin Liptak, CNN",
        "title": "What to watch from Joe Biden's trip to the G7 - CNN",
        "description": "President Joe Biden may be overseas in the Bavarian Alps, but the political division and sour mood he left behind will be difficult to ignore as he begins this year's Group of 7 summit.",
        "url": "https://www.cnn.com/2022/06/26/politics/joe-biden-what-to-watch-g7/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220625090618-01-biden-g7-departure-0625-super-tease.jpg",
        "publishedAt": "2022-06-26T07:39:00Z",
        "content": "Telfs-Buchen, Austria (CNN)President Joe Biden may be overseas in the Bavarian Alps, but the political division and sour mood he left behind will be difficult to ignore as he begins this year's Group… [+6021 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CNBC"
        },
        "author": "Matt Clinch",
        "title": "G-7 nations to announce import ban on Russian gold as Moscow sanctions widen - CNBC",
        "description": "The leaders of the G-7 nations will announce a ban on Russian gold imports for Moscow's unprovoked invasion of Ukraine, U.S. President Joe Biden confirmed on Sunday morning.",
        "url": "https://www.cnbc.com/2022/06/26/g-7-nations-to-announce-import-ban-on-russian-gold.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107074166-16548739502022-06-10t131914z_2018805568_rc20pu9jrgt6_rtrmadp_0_russia-turkmenistan.jpeg?v=1656228963&w=1920&h=1080",
        "publishedAt": "2022-06-26T07:03:30Z",
        "content": "The leaders of the G-7 nations will announce a ban on Russian gold imports for Moscow's unprovoked invasion of Ukraine, U.S. President Joe Biden confirmed on Sunday morning.\r\nAs the leaders met in Mu… [+2344 chars]"
        },
        {
        "source": {
        "id": "usa-today",
        "name": "USA Today"
        },
        "author": "Matthew Wells",
        "title": "UFC on ESPN 38 results: Mateusz Gamrot wins unanimously vs. Tsarukyan - MMA Junkie",
        "description": "Mateusz Gamrot won the first main event of his UFC career by picking up a unanimous decision over Arman Tsarukyan.",
        "url": "https://mmajunkie.usatoday.com/2022/06/ufc-on-espn-38-mateusz-gamrot-earns-unanimous-decision-over-arman-tsarukyan",
        "urlToImage": "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2022/06/Mateusz-Gamrot-vs.-Arman-Tsarukyan-UFC-on-ESPN-38.jpg?w=1024&h=576&crop=1",
        "publishedAt": "2022-06-26T05:33:00Z",
        "content": "LAS VEGAS The main event between Mateusz Gamrot and Arman Tsarukyan was an incredible five rounds of action, proving exactly why this matchup deserved top billing of UFC on ESPN 38.\r\nBoth lightweight… [+5163 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Guardian"
        },
        "author": "Katharine Gammon",
        "title": "US bans Juul but young vapers are already switching to newer products - The Guardian",
        "description": "Analysis: Juul is only the fourth most popular e-cigarette with adolescents, who are increasingly opting for disposable alternatives",
        "url": "https://amp.theguardian.com/society/2022/jun/26/us-bans-juul-young-people-newer-products",
        "urlToImage": "https://i.guim.co.uk/img/media/7634aebf52c6668a8aaff70d08ad7dcda771b6e9/0_153_4800_2879/master/4800.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=077699a3b4a61f9575650d1d5f028c53",
        "publishedAt": "2022-06-26T05:00:00Z",
        "content": "This week, the US effectively banned Juul after the Food and Drug Administration ordered the e-cigarette maker to remove its popular products from the marketplace.\r\nExperts have hailed the move as si… [+5815 chars]"
        },
        {
        "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
        },
        "author": "Rachel Pannett, Annabelle Timsit",
        "title": "Monkeypox cases surge as WHO stops short of declaring a global emergency - The Washington Post",
        "description": "The World Health Organization said the monkeypox outbreak is an « evolving threat » but does not yet constitute an international public health emergency.",
        "url": "https://www.washingtonpost.com/health/2022/06/25/monkeypox-who-global-emergency/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/05-21-2022/t_7345a580607849f5a427e54bc8667d59_name_fb095550_d848_11ec_be17_286164974c54_scaled.jpg&w=1440",
        "publishedAt": "2022-06-26T04:13:00Z",
        "content": "Placeholder while article actions load\r\nThe World Health Organization has decided not to declare monkeypox a global emergency despite a rapid rise in cases in Europe, electing instead to describe it … [+4376 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Guardian"
        },
        "author": "Guardian staff reporter",
        "title": "Illinois Republican tells Trump rally that Roe verdict a ‘victory for white life’ - The Guardian US",
        "description": "Mary Miller’s remarks are greeted with cheers by crowd, though spokesman claims she meant to say ‘right to life’",
        "url": "https://amp.theguardian.com/us-news/2022/jun/26/illinois-mary-miller-roe-wade-abortion-verdict-victory-for-white-life-trump",
        "urlToImage": "https://i.guim.co.uk/img/media/f5bee2af1b4e0422ea57420da2cac80c51838b78/1_56_2897_1738/master/2897.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b3894263d5087f67369497bbc4b4166d",
        "publishedAt": "2022-06-26T04:03:00Z",
        "content": "Illinois Republican Mary Miller told a crowd at a rally held alongside former president Donald Trump that the supreme courts decision to overturn Roe v Wade was a victory for white life.\r\nPresident T… [+2555 chars]"
        },
        {
        "source": {
        "id": "cbs-news",
        "name": "CBS News"
        },
        "author": null,
        "title": "Five things to know now that the Supreme Court has overturned Roe v. Wade - CBS News",
        "description": "Where is abortion still legal? Could this ruling affect IVF or contraception? Here are some answers.",
        "url": "https://www.cbsnews.com/news/abortion-questions-supreme-court-overturns-roe-v-wade/",
        "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2022/06/25/9751322d-8951-416f-9669-0a3896008ac7/thumbnail/1200x630/ce3780387780ae9e8e45dd0f5dcc71fa/gettyimages-512268774.jpg",
        "publishedAt": "2022-06-26T03:49:00Z",
        "content": "The Supreme Court's decision in Dobbs v. Jackson Women's Health Organization dramatically and rapidly alters the landscape of abortion access in the U.S. The court on June 24 ruled 6-3 to uphold a Mi… [+12897 chars]"
        },
        {
        "source": {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English"
        },
        "author": "Al Jazeera",
        "title": "Calls for a probe after 23 people die in attempt to enter Melilla - Al Jazeera English",
        "description": "Rights groups call for a ‘comprehensive’ probe as Spain decries attempted mass crossing as an attack on its territory.",
        "url": "https://www.aljazeera.com/news/2022/6/25/rights-groups-urge-probe-into-deaths-o",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2022/06/AP22175385088189.jpg?resize=1200%2C630",
        "publishedAt": "2022-06-26T03:45:00Z",
        "content": "Human rights groups have called for an investigation after at least 23 people died while attempting to scale a border fence between between Morocco and the Spanish enclave of Melilla in northern Afri… [+5126 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Oklahoman.com"
        },
        "author": "Justin Martinez, The Oklahoman",
        "title": "NCAA baseball: Ole Miss hammers OU in Game 1 of College World Series - Oklahoman.com",
        "description": "Ole Miss overpowered Oklahoma in Game 1 of the College World Series championship round.",
        "url": "https://www.oklahoman.com/story/sports/college/sooners/2022/06/25/ou-vs-mississippi-score-ncaa-baseball-tournament-college-world-series-cws-finals-game-1/7732201001/",
        "urlToImage": "https://www.gannett-cdn.com/presto/2022/06/26/NOKL/e45be14b-e0f9-4af3-81d2-6db586a55704-AP22177116191249.jpg?auto=webp&crop=2999,1687,x0,y152&format=pjpg&width=1200",
        "publishedAt": "2022-06-26T03:33:45Z",
        "content": "OMAHA, Neb. — The Rebels took a victory lap around Charles Schwab Field.\r\nOle Miss held a two-run lead over Oklahoma during the eighth inning of Saturday’s College World Series Finals opener when it … [+5017 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "WABC-TV"
        },
        "author": "Eyewitness News",
        "title": "Grandmother killed, child among 4 injured after driver evading police goes on rampage in Bed-Stuy, Brooklyn - WABC-TV",
        "description": "A grandmother was killed and an 8-year-old child is among four injured after a driver evading police went on a rampage in Brooklyn.",
        "url": "https://abc7ny.com/brooklyn-pedestrians-struck-accident-in-bed-stuy/11995618/",
        "urlToImage": "https://cdn.abcotvs.com/dip/images/11995656_062522-brooklyn-pedestrian-struck.jpg?w=1600",
        "publishedAt": "2022-06-26T03:11:15Z",
        "content": "BED-STUY, Brooklyn (WABC) -- A grandmother was killed and an 8-year-old child is among four injured after a driver evading police went on a rampage in Brooklyn.It happened just before 7:15 p.m. Satur… [+1424 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "YourTango"
        },
        "author": "Aria Gmitter",
        "title": "The Love Horoscope For Each Zodiac Sign On Sunday, June 26, 2022 - YourTango",
        "description": "The love horoscope of each zodiac sign in astrology is here for June 26, 2022. Venus in Taurus. Check out what the Sun, Moon, and stars have in store for you on Sunday with the Sun in Cancer and the Moon in Gemini.",
        "url": "https://www.yourtango.com/2022351842/love-horoscope-each-zodiac-sign-sunday-june-26-2022",
        "urlToImage": "https://www.yourtango.com/sites/default/files/styles/listing_big/public/image_blog/love-horoscope-june-26-2022.jpg?itok=ui1IgFL-",
        "publishedAt": "2022-06-26T01:05:30Z",
        "content": "For Sunday's love and relationship horoscope by zodiac sign, resident astrologer, Aria Gmitter shares how current astrological events affect you on June 26, 2022.\r\nRELATED: The 3 Zodiac Signs With Th… [+4592 chars]"
        },
        {
        "source": {
        "id": "usa-today",
        "name": "USA Today"
        },
        "author": "Riley Hamel",
        "title": "Patrick Cantlay’s ‘look,’ Rory McIlroy’s big number among five takeaways from Saturday at the Travelers Championship - Yahoo Sports",
        "description": "Schauffele bounced back nicely from his first bogey of the tournament while Cantlay played consistently all day long.",
        "url": "https://golfweek.usatoday.com/lists/saturday-travelers-championship-xander-schauffele-patrick-cantlay-rory-mcilroy/",
        "urlToImage": "https://golfweek.usatoday.com/wp-content/uploads/sites/87/2022/06/1405106394.jpg?w=1024&h=576&crop=1",
        "publishedAt": "2022-06-25T23:52:00Z",
        "content": "The best-buddy duo of Xander Schauffele and Patrick Cantlay made up the final group Saturday at the Travelers Championship. The pair won the Zurich Classic of New Orleans earlier this season at TPC L… [+4181 chars]"
        },
        {
        "source": {
        "id": "cbs-news",
        "name": "CBS News"
        },
        "author": null,
        "title": "Terror alert raised in Norway after 2 killed, 10 wounded in shooting at nightclub in Oslo - CBS News",
        "description": "The PST security service raised its terror alert level from \"moderate\" to \"extraordinary\" — the highest level — after the attack.",
        "url": "https://www.cbsnews.com/news/oslo-shooting-norway-multiple-killed-several-hurt/",
        "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2022/06/25/a8fad31c-dca7-418a-841c-9111acb8aa75/thumbnail/1200x630/6135f99875155c436bd96202395d7439/ap22176269631526.jpg",
        "publishedAt": "2022-06-25T23:39:00Z",
        "content": "At least two people were killed and 10 injured in a shooting at a nightclub in Oslo, Norway, early Saturday morning, according to Norwegian authorities, prompting officials to raise the terror alert.… [+7091 chars]"
        },
        {
        "source": {
        "id": "the-verge",
        "name": "The Verge"
        },
        "author": "Emma Roth",
        "title": "Google says attackers worked with ISPs to deploy Hermit spyware on Android and iOS - The Verge",
        "description": "Researchers at Google’s Threat Analysis Group say attackers are working with internet service providers to deploy the commercial-grade Hermit spyware on both Android and iOS devices.",
        "url": "https://www.theverge.com/2022/6/25/23183046/google-hermit-spyware-isp-android-ios",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/qI4zFeJu5KvJ4bsK7gLuEFIqTXI=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/11516257/acastro_180608_1777_net_neutrality_0003.jpg",
        "publishedAt": "2022-06-25T22:46:27Z",
        "content": "Researchers found affected users in Italy and Kazakhstan \r\nIllustration by Alex Castro / The Verge\r\nA sophisticated spyware campaign is getting the help of internet service providers (ISPs) to trick … [+2478 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Variety"
        },
        "author": "Jem Aswad",
        "title": "Olivia Rodrigo Sings ‘F— You’ to Supreme Court Justices at Glastonbury Festival - Variety",
        "description": "Olivia Rodrigo used her set at England’s Glastonbury Festival to slam the U.S. Supreme Court’s decision to overturn Roe v. Wade on Friday, in the same terms as Phoebe Bridgers did at the festival a day earlier. “I’m devastated and terrified. So many women and…",
        "url": "https://variety.com/2022/music/news/olivia-rodrigo-supreme-court-roe-v-wade-1235303459/",
        "urlToImage": "https://variety.com/wp-content/uploads/2022/05/P1290102-1-e1653642811697.jpeg?w=1024",
        "publishedAt": "2022-06-25T21:43:00Z",
        "content": "Olivia Rodrigo used her set at England’s Glastonbury Festival to slam the U.S. Supreme Court’s decision to overturn Roe v. Wade on Friday, in the same terms as Phoebe Bridgers did at the festival a d… [+1941 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CBS Sports"
        },
        "author": "",
        "title": "Deshaun Watson discipline decision: NFL hearing for Browns QB set to begin Tuesday - CBS Sports",
        "description": "The NFL will reportedly push for a lengthy suspension for Watson",
        "url": "https://www.cbssports.com/nfl/news/deshaun-watson-discipline-decision-nfl-hearing-for-browns-qb-set-to-begin-tuesday/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/06/16/52781a85-63ff-458e-a9cc-b3e633f0541d/thumbnail/1200x675/cc5b8a26506c9887d3db2cc46dcaf7f7/deshaun-watson.jpg",
        "publishedAt": "2022-06-25T21:38:00Z",
        "content": "The Cleveland Browns may soon have clarity with regard to Deshaun Watson's status for the 2022 season. Watson's NFL disciplinary hearing is slated to begin on Tuesday, according to ESPN and confirmed… [+2481 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "New York Post"
        },
        "author": "Isabel Vincent",
        "title": "Russian ally Belarus unleashes rocket air strike into northern Ukraine - New York Post ",
        "description": "Officials in Ukraine said the country came under heavy fire from neighboring Belarus, a Russian ally that has not been involved in the fighting.",
        "url": "https://nypost.com/2022/06/25/russian-ally-belarus-hits-ukraine-with-rocket-air-strike/",
        "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/06/lviv-attack-belarus.jpg?quality=75&strip=all&w=1024",
        "publishedAt": "2022-06-25T20:25:00Z",
        "content": "Officials in Ukraine said the country came under heavy fire from neighboring Belarus, a Russian ally that has not been involved in the fighting.\r\nTwenty rockets targeted the village of Desna in the n… [+837 chars]"
        },
        {
        "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": null,
        "title": "Biden signs gun safety bill into law, takes swipe at Supreme Court - Reuters.com",
        "description": "U.S. President Joe Biden on Saturday signed into law the first major federal gun reform in three decades, days after a decision he condemned by the Supreme Court expandingfirearm owners' rights.",
        "url": "https://www.reuters.com/world/us/biden-signs-bipartisan-gun-safety-bill-into-law-2022-06-25/",
        "urlToImage": "https://www.reuters.com/resizer/xcKLW_-k2D2FiId-CyJdNnMFQ38=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3XFYQX4KGJI5JDAC6NDAXTQYU4.jpg",
        "publishedAt": "2022-06-25T19:38:00Z",
        "content": "WASHINGTON, June 25 (Reuters) - U.S. President Joe Biden on Saturday signed into law the first major federal gun reform in three decades, days after a decision he condemned by the Supreme Court expan… [+2797 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "New York Times"
        },
        "author": "Miriam Jordan",
        "title": "Court Widens Scope of Deportations - The New York Times",
        "description": "The Biden administration had instructed ICE agents to focus on immigrants who were considered a threat. But a judge’s order means millions more could now be targeted for deportation.",
        "url": "https://www.nytimes.com/2022/06/25/us/immigration-enforcement-priorities-court.html",
        "urlToImage": "https://static01.nyt.com/images/2022/06/26/nyregion/26immigration-priorities/00immigration-priorities-facebookJumbo.jpg",
        "publishedAt": "2022-06-25T17:43:15Z",
        "content": "Immigrant advocates who supported the policy said that immigration agencies have long received guidance from the White House. They said that the Supreme Court, which is expected to be asked to rule o… [+1407 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Guardian"
        },
        "author": "Dan Collyns",
        "title": "Ecuador at standstill after two weeks of protests over cost of living crisis - The Guardian",
        "description": "During demonstrations, started by an Indigenous federation, roads were blocked and vehicles torched, and police fired teargas",
        "url": "https://amp.theguardian.com/world/2022/jun/25/ecuador-at-standstill-after-two-weeks-of-protests-over-cost-of-living-crisis",
        "urlToImage": "https://i.guim.co.uk/img/media/91d18f31fba36b52c40176f20b9d652f5e28aa97/0_0_4633_2782/master/4633.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=df1920784f08213fa5609447d57e61ec",
        "publishedAt": "2022-06-25T16:11:00Z",
        "content": "Ecuador has been brought to a near standstill after two weeks of tumultuous protests over a spike in fuel and food prices as global inflation inflames discontent over widening inequality across Latin… [+5397 chars]"
        }
        ]
    constructor() {
        super();
        //console.log("constructor from  news component ");
        this.state = {
          articles : this.articles,
          loading: false
        }
    }
  render() {
    return (
      <div className='container my-3'>
        <h1>Feedly - Top Headlines Today </h1>
        <div className="row ">
        {this.state.articles.map((element)=>{
            return <div className="col-md-3" key={element.url}>
                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.newsUrl}/>
            </div>
        }) }
        </div>
      </div>
    )
  }
}
export default News