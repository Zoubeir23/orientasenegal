import { DirectoryPage } from "@/components/ui/directory-page";
import { formations } from "@/data/formations";

export default function Home() {
  return <DirectoryPage formations={formations} />;
}
