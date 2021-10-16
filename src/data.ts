type Datum = {
  name: string
  description: string
  category: string
}

const data: Datum[] = [
  {
    name: "Applied",
    description:
      "It’s only useful when carefully applied to a person or to something they eat or drink.",
    category: "General Equipment Tags",
  },
  {
    name: "Awkward",
    description: "It’s unwieldy and tough to use.",
    category: "General Equipment Tags",
  },
  {
    name: "+Bonus",
    description:
      "It modifies your effectiveness in a specified situation. It might be “+1 forward to spout lore” or “-1 ongoing to hack and slash.”",
    category: "General Equipment Tags",
  },
  {
    name: "n coins",
    description:
      "How much it costs to buy, normally. If the cost includes “-Charisma” a little negotiation subtracts the haggler’s Charisma score (not modifier) from the price.",
    category: "General Equipment Tags",
  },
  {
    name: "Dangerous",
    description:
      "It’s easy to get in trouble with it. If you interact with it without proper precautions the GM may freely invoke the consequences of your foolish actions.",
    category: "General Equipment Tags",
  },
  { name: "Ration", description: "It’s edible, more or less.", category: "General Equipment Tags" },
  {
    name: "Requires",
    description:
      "It’s only useful to certain people. If you don’t meet the requirements it works poorly, if at all.",
    category: "General Equipment Tags",
  },
  {
    name: "Slow",
    description: "It takes minutes or more to use.",
    category: "General Equipment Tags",
  },
  {
    name: "Touch",
    description: "It’s used by touching it to the target’s skin.",
    category: "General Equipment Tags",
  },
  {
    name: "Two-handed",
    description: "It takes two hands to use it effectively.",
    category: "General Equipment Tags",
  },
  {
    name: "n weight",
    description:
      "Count the listed amount against your load. Something with no listed weight isn’t designed to be carried. 100 coins in standard denominations is 1 weight. The same value in gems or fine art may be lighter or heavier.",
    category: "General Equipment Tags",
  },
  {
    name: "Worn",
    description: "To use it, you have to be wearing it.",
    category: "General Equipment Tags",
  },
  {
    name: "n Uses",
    description: "It can only be used n times.",
    category: "General Equipment Tags",
  },
  {
    name: "n Ammo",
    description:
      "It counts as ammunition for appropriate ranged weapons. The number indicated does not represent individual arrows or sling stones, but represents what you have left on hand.",
    category: "Weapon Tags",
  },
  {
    name: "Forceful",
    description: "It can knock someone back a pace, maybe even off their feet.",
    category: "Weapon Tags",
  },
  {
    name: "+n Damage",
    description:
      "It is particularly harmful to your enemies. When you deal damage, you add n to it.",
    category: "Weapon Tags",
  },
  {
    name: "Ignores Armor",
    description: "Don’t subtract armor from the damage taken.",
    category: "Weapon Tags",
  },
  {
    name: "Messy",
    description:
      "It does damage in a particularly destructive way, ripping people and things apart.",
    category: "Weapon Tags",
  },

  {
    name: "n Piercing",
    description:
      "It goes right through armor. When you deal damage with n piercing, you subtract n from the enemy’s armor for that attack.",
    category: "Weapon Tags",
  },

  {
    name: "Precise",
    description:
      "It rewards careful strikes. You use DEX to hack and slash with this weapon, not STR.",
    category: "Weapon Tags",
  },

  {
    name: "Reload",
    description:
      "After you attack with it, it takes more than a moment to reset for another attack.",
    category: "Weapon Tags",
  },

  {
    name: "Stun",
    description: "When you attack with it, it does stun damage instead of normal damage.",
    category: "Weapon Tags",
  },

  {
    name: "Thrown",
    description:
      "Throw it at someone to hurt them. If you volley with this weapon, you can’t choose to mark off ammo on a 7–9; once you throw it, it’s gone until you can recover it.\nWeapons have tags to indicate the range at which they are useful. Dungeon World doesn’t inflict penalties or grant bonuses for “optimal range” or the like, but if your weapon says Hand and an enemy is ten yards away, a player would have a hard time justifying using that weapon against him.",
    category: "Weapon Tags",
  },

  {
    name: "Hand",
    description: "It’s useful for attacking something within your reach, no further.",
    category: "Weapon Tags",
  },

  {
    name: "Close",
    description: "It’s useful for attacking something at arm’s reach plus a foot or two.",
    category: "Weapon Tags",
  },

  {
    name: "Reach",
    description:
      "It’s useful for attacking something that’s several feet away—maybe as far as ten.",
    category: "Weapon Tags",
  },

  {
    name: "Near",
    description: "It’s useful for attacking if you can see the whites of their eyes.",
    category: "Weapon Tags",
  },

  {
    name: "Far",
    description: "It’s useful for attacking something in shouting distance.",
    category: "Weapon Tags",
  },
  { name: "Ragged Bow", description: "near, 15 coins, 2 weight", category: "Weapons" },
  { name: "Fine Bow", description: "near, far, 60 coins, 2 weight", category: "Weapons" },
  { name: "Hunter’s Bow", description: "near, far, 100 coins, 1 weight", category: "Weapons" },
  {
    name: "Crossbow",
    description: "near, +1 damage, reload, 35 coins, 3 weight",
    category: "Weapons",
  },
  { name: "Bundle of Arrows", description: "3 ammo, 1 coin, 1 weight", category: "Weapons" },
  { name: "Elven Arrows", description: "4 ammo, 20 coins, 1 weight", category: "Weapons" },
  { name: "Club, Shillelagh", description: "close, 1 coin, 2 weight", category: "Weapons" },
  { name: "Staff", description: "close, two-handed, 1 coin, 1 weight", category: "Weapons" },
  { name: "Dagger, Shiv, Knife", description: "hand, 2 coins, 1 weight", category: "Weapons" },
  { name: "Throwing Dagger", description: "thrown, near, 1 coin, 0 weight", category: "Weapons" },
  {
    name: "Short Sword, Axe, Warhammer, Mace",
    description: "close, 8 coins, 1 weight",
    category: "Weapons",
  },
  { name: "Spear", description: "reach, thrown, near, 5 coins, 1 weight", category: "Weapons" },
  {
    name: "Long Sword, Battle Axe, Flail",
    description: "close, +1 damage, 15 coins, 2 weight",
    category: "Weapons",
  },
  {
    name: "Halberd",
    description: "reach, +1 damage, two-handed, 9 coins, 2 weight",
    category: "Weapons",
  },
  { name: "Rapier", description: "close, precise, 25 coins, 1 weight", category: "Weapons" },
  {
    name: "Dueling Rapier",
    description: "close, 1 piercing, precise, 50 coins, 2 weight",
    category: "Weapons",
  },
  {
    name: "n Armor",
    description:
      "It protects you from harm and absorbs damage. When you take damage, subtract your armor from the total. If you have more than one item with n Armor, only the highest value counts.",
    category: "Armor Tags",
  },
  {
    name: "+n Armor",
    description: "It protects you and stacks with other armor. Add its value to your total armor.",
    category: "Armor Tags",
  },
  {
    name: "Clumsy",
    description:
      "It’s tough to move around with. -1 ongoing while using it. This penalty is cumulative.",
    category: "Armor Tags",
  },

  // Armor
  {
    name: "Leather, Chainmail",
    description: "1 armor, worn, 10 coins, 1 weight",
    category: "Armor",
  },
  {
    name: "Scale Mail",
    description: "2 armor, worn, clumsy, 50 coins, 3 weight",
    category: "Armor",
  },
  { name: "Plate", description: "3 armor, worn, clumsy, 350 coins, 4 weight", category: "Armor" },
  { name: "Shield", description: "+1 armor, 15 coins, 2 weight", category: "Armor" },

  // Dungeon gear
  {
    name: "Adventuring Gear",
    description:
      "5 uses, 20 coins, 1 weight\n\nAdventuring gear is a collection of useful mundane items such as chalk, poles, spikes, ropes, etc. When you rummage through your adventuring gear for some useful mundane item, you find what you need and mark off a use.",
    category: "Dungeon Gear",
  },
  {
    name: "Bandages",
    description:
      "3 uses, slow, 5 coins, 0 weight\n\nWhen you have a few minutes to bandage someone else’s wounds, heal them of 4 damage and expend a use.",
    category: "Dungeon Gear",
  },
  {
    name: "Poultices and Herbs",
    description:
      "2 uses, slow, 10 coins, 1 weight\n\nWhen you carefully treat someone’s wounds with poultices and herbs, heal them of 7 damage and expend a use.",
    category: "Dungeon Gear",
  },
  {
    name: "Healing Potion",
    description:
      "50 coins, 0 weight\n\nWhen you drink an entire healing potion, heal yourself of 10 damage or remove one debility, your choice.",
    category: "Dungeon Gear",
  },
  {
    name: "Keg of Dwarven Stout",
    description:
      "10 coins, 4 weight\n\nWhen you open a keg of dwarven stout and let everyone drink freely, take +1 to your Carouse roll. If you drink a whole keg yourself, you are very, very drunk.",
    category: "Dungeon Gear",
  },
  {
    name: "Bag of Books",
    description:
      "5 uses, 10 coins, 2 weight\n\nWhen your bag of books contains just the right book for the subject you’re spouting lore on, consult the book, mark off a use, and take +1 to your roll.",
    category: "Dungeon Gear",
  },
  {
    name: "Antitoxin",
    description:
      "10 coins, 0 weight\n\nWhen you drink antitoxin, you’re cured of one poison affecting you.",
    category: "Dungeon Gear",
  },
  {
    name: "Dungeon Rations",
    description: "Ration, 5 uses, 3 coins, 1 weight\n\nNot tasty, but not bad either.",
    category: "Dungeon Gear",
  },
  {
    name: "Personal Feast",
    description: "Ration, 1 use, 10 coins, 1 weight\n\nOstentatious to say the least.",
    category: "Dungeon Gear",
  },
  {
    name: "Dwarven Hardtack",
    description:
      "Requires Dwarf, ration, 7 uses, 3 coins, 1 weight\n\nDwarves say it tastes like home. Everyone else says it tastes like home, if home is a hog farm, and on fire.",
    category: "Dungeon Gear",
  },
  {
    name: "Elven Bread",
    description:
      "Ration, 7 uses, 10 coins, 1 weight\n\nOnly the greatest of elf-friends are treated to this rare delicacy.",
    category: "Dungeon Gear",
  },
  {
    name: "Halfling Pipeleaf",
    description:
      "6 uses, 5 coins, 0 weight\n\nWhen you share halfling pipeleaf with someone, expend two uses and take +1 forward to parley with them.",
    category: "Dungeon Gear",
  },

  // Poisons
  {
    name: "Oil of Tagit",
    description: "Dangerous, applied, 15 coins, 0 weight\n\nThe target falls into a light sleep.",
    category: "Poisons",
  },
  {
    name: "Bloodweed",
    description:
      "Dangerous, touch, 12 coins, 0 weight\n\nUntil cured, whenever the afflicted rolls damage, they roll an additional d4 and subtract that result from their normal damage.",
    category: "Poisons",
  },
  {
    name: "Goldenroot",
    description:
      "Dangerous, applied, 20 coins, 0 weight\n\nThe target treats the next creature they see as a trusted ally, until proved otherwise.",
    category: "Poisons",
  },
  {
    name: "Serpent’s Tears",
    description:
      "Dangerous, touch, 10 coins, 0 weight\n\nAnyone dealing damage against the target rolls twice and takes the better result.",
    category: "Poisons",
  },

  // Services
  {
    name: "A week’s stay at a peasant inn",
    description: "14-Charisma coins",
    category: "Services",
  },
  {
    name: "A week’s stay at a civilized inn",
    description: "30-Charisma coins",
    category: "Services",
  },
  {
    name: "A week’s stay at the fanciest inn in town",
    description: "43-Charisma coins",
    category: "Services",
  },
  { name: "A week’s unskilled mundane labor", description: "10 coins", category: "Services" },
  {
    name: "A month’s pay for enlistment in an army",
    description: "30 coins",
    category: "Services",
  },
  {
    name: "A custom item from a blacksmith",
    description: "Base Item + 50 coins",
    category: "Services",
  },
  { name: "A night’s “companionship”", description: "20-Charisma coins", category: "Services" },
  { name: "An evening of song and dance", description: "18-Charisma coins", category: "Services" },
  {
    name: "Escort for a day along a bandit-infested road",
    description: "20 coins",
    category: "Services",
  },
  {
    name: "Escort for a day along a monster-infested road",
    description: "54 coins",
    category: "Services",
  },
  { name: "A run-of-the-mill killing", description: "5 coins", category: "Services" },
  { name: "An assassination", description: "120 coins", category: "Services" },
  { name: "Healing from a chirurgeon", description: "5 coins", category: "Services" },
  { name: "A month’s prayers for the departed", description: "1 coin", category: "Services" },
  {
    name: "Repairs to a mundane item",
    description: "25% of the item’s cost",
    category: "Services",
  },

  // Meals
  { name: "A hearty meal for one", description: "1 coin", category: "Meals" },
  { name: "A poor meal for a family", description: "1 coin", category: "Meals" },
  { name: "A feast", description: "15 coins per person", category: "Meals" },

  // Transport
  {
    name: "Cart and Donkey, sworn to carry your burdens",
    description: "50 coins, load 20",
    category: "Transport",
  },
  { name: "Horse", description: "75 coins, load 10", category: "Transport" },
  { name: "Warhorse", description: "400 coins, load 12", category: "Transport" },
  { name: "Wagon", description: "150 coins, load 40", category: "Transport" },
  { name: "Barge", description: "50 coins, load 15", category: "Transport" },
  { name: "River boat", description: "150 coins, load 20", category: "Transport" },
  { name: "Merchant ship", description: "5,000 coins, load 200", category: "Transport" },
  { name: "War ship", description: "20,000 coins, load 100", category: "Transport" },
  { name: "Passage on a safe route", description: "1 coin", category: "Transport" },
  { name: "Passage on a tough route", description: "10 coins", category: "Transport" },
  { name: "Passage on a dangerous route", description: "100 coins", category: "Transport" },

  // Land and Buildings
  { name: "A hovel", description: "20 coins", category: "Land and Buildings" },
  { name: "A cottage", description: "500 coins", category: "Land and Buildings" },
  { name: "A house", description: "2,500 coins", category: "Land and Buildings" },
  { name: "A mansion", description: "50,000 coins", category: "Land and Buildings" },
  { name: "A keep", description: "75,000 coins", category: "Land and Buildings" },
  { name: "A castle", description: "250,000 coins", category: "Land and Buildings" },
  { name: "A grand castle", description: "1,000,000 coins", category: "Land and Buildings" },
  { name: "A month’s upkeep", description: "1% of the cost", category: "Land and Buildings" },

  // Bribes
  { name: "A peasant dowry", description: "20-Charisma coins", category: "Bribes" },
  {
    name: "“Protection” for a small business",
    description: "100-Charisma coins",
    category: "Bribes",
  },
  { name: "A government bribe", description: "50-Charisma coins", category: "Bribes" },
  { name: "A compelling bribe", description: "80-Charisma coins", category: "Bribes" },
  { name: "An offer you can’t refuse", description: "500-Charisma coins", category: "Bribes" },

  // Gifts and Finery
  { name: "A peasant gift", description: "1 coin", category: "Gifts and Finery" },
  { name: "A fine gift", description: "55 coins", category: "Gifts and Finery" },
  { name: "A noble gift", description: "200 coins", category: "Gifts and Finery" },
  { name: "A ring or cameo", description: "75 coins", category: "Gifts and Finery" },
  { name: "Finery", description: "105 coins", category: "Gifts and Finery" },
  { name: "A fine tapestry", description: "350+ coins", category: "Gifts and Finery" },
  { name: "A crown fit for a king", description: "5,000 coins", category: "Gifts and Finery" },

  // Hoards
  { name: "A goblin’s stash", description: "2 coins", category: "Hoards" },
  { name: "A lizardman’s trinkets", description: "5 coins", category: "Hoards" },
  { name: "A “priceless” sword", description: "80 coins", category: "Hoards" },
  { name: "An orc warchief’s tribute", description: "250 coins", category: "Hoards" },
  { name: "A dragon’s mound of coins and gems", description: "130,000 coins", category: "Hoards" },

  // Monster Tags: Basic
  {
    name: "Magical",
    description: "It is by nature magical through and through.",
    category: "Monster Tags: Basic",
  },
  {
    name: "Devious",
    description: "Its main danger lies beyond the simple clash of battle.",
    category: "Monster Tags: Basic",
  },
  {
    name: "Amorphous",
    description: "Its anatomy and organs are bizarre and unnatural.",
    category: "Monster Tags: Basic",
  },
  {
    name: "Organized",
    description:
      "It has a group structure that aids it in survival. Defeating one may cause the wrath of others. One may sound an alarm. ",
    category: "Monster Tags: Basic",
  },
  {
    name: "Intelligent",
    description:
      "It’s smart enough that some individuals pick up other skills. The GM can adapt the monster by adding tags to reflect specific training, like a mage or warrior.",
    category: "Monster Tags: Basic",
  },
  {
    name: "Hoarder",
    description: "It almost certainly has treasure.",
    category: "Monster Tags: Basic",
  },
  {
    name: "Stealthy",
    description: "It can avoid detection and prefers to attack with the element of surprise.",
    category: "Monster Tags: Basic",
  },
  {
    name: "Terrifying",
    description: "Its presence and appearance evoke fear.",
    category: "Monster Tags: Basic",
  },
  {
    name: "Cautious",
    description: "It prizes survival over aggression.",
    category: "Monster Tags: Basic",
  },
  { name: "Construct", description: "It was made, not born", category: "Monster Tags: Basic" },
  { name: "Planar", description: "It’s from beyond this world", category: "Monster Tags: Basic" },

  // Monster Tags: Organization
  {
    name: "Horde",
    description: "Where there’s one, there’s more. A lot more.",
    category: "Monster Tags: Organization",
  },
  {
    name: "Group",
    description: "Usually seen in small numbers, 3–6 or so.",
    category: "Monster Tags: Organization",
  },
  {
    name: "Solitary",
    description: "It lives and fights alone.",
    category: "Monster Tags: Organization",
  },

  // Monster Tags: Size
  {
    name: "Tiny",
    description: "It’s much smaller than a halfling.",
    category: "Monster Tags: Size",
  },
  { name: "Small", description: "It’s about halfling size.", category: "Monster Tags: Size" },
  {
    name: "Large",
    description: "It’s much bigger than a human, about as big as a cart.",
    category: "Monster Tags: Size",
  },
  {
    name: "Huge",
    description: "It’s as big as a small house or larger.",
    category: "Monster Tags: Size",
  },

  // Steading Tags: Prosperity
  {
    name: "Dirt",
    description:
      "Nothing for sale, nobody has more than they need (and they’re lucky if they have that). Unskilled labor is cheap.",
    category: "Steading Tags: Prosperity",
  },
  {
    name: "Poor",
    description:
      "Only the bare necessities for sale. Weapons are scarce unless the steading is heavily defended or militant. Unskilled labor is readily available.",
    category: "Steading Tags: Prosperity",
  },
  {
    name: "Moderate",
    description: "Most mundane items are available. Some types of skilled laborers.",
    category: "Steading Tags: Prosperity",
  },
  {
    name: "Wealthy",
    description:
      "Any mundane item can be found for sale. Most kinds of skilled laborers are available, but demand is high for their time.",
    category: "Steading Tags: Prosperity",
  },
  {
    name: "Rich",
    description: "Mundane items and more, if you know where to find them.",
    category: "Steading Tags: Prosperity",
  },

  // Steading Tags: Population
  {
    name: "Exodus",
    description: "The steading has lost its population and is on the verge of collapse.",
    category: "Steading Tags: Population",
  },
  {
    name: "Shrinking",
    description: "The population is less than it once was. Buildings stand empty.",
    category: "Steading Tags: Population",
  },
  {
    name: "Steady",
    description:
      "The population is in line with the current size of the steading. Some slow growth.",
    category: "Steading Tags: Population",
  },
  {
    name: "Growing",
    description: "More people than there are buildings.",
    category: "Steading Tags: Population",
  },
  {
    name: "Booming",
    description: "Resources are stretched thin trying to keep up with the number of people.",
    category: "Steading Tags: Population",
  },

  // Steading Tags: Defenses
  {
    name: "None",
    description: "Clubs, torches, farming tools.",
    category: "Steading Tags: Defenses",
  },
  {
    name: "Militia",
    description:
      "There are able-bodied men and women with worn weapons ready to be called, but no standing force.",
    category: "Steading Tags: Defenses",
  },
  {
    name: "Watch",
    description:
      "There are a few watchers posted who look out for trouble and settle small problems, but their main role is to summon the militia.",
    category: "Steading Tags: Defenses",
  },
  {
    name: "Guard",
    description:
      "There are armed defenders at all times with a total pool of less than 100 (or equivalent). There is always at least one armed patrol about the steading.",
    category: "Steading Tags: Defenses",
  },
  {
    name: "Garrison",
    description:
      "There are armed defenders at all times with a total pool of 100–300 (or equivalent). There are multiple armed patrols at all times.",
    category: "Steading Tags: Defenses",
  },
  {
    name: "Battalion",
    description:
      "As many as 1,000 armed defenders (or equivalent). The steading has manned maintained defenses as well.",
    category: "Steading Tags: Defenses",
  },
  {
    name: "Legion",
    description:
      "The steading is defended by thousands of armed soldiers (or equivalent). The steading’s defenses are intimidating.",
    category: "Steading Tags: Defenses",
  },

  // Steading Tags: Other
  {
    name: "Safe",
    description:
      "Outside trouble doesn’t come here until the players bring it. Idyllic and often hidden, if the steading would lose or degrade another beneficial tag get rid of safe instead.",
    category: "Steading Tags: Other",
  },
  {
    name: "Religion",
    description: "The listed deity is revered here.",
    category: "Steading Tags: Other",
  },
  {
    name: "Exotic",
    description:
      "There are goods and services available here that aren’t available anywhere else nearby. List them.",
    category: "Steading Tags: Other",
  },
  {
    name: "Resource",
    description:
      "The steading has easy access to the listed resource (e.g., a spice, a type of ore, fish, grapes). That resource is significantly cheaper.",
    category: "Steading Tags: Other",
  },
  {
    name: "Need",
    description:
      "The steading has an acute or ongoing need for the listed resource. That resource sells for considerably more.",
    category: "Steading Tags: Other",
  },
  {
    name: "Oath",
    description:
      "The steading has sworn oaths to the listed steadings. These oaths are generally of fealty or support, but may be more specific.",
    category: "Steading Tags: Other",
  },
  {
    name: "Trade",
    description: "The steading regularly trades with the listed steadings.",
    category: "Steading Tags: Other",
  },
  {
    name: "Market",
    description:
      "Everyone comes here to trade. On any given day the available items may be far beyond their prosperity. +1 to supply.",
    category: "Steading Tags: Other",
  },
  {
    name: "Enmity",
    description: "The steading holds a grudge against the listed steadings.",
    category: "Steading Tags: Other",
  },
  {
    name: "History",
    description:
      "Something important once happened here, choose one and detail or make up your own--battle, miracle, myth, romance, tragedy.",
    category: "Steading Tags: Other",
  },
  {
    name: "Arcane",
    description:
      "Someone in town can cast arcane spells for a price. This tends to draw more arcane casters, +1 to recruit when you put out word you’re looking for an adept.",
    category: "Steading Tags: Other",
  },
  {
    name: "Divine",
    description:
      "There is a major religious presence, maybe a cathedral or monastery. They can heal and maybe even raise the dead for a donation or resolution of a quest. Take +1 to recruit priests here.",
    category: "Steading Tags: Other",
  },
  {
    name: "Guild",
    description:
      "The listed type of guild has a major presence (and usually a fair amount of influence). If the guild is closely associated with a type of hireling, +1 to recruit that type of hireling.",
    category: "Steading Tags: Other",
  },
  {
    name: "Personage",
    description:
      "There’s a notable person who makes their home here. Give them a name and a short note on why they’re notable.",
    category: "Steading Tags: Other",
  },
  {
    name: "Dwarven",
    description:
      "The steading is significantly or entirely dwarves. Dwarven goods are more common and less expensive than they typically are.",
    category: "Steading Tags: Other",
  },
  {
    name: "Elven",
    description:
      "The steading is significantly or entirely elves. Elven goods are more common and less expensive than they typically are.",
    category: "Steading Tags: Other",
  },
  {
    name: "Craft",
    description:
      "The steading is known for excellence in the listed craft. Items of their chosen craft are more readily available here or of higher quality than found elsewhere.",
    category: "Steading Tags: Other",
  },
  {
    name: "Lawless",
    description: "Crime is rampant; authority is weak.",
    category: "Steading Tags: Other",
  },
  {
    name: "Blight",
    description: "The steading has a recurring problem, usually a type of monster.",
    category: "Steading Tags: Other",
  },
  {
    name: "Power",
    description: "The steading holds sway of some type. Typically political, divine, or arcane.",
    category: "Steading Tags: Other",
  },
]

export default data
