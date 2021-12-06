import { Link, Text, Image } from "@chakra-ui/react"
import Work, { WorkBody, WorkHeader, WorkSectionTitle } from "../../components/App/Work"
import Code from "../../components/App/Code"

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
            thumbnailPath="/works/blackjack/thumbnail.png"
            tags={["React", "Node", "Figma"]}

        />
        <WorkBody>
            <Text>Still in progress project I started to have a playground where I could use some OOP and design patterns I was learning while reading the book <Link href="https://www.google.fr/books/edition/Head_First_Design_Patterns/GGpXN9SMELMC?hl=en&gbpv=0" isExternal>Head First Design Patterns</Link>.</Text>

            <WorkSectionTitle>The concept</WorkSectionTitle>
            <Text>
                I wanted to make a website where you can practice cards counting and learn Blackjack&apos;s <Link href="https://www.google.com/search?q=blackjack+basic+strategy&sxsrf=AOaemvICaoQDqUTqom0bkjPQIT7o9eMf7g:1638461590142&tbm=isch&source=iu&ictx=1&fir=9ecNaKcMwKueKM%252CFJJpc9K9HuuwtM%252C_%253BgOXUgfG6kkw2kM%252CERAR2N9JmUVHxM%252C_%253BB4sYAwdcAeUYMM%252ClHCAqlvnBnNITM%252C_%253BxW8KrbvlBoFzpM%252Cbub4DrQ3zR3uwM%252C_%253BxTsBsDa1vupN1M%252C-1wX5bRkO5liRM%252C_%253BL3y1Cw4473Z6OM%252CcduBXyAZGznKpM%252C_%253BmtjrOedLn8oIYM%252CG5nTxIVipoDqvM%252C_%253BL76J2jABzHNbFM%252CsM1ru_4L9EPQPM%252C_%253B93fCHUux7CuT8M%252CW44aFDFIeiYL9M%252C_%253B21NrloYBJecSIM%252CERAR2N9JmUVHxM%252C_%253ByDevxKeXPl__OM%252CUY4CFJOlcfmwxM%252C_%253BeCgv6x8xGt5TLM%252ClHCAqlvnBnNITM%252C_%253B5qgH0WYlpV8jAM%252CQVgwZG8Rb3twVM%252C_%253BcISjj_La7tDOAM%252CFMlmu_jGckL59M%252C_%253BhpXHb38CoxCc6M%252CP3v7cxzfb6C2dM%252C_%253Bzd0RCfBYF0s6xM%252CRclB3xtvirqUwM%252C_%253BU_i7LL_OF79BpM%252CAndx1z5Kfo4yZM%252C_%253BQUPIuEv1lTdWOM%252CZcILD5JpWSCkhM%252C_%253BqoWBhIsYb-HO-M%252CSfP73Nz3QAov0M%252C_%253BoHflMitdCyNkOM%252CTd6w-HWN-ixzhM%252C_%253Bk6c3biKXTOXLuM%252CHc5MHFt775LkOM%252C_%253BWOezg5II_XeFGM%252CEsX2Y3QIfQDsrM%252C_%253Btrnn-R39yveHSM%252CnKNCdmBw3adiAM%252C_%253BdR3rNOxU3smttM%252CMWYU1VJpuVbPjM%252C_&vet=1&usg=AI4_-kSOSFqvYYg2nnfWLxk4yDI4cFLP9A&sa=X&ved=2ahUKEwjauruIwcX0AhUFzoUKHZqDBJcQ9QF6BAgcEAE#imgrc=xTsBsDa1vupN1M" isExternal>basic stratery</Link> while playing the game.
            </Text>
            <Text>
                Orgiginally I started developing the website with Python and Flask, but latter switched to TS / JS and React.
            </Text>

            <WorkSectionTitle>Some design components</WorkSectionTitle>
            <Image
                w="100%"
                src="/works/blackjack/player_hand.png"
                alt="Consistency b"
                cursor="pointer"
            />
            <Image
                w="100%"
                src="/works/blackjack/betting.png"
                alt="Consistency b"
                cursor="pointer"
            />
            <Image
                w="100%"
                src="/works/blackjack/game.png"
                alt="Consistency b"
                cursor="pointer"
            />

            <WorkSectionTitle>Some code snippets</WorkSectionTitle>
            <Text>/models/hand.py</Text>
            <Code code={handCode} language="python"/>
        </WorkBody>
    </Work>
)

export default WorkBlackjack