# A project to map PTCGO codes to PokemonTCG.io API ids

Majority of the [Pokemon TCG Online](https://www.pokemon.com/us/pokemon-tcg/play-online/download/) codes map directly to [PokemonTCG.io](http://pokemontcg.io/) ids but there's a lot that don't, like the Trainer Kits, some special collections and so on. Also, some cards like secret rare trainers are missing from Pokemontcg.io.

This project aims to map every PTCGO card code into Pokemontcg.io ID. If certain card doesn't exist, I've manually downgraded them to same card of different rarity.

## Testing platform

For manual testing, there's `src/index.html`. Here, you can copy-paste contents of a CSV file from `cards/` and it will show the images as well as a list of cards that were not found.

The script will skip header line, empty lines and any lines with `no-entry`, `no-image` or `no-set` note.

## Notes codes

In `cards/*.csv` files, last column is called _notes_ and is used to provide programmatic extra information about the cards.

| note              | meaning                                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------------------- |
| downgrade         | Particular rarity does not exist so ID has been changed to match same card of different rarity.         |
| functionally-same | Some promo cards exist only as cards from regular sets. This notes that it's been matched to same card. |
| no-entry          | Card does not exist in the API.                                                                         |
| no-image          | API has an entry for the card but no image (shows back of the card).                                    |
| no-set            | API does not yet have any cards in the set that PTCGO has.                                              |

## Current status

**HeartGold and SoulSilver Series**

- [x] Call of Legends
- [x] HS Triumphant
- [x] HS Undaunted
- [x] HS Unleashed
- [x] HearthGold & SoulSilver
- [x] HeartGold & SoulSilver Black Star Promos

**Misc**

- [x] Red Star Promo

**Black & White Series**

- [x] Legendary Treasures
- [x] Plasma Blast
- [x] Plasma Freeze
- [x] Plasma Storm
- [x] Boundaries Crossed
- [x] Dragons Exalted
- [x] Dark Explorers
- [x] Next Destinies
- [x] Noble Victories
- [x] Emerging Powers
- [x] Dragon Vault
- [x] Black & White
- [x] Black & White Black Star Promos
- [x] Trainer Kit - Excadrill
- [x] Trainer Kit - Zoroark

**XY Series**

- [ ] Evolutions
- [ ] Steam Siege
- [ ] Fates Collide
- [ ] Generations
- [ ] BREAKPoint
- [ ] BREAKthrough
- [ ] Ancient Origins
- [ ] Roaring Skies
- [ ] Double Crisis
- [ ] Primal Clash
- [ ] Phantom Forces
- [ ] Furious Fists
- [ ] Flashfire
- [ ] XY
- [ ] Kalos Starter Set
- [ ] XY Black Star Promos
- [ ] XY Trainer Kit - Suicune
- [ ] XY Trainer Kit - Pikachu Libre
- [ ] XY Trainer Kit - Latias
- [ ] XY Trainer Kit - Latios
- [ ] Trainer Kit - Wigglytuff
- [ ] Trainer Kit - Bisharp
- [ ] Trainer Kit - Sylveon
- [ ] Trainer Kit - Noivern

**Sun & Moon Series**

- [ ] Cosmic Eclipse
- [ ] Hidden Fates
- [ ] Unified Minds
- [ ] Unbroken Bonds
- [ ] Detective Pikachu
- [ ] Team Up
- [ ] Lost Thunder
- [ ] Dragon Majesty
- [ ] Celestial Storm
- [ ] Forbidden Light
- [ ] Ultra Prism
- [ ] Crimson Invasion
- [ ] Shining Legends
- [ ] Burning Shadows
- [ ] Guardians Rising
- [ ] Sun & Moon
- [ ] Sun & Moon Black Star Promos
- [ ] Trainer Kit - Alolan Raichu
- [ ] Trainer Kit - Lycanroc

**Sword & Shield Series**

- [ ] Rebel Clash
- [x] Sword & Shield
- [x] Sword & Shield Black Star Promos

## Extra Notes

- Red Star Promos are numbered completely wrong. Luckily, most of them currently are Champions Festivals but _RSP 02_ can be either Champions Festival **or** Maxie's Hidden Ball Trick. Currently it always points to Champions Festival.
