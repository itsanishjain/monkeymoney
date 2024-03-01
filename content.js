// content.js
// Assuming `database` is loaded from data.js

const database = {
    "Dotdash Meredith": [
        { name: "Investopedia", website: "https://www.investopedia.com/" },
        { name: "Verywell", website: "https://www.verywellhealth.com/" },
        { name: "Fit", website: "https://www.verywellfit.com/" },
        { name: "People", website: "https://people.com/" },
        { name: "Better Homes & Gardens", website: "https://www.bhg.com/" },
        { name: "Allrecipes", website: "https://www.allrecipes.com/" },
        { name: "The Balance", website: "https://www.thebalance.com/" },
        { name: "The Spruce", website: "https://www.thespruce.com/" },
        { name: "Verywell Family", website: "https://www.verywellfamily.com/" },
        { name: "Verywell Health", website: "https://www.verywellhealth.com/" },
        { name: "The Spruce Pets", website: "https://www.thesprucepets.com/" },
        { name: "Verywell Mind", website: "https://www.verywellmind.com/" },
        { name: "Travel + Leisure", website: "https://www.travelandleisure.com/" },
        { name: "Entertainment Weekly", website: "https://ew.com/" },
        { name: "Food & Wine", website: "https://www.foodandwine.com/" },
        { name: "Real Simple", website: "https://www.realsimple.com/" },
        { name: "ThoughtCo", website: "https://www.thoughtco.com/" },
        { name: "InStyle", website: "https://www.instyle.com/" },
        { name: "BRIDES", website: "https://www.brides.com/" },
        { name: "Daily Paws", website: "https://www.dailypaws.com/" },
        { name: "Southern Living", website: "https://www.southernliving.com/" },
        { name: "EatingWell", website: "https://www.eatingwell.com/" },
        { name: "Lifewire", website: "https://www.lifewire.com/" },
        { name: "Serious Eats", website: "https://www.seriouseats.com/" },
        { name: "Parents", website: "https://www.parents.com/" },
        { name: "Liquor", website: "https://www.liquor.com/" },
        // Add other companies owned by Dotdash Meredith here
    ],
    "Hearst": [
        { name: "Cosmopolitan", website: "https://www.cosmopolitan.com/" },
        { name: "Woman's Day", website: "https://www.womansday.com/" },
        { name: "Town & Country", website: "https://www.townandcountrymag.com/" },
        { name: "Good Housekeeping", website: "https://www.goodhousekeeping.com/" },
        { name: "House Beautiful", website: "https://www.housebeautiful.com/" },
        { name: "ELLE", website: "https://www.elle.com/" },
        { name: "Prevention", website: "https://www.prevention.com/" },
        { name: "Runner's World", website: "https://www.runnersworld.com/" },
        { name: "Women's Health", website: "https://www.womenshealthmag.com/" },
        { name: "Decor Mechanics", website: "https://www.decoraid.com/" },
        { name: "Esquire", website: "https://www.esquire.com/" },
        { name: "Bicycling", website: "https://www.bicycling.com/" },
        { name: "Country Living", website: "https://www.countryliving.com/" },
        { name: "Car and Driver", website: "https://www.caranddriver.com/" },
        { name: "Bring a Trailer", website: "https://bringatrailer.com/" },
        { name: "Men's Health", website: "https://www.menshealth.com/" },
        { name: "Rack", website: "https://www.rackonline.com/" },
        { name: "AD", website: "https://www.architecturaldigest.com/" },
        { name: "House & Garden", website: "https://www.houseandgarden.co.uk/" },
        { name: "Redbook", website: "https://www.redbookmag.com/" },
        { name: "Veranda", website: "https://www.veranda.com/" },
        { name: "Harper's Bazaar", website: "https://www.harpersbazaar.com/" },
        { name: "Digital Spy", website: "https://www.digitalspy.com/" },
        { name: "Times Union", website: "https://www.timesunion.com/" },
        { name: "Seventeen", website: "https://www.seventeen.com/" },
        { name: "Autoweek", website: "https://www.autoweek.com/" },
        { name: "Netdoctor", website: "https://www.netdoctor.co.uk/" },
        // Add other companies owned by Hearst here
    ],
    "Future": [
        { name: "Tom's Guide", website: "https://www.tomsguide.com/" },
        { name: "Homes & Gardens", website: "https://www.homesandgardens.com/" },
        { name: "TechRadar", website: "https://www.techradar.com/" },
        { name: "Gardens", website: "https://www.gardensillustrated.com/" },
        { name: "Tom's Hardware", website: "https://www.tomshardware.com/" },
        { name: "Space", website: "https://www.space.com/" },
        { name: "GoodtoKnow", website: "https://www.goodto.com/" },
        { name: "iMore", website: "https://www.imore.com/" },
        { name: "World", website: "https://www.worldnewspapers.co/" },
        { name: "CB", website: "https://www.cb.com/" },
        { name: "Creative Bloq", website: "https://www.creativebloq.com/" },
        { name: "What Hi-Fi?", website: "https://www.whathifi.com/" },
        { name: "Marie Claire", website: "https://www.marieclaire.com/" },
        { name: "Kiplinger", website: "https://www.kiplinger.com/" },
        { name: "Ideal Home", website: "https://www.idealhome.co.uk/" },
        { name: "PC Gamer", website: "https://www.pcgamer.com/" },
        { name: "Windows Central", website: "https://www.windowscentral.com/" },
        { name: "GamesRadar+", website: "https://www.gamesradar.com/" },
        { name: "Laptop", website: "https://www.laptopmag.com/" },
        { name: "FourFourTwo", website: "https://www.fourfourtwo.com/" },
        { name: "What to Watch", website: "https://www.whattowatch.com/" },
        { name: "Woman's Home", website: "https://www.womanshome.com/" },
        { name: "Cycling News", website: "https://www.cyclingnews.com/" },
        { name: "Louder", website: "https://www.loudersound.com/" },
        { name: "Guitar", website: "https://www.guitarworld.com/" },
        { name: "GoCompare", website: "https://www.gocompare.com/" },
        { name: "MusicRadar", website: "https://www.musicradar.com/" },
        { name: "Who", website: "https://www.who.com.au/" },
        { name: "What Wear", website: "https://www.whowhatwear.com/" },
        { name: "Golf", website: "https://www.golf.com/" },
        { name: "Android Central", website: "https://www.androidcentral.com/" },
        { name: "Cinemablend", website: "https://www.cinemablend.com/" },
        // Add other companies owned by Future here
    ],
    "Condé Nast": [
        { name: "Allure", website: "https://www.allure.com/" },
        { name: "Glamour", website: "https://www.glamour.com/" },
        { name: "Traveler", website: "https://www.cntraveler.com/" },
        { name: "Vogue", website: "https://www.vogue.com/" },
        { name: "Wired", website: "https://www.wired.com/" },
        { name: "Teen Vogue", website: "https://www.teenvogue.com/" },
        { name: "L'Officiel", website: "https://www.lofficiel.com/" },
        { name: "Bon Appétit", website: "https://www.bonappetit.com/" },
        { name: "The New Yorker", website: "https://www.newyorker.com/" },
        { name: "Vanity Fair", website: "https://www.vanityfair.com/" },
        { name: "House & Garden", website: "https://www.houseandgarden.co.uk/" },
        { name: "Self", website: "https://www.self.com/" },
        { name: "W", website: "https://www.wmagazine.com/" },
        { name: "Pitchfork", website: "https://pitchfork.com/" },
        { name: "Ars Technica", website: "https://arstechnica.com/" },
        { name: "Epicurious", website: "https://www.epicurious.com/" },
        { name: "Interiors", website: "https://www.architecturaldigest.com/" },
        // Add other companies owned by Condé Nast here
    ],
    "Recurrent": [
        { name: "Bob Vila", website: "https://www.bobvila.com/" },
        { name: "Livingly", website: "https://www.livingly.com/" },
        { name: "Popular Science", website: "https://www.popsci.com/" },
        { name: "Dwell", website: "https://www.dwell.com/" },
        { name: "Car Bibles", website: "https://www.carbibles.com/" },
        { name: "The Drive", website: "https://www.thedrive.com/" },
        { name: "We Are The Mighty", website: "https://www.wearethemighty.com/" },
        { name: "Zimbio", website: "https://www.zimbio.com/" },
        { name: "Style Istro", website: "https://www.styleistro.com/" },
        { name: "Outdoor Life", website: "https://www.outdoorlife.com/" },
        { name: "Better You", website: "https://www.betteryou.com/" },
        { name: "Saveur", website: "https://www.saveur.com/" },
        { name: "Business of Home", website: "https://businessofhome.com/" },
        { name: "Futurism", website: "https://futurism.com/" },
        { name: "Jancis Poonson", website: "https://www.jancisrobinson.com/" },
        { name: "Task & Purpose", website: "https://taskandpurpose.com/" },
        { name: "Lonny", website: "https://www.lonny.com/" },
        { name: "Domino", website: "https://www.domino.com/" },
        { name: "PopPhoto", website: "https://www.popphoto.com/" },
        { name: "Meli", website: "https://www.meli.com/" },
        // Add other companies owned by Recurrent here
    ],
    "PMC": [
        { name: "Variety", website: "https://variety.com/" },
        { name: "Deadline", website: "https://deadline.com/" },
        { name: "StyleCaster", website: "https://www.stylecaster.com/" },
        { name: "The Hollywood Reporter", website: "https://www.hollywoodreporter.com/" },
        { name: "SheKnows", website: "https://www.sheknows.com/" },
        { name: "IndieWire", website: "https://www.indiewire.com/" },
        { name: "Gold Derby", website: "https://www.goldderby.com/" },
        { name: "BGR", website: "https://bgr.com/" },
        { name: "Spy", website: "https://www.spy.com/" },
        { name: "TVLine", website: "https://tvline.com/" },
        { name: "Sportico", website: "https://www.sportico.com/" },
        { name: "Robb Report", website: "https://robbreport.com/" },
        { name: "Artforum", website: "https://www.artforum.com/" },
        { name: "WWD", website: "https://wwd.com/" },
        { name: "ARTnews", website: "https://www.artnews.com/" },
        { name: "Life Is Beautiful", website: "https://lifeisbeautiful.com/" },
        { name: "FNE", website: "https://www.filmneweurope.com/" },
        { name: "Vibe", website: "https://www.vibe.com/" },
        { name: "SXSW", website: "https://www.sxsw.com/" },
        { name: "The Pavilion", website: "https://www.pavilionmusic.com/" },
        { name: "Dirt", website: "https://dirt.com/" },
        { name: "Fairchild Live", website: "https://fairchildlive.com/" },
        { name: "LDJ Productions", website: "https://www.ldjproductions.com/" },
        { name: "Sourcing Journal", website: "https://sourcingjournal.com/" },
        // Add other companies owned by PMC here
    ],
    "Accelerate 360": [
        { name: "Muscle & Fitness", website: "https://www.muscleandfitness.com/" },
        { name: "OK! US", website: "https://www.okmagazine.com/" },
        { name: "Soap Opera Digest", website: "https://www.soapoperadigest.com/" },
        { name: "Woman's World US", website: "https://www.womansworld.com/" },
        { name: "J-14", website: "https://www.j-14.com/" },
        { name: "DEWA", website: "https://www.digitalentertainmentworld.com/" },
        { name: "LifeToGo", website: "https://www.lifetogo.com/" },
        { name: "Tour Life", website: "https://www.tourlife.com/" },
        { name: "Life & Style", website: "https://www.lifeandstylemag.com/" },
        { name: "First for Women", website: "https://www.firstforwomen.com/" },
        { name: "In Touch", website: "https://www.intouchweekly.com/" },
        { name: "Closer", website: "https://www.closerweekly.com/" },
        // Add other companies owned by Accelerate 360 here
    ],
    "Valnet": [
        { name: "Screen Rant", website: "https://screenrant.com/" },
        { name: "GiveMeSport", website: "https://www.givemesport.com/" },
        { name: "Collider", website: "https://collider.com/" },
        { name: "GameRant", website: "https://gamerant.com/" },
        { name: "TopSpeed", website: "https://www.topspeed.com/" },
        { name: "CBR", website: "https://www.cbr.com/" },
        { name: "MakeUseOf", website: "https://www.makeuseof.com/" },
        { name: "Simple Flying", website: "https://simpleflying.com/" },
        { name: "MovieWeb", website: "https://movieweb.com/" },
        { name: "The Travel", website: "https://www.thetravel.com/" },
        { name: "Moms", website: "https://www.moms.com/" },
        { name: "TheSportster", website: "https://www.thesportster.com/" },
        { name: "TheGamer", website: "https://www.thegamer.com/" },
        { name: "Pocketlint", website: "https://www.pocket-lint.com/" },
        { name: "The Celtic", website: "https://www.celticfc.com/" },
        { name: "BackyardBoss", website: "https://www.backyardboss.net/" },
        { name: "TheThings", website: "https://www.thethings.com/" },
        { name: "Blog", website: "https://blog.com/" },
        { name: "Video", website: "https://video.com/" },
        { name: "Android Police", website: "https://www.androidpolice.com/" },
        { name: "Transfer Tavern", website: "https://www.transfermarkt.us/" },
        { name: "3XDA", website: "https://www.3xda.com/" },
        { name: "DualShockers", website: "https://www.dualshockers.com/" },
        { name: "HotCars", website: "https://www.hotcars.com/" },
        { name: "TheTalko", website: "https://www.thetalko.com/" },
        { name: "FLW", website: "https://www.flwfishing.com/" },
        { name: "Fortell", website: "https://www.fortell.com/" },
        { name: "TheRichest", website: "https://www.therichest.com/" },
        { name: "BabyGaga", website: "https://www.babygaga.com/" },
        { name: "Celts", website: "https://www.celtics.com/" },
        { name: "The Quiz", website: "https://www.thequiz.com/" },
        { name: "Pocketnow", website: "https://pocketnow.com/" },
        // Add other companies owned by Valnet here
    ],
    "Ziff Davis": [
        { name: "IPVanish", website: "https://www.ipvanish.com/" },
        { name: "PC Humble", website: "https://www.pcmag.com/" },
        { name: "Mayo Clinic", website: "https://www.mayoclinic.org/" },
        { name: "Pomal.com", website: "https://www.pcmag.com/deals/" },
        { name: "Mashable", website: "https://mashable.com/" },
        { name: "Everyday Health", website: "https://www.everydayhealth.com/" },
        { name: "Speedtest", website: "https://www.speedtest.net/" },
        { name: "RetailMeNot", website: "https://www.retailmenot.com/" },
        { name: "IGN", website: "https://www.ign.com/" },
        { name: "eFax", website: "https://www.efax.com/" },
        { name: "DownDetector", website: "https://downdetector.com/" },
        { name: "Voucher Codes", website: "https://www.vouchercodes.co.uk/" },
        { name: "OTC", website: "https://www.otcmarkets.com/" },
        { name: "Castle Connolly Doctors", website: "https://www.castleconnolly.com/" },
        { name: "AskMen", website: "https://www.askmen.com/" },
        { name: "BabyCentre", website: "https://www.babycentre.co.uk/" },
        { name: "Spiceworks", website: "https://www.spiceworks.com/" },
        { name: "BlackFriday.com", website: "https://blackfriday.com/" },
        { name: "Map Genie", website: "https://www.mapgenie.io/" },
        { name: "TheBlackFriday", website: "https://www.theblackfriday.com/" },
        { name: "Moz", website: "https://moz.com/" },
        { name: "What to Expect", website: "https://www.whattoexpect.com/" },
        { name: "Emma's Diary", website: "https://www.emmasdiary.co.uk/" },
        { name: "Offers.com", website: "https://www.offers.com/" },
        { name: "Diary", website: "https://www.diary.com/" },
        { name: "Your Place to Save Every Day", website: "https://www.yourplacesave.com/" },
        { name: "Poulpeo", website: "https://www.poulpeo.com/" },
        { name: "Ookla", website: "https://www.ookla.com/" },
        { name: "MedPage Today", website: "https://www.medpagetoday.com/" },
        { name: "DailyOM", website: "https://www.dailyom.com/" },
        { name: "ExtremeTech", website: "https://www.extremetech.com/" },
        // Add other companies owned by Ziff Davis here
    ],
    "Bustle": [
        { name: "Inverse", website: "https://www.inverse.com/" },
        { name: "Daily Bustle", website: "https://www.bustle.com/" },
        { name: "Elite Daily", website: "https://www.elitedaily.com/" },
        { name: "Nylon", website: "https://www.nylon.com/" },
        { name: "The Zoe Report", website: "https://www.thezoereport.com/" },
        { name: "Scary Mommy", website: "https://www.scarymommy.com/" },
        { name: "Romper", website: "https://www.romper.com/" },
        { name: "Mic", website: "https://www.mic.com/" },
        { name: "Input", website: "https://www.inputmag.com/" },
        { name: "Tenderly", website: "https://www.tenderly.medium.com/" },
        { name: "The Outline", website: "https://theoutline.com/" },
        { name: "The Flavorist", website: "https://theflavorist.net/" },
        { name: "The Dipp", website: "https://thedipp.com/" },
        { name: "W Magazine", website: "https://www.wmagazine.com/" },
        { name: "Bustle Digital Group", website: "https://bustle.company/" },
        { name: "Flavor", website: "https://flavor.company/" },
        { name: "Mic News", website: "https://miccompany.com/" },
        { name: "Bustle", website: "https://bustle.com/" },
        { name: "Romper", website: "https://romper.com/" },
        { name: "Elite Daily", website: "https://elitedaily.com/" },
        // Add other companies owned by Bustle here
    ],
    "DigitalTrends": [
        { name: "DigitalTrends", website: "https://www.digitaltrends.com/" },
        { name: "NewFolks", website: "" },
        { name: "Tough Jobs", website: "" },
        { name: "HappySprout", website: "" },
        { name: "Pawtracks", website: "" },
        { name: "Blissmark", website: "" },
        { name: "2101K", website: "" },
        { name: "The Manual", website: "https://www.themanual.com/" }
    ],
    "Vox Media": [
        { name: "Eater", website: "https://www.eater.com/" },
        { name: "Punch", website: "" },
        { name: "The Verge", website: "https://www.theverge.com/" },
        { name: "Epic", website: "" },
        { name: "The Dodo", website: "https://www.thedodo.com/" },
        { name: "New York Cafe News", website: "" },
        { name: "This", website: "" },
        { name: "Vulture", website: "https://www.vulture.com/" },
        { name: "Vox", website: "https://www.vox.com/" },
        { name: "Thrillist", website: "https://www.thrillist.com/" },
        { name: "Grub", website: "https://www.grubstreet.com/" },
        { name: "SB Nation", website: "https://www.sbnation.com/" },
        { name: "Street Cut", website: "" },
        { name: "Polygon", website: "https://www.polygon.com/" },
        { name: "PopSugar", website: "https://www.popsugar.com/" },
        { name: "Curbed", website: "https://www.curbed.com/" },
        { name: "Seeker", website: "https://www.seeker.com/" },
        { name: "Racked", website: "https://www.racked.com/" },
        { name: "Coral", website: "" },
        { name: "Concert", website: "" },
        { name: "VorMedia", website: "" }
    ],
    "Internet Brands": [
        { name: "WebMD", website: "https://www.webmd.com/" },
        { name: "AllLaw", website: "https://www.alllaw.com/" },
        { name: "RacingJUNK", website: "https://www.racingjunk.com/" },
        { name: "ADDitude", website: "https://www.additudemag.com/" },
        { name: "Vitals", website: "https://www.vitals.com/" },
        { name: "DentalPlans.com", website: "https://www.dentalplans.com/" },
        { name: "Medscape", website: "https://www.medscape.com/" },
        { name: "Doityourself", website: "https://www.doityourself.com/" },
        { name: "RxList", website: "https://www.rxlist.com/" },
        { name: "MedicineNet", website: "https://www.medicinenet.com/" },
        { name: "DivorceNet", website: "https://www.divorcenet.com/" },
        { name: "NOLO", website: "https://www.nolo.com/" },
        { name: "Wikitravel", website: "https://www.wikitravel.org/" },
        { name: "MedicineHealth", website: "https://www.medicinehealth.com/" },
        { name: "The Free Travel Guide", website: "" },
        { name: "CarsDirect", website: "https://www.carsdirect.com/" },
        { name: "Fodor's Travel", website: "https://www.fodors.com/" },
        { name: "Criminal Defense Lawyer", website: "" },
        { name: "ApartmentRatings", website: "https://www.apartmentratings.com/" },
        { name: "Model Mayhem", website: "https://www.modelmayhem.com/" },
        { name: "The Car Connection", website: "https://www.thecarconnection.com/" },
        { name: "CORVETTE FORUM", website: "https://www.corvetteforum.com/" },
        { name: "New CarTestDrive.com", website: "https://www.newcartestdrive.com/" },
        { name: "Demandforce", website: "https://www.demandforce.com/" },
        { name: "Lawyers.com", website: "https://www.lawyers.com/" },
        { name: "High-Def Digest", website: "https://www.highdefdigest.com/" },
        { name: "FlyerTalk", website: "https://www.flyertalk.com/" },
        { name: "AVVO", website: "https://www.avvo.com/" },
        { name: "Martindale", website: "https://www.martindale.com/" },
        { name: "FitDay", website: "https://www.fitday.com/" }
    ],
    "Red Ventures": [
        { name: "Healthline", website: "https://www.healthline.com/" },
        { name: "Allconnect", website: "https://www.allconnect.com/" },
        { name: "Medical News Today", website: "https://www.medicalnewstoday.com/" },
        { name: "Confused.com", website: "https://www.confused.com/" },
        { name: "CNET", website: "https://www.cnet.com/" },
        { name: "Chowhound", website: "https://www.chowhound.com/" },
        { name: "TIME", website: "https://www.time.com/" },
        { name: "Money", website: "https://money.com/" },
        { name: "Bankrate", website: "https://www.bankrate.com/" },
        { name: "Lonely Planet", website: "https://www.lonelyplanet.com/" },
        { name: "PlateJoy", website: "https://www.platejoy.com/" },
        { name: "Rastreator", website: "https://www.rastreator.com/" },
        { name: "Healthgrades", website: "https://www.healthgrades.com/" },
        { name: "Creditcards.com", website: "https://www.creditcards.com/" },
        { name: "ZDNet", website: "https://www.zdnet.com/" },
        { name: "Slumber Yard", website: "https://www.slumberyard.com/" },
        { name: "Greatist", website: "https://www.greatist.com/" },
        { name: "Choose Energy", website: "https://www.chooseenergy.com/" },
        { name: "Onze", website: "" },
        { name: "PsychCentral", website: "https://www.psychcentral.com/" },
        { name: "ExpertFlyer", website: "https://www.expertflyer.com/" },
        { name: "The Points Guy", website: "https://thepointsguy.com/" },
        { name: "Platea PR", website: "" },
        { name: "C Best Colleges", website: "" },
        { name: "Reviews.com", website: "https://www.reviews.com/" },
        { name: "Uswitch", website: "https://www.uswitch.com/" },
        { name: "LeLynx.fr", website: "" },
        { name: "MYMOVE", website: "https://www.mymove.com/" },
        { name: "Coverage", website: "" }
    ],
    "The Arena Group": [
        { name: "Parade", website: "https://parade.com/" },
        { name: "Fadeaway World", website: "https://fadeawayworld.com/" },
        { name: "TheStreet", website: "https://www.thestreet.com/" },
        { name: "ToughNickel", website: "https://toughnickel.com/" },
        { name: "Men's Journal", website: "https://www.mensjournal.com/" },
        { name: "The Hockey News", website: "https://thehockeynews.com/" },
        { name: "Snow", website: "" },
        { name: "Athlon Sports", website: "https://athlonsports.com/" },
        { name: "Roadfood", website: "https://roadfood.com/" },
        { name: "Boarder", website: "" },
        { name: "Parade Pets", website: "https://parade.pet/" },
        { name: "Surfer", website: "https://www.surfer.com/" },
        { name: "Dealbreaker", website: "https://dealbreaker.com/" },
        { name: "PetHelpful", website: "https://pethelpful.com/" },
        { name: "New Powder", website: "" },
        { name: "ESPN", website: "https://www.espn.com/" },
        { name: "Schooled", website: "" },
        { name: "American Profile", website: "" },
        { name: "Spry Living", website: "https://spryliving.com/" },
        { name: "Sports Illustrated", website: "https://www.si.com/" },
        { name: "Dengarden", website: "https://dengarden.com/" },
        { name: "Students for Liberty", website: "https://studentsforliberty.org/" },
        { name: "Mopar", website: "https://www.mopar.com/" },
        { name: "HubPages", website: "https://hubpages.com/" },
        { name: "Bike", website: "" },
        { name: "Smartycents", website: "" },
        { name: "Fashionista", website: "https://fashionista.com/" },
        { name: "Skateboarding", website: "" },
        { name: "Daily Parent", website: "" },
        { name: "We Have Kids", website: "" },
        { name: "Relish", website: "" }
    ],
    "Fandom": [
        { name: "Muthead", website: "" },
        { name: "Cord Cutters", website: "" },
        { name: "News", website: "" },
        { name: "TV", website: "" },
        { name: "Fanatical", website: "" },
        { name: "Guide", website: "" },
        { name: "Metacritic", website: "" },
        { name: "GameSp", website: "" }
    ]
};

const getCurrentTabUrl = () => {
    return new Promise((resolve) => {
        chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
            const url = tabs[0].url;
            resolve(url);
        });
    });
};

const findWebsiteOwner = (url) => {
    const found = Object.entries(database).find(([company, websites]) => {
        return websites.some(({ website }) => url.includes(website));
    });
    return found ? found[0] : null;
};

const getSiblings = (parent) => {
    return Object.entries(database)
        .filter(([company]) => company !== parent)
        .map(([company, websites]) => ({
            parent: company,
            siblings: websites.map(({ name }) => name)
        }));
};

// (async () => {
//     const url = window.location.href
//     const parent = findWebsiteOwner(url);
//     if (parent) {
//         const siblings = getSiblings(parent);
//         alert(`Parent - ${parent}\nSiblings - ${siblings.map(({ siblings }) => siblings.join(', ')).join('\n')}`);
//     } else {
//         alert('This website does not belong to any known parent company.');
//     }
// })();


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "buttonClicked") {
        // Your code to handle the button click event in the content script
        console.log("YOOO")
    }
    console.log("BROOOO")

});
