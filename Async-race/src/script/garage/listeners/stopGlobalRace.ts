import { reset } from '../functions/reset';

export function stopGlobalRace(): void {
  document.addEventListener('click', (event) => {
      const target = event.target as HTMLButtonElement;
      if (target.id === 'reset') {
          reset();
      }
  });
}
