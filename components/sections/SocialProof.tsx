import { SOCIAL_PROOF_STATS } from "@/lib/constants";

export function SocialProof() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {SOCIAL_PROOF_STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl sm:text-4xl font-bold text-purple">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
