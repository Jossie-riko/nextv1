interface PropsType {
  nombre: string;
}

export default function Props({ nombre }: PropsType) {
  return <div>Componente Props: {nombre}</div>;
}
