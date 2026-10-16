import { Figure, Shop, Home, Ground, Motorbike, Bubble } from './Stick';

// "One neighbourhood": the four people Jirani OS serves, drawn in the same style as the rest of the site.
export function NeighboursScene() {
  const F = 250;
  return (
    <svg viewBox="0 70 420 222" role="img" aria-label="Neighbours: a shopper, a shop owner, a rider and a property owner, all on Jirani OS" className="w-full">
      <Ground w={420} y={F} />
      <Home x={14} y={F} />
      <Figure who="njeri" x={112} y={F} pose="wave" scale={0.95} />
      <Shop x={150} y={F} />
      <Figure who="baraka" x={248} y={F} pose="serve" scale={0.95} />
      <Figure who="wanjiru" x={300} y={F} flip pose="phone" scale={0.95} />
      <Motorbike x={368} y={F}><Figure who="otieno" x={4} y={-12} pose="ride" /></Motorbike>
      <Bubble x={112} y={118} text="Mama Njeri" show k={0.6} />
      <Bubble x={248} y={118} text="Baraka" show k={0.6} />
      <Bubble x={350} y={150} text="Otieno" show k={0.6} />
    </svg>
  );
}
