import { useAppContext } from "../contexto/AppContext";
import Props from "./props";

export default function Uno() {
  const { nombre } = useAppContext()!;

  return (
    <div>
      uno

      <Props nombre="este es un props" />
      {nombre}
    </div>
  );
}