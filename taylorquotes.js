const allQuotes = [
  {
    quote:
      "I don't know what I wantso don't ask me 'Cause I'm still trying to figure it out",
    song: 'A Place In This World',
    album: 'Taylor Swift',
  },
  {
    quote: 'When you think Tim McGrawI hope you think of me.',
    song: 'Tim McGraw',
    album: 'Taylor Swift',
  },
  {
    quote: '“So watch me strike a match on all my wasted time.',
    song: 'Picture To Burn',
    album: 'Taylor Swift',
  },
  {
    quote: "I'll be strongI'll be wrongoh but life goes on…",
    song: 'A Place In This World',
    album: 'Taylor Swift',
  },
  {
    quote: 'And when you takeyou take the very best of me.',
    song: 'Cold As You',
    album: 'Taylor Swift',
  },
  {
    quote: "But no one notices until it's too late to do anything.",
    song: 'The Outside',
    album: 'Taylor Swift',
  },
  {
    quote:
      "Our song is the slamming screen doorsneakin' out latetapping on your window.",
    song: 'Our Song',
    album: 'Taylor Swift',
  },
  {
    quote:
      "And I don't know whybut with you I'd dance in a storm in my best dressfearless.",
    song: 'Fearless',
    album: 'Fearless',
  },
  {
    quote:
      "But in your lifeyou'll do things greater than dating the boy on the football team…But I didn't know it at fifteen.",
    song: 'Fifteen',
    album: 'Fearless',
  },
  {
    quote:
      "I've found time can heal most anything and you just might find who you're supposed to be.",
    song: 'Fifteen',
    album: 'Fearless',
  },
  {
    quote:
      "Romeosave me. They're trying to tell me how to feel. This love is difficult but it's real.",
    song: 'Love Story',
    album: 'Fearless',
  },
  {
    quote:
      'Why are people always leaving? I think you and I should stay the same.',
    song: 'Hey Stephen',
    album: 'Fearless',
  },
  {
    quote:
      "My mistakeI didn't know to be in love you had to fight to have the upper hand.",
    song: ' White Horse',
    album: 'Fearless',
  },
  {
    quote:
      'This is a big worldthat was a small town there in my rear view mirror disappearing now',
    song: 'White Horse',
    album: 'Fearless',
  },
  {
    quote: "You've got a smile that could light up this whole town.",
    song: 'You Belong With Me',
    album: 'Fearless',
  },
  {
    quote:
      "And we know it's never simplenever easy. Never a clean breakno one here to save me.",
    song: 'Breathe',
    album: 'Fearless',
  },
  {
    quote:
      'You took a swingI took it hard. And down here from the ground I see who you are.',
    song: 'Tell Me Why',
    album: 'Fearless',
  },
  {
    quote:
      "All this time I was wastinghoping you would come around… I've been giving out chances every time and all you do is let me down.",
    song: "You're Not Sorry",
    album: 'Fearless',
  },
  {
    quote: "And then you feel so low you can't feel nothing at all.",
    song: 'Forever And Always',
    album: 'Fearless',
  },
  {
    quote: "It rains when you're here and it rains when you're gone.",
    song: 'Forever And Always',
    album: 'Fearless',
  },
  {
    quote: 'These walls that they put up to hold us back will fall down…',
    song: 'Change',
    album: 'Fearless',
  },
  {
    quote: "My mind forgets to remind me you're a bad idea.",
    song: 'Sparks Fly',
    album: 'Speak Now',
  },
  {
    quote: "It turns out freedom ain't nothing but missing you.",
    song: 'Back To December',
    album: 'Speak Now',
  },
  {
    quote:
      'She floats down the aisle like a pageant queenbut I know you wish it was me… don’t you?',
    song: 'Speak Now',
    album: 'Speak Now',
  },
  {
    quote: 'I lived in your chess gamebut you changed the rules every day.',
    song: 'Dear John',
    album: 'Speak Now',
  },
  {
    quote: "I'm shining like fireworks over your sadempty town.",
    song: 'Dear John',
    album: 'Speak Now',
  },
  {
    quote:
      "Someday I'll be living in a bigold city and all you're ever gonna be is mean.",
    song: 'Mean',
    album: 'Speak Now',
  },
  {
    quote:
      "I'd tell you I miss youbut I don't know howI've never heard silence quite this loud.",
    song: 'The Story Of Us',
    album: 'Speak Now',
  },
  {
    quote:
      'This is looking like a contest of who can act like they care less. But I liked it better when you were on my side.',
    song: 'The Story Of Us',
    album: 'Speak Now',
  },
  {
    quote:
      "And don't lose the way that you dance around in your pj's getting ready for school.",
    song: 'Never Grow Up',
    album: 'Speak Now',
  },
  {
    quote:
      "This night is sparklingdon't you let it go.  I'm wonderstruckblushing all the way home.",
    song: 'Enchanted',
    album: 'Speak Now',
  },
  {
    quote: '2AMwho do you love?',
    song: 'Enchanted',
    album: 'Speak Now',
  },
  {
    quote:
      "Your string of lights is still bright to me… Who you are is not where you've been.",
    song: 'Innocent',
    album: 'Speak Now',
  },
  {
    quote: 'Today is never too late to be brand new.',
    song: 'Innocent',
    album: 'Speak Now',
  },
  {
    quote:
      "You and I walk a fragile line; I have known it all this time. But I never thought I'd live to see it break.",
    song: 'Haunted',
    album: 'Speak Now',
  },
  {
    quote: "I don't know how to be something you miss.",
    song: 'Last Kiss',
    album: 'Speak Now',
  },
  {
    quote: 'Bring on all the pretenders. One daywe will be remembered.',
    song: 'Long Live',
    album: 'Speak Now',
  },
  {
    quote:
      "So don't you worry your prettylittle mindpeople throw rocks at things that shine.",
    song: 'Ours',
    album: 'Speak Now',
  },
  {
    quote:
      "We are alone with our changing minds. We fall in love 'til it hurts or bleeds or fades in time.",
    song: 'State Of Grace',
    album: 'Red',
  },
  {
    quote: 'Love is a ruthless game unless you play it good and right.',
    song: 'State Of Grace',
    album: 'Red',
  },
  {
    quote:
      "He's long gone when he's next to me and I realize the blame is on me.",
    song: 'I Knew You Were Trouble',
    album: 'Red',
  },
  {
    quote:
      "No apologies. He'll never see you cry. Pretends he doesn't know that he's the reason why.",
    song: ' I Knew You Were Trouble',
    album: 'Red',
  },
  {
    quote:
      'The saddest fear comes creeping in - that you never loved me or heror anyoneor anything...',
    song: 'I Knew You Were Trouble',
    album: 'Red',
  },
  {
    quote:
      "…That magic's not here no more. And I might be OKbut I'm not fine at all.",
    song: 'All Too Well',
    album: 'Red',
  },
  {
    quote:
      "And your mother's telling stories about you on a tee ball team. You taught me 'bout your pastthinking your future was me.",
    song: 'All Too Well',
    album: 'Red',
  },
  {
    quote: 'I forget about you long enough to forget why I needed to...',
    song: 'All Too Well',
    album: 'Red',
  },
  {
    quote:
      "Maybe we got lost in translationmaybe I asked for too much. But maybe this thing was a masterpiece 'til you tore it all up. Running scaredI was thereI remember it all too well.",
    song: 'All Too Well',
    album: 'Red',
  },
  {
    quote:
      'You call me up again just to break me like a promiseso casually cruel in the name of being honest.',
    song: 'All Too Well',
    album: 'Red',
  },
  {
    quote:
      "Time won't flyit's like I'm paralyzed by it. I'd like to be my old self againbut I'm still trying to find it.",
    song: 'All Too Well',
    album: 'Red',
  },
  {
    quote:
      "Cause there we are againwhen I loved you so. Back before you lost the onereal thing you've ever known.",
    song: 'All Too Well',
    album: 'Red',
  },
  {
    quote:
      "Now you mail back my things and I walk home alone But you keep my old scarf from that very first week'cause it reminds you of innocence and it smells like me.",
    song: 'All Too Well',
    album: 'Red',
  },
  {
    quote:
      'Photo album on the counter Your cheeks were turning red You used to be a little kid in glasses in a twin-sized bed',
    song: 'All Too Well',
    album: 'Red',
  },
  {
    quote:
      "Stayand I'll be loving you for quite some time No one else is gonna love me when I get mad",
    song: 'Stay Stay Stay',
    album: 'Red',
  },
  {
    quote:
      "We're happyfreeconfusedand lonely at the same time. It's miserable and magical.",
    song: '22',
    album: 'Red',
  },
  {
    quote:
      "I wish I could run to you. And I hope you know that every time I don't I almost do.",
    song: 'I Almost Do',
    album: 'Red',
  },
  {
    quote: 'You wear your best apologybut I was there to watch you leave.',
    song: 'The Last Time',
    album: 'Red',
  },
  {
    quote: 'But sometimes I wonder how you think about it now.',
    song: 'Holy Ground',
    album: 'Red',
  },
  {
    quote: "But I don't wanna dance if I'm not dancing with you.",
    song: 'Holy Ground',
    album: 'Red',
  },
  {
    quote: "Wordshow little they mean when you're a little too late.",
    song: 'Sad Beautiful Tragic',
    album: 'Red',
  },
  {
    quote:
      "“And they tell you that you're luckybut you're so confused'cause you don't feel prettyyou just feel used.",
    song: 'The Lucky One',
    album: 'Red',
  },
  {
    quote:
      "I've been spending the last eight months thinking all love ever does is break and burn and end…",
    song: 'Begin Again',
    album: 'Red',
  },
  {
    quote:
      "And what do you do when the one who means the most to you is the one who didn't show?",
    song: 'The Moment I Knew',
    album: 'Red',
  },
  {
    quote:
      "Your close friends always seem to know When there's something really wrong",
    song: 'The Moment I Knew',
    album: 'Red',
  },
  {
    quote:
      'You called me later And said"I\'m sorry I didn\'t make it" And I said"I\'m sorrytoo"',
    song: 'The Moment I Knew',
    album: 'Red',
  },
  {
    quote:
      'Loving him is like driving a new Maserati down a dead-end street Faster than the windpassionate as sinending so suddenly',
    song: 'Red',
    album: 'Red',
  },
  {
    quote: 'The lights are so brightbut they never blind me.',
    song: 'Welcome To New York',
    album: '1989',
  },
  {
    quote: "Love's a gamewanna play?",
    song: 'Blank Space',
    album: '1989',
  },
  {
    quote: "So it's gonna be forever or it's gonna go down in flames.",
    song: 'Blank Space',
    album: '1989',
  },
  {
    quote:
      "But you'll come back each time you leave 'cause darlingI'm a nightmare dressed like a daydream.",
    song: 'Blank Space',
    album: '1989',
  },
  {
    quote:
      "When we go crashing downwe come back every time 'cause we never go out of style.",
    song: 'Style',
    album: '1989',
  },
  {
    quote: 'I got that red lipclassic thing that you like.',
    song: 'Style',
    album: '1989',
  },
  {
    quote:
      'The rest of the world was black and whitebut we were in screaming color.',
    song: 'Out Of The Woods',
    album: '1989',
  },
  {
    quote:
      'The more I think about it nowthe less I knowall I know is that you drove us off the road.',
    song: 'All You Had To Do Was Stay',
    album: '1989',
  },
  {
    quote:
      'People like you always want back the love they pushed asidebut people like me are gone forever when you say goodbye.',
    song: 'All You Had To Do Was Stay',
    album: '1989',
  },
  {
    quote: "Why'd you have to go and lock me out when I let you in?",
    song: 'All You Had To Do Was Stay',
    album: '1989',
  },
  {
    quote:
      "While you've been getting down and out about the liars and the dirtydirty cheats of the world… You could've been getting down to this sick beat.",
    song: 'Shake It Off',
    album: '1989',
  },
  {
    quote: "We're a crooked love in a straight line down.",
    song: 'I Wish You Would',
    album: '1989',
  },
  {
    quote: 'And I wish you knew that I miss you too much to be mad anymore.',
    song: 'I Wish You Would',
    album: '1989',
  },
  {
    quote: 'You give me everything and nothing.',
    song: 'I Wish You Would',
    album: '1989',
  },
  {
    quote: 'Makes you wanna run and hidebut it made us turn right back around.',
    song: 'I Wish You Would',
    album: '1989',
  },
  {
    quote: "Band-aids don't fix bullet holes. You say sorry just for show.",
    song: 'Bad Blood',
    album: '1989',
  },
  {
    quote: 'Someday when you leave meI bet these memories follow you around.',
    song: 'Wildest Dreams',
    album: '1989',
  },
  {
    quote: "When you're youngyou just runbut you come back to what you need.",
    song: 'This Love',
    album: '1989',
  },
  {
    quote: 'This love left a permanent mark.',
    song: 'This Love',
    album: '1989',
  },
  {
    quote:
      'Your kissmy cheek I watch you leave Your smilemy ghost I fall to my knees',
    song: 'This Love',
    album: '1989',
  },
  {
    quote:
      "It was months and months of back and forthyou're still all over me like a wine-stained dress I can't wear anymore.",
    song: 'Clean',
    album: '1989',
  },
  {
    quote: "When I was drowning that's when I could finally breathe.",
    song: 'Clean',
    album: '1989',
  },
  {
    quote: "Just because you're cleandon't mean you don't miss it.",
    song: 'Clean',
    album: '1989',
  },
  {
    quote:
      "Didn't it all seem new and exciting? …It's all fun and games 'til somebody loses their mind.",
    song: 'Wonderland',
    album: '1989',
  },
  {
    quote:
      'You search the world for something else to make you feel like what we had. And in the end in wonderlandwe both went mad.',
    song: 'Wonderland',
    album: '1989',
  },
  {
    quote: 'Heartbreak is the national anthemwe sing it proudly.',
    song: 'New Romantics',
    album: '1989',
  },
  {
    quote: "They'll take their shotsbut we are bulletproof.",
    song: 'I Know Places',
    album: '1989',
  },
  {
    quote:
      'So I punched a hole in the roof Let the flood carry away all my pictures of you.',
    song: 'Clean',
    album: '1989',
  },
  {
    quote:
      'When all you wanted Was to be wanted Wish you could go back And tell yourself what you know now',
    song: 'Fifteen',
    album: 'Fearless',
  },
  {
    quote:
      "32 and still growing up now Who you are is not what you did You're still an innocent",
    song: 'Innocent',
    album: 'Speak Now',
  },
  {
    quote: "We play dumb But we know exactly what we're doing",
    song: 'New Romantics',
    album: '1989',
  },
  {
    quote:
      "Please don't ever become a stranger whose laugh I could recognize anywhere",
    song: "New Year's Day",
    album: 'Reputation',
  },
  {
    quote: 'Can we always be this close forever and ever?',
    song: 'Lover',
    album: 'Lover',
  },
  {
    quote: "I'm only seventeen I don't know anything but I know I miss you",
    song: 'Betty',
    album: 'Folklore',
  },
  {
    quote:
      'I was walking home on broken cobblestones just thinking of youwhen she pulled up like a figment of my worst intentions',
    song: 'Betty',
    album: 'Folklore',
  },
  {
    quote: 'You play stupid gamesyou win stupid prizes',
    song: 'Miss Americana And The Heartbreak Prince',
    album: 'Lover',
  },
  {
    quote: 'I had a marvelous time ruining everything',
    song: 'The Last Great American Dynasty',
    album: 'Folklore',
  },
  {
    quote:
      "Untouchableburning brighter than the sun And when you're close I feel like coming undone",
    song: 'Untouchable',
    album: 'Fearless',
  },
  {
    quote:
      'Barefoot in the kitchen Sacred new beginnings That became my religionlisten',
    song: 'Cornelia Street',
    album: 'Lover',
  },
  {
    quote: 'I could build a castle out of all the bricks they threw at me',
    song: 'New Romantics',
    album: '1989',
  },
  {
    quote:
      'Cold was the steel of my axe to grind for the boys who broke my heart Now I send their babies presents',
    song: 'Invisible String',
    album: 'Folklore',
  },
  {
    quote:
      "He says he's so in love He's finally got it right I wonder if he knows he's all I think about at night",
    song: 'Teardrops On My Guitar',
    album: 'Taylor Swift',
  },
  {
    quote: 'Back when you fit in my poems like a perfect rhyme',
    song: 'Holy Ground',
    album: 'Red',
  },
  {
    quote: "I once believed love would be burning red But it's golden",
    song: 'Daylight',
    album: 'Lover',
  },
  {
    quote:
      "I think I've seen this film before And I didn't like the ending You're not my homeland anymore So what am I defending now?",
    song: 'Exile',
    album: 'Folklore',
  },
  {
    quote:
      "He said the way my blue eyes shined Put those Georgia stars to shame that night I said'That's a lie'",
    song: 'Tim McGraw',
    album: 'Taylor Swift',
  },
  {
    quote:
      'The monsters turned out to be just trees When the sun came up you were looking at me',
    song: 'Out Of The Woods',
    album: '1989',
  },
  {
    quote:
      'The night you danced like you knew our lives would never be the same You held your head like a hero On a history book page It was the end of a decade But the start of an age',
    song: 'Long Live',
    album: 'Speak Now',
  },
  {
    quote: "I can't decide if it's a choice: Getting swept away",
    song: 'Treacherous',
    album: 'Red',
  },
  {
    quote:
      'They told me all of my cages were mental So I got wasted like all my potential',
    song: 'This Is Me Trying',
    album: 'Folklore',
  },
  {
    quote:
      "But she wears short skirts I wear T-shirts She's cheer captain And I'm on the bleachers",
    song: 'You Belong With Me',
    album: 'Fearless',
  },
  {
    quote: "I don't like that falling feels like flying till the bone crush.",
    song: 'Gold Rush',
    album: 'Evermore',
  },
  {
    quote:
      'I\'m doing goodI\'m on some new shit Been saying "yes" instead of "no" I thought I saw you at the bus stopI didn\'t though',
    song: 'The 1',
    album: 'Folklore',
  },
  {
    quote:
      "I guess you never knownever know And if you wanted meyou really should've showed",
    song: 'The 1',
    album: 'Folklore',
  },
  {
    quote:
      'I persist and resist the temptation to ask you If one thing had been different Would everything be different today?',
    song: 'The 1',
    album: 'Folklore',
  },
  {
    quote: 'When you are young they assume you know nothing',
    song: 'Cardigan',
    album: 'Folklore',
  },
  {
    quote: "You drew stars around my scars But now I'm bleedin'",
    song: 'Cardigan',
    album: 'Folklore',
  },
  {
    quote:
      "I knew you'd miss me once the thrill expired And you'd be standin' in my front porch light And I knew you'd come back to me",
    song: 'Cardigan',
    album: 'Folklore',
  },
  {
    quote: 'You wear the same jewels that I gave youas you bury me',
    song: 'My Tears Ricochet',
    album: 'Folklore',
  },
  {
    quote:
      "We gather stonesnever knowing what they'll mean Some to throwsome to make a diamond ring",
    song: 'My Tears Ricochet',
    album: 'Folklore',
  },
  {
    quote:
      "You know I didn't want to have to haunt you But what a ghostly scene",
    song: 'My Tears Ricochet',
    album: 'Folklore',
  },
  {
    quote:
      "Do you remember when I pulled up and said 'get in the car' And then cancelled my plans just in case you called",
    song: 'August',
    album: 'Folklore',
  },
  {
    quote:
      'To live for the hope of it all Cancel plans just in case you\'d call And say"Meet me behind the mall"',
    song: 'August',
    album: 'Folklore',
  },
  {
    quote:
      'Bold was the waitress on our three-year trip Getting lunch down by the Lakes She said I looked like an American singer',
    song: 'Invisible String',
    album: 'Folklore',
  },
  {
    quote:
      "Timemystical time Cutting me openthen healing me fine Were there clues I didn't see?",
    song: 'Invisible String',
    album: 'Folklore',
  },
  {
    quote: 'One single thread of gold tied me to you',
    song: 'Invisible String',
    album: 'Folklore',
  },
  {
    quote:
      'I know where it all where wrongyour favorite song was playing from the far side of the gym I was nowhere to be found I hate the crowds Plus I saw you dance with him',
    song: 'Betty',
    album: 'Folklore',
  },
  {
    quote:
      "Knew I was a robber first time that he saw me Stealing hearts and running off and never sayin' sorry",
    song: '...Ready For It?',
    album: 'Reputation',
  },
  {
    quote: "I swear I don't love the dramait loves me",
    song: 'End Game',
    album: 'Reputation',
  },
  {
    quote: "I bury hatchetsbut I keep maps of where I put 'em",
    song: 'End Game',
    album: 'Reputation',
  },
  {
    quote: "Love made me crazyif it doesn'tyou ain't doin' it right",
    song: "Don't Blame Me",
    album: 'Reputation',
  },
  {
    quote: "My name is whatever you decide And I'm just gonna call you mine",
    song: "Don't Blame Me",
    album: 'Reputation',
  },
  {
    quote: "Handsomeyou're a mansion with a view",
    song: 'Delicate',
    album: 'Reputation',
  },
  {
    quote: 'Sometimes I wonder when you sleep Are you ever dreaming of me?',
    song: 'Delicate',
    album: 'Reputation',
  },
  {
    quote:
      'The world goes on another dayanother drama But not for meall I think about is karma.',
    song: 'Look What You Made Me Do',
    album: 'Reputation',
  },
  {
    quote:
      "I've got a list of names and yours is in redunderlined I check it oncethen I check it twice",
    song: 'Look What You Made Me Do',
    album: 'Reputation',
  },
  {
    quote: 'You asked me for a place to sleeplocked me out and threw a feast',
    song: 'Look What You Made Me Do',
    album: 'Reputation',
  },
  {
    quote: "You know I'm not a bad girlbut I Do bad things with you",
    song: 'So It Goes...',
    album: 'Reputation',
  },
  {
    quote: "You did a number on me buthonestlybabywho's counting?",
    song: 'So It Goes...',
    album: 'Reputation',
  },
  {
    quote:
      'Ocean blue eyes looking in mine I feel like I might sink and drown and die',
    song: 'Gorgeous',
    album: 'Reputation',
  },
  {
    quote:
      "You make me so happy it turns back to sad There's nothing I hate more than what I can't have And you are so gorgeous it makes me so mad",
    song: 'Gorgeous',
    album: 'Reputation',
  },
  {
    quote:
      "We were jet-setBonnie and Clyde Until I switched to the other side It's no surprise I turned you in 'Cause us traitors never win",
    song: 'Getaway Car',
    album: 'Reputation',
  },
  {
    quote:
      'We met a few weeks ago Now you try on callin\' me "Baby" like tryin\' on clothes',
    song: 'King Of My Heart',
    album: 'Reputation',
  },
  {
    quote: "Your love is a secret I'm hopingdreamingdying to keep",
    song: 'King Of My Heart',
    album: 'Reputation',
  },
  {
    quote: 'Is this the end of all the endings? My broken bones are mending',
    song: 'King Of My Heart',
    album: 'Reputation',
  },
  {
    quote: 'I loved you in spite of deep fears that the world would divide us',
    song: 'Dancing With Our Hands Tied',
    album: 'Reputation',
  },
  {
    quote: "Say that we got it I'm a messbut I'm the mess that you wanted",
    song: 'Dancing With Our Hands Tied',
    album: 'Reputation',
  },
  {
    quote:
      "But you stabbed me in the back while shaking my hand And therein lies the issue Friends don't try to trick you Get you on the phone and mind-twist you So I took an axe to a mended fence",
    song: "This Is Why We Can't Have Nice Things",
    album: 'Reputation',
  },
  {
    quote: 'I brought a knife to a gunfight',
    song: 'Call It What You Want',
    album: 'Reputation',
  },
  {
    quote: 'He built a fire just to keep me warm',
    song: 'Call It What You Want',
    album: 'Reputation',
  },
  {
    quote:
      'I want to wear his initial on a chain round my necknot because he owns mebut cause he really knows mewhich is more than they can say',
    song: 'Call It What You Want',
    album: 'Reputation',
  },
  {
    quote:
      'Holding my breathslowlyI said "You don\'t need to save mebut would you run away with me?"',
    song: 'Call It What You Want',
    album: 'Reputation',
  },
  {
    quote:
      "Would've been right therefront row even if nobody came to your show",
    song: 'I Forgot That You Existed',
    album: 'Lover',
  },
  {
    quote: "I'm always waiting for you to be waiting below",
    song: 'Cruel Summer',
    album: 'Lover',
  },
  {
    quote:
      "Devils roll the diceangels roll their eyes What doesn't kill me makes me want you more",
    song: 'Cruel Summer',
    album: 'Lover',
  },
  {
    quote: "I don't wanna keep secrets just to keep you",
    song: 'Cruel Summer',
    album: 'Lover',
  },
  {
    quote:
      "I'm drunk in the back of the car And I cried like a baby coming home from the bar Said\"I'm fine,\" but it wasn't true",
    song: 'Cruel Summer',
    album: 'Lover',
  },
  {
    quote:
      "For whatever it's worthI love youain't that the worst thing you ever heard?",
    song: 'Cruel Summer',
    album: 'Lover',
  },
  {
    quote: "I've got a hundred thrown-out speeches I almost said to you",
    song: 'The Archer',
    album: 'Lover',
  },
  {
    quote: "I am an architectI'm drawing up the plans",
    song: 'I Think He Knows',
    album: 'Lover',
  },
  {
    quote:
      "I'll never let you go 'cause I know this is a fight that someday we're gonna win",
    song: 'Miss Americana And The Heartbreak Prince',
    album: 'Lover',
  },
  {
    quote: "I'm with you even if it makes me blue",
    song: 'Paper Rings',
    album: 'Lover',
  },
  {
    quote:
      "Without all the exesfightsand flawswe wouldn't be standing here so tall",
    song: 'Paper Rings',
    album: 'Lover',
  },
  {
    quote: 'We were a fresh page on the deskfilling in the blanks as we go',
    song: 'Cornelia Street',
    album: 'Lover',
  },
  {
    quote:
      'We were in the backseat drunk on something stronger than the drinks in the bar',
    song: 'Cornelia Street',
    album: 'Lover',
  },
  {
    quote: 'If the story is overwhy am I still writing pages?',
    song: 'Death By A Thousand Cuts',
    album: 'Lover',
  },
  {
    quote:
      "I ask the traffic lights if it will be alrightthey say I don't know.",
    song: 'Death By A Thousand Cuts',
    album: 'Lover',
  },
  {
    quote: "They say home is where the heart isbut that's not where mine lives",
    song: 'London Boy',
    album: 'Lover',
  },
  {
    quote:
      'I pinned your hands behind your back Thought I had reason to attackbut no',
    song: 'Afterglow',
    album: 'Lover',
  },
  {
    quote:
      "Fighting with a true love is boxing with no gloves Chemistry 'til it blows up'til there's no us",
    song: 'Afterglow',
    album: 'Lover',
  },
  {
    quote:
      "And I can't talk to you when you're like thisstaring out the window like I'm not your favorite town",
    song: 'False God',
    album: 'Lover',
  },
  {
    quote: 'They say the road gets hard and you get lost',
    song: 'False God',
    album: 'Lover',
  },
  {
    quote: "Remember how I said I'd die for you?",
    song: 'False God',
    album: 'Lover',
  },
  {
    quote: "I come back stronger than a '90s trend",
    song: 'Willow',
    album: 'Evermore',
  },
  {
    quote:
      "Wait for the signaland I'll meet you after dark Show me the places where the others gave you scars",
    song: 'Willow',
    album: 'Evermore',
  },
  {
    quote: "Bustling crowds or silent sleepers You're not sure which is worse",
    song: 'Champagne Problems',
    album: 'Evermore',
  },
  {
    quote:
      "You told your family for a reason You couldn't keep it in Your sister splashed out on the bottle",
    song: 'Champagne Problems',
    album: 'Evermore',
  },
  {
    quote:
      '"This dorm was once a madhouse" I made a joke"Wellit\'s made for me"',
    song: 'Champagne Problems',
    album: 'Evermore',
  },
  {
    quote:
      'One for the moneytwo for the show I never was ready so I watch you go',
    song: 'Champagne Problems',
    album: 'Evermore',
  },
  {
    quote:
      "Sometimes you just don't know the answer 'til someone's on their knees and asks you",
    song: 'Champagne Problems',
    album: 'Evermore',
  },
  {
    quote:
      "And then it fades into the gray of my day-old tea 'Cause it could never be",
    song: 'Gold Rush',
    album: 'Evermore',
  },
  {
    quote: "I can't dare to dream about you anymore",
    song: 'Gold Rush',
    album: 'Evermore',
  },
  {
    quote:
      "My mind turns your life into folklore I can't dare to dream about you anymore",
    song: 'Gold Rush',
    album: 'Evermore',
  },
  {
    quote:
      'I parked my car right between the Methodist and the school that used to be ours',
    song: "'Tis The Damn Season",
    album: 'Evermore',
  },
  {
    quote:
      "I'll go back to L.A. and the so-called friends who'll write books about me if I ever make it and wonder about the only soul who can tell which smiles I'm fakin'",
    song: "'Tis The Damn Season",
    album: 'Evermore',
  },
  {
    quote:
      'What would you do if I break free and leave us in ruinstook this dagger in me and removed itgain the weight of you then loose it?',
    song: 'Tolerate It',
    album: 'Evermore',
  },
  {
    quote:
      "I made you my templemy muralmy sky. Now I'm begging for footnotes in the story of your life Drawing hearts in the byline always taking up too much space or time",
    song: 'Tolerate It',
    album: 'Evermore',
  },
  {
    quote:
      'Your nemesis will defeat themselves before you get the chance to swing',
    song: 'Long Story Short',
    album: 'Evermore',
  },
  {
    quote: 'My waves meet your shore ever and evermore',
    song: 'Long Story Short',
    album: 'Evermore',
  },
  {
    quote:
      'I replay my footsteps on each stepping stonetrying to find the one where I went wrong',
    song: 'Evermore',
    album: 'Evermore',
  },
  {
    quote:
      "So yeahit's a fireit's a goddamn blaze in the dark and you've started it So yeahit's a warit's the goddamn fight of my life and you started it",
    song: 'Ivy',
    album: 'Evermore',
  },
  {
    quote:
      "Did you ever hear about the girl who got frozen? Time went on for everybody elseshe won't know it She's still twenty-three inside her fantasy",
    song: 'Right Where You Left Me',
    album: 'Evermore',
  },
  {
    quote: "Breaking down and coming undone It's a rollercoaster kind of rush",
    song: 'The Way I Loved You',
    album: 'Fearless',
  },
  {
    quote:
      "He can't see the smile I'm faking and my heart's not breaking 'cause I'm not feeling anything at all",
    song: 'The Way I Loved You',
    album: 'Fearless',
  },
  {
    quote:
      'WellI like the way your hair falls in your face You got the keys to me I love each freckle on your face',
    song: 'Jump Then Fall',
    album: 'Fearless',
  },
  {
    quote:
      'With your face and the beautiful eyes And the conversation with the little white lies And the faded picture of a beautiful night',
    song: 'The Other Side Of The Door',
    album: 'Fearless',
  },
  {
    quote:
      'Never be so kind You forget to be clever Never be so clever You forget to be kind',
    song: 'Marjorie',
    album: 'Evermore',
  },
  {
    quote:
      "Sometimes I feel like everybody is a sexy baby And I'm the monster on the hill",
    song: 'Anti-Hero',
    album: 'Midnights',
  },
  {
    quote:
      'Did you hear my covert narcissism I disguise as altruism Like some kind of congressman?',
    song: 'Anti-Hero',
    album: 'Midnights',
  },
  {
    quote: "I'm damned if I do give a damn what people say",
    song: 'Lavender Haze',
    album: 'Midnights',
  },
  {
    quote: "All they keep asking me Is if I'm gonna be your bride",
    song: 'Lavender Haze',
    album: 'Midnights',
  },
  {
    quote: 'And I lost you The one I was dancing with In New Yorkno shoes',
    song: 'Maroon',
    album: 'Midnights',
  },
  {
    quote:
      'The mark they saw on my collarbone The rust that grew between telephones The lips I used to call home',
    song: 'Maroon',
    album: 'Midnights',
  },
  {
    quote: 'How the hell did we lose sight of us again?',
    song: 'Maroon',
    album: 'Midnights',
  },
  {
    quote: 'Flying in a dream stars by the pocketful',
    song: 'Snow On The Beach',
    album: 'Midnights',
  },
  {
    quote: "I've never seen someone lit from within Blurring out my periphery",
    song: 'Snow On The Beach',
    album: 'Midnights',
  },
  {
    quote:
      'From sprinkler splashes to fireplace ashes I waited ages to see you there I search the party of better bodies Just to learn that you never cared',
    song: "You're On Your OwnKid",
    album: 'Midnights',
  },
  {
    quote:
      "I gave my bloodsweatand tears for this I hosted parties and starved my body Like I'd be saved by a perfect kiss",
    song: "You're On Your OwnKid",
    album: 'Midnights',
  },
  {
    quote: 'He wanted it comfortableI wanted that pain',
    song: 'Midnight Rain',
    album: 'Midnights',
  },
  {
    quote: 'A slow-motionlove potion jumping off things in the ocean',
    song: 'Midnight Rain',
    album: 'Midnights',
  },
  {
    quote: 'Did you ever have someone kiss you in a crowded room',
    song: 'Question...?',
    album: 'Midnights',
  },
  {
    quote: "And what's that that I heard? That you're still with her?",
    song: 'Question...?',
    album: 'Midnights',
  },
  {
    quote: 'Draw the cat eye sharp enough to kill a man',
    song: 'Vigilante Shit',
    album: 'Midnights',
  },
  {
    quote: "I don't start shitbut I can tell you how it ends",
    song: 'Vigilante Shit',
    album: 'Midnights',
  },
  {
    quote: 'When I walk in the room I can still make the whole place shimmer',
    song: 'Bejeweled',
    album: 'Midnights',
  },
  {
    quote: 'Did all the extra creditthen got graded on a curve',
    song: 'Bejeweled',
    album: 'Midnights',
  },
  {
    quote: "Never trust it if it rises fast It can't last",
    song: 'Labyrinth',
    album: 'Midnights',
  },
  {
    quote: "I thought the plane was goin' down How'd you turn it right around?",
    song: 'Labyrinth',
    album: 'Midnights',
  },
  {
    quote: "A relaxing thought Aren't you envious that for you it's not?",
    song: 'Karma',
    album: 'Midnights',
  },
  {
    quote: 'Flexing like a goddamn acrobat Me and karma vibe like that',
    song: 'Karma',
    album: 'Midnights',
  },
  {
    quote: "You're talking shit for the hell of it",
    song: 'Karma',
    album: 'Midnights',
  },
  {
    quote: "They said the end is comin' Everyone's up to somethin'",
    song: 'Sweet Nothing',
    album: 'Midnights',
  },
  {
    quote:
      'I spy with my little tired eye Tiny as a firefly A pebble that we picked up last July',
    song: 'Sweet Nothing',
    album: 'Midnights',
  },
  {
    quote:
      'I laid the groundworkand then Just like clockwork The dominoes cascaded in a line',
    song: 'Mastermind',
    album: 'Midnights',
  },
  {
    quote:
      'What if I told you none of it was accidental? And the first night that you saw me Nothing was gonna stop me',
    song: 'Mastermind',
    album: 'Midnights',
  },
  {
    quote: "Uh-huhwe're burned for better I vowed I would always be yours",
    song: 'The Great War',
    album: 'Midnights',
  },
  {
    quote:
      'You said I have to trust more freely But diesel is desireyou were playing with fire',
    song: 'The Great War',
    album: 'Midnights',
  },
  {
    quote:
      "I'm never gonna meet What could've been would've been What should've been you",
    song: 'Bigger Than The Whole Sky',
    album: 'Midnights',
  },
  {
    quote: 'You were more than just a short time',
    song: 'Bigger Than The Whole Sky',
    album: 'Midnights',
  },
  {
    quote: "I'm so in love that I might stop breathing",
    song: 'Paris',
    album: 'Midnights',
  },
  {
    quote: 'Confess my truth In swoopingslopingcursive letters',
    song: 'Paris',
    album: 'Midnights',
  },
  {
    quote: 'Put on your records and regret me I bent the truth too far tonight',
    song: 'High Infidelity',
    album: 'Midnights',
  },
  {
    quote:
      'Do you really wanna know where I was April 29th? Do I really have to chart the constellations in his eyes?',
    song: 'High Infidelity',
    album: 'Midnights',
  },
  {
    quote:
      "Lock brokenslur spoken Wound opengame token I didn't know you were keeping count",
    song: 'High Infidelity',
    album: 'Midnights',
  },
  {
    quote: "And I'm not even sorrynights are so starry",
    song: 'Glitch',
    album: 'Midnights',
  },
  {
    quote:
      "I would've stayed On my knees And I damn sure never would've danced with the devil",
    song: "Would'veCould'veShould've",
    album: 'Midnights',
  },
  {
    quote: "Never take advice from someone who's falling apart",
    song: 'Dear Reader',
    album: 'Midnights',
  },
  {
    quote:
      "Desert all your past lives And if you don't recognize yourself That means you did it right",
    song: 'Dear Reader',
    album: 'Midnights',
  },
  {
    quote: "They say that if it's rightyou know",
    song: 'Hits Differents',
    album: 'Midnights',
  },
  {
    quote: "I love you, it's ruining my life",
    song: 'Fortnight',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: 'My husband is cheating, I wanna kill him',
    song: 'Fortnight',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "Thought of callin' ya, but you won't pick up",
    song: 'Fortnight',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: 'Who else decodes you?',
    song: 'The Tortured Poets Department',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote:
      "And who's gonna hold you like me? And who's gonna know you, if not me?",
    song: 'The Tortured Poets Department',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: 'We declared Charlie Puth should be a bigger artist',
    song: 'The Tortured Poets Department',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "And that's the closest I've come to my heart exploding",
    song: 'The Tortured Poets Department',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "But you should've seen him when he first got me",
    song: 'My Boy Only Breaks His Favorite Toys',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: 'My boy only breaks his favorite toys',
    song: 'My Boy Only Breaks His Favorite Toys',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "Once I fix me He's gonna miss me",
    song: 'My Boy Only Breaks His Favorite Toys',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote:
      "'Cause he took me out of my box Stole my tortured heart Left all these broken parts Told me I'm better off But I'm not",
    song: 'My Boy Only Breaks His Favorite Toys',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: 'For a moment, I knew cosmic love',
    song: 'Down Bad',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "Now I'm down bad, cryin' at the gym",
    song: 'Down Bad',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote:
      "Everything comes out teenage petulance Fuck it if I can't have him I might just die, it would make no difference",
    song: 'Down Bad',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote:
      "Starin' at the sky, come back and pick me up Fuck it if I can't have us I might just not get up, I might stay",
    song: 'Down Bad',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "How dare you think it's romantic Leaving me safe and stranded",
    song: 'Down Bad',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "Pulled him in tighter each time he was driftin' away",
    song: 'So Long, London',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote:
      "Thinkin', How much sad did you think I hadDid you think I had in me ?",
    song: 'So Long, London',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote:
      "I stopped CPR, after all, it's no use The spirit was gone, we would never come toe",
    song: 'So Long, London',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "And I'm pissed off you let me give you all that youth for free",
    song: 'So Long, London',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote:
      "And you say I abandoned the ship But I was going down with it My white-knuckle dying grip Holding tight to your quiet resentment And my friends said it isn't right to be scared Every day of a love affair Every breath feels like rarest air When you're not sure if he wants to be there",
    song: 'So Long, London',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "I know he's crazy, but he's the one I want",
    song: 'But Daddy I Love Him',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "Growin' up precocious sometimes means Not growin' up at all",
    song: 'But Daddy I Love Him',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote:
      "I'll tell you something right now I'd rather burn my whole life down Than listen to one more second of all this bitchin' and moanin' I'll tell you something 'bout my good name It's mine alone to disgrace I don't cater to all these vipers dressed in empath's clothing",
    song: 'But Daddy I Love Him',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "You ain't gotta pray for me",
    song: 'But Daddy I Love Him',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "Time, doesn't it give some perspective?",
    song: 'But Daddy I Love Him',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: 'Fresh out the slammer, I know who my first call will be to',
    song: 'Fresh Out The Slammer',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote:
      " Gray and blue and fights and tunnels Handcuffed to the spell I was under For just one hour of sunshine Years of labor, locks, and ceilings In the shade of how he was feeling But it's gonna be alright, I did my time",
    song: 'Fresh Out The Slammer',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote:
      "My friends tried, but I wouldn't hear it Watch me daily disappearing For just one glimpse of his smile",
    song: 'Fresh Out The Slammer',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: 'Wearing imaginary rings',
    song: 'Fresh Out The Slammer',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: 'And my friends all smell like weed or little babies',
    song: 'Florida!!!',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote:
      "Little did you know your home's really only A town you're just a guest in",
    song: 'Florida!!!',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote:
      "I need to forget, so take me to Florida I've got some regrets, I'll bury them in Florida",
    song: 'Florida!!!',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote:
      "Tell me I'm despicable, say it's unforgivable What a crash, what a rush, fuck me up, Florida",
    song: 'Florida!!!',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: 'Am I allowed to cry?',
    song: 'Guilty as Sin?',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote:
      "What if he's written mine on my upper thigh only in my mind? One slip and fallin' back into the hedge maze Oh, what a way to die I keep recalling things we never did Messy top-lip kiss, how I long for our trysts Without ever touchin' his skin How can I be guilty as sin?",
    song: 'Guilty as Sin?',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote:
      "Someone told me, There's no such thing as bad thoughts Only your actions talk",
    song: 'Guilty as Sin?',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: 'I choose you and me religiously',
    song: 'Guilty as Sin?',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote:
      "If you wanted me dead, you should've just said Nothing makes me feel more alive",
    song: "Who's Afraid of Little Old Me?",
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "You don't get to tell me about sad",
    song: "Who's Afraid of Little Old Me?",
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "I'm always drunk on my own tears, isn't that what they all said?",
    song: "Who's Afraid of Little Old Me?",
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "I am what I am 'cause you trained me",
    song: "Who's Afraid of Little Old Me?",
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: 'I can fix him, no, really, I can',
    song: 'I Can Fix Him (No Really I Can)',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "I'll show you Heaven if you'll be an angel",
    song: 'I Can Fix Him (No Really I Can)',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: 'Trust me, I can handle me a dangerous man',
    song: 'I Can Fix Him (No Really I Can)',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "You said I'm the love of your life",
    song: 'loml',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote:
      "Who's gonna stop us from waltzing back into rekindled flames If we know the steps anyway?",
    song: 'loml',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: 'A con man sells a fool a get-love-quick scheme',
    song: 'loml',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: 'I wish I could un-recall How we almost had it all',
    song: 'loml',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "You're the loss of my life",
    song: 'loml',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: 'The coward claimed he was a lion',
    song: 'loml',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "'Cause I'm a real tough kid I can handle my shit",
    song: 'I Can Do It With A Broken Heart',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "They said, Babe, you gotta fake it 'til you make it and I did",
    song: 'I Can Do It With A Broken Heart',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: 'Lights, camera, bitch, smile Even when you wanna die',
    song: 'I Can Do It With A Broken Heart',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote:
      'Breaking down, I hit the floor All the pieces of me shattered as the crowd was chanting, MORE',
    song: 'I Can Do It With A Broken Heart',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "I'm so depressed, I act like it's my birthday every day",
    song: 'I Can Do It With A Broken Heart',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "I'm so obsessed with him, but he avoids me like the plague",
    song: 'I Can Do It With A Broken Heart',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "I cry a lot, but I am so productive, it's an art",
    song: 'I Can Do It With A Broken Hear',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "You know you're good when you can even do it with a broken heart",
    song: 'I Can Do It With A Broken Hear',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "'Cause I'm miserable (Haha) And nobody even knows",
    song: 'I Can Do It With A Broken Hear',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: 'Who the fuck was that guy?',
    song: 'The Smallest Man Who Ever Lived',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: 'Were you sent by someone who wanted me dead?',
    song: 'The Smallest Man Who Ever Lived',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "'Cause it wasn't sexy once it wasn't forbidden",
    song: 'The Smallest Man Who Ever Lived',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "I would've died for your sins, instead, I just died inside",
    song: 'The Smallest Man Who Ever Lived',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "And you deserve prison, but you won't get time",
    song: 'The Smallest Man Who Ever Lived',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote:
      "And I'll forget you, but I'll never forgive The smallest man who ever lived",
    song: 'The Smallest Man Who Ever Lived',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "I haven't come around in so long But I'm coming back so strong",
    song: 'The Alchemy',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "Ditch the clowns, get the crown Baby, I'm the one to beat",
    song: 'The Alchemy',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "'Cause the sign on your heart Said it's still reserved for me",
    song: 'The Alchemy',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "Where's the trophy? He just comes runnin' over to me",
    song: 'The Alchemy',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: "All your life, did you know You'd be picked like a rose?",
    song: 'Clara Bow',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote:
      "I'm not trying to exaggerate But I think I might die if it happened to me",
    song: 'Clara Bow',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: 'Promise to be dazzling',
    song: 'Clara Bow',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote:
      "Beauty is a beast that roars down on all fours Demanding more Only when your girlish glow flickers just so Do they let you know It's hell on earth to be heavenly Them's the breaks, they don't come gently",
    song: 'Clara Bow',
    album: 'THE TORTURED POETS DEPARTMENT',
  },
  {
    quote: 'Old habits die screaming',
    song: 'The Black Dog',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'And I may never open up the way I did for you',
    song: 'The Black Dog',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: "Six weeks of breathin' clean air I still miss the smoke",
    song: 'The Black Dog',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: "You'll find that you were never not mine",
    song: 'imgonnagetyouback',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: "I'm an Aston Martin that you steered straight into the ditch",
    song: 'imgonnagetyouback',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: "Pick your poison, babe, I'm poison either way",
    song: 'imgonnagetyouback',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'Wise men once said Wild winds are death to the candle',
    song: 'The Albatross',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'Cross your thoughtless heart Only liquor anoints you',
    song: 'The Albatross',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'One less temptress, one less dagger to sharpen',
    song: 'The Albatross',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'Wise men once read fake news And they believed it',
    song: 'The Albatross',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: "She's the albatross She is here to destroy you",
    song: 'The Albatross',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote:
      'If you wanna break my cold, cold heart Just say, I loved you the way that you were',
    song: 'Chloe or Sam or Sophia or Marcus',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'You needed me, but you needed drugs more',
    song: 'Chloe or Sam or Sophia or Marcus',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'Can we watch our phantoms like watching wild horses?',
    song: 'Chloe or Sam or Sophia or Marcus',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: "Come one, come all, it's happenin' again",
    song: 'How Did It End?',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'Lost the game of chance, what are the chances?',
    song: 'How Did It End?',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'Sitting in a tree D-Y-I-N-G',
    song: 'How Did It End?',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'The empathetic hunger descends',
    song: 'How Did It End?',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: "But I still don't know How did it end",
    song: 'How Did It End?',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: "Tell me 'bout the first time you saw me",
    song: 'So High School',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'Bittersweet sixteen suddenly',
    song: 'So High School',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'Truth, dare, spin bottles You know how to ball, I know Aristotle',
    song: 'So High School',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote:
      'Brand-new, full throttle Touch me while your bros play Grand Theft Auto',
    song: 'So High School',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'You knew what you wanted and, boy, you got her',
    song: 'So High School',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: "If comfort is a construct, I don't believe in good luck",
    song: 'I Hate It Here',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote:
      'I hate it here so I will go to secret gardens in my mind People need a key to get to, the only one is mine',
    song: 'I Hate It Here',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: "Nostalgia is a mind's trick",
    song: 'I Hate It Here',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote:
      'I hate it here so I will go to lunar valleys in my mind When they found a better planet, only the gentle survived',
    song: 'I Hate It Here',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote:
      "I'm lonely, but I'm good I'm bitter, but I swear I'm fine I'll save all my romanticism for my inner life and I'll get lost on purpose",
    song: 'I Hate It Here',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: "All that time you were throwin' punches, I was buildin' somethin'",
    song: 'thanK you aIMee',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: "But I can't forget the way you made me heal",
    song: 'thanK you aIMee',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote:
      "Screamed, fucK you, aIMee to the night sky as the blood was gushin'",
    song: 'thanK you aIMee',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote:
      'Everyone knows that my mother is a saintly woman But she used to say she wished that you were dead',
    song: 'thanK you aIMee',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote:
      'I pushed each boulder up the hill Your words are still just ringing in my head, ringing in my head',
    song: 'thanK you aIMee',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote:
      "And one day, your kid comes home singin' A song that only us two is gonna know is about you",
    song: 'thanK you aIMee',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: "I look in people's windows In case you're at their table",
    song: "I Look in People's Windows",
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'What if your eyes looked up and met mine One more time?',
    song: "I Look in People's Windows",
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote:
      "So I look in people's windows Like I'm some deranged weirdo I attend Christmas parties from outside",
    song: "I Look in People's Windows",
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: "Does it feel alright to not know me? I'm addicted to the if only",
    song: "I Look in People's Windows",
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'I got cursed like Eve got bitten',
    song: 'The Prophecy',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote:
      "I guess a lesser woman would've lost hope A greater woman wouldn't beg",
    song: 'The Prophecy',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote:
      "But I looked to the sky and said Please I've been on my knees Change the prophecy Don't want money Just someone who wants my company Let it once be me Who do I have to speak to About if they can redo the prophecy?",
    song: 'The Prophecy',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: "But even statues crumble if they're made to wait",
    song: 'The Prophecy',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'A greater woman stays cool But I howl like a wolf at the moon',
    song: 'The Prophecy',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: "I'm so afraid I sealed my fate",
    song: 'The Prophecy',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: "Spending my last coin so someone will tell me it'll be okay",
    song: 'The Prophecy',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'What happens if it becomes who you are?',
    song: 'Cassandra',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'I was in my new house placing daydreams',
    song: 'Cassandra',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'I was in my new house placing daydreams',
    song: 'Cassandra',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: "Cause that's where I was when I got the call",
    song: 'Cassandra',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'And tried to tell the town',
    song: 'Cassandra',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'Do you believe me now?',
    song: 'Cassandra',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'I was in my tower weaving nightmares',
    song: 'Cassandra',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'We both did the best we could do',
    song: 'Peter',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: "I've heard great things, Peter But life was always easier on you",
    song: 'Peter',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'Are you still a mind reader?',
    song: 'Peter',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'Words from the mouths of babes Promises oceans deep',
    song: 'Peter',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'You said you were gonna grow up',
    song: 'Peter',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: "And I didn't wanna come down I thought it was just goodbye for now",
    song: 'Peter',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'Once found us beguiling She said she was trying',
    song: 'Peter',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'My lost fearless leader In closets like cedar',
    song: 'Peter',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: ' I can confirm she made A curious child',
    song: 'The Bolter',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: "Then she runs like it's a race",
    song: 'The Bolter',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'Started with a kiss Oh, we must stop meeting like this',
    song: 'The Bolter',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'But as she was leaving It felt like breathing',
    song: 'The Bolter',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: "She's been many places with Men of many faces",
    song: 'The Bolter',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: "And she's laughing, drawin' aces But none of it is changin",
    song: 'The Bolter',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'The secret we all vowed To keep it from you in sweetness',
    song: 'Robin',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: ' Higher and higher Wilder and lighter For you',
    song: 'Robin',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'The time will arrive for the cruel and the mean',
    song: 'Robin',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'You have no room in your dreams for regrets',
    song: 'Robin',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: "But now we'll curtail your curiosity In sweetness",
    song: 'Robin',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'But soon it was over',
    song: 'The Manuscript',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: "I'm not a donor but I'd give you my heart if you needed it",
    song: 'The Manuscript',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote:
      'She thought about how he said since she was so wise beyond her years',
    song: 'The Manuscript',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: "Lookin' backwards might be the only way to move forward",
    song: 'The Manuscript',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: 'And at last, she knew what the agony had been for',
    song: 'The Manuscript',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
  {
    quote: "But the story isn't mine anymore",
    song: 'The Manuscript',
    album: 'THE TORTURED POETS DEPARTMENT: THE ANTHOLOGY',
  },
];

module.exports = {
  allQuotes,
};
