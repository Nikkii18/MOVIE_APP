// Movie data
const trendingMovies = [
    { title: "Avatar: Fire and Ash", poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/avatar-fire-and-ash-et00407893-1765890770.jpg", description: "The biggest film in the world, the ultimate cinematic experience and spectacle, goes even bigger with Avatar: Fire and Ash.", link: "https://www.youtube.com/watch?v=nb_fFj_0rq8" },
    { title: "Dhurandhar", poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/dhurandhar-et00452447-1764571309.jpg", description: "Dhurandhar is a genre-bending, edge-of-the-seat action thriller with big stars playing iconic characters.", link: "https://youtu.be/BKOVzHcjEIo" },
    { title: "Money Heist", poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg", description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.", link: "https://www.youtube.com/watch?v=_InqQJRqGW4" },
    { title: "The Witcher", poster: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg", description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.", link: "https://www.youtube.com/watch?v=ndl1W4ltcmg" },
    { title: "Black Mirror", poster: "https://image.tmdb.org/t/p/w500/5UaYsGZOFhjFDwQh6GuLjjA1WlF.jpg", description: "An anthology series exploring a twisted, high-tech world where humanity's greatest innovations and darkest instincts collide.", link: "https://www.youtube.com/watch?v=zLZHdK4I5Bk" },
    { title: "Squid Game", poster: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg", description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games for a tempting prize, but the stakes are deadly.", link: "https://www.youtube.com/watch?v=oqxAJKy0ii4" },
    { title: "The Queen's Gambit", poster: "https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg", description: "In a Kentucky orphanage in the 1950s, a young girl discovers an astonishing talent for chess while struggling with addiction.", link: "https://www.youtube.com/watch?v=CDrieqwSdgI" },
    { title: "Bridgerton", poster: "https://image.tmdb.org/t/p/w500/luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg", description: "The story of Daphne Bridgerton, the eldest daughter of the powerful Bridgerton family, a scandalous gossip columnist, and a charming duke.", link: "https://www.youtube.com/watch?v=FnGNABj2NFA" },
    { title: "Narcos", poster: "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waOlTJitW0GvM.jpg", description: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the Medellín Cartel.", link: "https://www.youtube.com/watch?v=xl8zdCY-abw" },
    { title: "Dark", poster: "https://image.tmdb.org/t/p/w500/6zZu7j1zM6w6b3oLXW6prlfm4oH.jpg", description: "A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.", link: "https://www.youtube.com/watch?v=cq2iTHoLrt0" }
];

const topRatedMovies = [
    { title: "Breaking Bad", poster: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg", description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine to secure his family's future.", link: "https://www.youtube.com/watch?v=HhesaQXLuRY" },
    { title: "Planet Earth II", poster: "https://image.tmdb.org/t/p/w500/bM8ZNHrD1YGTqyHh4xPUkXNTgSx.jpg", description: "David Attenborough returns in this breathtaking documentary showcasing the beauty and diversity of life on our planet.", link: "https://www.youtube.com/watch?v=c8aFcHFu8QM" },
    { title: "Chernobyl", poster: "https://image.tmdb.org/t/p/w500/hlLXt2tOPT6RRnjvMlMgA9HdLd.jpg", description: "In April 1986, an explosion at the Chernobyl nuclear power plant in the USSR becomes one of the world's worst man-made catastrophes.", link: "https://www.youtube.com/watch?v=s9APLXM9Ei8" },
    { title: "Band of Brothers", poster: "https://image.tmdb.org/t/p/w500/qrPlhrBxM3dbFuFpQ4jBrjxv7vN.jpg", description: "The story of Easy Company of the U.S. Army 101st Airborne Division and their mission in World War II Europe, from Operation Overlord to V-E Day.", link: "https://www.youtube.com/watch?v=7k8h_H6bzjw" },
    { title: "Cosmos: A Spacetime Odyssey", poster: "https://image.tmdb.org/t/p/w500/8f6mZZxB7U7VD4TJ8Nz5Int8Rp.jpg", description: "An exploration of our discovery of the laws of nature and coordinates in space and time.", link: "https://www.youtube.com/watch?v=4gBq7NTz9hg" },
    { title: "Avatar: The Last Airbender", poster: "https://image.tmdb.org/t/p/w500/cUHj8jSHTQAMqT3d2O6iOIi0OQy.jpg", description: "In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar.", link: "https://www.youtube.com/watch?v=Im2vBJ4Rtow" },
    { title: "The Wire", poster: "https://image.tmdb.org/t/p/w500/4lbclFySvugI51fwsyxBTOm4DqK.jpg", description: "This 'fresh take on the American crime drama' is a police procedural set in Baltimore, Maryland, and focusing on the drug trade.", link: "https://www.youtube.com/watch?v=8VF6bH-2lHY" },
    { title: "Blue Planet II", poster: "https://image.tmdb.org/t/p/w500/9tgMCJYXRvTYFsW5qDJWTLPsiKA.jpg", description: "David Attenborough narrates a documentary series on the natural history of the oceans.", link: "https://www.youtube.com/watch?v=sLprVF6d7Ug" },
    { title: "The Sopranos", poster: "https://image.tmdb.org/t/p/w500/3XNfTJqXPZjLC94VK3XO4CnMtnQ.jpg", description: "New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state.", link: "https://www.youtube.com/watch?v=9G1pxAHcuaY" },
    { title: "Rick and Morty", poster: "https://image.tmdb.org/t/p/w500/qJdfO3OyfJtY589CQ4cV8637Hsf.jpg", description: "An animated series that follows the misadventures of a scientist, Rick, and his grandson, Morty, who split their time between domestic life and interdimensional adventures.", link: "https://www.youtube.com/watch?v=WNhH00OIPP0" }
];

const actionMovies = [
    { title: "Mad Max: Fury Road", poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg", description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners.", link: "https://www.youtube.com/watch?v=hEJnMQG9ev8" },
    { title: "John Wick", poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg", description: "An ex-hit-man comes out of retirement to track down the gangsters that took everything from him.", link: "https://www.youtube.com/watch?v=C0BMx-qxsP4" },
    { title: "Avengers: Endgame", poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", description: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more.", link: "https://www.youtube.com/watch?v=TcMBFSGVi1c" },
    { title: "The Dark Knight", poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.", link: "https://www.youtube.com/watch?v=EXeTwQWrcwY" },
    { title: "Inception", poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.", link: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
    { title: "Gladiator", poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg", description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.", link: "https://www.youtube.com/watch?v=owK1qxDselE" },
    { title: "Die Hard", poster: "https://image.tmdb.org/t/p/w500/yFihWxQcmqcaBR31QM6Y8gT6aYV.jpg", description: "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.", link: "https://www.youtube.com/watch?v=jaJuwKCmJbY" },
    { title: "The Matrix", poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", link: "https://www.youtube.com/watch?v=vKQi3bBA1y8" },
    { title: "Terminator 2: Judgment Day", poster: "https://image.tmdb.org/t/p/w500/weVXMD5QBGeQil4ATRqQmiKj9Ec.jpg", description: "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg.", link: "https://www.youtube.com/watch?v=7QXDPzx71jQ" },
    { title: "Lethal Weapon", poster: "https://image.tmdb.org/t/p/w500/fTq4ThIP3pQTYR9eDepsbDHqw1.jpg", description: "A veteran cop and a young hotshot must put aside their differences to fight crime in the streets of Los Angeles.", link: "https://www.youtube.com/watch?v=0zJXV6tHH2g" }
];

const comedyMovies = [
    { title: "The Grand Budapest Hotel", poster: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDNrGJ.jpg", description: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.", link: "https://www.youtube.com/watch?v=1Fg5iWmQjwk" },
    { title: "Superbad", poster: "https://image.tmdb.org/t/p/w500/7YnkZLn1sU1sQvjGBOeO8qDUe.jpg", description: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.", link: "https://www.youtube.com/watch?v=4eaZ_48ZYog" },
    { title: "The Hangover", poster: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg", description: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing.", link: "https://www.youtube.com/watch?v=tcdUhdOlz9M" },
    { title: "Groundhog Day", poster: "https://image.tmdb.org/t/p/w500/vXjVd0Vu0MXRZnga7wEnHIIhO5B.jpg", description: "A weatherman finds himself inexplicably living the same day over and over again.", link: "https://www.youtube.com/watch?v=tSVeDx9fk60" },
    { title: "Shaun of the Dead", poster: "https://image.tmdb.org/t/p/w500/z2E6Fz0TEh0FQFNTYqp7fTg6KWN.jpg", description: "A man's uneventful life is disrupted by the zombie apocalypse.", link: "https://www.youtube.com/watch?v=yfDUv3ZjH2k" },
    { title: "Monty Python and the Holy Grail", poster: "https://image.tmdb.org/t/p/w500/8AVb7tyxZRsbKJNOTJHQZl7JYWO.jpg", description: "King Arthur and his knights embark on a low-budget search for the Grail, encountering many very silly obstacles.", link: "https://www.youtube.com/watch?v=LG1PlkURjxE" },
    { title: "Airplane!", poster: "https://image.tmdb.org/t/p/w500/hzXSE80SOfms7Ae9xZWr5X0fEQN.jpg", description: "A man afraid to fly must ensure that a plane lands safely after the pilots become sick.", link: "https://www.youtube.com/watch?v=08YgvRrKjCE" },
    { title: "The Princess Bride", poster: "https://image.tmdb.org/t/p/w500/dvjFM3GgYmhzvrc3JB7H2oWXh.jpg", description: "A fairy tale adventure about a beautiful young woman and her one true love.", link: "https://www.youtube.com/watch?v=VYg7Uhnufwo" },
    { title: "Ferris Bueller's Day Off", poster: "https://image.tmdb.org/t/p/w500/9LTQNCvoLsKXP0RFVFgHBhMZDtZ.jpg", description: "A high school wise guy is determined to have a day off from school, despite what his principal thinks of that.", link: "https://www.youtube.com/watch?v=D6gABQFR94U" },
    { title: "Ghostbusters", poster: "https://image.tmdb.org/t/p/w500/7E8nLijQqnH2OlX5lZZFx5aP8n.jpg", description: "Three former parapsychology professors set up shop as a unique ghost removal service.", link: "https://www.youtube.com/watch?v=vntAEVjPBzQ" }
];

const dramaMovies = [
    { title: "The Shawshank Redemption", poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", link: "https://www.youtube.com/watch?v=6hB3S9bIaco" },
    { title: "Forrest Gump", poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg", description: "The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.", link: "https://www.youtube.com/watch?v=bLvqoHBptjg" },
    { title: "The Godfather", poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", link: "https://www.youtube.com/watch?v=sY1S34973zI" },
    { title: "Schindler's List", poster: "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg", description: "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.", link: "https://www.youtube.com/watch?v=JdRGC-w9syA" },
    { title: "Fight Club", poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg", description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.", link: "https://www.youtube.com/watch?v=SUXWAEX2jlg" },
    { title: "Pulp Fiction", poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg", description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.", link: "https://www.youtube.com/watch?v=s7EdQ4FqbhY" },
    { title: "The Green Mile", poster: "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg", description: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.", link: "https://www.youtube.com/watch?v=Ki4haFrqSrw" },
    { title: "Good Will Hunting", poster: "https://image.tmdb.org/t/p/w500/bABCBKYBK7A5G1x0FzoeoNfuj2.jpg", description: "Will Hunting, a janitor at MIT, has a gift for mathematics but needs help from a psychologist to find direction in his life.", link: "https://www.youtube.com/watch?v=QSMvyuEeIyw" },
    { title: "American Beauty", poster: "https://image.tmdb.org/t/p/w500/wby9315QzVKdW9BonAefg8jGTTb.jpg", description: "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.", link: "https://www.youtube.com/watch?v=3ycmmJ6Ga2I" },
    { title: "The Silence of the Lambs", poster: "https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg", description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.", link: "https://www.youtube.com/watch?v=W6Mm8Sbe__o" }
];

const horrorMovies = [
    { title: "The Shining", poster: "https://image.tmdb.org/t/p/w500/xazWoLealQwEgqZ89MLZgvD1Nn4.jpg", description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.", link: "https://www.youtube.com/watch?v=S014oGZiSdI" },
    { title: "Hereditary", poster: "https://image.tmdb.org/t/p/w500/p9fmuz2Oj3HtEJEqbptLlk3wEcP.jpg", description: "A grieving family is haunted by tragic and disturbing occurrences.", link: "https://www.youtube.com/watch?v=V6wWKNij_1M" },
    { title: "Get Out", poster: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg", description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.", link: "https://www.youtube.com/watch?v=DzfpyUB60YY" },
    { title: "The Conjuring", poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxrZTZdhlqyxVY.jpg", description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.", link: "https://www.youtube.com/watch?v=k10ETZ41q5o" },
    { title: "It", poster: "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhNhxvc.jpg", description: "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.", link: "https://www.youtube.com/watch?v=xKJmEC5ieOk" },
    { title: "A Quiet Place", poster: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg", description: "A family is forced to live in silence while hiding from creatures that hunt by sound.", link: "https://www.youtube.com/watch?v=WR7cc5t7tv8" },
    { title: "The Babadook", poster: "https://image.tmdb.org/t/p/w500/kNMVfbF0ZB0bYNRgLrTlWpG8tPQ.jpg", description: "A single mother, plagued by the violent death of her husband, battles with her son's fear of a monster lurking in the house, but soon discovers a sinister presence all around her.", link: "https://www.youtube.com/watch?v=k5YVKclBzEk" },
    { title: "Midsommar", poster: "https://image.tmdb.org/t/p/w500/7LEI8ulZzO5gy9Ww2NVCrKmHeDZ.jpg", description: "A couple travels to Sweden to visit a rural hometown's fabled mid-summer festival. What begins as a dream vacation in a place where the sun never sets, rapidly devolves into a nightmare.", link: "https://www.youtube.com/watch?v=1Vnghdsjmd0" },
    { title: "Us", poster: "https://image.tmdb.org/t/p/w500/ux2dU1jQ2ACIMShzB3yP93Udpzc.jpg", description: "A family's serene beach vacation turns to chaos when their doppelgängers appear and begin to terrorize them.", link: "https://www.youtube.com/watch?v=hNCmb-4oXJA" },
    { title: "Sinister", poster: "https://image.tmdb.org/t/p/w500/gLhHHZUzeseRXShoDyC4hTrMcO.jpg", description: "A true-crime writer finds a cache of 8mm home movies films that suggest the murder he is currently researching is the work of an active serial killer.", link: "https://www.youtube.com/watch?v=-CJTZ9DiKvg" }
];

const kannadaMovies = [
    { title: "KGF: Chapter 1", poster: "https://image.tmdb.org/t/p/w500/2OmSTZ7L2QcwE7g3TOCGX0JQ9q.jpg", description: "A period drama set in the 1970s, KGF follows the story of Rocky, a young man who rises from poverty to become a powerful gangster in the gold mines of Kolar.", link: "https://www.youtube.com/watch?v=-KfsY-qwBS0" },
    { title: "KGF: Chapter 2", poster: "https://image.tmdb.org/t/p/w500/1sVx2VClrF3BDG0kXA8susFeQA3.jpg", description: "The blood-soaked land of Kolar Gold Fields has a new overlord now - Rocky, whose name strikes fear in the heart of his foes. His allies look up to him as their God.", link: "https://www.youtube.com/watch?v=Qah9sSIXt9E" },
    { title: "Ugramm", poster: "https://via.placeholder.com/200x300?text=Ugramm", description: "A young man seeks revenge against those who wronged his family, leading to a violent confrontation.", link: "https://www.youtube.com/watch?v=8jNq9e2V1Qs" },
    { title: "Mugamoodi", poster: "https://via.placeholder.com/200x300?text=Mugamoodi", description: "A story of a man who disguises himself to avenge his sister's death.", link: "https://www.youtube.com/watch?v=JfbxcD6biOk" },
    { title: "Raajakumara", poster: "https://via.placeholder.com/200x300?text=Raajakumara", description: "A carefree young man from a royal family runs away from home and falls in love with a journalist.", link: "https://www.youtube.com/watch?v=6X5Q3ET1YOs" },
    { title: "Kirik Party", poster: "https://via.placeholder.com/200x300?text=Kirik+Party", description: "Four friends go on a trip to Goa, leading to hilarious and unexpected adventures.", link: "https://www.youtube.com/watch?v=2iVYI99VGaw" },
    { title: "Ulidavaru Kandanthe", poster: "https://via.placeholder.com/200x300?text=Ulidavaru+Kandanthe", description: "A group of friends embark on a journey to find a perfect bride for their friend.", link: "https://www.youtube.com/watch?v=SOXWc32k4zA" },
    { title: "Gaalivaana", poster: "https://via.placeholder.com/200x300?text=Gaalivaana", description: "A young man dreams of becoming a singer and faces various challenges.", link: "https://www.youtube.com/watch?v=x_7YlGv9u1g" },
    { title: "Mundina Nildana", poster: "https://via.placeholder.com/200x300?text=Mundina+Nildana", description: "A story about friendship and adventure in a village setting.", link: "https://www.youtube.com/watch?v=K0eDlFX9GMc" },
    { title: "Samarasimha Reddy", poster: "https://via.placeholder.com/200x300?text=Samarasimha+Reddy", description: "A remake of the Telugu film, following a brave warrior.", link: "https://www.youtube.com/watch?v=6a0-dSM3I9s" }
];

const hindiMovies = [
    { title: "Dangal", poster: "https://image.tmdb.org/t/p/w500/gd1WJXd3kR0kH5SRRQL5DqIQzq.jpg", description: "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.", link: "https://www.youtube.com/watch?v=x_7YlGv9u1g" },
    { title: "3 Idiots", poster: "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79zOZ0j.jpg", description: "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently.", link: "https://www.youtube.com/watch?v=K0eDlFX9GMc" },
    { title: "Bajrangi Bhaijaan", poster: "https://image.tmdb.org/t/p/w500/2W4ZvACURDyhiNnSIaFPHfNbny3.jpg", description: "A young mute girl from Pakistan lands in India with a Pakistani intelligence agent's money and car, and a Hindi-speaking man from Delhi takes it upon himself to get her back safely to her homeland.", link: "https://www.youtube.com/watch?v=6a0-dSM3I9s" },
    { title: "PK", poster: "https://image.tmdb.org/t/p/w500/zMudEYR8XH6MMr8PJ4sEjE6dvh.jpg", description: "An alien on Earth loses the only device he can use to communicate with his spaceship, and ends up being worshipped as a god by the local villagers.", link: "https://www.youtube.com/watch?v=SOXWc32k4zA" },
    { title: "Padmaavat", poster: "https://image.tmdb.org/t/p/w500/bYcpIbq3D5s0Xe4X4EW6aQXFyQX.jpg", description: "Set in medieval Rajasthan, Queen Padmavati is married to a noble king and they live in a prosperous fortress with their subjects. However, when an ambitious Sultan hears of Padmavati's beauty, he attacks the fortress.", link: "https://www.youtube.com/watch?v=9BxW7XVFp5k" },
    { title: "Raazi", poster: "https://via.placeholder.com/200x300?text=Raazi", description: "A Kashmiri woman agrees to marry a Pakistani army officer in order to spy on Pakistan during the Indo-Pakistani War of 1971.", link: "https://www.youtube.com/watch?v=8jNq9e2V1Qs" },
    { title: "Gully Boy", poster: "https://via.placeholder.com/200x300?text=Gully+Boy", description: "A coming-of-age story based on the lives of street rappers in Mumbai.", link: "https://www.youtube.com/watch?v=JfbxcD6biOk" },
    { title: "Kabir Singh", poster: "https://via.placeholder.com/200x300?text=Kabir+Singh", description: "Kabir Singh, a short-tempered but brilliant surgeon, falls in love with Preeti, a medical student. When Preeti leaves him, Kabir spirals into self-destruction.", link: "https://www.youtube.com/watch?v=6X5Q3ET1YOs" },
    { title: "Article 15", poster: "https://via.placeholder.com/200x300?text=Article+15", description: "A young IPS officer's world is turned upside down when he investigates the case of a missing girl.", link: "https://www.youtube.com/watch?v=8jNq9e2V1Qs" },
    { title: "Andhadhun", poster: "https://via.placeholder.com/200x300?text=Andhadhun", description: "A series of mysterious events change the life of a blind pianist who has been promoted to a higher position by an influential music teacher.", link: "https://www.youtube.com/watch?v=2iVYI99VGaw" }
];

// Function to create movie element
function createMovieElement(movie) {
    const img = document.createElement('img');
    img.src = movie.poster;
    img.alt = movie.title;
    img.className = 'movie-poster';
    img.addEventListener('click', () => openModal(movie));
    return img;
}

// Modal functions
function openModal(movie) {
    let videoId = '';
    if (movie.link.includes('youtu.be/')) {
        videoId = movie.link.split('youtu.be/')[1].split('?')[0];
    } else if (movie.link.includes('youtube.com/watch?v=')) {
        videoId = movie.link.split('v=')[1].split('&')[0];
    }
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    document.getElementById('movie-iframe').src = embedUrl;
    document.getElementById('modal-poster').src = movie.poster;
    document.getElementById('modal-title').textContent = movie.title;
    document.getElementById('modal-description').textContent = movie.description;
    document.getElementById('movie-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('movie-iframe').src = '';
    document.getElementById('movie-modal').style.display = 'none';
}

// Event listeners
document.getElementById('close-modal').addEventListener('click', closeModal);
window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('movie-modal')) {
        closeModal();
    }
});

// Function to populate carousel
function populateCarousel(carouselId, movies) {
    const carousel = document.getElementById(carouselId);
    movies.forEach(movie => {
        carousel.appendChild(createMovieElement(movie));
    });
}

// Populate all carousels
populateCarousel('trending-carousel', trendingMovies);
populateCarousel('top-rated-carousel', topRatedMovies);
populateCarousel('action-carousel', actionMovies);
populateCarousel('comedy-carousel', comedyMovies);
populateCarousel('drama-carousel', dramaMovies);
populateCarousel('horror-carousel', horrorMovies);
populateCarousel('kannada-carousel', kannadaMovies);
populateCarousel('hindi-carousel', hindiMovies);

// Hamburger menu
document.getElementById('hamburger').addEventListener('click', function() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('active');
});
document.getElementById('search-bar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const allMovies = [...trendingMovies, ...topRatedMovies, ...actionMovies, ...comedyMovies, ...dramaMovies, ...horrorMovies, ...kannadaMovies, ...hindiMovies];
    const filteredMovies = allMovies.filter(movie => movie.title.toLowerCase().includes(query));
    
    // Clear all carousels
    document.querySelectorAll('.carousel').forEach(carousel => carousel.innerHTML = '');
    
    if (query) {
        // Show only filtered movies in trending carousel
        document.querySelector('.movie-row h2').textContent = 'Search Results';
        populateCarousel('trending-carousel', filteredMovies);
        // Hide other rows
        document.querySelectorAll('.movie-row').forEach((row, index) => {
            if (index !== 0) row.style.display = 'none';
        });
    } else {
        // Reset to original
        document.querySelector('.movie-row h2').textContent = 'Trending Now';
        populateCarousel('trending-carousel', trendingMovies);
        populateCarousel('top-rated-carousel', topRatedMovies);
        populateCarousel('action-carousel', actionMovies);
        populateCarousel('comedy-carousel', comedyMovies);
        populateCarousel('drama-carousel', dramaMovies);
        populateCarousel('horror-carousel', horrorMovies);
        populateCarousel('kannada-carousel', kannadaMovies);
        populateCarousel('hindi-carousel', hindiMovies);
        document.querySelectorAll('.movie-row').forEach(row => row.style.display = 'block');
    }
});