import type { NearbyPlace } from './nearby';

type Text = readonly [title: string, description: string, history: string, highlights: string, walk: string, photo: string, question: string, answer: string];

function translated([title, description, history, highlights, walk, photo, question, answer]: Text) {
  return { title, description, history, highlights, walk, photo, faq: [question, answer] as const };
}

const myvatn = 'https://www.visitmyvatn.is/en/news/blog/things-to-do-in-myvatn';
const park = 'https://www.vatnajokulsthjodgardur.is/en/areas/jokulsargljufur';
const parkManager = { en: 'Vatnajökull National Park', zh: '瓦特纳冰川国家公园', source: park };
const krafla = 'https://www.landsvirkjun.com/visit/krafla-visitor-centre';
const lagoon = 'https://www.earthlagoon.is/';
const whale = 'https://www.whalemuseum.is/';
const sea = 'https://www.geosea.is/';
const forest = 'https://island.is/s/land-og-skogur/is-thjodskogar-lond/vaglaskogur';

function place(
  slug: string,
  name: string,
  mapRegion: string,
  area: NearbyPlace['area'],
  source: string,
  en: Text,
  zh: Text,
  manager?: NearbyPlace['manager'],
): NearbyPlace {
  return { slug, name, mapRegion, area, source, en: translated(en), zh: translated(zh), manager };
}

export const nearbyData: readonly NearbyPlace[] = [
  place('hverfjall', 'Hverfjall', 'Lake Mývatn', 'myvatn', 'https://ust.is/nattura/natturuverndarsvaedi/myvatn-og-laxa/hverfjall/', [
    'Hverfjall crater', 'Climb the black tephra ring above Lake Mývatn and see the scale of its crater from the rim.',
    'Hverfjall, also called Hverfell, is a broad tephra ring left by an explosive eruption about 2,500 years ago.',
    'From the rim, look into the bowl first, then turn outwards towards Lake Mývatn and the irregular lava formations south of the crater.',
    'Navigate to the designated Hverfjall trailhead. The exposed climb on loose material feels different from the level Hverir paths. Follow open marked approaches and turn back if the footing or wind becomes difficult.',
    'From the marked rim path, frame a curve of the rim against the inner basin. From below, stand well back to include the full cone.',
    'Is Hverfjall the same as Námafjall?', 'No. This is the black crater beside Lake Mývatn. Námafjall is the ridge by the Hverir vents.',
  ], [
    '惠尔山火山口（Hverfjall）', '登上米湖旁的黑色火山碎屑环，从口缘俯瞰火山口。', '惠尔山也叫 Hverfell，是约 2500 年前一次爆炸性喷发留下的宽阔火山碎屑环。',
    '抵达口缘后，先向内看碗状火山口，再转向米湖和火山口南侧不规则的熔岩群。', '导航到指定登山口。坡面裸露且碎石松散，与赫维尔的平缓步道不同。沿开放的标记路线走，风大或脚下打滑时原路返回。',
    '从口缘步道把弧形口缘和内壁一起纳入画面。想拍完整轮廓，可在山脚后退取景。', '惠尔山和纳马山是同一座山吗？', '不是。惠尔山是米湖边的黑色火山口，纳马山则是赫维尔喷气孔旁的山脊。',
  ]),
  place('dimmuborgir', 'Dimmuborgir', 'Lake Mývatn', 'myvatn', 'https://www.ust.is/english/visiting-iceland/protected-areas/north-east/dimmuborgir/', [
    'Dimmuborgir lava formations', 'Walk between solidified lava towers and arches on the east side of Lake Mývatn.',
    'The formations date to a lava flow about 2,300 years ago. Pillars and walls remained after a lava lake drained.',
    'The trails reveal a changing profile of pinnacles, hollows and arches. The formation named Kirkjan has an opening that resembles a vaulted church.',
    'Start at the Dimmuborgir entrance and use the posted trail map to choose a loop. Check the path conditions before committing to the longer Kirkjan option.',
    'Look for openings in the rock that frame the next group of towers. Keep both feet on the trail when lining up the arches.',
    'Do I need to hike up Hverfjall to see Dimmuborgir?', 'No. The lava field has its own entrance and loop trails.',
  ], [
    '黑暗城堡熔岩区（Dimmuborgir）', '沿米湖东岸步道探索凝固的熔岩塔和天然拱门。', '这里的地貌源于约 2300 年前的熔岩流。熔岩湖排空后，岩柱和岩壁保留了下来。',
    '一路可看到尖塔、凹穴和拱门不断变换轮廓。被称为 Kirkjan 的岩洞，入口像教堂拱顶。', '从景区入口出发，按现场示意图选择环线。前往 Kirkjan 的路线更长，先查看步道状况。',
    '试着用近处的岩石孔洞框住远处的岩塔。在步道内调整角度即可。', '必须先爬惠尔山才能到这里吗？', '不用。熔岩区有自己的入口和环形步道。',
  ]),
  place('skutustadagigar', 'Skútustaðagígar', 'Skútustaðir, Lake Mývatn', 'myvatn', 'https://www.ust.is/english/visiting-iceland/protected-areas/north-east/skutustadagigar/', [
    'Skútustaðagígar pseudocraters', 'Follow the south-shore path where rows of low grassy craters reveal how hot lava interacted with water.',
    'Steam explosions formed these rootless cones when lava travelled across wet ground. They are concentrated around the little lake Stakhólstjörn.',
    'Look for rings of different sizes rather than one main summit. The short rises reveal the repetition of craters across the shoreline.',
    'Use the signed entrance at Skútustaðir on the south side of the lake. Stay on the paths around the soft ground and choose the posted loop that fits your visit.',
    'Use a low angle from the path to show several grass-covered rims overlapping, or include the pond behind them for context.',
    'How are these craters different from Hverfjall?', 'The cones were made by steam underneath a lava flow. They do not each mark a separate vent feeding lava from below.',
  ], [
    '斯库图库火山假口群（Skútustaðagígar）', '沿米湖南岸观察成排的草覆环丘，了解灼热的熔岩与水如何塑造地形。', '熔岩流经湿地时引发蒸汽爆炸，形成这些没有岩浆通道的圆锥丘。它们集中在 Stakhólstjörn 小湖周围。',
    '这里有大小不一的一系列环丘。从步道较高处看，同样的环形轮廓沿湖岸反复出现。', '从米湖南岸 Skútustaðir 的标识入口进入。湿软地面请沿路通过，根据现场路牌选择合适的环线。',
    '从步道低角度拍摄，可让几道长草的口缘在画面中重叠。把小湖放进背景则更容易看出地貌所处的位置。', '这些火山口与惠尔山有什么不同？', '这些环丘是熔岩流底部的蒸汽爆炸形成的，每座丘下方并没有独立的岩浆喷发通道。',
  ]),
  place('hofdi', 'Höfði', 'Lake Mývatn', 'myvatn', myvatn, [
    'Höfði lakeside woodland', 'Take a woodland walk on a small Mývatn peninsula with views between trees and lava stacks in the water.',
    'The woodland was developed through decades of planting, making this headland a markedly different landscape from the open volcanic ground nearby.',
    'Look out over the lake from gaps in the woods. The water and the lava pillars offshore are easiest to distinguish once you reach the shoreline viewpoints.',
    'Use the signed Höfði access on the east shore of Mývatn and follow the peninsula paths. Check the entrance and route boards on arrival.',
    'Use a gap between trees as a frame for the lake. The quiet water on a calm day is useful for reflections of the dark lava.',
    'Is this the Reykjavík Höfði house?', 'No. Search for Höfði on Lake Mývatn. This visit is a woodland walk.',
  ], [
    '赫夫迪湖畔林地（Höfði）', '步行探索伸入米湖的小半岛，从林间望向湖中的熔岩柱。', '经过数十年种植，岬角形成了一片林地，与周围开阔的火山地带形成鲜明对比。',
    '从树木间的空隙向湖上看。抵达湖畔观景位置后，更容易分辨水面和离岸的熔岩柱。', '沿米湖东岸找到标有 Höfði 的入口，在半岛步道上游览。入口与步道以现场标示为准。',
    '用两株树之间的空隙框住湖面。在无风的日子，可以拍深色熔岩的倒影。', '这里是雷克雅未克的赫夫迪故居吗？', '不是。请搜索米湖的 Höfði，这里是一处湖畔林地。',
  ]),
  place('grjotagja', 'Grjótagjá', 'Reykjahlíð, Lake Mývatn', 'myvatn', myvatn, [
    'Grjótagjá lava cave', 'Visit the lava rift near Reykjahlíð and see the geothermal pool from the cave entrance if open.',
    'The cave once served as a local bathing spot. Volcanic activity in the Krafla system heated the water and changed how the cave could be used.',
    'Above ground, the crack explains where the cave sits within the lava. From the entrance, the contrast between dark rock and blue water is the main sight.',
    'Use the signed Grjótagjá approach near Reykjahlíð. Read the signs and assess the boulders at the entrance. Keep out if access is closed or footing is poor.',
    'Expose for the bright water from stable ground. Allow the surrounding rock to fall into shadow and avoid obstructing the entrance.',
    'Can I swim in Grjótagjá?', 'No. Treat it as a short sightseeing stop and obey the site signs.',
  ], [
    '格尔乔塔焦熔岩洞（Grjótagjá）', '探访雷恰利兹附近的熔岩裂隙，开放时在洞口看地热水池。', '洞中水池曾供当地人洗浴，克拉夫拉火山系统的活动使水温升高，改变了洞穴的使用方式。',
    '从地面观察裂缝，能理解洞穴在熔岩中的位置。洞口最明显的看点是深色岩壁与蓝色水面之间的反差。', '从雷恰利兹附近沿路牌前往。先阅读现场告示，留意洞口乱石。如遇关闭或落脚不稳，在外面观看即可。',
    '从稳固处对较亮的水面测光，让岩壁留在暗部。取景时请留出洞口通行空间。', '可以在洞里下水吗？', '不可以。这里适合短暂停留观赏，请遵守现场告示。',
  ]),
  place('storagja', 'Stóragjá', 'Reykjahlíð, Lake Mývatn', 'myvatn', myvatn, [
    'Stóragjá lava rift', 'See a narrow lava fissure beside Reykjahlíð, with a more demanding entrance than the better-known Grjótagjá.',
    'Geothermal water collects below the steep walls of this fissure. It is a separate site from Grjótagjá, despite their similar names and blue water.',
    'The narrow opening and steep walls are the main features. The top of the fissure gives a better sense of its shape than the underground pool alone.',
    'Navigate to Stóragjá at Reykjahlíð. The descent involves steep access and is a poor choice for anyone uncomfortable on wet, tight terrain. Visit with a local guide if you want to explore below and access permits it.',
    'Shoot along the fissure from stable public ground. A vertical frame shows the depth without leaning over the edge.',
    'Is Stóragjá suitable for bathing?', 'Plan a viewing stop. Regional visitor information flags water-quality concerns, and access into the fissure is steep.',
  ], [
    '斯托拉焦熔岩裂隙（Stóragjá）', '查看雷恰利兹旁的狭窄熔岩裂隙，这里的入口比知名的 Grjótagjá 更难走。', '地热水积在陡峭的裂隙墙下。这里与 Grjótagjá 都有蓝色水面，名称也相似，但两者是独立景点。',
    '狭窄的开口和陡直的岩壁值得留意。留在地面观察，更容易看明白整条裂隙的形状。', '导航到雷恰利兹的 Stóragjá。下到裂隙内需经过陡峭路段，湿滑狭窄地形不适合所有游客。想往下探访时可先请当地向导确认是否开放。',
    '从安全稳固的公共区域顺着裂隙拍摄，不必靠近边缘。竖构图有利于表现深度。', '可以在这里泡澡吗？', '建议只观赏。当地旅游资料提示这里有水质问题，进入裂隙的路也很陡。',
  ]),
  place('reykjahlid-church', 'Reykjahlíðarkirkja', 'Reykjahlíð, Lake Mývatn', 'myvatn', myvatn, [
    'Reykjahlíð church', 'See the white church and its setting beside the lava at the north end of Lake Mývatn.',
    'Local accounts remember the lava from the eighteenth-century Mývatn Fires flowing close to the church site. The church and cemetery give the lava landscape a human scale.',
    'Look for the simple white walls and blue roof, set against dark volcanic ground. The grounds are a place of worship and remembrance.',
    'Head to Reykjahlíð and use the public approach to the church. Expect an exterior visit unless the parish has published a public opening for that day.',
    'Take a wide exterior photo from the public approach to show how close the lava lies. Give worshippers and cemetery visitors space.',
    'Is the current church from the time of the eruption?', 'The story concerns the historic church site. Use the current parish information for the building’s history and access.',
  ], [
    '雷恰利兹教堂（Reykjahlíðarkirkja）', '到米湖北端看白色教堂和紧邻的熔岩地带。', '当地传说记载，18 世纪米湖火山喷发的熔岩一度逼近教堂所在地。教堂和墓园让人看到这片熔岩地貌与当地生活的联系。',
    '留意朴素的白墙和蓝色屋顶与深色熔岩的对照。这里也用于礼拜和纪念。', '到雷恰利兹后，请经教堂的公共通道前往。除非教区公布当天开放，请按外观参观来安排。',
    '从公共通道拍一张广角外观，把旁边的熔岩也拍进去。给礼拜者和扫墓者留出空间。', '现在的教堂是喷发时的建筑吗？', '传说讲的是旧教堂的地点。当前建筑历史和开放以教区资料为准。',
  ]),
  place('sigurgeir-bird-museum', 'Sigurgeir’s Bird Museum', 'Ytri-Neslönd, Lake Mývatn', 'myvatn', 'https://www.fuglasafn.is/?lang=en', [
    'Sigurgeir’s Bird Museum', 'Use the lakeside bird collection to put Mývatn’s ducks and other waterbirds into context before watching them outdoors.',
    'The collection grew from the work of local bird collector Sigurgeir Stefánsson. The museum stands on the lakeshore near Ytri-Neslönd.',
    'Inside, compare plumage and eggs in the display cases. Outdoors, the shoreline and open water offer a different view of the lake as bird habitat.',
    'Navigate to the museum at Ytri-Neslönd and check its visitor information before driving over. Limit lakeshore walking to public access and signed paths.',
    'Outside, use a longer lens to photograph waterbirds without getting close. Ask staff about photography before taking pictures indoors.',
    'Will I see live birds in the displays?', 'The indoor exhibits are specimens. Wild birds may be visible outdoors and vary with the season.',
  ], [
    '西古尔盖尔鸟类博物馆', '先看湖畔的鸟类收藏，再到户外观察米湖的野鸭和其他水鸟。', '本地收藏者西古尔盖尔·斯特凡松的标本收藏逐步发展成为这座博物馆，馆址位于 Ytri-Neslönd 附近的湖岸。',
    '室内可对比不同鸟类的羽色和卵。走到室外，又能从湖岸和开阔水面看到米湖作为鸟类栖息地的一面。', '导航到 Ytri-Neslönd 的馆址，出发前查询馆方来访信息。湖岸步行限于公开可达、有标识的区域。',
    '户外拍水鸟时用长焦保持距离。室内拍摄前向馆方确认。', '展柜里是活鸟吗？', '馆内陈列标本。户外可能见到野生鸟类，情况随季节而变。',
  ], { en: 'Fuglasafn Sigurgeirs', zh: '西古尔盖尔鸟类博物馆', source: 'https://www.fuglasafn.is/?lang=en' }),
  place('earth-lagoon', 'Earth Lagoon Mývatn', 'Reykjahlíð, Lake Mývatn', 'myvatn', lagoon, [
    'Earth Lagoon Mývatn', 'Plan a geothermal bath near Reykjahlíð with changing facilities and an outdoor view over the volcanic landscape.',
    'The facility opened in 2004 as Mývatn Nature Baths. Regional geothermal water supplies its outdoor bathing pools.',
    'The open-air pools are the main experience. Steam shifts with the wind and the view opens out towards the Mývatn landscape.',
    'Use the Earth Lagoon entrance near Reykjahlíð and check current booking windows and entry rules on the operator’s site. Bring swimwear and follow the changing-room instructions.',
    'Use public, approved viewing areas for wide pictures of the steam and landscape. Keep other bathers and changing areas out of photos.',
    'Is this the same as the Blue Lagoon near Keflavík?', 'No. Earth Lagoon is close to Lake Mývatn in North Iceland and has a separate booking system.',
  ], [
    '米湖大地温泉（Earth Lagoon）', '到雷恰利兹附近泡地热温泉，在室外池看周围的火山地貌。', '这里于 2004 年以米湖天然温泉的名义开业，室外浴池使用本地地热水。',
    '露天泡池是主要体验。蒸汽随风飘动，视野朝米湖一带的火山景观展开。', '前往雷恰利兹附近的 Earth Lagoon 入口。先在运营方网站核对可预约时段和入场规则，自备泳衣并遵守更衣区提示。',
    '从允许拍照的公共观景位置拍蒸汽和地貌全景，避开浴客和更衣区。', '这里是凯夫拉维克附近的蓝湖吗？', '不是。它在冰岛北部米湖附近，需通过这里自己的预约系统订票。',
  ], { en: 'Earth Lagoon Mývatn', zh: 'Earth Lagoon Mývatn', source: lagoon }),
  place('lofthellir', 'Lofthellir Lava Cave', 'Mývatnsöræfi, Lake Mývatn', 'myvatn', myvatn, [
    'Lofthellir ice cave', 'A guided lava-cave trip east of Lake Mývatn, where perennial cold preserves underground ice formations.',
    'The passage is a lava cave that stays cold enough for ice to build up over time. This is ice inside volcanic rock, away from a glacier.',
    'Look for the contrast between the rock ceiling and ice formations on the cave floor. The formations are fragile, and the tight entry shapes the visit.',
    'Book a guided trip from the Mývatn area. Use the operator’s pickup location, clothing guidance and fitness information instead of travelling to the cave pin yourself.',
    'Ask the guide where to stop for an image. A steady handheld exposure can show the ice while leaving the tight passage clear.',
    'Can I visit without a guide?', 'Regional visitor information lists access through guided tours. Confirm the operator’s season and requirements before planning the trip.',
  ], [
    '洛夫特赫利尔熔岩冰洞（Lofthellir）', '随向导前往米湖以东的熔岩洞，观察常年低温保存的地下冰体。', '这是一个熔岩洞。低温使水逐步结冰，在远离冰川的火山岩通道内也能形成持续存在的冰体。',
    '岩质洞顶与洞底冰体的反差最鲜明。冰体脆弱，洞口狭窄，参观时需要留意向导指引。', '从米湖一带预约导览。按运营方确认的集合点、着装和体力要求准备，不要自行开往地图图钉。',
    '请向导指出适合停留取景的位置。手持拍摄可减少停留时对狭窄通道的影响。', '可以无向导进入吗？', '地区旅游资料把这里列为随团参观项目。出发前向运营方确认开放季节和要求。',
  ]),
  place('stora-viti', 'Stóra-Víti', 'Krafla, Reykjahlíð', 'krafla', myvatn, [
    'Stóra-Víti crater lake', 'See the water-filled explosion crater above the Krafla power station and distinguish it from Víti at Askja.',
    'The crater dates to the eruption of 1724 at the start of the Mývatn Fires. Water now fills much of the crater floor.',
    'The shore, dark slopes and bright water change appearance with cloud cover. The view over the bowl also places the crater in the larger Krafla landscape.',
    'From the Krafla road, navigate to the marked Stóra-Víti visitor approach. Stay on open marked paths. If the rim is muddy or closed, use the view from the entrance area.',
    'Photograph from a signed viewpoint and use part of the rim as foreground. Cloud breaks often create more contrast between water and rock.',
    'Is this the Víti crater in Askja?', 'No. This crater is at Krafla near Lake Mývatn. Askja is a different highland destination.',
  ], [
    '克拉夫拉维提火山口湖（Stóra-Víti）', '到克拉夫拉电站上方看积水的爆炸火山口，与阿斯恰的同名景点区分开。', '火山口形成于 1724 年米湖火山活动开始时的喷发。如今积水覆盖了大半个火山口底部。',
    '浅色湖水、深色斜坡和湖岸会随光线变化。俯看凹地时，也能辨认它和克拉夫拉其他地貌的位置关系。', '沿克拉夫拉公路前往有标识的入口。仅走开放步道。如口缘路段泥泞或关闭，可在入口区域观赏。',
    '从有标识的观景位置拍摄，把一段口缘作为前景。云隙光有时会加强水面和岩石的对照。', '这是阿斯恰的 Víti 火山口吗？', '不是。这里在米湖附近的克拉夫拉，阿斯恰是另一处高地目的地。',
  ]),
  place('leirhnjukur', 'Leirhnjúkur', 'Krafla, Lake Mývatn', 'krafla', myvatn, [
    'Leirhnjúkur lava field', 'Walk through Krafla’s recent lava flows and geothermal ground on the designated Leirhnjúkur route.',
    'Leirhnjúkur lies in the Krafla volcanic system. Flows from Krafla’s late twentieth-century eruption sequence lie beside much older terrain.',
    'Look for the break between rough lava and lighter hydrothermally altered ground. Steam can reveal heat beneath an apparently solid surface.',
    'Use the signed Leirhnjúkur trailhead on the Krafla road. Stay on the route and boardwalks where provided. Follow closures rather than finding a way around unstable terrain.',
    'Give steam room in the frame and include rough lava in the foreground. Keep your tripod within the marked trail.',
    'Can I continue directly around Víti from this trail?', 'The two are different stops. Navigate separately to the Stóra-Víti visitor approach for the crater lake.',
  ], [
    '莱尔纽库尔熔岩原（Leirhnjúkur）', '沿指定路线穿过克拉夫拉较年轻的熔岩流和地热区。', '莱尔纽库尔属于克拉夫拉火山系统。20 世纪后期喷发留下的熔岩紧邻更早的地貌。',
    '留意粗糙熔岩与浅色地热蚀变地面的分界。即使地面看起来已经凝固，蒸汽也可能显示地下仍有热量。', '从克拉夫拉公路上有标识的登山口进入，沿划定路线和木栈道走。遇到关闭路段请返回。',
    '给上升的蒸汽留足画面空间，用粗糙熔岩作前景。三脚架不要伸出步道。', '沿这条路线能直接绕到 Víti 湖吗？', '两处各有入口。想看火山口湖，请另行导航至 Stóra-Víti 的游客入口。',
  ]),
  place('krafla-visitor-centre', 'Krafla Visitor Centre', 'Krafla Power Station, Reykjahlíð', 'krafla', krafla, [
    'Krafla Visitor Centre', 'Find out how steam from the Krafla volcanic system became part of Iceland’s electricity supply.',
    'Landsvirkjun’s geothermal station began generating power in the 1970s. Its visitor centre interprets a working power landscape.',
    'Connect the outdoor pipes and industrial buildings with the explanation of how the station uses underground heat. This is a useful complement to the lava-field walks.',
    'Use the official visitor centre directions and check its current availability before leaving Reykjahlíð. Keep to the visitor entrance and designated grounds at the power station.',
    'Photograph the relationship between the pipes and surrounding mountains from public areas. Follow the site’s rules before taking indoor or equipment photos.',
    'Is there public access to the machinery?', 'Plan for the official visitor centre. Ask Landsvirkjun about any separate tours or access offered on your date.',
  ], [
    '克拉夫拉电站游客中心', '了解克拉夫拉火山系统的蒸汽如何成为冰岛的电力来源。', '冰岛国营电力公司的地热电站于 20 世纪 70 年代开始发电。游客中心介绍这处仍在运转的发电设施。',
    '结合户外管道和厂房，看地下热量怎样用于发电。参观后再到熔岩原，更容易理解这里的地热用途。', '按照运营方指引找到游客中心，离开雷恰利兹前确认是否开放。到电站后只走游客入口和允许开放的区域。',
    '从公共区域拍管线和周边山地同框。拍摄室内或设备前遵循场地规则。', '可以进入机器所在的厂房吗？', '普通参观以游客中心为主。如需了解专门参观项目，请直接查询运营方。',
  ], { en: 'Landsvirkjun', zh: '冰岛国营电力公司（Landsvirkjun）', source: krafla }),
  place('dettifoss', 'Dettifoss', 'Jökulsárgljúfur, Vatnajökull National Park', 'canyon', park + '/dettifoss-d1', [
    'Dettifoss waterfall', 'Choose an approach to the glacial waterfall and see the river drop into the Jökulsárgljúfur canyon.',
    'Jökulsá á Fjöllum descends through a landscape carved in part by catastrophic floods. Dettifoss is the southern anchor of the protected canyon area.',
    'The main sight is the full river dropping across the cliff, with spray that can obscure the opposite bank. The northward view helps show the depth of the canyon.',
    'The park lists the D1 walk from the west-side access off Road 862. Check current road and trail status before leaving Route 1 and use the side of the river you intended to visit.',
    'A fast exposure separates the falling water from the spray. Keep a cloth ready for the lens and stay behind viewing barriers.',
    'Can I cross the river at the falls?', 'Plan your approach and return on the same bank. The park’s west-side visitor walk is reached from Road 862.',
  ], [
    '黛提瀑布（Dettifoss）', '选定冰川河的一侧前往，看河水跌入杰古沙河峡谷。', '杰古沙河流经一部分由灾变洪水雕刻的地形。黛提瀑布是这一峡谷保护区南端的主要景点。',
    '整条河从崖边跌落，水雾有时会盖住对岸。向北看，更容易体会峡谷的深度。', '国家公园在 862 号公路西岸一侧设有 D1 步道。从 1 号公路出发前查道路和步道最新状况，确认导航选中了想去的一岸。',
    '用较快的快门分开水流与水雾。随身带擦镜布，并且留在观景护栏内。', '能在瀑布旁跨河吗？', '请按同一岸进出规划。国家公园公布的西岸路线经 862 号公路抵达。',
  ], parkManager),
  place('selfoss-waterfall', 'Selfoss waterfall', 'Jökulsárgljúfur, Vatnajökull National Park', 'canyon', park + '/s2-dettifoss-og-selfoss', [
    'Selfoss waterfall in Jökulsárgljúfur', 'Visit the upstream waterfall where glacial water spills down a wide, broken rim before reaching Dettifoss.',
    'Selfoss is a step in Jökulsá á Fjöllum upstream from Dettifoss, within the same flood-shaped canyon landscape.',
    'Its series of lower cascades is spread across the rock lip. Look up the river to see the line of water begin to curve.',
    'Use the national park’s D2 Dettifoss–Selfoss route on the west bank. Allow time for the extra section from the Dettifoss approach and stay on the open signed trail.',
    'A wide frame can show several curtains of water together. Resist stepping onto wet rock to photograph the whole curve.',
    'Will a search for Selfoss take me to the town?', 'It may. Include Jökulsárgljúfur or Dettifoss to locate the waterfall in northeastern Iceland.',
  ], [
    '塞尔福斯瀑布（Selfoss）', '到黛提瀑布上游，看冰川河从宽阔而不连续的崖缘分股落下。', '这是杰古沙河上、黛提瀑布上游的一级跌水，位于同一片由洪水塑造的峡谷地貌内。',
    '几段较低的水帘散布在岩沿。顺着河流向上游看，可以看到水帘排列开始转弯。', '按国家公园标注的西岸 D2 步道游览两处瀑布。从黛提瀑布方向走来需为延伸路段留时间，仅走开放的标记路线。',
    '用广角把几道水帘收入同一个画面。不要为拍下完整弧线而踏上湿岩。', '搜索 Selfoss 会找到同名小镇吗？', '有可能。请带上 Jökulsárgljúfur 或 Dettifoss，才能定位到冰岛东北的这座瀑布。',
  ], parkManager),
  place('hafragilsfoss', 'Hafragilsfoss viewpoint', 'Jökulsárgljúfur, Vatnajökull National Park', 'canyon', park, [
    'Hafragilsfoss canyon viewpoint', 'Look down into the glacial river’s gorge below Dettifoss and see the next major descent.',
    'Hafragilsfoss is downstream of Dettifoss in the protected reach of Jökulsá á Fjöllum. The deep channel records both erosion and volcanic activity.',
    'The higher view gives context: the waterfall takes up only part of a broad scene of canyon walls, raw rock and glacial water.',
    'Use the signed viewpoint access and check the park map for the bank and approach. Treat the D3 lowland hike as a separate, difficult route.',
    'A slightly longer lens can isolate the pale water against the dark canyon. Keep fully within the signed viewing area.',
    'Do I need to descend to the river for the view?', 'No. Choose the signed overlook; the park rates the separate Hafragil lowland route difficult.',
  ], [
    '哈夫拉吉尔瀑布观景点（Hafragilsfoss）', '俯瞰黛提瀑布下游的冰川河谷和河道下一处主要跌水。', '瀑布在黛提瀑布下游，也位于杰古沙河的保护河段。深切的河槽保留了河流侵蚀和火山活动的痕迹。',
    '高处俯视时，瀑布只是画面的一部分，周围还可看到峡壁、裸岩和冰川河水。', '使用有指示牌的观景入口，先按公园地图确认河岸和到达路线。D3 谷底徒步是另一条难度较高的线路。',
    '稍长的焦距能突出深色峡谷中的浅色水流。拍摄全程留在有标示的观景范围内。', '必须下到河边才能看到吗？', '不用。选择有标识的上方观景点，另设的 Hafragil 谷底线路被公园列为困难。',
  ], parkManager),
  place('asbyrgi', 'Ásbyrgi', 'Norðurþing, Vatnajökull National Park', 'canyon', park, [
    'Ásbyrgi horseshoe canyon', 'Enter a deep, wooded horseshoe canyon at the northern end of Jökulsárgljúfur.',
    'Geological explanations link the canyon to enormous glacial floods. Local folklore offers a different origin, the hoofprint of Sleipnir.',
    'Look at how the sheer walls enclose the woodland. At the entrance, the central rock island makes the broad shape easier to understand.',
    'Arrive via Route 85 and read the national park trail map. Choose between the canyon-floor walk and a separately signed higher route based on conditions.',
    'Keep trees in the foreground and give the walls room in a wide frame. Near the floor, look for a calm reflection without disturbing the pond margin.',
    'Are all Ásbyrgi walks on the rim?', 'No. The park describes both canyon-floor alternatives, including Botnstjörn, and longer trails with exposed sections.',
  ], [
    '奥斯比吉马蹄形峡谷（Ásbyrgi）', '进入杰古沙河峡谷北端一处林木茂密、两侧高崖环抱的马蹄形峡谷。', '地质解释认为巨大的冰川洪水塑造了这处峡谷。当地传说则称它是八足神马斯莱普尼尔留下的蹄印。',
    '看高耸的岩壁怎样包住谷底林地。入口中央的岩岛有助于看清峡谷整体的形状。', '从 85 号公路进入，先查看国家公园路线图。根据实际情况，选择谷底路线或另有标记的高处路线。',
    '用树作前景，在广角画面里给崖壁留下空间。到了谷底可拍平静水面的倒影，别打扰池塘边缘。', '奥斯比吉的步道都在崖顶吗？', '不是。公园有通往 Botnstjörn 等处的谷底步道，也有包含暴露路段的较长路线。',
  ], parkManager),
  place('botnstjorn', 'Botnstjörn', 'Ásbyrgi, Vatnajökull National Park', 'canyon', park + '/a1-botnstjorn', [
    'Botnstjörn pond', 'Take the short canyon-floor route to the pond at the enclosed end of Ásbyrgi.',
    'The pond sits inside the wooded, flood-shaped Ásbyrgi canyon. Its position beneath the walls makes it distinct from the rim walks.',
    'The most rewarding view is across the still water to the rock walls and trees. Look from the trail for birds without approaching the shoreline.',
    'Use the park’s A1 Botnstjörn route and follow signs to its canyon-floor starting point. Check the park’s current access notes before relying on specific mobility arrangements.',
    'Wait for calm patches to reflect the cliff. Shoot from the path and keep the camera quiet around wildlife.',
    'Can I see the pond without doing a cliff walk?', 'Yes. A1 is the park’s short designated route to the pond on the canyon floor.',
  ], [
    '博特恩斯湖（Botnstjörn）', '沿短距离谷底步道，走到奥斯比吉峡谷尽头的小湖。', '湖位于洪水塑造、如今有林木覆盖的奥斯比吉峡谷内。它在崖壁脚下，与崖顶路线的体验完全不同。',
    '隔着平静水面看岩壁和树木。可在步道上观察鸟类，留出足够距离。', '跟随国家公园的 A1 步道标识到谷底起点。如有无障碍需求，先查公园当前的通行说明。',
    '等水面平静时拍崖壁倒影。留在路径内，遇到野生动物安静拍摄。', '不用走崖顶也能到湖边吗？', '可以。A1 是国家公园指定的谷底短线。',
  ], parkManager),
  place('hljodaklettar', 'Hljóðaklettar Echo Rocks', 'Vesturdalur, Vatnajökull National Park', 'canyon', park + '/v2-hljodaklettar-trollid', [
    'Hljóðaklettar basalt formations', 'See the Echo Rocks in Vesturdalur, where basalt columns point in several directions along the same trail.',
    'The formations are remnants of volcanic activity exposed within the flood-shaped Jökulsárgljúfur landscape.',
    'Look for clusters of basalt columns in fans and other orientations. The silhouettes are different from the upright columns visitors may recognise from waterfalls.',
    'Start in Vesturdalur and check its park trailboard. V2 is the short signed Echo Rocks outing; V3 makes a longer, more challenging circuit.',
    'Frame a full cluster before moving closer to the column joints. Keep the camera on the marked route so other walkers can pass.',
    'Which trail is the shorter introduction?', 'Look for V2 towards Tröllið on the current Vesturdalur trail map.',
  ], [
    '回声岩柱群（Hljóðaklettar）', '在 Vesturdalur 探索同一条步道上朝不同方向排列的玄武岩柱。', '这些岩柱是火山活动的残余，在洪水塑造的杰古沙河峡谷中露出地面。',
    '留意扇状等不同排列。这些轮廓和常在瀑布照片中看到的竖直岩柱不同。', '从 Vesturdalur 开始，先看国家公园步道牌。V2 是较短的回声岩路线，V3 是更长、难度更高的环线。',
    '先拍下一整簇岩柱，再拍柱体接缝细节。请在标记步道内拍摄，也给行人留出空间。', '第一次去可选哪条短路线？', '在当前的 Vesturdalur 路线图上找通向 Tröllið 的 V2。',
  ], parkManager),
  place('raudholar', 'Rauðhólar', 'Vesturdalur, Jökulsárgljúfur', 'canyon', park + '/v4-raudholahringur', [
    'Rauðhólar red hills in Vesturdalur', 'Continue beyond the Echo Rocks to the red volcanic deposits above the canyon.',
    'The red hills are part of the volcanic terrain exposed around Vesturdalur. Their reddish rock and loose material stand apart from the darker formations lower on the route.',
    'Compare the slopes with the basalt near Hljóðaklettar. The change in colour and texture is most apparent when both are in view.',
    'Use the park’s signed V4 route from Vesturdalur, listed as challenging. Check the current map and count the return when deciding how far to walk.',
    'Use side light to bring out the slope texture. A darker patch of rock or vegetation makes the red material easier to see.',
    'Is this the Rauðhólar near Reykjavík?', 'No. Search with Vesturdalur or Jökulsárgljúfur to find these red hills.',
  ], [
    '劳德霍拉尔红丘（Rauðhólar）', '沿路线走过回声岩，继续到峡谷上方看红色火山堆积地貌。', '红丘是 Vesturdalur 附近裸露火山地层的一部分。红色岩石和松散碎屑与步道较低处的深色岩群不同。',
    '对比红色坡面和 Hljóðaklettar 的玄武岩。把两者放在同一视野内，颜色与质感的变化最明显。', '从 Vesturdalur 走公园标注的 V4，官方将它列为有挑战的路线。出发前看当前地图，并给返程留足体力。',
    '侧光有利于表现坡面纹理。可以让一点深色岩石或植被入画，突出红色堆积物。', '这是雷克雅未克附近的同名红丘吗？', '不是。搜索时带上 Vesturdalur 或 Jökulsárgljúfur。',
  ], parkManager),
  place('karl-og-kerling', 'Karl og Kerling', 'Vesturdalur, Jökulsárgljúfur', 'canyon', park + '/v5-karl-og-kerling', [
    'Karl og Kerling cliffs', 'Walk to a view of the two rock figures on a distinct Vesturdalur trail.',
    'The paired rock formations stand in the volcanic, flood-shaped landscape around Vesturdalur. Their names describe a man and a woman.',
    'Look for the two shapes separated against the background. From the designated route the pair reads more clearly than from farther up the valley.',
    'At Vesturdalur use the park map to find V5, listed as the Karl and Kerling walk. Follow the available signed route rather than heading directly across rough ground.',
    'Try a longer lens and place both rock figures in the same composition. Leave enough background to show their silhouettes.',
    'Is this on the main Hljóðaklettar loop?', 'The park assigns Karl and Kerling its own V5 trail. Use that label at the Vesturdalur trailhead.',
  ], [
    '卡尔与凯尔灵双岩（Karl og Kerling）', '沿 Vesturdalur 一条独立的步道，去看两座形似人物的岩石。', '双岩立在 Vesturdalur 周围受火山和洪水共同塑造的地貌中，名字分别指男人和女人。',
    '留意背景前相互分开的两个轮廓。从指定路线看，它们比在远处谷地内更容易辨认。', '在 Vesturdalur 查看公园地图，寻找标有 Karl and Kerling 的 V5。沿开放的有标记路线走，不要直接穿过崎岖地面。',
    '用稍长的镜头把两座石形放入同一画面，留出足够背景展示各自轮廓。', '双岩在回声岩主环线上吗？', '公园单列了 V5。请在 Vesturdalur 起点按这个编号找路线。',
  ], parkManager),
  place('holmatungur', 'Hólmatungur', 'Jökulsárgljúfur, Vatnajökull National Park', 'canyon', park + '/h1-hringur-i-holmatungum', [
    'Hólmatungur canyon walks', 'See how springs and low green ground change the character of Jökulsárgljúfur between Vesturdalur and Dettifoss.',
    'This middle part of the canyon sits between the gravelly south and the forests farther north. Tributary water creates a landscape within the broader glacial river valley.',
    'Look for smaller clear streams and wet ground before the wider valley opens up. The visit is about the side valleys and vegetation as much as the main river.',
    'Use the signed Hólmatungur access off Road 862 and follow the park’s H1 circuit if conditions allow. The multistage canyon trail requires a separate plan.',
    'Frame water with low vegetation on the signed path. In overcast light, a wide shot can show several layers from stream to cliff.',
    'Can I visit Hólmatungur without a multiday hike?', 'Yes. The park lists the H1 local circuit separately from the long canyon traverse.',
  ], [
    '霍尔马通古尔峡谷步道（Hólmatungur）', '在 Vesturdalur 和黛提瀑布之间看泉水与低处的绿色地带如何改变峡谷景观。', '峡谷中段位于南侧砾石地和北侧林地之间。支流在冰川河谷地内形成各自的景观。',
    '在宽谷打开前留意清澈的小水流与湿地。探访的不只是主河道，也包括支谷和植物。', '从 862 号公路经有路牌的入口进入。状况合适时可走 H1 环线。多段式峡谷长线需另作安排。',
    '在标记路径上把低矮植物和水流一起拍入画面。阴天用广角，可表现从溪流到崖壁的层次。', '必须走多日长线才能来吗？', '不用。公园另设 H1 当地环线，与贯穿峡谷的长线不同。',
  ], parkManager),
  place('katlar', 'Katlar', 'Hólmatungur, Jökulsárgljúfur', 'canyon', park + '/h2-katlar', [
    'Katlar in Jökulsárgljúfur', 'Follow the short, challenging H2 route to a narrow reach of the glacial river near Hólmatungur.',
    'The river has cut a tightly confined passage at Katlar. This small feature makes the canyon’s scale on either side particularly apparent.',
    'Look for where the breadth of the main river gives way to a much narrower channel between rock walls.',
    'Follow the H2 Katlar route shown on the park’s current Hólmatungur map. Despite its short distance, the park classes it as challenging.',
    'Use a slightly wider view to show both walls and the river together. Choose a secure position on the trail and stay back from drop-offs.',
    'Is H2 the same as the Hólmatungur circuit?', 'No. H2 is the Katlar outing, and H1 is the separate local circuit.',
  ], [
    '卡特拉尔峡谷窄段（Katlar）', '沿较短但有挑战的 H2 步道，前往 Hólmatungur 附近的冰川河狭窄段。', '河水在 Katlar 切出一段收紧的通道。从这一局部地貌，可以直观看到两侧峡谷尺度的变化。',
    '留意宽河面如何转入岩壁夹着的窄水道。', '以国家公园当前的 Hólmatungur 路线图为准，找 H2 Katlar。尽管距离较短，公园仍把这条路线列为有挑战。',
    '可以用稍广的构图，把两道岩壁和河水一起拍入画面。选步道内稳固的位置，远离落差边缘。', 'H2 是 Hólmatungur 环线吗？', '不是。H2 通往 Katlar，H1 才是另外的当地环线。',
  ], parkManager),
  place('gljufrastofa', 'Gljúfrastofa Visitor Centre', 'Ásbyrgi, Vatnajökull National Park', 'canyon', park + '/gljufrastofa', [
    'Gljúfrastofa Visitor Centre', 'Start at the national park’s Ásbyrgi visitor centre to understand the canyon and choose an open walking route.',
    'Gljúfrastofa is the park’s local interpretation hub. The protected Jökulsárgljúfur area joined Vatnajökull National Park in 2008.',
    'The exhibition places geological and natural history in one place. Ask the rangers about conditions at the different canyon trails before committing to a drive.',
    'Head to the visitor centre at Ásbyrgi from Route 85. Check the national park site for seasonal opening and current trail notices.',
    'For the visitor centre itself, use an exterior angle that includes the wooded canyon setting. Ask staff before photographing exhibits.',
    'Is this the same stop as Botnstjörn?', 'No. Stop here for orientation, then follow the park map to the separate canyon-floor walk if you want to see the pond.',
  ], [
    '格吕夫拉斯托法游客中心（Gljúfrastofa）', '先到奥斯比吉的国家公园游客中心了解峡谷，再选择当天开放的路线。', '游客中心是国家公园在这一地区的解说点。杰古沙河峡谷保护区于 2008 年成为瓦特纳冰川国家公园的一部分。',
    '展览把地质和自然历史集中介绍。计划开车去几个步道入口前，可以先向护林员了解各处状况。', '从 85 号公路去奥斯比吉游客中心。查询国家公园网站上的季节开放安排和步道通知。',
    '拍摄游客中心外观时可把林地峡谷背景也纳入画面。拍展品前先问工作人员。', '游客中心是 Botnstjörn 湖的同一个停靠点吗？', '不是。可先在这里问路，再按公园地图前往单独的谷底湖泊步道。',
  ], parkManager),
  place('husavik-whale-museum', 'Húsavík Whale Museum', 'Húsavík Harbour', 'coast', whale, [
    'Húsavík Whale Museum', 'See whale skeletons and learn about North Atlantic cetaceans beside Húsavík’s working harbour.',
    'The museum grew from a local whale exhibition into a permanent museum at the harbour. It connects marine biology with the town’s relationship to whales.',
    'Use the skeleton displays to understand scale, then look for the exhibits about whale species and their habitats.',
    'Navigate to the museum at Húsavík harbour and check the museum’s day-specific opening. Leave time to walk down to the waterfront if you have a separate boat booking.',
    'Photograph along a skeleton’s length if museum rules permit. Outside, include the harbour in your composition to show the setting.',
    'Does a museum visit include a whale-watching boat trip?', 'No. Museum visits and boat excursions are separate activities. Confirm each with the relevant operator.',
  ], [
    '胡萨维克鲸鱼博物馆', '在胡萨维克仍在运作的港口旁看鲸类骨骼，了解北大西洋的鲸豚。', '前身是本地鲸类展览，后来发展为港口旁的常设博物馆。展览把鲸类生物学与城镇的历史联系起来。',
    '先借骨骼展示体会鲸的大小，再看不同鲸类及其栖息地的展览。', '导航到胡萨维克港的博物馆，确认参观当天的开放时间。如另约了观鲸船，请给步行至码头留时间。',
    '如馆方允许，可顺着骨骼的长度拍摄。在外面可把港口拍入画面交代位置。', '博物馆门票含乘船观鲸吗？', '馆内参观和乘船是分别安排的活动，请分别向相应运营方确认。',
  ], { en: 'Húsavík Whale Museum', zh: '胡萨维克鲸鱼博物馆', source: whale }),
  place('geosea', 'GeoSea Geothermal Sea Baths', 'Húsavík', 'coast', sea, [
    'GeoSea baths in Húsavík', 'Soak in warm seawater above Skjálfandi Bay with a view along the North Iceland coast.',
    'GeoSea uses geothermal seawater in its bathing pools. The experience is tied to the coast, in contrast with the inland lakeside landscape at Mývatn.',
    'Look across the water towards the hills on the far side of Skjálfandi Bay. The pools and their edges bring the bay’s horizon into view.',
    'Use the GeoSea entrance above town and confirm booking, current opening and walking access with the operator. Allow extra time if pairing it with a harbour visit.',
    'Look for a horizon and pool edge in the same frame, from an approved spot and with no identifiable bathers in view.',
    'Is GeoSea the indoor municipal swimming pool?', 'No. It is a separate geothermal bathing facility above the coast.',
  ], [
    '胡萨维克 GeoSea 地热海水浴场', '在斯乔尔凡迪湾上方泡暖海水，视线沿冰岛北部海岸展开。', '浴场的泡池使用地热海水。这里以海湾为背景，与米湖的内陆湖岸景观不同。',
    '越过海面看斯乔尔凡迪湾对岸的山丘。露天池及其边缘把海湾的天际线带入视野。', '前往镇上方的 GeoSea 入口。向运营方核实预约、当前开放时间和步行通行状况。若同日还去港口，可多留一些时间。',
    '从允许拍摄的位置把池缘和海平线放在同一画面内，避开可识别的其他浴客。', '这里是胡萨维克的市立室内游泳池吗？', '不是。GeoSea 是位于海岸上方的一家独立地热浴场。',
  ], { en: 'GeoSea Geothermal Sea Baths', zh: 'GeoSea 地热海水浴场', source: sea }),
  place('husavik-church', 'Húsavíkurkirkja', 'Húsavík', 'coast', 'https://kirkjan.is/kirkjur/husavikurkirkja', [
    'Húsavík church', 'See the timber church above the harbour and look at its steep rooflines from the surrounding streets.',
    'The distinctive timber church dates from the early twentieth century and is associated with the Icelandic architect Rögnvaldur Ólafsson.',
    'The roof and spire give the structure a recognisable silhouette. The timber exterior distinguishes it from the harbour buildings below.',
    'Walk inland from the public harbour area towards the church. Confirm access with the parish if you want to see the interior.',
    'Choose a public street angle that separates the spire from neighbouring rooftops. Avoid photographing churchgoers without consent.',
    'Is the church at the whale museum?', 'No. The sites are distinct stops in central Húsavík. The church is uphill from the waterfront.',
  ], [
    '胡萨维克教堂（Húsavíkurkirkja）', '从港口上方的街道看木构教堂和陡峭的屋顶轮廓。', '这座木构教堂建于 20 世纪初，与冰岛建筑师勒格纳瓦尔杜尔·奥拉夫松有关。',
    '陡屋面和塔尖形成辨识度很高的轮廓。木结构外观也与下方的港区建筑不同。', '从港口公共区域向内陆沿街步行前往。想进入室内时，请先向教区核实是否开放。',
    '选一个能把塔尖与周围屋顶错开的公共街道角度。拍到礼拜者前应征得同意。', '教堂在鲸鱼博物馆里面吗？', '不在。两处都是镇中心的独立景点，教堂在高于码头的位置。',
  ], { en: 'Húsavíkurkirkja parish', zh: '胡萨维克教区', source: 'https://husavikurkirkja.is/' }),
  place('grenjadarstadur', 'Grenjaðarstaður Turf House Museum', 'Aðaldalur, Þingeyjarsveit', 'inland', 'https://www.husmus.is/en/grenjadarstadur', [
    'Grenjaðarstaður turf house', 'Visit the preserved turf farm in Aðaldalur to see how earth, stone and timber were used in rural buildings.',
    'Grenjaðarstaður was an important historic farm. Its surviving turf buildings preserve a form of construction adapted to Icelandic materials and weather.',
    'Start outside with the rounded grass roof and stone base. Inside, when open, note the changes in light and ceiling height between rooms.',
    'Navigate to Grenjaðarstaður in Aðaldalur and confirm museum hours before adding a stop between Mývatn and Húsavík.',
    'A broad exterior composition shows the grass roofs against the surrounding land. Ask before using flash or supports indoors.',
    'Can I plan an interior visit throughout the year?', 'Confirm the museum’s published schedule. Exterior access and an open museum interior are separate questions.',
  ], [
    '格伦亚达斯塔杜尔草皮屋', '在阿达尔达卢尔参观保存下来的草皮农舍，看当地曾如何用泥土、石块和木材建房。', '这里曾是一座重要的农庄。留下来的草皮建筑反映了先人如何利用冰岛的本地材料并应对天气。',
    '先在外面看圆拱的草顶和石砌底部。室内开放时，再留意不同房间的采光和层高。',
    '导航到阿达尔达卢尔的 Grenjaðarstaður。把它加入米湖与胡萨维克之间的行程前，先核实博物馆开放时间。', '从外面用广角让草皮屋顶和周围土地同框。室内用闪光灯或支架前先询问。',
    '一年四季都能入内吗？', '请核实博物馆发布的时段。能否走到外面和能否进入室内是两回事。',
  ], { en: 'Menningarmiðstöð Þingeyinga', zh: 'Þingeyingar 地方文化中心', source: 'https://www.husmus.is/en/grenjadarstadur' }),
  place('aldeyjarfoss', 'Aldeyjarfoss', 'Bárðardalur, Skjálfandafljót', 'inland', 'https://www.northiceland.is/en/destinations/nature/scenic-nature/aldeyjarfoss', [
    'Aldeyjarfoss waterfall', 'See the Skjálfandafljót river plunging past basalt columns at the upper end of Bárðardalur.',
    'The waterfall falls through basalt laid down by volcanic activity. Cooling joints in the rock formed the columns seen beside the water.',
    'Look at the rows of dark columns around the pale falling water. The pool below and bend in the cliffs help show the force and shape of the river.',
    'Use current road information before driving up Bárðardalur. The final approach towards the highlands is a separate access decision, with road and vehicle restrictions to verify.',
    'Frame the water with the column faces from stable ground. Avoid cliff edges, especially where loose rock or mist affects footing.',
    'Can I assume a rental car may use the final road?', 'No. Check the road’s current status, vehicle restrictions and your rental agreement before departure.',
  ], [
    '阿尔德亚瀑布（Aldeyjarfoss）', '在 Bárðardalur 山谷上游，看斯乔尔凡达河沿玄武岩柱跌落。', '瀑布切过火山活动留下的玄武岩。岩石冷却后的节理形成了水流旁的柱体。',
    '留意浅色跌水两侧一列列深色岩柱。下方水池和转弯的岩崖能表现出河水的走势。', '沿 Bárðardalur 谷地开车前先查道路信息。接近高地的末段需要单独核实道路开放与车辆限制。',
    '在稳固处用岩柱立面框住跌水。水雾和松散岩石会影响脚下稳定，别靠近崖边。', '租来的车可以直接开到最后一段吗？', '出发前查看实时道路状态、车型限制和租车合同。',
  ]),
  place('vaglaskogur', 'Vaglaskógur Forest', 'Fnjóskadalur, Þingeyjarsveit', 'inland', forest, [
    'Vaglaskógur birch forest', 'Walk in a broad birch woodland in the Fnjóskadalur valley, with river and bridge viewpoints near the forest edge.',
    'The woodland is a prominent remnant of North Iceland’s birch landscape. A stone arch bridge built in the early twentieth century crosses the Fnjóská near the northern edge.',
    'Look for the change from riverbank to wooded slopes. The stone arch makes a built contrast to the trees and river.',
    'Use an official forest access in Fnjóskadalur and read the onsite trail map. Choose whether to walk the wooded paths or make a shorter river and bridge stop.',
    'Use a quiet foreground of birch trunks to frame the track. At the bridge, take pictures from public approaches off the carriageway.',
    'Is this a forest on the Mývatn shoreline?', 'No. It is in Fnjóskadalur and should be planned as a separate drive between the Mývatn area and farther-west stops.',
  ], [
    '瓦格拉斯科古尔桦树林（Vaglaskógur）', '走进 Fnjóskadalur 谷地的大片桦木林，到林缘看山谷河流和石桥。', '这里保有冰岛北部有代表性的桦木景观。林地北缘附近，一座 20 世纪初建成的石拱桥跨过 Fnjóská 河。',
    '留意从河岸到林木覆盖坡地的变化。石拱桥与树木、河水形成对照。', '从 Fnjóskadalur 有标识的林地入口进入并看现场图。可安排林中步行，也可以只在河流和桥旁短停。',
    '以桦树树干作前景框住小径。在桥旁请站在车道之外的公共通道上取景。', '这是米湖岸边的树林吗？', '不是。这里在 Fnjóskadalur，从米湖前往更西面的景点时可另安排一段车程。',
  ], { en: 'Land and Forest Iceland', zh: '冰岛土地与森林署（Land og skógur）', source: forest }),
];
