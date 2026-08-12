import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { career } from "@/lib/data";

export function Career() {
  return (
    <section id="trajetoria" className="relative py-20 border-t border-off-white/10">
      <Container className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-mint mb-4">
            Trajetória
          </p>
          <h2 className="font-heading font-medium text-off-white text-[26px] md:text-[28px] leading-tight tracking-tight max-w-[280px]">
            Da Odontologia à liderança acadêmica nacional.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-7 md:col-start-6">
          <table className="w-full border-collapse">
            <tbody>
              {career.map((item, i) => (
                <tr
                  key={item.range}
                  className={i < career.length - 1 ? "border-b border-off-white/[0.08]" : ""}
                >
                  <td className="whitespace-nowrap py-3.5 pr-4 font-heading text-sm text-mint">
                    {item.range}
                  </td>
                  <td className="py-3.5 px-4 text-[15px] text-off-white">
                    {item.role}
                  </td>
                  <td className="py-3.5 text-right text-xs uppercase tracking-[0.06em] text-muted whitespace-nowrap">
                    {item.org}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Container>
    </section>
  );
}
