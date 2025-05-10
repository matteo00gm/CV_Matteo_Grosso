import { Card, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";

type Certification = (typeof RESUME_DATA)["certification"][number];

interface CertificationDate {
  start: Certification["start"];
}

/**
 * Displays the certification period in a consistent format
 */
function CertPeriod({ start }: CertificationDate) {
  return (
    <div
      className="text-sm tabular-nums text-gray-500"
      aria-label={`Period: ${start}`}
    >
      {start}
    </div>
  );
}

interface CertificationItemProps {
  certification: Certification;
}

/**
 * Individual certification card component
 */
function CertificationItem({ certification }: CertificationItemProps) {
  const { title, start } = certification;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-x-2 text-base mt-2 text-foreground/80 print:text-[12px]">
          <div
            id={`certification-${title.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {title}
          </div>
          <CertPeriod start={start} />
        </div>
      </CardHeader>
    </Card>
  );
}

interface CertificationListProps {
  certification: readonly Certification[];
}

/**
 * Main certification section component
 * Renders a list of certification experiences
 */
export function Certification({ certification }: CertificationListProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="certification-section">
        Certifications
      </h2>
      <div
        className="space-y-4"
        role="feed"
        aria-labelledby="certification-section"
      >
        {certification.map((item) => (
          <article key={item.title} role="article">
            <CertificationItem certification={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
