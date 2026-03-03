import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SIGNUP_URL } from "@/lib/constants";

interface ComparisonRow {
  task: string;
  diy: string;
  squadtrip: string;
}

interface ComparisonTableProps {
  headline?: string;
  intro?: string;
  columnHeaders?: [string, string, string];
  rows: ComparisonRow[];
  ctaText?: string;
  ctaHref?: string;
}

export function ComparisonTable({
  headline = "Why Not Just DIY?",
  intro = "You could manage everything yourself. Here's what that looks like.",
  columnHeaders = ["Task", "DIY", "SquadTrip"],
  rows,
  ctaText = "Try SquadTrip free",
  ctaHref = SIGNUP_URL,
}: ComparisonTableProps) {
  return (
    <section className="comparison-section">
      <div className="comparison-container">
        <ScrollReveal>
          <h2>{headline}</h2>
          <p className="comparison-intro">{intro}</p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>{columnHeaders[0]}</th>
                  <th>{columnHeaders[1]}</th>
                  <th>{columnHeaders[2]}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.task}>
                    <td>{row.task}</td>
                    <td>
                      <span className="compare-x">&times;</span>
                      {row.diy}
                    </td>
                    <td>
                      <span className="compare-check">&check;</span>
                      {row.squadtrip}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        <div className="cta-center">
          <a href={ctaHref} className="btn-primary">
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}
