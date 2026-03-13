import restaurantFixture from "@/prisma/fixtures/research-restaurant.json";
import influencerFixture from "@/prisma/fixtures/research-influencer.json";

export function getFixtureByType(type: string) {
  if (type === "INFLUENCER") return influencerFixture;
  return restaurantFixture;
}
