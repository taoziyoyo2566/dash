"use client";
import { useEffect, useState } from "react";

type Site = { id: string; domain: string; usersCount: number; createdAt: string };

export default function Dashboard() {
  const [sites, setSites] = useState<Site[]>([]);

  useEffect(() => {
    fetch("/api/sites")
      .then((r) => r.json())
      .then(setSites)
      .catch(() => {
        // 本地 API 出错时的兜底假数据（可删）
        setSites([{ id: "1", domain: "notes.example.com", usersCount: 1, createdAt: "2025-08-26" }]);
      });
  }, []);

  return (
    <main className="max-w-6xl mx-auto p-6 space-y-6">
      {/* 顶部标题 + 按钮 */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <button className="px-3 py-2 rounded-lg bg-indigo-600 text-white hover:opacity-90">
          Add Site
        </button>
      </div>

      {/* Integrations 卡片区 */}
      <section>
        <h2 className="text-sm text-gray-500 mb-3">Integrations &amp; Extensions</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {["Chrome", "Telegram", "WeChat (soon)", "Lark (soon)", "Discord (soon)"].map((k) => (
            <div key={k} className="border rounded-xl p-4 flex items-center justify-between">
              <div className="font-medium">{k}</div>
              <span className="text-xs rounded-full px-2 py-0.5 bg-gray-100">
                {/soon/i.test(k) ? "Soon" : "Live"}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 站点列表 */}
      <section className="space-y-3">
        {sites.map((s) => (
          <div key={s.id} className="border rounded-xl p-4 flex items-center justify-between">
            <div>
              <a
                className="font-medium hover:underline"
                href={`https://${s.domain}`}
                target="_blank"
                rel="noreferrer"
              >
                https://{s.domain}
              </a>
              <div className="text-sm text-gray-500">
                {s.usersCount} users · {s.createdAt}
              </div>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-2 rounded-lg bg-indigo-600 text-white">One-Click AI Config</button>
              <button className="px-3 py-2 rounded-lg border">Resync</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}