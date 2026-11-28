(() => {
  const groups = {
  "movies": {
    "type": "group",
    "group": "movies",
    "collectionPaths": [
      "movies-marvel",
      "movies-dc",
      "movies-indian",
      "movies-couples",
      "movies-characters"
    ],
    "category": ""
  },
  "action": {
    "type": "category",
    "group": "movies",
    "collectionPaths": [
      "movies-marvel",
      "movies-dc",
      "movies-indian"
    ],
    "category": "Movies · Action"
  },
  "romantic": {
    "type": "category",
    "group": "movies",
    "collectionPaths": [
      "movies-couples"
    ],
    "category": "Movies · Romantic"
  },
  "actresses": {
    "type": "category",
    "group": "movies",
    "collectionPaths": [
      "movies-characters"
    ],
    "category": "Movies · Actresses"
  },
  "movies-marvel": {
    "type": "collection",
    "group": "movies",
    "collectionPaths": [],
    "category": "Movies · Action"
  },
  "movies-dc": {
    "type": "collection",
    "group": "movies",
    "collectionPaths": [],
    "category": "Movies · Action"
  },
  "movies-indian": {
    "type": "collection",
    "group": "movies",
    "collectionPaths": [],
    "category": "Movies · Action"
  },
  "movies-couples": {
    "type": "collection",
    "group": "movies",
    "collectionPaths": [],
    "category": "Movies · Romantic"
  },
  "movies-characters": {
    "type": "collection",
    "group": "movies",
    "collectionPaths": [],
    "category": "Movies · Actresses"
  },
  "series": {
    "type": "group",
    "group": "series",
    "collectionPaths": [
      "series-superheroes",
      "series-survival",
      "series-couples",
      "series-cast"
    ],
    "category": ""
  },
  "series-action": {
    "type": "category",
    "group": "series",
    "collectionPaths": [
      "series-superheroes",
      "series-survival"
    ],
    "category": "Series · Action"
  },
  "series-romantic": {
    "type": "category",
    "group": "series",
    "collectionPaths": [
      "series-couples"
    ],
    "category": "Series · Romantic"
  },
  "series-actresses": {
    "type": "category",
    "group": "series",
    "collectionPaths": [
      "series-cast"
    ],
    "category": "Series · Actresses / Characters"
  },
  "series-superheroes": {
    "type": "collection",
    "group": "series",
    "collectionPaths": [],
    "category": "Series · Action"
  },
  "series-survival": {
    "type": "collection",
    "group": "series",
    "collectionPaths": [],
    "category": "Series · Action"
  },
  "series-couples": {
    "type": "collection",
    "group": "series",
    "collectionPaths": [],
    "category": "Series · Romantic"
  },
  "series-cast": {
    "type": "collection",
    "group": "series",
    "collectionPaths": [],
    "category": "Series · Actresses / Characters"
  },
  "anime": {
    "type": "group",
    "group": "anime",
    "collectionPaths": [
      "anime-battles",
      "anime-sports",
      "anime-films",
      "anime-couples",
      "anime-characters"
    ],
    "category": ""
  },
  "anime-action": {
    "type": "category",
    "group": "anime",
    "collectionPaths": [
      "anime-battles",
      "anime-sports"
    ],
    "category": "Anime · Action"
  },
  "anime-romantic": {
    "type": "category",
    "group": "anime",
    "collectionPaths": [
      "anime-films",
      "anime-couples"
    ],
    "category": "Anime · Romantic"
  },
  "anime-girls": {
    "type": "category",
    "group": "anime",
    "collectionPaths": [
      "anime-characters"
    ],
    "category": "Anime · Anime Girls Twixtor"
  },
  "anime-battles": {
    "type": "collection",
    "group": "anime",
    "collectionPaths": [],
    "category": "Anime · Action"
  },
  "anime-sports": {
    "type": "collection",
    "group": "anime",
    "collectionPaths": [],
    "category": "Anime · Action"
  },
  "anime-films": {
    "type": "collection",
    "group": "anime",
    "collectionPaths": [],
    "category": "Anime · Romantic"
  },
  "anime-couples": {
    "type": "collection",
    "group": "anime",
    "collectionPaths": [],
    "category": "Anime · Romantic"
  },
  "anime-characters": {
    "type": "collection",
    "group": "anime",
    "collectionPaths": [],
    "category": "Anime · Anime Girls Twixtor"
  },
  "sports": {
    "type": "group",
    "group": "sports",
    "collectionPaths": [
      "sports-cricket-action",
      "sports-athletes",
      "sports-virat-kohli",
      "sports-ms-dhoni",
      "sports-lionel-messi"
    ],
    "category": ""
  },
  "sports-cricket": {
    "type": "category",
    "group": "sports",
    "collectionPaths": [
      "sports-cricket-action",
      "sports-athletes",
      "sports-virat-kohli",
      "sports-ms-dhoni"
    ],
    "category": "Sports · Cricket"
  },
  "sports-football": {
    "type": "category",
    "group": "sports",
    "collectionPaths": [
      "sports-lionel-messi"
    ],
    "category": "Sports · Football"
  },
  "sports-cricket-action": {
    "type": "collection",
    "group": "sports",
    "collectionPaths": [],
    "category": "Sports · Cricket"
  },
  "sports-athletes": {
    "type": "collection",
    "group": "sports",
    "collectionPaths": [],
    "category": "Sports · Cricket"
  },
  "sports-virat-kohli": {
    "type": "collection",
    "group": "sports",
    "collectionPaths": [],
    "category": "Sports · Cricket"
  },
  "sports-ms-dhoni": {
    "type": "collection",
    "group": "sports",
    "collectionPaths": [],
    "category": "Sports · Cricket"
  },
  "sports-lionel-messi": {
    "type": "collection",
    "group": "sports",
    "collectionPaths": [],
    "category": "Sports · Football"
  }
};
  const collections = {
  "movies-marvel": {
    "title": "Marvel & Spider-Man",
    "path": "movies-marvel",
    "parent": "action",
    "group": "movies",
    "pattern": "avengers|spider|marvel|deadpool|blackpanther|captainamerica|ironman|thor|thunderbolts|venom|wanda|xmen",
    "broad": false,
    "image": "https://i.ytimg.com/vi/adX-2sAvHck/hqdefault.jpg"
  },
  "movies-dc": {
    "title": "DC & Justice League",
    "path": "movies-dc",
    "parent": "action",
    "group": "movies",
    "pattern": "batman|batvssup|superman|supergirl|justice-league|black-adam|theflash",
    "broad": false,
    "image": "https://i.ytimg.com/vi/w-_691SWfPA/hqdefault.jpg"
  },
  "movies-indian": {
    "title": "Indian Cinema",
    "path": "movies-indian",
    "parent": "action",
    "group": "movies",
    "pattern": "animal|devara|flyingjatt|lucky.?baskhar|ramayana|tere-naam|12th-fail|k-g-f",
    "broad": true,
    "image": "https://i.ytimg.com/vi/mqOf_5SlYuM/hqdefault.jpg"
  },
  "movies-couples": {
    "title": "Movie Couples",
    "path": "movies-couples",
    "parent": "romantic",
    "group": "movies",
    "pattern": "love|romantic|couple",
    "broad": false,
    "image": "https://i.ytimg.com/vi/g7LIkoEhYKo/hqdefault.jpg"
  },
  "movies-characters": {
    "title": "Character Scenepacks",
    "path": "movies-characters",
    "parent": "actresses",
    "group": "movies",
    "pattern": ".",
    "broad": false,
    "image": "https://i.ytimg.com/vi/jLk_QCY5TwI/hqdefault.jpg"
  },
  "series-superheroes": {
    "title": "Superhero Series",
    "path": "series-superheroes",
    "parent": "series-action",
    "group": "series",
    "pattern": "theboys|agatha",
    "broad": false,
    "image": "https://i.ytimg.com/vi/T3BUyfbrVV0/hqdefault.jpg"
  },
  "series-survival": {
    "title": "Thriller & Survival",
    "path": "series-survival",
    "parent": "series-action",
    "group": "series",
    "pattern": "alice|squidgame|strangerthings|derry",
    "broad": false,
    "image": "cover-alice.jpg"
  },
  "series-couples": {
    "title": "Series Couples",
    "path": "series-couples",
    "parent": "series-romantic",
    "group": "series",
    "pattern": "couple|love|arisu|clay|marge",
    "broad": false,
    "image": "https://i.ytimg.com/vi/1LNuI3x4c4c/hqdefault.jpg"
  },
  "series-cast": {
    "title": "Series Cast & Characters",
    "path": "series-cast",
    "parent": "series-actresses",
    "group": "series",
    "pattern": ".",
    "broad": false,
    "image": "https://i.ytimg.com/vi/Im27TBoITwE/hqdefault.jpg"
  },
  "anime-battles": {
    "title": "Battle Anime",
    "path": "anime-battles",
    "parent": "anime-action",
    "group": "anime",
    "pattern": "jjk|bleach|dragonball|black-clover|sukuna|gojo",
    "broad": false,
    "image": "cover-nitro-gojo.jpg"
  },
  "anime-sports": {
    "title": "Sports Anime",
    "path": "anime-sports",
    "parent": "anime-action",
    "group": "anime",
    "pattern": "blue-lock",
    "broad": false,
    "image": "https://i.ytimg.com/vi/cnVLZFxwMUQ/hqdefault.jpg"
  },
  "anime-films": {
    "title": "Anime Movies",
    "path": "anime-films",
    "parent": "anime-romantic",
    "group": "anime",
    "pattern": "yourname|suzume|weathering",
    "broad": false,
    "image": "https://i.ytimg.com/vi/LKItYiUJP6o/hqdefault.jpg"
  },
  "anime-couples": {
    "title": "Anime Couples",
    "path": "anime-couples",
    "parent": "anime-romantic",
    "group": "anime",
    "pattern": "couple|love|koyuki|sakura|naruhina|eren.*mikasa|temari.*shikamaru",
    "broad": true,
    "image": "cover-nitro-eren-mikasa.jpg"
  },
  "anime-characters": {
    "title": "Anime Characters",
    "path": "anime-characters",
    "parent": "anime-girls",
    "group": "anime",
    "pattern": "temari|shikamaru|luffy|nico robin|sukuna|gojo|eren|mikasa|anime girls",
    "broad": true,
    "image": "cover-nitro-temari-shikamaru.jpg"
  },
  "sports-cricket-action": {
    "title": "Cricket Action",
    "path": "sports-cricket-action",
    "parent": "sports-cricket",
    "group": "sports",
    "pattern": "cricket|aggressive|australia",
    "broad": true,
    "image": "https://i.ytimg.com/vi/1qG1xdzBFnw/hqdefault.jpg"
  },
  "sports-athletes": {
    "title": "Athletes",
    "path": "sports-athletes",
    "parent": "sports-cricket",
    "group": "sports",
    "pattern": "kohli|dhoni|rohit|messi",
    "broad": true,
    "image": "https://i.ytimg.com/vi/1qG1xdzBFnw/hqdefault.jpg"
  },
  "sports-virat-kohli": {
    "title": "Virat Kohli",
    "path": "sports-virat-kohli",
    "parent": "sports-cricket",
    "group": "sports",
    "pattern": "virat|kohli",
    "broad": true,
    "image": "https://i.ytimg.com/vi/1qG1xdzBFnw/hqdefault.jpg"
  },
  "sports-ms-dhoni": {
    "title": "MS Dhoni",
    "path": "sports-ms-dhoni",
    "parent": "sports-cricket",
    "group": "sports",
    "pattern": "dhoni",
    "broad": true,
    "image": "https://i.ytimg.com/vi/cCDl7dZrDK0/hqdefault.jpg"
  },
  "sports-lionel-messi": {
    "title": "Lionel Messi",
    "path": "sports-lionel-messi",
    "parent": "sports-football",
    "group": "sports",
    "pattern": "messi",
    "broad": true,
    "image": "https://i.ytimg.com/vi/zpOuhRsKwCo/hqdefault.jpg"
  }
};
  const fallback = {"movies":"fightclub-thumb.jpeg","anime":"cover-nitro-gojo.jpg","series":"cover-alice.jpg","sports":"sports-cricket-thumb.jpg"};
  const catalog = window.NITRO_SITE_INDEX ?? [];
  const makeCard = (title, path, src, cover) => {
    const link = document.createElement('a');
    link.className = 'category-card';
    link.href = path;
    const image = document.createElement('img');
    image.alt = '';
    image.loading = 'lazy';
    image.src = src || cover;
    image.addEventListener('error', () => { image.src = cover; }, { once: true });
    const heading = document.createElement('h3');
    heading.textContent = title;
    link.append(image, heading);
    return link;
  };

  for (const shelf of document.querySelectorAll('[data-collection-shelf]')) {
    const group = groups[shelf.dataset.collectionShelf];
    const grid = shelf.querySelector('.nitro-shelf-grid');
    for (const path of group.collectionPaths) {
      const { title, image } = collections[path];
      grid.append(makeCard(title, path + '.html', image, fallback[group.group]));
    }
    shelf.hidden = !grid.childElementCount;
  }

  for (const shelf of document.querySelectorAll('[data-clip-shelf]')) {
    const key = shelf.dataset.clipShelf;
    const group = groups[key];
    const collection = collections[key];
    const match = collection ? new RegExp(collection.pattern, 'i') : null;
    const entries = catalog.filter(entry => {
      const category = entry.c.toLowerCase();
      return category.startsWith(group.group + ' ·') &&
        !category.endsWith(' · collections') &&
        (!group.category || collection?.broad || category === group.category.toLowerCase()) &&
        (!match || match.test(entry.t + ' ' + entry.u)) &&
        (!(/\bedit audio\b|\[(?:AMV\/EDIT|EDIT\/AMV)\]|\b4K(?: HD)? Edit\b/i.test(entry.t)) ||
           /\btwixtor\b|\bscenepack\b/i.test(entry.t));
    });
    const grid = shelf.querySelector('.nitro-shelf-grid');
    const seen = new Set();
    const counts = new Map();
    const limit = collection ? Infinity : 12;
    const ordered = collection ? entries : [...entries].sort((a, b) => Number(Boolean(b.d.length || b.u.includes('#'))) - Number(Boolean(a.d.length || a.u.includes('#'))));
    for (const entry of ordered) {
      const path = entry.u.split('#')[0];
      const coverKey = entry.i || entry.u;
      if (seen.has(coverKey) || path === key + '.html' ||
          (!collection && (counts.get(path) ?? 0) >= 2)) continue;
      seen.add(coverKey);
      counts.set(path, (counts.get(path) ?? 0) + 1);
      grid.append(makeCard(entry.t, entry.u, entry.i, fallback[group.group]));
      if (grid.childElementCount >= limit) break;
    }
    shelf.hidden = !grid.childElementCount;
  }
})();
