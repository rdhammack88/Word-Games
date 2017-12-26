$(function() {

    var level = 1, wordIndex = 0, randomIndex = 0, wordCount = 0, maxWordLength = 0, minWordLength = 0, userPoints = 0;
    var word = '', jumbledWord = '', wordHolder = '', difficulty = '', userGuess = '';
    var timerText, timerSet, comfirmTimer;
    var words = new Array(), usedWords = new Array();

    words = [
            
        // 3 LETTER WORDS
        'ace', 'act', 'add', 'age', 'ago', 'aid', 'ail', 'aim', 'air', 'ale',
        'all', 'alt', 'amp', 'and', 'ant', 'any', 'ape', 'app', 'apt', 'arc', 
        'are', 'ark', 'arm', 'art', 'ash', 'ask', 'ate', 'awe', 'axe', 'bad', 
        'bag', 'bam', 'ban', 'bar', 'bat', 'bay', 'bed', 'bee', 'beg', 'bet', 
        'bid', 'big', 'bin', 'bio', 'bit', 'bog', 'bop', 'bot', 'bow', 'box', 
        'boy', 'bug', 'bum', 'bun', 'bus', 'but', 'buy', 'bye', 'cab', 'cam', 
        'can', 'cap', 'car', 'cat', 'con', 'cop', 'cot', 'cow', 'coy', 'cry',
        'cub', 'cue', 'cup', 'cut', 'dam', 'day', 'den', 'dew', 'die', 'dig', 
        'dim', 'dip', 'doc', 'doe', 'dog', 'dot', 'dry', 'due', 'dug', 'duo', 
        'dye', 'ear', 'eat', 'eel', 'egg', 'ego', 'elf', 'elk', 'elm', 'emu', 
        'end', 'eve', 'eye', 'fad', 'fan', 'far', 'fat', 'fax', 'fed', 'fee',
        'few', 'fib', 'fig', 'fit', 'fix', 'flu', 'fly', 'foe', 'fog', 'for', 
        'fox', 'fry', 'fun', 'fur', 'gag', 'gap', 'gas', 'gel', 'gem', 'get', 
        'gig', 'got', 'gum', 'gun', 'gut', 'guy', 'gym', 'had', 'ham', 'has', 
        'hat', 'hay', 'hem', 'hen', 'her', 'hey', 'hid', 'him', 'hip', 'his', 
        'hit', 'hoe', 'hog', 'hop', 'hot', 'how', 'hub', 'hue', 'hug', 'hum', 
        'hun', 'ice', 'icy', 'ill', 'ink', 'ivy', 'jab', 'jag', 'jam', 'jar', 
        'jaw', 'jet', 'jig', 'job', 'jog', 'jot', 'joy', 'jug', 'key', 'kid', 
        'kit', 'lab', 'lag', 'lap', 'law', 'lay', 'led', 'leg', 'let', 'lid', 
        'lie', 'lip', 'lit', 'log', 'lot', 'low', 'mad', 'man', 'map', 'mat', 
        'max', 'may', 'men', 'met', 'mix', 'mob', 'mow', 'mud', 'mug', 'nap', 
        'net', 'new', 'nod', 'nut', 'oak', 'oar', 'oat', 'odd', 'oil', 'old', 
        'one', 'opt', 'our', 'out', 'owe', 'owl', 'own', 'pad', 'pal', 'pan', 
        'pat', 'paw', 'pay', 'pea', 'peg', 'pen', 'pet', 'pie', 'pig', 'pin', 
        'pit', 'ply', 'pop', 'pot', 'pro', 'pry', 'put', 'rad', 'rag', 'ram', 
        'ran', 'rat', 'raw', 'red', 'rib', 'rid', 'rig', 'rim', 'rip', 'rob', 
        'rom', 'rot', 'row', 'rub', 'rug', 'rum', 'run', 'rut', 'rye', 'sad', 
        'sag', 'sap', 'sat', 'saw', 'say', 'sea', 'see', 'set', 'sew', 'she', 
        'shy', 'sim', 'sin', 'sip', 'sir', 'sit', 'six', 'ski', 'sky', 'sly', 
        'sob', 'son', 'soy', 'spa', 'spy', 'sue', 'sum', 'sun', 'tab', 'tag', 
        'tan', 'tap', 'tar', 'tax', 'tea', 'ten', 'the', 'tic', 'tie', 'tin', 
        'tip', 'toe', 'ton', 'top', 'tow', 'toy', 'try', 'tub', 'tug', 'two',
        'use', 'van', 'vet', 'wag', 'war', 'was', 'wax', 'way', 'web', 'wet', 
        'who', 'why', 'wig', 'win', 'woe', 'won', 'yam', 'yay', 'yea', 'yes',
        'yet', 'you', 'yum', 'zag', 'zap', 'zig', 'zip', 'zoo', 

        // 4 LETTER WORDS
        'aced', 'aces', 'ache', 'achy', 'acid', 'acme', 'acre', 'aero', 'aged', 'ahoy', 
        'ally', 'aloe', 'also', 'amen', 'ammo', 'anti', 'aqua', 'arch', 'area', 'arms', 
        'army', 'ashy', 'asks', 'atom', 'aunt', 'auto', 'avid', 'away', 'axed', 'axel', 
        'axes', 'axis', 'axle', 'babe', 'baby', 'back', 'bail', 'bait', 'bake', 'bald', 
        'bale', 'ball', 'band', 'bang', 'bank', 'bark', 'barn', 'base', 'bash', 'bass', 
        'bath', 'beak', 'beam', 'bean', 'bear', 'beat', 'beef', 'beep', 'bell', 'belt', 
        'bend', 'bent', 'best', 'beta', 'bike', 'bill', 'bind', 'bird', 'bite', 'blew', 
        'blog', 'blot', 'blow', 'blue', 'blur', 'boar', 'boat', 'body', 'boil', 'bold', 
        'bolt', 'bomb', 'bond', 'bone', 'bony', 'book', 'boom', 'boot', 'born', 'boss', 
        'both', 'bowl', 'brag', 'brew', 'bulb', 'bulk', 'bull', 'bump', 'bunk', 'bunt', 
        'burn', 'burp', 'bury', 'bush', 'bust', 'busy', 'buzz', 'byte', 'cafe', 'cage', 
        'cake', 'calf', 'call', 'calm', 'came', 'camo', 'camp', 'cane', 'cant', 'cape', 
        'card', 'care', 'carp', 'cart', 'casa', 'case', 'cash', 'cask', 'cast', 'cave', 
        'cell', 'cent', 'chat', 'chef', 'chew', 'chin', 'chip', 'chop', 'chow', 'chug', 
        'cite', 'city', 'clam', 'clan', 'clap', 'claw', 'clay', 'clip', 'club', 'clue', 
        'coal', 'coat', 'coax', 'coca', 'coco', 'code', 'coed', 'coil', 'coin', 'coke', 
        'cola', 'cold', 'colt', 'coma', 'comb', 'come', 'cone', 'cook', 'cool', 'coop', 
        'cope', 'copy', 'cord', 'core', 'cork', 'corn', 'cost', 'cove', 'cozy', 'crab', 
        'cram', 'crew', 'crib', 'crop', 'crow', 'cube', 'cuff', 'cult', 'curb', 'cure', 
        'curl', 'cusp', 'cute', 'czar', 'dame', 'damp', 'dare', 'dark', 'dart', 'dash', 
        'data', 'date', 'dawn', 'days', 'daze', 'dead', 'deaf', 'deal', 'dean', 'dear', 
        'debt', 'deck', 'deep', 'deer', 'deli', 'demo', 'dent', 'deny', 'desk', 'dial', 
        'dice', 'diet', 'dill', 'dime', 'dine', 'ding', 'dirt', 'disc', 'dish', 'disk', 
        'diva', 'dive', 'dock', 'does', 'dojo', 'dole', 'doll', 'done', 'doom', 'door', 
        'dorm', 'dose', 'dove', 'down', 'drag', 'draw', 'drip', 'drop', 'drum', 'dual', 
        'duce', 'duck', 'dude', 'duel', 'duet', 'duke', 'dull', 'dumb', 'dump', 'dune', 
        'dunk', 'dusk', 'dust', 'duty', 'dyer', 'each', 'earn', 'east', 'easy', 'echo', 
        'edge', 'edgy', 'edit', 'eggs', 'else', 'envy', 'epic', 'euro', 'even', 'ever', 
        'evil', 'exam', 'exit', 'expo', 'eyes', 'face', 'fact', 'fade', 'fail', 'fair', 
        'fake', 'fall', 'fame', 'fang', 'farm', 'fast', 'fate', 'faux', 'feal', 'fear', 
        'feed', 'feel', 'feet', 'fell', 'felt', 'feud', 'file', 'fill', 'film', 'find', 
        'fine', 'fire', 'firm', 'fish', 'fist', 'five', 'fizz', 'flag', 'flap', 'flat', 
        'flaw', 'flea', 'fled', 'flew', 'flex', 'flip', 'flow', 'foam', 'foil', 'fold', 
        'font', 'food', 'fool', 'foot', 'fork', 'form', 'fort', 'foul', 'four', 'fowl', 
        'foxy', 'frag', 'free', 'frog', 'from', 'fuel', 'fuji', 'full', 'fund', 'funk', 
        'fury', 'fuse', 'fuss', 'fuzz', 'gage', 'gain', 'game', 'gang', 'gash', 'gasp', 
        'gate', 'gave', 'gawk', 'gaze', 'gear', 'geek', 'germ', 'gift', 'girl', 'glad', 
        'glob', 'glow', 'glue', 'glut', 'gnar', 'gnat', 'gnaw', 'goal', 'goat', 'gold', 
        'golf', 'gone', 'good', 'goof', 'gore', 'gory', 'gown', 'grab', 'gram', 'grew', 
        'grey', 'grid', 'grin', 'grip', 'grit', 'grow', 'gulf', 'guru', 'gush', 'gust', 
        'gyro', 'hack', 'hail', 'hair', 'half', 'hall', 'halo', 'halt', 'hand', 'hang', 
        'hard', 'harm', 'harp', 'hash', 'hate', 'haul', 'have', 'hawk', 'haze', 'hazy', 
        'head', 'heal', 'heap', 'hear', 'heat', 'heed', 'heel', 'heir', 'held', 'help', 
        'herb', 'here', 'hero', 'hide', 'high', 'hike', 'hill', 'hind', 'hint', 'hire', 
        'hive', 'hoax', 'hold', 'hole', 'holy', 'home', 'honk', 'hood', 'hook', 'hoop', 
        'hoot', 'hope', 'horn', 'hose', 'host', 'hour', 'howl', 'huge', 'hulk', 'hung', 
        'hunt', 'hurl', 'hurt', 'hush', 'husk', 'hymn', 'hype', 'icon', 'idea', 'idle', 
        'idol', 'inch', 'info', 'into', 'iron', 'itch', 'item', 'jail', 'java', 'jaws', 
        'jazz', 'jean', 'jeep', 'jinx', 'jive', 'jock', 'jogs', 'join', 'joke', 'jolt', 
        'judo', 'juke', 'jump', 'junk', 'jury', 'just', 'keep', 'kept', 'kick', 'kilo', 
        'kind', 'king', 'kiss', 'kite', 'kiwi', 'knee', 'knew', 'knit', 'knob', 'knot', 
        'know', 'lace', 'lack', 'lady', 'laid', 'lair', 'lake', 'lama', 'lamb', 'lame',
        'lamp', 'land', 'lane', 'last', 'late', 'lava', 'lawn', 'lazy', 'lead', 'leaf', 
        'leak', 'lean', 'leap', 'left', 'less', 'lewd', 'liar', 'lick', 'lien', 'life', 
        'lift', 'like', 'limb', 'lime', 'limo', 'limp', 'line', 'link', 'lint', 'lion', 
        'list', 'live', 'load', 'loaf', 'loan', 'lock', 'loft', 'logo', 'loin', 'lone', 
        'long', 'look', 'loop', 'lord', 'lose', 'loss', 'lost', 'loud', 'love', 'lung', 
        'lurk', 'lush', 'lust', 'lynx', 'mace', 'mach', 'made', 'maid', 'mail', 'main', 
        'make', 'male', 'mall', 'malt', 'many', 'mark', 'mart', 'mash', 'mask', 'mass', 
        'mast', 'mate', 'math', 'maze', 'meal', 'mean', 'meat', 'meet', 'mega', 'melt', 
        'memo', 'menu', 'mesh', 'mess', 'meta', 'mice', 'mild', 'mile', 'milk', 'mill', 
        'mime', 'mind', 'mine', 'mini', 'mink', 'mint', 'minx', 'moan', 'mock', 'mode', 
        'mold', 'mole', 'monk', 'mono', 'mood', 'moon', 'more', 'most', 'moth', 'move', 
        'much', 'mule', 'muse', 'mush', 'musk', 'must', 'mute', 'myth', 'name', 'navy', 
        'near', 'neat', 'neck', 'need', 'neon', 'nest', 'news', 'next', 'nice', 'nine', 
        'node', 'none', 'noon', 'nope', 'nose', 'nosy', 'note', 'noun', 'nude', 'nuke', 
        'null', 'numb', 'nuts', 'oath', 'oats', 'obey', 'odor', 'ogre', 'oily', 'okay', 
        'okra', 'omen', 'omit', 'once', 'only', 'onto', 'onyx', 'ooze', 'open', 'oral', 
        'ouch', 'oval', 'oven', 'over', 'owed', 'pace', 'pack', 'page', 'paid', 'pain', 
        'pair', 'pale', 'palm', 'pane', 'park', 'part', 'pase', 'pass', 'past', 'path', 
        'pave', 'pawn', 'peak', 'pear', 'peck', 'perk', 'perm', 'pest', 'pick', 'pike', 
        'pile', 'pill', 'pine', 'ping', 'pink', 'pint', 'pipe', 'plan', 'play', 'plea', 
        'plot', 'plow', 'plug', 'plum', 'plus', 'poem', 'poet', 'poke', 'pole', 'poll', 
        'polo', 'pond', 'pong', 'pony', 'pool', 'poor', 'pork', 'port', 'post', 'pour', 
        'pray', 'prey', 'pull', 'pulp', 'pump', 'punt', 'puny', 'pure', 'push', 'putt', 
        'quad', 'quit', 'quiz', 'race', 'rack', 'raft', 'rage', 'raid', 'rail', 'rain', 
        'rake', 'ramp', 'rank', 'rare', 'rash', 'rave', 'read', 'real', 'rear', 'redo', 
        'rely', 'rent', 'repo', 'rest', 'rice', 'rich', 'ride', 'ring', 'rink', 'riot', 
        'ripe', 'rise', 'risk', 'road', 'roar', 'robe', 'rock', 'rode', 'role', 'roll', 
        'roof', 'room', 'root', 'rope', 'rose', 'ruby', 'rude', 'ruin', 'rule', 'rush', 
        'rust', 'sack', 'safe', 'saga', 'sage', 'said', 'sail', 'sale', 'salt', 'same', 
        'sand', 'sane', 'sang', 'sank', 'scab', 'scam', 'scan', 'scar', 'seal', 'seam', 
        'seat', 'seed', 'seek', 'seem', 'seen', 'self', 'sell', 'send', 'sent', 'shed', 
        'shin', 'ship', 'shoe', 'shop', 'shot', 'show', 'shut', 'sick', 'side', 'sigh', 
        'sign', 'silk', 'silo', 'sing', 'sink', 'sire', 'site', 'size', 'skew', 'skid', 
        'skim', 'skin', 'skip', 'skit', 'slab', 'slam', 'slap', 'slat', 'sled', 'slid', 
        'slim', 'slip', 'slit', 'slob', 'slot', 'slow', 'smug', 'snag', 'snap', 'snip', 
        'snob', 'snot', 'snow', 'snug', 'soak', 'soap', 'soar', 'sock', 'soda', 'sofa', 
        'soft', 'soil', 'sold', 'sole', 'solo', 'some', 'song', 'soon', 'sore', 'sort', 
        'soul', 'soup', 'sour', 'spam', 'span', 'spin', 'spit', 'spot', 'spun', 'spur', 
        'stab', 'star', 'stat', 'stay', 'stem', 'step', 'stew', 'stir', 'stop', 'stub', 
        'stud', 'stun', 'such', 'suck', 'suit', 'sumo', 'sung', 'sunk', 'sure', 'surf', 
        'swab', 'swag', 'swam', 'swan', 'swap', 'swat', 'sway', 'swig', 'swim', 'sync', 
        'taco', 'tail', 'take', 'tale', 'talk', 'tall', 'tame', 'tank', 'tape', 'tare', 
        'tarp', 'tart', 'task', 'taxi', 'teal', 'team', 'tear', 'tech', 'teen', 'tell', 
        'tent', 'term', 'test', 'text', 'than', 'that', 'thaw', 'them', 'then', 'they', 
        'thin', 'this', 'thug', 'tick', 'tide', 'tidy', 'tied', 'tier', 'ties', 'tile', 
        'tilt', 'time', 'tint', 'tiny', 'tire', 'toad', 'told', 'toll', 'tomb', 'tone', 
        'took', 'tool', 'tore', 'torn', 'toss', 'town', 'trap', 'tray', 'tree', 'trim', 
        'trio', 'trip', 'true', 'tuba', 'tube', 'tuck', 'tuna', 'tune', 'turf', 'turn', 
        'tusk', 'twig', 'twin', 'type', 'typo', 'tzar', 'ugly', 'undo', 'unit', 'upon', 
        'urge', 'used', 'user', 'uses', 'vail', 'vain', 'vary', 'vase', 'vast', 'veal', 
        'veil', 'vein', 'vent', 'verb', 'vert', 'very', 'vest', 'veto', 'vibe', 'vice', 
        'vine', 'visa', 'void', 'volt', 'vote', 'wack', 'wage', 'wait', 'wake', 'walk', 
        'wall', 'wand', 'want', 'ward', 'warm', 'warn', 'warp', 'wash', 'wasp', 'watt', 
        'wave', 'wavy', 'weak', 'wear', 'week', 'weep', 'weld', 'well', 'welt', 'went', 
        'wept', 'were', 'west', 'what', 'when', 'whip', 'whiz', 'whom', 'whop', 'wick', 
        'wide', 'wife', 'wild', 'will', 'wind', 'wing', 'wink', 'wipe', 'wire', 'wise', 
        'wish', 'wisp', 'with', 'wive', 'woke', 'wolf', 'womb', 'wont', 'wood', 'woof', 
        'wool', 'word', 'wore', 'work', 'worm', 'worn', 'wrap', 'yank', 'yard', 'yarn', 
        'yawn', 'yeah', 'year', 'yell', 'yoga', 'yolk', 'your', 'zero', 'zest', 'zinc', 
        'zone', 'zoom',

        // 5 LETTER WORDS
        'abide', 'abort', 'about', 'above', 'abuse', 'abyss', 'aches', 'acing', 'acorn', 
        'actor', 'acute', 'adage', 'adapt', 'adept', 'admit', 'adobe', 'adopt', 'adore', 
        'adorn', 'adult', 'after', 'again', 'agent', 'agile', 'agism', 'agony', 'agree',
        'ahead', 'ahold', 'aimed', 'aisle', 'alamo', 'alarm', 'album', 'alert', 'algae',
        'alias', 'alibi', 'alien', 'align', 'alike', 'alive', 'alley', 'allot', 'allow',
        'alloy', 'aloft', 'aloha', 'alone', 'along', 'aloud', 'alpha', 'alter', 'amaze',
        'amend', 'amigo', 'amino', 'among', 'amour', 'ample', 'amuse', 'angel', 'anger',
        'angle', 'angry', 'ankle', 'annex', 'annoy', 'antsy', 'apart', 'apple', 'apply',
        'apron', 'arbor', 'arena', 'argue', 'ariel', 'arise', 'armor', 'aroma', 'array',
        'arrow', 'arson', 'ashes', 'aside', 'askew', 'atlas', 'atoms', 'atomy', 'atone',
        'attic', 'audio', 'audit', 'auger', 'avert', 'avoid', 'await', 'awake', 'award',
        'aware', 'awful', 'awoke', 'azure', 'bacon', 'badge', 'badly', 'bagel', 'baggy', 
        'baked', 'banjo', 'barge', 'baron', 'based', 'basic', 'basil', 'basin', 'basis', 
        'batch', 'bathe', 'beach', 'beard', 'beast', 'beefy', 'begin', 'begun', 'beige', 
        'being', 'belch', 'belle', 'belly', 'below', 'bench', 'bendy', 'berry', 'bevel', 
        'bible', 'bicep', 'bigot', 'biked', 'biker', 'bimbo', 'binge', 'bingo', 'birth', 
        'bison', 'biter', 'black', 'blade', 'blame', 'bland', 'blank', 'blast', 'blaze', 
        'bleak', 'bleed', 'blend', 'bless', 'blest', 'blimp', 'blind', 'blink', 'bliss', 
        'blitz', 'block', 'blood', 'bloom', 'blown', 'bluff', 'blunt', 'blurt', 'blush', 
        'board', 'boast', 'boats', 'boils', 'boink', 'boney', 'bongo', 'bonus', 'boogy', 
        'boost', 'booth', 'bossy', 'botch', 'bound', 'bowel', 'boxer', 'brace', 'braid', 
        'brail', 'brain', 'brake', 'brand', 'brank', 'brans', 'brant', 'brash', 'brass', 
        'brats', 'brava', 'brave', 'bravo', 'brawl', 'brawn', 'bread', 'break', 'breed', 
        'bribe', 'brick', 'bride', 'brief', 'bring', 'brink', 'brisk', 'broad', 'broil', 
        'broke', 'broom', 'broth', 'brown', 'brung', 'brush', 'brute', 'budge', 'buggy', 
        'build', 'built', 'bulge', 'bulky', 'bully', 'bumpy', 'bunch', 'bunny', 'burly', 
        'burnt', 'burst', 'bushy', 'busty', 'butch', 'buyer', 'cabin', 'cable', 'cache', 
        'caddy', 'cadet', 'caged', 'cages', 'calfs', 'calls', 'camel', 'cameo', 'canal', 
        'candy', 'canoe', 'canon', 'cards', 'cargo', 'carry', 'carve', 'caste', 'catch', 
        'cater', 'caulk', 'cause', 'cease', 'cedar', 'cello', 'cents', 'chain', 'chair', 
        'chalk', 'champ', 'chant', 'chaos', 'charm', 'chart', 'chase', 'cheap', 'cheat', 
        'check', 'cheek', 'cheer', 'chess', 'chest', 'chevy', 'chewy', 'chick', 'chief', 
        'child', 'chile', 'chili', 'chill', 'chime', 'chimp', 'china', 'chips', 'chirp', 
        'chive', 'choir', 'choke', 'chomp', 'chops', 'chord', 'chore', 'chose', 'chugs', 
        'chump', 'chunk', 'churn', 'chute', 'cider', 'cigar', 'cinch', 'circa', 'cisco', 
        'cited', 'cites', 'civic', 'civil', 'clack', 'claim', 'clamp', 'clang', 'clank', 
        'claps', 'clapt', 'clash', 'clasp', 'class', 'claws', 'clean', 'clear', 'cleat', 
        'clerk', 'click', 'cliff', 'climb', 'cling', 'clink', 'clips', 'cloak', 'clock', 
        'clone', 'close', 'cloth', 'cloud', 'clove', 'clown', 'clubs', 'cluck', 'clued', 
        'clues', 'clump', 'clunk', 'coach', 'coast', 'coats', 'cobra', 'cocoa', 'codec', 
        'coded', 'coder', 'codes', 'codex', 'coils', 'coins', 'colon', 'color', 'combo', 
        'comet', 'comfy', 'comic', 'comix', 'condo', 'coney', 'congo', 'cooks', 'cooky', 
        'copay', 'copes', 'coral', 'cords', 'cores', 'corks', 'corky', 'corny', 'corps', 
        'corse', 'costs', 'couch', 'cough', 'could', 'count', 'coupe', 'court', 'cover', 
        'coves', 'covet', 'crabs', 'crack', 'craft', 'cramp', 'crams', 'crane', 'crank', 
        'crape', 'crash', 'crate', 'crawl', 'craze', 'crazy', 'creak', 'cream', 'credo', 
        'creed', 'creek', 'creep', 'creme', 'crept', 'crest', 'crews', 'cribs', 'crick', 
        'cried', 'cries', 'crime', 'crimp', 'crisp', 'crook', 'crops', 'cross', 'crowd', 
        'crown', 'crude', 'cruel', 'crumb', 'crush', 'crust', 'crypt', 'cubed', 'cubes', 
        'cubic', 'cumin', 'cupid', 'cured', 'cures', 'curio', 'curls', 'curly', 'curse', 
        'curve', 'curvy', 'cushy', 'cusps', 'cuter', 'cutie', 'cyber', 'cycle', 'cynic', 
        'czars', 'daily', 'dairy', 'daisy', 'dance', 'dandy', 'dared', 'dares', 'darts', 
        'dashy', 'dated', 'dates', 'dazed', 'dealt', 'death', 'debit', 'debug', 'debut', 
        'decaf', 'decal', 'decay', 'decks', 'decor', 'decoy', 'defer', 'deity', 'delay', 
        'delta', 'delve', 'demon', 'denim', 'dense', 'depot', 'depth', 'derby', 'desks', 
        'detox', 'deuce', 'devil', 'dials', 'diary', 'diced', 'digit', 'diner', 'dingo', 
        'dingy', 'diode', 'dirty', 'disco', 'ditch', 'ditsy', 'ditto', 'ditzy', 'dives', 
        'divot', 'dizzy', 'dodge', 'doggy', 'doing', 'dolce', 'donor', 'donut', 'doozy', 
        'dopey', 'dorky', 'doses', 'doubt', 'dough', 'douse', 'dowel', 'dozen', 'draft', 
        'drain', 'drama', 'drank', 'drape', 'drawn', 'dread', 'dream', 'dress', 'dried', 
        'drift', 'drill', 'drink', 'drips', 'dript', 'drive', 'droid', 'drone', 'drool', 
        'droop', 'drops', 'dropt', 'drove', 'drown', 'drunk', 'dryer', 'dumbo', 'dummy', 
        'dunce', 'duped', 'dusts', 'dusty', 'dutch', 'duvet', 'dwarf', 'dwell', 'dying', 
        'eager', 'eagle', 'early', 'earth', 'eaten', 'ebony', 'ebook', 'echos', 'edges', 
        'eerie', 'eight', 'eject', 'elate', 'elbow', 'elder', 'elect', 'elite', 'elope', 
        'elude', 'email', 'embed', 'ember', 'emery', 'empty', 'enact', 'enemy', 'enjoy', 
        'enter', 'entry', 'enzym', 'epoxy', 'equal', 'equip', 'erase', 'error', 'erupt', 
        'essay', 'ethic', 'evade', 'event', 'every', 'evict', 'evoke', 'exact', 'exams', 
        'excel', 'exert', 'exile', 'exist', 'extra', 'fable', 'faced', 'facet', 'facts', 
        'faded', 'faint', 'fairy', 'faith', 'false', 'fancy', 'farce', 'fatal', 'fatty', 
        'fault', 'favor', 'faxed', 'feast', 'felon', 'femme', 'fence', 'ferry', 'fetal', 
        'fetch', 'fetus', 'fever', 'fewer', 'fiber', 'ficus', 'field', 'fiend', 'fiery', 
        'fifth', 'fifty', 'fight', 'filed', 'filet', 'filth', 'final', 'finch', 'fired', 
        'first', 'fishy', 'fixed', 'fizzy', 'flail', 'flair', 'flake', 'flaky', 'flame', 
        'flank', 'flare', 'flash', 'flask', 'fleet', 'flesh', 'flick', 'fling', 'flint', 
        'flirt', 'float', 'flock', 'flood', 'floor', 'floss', 'flour', 'flown', 'fluff', 
        'fluid', 'fluke', 'flung', 'flunk', 'flush', 'flute', 'flyer', 'foamy', 'focal',
        'focus', 'foggy', 'folio', 'fondu', 'force', 'forge', 'forgo', 'forth', 'forty', 
        'found', 'foyer', 'frail', 'frame', 'fraud', 'freak', 'freed', 'fresh', 'fried', 
        'fries', 'frill', 'frisk', 'fritz', 'frizz', 'front', 'frost', 'froth', 'frown', 
        'froze', 'fruit', 'fryer', 'fudge', 'fully', 'fumed', 'fumes', 'funky', 'funny', 
        'furor', 'furry', 'fused', 'fussy', 'futon', 'fuzzy', 'gaged', 'gages', 'gally', 
        'galop', 'gamer', 'games', 'gamey', 'gamma', 'gasps', 'gassy', 'gated', 'gates', 
        'gator', 'gaudy', 'gauge', 'gaunt', 'gauze', 'gavel', 'gawky', 'gazed', 'gazes', 
        'gears', 'gecko', 'geeky', 'geese', 'genre', 'getup', 'ghost', 'ghoul', 'giant', 
        'giddy', 'gifts', 'gipsy', 'girly', 'girth', 'gismo', 'given', 'giver', 'gizmo', 
        'glade', 'glair', 'glare', 'glass', 'glaze', 'glazy', 'gleam', 'gloat', 'globe', 
        'gloom', 'glory', 'gloss', 'glove', 'glued', 'gnarl', 'gnome', 'going', 'goner', 
        'goody', 'gooey', 'goofy', 'goony', 'goose', 'gorge', 'gouge', 'grace', 'grade', 
        'graft', 'grail', 'grain', 'grand', 'grape', 'graph', 'grasp', 'grass', 'grate', 
        'grave', 'gravy', 'graze', 'great', 'greed', 'greek', 'green', 'greet', 'grief', 
        'grill', 'grime', 'grimy', 'grind', 'gripe', 'grips', 'gript', 'groan', 'groin', 
        'groom', 'gross', 'group', 'grout', 'grove', 'growl', 'grown', 'grump', 'grunt', 
        'guard', 'guess', 'guest', 'guide', 'guilt', 'gully', 'gumbo', 'gunny', 'gushy', 
        'gusty', 'guyed', 'gypsy', 'habit', 'hairy', 'halve', 'handy', 'happy', 'hardy', 
        'harsh', 'haste', 'hasty', 'hatch', 'hated', 'hater', 'haunt', 'haven', 'havoc', 
        'hazed', 'hazel', 'heard', 'heart', 'heath', 'heave', 'heavy', 'hedge', 'hefty', 
        'heist', 'hello', 'hence', 'herbs', 'hertz', 'hinge', 'hippo', 'hippy', 'hired', 
        'hitch', 'hoard', 'hobby', 'hocus', 'hoist', 'hokey', 'honda', 'honed', 'honey', 
        'honor', 'hoody', 'hoped', 'horse', 'hotel', 'hound', 'house', 'hover', 'howdy', 
        'huffy', 'human', 'humid', 'humor', 'humus', 'hunch', 'hurry', 'hurst', 'husks', 
        'husky', 'hutch', 'hydra', 'hydro', 'hyena', 'hyped', 'hyper', 'icing', 'ideal', 
        'idiot', 'igloo', 'image', 'imbed', 'imply', 'index', 'inept', 'infer', 'inner', 
        'input', 'intro', 'irate', 'irony', 'issue', 'itchy', 'ivory', 'jaded', 'jello', 
        'jelly', 'jerky', 'jewel', 'jiffy', 'jiggy', 'joins', 'joint', 'joist', 'joker', 
        'jolly', 'joule', 'joust', 'judge', 'juice', 'juicy', 'jumbo', 'jumpy', 'juror', 
        'karma', 'kayak', 'khaki', 'kiosk', 'kitty', 'klutz', 'knack', 'knead', 'kneel', 
        'knife', 'knock', 'known', 'koala', 'kraut', 'kudos', 'label', 'labor', 'laced', 
        'ladle', 'lanky', 'lapel', 'lapse', 'large', 'larva', 'laser', 'latch', 'later', 
        'latex', 'laugh', 'layer', 'layup', 'leach', 'leafy', 'leaky', 'leapt', 'learn', 
        'leary', 'lease', 'leash', 'least', 'leave', 'ledge', 'leech', 'lefty', 'legal', 
        'leger', 'leggy', 'legit', 'lemon', 'lemur', 'lense', 'level', 'lever', 'lexis', 
        'libra', 'licit', 'lifer', 'liger', 'light', 'liked', 'lilac', 'limbo', 'limit', 
        'linen', 'liner', 'lingo', 'liter', 'litre', 'lived', 'liven', 'liver', 'livid', 
        'llama', 'loath', 'lobby', 'local', 'locus', 'lodge', 'lofty', 'logic', 'login', 
        'logon', 'loner', 'loofa', 'loony', 'loopy', 'loose', 'loser', 'lotto', 'lotus', 
        'loved', 'lover', 'lower', 'loyal', 'lucid', 'lucky', 'lumen', 'lumpy', 'lunch', 
        'lunge', 'lurch', 'lured', 'lying', 'lynch', 'lyric', 'maced', 'macro', 'madam', 
        'madly', 'madre', 'mafia', 'magic', 'magma', 'magot', 'major', 'maker', 'mango', 
        'mangy', 'mania', 'manic', 'manly', 'manor', 'maple', 'march', 'match', 'maxed', 
        'maybe', 'mayor', 'meant', 'meaty', 'mecca', 'medal', 'media', 'medic', 'melee', 
        'melon', 'mercy', 'merge', 'merit', 'merry', 'meshy', 'messy', 'metal', 'meter', 
        'metre', 'metro', 'micro', 'midst', 'might', 'milky', 'mimic', 'mince', 'minds', 
        'mined', 'miner', 'minor', 'minty', 'minus', 'mirky', 'mixed', 'mixer', 'mixes', 
        'mixup', 'mocha', 'model', 'modem', 'moist', 'molar', 'moldy', 'money', 'mongo', 
        'monte', 'month', 'mooch', 'moody', 'moose', 'mopey', 'moral', 'moron', 'morph', 
        'morse', 'mossy', 'motel', 'motif', 'motor', 'motto', 'mound', 'mount', 'mourn', 
        'mouse', 'mousy', 'mouth', 'moved', 'mover', 'movie', 'mowed', 'mower', 'mucus', 
        'muddy', 'muggy', 'mulch', 'mummy', 'munch', 'mural', 'murky', 'mushy', 'music', 
        'musty', 'mutch', 'muted', 'myths', 'nacho', 'naive', 'naked', 'named', 'nanny', 
        'narco', 'nasal', 'nasty', 'naval', 'navel', 'needy', 'nerdy', 'nerve', 'never', 
        'newer', 'newly', 'nicer', 'niche', 'niece', 'nifty', 'night', 'ninja', 'ninth', 
        'nippy', 'nitro', 'nitty', 'noble', 'nobly', 'noise', 'noisy', 'nomad', 'noose', 
        'north', 'nosey', 'notch', 'noted', 'nouns', 'novel', 'nudge', 'nuked', 'nurse', 
        'nutty', 'nylon', 'oasis', 'obese', 'occur', 'ocean', 'octal', 'octet', 'offer', 
        'often', 'oiled', 'oiler', 'older', 'olive', 'omega', 'onion', 'onset', 'oozed', 
        'opera', 'optic', 'orbit', 'order', 'organ', 'other', 'otter', 'ounce', 'outer', 
        'overt', 'owned', 'owner', 'oxide', 'ozone', 'paced', 'padle', 'padre', 'pagan', 
        'pager', 'paint', 'palet', 'panda', 'panel', 'panic', 'paper', 'parch', 'paris', 
        'parka', 'parse', 'party', 'pasta', 'paste', 'pasty', 'patch', 'patsy', 'pause', 
        'paved', 'payed', 'payee', 'payer', 'peace', 'peach', 'pearl', 'pecan', 'penny', 
        'perch', 'perky', 'pesky', 'pesto', 'pesty', 'petty', 'phase', 'phone', 'phono', 
        'phony', 'photo', 'piano', 'picky', 'piece', 'piggy', 'piled', 'pilot', 'pinch', 
        'piney', 'pinky', 'pinto', 'pinup', 'pions', 'pitch', 'pitta', 'pivot', 'pixel', 
        'pizza', 'place', 'plack', 'plaid', 'plain', 'plane', 'plank', 'plant', 'plate', 
        'plaza', 'plead', 'pleat', 'plier', 'pluck', 'plumb', 'plush', 'poach', 'poems', 
        'point', 'poise', 'poked', 'poker', 'polar', 'polio', 'polka', 'pooch', 'poofy', 
        'porch', 'porky', 'ports', 'posse', 'potty', 'pouch', 'pound', 'pouty', 'power', 
        'prank', 'press', 'price', 'prick', 'pricy', 'pride', 'pried', 'prier', 'prime', 
        'primo', 'primp', 'print', 'prior', 'prism', 'prize', 'probe', 'promo', 'prone', 
        'prong', 'proof', 'proud', 'prove', 'prowl', 'proxy', 'prude', 'prune', 'pryer',
        'psalm', 'psych', 'puffy', 'pulse', 'punch', 'pupil', 'puppy', 'purge', 'purse', 
        'pushy', 'putty', 'pygmy', 'pyrex', 'quack', 'quail', 'quake', 'qualm', 'quart', 
        'queen', 'query', 'quest', 'quick', 'quiet', 'quilt', 'quirk', 'quite', 'quota', 
        'quote', 'rabid', 'raced', 'racer', 'radar', 'radio', 'raged', 'rainy', 'raise', 
        'raked', 'rally', 'ramen', 'ranch', 'range', 'rapid', 'raspy', 'rated', 'ratio', 
        'raven', 'razor', 'reach', 'react', 'ready', 'realm', 'rebar', 'rebel', 'recap', 
        'recon', 'redux', 'regal', 'reign', 'relax', 'relay', 'relic', 'remit', 'remix', 
        'renew', 'repay', 'repel', 'reply', 'rerun', 'reset', 'retro', 'retry', 'reuse', 
        'revel', 'rhino', 'rhyme', 'rider', 'rides', 'ridge', 'rifle', 'right', 'rigid', 
        'rigor', 'riled', 'rinse', 'riots', 'ripen', 'risen', 'riser', 'rises', 'risky', 
        'rival', 'river', 'rivet', 'roach', 'roads', 'roams', 'roars', 'roast', 'robes',
        'robot', 'rocky', 'rodeo', 'rogue', 'roman', 'romeo', 'rooky', 'roomy', 'rooty', 
        'roped', 'roper', 'rotor', 'rough', 'round', 'rouse', 'route', 'rover', 'rowdy', 
        'royal', 'ruble', 'rugby', 'ruins', 'ruled', 'ruler', 'rules', 'rummy', 'rumor', 
        'runny', 'rural', 'rusty', 'saber', 'sable', 'sadly', 'safer', 'saggy', 'saint', 
        'salad', 'salon', 'salsa', 'salty', 'salve', 'samba', 'sarge', 'satin', 'satyr', 
        'sauce', 'saucy', 'sauna', 'saute', 'saved', 'savoy', 'savvy', 'scald', 'scale', 
        'scalp', 'scare', 'scarf', 'scary', 'scene', 'scent', 'scion', 'scoff', 'scold', 
        'scone', 'scoop', 'scoot', 'scope', 'score', 'scorn', 'scour', 'scout', 'scram', 
        'scrap', 'screw', 'scrub', 'scuba', 'scuff', 'sculp', 'sedan', 'seize', 'senor', 
        'sense', 'serum', 'serve', 'setup', 'seven', 'sewer', 'shack', 'shade', 'shady', 
        'shaft', 'shake', 'shaky', 'shall', 'shame', 'shank', 'shape', 'share', 'shark', 
        'sharp', 'shave', 'sheep', 'sheet', 'shelf', 'shell', 'shift', 'shine', 'shiny', 
        'shirt', 'shock', 'shook', 'shoot', 'shore', 'short', 'shout', 'shove', 'shown', 
        'shred', 'shrew', 'shrub', 'shrug', 'shush', 'shute', 'sided', 'siege', 'sight', 
        'sigil', 'sigma', 'signa', 'signs', 'silky', 'silly', 'since', 'sinus', 'siren', 
        'situp', 'sixth', 'sixty', 'sized', 'sizer', 'skate', 'skier', 'skies', 'skill', 
        'skirt', 'skull', 'skunk', 'slack', 'slant', 'slash', 'slate', 'slave', 'sleek', 
        'sleep', 'sleet', 'slept', 'slice', 'slick', 'slide', 'slime', 'slimy', 'sling', 
        'slipt', 'slope', 'slosh', 'sloth', 'slump', 'slurp', 'slush', 'smack', 'small', 
        'smart', 'smash', 'smear', 'smell', 'smile', 'smirk', 'smite', 'smoke', 'smoky', 
        'smush', 'snack', 'snail', 'snake', 'snare', 'snarl', 'sneak', 'snipe', 'snoop', 
        'snore', 'snort', 'snout', 'snowy', 'snuck', 'soapy', 'soggy', 'solar', 'solid', 
        'solve', 'sonar', 'sonic', 'sooth', 'sorry', 'sound', 'south', 'space', 'spacy', 
        'spade', 'spaed', 'spank', 'spare', 'spark', 'spasm', 'spawn', 'spazz', 'speak', 
        'spear', 'speed', 'spell', 'spend', 'spent', 'spice', 'spicy', 'spied', 'spike', 
        'spill', 'spilt', 'spine', 'spite', 'splat', 'split', 'spoil', 'spoke', 'spoof', 
        'spook', 'spool', 'spoon', 'spore', 'sport', 'spout', 'spray', 'spree', 'spued', 
        'spunk', 'spurt', 'squab', 'squad', 'squat', 'squaw', 'squib', 'squid', 'stack', 
        'staff', 'stage', 'stain', 'stair', 'stake', 'stale', 'stalk', 'stall', 'stamp', 
        'stand', 'stare', 'start', 'stash', 'state', 'steak', 'steal', 'steam', 'steel', 
        'steep', 'steer', 'stein', 'stern', 'stich', 'stick', 'stiff', 'still', 'stilt', 
        'sting', 'stink', 'stock', 'stoke', 'stole', 'stomp', 'stone', 'stony', 'stood', 
        'stool', 'stoop', 'stopt', 'store', 'stork', 'storm', 'story', 'stout', 'stove', 
        'strap', 'straw', 'stray', 'strep', 'strip', 'strum', 'strut', 'stuck', 'study', 
        'stuff', 'stump', 'stung', 'stunk', 'stunt', 'style', 'suave', 'suede', 'sugar', 
        'suite', 'sulky', 'sunny', 'super', 'supra', 'surge', 'surly', 'sushi', 'swamp', 
        'swarm', 'sways', 'swear', 'sweat', 'sweep', 'sweet', 'swell', 'swept', 'swift', 
        'swing', 'swipe', 'swirl', 'swish', 'swiss', 'swoop', 'sword', 'swore', 'sworn', 
        'swung', 'synch', 'syrup', 'table', 'taboo', 'tacky', 'tacos', 'taffy', 'taken', 
        'taker', 'tally', 'talon', 'tango', 'taped', 'tardy', 'tarot', 'taste', 'tasty', 
        'taunt', 'taxed', 'teach', 'teary', 'tease', 'techy', 'teddy', 'teeny', 'teeth', 
        'telco', 'tempo', 'tempt', 'tense', 'tenth', 'tepee', 'testy', 'texas', 'thank', 
        'theft', 'their', 'theme', 'there', 'these', 'thick', 'thief', 'thigh', 'thing', 
        'think', 'third', 'thorn', 'those', 'three', 'threw', 'throb', 'throw', 'thumb', 
        'thump', 'tiara', 'tibia', 'tidal', 'tiger', 'tight', 'tiled', 'timed', 'timer', 
        'timid', 'tired', 'titan', 'title', 'toast', 'today', 'toile', 'token', 'toned', 
        'toner', 'tonic', 'tooth', 'topic', 'torch', 'torso', 'total', 'totem', 'touch', 
        'tough', 'towel', 'tower', 'towny', 'toxic', 'toxin', 'trace', 'track', 'tract', 
        'trade', 'trail', 'train', 'trait', 'trapt', 'trash', 'tread', 'treat', 'trend', 
        'trial', 'tribe', 'trick', 'tried', 'trike', 'troll', 'troop', 'truce', 'truck', 
        'truly', 'trunk', 'trust', 'truth', 'tulip', 'tumor', 'tuned', 'tuner', 'turbo', 
        'tushy', 'tusks', 'tutor', 'tweak', 'tweet', 'twice', 'twirl', 'twist', 'tying', 
        'typed', 'typos', 'tythe', 'ulcer', 'ultra', 'unarm', 'unbox', 'uncle', 'uncut', 
        'under', 'unfit', 'unify', 'union', 'unite', 'unity', 'untie', 'until', 'unzip', 
        'upped', 'upper', 'upset', 'urban', 'urged', 'urges', 'urine', 'usage', 'usher', 
        'using', 'usual', 'utile', 'utter', 'vague', 'valet', 'valid', 'valor', 'value', 
        'valve', 'vapor', 'vault', 'vegan', 'vegie', 'veiny', 'venom', 'venue', 'venus', 
        'verge', 'verse', 'verve', 'video', 'vigil', 'vinyl', 'viper', 'viral', 'virus', 
        'visit', 'visor', 'vista', 'vital', 'vivid', 'vixen', 'vocab', 'vocal', 'vogue', 
        'voice', 'voila', 'volts', 'vomit', 'voted', 'voter', 'votes', 'vouch', 'vowed', 
        'vowel', 'wacko', 'wacky', 'wafer', 'waged', 'wager', 'wages', 'wagon', 'waist', 
        'waits', 'waive', 'walks', 'waltz', 'washy', 'waste', 'watch', 'water', 'watts', 
        'waved', 'waxed', 'weary', 'weave', 'wedge', 'wedgy', 'weigh', 'weird', 'welch', 
        'welsh', 'wench', 'whack', 'whale', 'wheat', 'wheel', 'wheep', 'where', 'which', 
        'while', 'whine', 'whiny', 'whipt', 'whirl', 'whisk', 'white', 'whole', 'whoop', 
        'whose', 'widen', 'wider', 'widow', 'width', 'wield', 'wimpy', 'windy', 'wiped', 
        'wiper', 'wired', 'witch', 'witty', 'woman', 'women', 'woody', 'woosh', 'woozy', 
        'world', 'worry', 'worse', 'worst', 'worth', 'would', 'wound', 'woven', 'wrapt', 
        'wrath', 'wreak', 'wreck', 'wring', 'wrist', 'write', 'wrong', 'wrote', 'xenon', 
        'xerox', 'yacht', 'yahoo', 'yearn', 'years', 'yeast', 'yield', 'yodle', 'yokel', 
        'young', 'youth', 'yummy', 'zebra', 'zesty', 'zingy', 'zoned', 'zooms', 
        
        // 6 LETTER WORDS (2084 words)
        'abduct', 'ablaze', 'aboard', 'abroad', 'abrupt', 'absent', 'absorb', 
        'absurd', 'abused', 'acacia', 'accent', 'accept', 'access', 'accord', 
        'accost', 'accrue', 'accuse', 'acetic', 'aching', 'acidic', 'acquit', 
        'across', 'acting', 'action', 'active', 'actors', 'actual', 'acuate', 
        'acuity', 'adages', 'addict', 'adding', 'adhere', 'adjoin', 'adjure', 
        'adjust', 'admire', 'admits', 'adored', 'adrift', 'adsorb', 'advent', 
        'adverb', 'advert', 'advice', 'advise', 'aerate', 'aerial', 'affair', 
        'affect', 'affirm', 'afford', 'afloat', 'afraid', 'agapae', 'ageing', 
        'ageism', 'agency', 'agenda', 'agents', 'agreed', 'aikido', 'aiming', 
        'airbag', 'airmen', 'airway', 'akimbo', 'alaska', 'albeit', 'albino', 
        'albite', 'albums', 'aliens', 'aligns', 'alkali', 'allied', 'allies', 
        'allure', 'almond', 'almost', 'alpaca', 'alpine', 'alumni', 'always', 
        'amazed', 'amazon', 'ambush', 'amidst', 'ammino', 'amount', 'ampule', 
        'amulet', 'amused', 'analog', 'anchor', 'anemia', 'anemic', 'angled', 
        'angles', 'animal', 'annual', 'answer', 'anthem', 'antics', 'antler', 
        'anyhow', 'anyone', 'anyway', 'aortal', 'aortic', 'apache', 'apathy', 
        'apiece', 'apollo', 'appeal', 'appear', 'append', 'apples', 'applet', 
        'arabic', 'arbour', 'arcade', 'arcane', 'arched', 'archer', 'arctic', 
        'argued', 'armada', 'arming', 'armory', 'armour', 'armpit', 'around', 
        'arrays', 'arrest', 'arrive', 'artery', 'artist', 'ascend', 'ascent', 
        'ashore', 'asking', 'asleep', 'aspect', 'aspire', 'assert', 'assess', 
        'assets', 'assign', 'assist', 'assort', 'assume', 'assure', 'asthma', 
        'astray', 'asylum', 'atomic', 'atoned', 'atrium', 'attach', 'attack', 
        'attain', 'attend', 'attest', 'attics', 'attire', 'auburn', 'august', 
        'aurora', 'author', 'autism', 'autumn', 'avatar', 'avenge', 'avenue', 
        'aviary', 'aviate', 'avidly', 'awaken', 'awakes', 'awards', 'awhile', 
        'awning', 'awoken', 'babble', 'babied', 'babies', 'baboon', 'backup', 
        'badger', 'baffle', 'bagged', 'bailed', 'bakery', 'baking', 'ballad', 
        'baller', 'ballet', 'ballot', 'bamboo', 'banana', 'bandit', 'banish', 
        'banker', 'banner', 'banter', 'banzai', 'barber', 'barbie', 'barely', 
        'barged', 'barley', 'barrel', 'barter', 'bashed', 'basket', 'basque', 
        'basset', 'bathed', 'bathes', 'batman', 'batter', 'battle', 'bazaar', 
        'beacon', 'beagle', 'beaker', 'beanie', 'beaten', 'beauty', 'beaver', 
        'became', 'become', 'beeper', 'beetle', 'before', 'begone', 'behalf', 
        'behave', 'behead', 'behind', 'behold', 'belief', 'belong', 'benign', 
        'berlin', 'beside', 'bestow', 'betray', 'better', 'beware', 'beyond', 
        'bifold', 'bigger', 'bikini', 'binary', 'bionic', 'biopsy', 'birdie', 
        'bishop', 'bisque', 'bistro', 'bitten', 'blazer', 'bleach', 'blonde', 
        'bloody', 'blouse', 'blower', 'blurry', 'bobble', 'boggle', 'boiled', 
        'boiler', 'bolder', 'boldly', 'bolted', 'bombed', 'bomber', 'bonded', 
        'bonier', 'bonsai', 'booboo', 'booger', 'boogey', 'boogie', 'boohoo', 
        'booked', 'boosts', 'border', 'boring', 'borrow', 'boston', 'botany', 
        'bother', 'bottle', 'bottom', 'bought', 'bounce', 'bouncy', 'bounty', 
        'bourne', 'bowels', 'bowler', 'boxcar', 'boxing', 'brahma', 'brainy', 
        'branch', 'brawny', 'breach', 'breast', 'breath', 'breeze', 'breezy', 
        'bridal', 'bridge', 'bridle', 'bright', 'brillo', 'broken', 'broker', 
        'bronco', 'bronze', 'browny', 'browse', 'bruise', 'brunch', 'brutal', 
        'bubble', 'bubbly', 'bucket', 'buckle', 'buddha', 'budges', 'budget', 
        'buffer', 'buffet', 'bugeye', 'bullet', 'bummer', 'bumped', 'bumper', 
        'bundle', 'bungee', 'burger', 'buried', 'burlap', 'burned', 'burner', 
        'burrow', 'bushel', 'bushes', 'busted', 'butane', 'butler', 'butter', 
        'button', 'buzzer', 'bypass', 'cabana', 'cactus', 'caesar', 'caller', 
        'calory', 'camera', 'camper', 'canary', 'cancel', 'candid', 'candle', 
        'canine', 'cannon', 'cannot', 'canola', 'canopy', 'canvas', 'canyon', 
        'captan', 'carbon', 'cardio', 'career', 'carhop', 'caried', 'carpet', 
        'carrot', 'carton', 'cashew', 'casino', 'castle', 'casual', 'catchy', 
        'catnap', 'cattle', 'caught', 'cavern', 'caviar', 'cavity', 'celery', 
        'cellar', 'cement', 'censor', 'census', 'center', 'cereal', 'chalet', 
        'chance', 'change', 'chapel', 'charge', 'chased', 'cheese', 'cheesy', 
        'cherry', 'chetah', 'chilly', 'chisel', 'choice', 'choose', 'choppy', 
        'chorus', 'chosen', 'chrome', 'church', 'cinder', 'cinema', 'cipher', 
        'circle', 'circus', 'cities', 'citrus', 'classy', 'clause', 'clergy', 
        'cliche', 'client', 'clinch', 'clingy', 'clinic', 'cloned', 'closed', 
        'closer', 'closet', 'cloudy', 'clover', 'clowns', 'clumpy', 'clumsy', 
        'clutch', 'coarse', 'coasts', 'coated', 'coaxal', 'cobalt', 'cobweb', 
        'cocoon', 'coding', 'coffee', 'cohort', 'cohost', 'coiled', 'coined', 
        'colder', 'collar', 'colony', 'colour', 'column', 'combat', 'comedy', 
        'coming', 'commit', 'common', 'comply', 'concur', 'condor', 'confer', 
        'convey', 'convoy', 'cookie', 'cooler', 'copied', 'copier', 'copout', 
        'copper', 'cornea', 'corner', 'corral', 'corset', 'corvet', 'cosign', 
        'cosmic', 'costly', 'cotton', 'cougar', 'county', 'couple', 'coupon', 
        'course', 'cousin', 'covert', 'coward', 'cowboy', 'coyote', 'cozier', 
        'crabby', 'cradle', 'crafty', 'crayon', 'creamy', 'crease', 'create', 
        'credit', 'creepy', 'crisis', 'crispy', 'critic', 'crouch', 'crowdy', 
        'cruise', 'crunch', 'crusty', 'crutch', 'crying', 'crypto', 'cuddle', 
        'cuddly', 'curate', 'curfew', 'cursed', 'cursor', 'custom', 'cutest', 
        'cutlet', 'cyborg', 'cypher', 'cyprus', 'dabble', 'dagger', 'damage', 
        'damper', 'dancer', 'danger', 'dangle', 'danish', 'daring', 'darken', 
        'darker', 'dating', 'dazzle', 'deadly', 'dealer', 'dearly', 'debate', 
        'debone', 'decade', 'deceit', 'decent', 'decide', 'decker', 'decode', 
        'decree', 'deduct', 'deepen', 'deeper', 'deeply', 'deface', 'defeat', 
        'defect', 'defend', 'define', 'deform', 'defrag', 'defuse', 'degree', 
        'delete', 'deluxe', 'demand', 'demise', 'demote', 'denial', 'denied', 
        'denote', 'dental', 'depart', 'depend', 'depict', 'deploy', 'deport', 
        'deputy', 'derail', 'derive', 'desert', 'design', 'desire', 'detach', 
        'detail', 'detain', 'detect', 'detour', 'device', 'devise', 'devour', 
        'dialed', 'dialog', 'diaper', 'diesel', 'differ', 'digest', 'dilute', 
        'dimple', 'dinner', 'direct', 'disarm', 'dishes', 'dismal', 'dismay', 
        'divert', 'divide', 'divine', 'diving', 'docile', 'docket', 'doctor', 
        'dodger', 'dollar', 'domain', 'domino', 'donate', 'donkey', 'doodle', 
        'doomed', 'dosage', 'double', 'downer', 'dragon', 'drawer', 'dreamt', 
        'dreamy', 'drench', 'driven', 'driver', 'droopy', 'drowsy', 'drying', 
        'dually', 'duffel', 'dugout', 'dumber', 'dumped', 'duplex', 'during', 
        'duster', 'duties', 'eagles', 'earbud', 'earned', 'earthy', 'earwax', 
        'easier', 'easily', 'easter', 'eatery', 'eating', 'edible', 'edited', 
        'editor', 'effect', 'effort', 'eggnog', 'eighth', 'eighty', 'either', 
        'elapse', 'eldest', 'eleven', 'elevon', 'elicit', 'elixir', 'embalm', 
        'embark', 'emblem', 'embody', 'emerge', 'empire', 'employ', 'enable', 
        'enamel', 'encase', 'encore', 'ending', 'endure', 'energy', 'engage', 
        'engine', 'enigma', 'enlist', 'enough', 'enrich', 'enroll', 'enroot', 
        'ensure', 'entail', 'entice', 'entire', 'entity', 'entrap', 'entree', 
        'envied', 'enzyme', 'equate', 'equity', 'erased', 'eraser', 'errand', 
        'escape', 'escort', 'escrow', 'estate', 'esteem', 'ethnic', 'eureka', 
        'evenly', 'evolve', 'exceed', 'except', 'excess', 'excite', 'excuse', 
        'exempt', 'exhale', 'exhume', 'exiled', 'exists', 'exited', 'exotic', 
        'expand', 'expect', 'expert', 'expire', 'export', 'expose', 'extend', 
        'extent', 'extort', 'eyelid', 'fabric', 'facial', 'facing', 'factor', 
        'failed', 'fairly', 'fajita', 'falcon', 'fallen', 'family', 'famous', 
        'farmer', 'fasten', 'faster', 'father', 'fathom', 'faucet', 'faulty', 
        'fedora', 'feeble', 'feeder', 'feisty', 'fellow', 'felony', 'female', 
        'fewest', 'fiance', 'fiasco', 'fibula', 'fickle', 'fiddle', 'fierce', 
        'fiesta', 'figure', 'filing', 'filled', 'filler', 'fillet', 'filter', 
        'filthy', 'finale', 'finely', 'finery', 'finest', 'finger', 'finish', 
        'finite', 'firmly', 'fixate', 'flange', 'flashy', 'flavor', 'fleece', 
        'flight', 'flinch', 'floral', 'flower', 'fluent', 'fluffy', 'follow', 
        'fooled', 'footer', 'forage', 'forbid', 'forced', 'forest', 'forger', 
        'forget', 'forgot', 'formal', 'format', 'former', 'fossil', 'foster', 
        'fought', 'fourth', 'freaky', 'freeze', 'french', 'frenzy', 'fridge', 
        'friend', 'fright', 'frigid', 'fringe', 'frisky', 'froggy', 'frolic', 
        'frosty', 'frozen', 'frugal', 'fruity', 'fumble', 'fungus', 'funnel', 
        'fusion', 'fussed', 'futile', 'future', 'gadget', 'galaxy', 'gallon', 
        'gallop', 'galore', 'gamble', 'gander', 'garage', 'garden', 'gargle', 
        'garlic', 'garter', 'gasket', 'gather', 'gazebo', 'gender', 'gentle', 
        'gently', 'ghetto', 'giggle', 'gingko', 'girdle', 'giving', 'glamor', 
        'glitch', 'global', 'gloomy', 'glossy', 'gluten', 'gnarly', 'goalie', 
        'goatee', 'goblet', 'golden', 'golfer', 'gospel', 'gossip', 'gotcha', 
        'gothic', 'gotten', 'govern', 'graham', 'grassy', 'gravel', 'grease', 
        'greasy', 'greedy', 'grinch', 'gritty', 'grocer', 'groove', 'groovy', 
        'ground', 'growth', 'grudge', 'grumpy', 'guilty', 'guinea', 'guitar', 
        'gulley', 'gurney', 'gutter', 'hacker', 'haggle', 'hamlet', 'hammer', 
        'hamper', 'handle', 'hangup', 'hansom', 'happen', 'harbor', 'harder', 
        'hardly', 'hatred', 'having', 'hazard', 'hazmat', 'header', 'healed', 
        'health', 'hearty', 'heater', 'heaven', 'hectic', 'height', 'helium', 
        'helmet', 'helper', 'herbal', 'hermit', 'hernia', 'heroic', 'hiccup', 
        'hidden', 'hiding', 'higher', 'highly', 'hijack', 'hiking', 'hinder', 
        'hobbit', 'hobble', 'hockey', 'holler', 'hollow', 'honest', 'hornet', 
        'horrid', 'horror', 'hotdog', 'hotrod', 'hourly', 'humble', 'humour', 
        'humvee', 'hunger', 'hungry', 'hunted', 'hunter', 'hurdle', 'hustle', 
        'hybrid', 'hyphen', 'icebox', 'icicle', 'iciest', 'iconic', 'idiocy', 
        'ignite', 'ignore', 'iguana', 'illude', 'immune', 'impact', 'impair', 
        'impala', 'impede', 'import', 'impose', 'improv', 'incent', 'income', 
        'indeed', 'indent', 'indict', 'indigo', 'indoor', 'induce', 'induct', 
        'infamy', 'infant', 'infect', 'influx', 'inform', 'ingest', 'inhale', 
        'inject', 'injure', 'injury', 'inkjet', 'inland', 'inmate', 'insane', 
        'inseam', 'insect', 'insert', 'inside', 'insist', 'insole', 'instep', 
        'instil', 'insult', 'insure', 'intact', 'intake', 'intend', 'intent', 
        'intern', 'intuit', 'invade', 'invent', 'invert', 'invest', 'invite', 
        'invoke', 'inward', 'iodine', 'ironic', 'island', 'issued', 'italic', 
        'itself', 'jacked', 'jacket', 'jagged', 'jaguar', 'jailer', 'jargon', 
        'jersey', 'jetlag', 'jewels', 'jiggle', 'jiggly', 'jigsaw', 'jiminy', 
        'jingle', 'jinxed', 'jitter', 'jockey', 'jogger', 'joined', 'joking', 
        'jotted', 'joyful', 'joyous', 'judged', 'juggle', 'juiced', 'jumble', 
        'jumped', 'jumper', 'junior', 'karate', 'keeper', 'kennel', 'kernel', 
        'kettle', 'keypad', 'keyset', 'kidnap', 'kidney', 'killer', 'kissed', 
        'kitten', 'klepto', 'knight', 'kwanza', 'ladder', 'lagoon', 'laguna', 
        'lambda', 'landed', 'laptop', 'larger', 'lately', 'latest', 'lather', 
        'latino', 'launch', 'lawyer', 'layoff', 'layout', 'leader', 'league', 
        'legacy', 'legend', 'legion', 'length', 'lesson', 'lethal', 'letter', 
        'liable', 'likely', 'limber', 'linear', 'lineup', 'linger', 'liquid', 
        'liquor', 'listen', 'litter', 'little', 'living', 'lizard', 'loaded', 
        'loaner', 'loathe', 'locale', 'locate', 'locker', 'locket', 'lockup', 
        'loiter', 'lonely', 'lookup', 'looney', 'loosen', 'losing', 'lotion', 
        'louder', 'loudly', 'lounge', 'lovely', 'loving', 'lowest', 'lumbar', 
        'lumber', 'lunacy', 'luxury', 'maffia', 'maggot', 'magnet', 'magnum', 
        'maiden', 'mainly', 'makeup', 'making', 'mallet', 'mammal', 'mangle', 
        'maniac', 'manila', 'manner', 'mantel', 'mantra', 'manual', 'marble', 
        'margin', 'marina', 'marine', 'marker', 'market', 'markup', 'maroon', 
        'marque', 'marrow', 'martyr', 'marvel', 'mascot', 'mashed', 'masque', 
        'master', 'matrix', 'mature', 'mayday', 'mayhem', 'meadow', 'measly', 
        'medial', 'median', 'medium', 'medley', 'medusa', 'mellow', 'melody', 
        'melted', 'memoir', 'memory', 'menace', 'menial', 'mental', 'mentor', 
        'merger', 'meteor', 'method', 'metric', 'middle', 'midway', 'mighty', 
        'mildew', 'mingle', 'minion', 'minute', 'mirage', 'mirror', 'misery', 
        'misfit', 'mister', 'mitten', 'mobile', 'mockup', 'modern', 'modest', 
        'modify', 'module', 'modulo', 'mohawk', 'molten', 'moment', 'monkey', 
        'morale', 'morbid', 'mortal', 'mortar', 'mosaic', 'mostly', 'mother', 
        'motion', 'motive', 'moving', 'muffin', 'muffle', 'mullet', 'mumble', 
        'murder', 'muscle', 'museum', 'musket', 'mutant', 'mutate', 'mutiny', 
        'mutual', 'muzzle', 'myopic', 'myriad', 'myrtle', 'myself', 'mystic', 
        'nachos', 'nailed', 'nailer', 'namely', 'naming', 'napkin', 'narrow', 
        'nation', 'native', 'nausea', 'naysay', 'nearby', 'nearly', 'nectar', 
        'needed', 'needle', 'negate', 'nephew', 'nerves', 'nested', 'nestle', 
        'nether', 'neural', 'neuron', 'neuter', 'newbie', 'newest', 'newton', 
        'nicely', 'nicest', 'nickel', 'nimble', 'ninety', 'nipple', 'nobody', 
        'noises', 'nonfat', 'noodle', 'noogie', 'nordic', 'normal', 'notary', 
        'notate', 'notice', 'notify', 'notion', 'novice', 'nozzle', 'nugget', 
        'number', 'nursed', 'nutmeg', 'object', 'oblige', 'oblong', 'obsess', 
        'obtain', 'obtuse', 'occult', 'occupy', 'octane', 'octave', 'ocular', 
        'oculus', 'oddity', 'offend', 'office', 'offset', 'oldest', 'omelet', 
        'online', 'onward', 'oozing', 'opened', 'opener', 'openly', 'oppose', 
        'option', 'oracle', 'orange', 'orchid', 'ordain', 'ordeal', 'orient', 
        'origan', 'origin', 'orphan', 'outfit', 'outing', 'outlaw', 'outlet', 
        'output', 'outrun', 'oxford', 'oxygen', 'oyster', 'pacify', 'packed', 
        'packet', 'paddle', 'paired', 'pajama', 'palace', 'pallet', 'panama', 
        'panini', 'pantry', 'parade', 'pardon', 'parent', 'parish', 'parlor', 
        'parody', 'parole', 'parrot', 'partly', 'pastel', 'pastor', 'pastry', 
        'patent', 'patrol', 'patron', 'payday', 'payoff', 'payout', 'peanut', 
        'pebble', 'peddle', 'peewee', 'pellet', 'pelvic', 'pelvis', 'pencil', 
        'people', 'period', 'perish', 'permit', 'petite', 'pettle', 'phobia', 
        'photon', 'phrase', 'pickle', 'pickup', 'picnic', 'pierce', 'pigeon', 
        'pileup', 'pillar', 'pillow', 'pimple', 'piolet', 'piracy', 'pirana', 
        'pirate', 'pistol', 'piston', 'plague', 'planet', 'plaque', 'plasma', 
        'player', 'please', 'pledge', 'plenty', 'plenum', 'plunge', 'plural', 
        'pocket', 'podium', 'poetic', 'poetry', 'pointy', 'poison', 'police', 
        'policy', 'polish', 'polite', 'pollen', 'ponder', 'poodle', 'poorly', 
        'portal', 'possum', 'postal', 'poster', 'potato', 'potent', 'potion', 
        'pounce', 'powder', 'praise', 'prayer', 'preach', 'prefix', 'pretty', 
        'priest', 'primer', 'prince', 'prison', 'profit', 'prompt', 'propel', 
        'proper', 'proton', 'proven', 'pseudo', 'psyche', 'psycho', 'public', 
        'puddle', 'pueblo', 'pulley', 'punish', 'puppet', 'purify', 'purity', 
        'purple', 'pursue', 'putter', 'puzzle', 'python', 'quaint', 'quaker', 
        'quarry', 'quartz', 'quench', 'quests', 'queued', 'quirks', 'quirky', 
        'quiver', 'quotes', 'rabbit', 'racing', 'racket', 'racoon', 'radial', 
        'radius', 'raffle', 'raider', 'raisin', 'ramble', 'rancid', 'random', 
        'ranger', 'ransom', 'raptor', 'rarity', 'rascal', 'rather', 'rating', 
        'ration', 'rattle', 'ravish', 'reader', 'really', 'realty', 'reaper', 
        'reason', 'rebate', 'reboot', 'reborn', 'recall', 'recede', 'recent', 
        'recess', 'recipe', 'recite', 'recoil', 'record', 'redact', 'redeem', 
        'redeye', 'redial', 'reduce', 'refill', 'refine', 'reflex', 'reflux', 
        'reform', 'refuel', 'refuge', 'refund', 'refuse', 'regain', 'regard', 
        'reggae', 'region', 'regret', 'rehire', 'reject', 'relate', 'relief', 
        'relish', 'reload', 'remain', 'remake', 'remark', 'remedy', 'remind', 
        'remote', 'remove', 'rename', 'render', 'renown', 'rental', 'repack', 
        'repaid', 'repair', 'repeal', 'repeat', 'repent', 'replay', 'report', 
        'resale', 'rescue', 'reside', 'resist', 'resite', 'resize', 'resort', 
        'result', 'resume', 'retail', 'retain', 'retina', 'retire', 'return', 
        'reveal', 'revere', 'review', 'revise', 'revive', 'revoke', 'revolt', 
        'reward', 'rewind', 'rhythm', 'ribbon', 'riddle', 'ridged', 'righty', 
        'rigour', 'ripoff', 'ripple', 'ritual', 'robbin', 'robust', 'rocker', 
        'rocket', 'rodent', 'roller', 'rookie', 'roster', 'rotary', 'rotten', 
        'router', 'rubber', 'rubble', 'rudely', 'rumble', 'sacred', 'saddle', 
        'sadist', 'safari', 'safely', 'safest', 'safety', 'sailor', 'salami', 
        'salary', 'saline', 'saliva', 'salmon', 'saloon', 'salute', 'sample', 
        'sandal', 'sanity', 'satire', 'saucer', 'savage', 'savior', 'savory', 
        'scarce', 'scenic', 'scheme', 'school', 'scorch', 'scored', 'scotch', 
        'scrape', 'scream', 'scribe', 'script', 'scroll', 'sculpt', 'scythe', 
        'search', 'season', 'second', 'secret', 'sector', 'secure', 'sedate', 
        'seeker', 'seized', 'seldom', 'select', 'senate', 'senior', 'sensor', 
        'sentry', 'septic', 'septum', 'sequel', 'serial', 'server', 'settle', 
        'severe', 'sewage', 'shadow', 'shaken', 'shapen', 'shared', 'sharpy', 
        'sherif', 'shield', 'shifty', 'shimmy', 'shorty', 'should', 'shovel', 
        'shower', 'shrimp', 'shrine', 'shrink', 'sierra', 'signal', 'signed', 
        'silent', 'silver', 'simple', 'simply', 'sinful', 'single', 'sinner', 
        'siphon', 'sister', 'sitter', 'sizzle', 'skater', 'sketch', 'skinny', 
        'skylit', 'slayer', 'sledge', 'sleepy', 'sleeve', 'sleigh', 'slider', 
        'slight', 'slinky', 'slogan', 'sloppy', 'smelly', 'smiley', 'smoked', 
        'smoker', 'smokey', 'smooth', 'snatch', 'sneaky', 'sneeze', 'sniper', 
        'snitch', 'snoopy', 'snooze', 'soccer', 'social', 'socket', 'sodium', 
        'soften', 'softer', 'softly', 'solace', 'solely', 'solute', 'soothe', 
        'sorrow', 'sought', 'soviet', 'spacer', 'speech', 'speedy', 'sphere', 
        'spicey', 'spider', 'spinal', 'spiral', 'spirit', 'splash', 'spleen', 
        'splice', 'spoken', 'sponge', 'spooky', 'sporty', 'spouse', 'sprawl', 
        'spread', 'spring', 'sprint', 'sprite', 'sprout', 'spruce', 'square', 
        'squash', 'squawk', 'squeak', 'squeal', 'squint', 'squirm', 'squirt', 
        'squish', 'stable', 'stance', 'staple', 'starch', 'starve', 'static', 
        'statue', 'status', 'steady', 'steamy', 'stereo', 'sticky', 'stigma', 
        'stinky', 'stitch', 'stolen', 'stormy', 'strain', 'strait', 'strand', 
        'streak', 'stream', 'street', 'stress', 'strict', 'stride', 'strike', 
        'string', 'stripe', 'strive', 'strobe', 'stroke', 'stroll', 'strong', 
        'struck', 'studio', 'stupid', 'sturdy', 'stylus', 'sublet', 'submit', 
        'subtle', 'suburb', 'subway', 'sudden', 'suffer', 'suffix', 'sulfur', 
        'summer', 'summit', 'summon', 'sundae', 'sunken', 'sunset', 'superb', 
        'supper', 'supple', 'supply', 'surfer', 'survey', 'sweaty', 'swerve', 
        'switch', 'swivel', 'symbol', 'syntax', 'syphon', 'system', 'tablet', 
        'tackle', 'tactic', 'tailor', 'tangle', 'target', 'tarzan', 'tattoo', 
        'taught', 'tavern', 'teapot', 'teaser', 'techno', 'temper', 'temple', 
        'tenant', 'tender', 'tendon', 'tennis', 'terror', 'tetris', 'theory', 
        'thirst', 'thirty', 'though', 'thrash', 'thread', 'threat', 'thrice', 
        'thrift', 'thrill', 'thrive', 'throat', 'throne', 'thrown', 'thrust', 
        'ticker', 'ticket', 'tickle', 'tictac', 'tictoc', 'tidbit', 'timber', 
        'tingle', 'tinker', 'tissue', 'toasty', 'toggle', 'toilet', 'tomato', 
        'tongue', 'tonsil', 'topple', 'torque', 'touche', 'toupee', 'tragic', 
        'travel', 'tremor', 'trench', 'tribal', 'tricep', 'tricky', 'triple', 
        'tripod', 'trivia', 'trolly', 'trophy', 'tropic', 'trying', 'tryout', 
        'tumble', 'tunnel', 'turkey', 'turnip', 'turtle', 'tuxedo', 'twelve', 
        'twenty', 'twitch', 'tycoon', 'tyrant', 'umpire', 'unbolt', 'unborn', 
        'undead', 'undone', 'uneasy', 'uneven', 'unfold', 'unholy', 'unique', 
        'unison', 'united', 'unjust', 'unkind', 'unless', 'unlike', 'unload', 
        'unlock', 'unopen', 'unpack', 'unpaid', 'unplug', 'unreal', 'unsafe', 
        'unsure', 'untied', 'untuck', 'unwrap', 'upbeat', 'update', 'upheld', 
        'uphill', 'uphold', 'upkeep', 'uplift', 'uplink', 'upload', 'uprise', 
        'uproar', 'upside', 'upward', 'urgent', 'urging', 'urinal', 'useful', 
        'utopia', 'vacant', 'vacate', 'vacuum', 'valley', 'valued', 'vanish', 
        'vanity', 'varied', 'vastly', 'vector', 'veggie', 'velcro', 'velvet', 
        'vendor', 'veneer', 'verbal', 'verify', 'versus', 'vessel', 'vetoed', 
        'viable', 'viably', 'victim', 'victor', 'viewed', 'viking', 'violet', 
        'violin', 'virtue', 'vision', 'visual', 'volume', 'vortex', 'voting', 
        'voyage', 'vulgar', 'wabble', 'wabbly', 'waffle', 'waited', 'waiter', 
        'waived', 'walker', 'wallet', 'walnut', 'walrus', 'wander', 'wanted', 
        'warden', 'warmer', 'warmth', 'warmup', 'warped', 'washed', 'washer', 
        'wasted', 'wastes', 'watery', 'weaken', 'wealth', 'weapon', 'weasel', 
        'webcam', 'wedged', 'weekly', 'weight', 'weirdo', 'wether', 'whacky', 
        'wheeze', 'wheezy', 'wicked', 'wicker', 'widely', 'widest', 'widget', 
        'wilder', 'wildly', 'willow', 'window', 'winner', 'winter', 'wiring', 
        'wisdom', 'wisely', 'within', 'wizard', 'wolves', 'wonder', 'wooden', 
        'worker', 'worsen', 'worthy', 'wraith', 'wreath', 'wrench', 'wright', 
        'writer', 'yearly', 'yellow', 'yogurt', 'zapped', 'zigzag', 'zipped', 
        'zipper', 'zodiac', 'zombie', 'zoning', 'zoomed', 

        // 7 LETTER WORDS (2111 words)
        'abandon', 'abdomen', 'ability', 'abscess', 'absolve', 'abstain', 
        'abusive', 'abysmal', 'academy', 'acclaim', 'account', 'accrual', 
        'accrued', 'acetone', 'achieve', 'acquire', 'acrobat', 'acronym', 
        'acrylic', 'actress', 'actuate', 'adapted', 'adapter', 'address', 
        'adjourn', 'admiral', 'admired', 'adopted', 'adorned', 'adrenal', 
        'advance', 'adverse', 'advised', 'aerates', 'aerator', 'aerobic', 
        'aerosol', 'against', 'ageless', 'agility', 'agitate', 'agonize', 
        'ailment', 'airfare', 'airflow', 'airhead', 'airline', 'airport', 
        'airwave', 'alamode', 'alchemy', 'alcohol', 'alfredo', 'algebra', 
        'alimony', 'allergy', 'already', 'alright', 'amateur', 'amazing', 
        'amenity', 'amiable', 'ammonia', 'amnesia', 'amnesty', 'amongst', 
        'amplify', 'amputee', 'amusing', 'anagram', 'analogy', 'analyst', 
        'analyze', 'anarchy', 'anatomy', 'ancient', 'android', 'anguish', 
        'angular', 'animate', 'annoyed', 'anomaly', 'another', 'antacid', 
        'antenna', 'antique', 'antonym', 'anxiety', 'anxious', 'anybody', 
        'anymore', 'anytime', 'apatite', 'apology', 'apostle', 'apparel', 
        'appease', 'applaud', 'applied', 'appoint', 'approve', 'apricot', 
        'aquatic', 'arcadia', 'archaic', 'archery', 'archive', 'armoire', 
        'armoury', 'armrest', 'arraign', 'arrange', 'arrival', 'arsenal', 
        'arsenic', 'article', 'artisan', 'artwork', 'ashtray', 'asphalt', 
        'aspirin', 'assault', 'astound', 'atavism', 'atavist', 'atheist', 
        'athlete', 'atrophy', 'attempt', 'attract', 'auction', 'audible', 
        'auditor', 'augment', 'autopsy', 'avenger', 'average', 'aviator', 
        'avocado', 'awesome', 'awkward', 'azimuth', 'babysit', 'backlit', 
        'backout', 'baggage', 'bagpipe', 'bailiff', 'bailout', 'balance', 
        'balcony', 'ballast', 'balloon', 'bandage', 'bandaid', 'bandana', 
        'banking', 'banquet', 'banshee', 'baptism', 'baptist', 'barbell', 
        'bargain', 'barista', 'barrier', 'bashful', 'basinet', 'bathtub', 
        'battery', 'bayonet', 'bazooka', 'beanbag', 'beastly', 'beavers', 
        'because', 'bedroom', 'bedtime', 'behoove', 'bejewel', 'belated', 
        'believe', 'bellhop', 'beloved', 'beneath', 'benefit', 'between', 
        'bewitch', 'bicycle', 'bifocal', 'bigfoot', 'bigotry', 'billion', 
        'biofuel', 'biology', 'bipolar', 'biscuit', 'bizarre', 'blanket', 
        'blatant', 'blazing', 'blender', 'blinker', 'blooper', 'blossom', 
        'blowout', 'bluejay', 'blunder', 'bolivia', 'bologna', 'bombard', 
        'bonanza', 'bondage', 'bonfire', 'boombox', 'booster', 'bootleg', 
        'borough', 'botanic', 'bouquet', 'bowling', 'boycott', 'bracket', 
        'braille', 'bravery', 'breadth', 'breathe', 'brevity', 'briefly', 
        'brigade', 'brindle', 'brioche', 'brisket', 'brittle', 'brocoli', 
        'broiler', 'brother', 'brought', 'brownie', 'browser', 'buckeye', 
        'buffalo', 'builder', 'buildup', 'bulldog', 'buoyant', 'burning', 
        'burnout', 'burrito', 'butcher', 'buttery', 'buzzard', 'cabbage', 
        'cabinet', 'caboose', 'cadaver', 'cadence', 'cadmium', 'caffein', 
        'calcium', 'caldron', 'caliber', 'caliper', 'calling', 'calorie', 
        'calvary', 'cannoli', 'canteen', 'cantina', 'capable', 'capital', 
        'caprice', 'capsize', 'capsule', 'captain', 'caption', 'captive', 
        'capture', 'caramel', 'caravan', 'carbide', 'carbine', 'carcass', 
        'cardiac', 'careful', 'caribou', 'carnage', 'carpool', 'carport', 
        'carrier', 'carrion', 'cartoon', 'carwash', 'cascade', 'casette', 
        'cashier', 'catalog', 'catcher', 'catfish', 'cathode', 'catwalk', 
        'caution', 'cavalry', 'caveman', 'ceiling', 'central', 'centric', 
        'century', 'ceramic', 'cerated', 'certain', 'certify', 'chamber', 
        'channel', 'chaotic', 'chapter', 'charade', 'charger', 'chariot', 
        'charity', 'charter', 'chasing', 'chateau', 'chatter', 'cheaper', 
        'cheater', 'checker', 'checkup', 'cheddar', 'cheerio', 'chemist', 
        'cherish', 'chevron', 'chicken', 'chiller', 'chimney', 'chipper', 
        'chopper', 'chowder', 'chronic', 'circuit', 'citadel', 'citizen', 
        'clarify', 'clarity', 'classic', 'cleaner', 'cleanse', 'cleanup', 
        'clearly', 'cleaver', 'climate', 'climber', 'clipper', 'closely', 
        'closest', 'closeup', 'closure', 'cluster', 'clutter', 'coastal', 
        'coaster', 'coaxial', 'cockpit', 'coconut', 'coexist', 'coldest', 
        'collect', 'college', 'collide', 'cologne', 'colonel', 'combine', 
        'comfort', 'comical', 'command', 'comment', 'commode', 'commune', 
        'commute', 'compact', 'company', 'compare', 'compass', 'compete', 
        'compile', 'complex', 'compose', 'compost', 'compute', 'comrade', 
        'concave', 'conceal', 'concede', 'conceit', 'concept', 'concern', 
        'concert', 'concise', 'concord', 'condone', 'conduce', 'conduct', 
        'conduit', 'confess', 'confide', 'confine', 'confirm', 'conform', 
        'confuse', 'conical', 'conjoin', 'conjure', 'connect', 'connive', 
        'conquer', 'consent', 'consist', 'console', 'consort', 'consult', 
        'consume', 'contact', 'contain', 'contend', 'content', 'contest', 
        'context', 'contort', 'contour', 'control', 'convect', 'convene', 
        'convent', 'convert', 'convict', 'cooking', 'cookout', 'coolant', 
        'copycat', 'coroner', 'correct', 'corrode', 'corrupt', 'corsair', 
        'costume', 'cottage', 'council', 'counsel', 'counter', 'coupler', 
        'courage', 'courier', 'cowbell', 'cracker', 'crackle', 'cranial', 
        'cranium', 'crawler', 'creamer', 'creatin', 'creator', 'crevice', 
        'cricket', 'crimson', 'cripple', 'critter', 'crochet', 'crooked', 
        'croquet', 'crouton', 'crowbar', 'crucial', 'crucify', 'cruelty', 
        'cruiser', 'crumble', 'crumple', 'crunchy', 'crusade', 'crusher', 
        'cryptic', 'crystal', 'cubical', 'cuisine', 'culprit', 'culture', 
        'culvert', 'cupcake', 'curator', 'current', 'currier', 'cursive', 
        'curtain', 'cushion', 'custody', 'cuticle', 'cutlery', 'cyanide', 
        'cyclone', 'cynical', 'cypress', 'damaged', 'dancing', 'darkest', 
        'darling', 'dashing', 'daycare', 'daytime', 'dealing', 'debrief', 
        'deceive', 'decency', 'decibel', 'decimal', 'declare', 'decline', 
        'decoded', 'decoder', 'decrypt', 'deepest', 'default', 'defense', 
        'defiant', 'deflate', 'deflect', 'defraud', 'defrost', 'deftest', 
        'defunct', 'degauss', 'deglaze', 'degrade', 'delight', 'deliver', 
        'deltoid', 'demerit', 'density', 'dentist', 'denture', 'deplete', 
        'deplore', 'deposit', 'deprive', 'derange', 'descend', 'descent', 
        'deserve', 'desktop', 'despair', 'despise', 'despite', 'dessert', 
        'destain', 'destiny', 'destroy', 'develop', 'deviant', 'deviate', 
        'devious', 'diagram', 'dialect', 'diamond', 'dictate', 'diehard', 
        'diffuse', 'digital', 'dignify', 'dignity', 'digress', 'dilemma', 
        'diorama', 'dioxide', 'diploma', 'dirtier', 'disable', 'discard', 
        'discern', 'discord', 'discuss', 'disease', 'disgust', 'dislike', 
        'display', 'disrupt', 'dissect', 'distain', 'distant', 'distill', 
        'distort', 'disturb', 'diverge', 'diverse', 'divorce', 'divulge', 
        'dolphin', 'doorway', 'dormant', 'drastic', 'dreamer', 'dribble', 
        'drifter', 'driving', 'drizzle', 'drought', 'drummer', 'drywall', 
        'duality', 'dubious', 'dungeon', 'durable', 'dwindle', 'dynamic', 
        'dynasty', 'eagerly', 'earlier', 'earning', 'eastern', 'eclipse', 
        'economy', 'edition', 'educate', 'ejected', 'elastic', 'elderly', 
        'elegant', 'element', 'elevate', 'elitist', 'ellipse', 'elusive', 
        'emanant', 'embargo', 'embassy', 'embrace', 'emerald', 'eminent', 
        'emotion', 'empathy', 'emperor', 'empower', 'emulate', 'enabled', 
        'enclave', 'enclose', 'encrypt', 'endless', 'endorse', 'enforce', 
        'english', 'engrave', 'enhance', 'enlarge', 'enquire', 'enquiry', 
        'envelop', 'envious', 'episode', 'equally', 'equator', 'erosion', 
        'erosive', 'esquire', 'essence', 'eternal', 'ethical', 'evasive', 
        'evening', 'evident', 'exactly', 'examine', 'example', 'excerpt', 
        'exclaim', 'exclude', 'execute', 'exhaust', 'exhibit', 'expanse', 
        'expects', 'expense', 'expired', 'explain', 'explode', 'exploit', 
        'explore', 'express', 'extinct', 'extract', 'extreme', 'eyeball', 
        'eyebrow', 'faction', 'factoid', 'factory', 'factual', 'faculty', 
        'failure', 'fairway', 'fallacy', 'fallout', 'falsely', 'falsify', 
        'fanatic', 'fantasy', 'farming', 'farther', 'fascism', 'fascist', 
        'fashion', 'fatigue', 'feather', 'feature', 'federal', 'fertile', 
        'festive', 'fiancee', 'fiction', 'fifteen', 'fighter', 'figment', 
        'filiate', 'finally', 'finance', 'finding', 'finesse', 'finicky', 
        'firearm', 'fireman', 'fissure', 'fitness', 'flaming', 'flannel', 
        'flatten', 'flicker', 'flipper', 'florist', 'fluency', 'fluster', 
        'foliage', 'foliate', 'foolery', 'fooling', 'foolish', 'footage', 
        'foraged', 'forbade', 'forbode', 'foreign', 'foreman', 'forever', 
        'forfeit', 'forgave', 'forgery', 'forgive', 'formula', 'forsake', 
        'fortify', 'fortune', 'forward', 'founded', 'founder', 'fragile', 
        'frankly', 'freckle', 'freedom', 'freeway', 'freezer', 'freight', 
        'freshen', 'freshly', 'frisbee', 'fueling', 'fulcrum', 'fulfill', 
        'fullest', 'furious', 'furnace', 'furnish', 'further', 'gagster', 
        'gallant', 'gallery', 'garbage', 'garland', 'garment', 'garnish', 
        'gasping', 'gateway', 'general', 'generic', 'genetic', 'gentile', 
        'genuine', 'geology', 'gestate', 'gesture', 'getaway', 'ghastly', 
        'ghostly', 'gigabit', 'gimmick', 'ginseng', 'giraffe', 'glacial', 
        'glacier', 'glamour', 'glaring', 'glimmer', 'glitchy', 'glitter', 
        'glorify', 'glowing', 'glucose', 'glutton', 'goggles', 'golfing', 
        'goliath', 'goodbye', 'gorilla', 'gourmet', 'gradual', 'grammar', 
        'grandma', 'grandpa', 'granite', 'granola', 'granule', 'graphic', 
        'grapple', 'gratify', 'gravity', 'greaser', 'greater', 'greatly', 
        'gremlin', 'grenade', 'griddle', 'griffin', 'grimace', 'grinder', 
        'grizzly', 'grocery', 'grommet', 'grouchy', 'grownup', 'gumball', 
        'gumdrop', 'gunfire', 'gymnast', 'habitat', 'haggard', 'haircut', 
        'halfway', 'halibut', 'hallway', 'halogen', 'hambone', 'hammock', 
        'hamster', 'handbag', 'handout', 'hangman', 'hangout', 'harbour', 
        'hardest', 'hardhat', 'harmful', 'harmony', 'harpoon', 'harvest', 
        'hatchet', 'hateful', 'haunted', 'haywire', 'headset', 'healing', 
        'healthy', 'hearing', 'hearsay', 'heathen', 'heating', 'heavier', 
        'heavily', 'heckler', 'heftier', 'heighth', 'hellion', 'helpful', 
        'helping', 'heretic', 'heroism', 'herself', 'hexagon', 'hibachi', 
        'hickory', 'hideous', 'hideout', 'highest', 'highway', 'hilltop', 
        'himself', 'hipster', 'history', 'hobbies', 'holding', 'holiday', 
        'holland', 'holster', 'honesty', 'hoodlum', 'hopeful', 'horizon', 
        'hormone', 'hosiery', 'hostage', 'hostess', 'hostile', 'hosting', 
        'hotshot', 'hotspot', 'hottest', 'however', 'howling', 'humanly', 
        'humidor', 'hundred', 'hunting', 'hurtful', 'husband', 'hustler', 
        'hydrant', 'hydrate', 'hygiene', 'iceberg', 'idiotic', 'idolize', 
        'igneous', 'illegal', 'illness', 'imagery', 'imagine', 'imaging', 
        'imitate', 'immense', 'immerse', 'immoral', 'impeach', 'implant', 
        'implied', 'implode', 'implore', 'impound', 'impower', 'imprint', 
        'improve', 'impulse', 'inbound', 'incense', 'incline', 'include', 
        'incubus', 'indorse', 'indulge', 'inertia', 'inferno', 'infidel', 
        'infield', 'inflame', 'inflate', 'inflict', 'ingress', 'inhaler', 
        'inherit', 'inhibit', 'inhuman', 'initial', 'injured', 'inquire', 
        'inquiry', 'insider', 'insight', 'inspect', 'inspire', 'install', 
        'instant', 'instead', 'instill', 'insulin', 'integer', 'intense', 
        'intrude', 'invalid', 'inverse', 'invoice', 'involve', 'ironman', 
        'isolate', 'isotone', 'isotope', 'itching', 'itemize', 'iterate', 
        'jackpot', 'jacuzzi', 'janitor', 'jarhead', 'javelin', 'jawbone', 
        'jealous', 'jewelry', 'jittery', 'jogging', 'joining', 'journal', 
        'journey', 'joyride', 'judging', 'juicier', 'jujitsu', 'jukebox', 
        'jumbled', 'justice', 'justify', 'juvenal', 'karaoke', 'keeping', 
        'keycard', 'keyhole', 'keyless', 'keynote', 'keyword', 'kickbox', 
        'kicking', 'kickoff', 'kilobit', 'kindred', 'kinetic', 'kinfolk', 
        'kingdom', 'kingpin', 'kissing', 'kitchen', 'kleenex', 'kneecap', 
        'knuckle', 'krypton', 'lacquer', 'lactose', 'ladybug', 'lampoon', 
        'lantern', 'lanyard', 'larceny', 'largely', 'largest', 'lasagna', 
        'lashing', 'latency', 'lateral', 'latrine', 'lattice', 'launder', 
        'laundry', 'lawless', 'layaway', 'leakage', 'leather', 'leaving', 
        'lecture', 'legally', 'legible', 'leisure', 'lengthy', 'lenient', 
        'leopard', 'leotard', 'lettuce', 'lexical', 'lexicon', 'liberal', 
        'liberty', 'library', 'license', 'lighten', 'lighter', 'lightly', 
        'limeade', 'limited', 'lineage', 'lineate', 'lineman', 'lingual', 
        'linkage', 'liquify', 'listing', 'literal', 'lithium', 'livable', 
        'loading', 'lobster', 'locally', 'locator', 'lockbox', 'logical', 
        'longest', 'lookout', 'loosely', 'lottery', 'loudest', 'lovable', 
        'lozenge', 'lucidly', 'lucifer', 'luckily', 'luggage', 'lullaby', 
        'lunatic', 'lunging', 'lustful', 'lyrical', 'machete', 'machine', 
        'madness', 'maestro', 'magenta', 'magical', 'magnify', 'mahjong', 
        'mailbox', 'majesty', 'mallard', 'mammoth', 'manager', 'manakin', 
        'manatee', 'mandate', 'manhunt', 'manilla', 'mankind', 'mansion', 
        'mariner', 'marital', 'marline', 'marquee', 'married', 'martial', 
        'martian', 'masonic', 'masonry', 'massage', 'massive', 'mastery', 
        'matador', 'matinee', 'maximum', 'meaning', 'measure', 'medevac', 
        'mediate', 'medical', 'meerkat', 'meeting', 'megabit', 'melodic', 
        'mention', 'mercury', 'mermaid', 'mesquit', 'message', 'messiah', 
        'microbe', 'midland', 'midsize', 'midterm', 'migrate', 'mileage', 
        'million', 'mindful', 'mindset', 'mineral', 'minimal', 'minimum', 
        'minivan', 'miracle', 'misfire', 'mislead', 'missile', 'mission', 
        'mistake', 'mixture', 'moaning', 'mobster', 'mocking', 'modesty', 
        'modular', 'momento', 'monarch', 'monitor', 'monocle', 'monolog', 
        'monster', 'montage', 'monthly', 'morally', 'morning', 'moronic', 
        'mounted', 'movable', 'muffler', 'mummify', 'musical', 'muskrat', 
        'mustang', 'mustard', 'mutable', 'mutated', 'mystery', 'mystify', 
        'narrate', 'natural', 'nearest', 'neglect', 'neither', 'nervous', 
        'network', 'neutral', 'neutron', 'newborn', 'nightly', 'nirvana', 
        'nitrate', 'nitrous', 'nocturn', 'noisier', 'nominal', 'nominee', 
        'nonstop', 'nostril', 'notable', 'notepad', 'nothing', 'nourish', 
        'novelty', 'nowhere', 'noxious', 'nuclear', 'nucleus', 'numeral', 
        'numeric', 'nuptial', 'nursery', 'nurture', 'oatmeal', 'obesity', 
        'oblique', 'obscene', 'obscure', 'observe', 'obvious', 'oceanic', 
        'octagon', 'octopus', 'odyssey', 'offense', 'officer', 'offline', 
        'ominous', 'opacity', 'opening', 'operate', 'opinion', 'opposed', 
        'oppress', 'optical', 'optimal', 'optimum', 'orchard', 'orderly', 
        'oregano', 'organic', 'orifice', 'origami', 'ostrich', 'ourself', 
        'outback', 'outcast', 'outcome', 'outdoor', 'outline', 'outlook', 
        'outpost', 'outrage', 'outside', 'outward', 'overact', 'overage', 
        'overall', 'overdue', 'overlap', 'oversea', 'oxidate', 'oxidize', 
        'pacific', 'package', 'padlock', 'pageant', 'painful', 'palette', 
        'pancake', 'pandora', 'panther', 'paprica', 'paradox', 'parfait', 
        'parking', 'parkway', 'parsley', 'partake', 'partial', 'partner', 
        'passage', 'passion', 'passive', 'pasture', 'pathway', 'patient', 
        'patriot', 'pattern', 'payable', 'payload', 'payment', 'payroll', 
        'peacock', 'peasant', 'pelican', 'penalty', 'pendant', 'pending', 
        'penguin', 'pennant', 'pennies', 'pension', 'percent', 'perfect', 
        'perform', 'perfume', 'perjure', 'perjury', 'permute', 'persist', 
        'persona', 'pertain', 'perturb', 'petrify', 'petunia', 'phantom', 
        'phoenix', 'physics', 'pianist', 'picante', 'picture', 'pigment', 
        'pigskin', 'pigtail', 'pilgrim', 'pillage', 'pinball', 'piranha', 
        'pitcher', 'pitiful', 'pivotal', 'placebo', 'plastic', 'plateau', 
        'platter', 'playful', 'playoff', 'plumber', 'plummet', 'plunger', 
        'plywood', 'poblano', 'pogonia', 'pointer', 'politic', 'pollute', 
        'polygon', 'polymer', 'ponding', 'pontoon', 'popcorn', 'popular', 
        'portion', 'portray', 'postage', 'posting', 'postman', 'posture', 
        'potency', 'pottery', 'poultry', 'poverty', 'prairie', 'precede', 
        'precise', 'predict', 'preempt', 'preface', 'pregame', 'preheat', 
        'prelude', 'premade', 'premier', 'premise', 'premium', 'prepaid', 
        'prepare', 'prequel', 'present', 'presume', 'pretell', 'pretend', 
        'pretest', 'pretold', 'pretzel', 'prevail', 'prevent', 'preview', 
        'prickle', 'primary', 'primate', 'printer', 'privacy', 'private', 
        'problem', 'proceed', 'process', 'proctor', 'procure', 'prodigy', 
        'produce', 'product', 'profane', 'profile', 'profuse', 'program', 
        'project', 'prolong', 'promise', 'promote', 'pronoun', 'propane', 
        'prophet', 'propose', 'prorate', 'prosper', 'protect', 'protege', 
        'protein', 'protest', 'proverb', 'provide', 'provoke', 'prudent', 
        'psychic', 'publish', 'pumpkin', 'pungent', 'puritan', 'purpose', 
        'pursuit', 'pushing', 'pyramid', 'qualify', 'quality', 'quantum', 
        'quarrel', 'quarter', 'quartet', 'quicker', 'quickly', 'quieter', 
        'quietly', 'quitter', 'raccoon', 'raceway', 'radiant', 'radiate', 
        'radical', 'railway', 'rainbow', 'raining', 'rambler', 'rampage', 
        'rampant', 'ranking', 'rapidly', 'rapport', 'rapture', 'ravaged', 
        'ravioli', 'rawhide', 'reactor', 'reading', 'realign', 'reality', 
        'realize', 'realtor', 'rebound', 'rebuild', 'rebuilt', 'receipt', 
        'receive', 'recital', 'reclaim', 'recline', 'recover', 'recruit', 
        'rectify', 'recycle', 'redhead', 'redneck', 'redwing', 'reelect', 
        'reenact', 'referee', 'reflect', 'refrain', 'refresh', 'refried', 
        'refugee', 'refusal', 'regency', 'regimen', 'regress', 'regroup', 
        'regular', 'rejoice', 'relapse', 'release', 'reliant', 'relieve', 
        'rematch', 'remnant', 'remorse', 'removal', 'reoccur', 'reorder', 
        'replace', 'replant', 'replica', 'repress', 'reptile', 'repulse', 
        'request', 'requiem', 'require', 'reroute', 'rescind', 'reserve', 
        'residue', 'resolve', 'respect', 'respond', 'restart', 'restore', 
        'retinal', 'retired', 'revenge', 'revenue', 'reverse', 'revival', 
        'revolve', 'rewrite', 'richest', 'ringing', 'riptide', 'rivalry', 
        'robbery', 'robotic', 'romance', 'rooftop', 'rooster', 'roughly', 
        'routine', 'royally', 'royalty', 'ruining', 'rummage', 'running', 
        'rupture', 'sabbath', 'sailing', 'saltine', 'salvage', 'sampler', 
        'samurai', 'sanctum', 'sandbag', 'sandbar', 'sandbox', 'sandlot', 
        'sarcasm', 'sardine', 'satanic', 'satchel', 'satisfy', 'sausage', 
        'sauteed', 'saviour', 'savoury', 'sawdust', 'scalpel', 'scandal', 
        'scanner', 'scenery', 'sceptic', 'scholar', 'science', 'scooter', 
        'scratch', 'sealant', 'seclude', 'secrecy', 'section', 'segment', 
        'seismic', 'seizure', 'selfish', 'selling', 'sellout', 'seminal', 
        'seminar', 'semipro', 'senator', 'sensing', 'sensory', 'sensual', 
        'sequoia', 'serious', 'serpent', 'serrate', 'servant', 'service', 
        'serving', 'setback', 'setting', 'settled', 'settler', 'seventh', 
        'seventy', 'several', 'severed', 'shackle', 'shaking', 'shallow', 
        'shampoo', 'sharing', 'sharpen', 'sharper', 'sharpie', 'shaving', 
        'sheathe', 'shelter', 'sherbet', 'sheriff', 'shifter', 'shimmer', 
        'shingle', 'shinier', 'shining', 'shocker', 'shoebox', 'shooter', 
        'shorten', 'shorter', 'shortly', 'shotgun', 'showbiz', 'shrivel', 
        'shutter', 'shuttle', 'sickest', 'sidearm', 'sidebar', 'sidecar', 
        'signify', 'signing', 'silence', 'silicon', 'similar', 'simpler', 
        'sincere', 'singing', 'sinking', 'sirloin', 'situate', 'sixteen', 
        'sizable', 'sizzler', 'skating', 'skeptic', 'sketchy', 'skilled', 
        'skillet', 'skipper', 'skittle', 'skydive', 'skyline', 'slacker', 
        'slander', 'slavery', 'sleeper', 'slender', 'slicing', 'slimmer', 
        'slither', 'slowest', 'slumber', 'smaller', 'smarter', 'smashed', 
        'smeared', 'smiling', 'smitten', 'smokier', 'smoking', 'smoothy', 
        'smother', 'smuggle', 'sneaker', 'snicker', 'sniffle', 'snorkel', 
        'snowing', 'snowman', 'snuggle', 'soaring', 'society', 'softest', 
        'soilage', 'soldier', 'solicit', 'soluble', 'solvent', 'solving', 
        'someday', 'somehow', 'someone', 'soprano', 'sorcery', 'sorting', 
        'soybean', 'spacial', 'spacier', 'spacing', 'spackle', 'spandex', 
        'sparing', 'sparkle', 'sparkly', 'sparrow', 'spartan', 'spatial', 
        'spatula', 'speaker', 'special', 'species', 'specify', 'speedup', 
        'spicier', 'spinach', 'spindle', 'spinner', 'splurge', 'spoiler', 
        'sponsor', 'spotter', 'spousal', 'squeaky', 'squeeze', 'squirmy', 
        'squishy', 'squoosh', 'stadium', 'stagger', 'stamina', 'standby', 
        'stapler', 'stardom', 'starter', 'startle', 'station', 'stature', 
        'statute', 'stealth', 'steamer', 'steeple', 'stencil', 'sterile', 
        'sternum', 'steroid', 'sticker', 'stinger', 'stollen', 'stomach', 
        'storage', 'strange', 'stretch', 'student', 'studied', 'stumble', 
        'stutter', 'stylish', 'subject', 'sublime', 'submiss', 'subpena', 
        'subtext', 'subzero', 'succeed', 'success', 'succumb', 'suction', 
        'suffice', 'suggest', 'suicide', 'sulphur', 'summary', 'summery', 
        'sunburn', 'sunrise', 'sunroof', 'support', 'suppose', 'supreme', 
        'surface', 'surfing', 'surgeon', 'surgery', 'surmise', 'surname', 
        'surpass', 'surplus', 'surreal', 'survive', 'suspect', 'suspend', 
        'sustain', 'swallow', 'sweeter', 'sweetie', 'swiftly', 'swimmer', 
        'swindle', 'symptom', 'synergy', 'synonym', 'syringe', 'takeout', 
        'talking', 'tallest', 'tangent', 'tantrum', 'tarnish', 'taskbar', 
        'taxable', 'teacher', 'teasing', 'tedious', 'teenage', 'telecom', 
        'templar', 'templet', 'tempura', 'tension', 'termite', 'terrace', 
        'terrain', 'terrify', 'testify', 'textual', 'texture', 'theater', 
        'therapy', 'thermal', 'thicken', 'thicker', 'thimble', 'thinker', 
        'thinner', 'thirsty', 'thought', 'thrifty', 'through', 'thunder', 
        'thyroid', 'tighten', 'tighter', 'tightly', 'tilapia', 'timeout', 
        'timidly', 'tiniest', 'tinnier', 'titanic', 'toaster', 'tobacco', 
        'toddler', 'tonight', 'toolbox', 'topical', 'topside', 'topsoil', 
        'torment', 'tornado', 'torpedo', 'torrent', 'torture', 'totally', 
        'toughen', 'tougher', 'touring', 'tourism', 'tourist', 'trachea', 
        'tractor', 'traffic', 'tragedy', 'trailer', 'trainee', 'trainer', 
        'traitor', 'trample', 'transit', 'trapeze', 'trapped', 'treetop', 
        'tremble', 'trestle', 'tribute', 'trickle', 'trident', 'trifled', 
        'trifold', 'trigger', 'trilogy', 'trinity', 'trinket', 'triplet', 
        'triumph', 'trivial', 'trivium', 'trolley', 'trooper', 'trouble', 
        'truancy', 'trucker', 'truffle', 'trumpet', 'tsunami', 'tuition', 
        'tumbled', 'tumbler', 'turbine', 'turmoil', 'turnout', 'tweaked', 
        'tweeter', 'twelfth', 'twinkle', 'twisted', 'twister', 'twitter', 
        'typhoon', 'typical', 'tyranny', 'ukulele', 'unawake', 'unaware', 
        'uncanny', 'unclean', 'undergo', 'undress', 'unequal', 'unheard', 
        'unicorn', 'unified', 'uniform', 'unitary', 'unknown', 'unleash', 
        'unlucky', 'unravel', 'unusual', 'updated', 'upgrade', 'upright', 
        'uptight', 'uranium', 'urgency', 'urinary', 'useless', 'usually', 
        'utensil', 'utility', 'utilize', 'utopian', 'utterly', 'vacancy', 
        'vaccine', 'vagrant', 'valance', 'valiant', 'vampire', 'vanilla', 
        'vantage', 'variant', 'variety', 'various', 'varmint', 'varnish', 
        'varsity', 'vehicle', 'venison', 'venture', 'verbose', 'verdict', 
        'version', 'vertigo', 'veteran', 'vibrant', 'vibrate', 'vicious', 
        'victory', 'village', 'villain', 'vinegar', 'vintage', 'violate', 
        'violent', 'virtual', 'visible', 'visitor', 'vitamin', 'vividly', 
        'vocally', 'volcano', 'voltage', 'voucher', 'voyager', 'vulture', 
        'waiting', 'waiving', 'walking', 'walkway', 'wanting', 'warfare', 
        'warhead', 'warlock', 'warlord', 'warmest', 'warming', 'warning', 
        'warrant', 'warrior', 'warthog', 'washing', 'washout', 'wattage', 
        'weakest', 'wealthy', 'weather', 'webpage', 'website', 'webster', 
        'wedding', 'weekday', 'weekend', 'welcome', 'welfare', 'western', 
        'whether', 'whimper', 'whipped', 'whistle', 'whoever', 'whopper', 
        'willing', 'winning', 'wipeout', 'wiretap', 'wiseguy', 'wishing', 
        'without', 'witness', 'workday', 'working', 'workout', 'worried', 
        'worship', 'wounded', 'wrapper', 'wrestle', 'wrinkle', 'writing', 
        'written', 'yardage', 'yoghurt', 'younger', 'zoology', 

        // 8 LETTER WORDS
        'absolute', 'abstract', 'academic', 'accepted', 'accident', 'accuracy', 
        'accurate', 'achieved', 'acquired', 'activity', 'actually', 'addition', 
        'adequate', 'adjacent', 'adjusted', 'advanced', 'advisory', 'advocate', 
        'affected', 'aircraft', 'alliance', 'although', 'aluminum', 'analysis', 
        'announce', 'anything', 'anywhere', 'apparent', 'appendix', 'approach', 
        'approval', 'argument', 'artistic', 'assembly', 'assuming', 'athletic', 
        'attached', 'attitude', 'attorney', 'audience', 'autonomy', 'aviation', 
        'bachelor', 'bacteria', 'baseball', 'bathroom', 'becoming', 'benjamin', 
        'birthday', 'boundary', 'breaking', 'breeding', 'building', 'bulletin', 
        'business', 'calendar', 'campaign', 'capacity', 'casualty', 'catching', 
        'category', 'catholic', 'cautious', 'cellular', 'ceremony', 'chairman', 
        'champion', 'chemical', 'children', 'circular', 'civilian', 'clearing', 
        'clinical', 'clothing', 'collapse', 'colonial', 'colorful', 'commence', 
        'commerce', 'complain', 'complete', 'composed', 'compound', 'comprise', 
        'computer', 'conclude', 'concrete', 'conflict', 'confused', 'congress', 
        'consider', 'constant', 'consumer', 'continue', 'contract', 'contrary', 
        'contrast', 'convince', 'corridor', 'coverage', 'covering', 'creation', 
        'creative', 'criminal', 'critical', 'crossing', 'cultural', 'currency', 
        'customer', 'database', 'daughter', 'daylight', 'deadline', 'deciding', 
        'decision', 'decrease', 'deferred', 'definite', 'delicate', 'delivery', 
        'describe', 'designer', 'detailed', 'diabetes', 'dialogue', 'diameter', 
        'directly', 'director', 'disabled', 'disaster', 'disclose', 'discount', 
        'discover', 'disorder', 'disposal', 'distance', 'distinct', 'district', 
        'dividend', 'division', 'doctrine', 'document', 'domestic', 'dominant', 
        'dominate', 'doubtful', 'dramatic', 'dressing', 'dropping', 'duration', 
        'dynamics', 'earnings', 'economic', 'educated', 'efficacy', 'eighteen', 
        'election', 'electric', 'eligible', 'emerging', 'emphasis', 'employee', 
        'endeavor', 'engaging', 'engineer', 'enormous', 'entirely', 'entrance', 
        'envelope', 'equality', 'equation', 'estimate', 'evaluate', 'eventual', 
        'everyday', 'everyone', 'evidence', 'exchange', 'exciting', 'exercise', 
        'explicit', 'exposure', 'extended', 'external', 'facility', 'familiar', 
        'featured', 'feedback', 'festival', 'finished', 'firewall', 'flagship', 
        'flexible', 'floating', 'football', 'foothill', 'forecast', 'foremost', 
        'formerly', 'fourteen', 'fraction', 'franklin', 'frequent', 'friendly', 
        'frontier', 'function', 'generate', 'generous', 'genomics', 'goodwill', 
        'governor', 'graduate', 'graphics', 'grateful', 'guardian', 'guidance', 
        'handling', 'hardware', 'heritage', 'highland', 'historic', 'homeless', 
        'homepage', 'hospital', 'humanity', 'identify', 'identity', 'ideology', 
        'imperial', 'incident', 'included', 'increase', 'indicate', 'indirect', 
        'industry', 'informal', 'informed', 'inherent', 'initiate', 'innocent', 
        'inspired', 'instance', 'integral', 'intended', 'interact', 'interest', 
        'interior', 'internal', 'interval', 'intimate', 'intranet', 'invasion', 
        'involved', 'isolated', 'judgment', 'judicial', 'junction', 'keyboard', 
        'landlord', 'language', 'laughter', 'learning', 'leverage', 'lifetime', 
        'lighting', 'likewise', 'limiting', 'literary', 'location', 'magazine', 
        'magnetic', 'maintain', 'majority', 'marginal', 'marriage', 'material', 
        'maturity', 'maximize', 'meantime', 'measured', 'medicine', 'medieval', 
        'memorial', 'merchant', 'midnight', 'military', 'minimize', 'minister', 
        'ministry', 'minority', 'mobility', 'modeling', 'moderate', 'momentum', 
        'monetary', 'moreover', 'mortgage', 'mountain', 'mounting', 'movement', 
        'multiple', 'national', 'negative', 'nineteen', 'northern', 'notebook', 
        'numerous', 'observer', 'occasion', 'offering', 'official', 'offshore', 
        'operator', 'opponent', 'opposite', 'optimism', 'optional', 'ordinary', 
        'organize', 'original', 'overcome', 'overhead', 'overseas', 'overview', 
        'painting', 'parallel', 'parental', 'patented', 'patience', 'peaceful', 
        'periodic', 'personal', 'persuade', 'petition', 'physical', 'pipeline', 
        'platform', 'pleasant', 'pleasure', 'politics', 'portable', 'portrait', 
        'position', 'positive', 'possible', 'powerful', 'practice', 'precious', 
        'pregnant', 'presence', 'preserve', 'pressing', 'pressure', 'previous', 
        'princess', 'printing', 'priority', 'probable', 'probably', 'producer', 
        'profound', 'progress', 'property', 'proposal', 'prospect', 'protocol', 
        'provided', 'provider', 'province', 'publicly', 'purchase', 'pursuant', 
        'quantity', 'question', 'rational', 'reaction', 'received', 'receiver', 
        'recovery', 'regional', 'register', 'relation', 'relative', 'relevant', 
        'reliable', 'reliance', 'religion', 'remember', 'renowned', 'repeated', 
        'reporter', 'republic', 'required', 'research', 'reserved', 'resident', 
        'resigned', 'resource', 'response', 'restrict', 'revision', 'rigorous', 
        'romantic', 'sampling', 'scenario', 'schedule', 'scrutiny', 'seasonal', 
        'secondly', 'security', 'sensible', 'sentence', 'separate', 'sequence', 
        'sergeant', 'shipping', 'shortage', 'shoulder', 'simplify', 'situated', 
        'slightly', 'software', 'solution', 'somebody', 'somewhat', 'southern', 
        'speaking', 'specific', 'spectrum', 'sporting', 'standard', 'standing', 
        'standout', 'sterling', 'straight', 'strategy', 'strength', 'striking', 
        'struggle', 'stunning', 'suburban', 'suitable', 'superior', 'supposed', 
        'surgical', 'surprise', 'survival', 'sweeping', 'swimming', 'symbolic', 
        'sympathy', 'syndrome', 'tactical', 'tailored', 'takeover', 'tangible', 
        'taxation', 'taxpayer', 'teaching', 'tendency', 'terminal', 'terrible', 
        'thinking', 'thirteen', 'thorough', 'thousand', 'together', 'tomorrow', 
        'touching', 'tracking', 'training', 'transfer', 'traveled', 'treasury', 
        'triangle', 'tropical', 'turnover', 'ultimate', 'umbrella', 'universe', 
        'unlawful', 'unlikely', 'valuable', 'variable', 'vertical', 'victoria', 
        'violence', 'volatile', 'warranty', 'weakness', 'weighted', 'whatever', 
        'whenever', 'wherever', 'wildlife', 'wireless', 'withdraw', 'woodland', 
        'workshop', 'yourself', 
        
        // 9 LETTER WORDS
        
        
        // 10 LETTER WORDS
        
        
        // 11 LETTER WORDS
        
        
        // 12 LETTER WORDS
        
        
        // 13 LETTER WORDS
        
        
        ];

	// Click to choose level of difficulty
    $('#new_game').click(function() {
        $('#menu').hide();
        $('#difficulty_content').show();
        $('h1').addClass('title_shrink');
        $('h1').removeClass('title_growth');
        $('h1').removeClass('title_reset');
    })
    
	// Click to find out instructinos to the game
    $('#instructions_button').click(function() {
        $('#menu').hide();
        $('#instructions').show();
        $('h1').addClass('title_shrink');
        $('h1').removeClass('title_growth');
        $('h1').removeClass('title_reset');
    })

	// Back button to display previous content where applicable
    $('.back_button').click(function() {
        $('#difficulty_content').hide();
        $('#instructions').hide();
        $('#menu').show();
        $('h1').removeAttr('id', 'small_title');
        $('h1').removeClass('title_shrink');
        $('h1').removeClass('play_again_title_reset'); 
        $('h1').removeClass('small_title'); 
        $('h1').addClass('title_growth');
    })

	// Quit game and reset all variables
    $('#quit').click(function() {
        timerReset();
        gameReset();
        $('#guessed_content').hide();
        $('#menu').slideDown(2000);
        $('h1').removeAttr('id', 'small_title');
        $('h1').removeClass('title_shrink');
        $('h1').removeClass('small_title'); 
        $('h1').removeClass('play_again_title_reset'); 
        $('h1').addClass('title_reset');
        $("#timer").text(':30');     
    })

	// Start a new game
    $('#start_game').click(function() {
        $('h1').removeClass('play_again_title_reset'); 
        difficulty = $('input[type=radio]:checked').val();
        if(difficulty === undefined) {
            $('#start_game').hide();
            $('#difficulty_ERROR').show();
            setTimeout(function() {
                $('#difficulty_ERROR').hide();
                $('#start_game').show();
            }, 1200)
        } else {
            timer();
            $('#difficulty_content').hide();
            $('#guessed_content').fadeIn(1000);
            $('#user_guess, #guess').show();
            $('h1').addClass('small_title')
            setTimeout(function() {
                $('h1').attr('id', 'small_title');
            }, 1000)

            whichLevel();
            randomChosenWord();
            jumbleUpWord();
            $('#jumbled_word').text(jumbledWord);
            usedWords.push(wordHolder);
            wordCount++;
            $('#user_guess').focus();
        }
    });
    
    // Submit user guess
    $('#guess').click(function() {
        userGuess = $('#user_guess').val();
        userGuess = userGuess.toLowerCase();
        
        if(userGuess === wordHolder) {
            timerReset();
            $('#timer').text('Great job! The word was: \t\t  ' + wordHolder.toUpperCase());

            setTimeout(function() {
                jumbledWord = ''
                timer();
                whichLevel();
                randomChosenWord();
                jumbleUpWord();
                $('#jumbled_word').html(jumbledWord);
				console.log(jumbledWord + " - Line 1244");
				console.log(wordHolder + " - Line 1245");
                $('#user_guess').focus();
            }, 1900)
            
            wordCount++;
            userPoints += 10;
            usedWords.push(wordHolder);
            
        } else {
            setTimeout(function() {
                $('#user_guess').focus();
            }, 1000)
        }
        
        $('#user_guess').val('');
        $('#current_level').text('LEVEL: ' + level);
        $('#user_points').text('POINTS: ' + userPoints);
        
    })
    
    $("#user_guess").keyup(function(event){
        if(event.keyCode == 13){
            $("#guess").click();
        }
    });
    
    
    ////// FUNCTIONS //////
    
    // TIMER FUNCTION
    function timer() {
        
        var time = '';
        var x;
        
        switch(difficulty) {
            case 'easy':
                x = 45;
                break;
            case 'normal':
                x = 30;
                break;
            case 'hard':
                x = 25;
                break;
            case 'veryHard':
                x = 20;
                break;
        }
        
        $('#timer').text(':' + x);
        
        setTimeout(function() {
            
            timerText = setInterval(function() {
                
                if(x < 10) {
                    time = ':0' + x;
                } else {
                    time = ':' + x;
                }
                
                $("#timer").text(time).css({fontSize: '1.3em'});
                x -= 1;
                
            }, 1000)
            
            timerSet = setTimeout(function() {
                
                clearInterval(timerText);
                $('#jumble_info').text('The jumbled word was: ');
                $('#jumbled_word').text(wordHolder);
                $("#timer").text('GAME OVER!!').css({fontSize: '3em'});
                $('#user_guess, #guess').hide();

            }, (x + 2) + '000') //31000)
            
        }, 500)
        
        comfirmTimer = setTimeout(function() {
            
            $('#game_over').show();        
            $('#yes').click(function() {
                timerReset();
                gameReset();
                $('#game_over').hide();
                $('#guessed_content').hide();
                $('#difficulty_content').show();
                $('h1').removeAttr('id', 'small_title');
                $('h1').removeClass('title_shrink');
                $('h1').removeClass('small_title'); 
                $('h1').addClass('play_again_title_reset'); 
                $("#timer").text('');
                clearTimeout(timerSet);
                clearInterval(timerText);
                
            })
            $('#no').click(function() {
                
                timerReset();
                gameReset();
                $('#game_over').hide();
                $('#guessed_content').hide();
                $('#menu').slideDown(2000);
                $('h1').removeAttr('id', 'small_title');
                $('h1').removeClass('title_shrink');
                $('h1').removeClass('small_title'); 
                $('h1').removeClass('play_again_title_reset'); 
                $('h1').addClass('title_reset');             
                $("#timer").text('');
                clearTimeout(timerSet);
                clearInterval(timerText);
                
            })
            
        }, (x + 3) + '000')
 
    } // END OF TIMER FUNCTION
    
    // CHOOSE A RANDOM WORD FROM THE WORD ARRAY DEPENDING ON DIFFICULTY AND LEVEL
    function randomChosenWord() {
        
        randomIndex = Math.floor(Math.random() * words.length);
        word = words[randomIndex];
        wordHolder = word;
        
        if(difficulty === 'easy' && level < 5) {
            while(word.length > minWordLength || usedWords.includes(word) || word === undefined) {
                randomIndex = Math.floor(Math.random() * words.length);
                word = words[randomIndex];
                wordHolder = word;
            }

        } else if(difficulty === 'easy' && level > 4) {
            while(word.length > maxWordLength || usedWords.includes(word) || word === undefined) {
                randomIndex = Math.floor(Math.random() * words.length);
                word = words[randomIndex];
                wordHolder = word;
            }
            
        } else if(difficulty === 'normal' && level < 5) {
            while(word.length > (minWordLength + 2) || word.length < minWordLength || usedWords.includes(word) || word === undefined) {
                randomIndex = Math.floor(Math.random() * words.length);
                word = words[randomIndex];
                wordHolder = word;
            }
            
        } else if(difficulty === 'normal' && level > 4) {
            while(word.length > maxWordLength || word.length < (minWordLength + 2) || usedWords.includes(word) || word === undefined) {
                randomIndex = Math.floor(Math.random() * words.length);
                word = words[randomIndex];
                wordHolder = word;
            }
            
        } else if(difficulty === 'hard' && level < 5) {
            while(word.length > (minWordLength + 1) || usedWords.includes(word) || word === undefined) {
                randomIndex = Math.floor(Math.random() * words.length);
                word = words[randomIndex];
                wordHolder = word;
            }
            
        } else if(difficulty === 'hard' && level > 4) {
            while(word.length > maxWordLength || word.length < (minWordLength + 1) || usedWords.includes(word) || word === undefined) {
                randomIndex = Math.floor(Math.random() * words.length);
                word = words[randomIndex];
                wordHolder = word;
            }
            
        } else if(difficulty === 'veryHard' && level < 5) {
            while(word.length > (minWordLength + 1) || usedWords.includes(word) || word === undefined) {
                randomIndex = Math.floor(Math.random() * words.length);
                word = words[randomIndex];
                wordHolder = word;
            }
            
        } else if(difficulty === 'veryHard' && level > 4) {
            while(word.length > maxWordLength || word.length < (minWordLength + 2) || usedWords.includes(word) || word === undefined) {
                randomIndex = Math.floor(Math.random() * words.length);
                word = words[randomIndex];
                wordHolder = word;
            }
            
        }
        
        console.log(word + ' ' + wordHolder);
        
    } // END OF RANDOM CHOSEN WORD FUNCTION

    function jumbleUpWord() {
        
        var jumbleCheck = true;
        
        console.log(word + ' ' + wordHolder + ' ' + jumbledWord);
        console.log('WORKS BEFORE WHILE LOOP!')
        while(word.length) {
            wordIndex = Math.floor(Math.random() * word.length);
            jumbledWord += word[wordIndex];
            word = word.slice(0, wordIndex) + word.slice(wordIndex + 1);

        }
        console.log(word.length);
        console.log('WORKS IMMEDIATELY AFTER WHILE LOOP!')
        console.log(jumbledWord + " - Line 1447");
         do {

            if(jumbledWord === wordHolder || jumbledWord === undefined || jumbledWord.length > wordHolder.length) {
				console.log('Line 1451');
				jumbledWord = '';
                word = wordHolder;
                while(word.length) {
                    wordIndex = Math.floor(Math.random() * word.length);
                    jumbledWord += word[wordIndex];
                    word = word.slice(0, wordIndex) + word.slice(wordIndex + 1);            
                }
            }
            jumbleCheck = false;
            break;
        } while(jumbleCheck === true)
		//return jumbledWord;
    }

    // DETERMINE THE CURRENT LEVEL & THE CURRENT DIFFICULTY SETTING  
    function whichLevel() {
        
        switch(wordCount) {
            case 1:
                level = 1;
                break;
            case 11:
                level = 2;
                break;
            case 21:
                level = 3;
                break;
            case 31:
                level = 4;
                break;
            case 41:
                level = 5;
                break;
            case 51:
                level = 6;
                break;
            case 61:
                level = 7;
                break;
            case 71:
                level = 8;
                break;
            case 81:
                level = 9;
                break;
            case 91:
                level = 10;
                break;
            case 101:
                
            default:
                break;
        }
             
        if(difficulty === 'easy') {
            minWordLength = 3;
            maxWordLength = 4;
        } else if(difficulty === 'normal') {
            minWordLength = 4;
            maxWordLength = 8;
        } else if(difficulty === 'hard') {
            minWordLength = 9;
            maxWordLength = 11;
        } else if(difficulty === 'veryHard') {
            minWordLength = 10;
            maxWordLength = 13;
        }
    } // END OF LEVEL & DIFFICULTY FUNCTION

    // RESET ALL VARIABLES
    function gameReset() {
        level = 1, wordIndex = 0, randomIndex = 0, wordCount = 0, maxWordLength = 0, minWordLength = 0, userPoints = 0;
        word = '', jumbledWord = '', wordHolder = '', difficulty = '', userGuess = '';
        usedWords = [];
        
        $('#timer').css({fontSize: '1.3em'});
        $('#jumble_info').text('The jumbled word is: ');
        $('#current_level').text('LEVEL: ' + level);
        $('#user_points').text('POINTS: ' + userPoints);
    } // END OF VARIABLE INITIALIZATION FUNCTION
    
    // TIMER RESET
    function timerReset() {
        clearTimeout(comfirmTimer);
        clearTimeout(timerSet);
        clearInterval(timerText);
    }
       
});
