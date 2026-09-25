import { useLocation } from "react-router-dom";
import PageHeader from "./PageHeader";
import CTAStrip from "../components/CTAStrip";

export default function Solution() {
  const { pathname } = useLocation();
  const name = pathname.split("/").pop().replace(/-/g, " ");
  return (
    <>
      <PageHeader title={name.replace(/\b\w/g, (c) => c.toUpperCase())} subtitle="Purpose-built AI solution from DevixoAI India." />
      <CTAStrip />
    </>
  );
}
