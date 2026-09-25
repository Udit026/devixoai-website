import Reveal from "../components/Reveal";

export default function PageHeader({ title, subtitle }) {
  return (
    <section className="section pb-10 text-center">
      <Reveal>
        <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-4 max-w-xl text-offwhite/60">{subtitle}</p>}
      </Reveal>
    </section>
  );
}
