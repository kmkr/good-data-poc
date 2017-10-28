const trucks = [
  {
    routes: [
      {"lat":59.9110643854971,"lng":10.741485357284546},
      {"lat":59.91098370289025,"lng":10.741442441940308},
      {"lat":59.91088150464008,"lng":10.741356611251831},
      {"lat":59.91079544271169,"lng":10.741270780563354},
      {"lat":59.91071475945123,"lng":10.741163492202759},
      {"lat":59.91061793927982,"lng":10.741077661514282},
      {"lat":59.910548013424865,"lng":10.741024017333984},
      {"lat":59.91045657170001,"lng":10.740927457809448},
      {"lat":59.910370508670056,"lng":10.740841627120972},
      {"lat":59.91027906645631,"lng":10.740766525268555},
      {"lat":59.91020376091468,"lng":10.740691423416138},
      {"lat":59.91010693925301,"lng":10.740573406219482},
      {"lat":59.91003701232179,"lng":10.740519762039185},
      {"lat":59.90998860128309,"lng":10.740466117858887},
      {"lat":59.90994556918947,"lng":10.74062705039978},
      {"lat":59.90992943213996,"lng":10.740723609924316},
      {"lat":59.909907916061755,"lng":10.740809440612793},
      {"lat":59.909875641918326,"lng":10.740970373153687},
      {"lat":59.909827230644346,"lng":10.741077661514282},
      {"lat":59.90980033546161,"lng":10.741217136383057},
      {"lat":59.90977344025712,"lng":10.741335153579712},
      {"lat":59.909751924077824,"lng":10.741474628448486},
      {"lat":59.909726541692145,"lng":10.741458535194397},
      {"lat":59.909688888316055,"lng":10.741415619850159},
      {"lat":59.909621650038225,"lng":10.741340517997742},
      {"lat":59.9095624802411,"lng":10.741302967071533},
      {"lat":59.90953289530299,"lng":10.741260051727295},
      {"lat":59.90946296716266,"lng":10.741201043128967},
      {"lat":59.90940110753113,"lng":10.74112057685852},
      {"lat":59.90936345378596,"lng":10.741083025932312},
      {"lat":59.9093069730881,"lng":10.741029381752014},
      {"lat":59.90924780273016,"lng":10.740981101989746},
      {"lat":59.909196700972544,"lng":10.740959644317627},
      {"lat":59.909164426137735,"lng":10.740916728973389},
      {"lat":59.90912408255008,"lng":10.74087917804718},
      {"lat":59.90908373891342,"lng":10.740830898284912},
      {"lat":59.909032636903255,"lng":10.740777254104614},
      {"lat":59.90898960357054,"lng":10.740745067596436},
      {"lat":59.908927743057056,"lng":10.740680694580078},
      {"lat":59.9088739512125,"lng":10.74063777923584},
      {"lat":59.908806711284264,"lng":10.740594863891602},
      {"lat":59.908747540034746,"lng":10.740535855293274},
      {"lat":59.90868298946048,"lng":10.740482211112976},
      {"lat":59.90864264528782,"lng":10.740433931350708},
      {"lat":59.90859154259875,"lng":10.74038565158844},
      {"lat":59.908551198314974,"lng":10.740337371826172},
      {"lat":59.9085054747341,"lng":10.740310549736023},
      {"lat":59.9084570614622,"lng":10.740267634391785},
      {"lat":59.90842209627746,"lng":10.740176439285278},
      {"lat":59.90842209627746,"lng":10.740090608596802},
      {"lat":59.9084570614622,"lng":10.739961862564087},
      {"lat":59.908483957733075,"lng":10.739843845367432}
    ]
  },
  {
    routes: [
      {"lat":59.909004228185964,"lng":10.744982957839966},
      {"lat":59.90905801981947,"lng":10.745025873184204},
      {"lat":59.909122569664596,"lng":10.74511170387268},
      {"lat":59.909187119384235,"lng":10.7451331615448},
      {"lat":59.90923015246093,"lng":10.745197534561157},
      {"lat":59.90926780635729,"lng":10.745240449905396},
      {"lat":59.90931621844702,"lng":10.745272636413574},
      {"lat":59.90938076779016,"lng":10.745315551757812},
      {"lat":59.90941842151571,"lng":10.74536919593811},
      {"lat":59.90945607519856,"lng":10.745401382446289},
      {"lat":59.9095260033534,"lng":10.745465755462646},
      {"lat":59.9095797941415,"lng":10.745540857315063},
      {"lat":59.90964434297222,"lng":10.745573043823242},
      {"lat":59.909692754512875,"lng":10.745605230331421},
      {"lat":59.9097304078846,"lng":10.745680332183838},
      {"lat":59.90977344025712,"lng":10.745723247528076},
      {"lat":59.909821851609536,"lng":10.745766162872314},
      {"lat":59.90985412580526,"lng":10.745798349380493},
      {"lat":59.90991867410261,"lng":10.745841264724731},
      {"lat":59.90995094820421,"lng":10.74589490890503},
      {"lat":59.909983222274455,"lng":10.74589490890503},
      {"lat":59.909993980290885,"lng":10.745830535888672},
      {"lat":59.91002625431928,"lng":10.745798349380493},
      {"lat":59.91004777032077,"lng":10.745744705200195},
      {"lat":59.910074665303064,"lng":10.74564814567566},
      {"lat":59.910096181273175,"lng":10.745573043823242},
      {"lat":59.91010693925301,"lng":10.745497941970825},
      {"lat":59.91012845520225,"lng":10.745422840118408},
      {"lat":59.91014997113751,"lng":10.745337009429932},
      {"lat":59.91016072909991,"lng":10.745240449905396},
      {"lat":59.91019838194088,"lng":10.745165348052979},
      {"lat":59.91019838194088,"lng":10.745090246200562},
      {"lat":59.91024679267366,"lng":10.745025873184204},
      {"lat":59.91025217163961,"lng":10.744929313659668},
      {"lat":59.91027368749473,"lng":10.744854211807251},
      {"lat":59.910284445417034,"lng":10.744768381118774},
      {"lat":59.91032209811768,"lng":10.744714736938477},
      {"lat":59.91033285602431,"lng":10.74461817741394},
      {"lat":59.91034899287771,"lng":10.744543075561523},
      {"lat":59.9103651297233,"lng":10.744425058364868},
      {"lat":59.91038664550516,"lng":10.74436068534851},
      {"lat":59.91040278233244,"lng":10.744285583496094},
      {"lat":59.91042967702712,"lng":10.744221210479736},
      {"lat":59.910461950631976,"lng":10.7441246509552},
      {"lat":59.91047270849329,"lng":10.744049549102783},
      {"lat":59.91048884527873,"lng":10.743952989578247}
    ]
  },
  {
    routes: [
      {"lat":59.91108052199494,"lng":10.741506814956665},
      {"lat":59.9110643854971,"lng":10.741603374481201},
      {"lat":59.91104287015445,"lng":10.741678476333618},
      {"lat":59.91101059711429,"lng":10.741796493530273},
      {"lat":59.91099446058249,"lng":10.74189305305481},
      {"lat":59.910967566345334,"lng":10.742021799087524},
      {"lat":59.91092453552058,"lng":10.742086172103882},
      {"lat":59.910897641226796,"lng":10.742182731628418},
      {"lat":59.91088688350316,"lng":10.742311477661133},
      {"lat":59.910859989178896,"lng":10.74237585067749},
      {"lat":59.91084923144307,"lng":10.742526054382324},
      {"lat":59.9108169582147,"lng":10.7426118850708},
      {"lat":59.91079544271169,"lng":10.742686986923218},
      {"lat":59.910773927194725,"lng":10.742805004119873},
      {"lat":59.91076316943103,"lng":10.742847919464111},
      {"lat":59.91073930063036,"lng":10.742976665496826},
      {"lat":59.91071475945123,"lng":10.743094682693481},
      {"lat":59.91068248609212,"lng":10.743159055709839},
      {"lat":59.910666349400806,"lng":10.743266344070435},
      {"lat":59.91063945489786,"lng":10.743298530578613},
      {"lat":59.91062331818563,"lng":10.74339509010315},
      {"lat":59.910601802557125,"lng":10.743480920791626},
      {"lat":59.91058566582659,"lng":10.743577480316162},
      {"lat":59.91055877125828,"lng":10.743674039840698},
      {"lat":59.910537255587954,"lng":10.743792057037354},
      {"lat":59.91052649774755,"lng":10.74387788772583},
      {"lat":59.910499603131306,"lng":10.743985176086426},
      {"lat":59.91045657170001,"lng":10.744060277938843},
      {"lat":59.91045657170001,"lng":10.744167566299438},
      {"lat":59.910418919151866,"lng":10.744231939315796},
      {"lat":59.9103974033909,"lng":10.744328498840332},
      {"lat":59.91035975077564,"lng":10.744435787200928},
      {"lat":59.91032209811768,"lng":10.74460744857788},
      {"lat":59.91030596125121,"lng":10.744704008102417},
      {"lat":59.910284445417034,"lng":10.744822025299072},
      {"lat":59.91024679267366,"lng":10.744950771331787},
      {"lat":59.910209139887584,"lng":10.745047330856323},
      {"lat":59.91018762399067,"lng":10.745176076889038},
      {"lat":59.91016072909991,"lng":10.745272636413574},
      {"lat":59.91012845520225,"lng":10.74535846710205},
      {"lat":59.91010693925301,"lng":10.745455026626587},
      {"lat":59.910085423289864,"lng":10.745605230331421},
      {"lat":59.91004777032077,"lng":10.745680332183838},
      {"lat":59.91001549631332,"lng":10.745798349380493},
      {"lat":59.909983222274455,"lng":10.745905637741089}
    ]
  }, {
    routes: [
      {"lat":59.91397118178861,"lng":10.742504596710205},
      {"lat":59.91390664137044,"lng":10.742461681365967},
      {"lat":59.913820587284334,"lng":10.742354393005371},
      {"lat":59.91376680336724,"lng":10.742268562316895},
      {"lat":59.91368074891861,"lng":10.74213981628418},
      {"lat":59.91363772161065,"lng":10.742053985595703},
      {"lat":59.91356242368752,"lng":10.741989612579346},
      {"lat":59.913487125593555,"lng":10.741925239562988},
      {"lat":59.91342258423425,"lng":10.741775035858154},
      {"lat":59.913347285823086,"lng":10.74162483215332},
      {"lat":59.91327198724112,"lng":10.741581916809082},
      {"lat":59.913185931509744,"lng":10.741474628448486},
      {"lat":59.91306760451483,"lng":10.741324424743652},
      {"lat":59.91299230529846,"lng":10.741260051727295},
      {"lat":59.91293852003934,"lng":10.741195678710938},
      {"lat":59.912863220530156,"lng":10.74113130569458},
      {"lat":59.91277716373911,"lng":10.741045475006104},
      {"lat":59.9126803495825,"lng":10.74087381362915},
      {"lat":59.91262656381794,"lng":10.740830898284912},
      {"lat":59.91255126360114,"lng":10.740766525268555},
      {"lat":59.912465206001364,"lng":10.740659236907959},
      {"lat":59.912368390934944,"lng":10.740594863891602}
    ]
  }
];

export default trucks;
