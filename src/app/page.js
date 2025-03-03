import { Brand } from "./components/Brand";
import { HomePage } from "./components/HomePage";
import { Solutions } from "./components/Solutions";
import { Stories } from "./components/Stories";

export default function Home() {
  return (
    <>
      <HomePage />
      <Solutions />
      <Stories />
      <Brand />
    </>
  );
}
