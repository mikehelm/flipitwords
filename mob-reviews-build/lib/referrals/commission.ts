import { CommissionStatus, ReferralType } from "@prisma/client";

import { prisma } from "@/lib/db/prisma";

const defaultValues: Record<ReferralType, number> = {
  MEMBER_INVITE: 10,
  FRANCHISE_SALE: 10,
  RESTAURANT_ADD: 10,
  OPERATOR_RECRUIT: 10
};

export async function calculateCommission(referralChainId: string, baseAmount: number) {
  const chain = await prisma.referralChain.findUnique({ where: { id: referralChainId } });
  if (!chain) throw new Error("Referral chain not found");

  const rule = await prisma.commissionRule.findUnique({ where: { referralType: chain.referralType } });
  const percent = rule?.value ?? defaultValues[chain.referralType];
  const amount = (baseAmount * percent) / 100;

  return prisma.commission.create({
    data: {
      referralChainId,
      amount,
      status: CommissionStatus.CALCULATED
    }
  });
}
