"use client";

import { useEffect, useMemo, useState } from "react";
import ReactFlow, { Background, Controls, Edge, Node } from "reactflow";
import "reactflow/dist/style.css";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Referral = {
  id: string;
  referrer: { id: string; name: string; type: string };
  referee: { id: string; name: string; type: string };
  commissions: Array<{ amount: number; status: string }>;
};

export function ReferralTree() {
  const [referrals, setReferrals] = useState<Referral[]>([]);

  useEffect(() => {
    fetch("/api/referrals")
      .then((res) => res.json())
      .then((json) => setReferrals(json.data ?? []));
  }, []);

  const { nodes, edges, totalCommission } = useMemo(() => {
    const nodeMap = new Map<string, Node>();
    const nextEdges: Edge[] = [];
    let index = 0;
    let commission = 0;

    for (const item of referrals) {
      if (!nodeMap.has(item.referrer.id)) {
        nodeMap.set(item.referrer.id, {
          id: item.referrer.id,
          position: { x: (index % 4) * 220, y: Math.floor(index / 4) * 120 },
          data: { label: `${item.referrer.name} (${item.referrer.type})` }
        });
        index += 1;
      }

      if (!nodeMap.has(item.referee.id)) {
        nodeMap.set(item.referee.id, {
          id: item.referee.id,
          position: { x: (index % 4) * 220, y: Math.floor(index / 4) * 120 },
          data: { label: `${item.referee.name} (${item.referee.type})` }
        });
        index += 1;
      }

      nextEdges.push({ id: item.id, source: item.referrer.id, target: item.referee.id, label: item.commissions[0] ? `$${item.commissions[0].amount}` : undefined });
      commission += item.commissions.reduce((sum, c) => sum + c.amount, 0);
    }

    return {
      nodes: Array.from(nodeMap.values()),
      edges: nextEdges,
      totalCommission: commission
    };
  }, [referrals]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Referral Tree</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-3 text-sm">Tracked commission: ${totalCommission.toFixed(2)}</p>
        <div className="h-[520px] rounded border">
          <ReactFlow nodes={nodes} edges={edges} fitView>
            <Background />
            <Controls />
          </ReactFlow>
        </div>
      </CardContent>
    </Card>
  );
}
