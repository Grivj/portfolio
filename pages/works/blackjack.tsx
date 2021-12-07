import { Link, Text } from "@chakra-ui/react"
import Image from "next/image"
import Code from "../../components/App/Code"
import Work, { WorkBody, WorkHeader, WorkSectionTitle } from "../../components/App/Work"

const handCode = `
from dataclasses import dataclass, field
from typing import List

from models.card import Card


@dataclass
class Hand:
    cards: List[Card] = field(default_factory=list)

    def clear(self) -> None:
        self.cards = []

    def add(self, card: Card) -> None:
        self.cards.append(card)

    @property
    def value(self) -> int:
        return sum(card.value for card in self.cards)

    def is_blackjack(self) -> bool:
        """
        - Is the hand a blackjack?
        For the hand to be counted as a blackjack:
            the total value should be 21, and,
            the total number of cards should be two.
        """
        return len(self.cards) == 2 and self.value == 21

    def is_busted(self) -> bool:
        """
        - Is the hand busted?
        For the hand to be counter busted:
            the total best_value should exceed 21.
        """
        return self.best_value > 21

    @property
    def best_value(self) -> int:
        """
        - What is the best value of the hand?
        Compute the best value possible,
        taking into account the fact that an Ace can be of value 11 or 1.
        """
        if self.value > 21 and self.has_aces():
            soft_value = self.value
            for _ in range(self.has_aces()):
                soft_value -= 10
                if soft_value <= 21:
                    return soft_value
            return soft_value
        return self.value

    def has_aces(self) -> int:
        """Returns the number of aces in the hand."""
        return sum(1 for card in self.cards if card.is_ace())

    def __len__(self) -> int:
        return len(self.cards)
`.trim()


const WorkBlackjack = () => (
    <Work>
        <WorkHeader
            title="Blackjack card counting trainer"
            intro="[In Progress] Card counting trainer for Blackjack"
            thumbnailPath="/works/blackjack/thumbnail.webp"
            tags={["React.js", "Node.js", "TypeScript", "Figma"]}

        />
        <WorkBody>
            <Text fontStyle="italic">Still in progress</Text>
            <br />

            <Text>A playground project I started to put in practice design patterns I was learning while reading the book <Link href="https://www.google.fr/books/edition/Head_First_Design_Patterns/GGpXN9SMELMC?hl=en&gbpv=0" isExternal>Head First Design Patterns</Link>.</Text>

            <WorkSectionTitle>The concept</WorkSectionTitle>
            <Text>The concept is a website where you can practice Blackjack basic strategy and card counting while playing the game.</Text>
            <Text>Originally I started developing the website in Flask but recently switched to React.js.</Text>

            <WorkSectionTitle>Some design components</WorkSectionTitle>
            <Image
                height="823px"
                width="946px"
                layout="responsive"
                src="/works/blackjack/player_hand.webp"
                alt="Player hand"
            />
            <Image
                height="823px"
                width="946px"
                layout="responsive"
                src="/works/blackjack/betting.webp"
                alt="betting screen"
            />
            <Image
                height="681px"
                width="946px"
                layout="responsive"
                src="/works/blackjack/game.webp"
                alt="Game screen"
            />

            <WorkSectionTitle>Some code snippets</WorkSectionTitle>
            <Text fontFamily="Cascadia Code" opacity="0.5" fontStyle="italic">/models/hand.py</Text>
            <Code code={handCode} language="python" />
        </WorkBody>
    </Work >
)

export default WorkBlackjack