import { MethodPageShell } from "@/components/method-page/MethodPageShell";

export const metadata = {
  title: "Custom Embroidery Services for Polos, Caps & Jackets | Yoode",
  description:
    "Explore custom embroidery at Yoode for logos and monograms on polos, caps, jackets and more. Share your design for digitising and request a quote, with delivery across India.",
};

export default function Page() {
  return <MethodPageShell slug="embroidery" lightHero={true} />;
}
